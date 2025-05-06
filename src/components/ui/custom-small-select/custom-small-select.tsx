import { menuClasses } from "@mui/material/Menu";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { selectClasses, SelectChangeEvent } from '@mui/material/Select';
import { IconType } from "react-icons/lib";

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
            display: "flex",
            justifyContent: "space-between",
            },
            "& li p": {
            margin: "0px",
            },
            "& li:hover": {
            background: "#d8e4f8",
            },
            "& li.Mui-selected": {
            color: "white",
            background: "#10264c",
            },
            "& li.Mui-selected:hover": {
            background: "#10264c",
            },
        },
    },
}

type ListType = {
    id: number,
    value: string,
    text: string,
    icon?: IconType,
}

function CustomSmallSelect ({list, value, setValue, minWidth, displayIcon = false} : {list: ListType[], value: string, setValue: (value: string) => void, minWidth: number, displayIcon?: boolean}) {
    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    }

    return <>
        <FormControl>
            <Select
                id="select-small"
                value={value}
                variant="standard"
                disableUnderline
                onChange={handleChange}
                MenuProps={SelectProps}
                sx = {{
                    minWidth: minWidth,
                    [`& .${selectClasses.select}`]: {
                        width: 35,
                        color: "#10264c",
                        borderRadius: "12px",
                        paddingLeft: "15px",
                        paddingRight: "24px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        display: "flex",
                        alignItems: "center",
                        "&:focus": {
                            borderRadius: "12px",
                            borderColor: "#104a9d",
                        },
                    },
                    [`& .${selectClasses.select} p`]: {
                        display: displayIcon ? "none" : "inline",
                        padding: 0,
                    },
                    [`& .${selectClasses.icon}`]: {
                        display: displayIcon ? "none" : "block",
                    },
                }}
            >
                {list.map((category) => (
                    <MenuItem key={category.id} value={category.value}>
                        <p>{category.text}</p>
                        {category.icon ? <category.icon /> : null}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </>
}

export default CustomSmallSelect;