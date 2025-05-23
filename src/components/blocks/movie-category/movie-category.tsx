import { SelectDescription, CurrentMovieCategory } from "../../../types/types";
import { Section, Title, CategoryWrapper, Button } from "./styles";
import { useState,useRef, useEffect, RefObject } from "react";
import useDebounce from "../../../custom-hooks/hooks";
import CustomSelect from "../../ui/custom-select/custom-select";
import CustomDoubleRange from "../../ui/custom-double-range/custom-double-range";
import TagList from "../../ui/tag-list/tag-list";
import CustomSwitch from "../../ui/custom-switch/custom-switch";

type SetCategory = (category: CurrentMovieCategory) => void;

const genres = [
    {
        title: "мультфильм",
    },
    {
        title: "короткометражка",
    },
    {
        title: "приключения",
    },
    {
        title: "семейный",
    },
    {
        title: "ужасы",
    },
    {
        title: "комедия",
    },
    {
        title: "криминал",
    },
    {
        title: "история",
    },
    {
        title: "военный",
    },
    {
        title: "боевик",
    },
    {
        title: "детский",
    },
    {
        title: "драма",
    },
    {
        title: "триллер",
    },
    {
        title: "документальный",
    },
    {
        title: "детектив",
    },
    {
        title: "биография",
    },
    {
        title: "фантастика",
    },
    {
        title: "фэнтези",
    },
    {
        title: "реальное ТВ",
    },
    {
        title: "музыка",
    },
    {
        title: "игра",
    },
];

const countries = [
    {
        title: "Канада",
    },
    {
        title: "США",
    },
    {
        title: "Ирландия",
    },
    {
        title: "Россия",
    },
    {
        title: "Аргентина",
    },
    {
        title: "Франция",
    },
    {
        title: "Бельгия",
    },
    {
        title: "Великобритания",
    },
    {
        title: "Австралия",
    },
    {
        title: "Индия",
    },
    {
        title: "Италия",
    },
    {
        title: "Германия",
    },
]

function MovieCategory ({selectList, currentCategory, setCategory} : {
        selectList: SelectDescription[], 
        currentCategory: CurrentMovieCategory, 
        setCategory: SetCategory, 
    }) {
    const [typeSelect, setTypeSelect] = useState<string>(currentCategory.filmType);
    const [ratingRange, setRatingRange] = useState<number[]>([0, 10]);
    const debouncedRatingRange = useDebounce(ratingRange, 300);
    const [selectedGenres, setSelectedGenres] = useState<{title: string}[]>([]);
    const [allGenres, setAllGenres] = useState<boolean>(true);
    const [selectedCountries, setSelectedCountries] = useState<{title: string}[]>([]);
    const [allCountries, setAllCountries] = useState<boolean>(true); 
    const prevScroll = useRef(0);
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    const handleButtonClick = () => {
        const newCategory = {...currentCategory};
        newCategory.filmType = typeSelect;
        newCategory.rating = debouncedRatingRange;
        newCategory.genres.all = allGenres;
        const genresList = selectedGenres.map((value) => value.title);
        newCategory.genres.list = genresList;
        newCategory.countries.all = allCountries;
        const countriesList = selectedCountries.map((value) => value.title);
        newCategory.countries.list = countriesList;
        setCategory(newCategory);
    };

    const onWindowScroll = () => {
        if (sidebarRef.current && (
           (+sidebarRef.current.style.top.slice(0, -2) > window.innerHeight - sidebarRef.current.offsetHeight - 50 && +sidebarRef.current.style.top.slice(0, -2) < 50) 
           || (+sidebarRef.current.style.top.slice(0, -2) === window.innerHeight - sidebarRef.current.offsetHeight - 50 && window.scrollY < prevScroll.current) 
           || (+sidebarRef.current.style.top.slice(0, -2) === 50 && window.scrollY > prevScroll.current))) {
            sidebarRef.current.style.top = `${+sidebarRef.current.style.top.slice(0, -2) - window.scrollY + prevScroll.current}px`;
        } else if (sidebarRef.current && +sidebarRef.current.style.top.slice(0, -2) < window.innerHeight - sidebarRef.current.offsetHeight - 50) {
            sidebarRef.current.style.top = `${window.innerHeight - sidebarRef.current.offsetHeight - 50}px`;
        } else if (sidebarRef.current && (+sidebarRef.current.style.top.slice(0, -2) < window.innerHeight - sidebarRef.current.offsetHeight - 50 || +sidebarRef.current.style.top.slice(0, -2) > 50)) {
            sidebarRef.current.style.top = '50px';
        }
        prevScroll.current = window.scrollY;
    }

    useEffect(() => {
        if(sidebarRef.current && sidebarRef.current.offsetHeight > window.innerHeight - 50) {
            window.addEventListener('scroll', onWindowScroll);
        } else if (sidebarRef.current) {
            sidebarRef.current.style.top = '50px';
        }
        return () => window.removeEventListener('scroll', onWindowScroll);
    }, [selectedGenres, selectedCountries])

    return <Section ref={sidebarRef}>
        <Title>Категории:</Title> 
        <CategoryWrapper>
            <h3>Тип:</h3>
            <CustomSelect list={selectList} value={typeSelect} setValue={setTypeSelect} minWidth={300} backgroundColor={"white"}/>
        </CategoryWrapper>
        <CategoryWrapper>
            <h3>Рейтинг IMDB:</h3>
            <CustomDoubleRange ratingRange={ratingRange} setRatingRange={setRatingRange} minDistance={1} minValue={0} maxValue={10} step={0.5} />
        </CategoryWrapper>
        <CategoryWrapper>
            <h3>Жанры:</h3>
            <TagList optionsList={genres} setSelectedTags={setSelectedGenres}/>
            <CustomSwitch checked={allGenres} setChecked={setAllGenres} labelText="Все выбранные жанры присутствуют одновременно" />
        </CategoryWrapper>
        <CategoryWrapper>
            <h3>Страны:</h3>
            <TagList optionsList={countries} setSelectedTags={setSelectedCountries}/>
            <CustomSwitch checked={allCountries} setChecked={setAllCountries} labelText="Все выбранные страны присутствуют одновременно" />
        </CategoryWrapper>
        <Button type="button" onClick={handleButtonClick}>Найти</Button>
    </Section>
}

export default MovieCategory;