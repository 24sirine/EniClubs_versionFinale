import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJustifComponent } from './detail-justif.component';

describe('DetailJustifComponent', () => {
  let component: DetailJustifComponent;
  let fixture: ComponentFixture<DetailJustifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailJustifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailJustifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
