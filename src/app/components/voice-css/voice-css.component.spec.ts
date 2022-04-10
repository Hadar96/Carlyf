import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceCssComponent } from './voice-css.component';

describe('VoiceCssComponent', () => {
  let component: VoiceCssComponent;
  let fixture: ComponentFixture<VoiceCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
