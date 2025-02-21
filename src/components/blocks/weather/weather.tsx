import { useState, useCallback, useEffect } from "react";
import { Aside, SearchArea, SearchCircle, WeatherArea, Temp, InfoArea, Info, Loading } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { PiWindFill } from "react-icons/pi";
import { BsFillSunFill, BsCloudyFill, BsFillCloudRainFill, BsCloudFog2Fill } from "react-icons/bs";
import { RiLoaderFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from "axios";

type WeatherDataProps = {
    name: string;
  
    main: {
      temp: number;
      humidity: number;
    };
    sys: {
      country: string;
    };
    weather: {
      main: string;
    }[];
    wind: {
      speed: number;
    };
  }

function Weather () {
    const api_key = "0cc86d16bf572f78cdc96c096c7627e5";
    const api_Endpoint = "https://api.openweathermap.org/data/2.5/";

    const [searchCity, setSearchCity] = useState("");
    const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCurrentWeather = useCallback(async (lat: number, lon: number) => {
        const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
        const response = await axios.get(url);
        return response.data;
    }, [api_Endpoint, api_key]);

    const fetchWeatherData = async (city: string) => {
        try {
            const url = `${api_Endpoint}weather?q=${city}&appid=${api_key}&units=metric`;
            const searchResponse = await axios.get(url);
        
            const currentWeatherData: WeatherDataProps = searchResponse.data;
            return { currentWeatherData };
        } catch (error) {
            throw error;
        }
    };

    const handleSearch = async () => {
        if (searchCity.trim() === "") {
          return;
        }
    
        try {
            const { currentWeatherData } = await fetchWeatherData(searchCity);
            setWeatherData(currentWeatherData);
        } catch (error) {
        }
    };

    const iconChanger = (weather: string) => {
        let iconElement: React.ReactNode;
        let iconColor: string;
    
        switch (weather) {
          case "Rain":
            iconElement = <BsFillCloudRainFill />;
            iconColor = "#272829";
            break;
    
          case "Clear":
            iconElement = <BsFillSunFill />;
            iconColor = "#FFC436";
            break;
          case "Clouds":
            iconElement = <BsCloudyFill />;
            iconColor = "#102C57";
            break;
    
          case "Mist":
            iconElement = <BsCloudFog2Fill />;
            iconColor = "#279EFF";
            break;
          default:
            iconElement = <TiWeatherPartlySunny />;
            iconColor = "#7B2869";
        }
    
        return (
          <span className="icon" style={{ color: iconColor }}>
            {iconElement}
          </span>
        );
    };    

    useEffect(() => {
        const fetchData = async () => {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const [currentWeather] = await Promise.all([fetchCurrentWeather(latitude, longitude)]);
            setWeatherData(currentWeather);
            setIsLoading(true);
          });
        };
    
        fetchData();
      }, [fetchCurrentWeather]);

    return (
        <Aside>
            <SearchArea>
                <input
                    type="text"
                    placeholder="Введите город"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                />

                <SearchCircle>
                    <AiOutlineSearch onClick={handleSearch} />
                </SearchCircle>
            </SearchArea>

            {weatherData && isLoading ? (
                <>
                    <WeatherArea>
                        <h2>{weatherData.name}</h2>
                        {iconChanger(weatherData.weather[0].main)}
                        <Temp>{weatherData.main.temp.toFixed(0)} C</Temp>
                        <span>{weatherData.weather[0].main}</span>
                    </WeatherArea>

                    <InfoArea>
                        <Info>
                            <WiHumidity className="windIcon" />
                            <div className="humidInfo">
                                <p>{weatherData.main.humidity}%</p>
                                <span>Влажность</span>
                            </div>
                        </Info>

                        <Info>
                            <PiWindFill className="windIcon" />
                            <div className="humidInfo">
                                <p>{weatherData.wind.speed}km/h</p>
                                <span>Ветер</span>
                            </div>
                        </Info>
                    </InfoArea>
                </>
            ) : (
                <Loading>
                    <RiLoaderFill className="loadingIcon" />
                    <p>Loading</p>
                </Loading>
            )}
        </Aside>
    )
}

export default Weather;