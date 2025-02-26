import { LuChefHat } from "react-icons/lu";
import { FaWineGlassAlt } from "react-icons/fa";
import { Cuisine } from "../../../types/types";
import { Container } from "./styles";

function EventCardCuisine ({cuisine} : {cuisine: Cuisine}) {
    return (
        <Container>
            {cuisine.type === "bar" ? <FaWineGlassAlt /> : <LuChefHat />}
            <span>{cuisine.text}</span>
        </Container>
    )
}

export default EventCardCuisine;