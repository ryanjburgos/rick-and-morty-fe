import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCharacterDetailsComponent } from './modal-character-details.component';

describe('ModalCharacterDetailsComponent', () => {
  let component: ModalCharacterDetailsComponent;
  let fixture: ComponentFixture<ModalCharacterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCharacterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
