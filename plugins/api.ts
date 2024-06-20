import PokemonModule from "~/repository/modules/pokemon";

export interface IApiInstance {
//   post: PostModule;
//   auth: AuthModule;
    pokemon: PokemonModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const API_BASE_URL : string = config.public.API_BASE_URL;


  const apiFetcher = $fetch.create({
    baseURL: API_BASE_URL,
    onRequest({ request, response }) {},
  });
//   const postModule = new PostModule(apiFetcher);
//   const authModule = new AuthModule(apiFetcher);
    const pokemonModule = new PokemonModule(apiFetcher);

  const modules: IApiInstance = {
    // post: postModule,
    // auth: authModule,
    pokemon: pokemonModule
  };
  /*
  * ! This code below is example for the case you want to authenticate user and set token to headers.
  * Why call api in process.client?
  * => Cookie only exist on client.
  *  */
//   if (process.client) {
//     modules.auth
//     .authenticate()
//     .then((data) => {
//       if(data.accessToken){
//         postModule.setAccessToken(data.accessToken);
//       }
//     })
//     .catch((err: any) => {
//       console.error("Error occur:" + err)

//     });
//   }

  return {
    provide: {
      api: modules,
    },
  };
});
