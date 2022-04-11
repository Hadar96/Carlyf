import { Injectable, Injector } from '@angular/core';
import { User } from 'app/model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  private users:User[];
  
  constructor() {
    this.users = [];
    this.users.push(new User("soffia", "ginger", true, 30, "rock", 22, "moshe kenzin", 
    Injector.create({providers: [{provide: HttpClient, deps: []}]})));
    
    this.users.push(new User("matan", "franko", true, 20, "rock", 3, "aviya kenzin", 
    Injector.create({providers: [{provide: HttpClient, deps: []}]})));

    this.users.push(new User("hadar", "hamenayek", true, 15, "rock", 35, "moshe ben shoshan", 
    Injector.create({providers: [{provide: HttpClient, deps: []}]})));

    this.set({"name":"ilana", "nickName":"hamelecha", "awakenessNotification": true,
    "awakenessNotificationInterval":10, "spotifyList":"rock", "temperature": 50, "emergencyContact":"tomer rabinovitsh"});
  }

  get (name:string):any{
    return this.users.filter(user => name==user.name);
  }

 set(user:any){
  var isExist:boolean = false;  
  var allUsers:any = this.users.map(dictUser => {
        if(dictUser.name == user.name){
            isExist = true;
            if(user.nickName) { dictUser.nickName = user.nickName }
            if(user.awakenessNotification) { dictUser.awakenessNotification = user.awakenessNotification }
            if(user.awakenessNotificationInterval) { dictUser.awakenessNotificationInterval = user.awakenessNotificationInterval }
            if(user.emergencyContact) { dictUser.emergencyContact = user.emergencyContact }
            if(user.spotifyList) { dictUser.spotifyList = user.spotifyList }
            if(user.temperature) { dictUser.temperature = user.temperature }
        }      
    });
    if(!isExist){
      this.users.push(new User(user.name, 
        user.nickName,
        user.awakenessNotification,
        user.awakenessNotificationInterval,
        user.spotifyList,
        user.temperature,
        user.emergencyContact, 
        Injector.create({providers: [{provide: HttpClient, deps: []}]})));
    }
  }
}
