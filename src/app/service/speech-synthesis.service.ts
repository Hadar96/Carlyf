import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeechSynthesisService {
  private voices: SpeechSynthesisVoice[] = [];
  public isTalking$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    speechSynthesis.addEventListener("voiceschanged", () => {
      this.voices = speechSynthesis.getVoices()
    })
  }




  speak(text: string) {
    const utter = new window.SpeechSynthesisUtterance(text);

    utter.voice = this.voices[5];
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
