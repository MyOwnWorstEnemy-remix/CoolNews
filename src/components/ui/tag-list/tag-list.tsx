import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Paper } from '@mui/material';

type SetSelectedTags = (tags: {title: string}[]) => void;

const styles = {
    color: '#10264c',
    width: '300px',
    border: 'none',
    '& .MuiInputBase-root': {
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '10px 15px',
        '& fieldset': {
            borderColor: '#fff',
        },
        '&:hover fieldset': {
            borderColor: '#fff',
        },
        '&:focus fieldset': {
            borderColor: '#d8e4f8',
            outline: 'none',
        }
    },
    '& .MuiChip-root': {
        backgroundColor: "#10264c",
        color: '#fff',
        '& .MuiChip-deleteIcon': {
            color: '#fff',
        }
    },
    '& + .MuiAutocomplete-popper': {
        boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2)',
        color: '#3d5d96',
    },
    '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        padding: '10px 15px'
    },
    '& + .MuiAutocomplete-popper .MuiAutocomplete-option:hover': {
        backgroundColor: '#d8e4f8',
    },
};

function TagList({optionsList, setSelectedTags} : {optionsList : {title: string}[], setSelectedTags : SetSelectedTags}) {
    const handleTags = (evt: React.SyntheticEvent<Element, Event>, value: { title: string; }[]) => {
        setSelectedTags(value);
    }

    const options = optionsList.sort((a, b) => {
        if (a.title[0] > b.title[0]) {
            return 1;
        } else if (a.title[0] < b.title[0]) {
            return -1;
        }
        return 0;
    });

    return (
        <Autocomplete
            sx={styles}
            multiple
            id="genre-tags"
            options={options}
            getOptionLabel={(option) => option.title[0].toUpperCase() + option.title.slice(1)}
            filterSelectedOptions
            disableCloseOnSelect
            disablePortal
            onChange={handleTags}
            PaperComponent={({ children }) => (
                <Paper style={{ 
                    background: 'white',
                    borderRadius: '12px',
                    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
                }}>
                    {children}
                </Paper>
              )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder='Ещё...'
                />
            )}
      />
    );
}

export default TagList;