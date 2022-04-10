import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voice-css',
  templateUrl: './voice-css.component.html',
  styleUrls: ['./voice-css.component.css']
})
export class VoiceCssComponent implements OnInit {

  public isTalking = false;

  constructor() { }

  ngOnInit(): void {
  }

}
