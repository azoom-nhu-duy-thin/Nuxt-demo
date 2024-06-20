/*
* Prefix /api for api server
*/

const prefixDefault : string = '';

const prefix : string = '/api';

/*
* Prefix /api/another for another server
* */
const anotherPrefix : string = '/api/another'

const RoutesApi = {
  Post: {
    FetchAll:()  => `${prefix}/posts`,
    FetchDetail : (id: number) => `${prefix}/posts/${id}`,
    CreatePost :()  => `${prefix}/posts`
  },
  User: {
    Authenticate:()  => `${anotherPrefix}/users`
  },
  Pokemon: {
    FetchAll: () => `${prefixDefault}/pokemon`
  }
}

export default RoutesApi