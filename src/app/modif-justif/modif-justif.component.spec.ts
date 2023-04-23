import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifJustifComponent } from './modif-justif.component';

describe('ModifJustifComponent', () => {
  let component: ModifJustifComponent;
  let fixture: ComponentFixture<ModifJustifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifJustifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifJustifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
