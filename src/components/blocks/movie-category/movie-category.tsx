import { FilmType, MovieDescription, CurrentMovieCategory } from "../../../types/types";
import { Section, Title } from "./styles";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { menuClasses } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select, { selectClasses, SelectChangeEvent } from "@mui/material/Select";
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

type SetCategory = (category: CurrentMovieCategory) => void;

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

const DoubleSlider = styled(Slider)(({ theme }) => ({
    color: '#10264c',
    height: 3,
    padding: '13px 0',
    margin: '0 0 0 13px',
    width: '275px',
    '& .MuiSlider-thumb': {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(61, 93, 150, 0.3)',
        },
        '& .rating-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#3d5d96',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&::before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
        transform: 'rotate(45deg)',
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: '#10264c',
        opacity: 0.7,
        height: 3,
        ...theme.applyStyles('dark', {
            color: '#bfbfbf',
            opacity: undefined,
        }),
    },
}));
  
interface DoubleThumbComponentProps extends React.HTMLAttributes<unknown> {}
  
function DoubleThumbComponent(props: DoubleThumbComponentProps) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="rating-bar" />
        <span className="rating-bar" />
        <span className="rating-bar" />
      </SliderThumb>
    );
}

function MovieCategory ({categories, currentCategory, setCategory} : {categories: MovieDescription, currentCategory: CurrentMovieCategory, setCategory: SetCategory}) {
    const [typeSelect, setTypeSelect] = useState<FilmType>(currentCategory.filmType);
    const [ratingRange, setRatingRange] = useState<number[]>([0, 10]);

    const minDistance = 1;

    const handleRatingChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (Array.isArray(newValue)) {
            if (activeThumb === 0) {
                setRatingRange([Math.min(newValue[0], ratingRange[1] - minDistance), ratingRange[1]]);
            } else {
                setRatingRange([ratingRange[0], Math.max(newValue[1], ratingRange[0] + minDistance)]);
            }
        }
    };
    
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
        <h3>Рейтинг:</h3>
        <DoubleSlider
            slots={{ thumb: DoubleThumbComponent }}
            getAriaLabel={(index) => (index === 0 ? 'От' : 'До')}
            value={ratingRange}
            onChange={handleRatingChange}
            valueLabelDisplay="auto"
            defaultValue={[0, 10]}
            min={0}
            max={10}
            marks
            step={0.5}
        />
    </Section>
}

export default MovieCategory;