import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseMessageComponent } from './firebase-message.component';

describe('FirebaseMessageComponent', () => {
  let component: FirebaseMessageComponent;
  let fixture: ComponentFixture<FirebaseMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirebaseMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
