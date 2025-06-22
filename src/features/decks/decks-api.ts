import axios from 'axios'

export type Author = {
    id: string;
    name: string;
}

export type Items = {
    isFavorite: boolean;
    author: Author;
    id: string;
    userId: string;
    name: string;
    isPrivate: boolean;
    cover: string;
    created: string;
    updated: string;
    cardsCount: number;
}

export type Pagination = {
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
    totalItems: number;
}

export type GetResponse = {
    items: Items[];
    pagination: Pagination;
}

export const instance = axios.create({
    baseURL: 'https://api.flashcards.andrii.es',
    headers: {
        'x-auth-skip': true,
    },
})

export const decksApi = {
    fetchDecks(){
        return instance.get<GetResponse>('/v2/decks')
    }
}



