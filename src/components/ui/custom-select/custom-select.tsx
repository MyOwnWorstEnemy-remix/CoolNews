import FormControl from "@mui/material/FormControl";
import { menuClasses } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select, { selectClasses, SelectChangeEvent } from "@mui/material/Select";
import { SelectDescription } from "../../../types/types";

type setFilmType = (type: string) => void; 

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

function CustomSelect ({list, value, setValue, minWidth, selectWidth, backgroundColor, displayIcon = false} : {
    list: SelectDescription[],  
    value: string, 
    setValue: setFilmType,
    backgroundColor?: string,
    selectWidth?: number,
    minWidth: number, 
    displayIcon?: boolean}) {

    const handleTypeChange = (evt: SelectChangeEvent<string>) => {
        const newType = evt.target.value;
        setValue(newType);
    };

    return (
        <FormControl>
            <Select
                disableUnderline
                variant="standard"
                MenuProps={SelectProps} 
                value={value}
                onChange={handleTypeChange}
                sx={{
                    minWidth: minWidth,
                    [`& .${selectClasses.select}`]: {
                        minWidth: selectWidth ? selectWidth : `calc(${minWidth} - 30px)`,
                        background: backgroundColor ? backgroundColor : "transparent",
                        color: "#10264c",
                        borderRadius: "12px",
                        paddingLeft: "15px",
                        paddingRight: "24px",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        display: "flex",
                        alignItems: "center",
                        "&:focus": {
                            borderRadius: "12px",
                            background: backgroundColor ? backgroundColor : "transparent",
                            borderColor: "#104a9d",
                        },
                    },
                    [`& .${selectClasses.select} p`]: {
                        display: displayIcon ? "none" : "inline",
                        padding: 0,
                        margin: 0,
                    },
                    [`& .${selectClasses.icon}`]: {
                        display: displayIcon ? "none" : "block",
                        right: "12px",
                    },
                  }}
                >
                {list.map((item) => (
                    <MenuItem key={item.id} value={item.value}>
                        <p>{item.text}</p>
                        {item.icon ? <item.icon /> : null}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default CustomSelect;