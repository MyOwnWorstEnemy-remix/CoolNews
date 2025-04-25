import { FilmType, MovieDescription, CurrentMovieCategory } from "../../../types/types";
import { Section, Title, CategoryWrapper } from "./styles";
import { useEffect, useState } from "react";
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
]

function MovieCategory ({categories, currentCategory, setCategory} : {categories: MovieDescription, currentCategory: CurrentMovieCategory, setCategory: SetCategory}) {
    const [typeSelect, setTypeSelect] = useState<FilmType>(currentCategory.filmType);
    const [ratingRange, setRatingRange] = useState<number[]>([0, 10]);
    const debouncedRatingRange = useDebounce(ratingRange, 300);
    const [selectedGenres, setSelectedGenres] = useState<{title: string}[]>([]);
    const [allGenres, setAllGenres] = useState<boolean>(true);  

    useEffect(() => {
        const newCategory = {...currentCategory}      
        newCategory.filmType = typeSelect;
        setCategory(newCategory);
    }, [typeSelect]);

    useEffect(() => {
        const newCategory = {...currentCategory}      
        newCategory.rating = debouncedRatingRange;
        setCategory(newCategory);
    }, [debouncedRatingRange]);

    return <Section>
        <Title>Категории:</Title>
        <CategoryWrapper>
            <h3>Тип:</h3>
            <CustomSelect categories={categories} typeSelect={typeSelect} setTypeSelect={setTypeSelect}/>
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
    </Section>
}

export default MovieCategory;