import { useState, useEffect } from "react";
import { Favourite } from "../types/types";

export function useFetchFavourite(type: "news" | "event" | "film", dependencies?: boolean) {
    const [favourites, setFavourites] = useState<number[]>([]);
    const favouritesUrl = 'http://localhost:3000/favourite';
      
    useEffect(() => {
        fetch(favouritesUrl)
        .then((resp) => resp.json())
        .then((data) => {
            const idList = data.filter((item: Favourite) => item.id.split('-')[0] === type).map((item: Favourite) => item.id.split('-')[1]);
            console.log(idList);
            setFavourites(idList);
        });
    }, [dependencies])

    return favourites;
}

export function useDebounce(value: any, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
  
    return debouncedValue;
}
  
export default useDebounce;