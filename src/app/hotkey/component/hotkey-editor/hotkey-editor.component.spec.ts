import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotkeyEditorComponent } from './hotkey-editor.component';

describe('HotkeyEditorComponent', () => {
  let component: HotkeyEditorComponent;
  let fixture: ComponentFixture<HotkeyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotkeyEditorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotkeyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
