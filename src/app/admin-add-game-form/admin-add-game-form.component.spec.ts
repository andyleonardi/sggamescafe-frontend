import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddGameFormComponent } from './admin-add-game-form.component';

describe('AdminAddGameFormComponent', () => {
  let component: AdminAddGameFormComponent;
  let fixture: ComponentFixture<AdminAddGameFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddGameFormComponent]
    });
    fixture = TestBed.createComponent(AdminAddGameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
