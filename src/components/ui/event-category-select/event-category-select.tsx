import { useEffect, useState } from "react";
import { EventCategory, EventDescription, EventCity, EventType, EventSubType } from "../../../types/types";
import { Selector, Title, List, SubList, CheckboxInput, RadioInput} from "./styles";

type SetCategory = (category: EventCategory) => void;

type CityStateObject = Partial<{
    [key in EventCity]: boolean;
}>;

type TypeStateObject = Partial<{
    [key in EventType]: boolean;
}>;

function EventCategorySelect ({categories, currentCategory, setCategory}: {categories: EventDescription, currentCategory: EventCategory, setCategory: SetCategory}) {
    const [cityRadio, setCityRadio] = useState<CityStateObject>({});
    const [typeRadio, setTypeRadio] = useState<TypeStateObject>({});

    useEffect(() => {
        const newCityRadio: CityStateObject = {};
        categories.city.forEach((city) => {
            if(city.value === currentCategory.city) {
                newCityRadio[city.value] = true;
            } else {
                newCityRadio[city.value] = false;
            }
        });
        setCityRadio(newCityRadio);

        const newTypeRadio: TypeStateObject = {};
        categories.type.forEach((type) => {
            if(type.value === currentCategory.type) {
                newTypeRadio[type.value] = true;
            } else {
                newTypeRadio[type.value] = false;
            }
        });
        setTypeRadio(newTypeRadio);
    }, []);

    const handleCityChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const newCity = evt.target.value as EventCity;  
        const newCategory = {...currentCategory}      
        newCategory.city = newCity;
        setCategory(newCategory);

        const newCityRadio = {...cityRadio};
        (Object.keys(newCityRadio) as Array<keyof typeof newCityRadio>).forEach(key => {
            newCityRadio[key] = false;
        })
        newCityRadio[newCity] = true;
        setCityRadio(newCityRadio);
    }

    const handleTypeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const newType = evt.target.value as EventType;  
        const newCategory = {...currentCategory}      
        newCategory.type = newType;
        setCategory(newCategory);

        const newTypeRadio = {...typeRadio};
        (Object.keys(newTypeRadio) as Array<keyof typeof newTypeRadio>).forEach(key => {
            newTypeRadio[key] = false;
        })
        newTypeRadio[newType] = true;
        setTypeRadio(newTypeRadio);
    }

    const handleSubtypeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const newSubtype = evt.target.value as EventSubType;  

        let newSubtypeList: EventSubType[] = [];
        currentCategory.subtype?.forEach((subtype) => {
            newSubtypeList.push(subtype);
        });

        if (currentCategory.subtype?.includes(newSubtype)) {
            newSubtypeList = newSubtypeList.filter((category) => category !== newSubtype);
        } else {
            newSubtypeList.push(newSubtype);
        }
        
        const newCategory = {...currentCategory}      
        newCategory.subtype = newSubtypeList;
        setCategory(newCategory);
    };
    
    return (
        <Selector>
            <Title>Категории:</Title>
            <h3>Город:</h3>
            <List>
                {categories.city.map((category) => 
                    <li key={category.id}>
                        <label>
                            <RadioInput type="radio" id={category.value} name="event-city" value={category.value} onChange={handleCityChange} checked={cityRadio[category.value]}/>
                            {category.text}
                        </label>
                    </li>
                )}
            </List>
            <h3>Тип:</h3>
            <List>
                {categories.type.map((category) => 
                    <li key={category.id}>
                        <label>
                            <RadioInput type="radio" id={category.value} name="event-type" value={category.value} onChange={handleTypeChange} checked={typeRadio[category.value]}/>
                            {category.text}
                        </label>
                        {category.value === 'food' ? 
                            <SubList>
                                {categories.subtype.map((subcategory) => 
                                    <li key={subcategory.id}>
                                        <label>
                                            <CheckboxInput type="checkbox" id={subcategory.value} name={`subtype-${subcategory.value}`} value={subcategory.value} onChange={handleSubtypeChange} disabled={!typeRadio[category.value]}/>
                                            {subcategory.text}
                                        </label>
                                    </li>
                                )}
                            </SubList>: null}
                    </li>
                )}
            </List>
        </Selector>
    )
};

export default EventCategorySelect