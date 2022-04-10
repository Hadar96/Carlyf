import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechSynthesisService {

  constructor() { }

  speak(text:string) {
    const utter = new window.SpeechSynthesisUtterance(text);

    window.speechSynthesis.cancel(); // this needs to be here without it does not work
    window.speechSynthesis.speak(utter);
  }
}
