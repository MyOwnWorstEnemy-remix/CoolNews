import { CategoryList } from "../../../types/types";
import { Category } from "../../../types/types";
import { Selector, Title, List, Input } from "./styles";

type SetCategory = (category: Category[]) => void;

function CategorySelect ({categories, categoryList, setCategoryList} : {categories: CategoryList[], categoryList: Category[], setCategoryList: SetCategory}) {
    const handleCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const checkboxValue = evt.target.value as Category;
        if (categoryList.includes(checkboxValue)) {
            const newList = categoryList.filter((cat) => cat !== checkboxValue) as Category[];
            setCategoryList(newList);
        } else {
            const newList = [...categoryList, checkboxValue] as Category[];
            setCategoryList(newList);
        }
    };
    return <Selector>
        <Title>Категории:</Title>
        <List>
            {categories.map((category) => 
                <li key={category.id}>
                    <label>
                        <Input type="checkbox" id={category.name} name="news-category" value={category.name} onChange={handleCheckboxChange}/>
                        {category.name}
                    </label>
                </li>
            )}
        </List>
    </Selector>
}

export default CategorySelect;