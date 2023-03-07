import { Injectable } from "@nestjs/common";

@Injectable()
export default class OMDB {
  baseURL = 'http://www.omdbapi.com/';
  authParams = 'i=tt3896198&apikey=1dbbc5f8';
  
  buildUrl() {
    return `${this.baseURL}?${this.authParams}`;
  }
}