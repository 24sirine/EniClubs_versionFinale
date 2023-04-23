import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiExaComponent } from './emploiExa.component';

describe('MatiereEleveComponent', () => {
  let component: EmploiExaComponent;
  let fixture: ComponentFixture<EmploiExaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploiExaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploiExaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
