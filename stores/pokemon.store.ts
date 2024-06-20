import type {IPokemon, IPokemonItem} from "~/types/model";

import {defineStore} from "pinia";

export const usePokemonStore = defineStore("pokemon", () => {
  const {$api} = useNuxtApp();
  const pokemonList = ref<IPokemonItem[]>([]);

  const fetchPokemonList = async () => {
    try {
      $api.pokemon.fetchAll().then((data: any) => {
        // console.log("fetchPokemonList", data)
        pokemonList.value = data?.results
      }).catch(error => {
        console.error(error)
      })
    } catch (error) {
      console.error("fetchPostList error:" + error);
    }
  };

  return {pokemonList, fetchPokemonList};
});