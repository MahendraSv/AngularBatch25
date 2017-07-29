import { Injectable } from '@angular/core';

@Injectable()
export class AccessTokenServiceService {

  accessToken: string = '';

  constructor() { }

  public setAccessToken(at: string): void {
    this.accessToken = at;
  }

  public getAccessToken(): string {
    return this.accessToken;
  }

}
