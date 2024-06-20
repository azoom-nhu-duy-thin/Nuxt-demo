export interface IPost {
    userId: string;
    id: string;
    title: string;
    body: string;
}
  
export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    accessToken:string;
}

export interface IPokemon {
    result: IPokemonItem[]
}

// Define the type for the items in pokemonList
export interface IPokemonItem {
    url: string;
    [key: string]: any; // You can add more specific fields if you know them
}