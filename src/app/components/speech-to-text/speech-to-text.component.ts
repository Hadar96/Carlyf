import { Component, Injector } from '@angular/core';
import { VoiceRecognitionService } from '../../service/voice-recognition.service'
import { UsersListService } from 'app/service/users-list.service';

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.sass']
})
export class SpeechToTextComponent {


  constructor(
    public service : VoiceRecognitionService,
    public usersService:UsersListService
  ) { 
    this.service.init()
  }

  ngOnInit(): void {
  }

  startService() {
    this.service.start()
  }

  stopService() {
    this.service.stop()
  }
}