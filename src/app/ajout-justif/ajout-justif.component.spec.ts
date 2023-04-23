import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutJustifComponent } from './ajout-justif.component';

describe('AjoutJustifComponent', () => {
  let component: AjoutJustifComponent;
  let fixture: ComponentFixture<AjoutJustifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutJustifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutJustifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
