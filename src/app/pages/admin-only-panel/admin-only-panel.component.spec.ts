import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOnlyPanelComponent } from './admin-only-panel.component';

describe('AdminOnlyPanelComponent', () => {
  let component: AdminOnlyPanelComponent;
  let fixture: ComponentFixture<AdminOnlyPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOnlyPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOnlyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
