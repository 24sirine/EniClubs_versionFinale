import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAbscenceComponent } from './ajout-abscence.component';

describe('AjoutAbscenceComponent', () => {
  let component: AjoutAbscenceComponent;
  let fixture: ComponentFixture<AjoutAbscenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAbscenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutAbscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
