import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotkeyPanelComponent } from './hotkey-panel.component';

describe('HotkeyPanelComponent', () => {
  let component: HotkeyPanelComponent;
  let fixture: ComponentFixture<HotkeyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotkeyPanelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotkeyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
