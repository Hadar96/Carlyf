import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalServicesService {

  wazeUrl:string = 'https://waze.com/ul?';
  spotifyUrl:string = 'https://api.spotify.com';

  constructor() { }

  init(){

  }

  navigate(address:string){

  }

  searchSpotifyItem(){
    
  }

}
