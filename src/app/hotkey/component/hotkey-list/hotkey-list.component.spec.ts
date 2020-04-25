import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotkeyListComponent } from './hotkey-list.component';

describe('HotkeyListComponent', () => {
  let component: HotkeyListComponent;
  let fixture: ComponentFixture<HotkeyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotkeyListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotkeyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
