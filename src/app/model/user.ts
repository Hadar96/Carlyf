import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';

export class User {
    public name:string;
    public nickName:string;
    public awakenessNotification:boolean;
    public awakenessNotificationInterval:number;
    public spotifyList:string;
    public temperature:number;
    public emergencyContact:string;
    public http:HttpClient;

    constructor(name:string,
         nickName:string,
         awakenessNotification:boolean,
         awakenessNotificationInterval:number,
         spotifyList:string,
         temperature:number,
         emergencyContact:string,
         private injector: Injector
    ) {
        this.name = name;
        this.nickName = nickName;
        this.awakenessNotification = awakenessNotification;
        this.awakenessNotificationInterval = awakenessNotificationInterval;
        this.spotifyList = spotifyList;
        this.temperature = temperature;
        this.emergencyContact = emergencyContact;
        this.http = injector.get(HttpClient)
    }
}
