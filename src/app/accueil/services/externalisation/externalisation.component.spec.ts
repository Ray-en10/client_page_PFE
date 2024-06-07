import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalisationComponent } from './externalisation.component';

describe('ExternalisationComponent', () => {
  let component: ExternalisationComponent;
  let fixture: ComponentFixture<ExternalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalisationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExternalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
