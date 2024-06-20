
// import { ICreateAccountInput, ICreateAccountResponse, ILoginInput, ILoginResponse } from 'types';
import HttpFactory from '../factory';

class AuthModule extends HttpFactory {
  private RESOURCE = '/auth';

  async login(credentials: any): Promise<any> {
    return await this.call<any>('POST', `${this.RESOURCE}/login`, credentials);
  }

  async create(account: any): Promise<any> {
    return await this.call<any>('POST', `${this.RESOURCE}/register`, account);
  }
}

export default AuthModule;