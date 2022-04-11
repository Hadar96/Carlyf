import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechToTextComponent } from './components/speech-to-text/speech-to-text.component';
import { TextToSpeechComponent } from './components/text-to-speech/text-to-speech.component';
import { BotComponent } from './components/bot/bot.component';
import { ClassifierService } from './service/classifier.service';
import { StoreService } from './service/store.service';
import { IntentPerformer } from './service/intent-performer.service';
import { HomeComponent } from './components/home/home.component';
import { BackgroundComponent } from './components/background/background.component';
import { VoiceCssComponent } from './components/voice-css/voice-css.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechToTextComponent,
    TextToSpeechComponent,
    BotComponent,
    HomeComponent,
    BackgroundComponent,
    VoiceCssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [
    StoreService,
    IntentPerformer,
    ClassifierService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
