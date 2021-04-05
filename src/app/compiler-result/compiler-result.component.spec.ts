import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerResultComponent } from './compiler-result.component';

describe('CompilerResultComponent', () => {
  let component: CompilerResultComponent;
  let fixture: ComponentFixture<CompilerResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilerResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilerResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
