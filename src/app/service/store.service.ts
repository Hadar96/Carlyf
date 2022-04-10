import { Injectable } from "@angular/core";
import { eIntents } from "../enums/eIntents";

@Injectable()
export class StoreService {
    constructor() { }

    isInAction: boolean = false;
    isMusicOn: boolean = false;
    isNavigating: boolean = false;
    currVolume: number = 10;
    currentIntent: eIntents = eIntents.UNDEFINED;
}