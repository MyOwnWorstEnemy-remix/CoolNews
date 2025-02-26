export type Article = {
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

export type EventCategory = {
  "city": string,
  "type": string,
  "subtype"?: string,
}