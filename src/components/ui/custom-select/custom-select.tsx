import FormControl from "@mui/material/FormControl";
import { menuClasses } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select, { selectClasses, SelectChangeEvent } from "@mui/material/Select";
import { MovieDescription, FilmType } from "../../../types/types";

type setFilmType = (type: FilmType) => void; 

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

function CustomSelect ({categories, typeSelect, setTypeSelect} : {
    categories: MovieDescription,  
    typeSelect: FilmType, 
    setTypeSelect: setFilmType}) {

    const handleTypeChange = (evt: SelectChangeEvent<FilmType>) => {
        const newType = evt.target.value as FilmType;  
        setTypeSelect(newType);
    };

    return (
        <FormControl>
            <Select
                disableUnderline
                variant="standard"
                MenuProps={SelectProps} 
                value={typeSelect}
                onChange={handleTypeChange}
                sx={{
                    minWidth: 300,
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
    )
}

export default CustomSelect;