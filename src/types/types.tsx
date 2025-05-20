import { IconType } from "react-icons/lib";

export type Favourite = {
  "id": string, 
}

export type Article = {
  "entityType": 'news',
  "id": number,
  "title": string,
  "description": string,
  "content": string,
  "url": string,
  "image": string,
  "publishedAt": string,
  "source": {
    "name": string,
    "url": string
  }
}

export type ArticleList = {
  "id": string,
  "list" : Article[],
}

export type Category = 'general' | 'world' | 'nation' | 'business' | 'technology' | 'entertainment' | 'sports' | 'science' | 'health';

export type CategoryList = {
    "id" : number,
    "name": Category,
    "text": string,
}

type Time = {
  "id": number,
  "name": string
}

export type Feature = {
  "id": string,
  "name": string,
  "text": string
}

export type EventDetails = {
  "time"?: Time[],
  "place"?: string,
  "cost"?: string,
}

export type EventAdress = {
  "street": string,
  "subway"?: string,
}

export type Cuisine = {
  "type": string,
  "text": string
}

export type Event = {
  "entityType": 'event',
  "id": number,
  "img": string,
  "title": string,
  "link": string,
  "ageRestriction": string,
  "description": string,
  "likes": number,
  "views": number,
  "details"?: EventDetails,
  "button"?: string,
  "buttonLink"?: string,
  "adress"?: EventAdress,
  "cuisine"?: Cuisine,
  "features"?: Feature[],
}

export type EventCity = 'msk' | 'spb';
export type EventType = 'food' | 'exibit' | 'excursion';
export type EventSubType = 'event' | 'restaurant' | 'bar';

export type EventCategory = {
  "city": EventCity,
  "type": EventType,
  "subtype"?: EventSubType[],
}

export type EventDescription = {
  "city": {
    "id": number,
    "value": EventCity,
    "text": string
  }[],
  "type": {
    "id": number,
    "value": EventType,
    "text": string
  }[],
  "subtype": {
    "id": number,
    "value": EventSubType,
    "text": string
  }[],
}

export type FilmType = "animated-series" | "tv-series" | "movie" | "cartoon" | "all";

export type Film = {
  "entityType": 'film',
  "id": number,
  "name": string,
  "type": FilmType,
  "year": number,
  "description": string,
  "rating": {
    "kp": number,
    "imdb": number,
  },
  "movieLength"?: number,
  "seriesLength"?: number,
  "ageRating"?: number,
  "poster": {
    "url": string,
    "previewUrl": string
  },
  "genres": {
    "name": string
  }[],
  "countries": {
    "name": string
  }[],
  "isSeries": boolean
}

export type SelectDescription = {
  "id": number,
  "value": string,
  "text": string,
  icon?: IconType,
}

export type CurrentMovieCategory = {
  "filmType": string,
  "rating": number[],
  "genres": {
    "list": string[],
    "all": boolean,
  },
  "countries": {
    "list": string[],
    "all": boolean,
  }
}