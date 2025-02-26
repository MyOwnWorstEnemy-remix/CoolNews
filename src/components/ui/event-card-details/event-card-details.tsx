import { EventDetails } from "../../../types/types";
import { MdOutlinePlace, MdCalendarMonth, MdCurrencyRuble } from "react-icons/md";
import { Details, Time } from "./styles";

function EventCardDetails ({details}: {details: EventDetails}) {
    return (
        <Details>
            {details.time ? 
                <Time>
                    <MdCalendarMonth />
                    <ul>
                        {details.time.map((date) => 
                            <li key={date.id}>
                                <span>{date.name}</span>
                            </li>
                        )}
                    </ul>
                </Time> : null}
            {details.place ? 
                <div>
                    <MdOutlinePlace />
                    <span>{details.place}</span>
                </div> : null}
            {details.cost ? 
                <div>
                    <MdCurrencyRuble />
                    <span>{details.cost}</span>
                </div> : null}
        </Details>
    )
}

export default EventCardDetails;