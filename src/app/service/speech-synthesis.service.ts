import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechSynthesisService {
  private voices: SpeechSynthesisVoice[] = [];
  constructor() {
    speechSynthesis.addEventListener("voiceschanged", () => {
      this.voices = speechSynthesis.getVoices()
    })
  }

  speak(text: string) {
    const utter = new window.SpeechSynthesisUtterance(text);

    utter.voice = this.voices[5];
    window.speechSynthesis.cancel(); // this needs to be here without it does not work
    window.speechSynthesis.speak(utter);
  }
}
