import { EventAdress } from "../../../types/types"
import { MdOutlinePlace } from "react-icons/md";
import { SiMetrodeparis } from "react-icons/si";
import { Adress } from "./styles";

function EventCardAdress({adress}: {adress: EventAdress}) {
    return (
        <Adress>
            <div>
                <MdOutlinePlace />
                <span>{adress.street}</span>
            </div>
            {adress.subway ? 
                <div className="subway">
                    <SiMetrodeparis />
                    <span>{adress.subway}</span>
                </div> : null}
        </Adress>
    )
}

export default EventCardAdress;