import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembershipSchemeComponent } from './add-membership-scheme.component';

describe('AddMembershipSchemeComponent', () => {
  let component: AddMembershipSchemeComponent;
  let fixture: ComponentFixture<AddMembershipSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMembershipSchemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMembershipSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
