import { RadioInput } from "./styles";

type Props = {
    text: string,
    value: string,
    name: string,
    handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
    isChecked: boolean | undefined
}

function Radio ({text, value, name, handleChange, isChecked}: Props) {
    return (
        <label>
            <RadioInput type="radio" id={value} name={name} value={value} onChange={handleChange} checked={isChecked}/>
            {text}
        </label>
    );
}

export default Radio;