import { CategoryList } from "../../../types/types";
import { Category } from "../../../types/types";
import { Selector, Title, List } from "./styles";
import Checkbox from "../../ui/checkbox/checkbox";

type SetCategory = (category: Category[]) => void;

function NewsCategory ({categories, categoryList, setCategory} : {categories: CategoryList[], categoryList: Category[], setCategory: SetCategory}) {
    const handleCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const checkboxValue = evt.target.value as Category;
        if (categoryList.includes(checkboxValue)) {
            const newList = categoryList.filter((cat) => cat !== checkboxValue) as Category[];
            setCategory(newList);
        } else {
            const newList = [...categoryList, checkboxValue] as Category[];
            setCategory(newList);
        }
    };
    return <Selector>
        <Title>Категории:</Title>
        <List>
            {categories.map((category) => 
                <li key={category.id}>
                    <Checkbox text={category.text} value={category.name} name={`news-category-${category.name}`} handleChange={handleCheckboxChange} isDisabled={false} />
                </li>
            )}
        </List>
    </Selector>
}

export default NewsCategory;