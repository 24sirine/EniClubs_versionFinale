import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAbscenceComponent } from './detail-abscence.component';

describe('DetailAbscenceComponent', () => {
  let component: DetailAbscenceComponent;
  let fixture: ComponentFixture<DetailAbscenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAbscenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAbscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
