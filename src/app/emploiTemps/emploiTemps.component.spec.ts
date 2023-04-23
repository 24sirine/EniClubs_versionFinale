import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiTempsComponent } from './emploiTemps.component';

describe('ModuleEleveComponent', () => {
  let component: EmploiTempsComponent;
  let fixture: ComponentFixture<EmploiTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploiTempsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploiTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
