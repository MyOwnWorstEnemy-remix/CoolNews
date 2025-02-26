import { Feature } from "../../../types/types";
import { FiWifi } from "react-icons/fi";
import { ImSpoonKnife } from "react-icons/im";
import { FeatureList } from "./styles";

function EventCardFeatures ({features} : {features: Feature[]}) {
    return (
        <FeatureList>
            {features.map((feature) => 
                <li key={feature.id} title={feature.name}>
                    {feature.id === "wi-fi" ? <FiWifi/> : null}
                    {feature.id === "bill" ? <ImSpoonKnife/> : null}
                    <span>{feature.text}</span>
                </li>
            )}
        </FeatureList>
    )
}

export default EventCardFeatures;