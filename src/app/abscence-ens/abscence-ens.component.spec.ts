import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbscenceEnsComponent } from './abscence-ens.component';

describe('AbscenceEnsComponent', () => {
  let component: AbscenceEnsComponent;
  let fixture: ComponentFixture<AbscenceEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbscenceEnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbscenceEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
