import { Injectable } from "@angular/core";
import { eIntents } from "app/enums/eIntents";
import { StoreService } from "./store.service";

@Injectable()
export class IntentPerformer {
    constructor(private store: StoreService) { }

    responseToIntent(intent: eIntents) {
        const res = { text: "", end: true };
        switch (intent) {
            case eIntents.GREET:
                res.text = "you know, when i hear your voice - i feel so much better!"
                break;
            case eIntents.GENERAL_TALK:
                const arr = ["i am here! let's talk",
                    "what do you wanna do?",
                    "did you know? london is the capital of england",
                    "did you know? my name is Carly because i am your car assistant"];
                res.text = arr[Math.floor(Math.random() * arr.length)];
                res.end = false;
                break;
            case eIntents.EMERGENCY:
                res.text = "calling 911";
                break;
            case eIntents.EMERGENCY_CONTACT:
                // take the contact from profile
                res.text = "calling Moshe Kenzin";
                break;
            case eIntents.VOLUME_UP:
                this.store.currVolume++;
                break;
            case eIntents.VOLUME_DOWN:
                this.store.currVolume--;
                break;
            case eIntents.PLAY_MUSIC:
                // res.text = "la la la la na na na nananana lalala sing sing sing";
                // res.text = "What do you want to listen to?";
                if (!this.store.isMusicOn) {
                    res.text = "Openning your playlist on Spotify";
                    this.store.isMusicOn = true;
                }
                break;
            case eIntents.STOP_MUSIC:
                this.store.isMusicOn = false;
                break;
            case eIntents.ETA:
                if (!this.store.isNavigating) {
                    res.text = "you are not navigating. do you want to navigate home?";
                    res.end = false;
                } else {
                    res.text = "in about 9 minutes you will arrive your destination"
                }
                break;
            case eIntents.NAVIGATE_HOME:
                res.text = "openning waze";
                this.store.isNavigating = true;
                break;
            case eIntents.UNDEFINED:
                res.text = "sorry. i don't understand"
                break;
            default:
                break;
        }
        return res;
    }
}