import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from '../../service/voice-recognition.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private isRunnig = false;;

  constructor(public voiceRecognitionService: VoiceRecognitionService) { }

  ngOnInit(): void {
  }

  toggle() {
    this.isRunnig ? this.voiceRecognitionService.stop() : this.voiceRecognitionService.start();
    this.isRunnig = !this.isRunnig;
  }
}
