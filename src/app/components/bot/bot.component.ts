import { Component, OnInit } from '@angular/core';
import { eIntents } from 'app/enums/eIntents';
import { ClassifierService } from 'app/service/classifier.service';
import { IntentPerformer } from 'app/service/intent-performer.service';
import { SpeechSynthesisService } from 'app/service/speech-synthesis.service';
import { VoiceRecognitionService } from 'app/service/voice-recognition.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.sass']
})
export class BotComponent implements OnInit {

  constructor(private classifier: ClassifierService,
    private performer: IntentPerformer,
    private tts: SpeechSynthesisService,
    private stt: VoiceRecognitionService) {
    this.listenToUser();
  }

  ngOnInit(): void {
    this.stt.init();
  }

  listenToUser() {
    this.stt.userMsg$.pipe(
      map(text => this.classifier.classifyText(text)),
      // tap(intent => console.log("yoooooooooo", intent)),
      map(intent => this.performer.responseToIntent(intent)),
      map(res => this.tts.speak(res.text))
    ).subscribe(res => { });
  }

  performIntent(intent: eIntents) {
  }

}
