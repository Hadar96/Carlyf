import { Component, OnInit } from '@angular/core';
import { SpeechSynthesisService } from '../../service/speech-synthesis.service';

@Component({
  selector: 'app-voice-css',
  templateUrl: './voice-css.component.html',
  styleUrls: ['./voice-css.component.css']
})
export class VoiceCssComponent implements OnInit {

  public isTalking = false;

  constructor(public speechSynthesisService: SpeechSynthesisService) { }

  ngOnInit(): void {
    this.speechSynthesisService.isTalking$.subscribe(value => {
      this.isTalking = value;
    })
  }

}
