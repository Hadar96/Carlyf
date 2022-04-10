import { Component, OnInit } from '@angular/core';
import { SpeechSynthesisService } from 'src/app/service/speech-synthesis.service';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.sass']
})
export class TextToSpeechComponent implements OnInit {

  public textValue: any;
  constructor(public speechSynthesisService: SpeechSynthesisService) { }

  ngOnInit(): void {
  }

  speak() {
    this.textValue = "hello world";
    this.speechSynthesisService.speak(this.textValue)
  }

}
