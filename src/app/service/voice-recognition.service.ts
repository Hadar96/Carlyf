import { Injectable } from '@angular/core';
import { Observable, Subject, timeout } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { StoreService } from './store.service';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {

  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  public text$: Subject<string> = new Subject<string>();
  tempWords: any;

  public userMsg$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  private timer$: any;

  constructor(private store: StoreService) { }

  init() {

    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);

      if (transcript.toLocaleLowerCase() === "hey carly") {
        this.store.isActive = true;
        // this.timer$?.remove();
        this.timer$ = setTimeout(() => { this.store.isActive = false; }, 5000);
      }

      if (!this.store.isActive) return;

      this.timer$?.remove();
      this.timer$ = setTimeout(() => { this.store.isActive = false; }, 5000);

      this.userMsg$.next(transcript);
    });
  }

  start() {
    this.text = '';
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log("Speech recognition started")
    this.recognition.addEventListener('end', (condition: any) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log("End speech recognition")
      } else {
        this.wordConcat()
        this.recognition.start();
      }
    });
  }
  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat()
    this.recognition.stop();
    console.log("End speech recognition");
    this.text$.next(this.text);
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }
}