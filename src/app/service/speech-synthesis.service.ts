import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeechSynthesisService {

  public isTalking$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  speak(text: string) {
    const utter = new window.SpeechSynthesisUtterance(text);

    window.speechSynthesis.cancel(); // this needs to be here without it does not work
    this.isTalking$.next(true);
    window.speechSynthesis.speak(utter);
    this.isStillTalking();
  }

  isStillTalking() {
    if (!window.speechSynthesis.speaking) {
      this.isTalking$.next(false);
    }
    else {
      var that = this;
      setTimeout(function () {
          that.isStillTalking();
      }, 10);
    }

  }
}
