import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerMainComponent } from './compiler-main.component';

describe('CompilerMainComponent', () => {
  let component: CompilerMainComponent;
  let fixture: ComponentFixture<CompilerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilerMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
