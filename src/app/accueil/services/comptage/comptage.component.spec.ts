import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptageComponent } from './comptage.component';

describe('ComptageComponent', () => {
  let component: ComptageComponent;
  let fixture: ComponentFixture<ComptageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComptageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComptageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
