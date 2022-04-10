import { Injectable } from "@angular/core";
import { eIntents } from "../enums/eIntents";
import { StoreService } from "./store.service";

@Injectable()
export class ClassifierService {
    store: StoreService;

    constructor(store: StoreService) { }

    classifyText(text: String): eIntents {
        text = text.toLowerCase();
        let res = eIntents.UNDEFINED;

        if (text.includes("tired")) {
            res = eIntents.GENERAL_TALK;
        }
        else if (text.includes("emergency") || text.includes("help")) {
            if (text.includes("contact")) res = eIntents.EMERGENCY_CONTACT;
            else res = eIntents.EMERGENCY;
        }
        else if (text.includes("music")) {
            if (this.store.isMusicOn) res = eIntents.STOP_MUSIC;
            else res = eIntents.PLAY_MUSIC;
            this.store.isMusicOn = !this.store.isMusicOn;
        }
        else if (text.includes("play")) {
            res = eIntents.PLAY_MUSIC;
            this.store.isMusicOn = true;
        }
        else if (text.includes("")) {
            res = eIntents.STOP_MUSIC;
            this.store.isMusicOn = false;
        }
        else if (text.includes("volume")) {
            if (text.includes("up") || text.includes("increase")) {
                res = eIntents.VOLUME_UP;
                this.store.currVolume++;
            }
            if (text.includes("down") || text.includes("decrease")) {
                res = eIntents.VOLUME_DOWN;
                this.store.currVolume--;
            }
        }
        else if (text.includes("home")) {
            res = eIntents.NAVIGATE_HOME;
            this.store.isNavigating = true;
        }
        else res = eIntents.UNDEFINED;

        this.store.currentIntent = res;
        return res;
    }
}