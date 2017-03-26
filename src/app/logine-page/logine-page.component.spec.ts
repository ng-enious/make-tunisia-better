import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginePageComponent } from './logine-page.component';

describe('LoginePageComponent', () => {
  let component: LoginePageComponent;
  let fixture: ComponentFixture<LoginePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
