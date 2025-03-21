import { CheckboxInput } from "./styles";

type PropsTypes = {
    text: string,
    value: string,
    name: string,
    handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
    isDisabled: boolean,
}

function Checkbox({text, value, name, handleChange, isDisabled}: PropsTypes) {
    return (
        <label>
            <CheckboxInput type="checkbox" id={value} name={name} value={value} onChange={handleChange} disabled={isDisabled}/>
                {text}
        </label>
    );
}

export default Checkbox