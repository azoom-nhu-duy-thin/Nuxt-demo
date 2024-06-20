
import HttpFactory from "~/repository/factory";
import RoutesApi from "~/repository/routes.client";
import type {IPokemon} from "~/types/model";

class PokemonModule extends HttpFactory {
  private readonly RESOURCE = RoutesApi.Pokemon;
  private accessToken: string = '';

  async fetchAll() {
    return await this.call<IPokemon>(
      {
        method: 'GET', url: `${this.RESOURCE.FetchAll()}`
      }
    )
  }

//   async createPokemon(dto : IPokemon) {
//     return this.call<IPokemon>(
//         {
//           method: 'POST', url: `${this.RESOURCE.CreatePokemon()}`,body:dto, fetchOptions: {
//             headers: {
//               ...(this.accessToken ? {
//                 'Authorization': `Bearer ${this.accessToken}`
//               } : {})
//             },

//           }
//         }
//     )
//   }
//   async fetchDetail(id : number) {
//     return this.call<IPokemon>(
//         {
//           method: 'GET', url: `${this.RESOURCE.FetchDetail(id)}`, fetchOptions: {
//             headers: {
//               ...(this.accessToken ? {
//                 'Authorization': `Bearer ${this.accessToken}`
//               } : {})
//             },

//           }
//         }
//     )
//   }

//   setAccessToken(accessToken: string) {
//     this.accessToken = accessToken;
//   }

}

export default PokemonModule;