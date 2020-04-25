import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotkeyHomeComponent } from './hotkey-home.component';

describe('HotkeyHomeComponent', () => {
  let component: HotkeyHomeComponent;
  let fixture: ComponentFixture<HotkeyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotkeyHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotkeyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
