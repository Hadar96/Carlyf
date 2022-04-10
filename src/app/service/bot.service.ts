import { Injectable } from "@angular/core";
import { ClassifierService } from "./classifier.service";
import { SpeechSynthesisService } from "./speech-synthesis.service";
import { VoiceRecognitionService } from "./voice-recognition.service";

@Injectable()
export class BotService {
    private classifier: ClassifierService;
    private tts: SpeechSynthesisService;
    private stt: VoiceRecognitionService;

    constructor(private classifier: ClassifierService,
        private tts: SpeechSynthesisService,
        private stt: VoiceRecognitionService) {
        //
    }
}