import { Injectable } from "@angular/core";
import { eIntents } from "app/enums/eIntents";

@Injectable()
export class IntentPerformer {
    constructor() { }

    responseToIntent(intent: eIntents) {
        const res = { text: "" };
        switch (intent) {
            case eIntents.GENERAL_TALK:
                //
                break;
            case eIntents.EMERGENCY:
                res.text = "calling 911";
                break;
            case eIntents.EMERGENCY_CONTACT:
                res.text = "calling Moshe Kenzin"
                break;
            case eIntents.VOLUME_UP:
                //
                break;
            case eIntents.VOLUME_DOWN:
                //
                break;
            case eIntents.PLAY_MUSIC:
                //
                break;
            case eIntents.STOP_MUSIC:
                //
                break;
            case eIntents.ETA:
                //
                break;
            case eIntents.NAVIGATE_HOME:
                break;
            case eIntents.UNDEFINED:
                break;
            default:
                break;
        }
        return res;
    }
}