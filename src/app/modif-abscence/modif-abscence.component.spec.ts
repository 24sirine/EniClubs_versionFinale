import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAbscenceComponent } from './modif-abscence.component';

describe('ModifAbscenceComponent', () => {
  let component: ModifAbscenceComponent;
  let fixture: ComponentFixture<ModifAbscenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifAbscenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifAbscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
