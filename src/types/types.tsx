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

type Feature = {
  "id": string,
  "name": string,
  "text": string
}

export type Event = {
  "id": number,
  "img": string,
  "title": string,
  "link": string,
  "age-restriction": string,
  "description": string,
  "fav-number": number,
  "views": number,
  "time"?: Time[],
  "place"?: string,
  "cost"?: string,
  "button"?: string,
  "button-link"?: string,
  "adress"?: string,
  "subway"?: string,
  "cuisine"?: string,
  "features": Feature[],
}

export type EventCategory = {
  "city": string,
  "type": string,
}