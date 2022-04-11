import { Component } from '@angular/core';
import { SpeechSynthesisService } from '../../service/speech-synthesis.service';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.sass']
})
export class TextToSpeechComponent {

  public textValue: any;
  constructor(public speechSynthesisService: SpeechSynthesisService) { }

  speak() {
    this.textValue = "hey my name is carly";
    this.speechSynthesisService.speak(this.textValue)
  }

}
