import { FilmType, MovieDescription, CurrentMovieCategory } from "../../../types/types";
import { Section, Title } from "./styles";
import { useEffect, useState } from "react";
import CustomSelect from "../../ui/custom-select/custom-select";
import CustomDoubleRange from "../../ui/custom-double-range/custom-double-range";

type SetCategory = (category: CurrentMovieCategory) => void;

function MovieCategory ({categories, currentCategory, setCategory} : {categories: MovieDescription, currentCategory: CurrentMovieCategory, setCategory: SetCategory}) {
    const [typeSelect, setTypeSelect] = useState<FilmType>(currentCategory.filmType);
    const [ratingRange, setRatingRange] = useState<number[]>([0, 10]);


        const newCategory = {...currentCategory}      
        newCategory.filmType = newType;
        setCategory(newCategory);
        setTypeSelect(newType);
    };

    return <Section>
        <Title>Категории:</Title>
        <h3>Тип:</h3>
        <CustomSelect categories={categories} typeSelect={typeSelect} setTypeSelect={setTypeSelect}/>
        <h3>Рейтинг:</h3>
        <CustomDoubleRange ratingRange={ratingRange} setRatingRange={setRatingRange} minDistance={1} minValue={0} maxValue={10} step={0.5} />
    </Section>
}

export default MovieCategory;