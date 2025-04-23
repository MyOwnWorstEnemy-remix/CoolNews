import { FilmType, MovieDescription, CurrentMovieCategory } from "../../../types/types";
import { Section, Title } from "./styles";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { menuClasses } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select, { selectClasses, SelectChangeEvent } from "@mui/material/Select";

type SetCategory = (category: CurrentMovieCategory) => void;

function MovieCategory ({categories, currentCategory, setCategory} : {categories: MovieDescription, currentCategory: CurrentMovieCategory, setCategory: SetCategory}) {
    const [typeSelect, setTypeSelect] = useState<FilmType>(currentCategory.filmType);

    const SelectProps = {
        anchorOrigin: {
            vertical: "bottom" as 'bottom',
            horizontal: "left" as 'left',
        },
        transformOrigin: {
            vertical: "top" as 'top',
            horizontal: "left" as 'left',
        },
        sx: {
            marginBlock: "0.5rem",
            [`& .${menuClasses.paper}`]: {
                borderRadius: "12px",
            },
            [`& .${menuClasses.list}`]: {
                paddingTop: 0,
                paddingBottom: 0,
                background: "white",
                "& li": {
                paddingTop: "12px",
                paddingBottom: "12px",
                },
                "& li:hover": {
                background: "#d8e4f8",
                },
                "& li.Mui-selected": {
                color: "white",
                background: "#3d5d96",
                },
                "& li.Mui-selected:hover": {
                background: "#3d5d96",
                },
            },
        },
    }
    
    const handleTypeChange = (evt: SelectChangeEvent<FilmType>) => {
        const newType = evt.target.value as FilmType;  
        const newCategory = {...currentCategory}      
        newCategory.filmType = newType;
        setCategory(newCategory);
        setTypeSelect(newType);
    };

    return <Section>
        <Title>Категории:</Title>
        <h3>Тип:</h3>
        <FormControl>
            <Select
              disableUnderline
              variant="standard"
              MenuProps={SelectProps} 
              value={typeSelect}
              onChange={handleTypeChange}
              sx={{
                minWidth: 280,
                [`& .${selectClasses.select}`]: {
                  background: "white",
                  color: "#10264c",
                  borderRadius: "12px",
                  paddingLeft: "15px",
                  paddingRight: "24px",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  "&:focus": {
                    borderRadius: "12px",
                    background: "white",
                    borderColor: "#104a9d",
                  },
                },
                [`& .${selectClasses.icon}`]: {
                  right: "12px",
                },
              }}
            >
              {categories.filmType.map((category) => (
                <MenuItem key={category.id} value={category.value}>
                  {category.text}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
    </Section>
}

export default MovieCategory;