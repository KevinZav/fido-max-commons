import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FidoMaxComponent } from './fido-max.component';

describe('FidoMaxComponent', () => {
  let component: FidoMaxComponent;
  let fixture: ComponentFixture<FidoMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FidoMaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FidoMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
