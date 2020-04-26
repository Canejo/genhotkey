import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotkeySaveComponent } from './hotkey-save.component';

describe('HotkeySaveComponent', () => {
  let component: HotkeySaveComponent;
  let fixture: ComponentFixture<HotkeySaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotkeySaveComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotkeySaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
