import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddGameComponent } from './admin-add-game.component';

describe('AdminAddGameComponent', () => {
  let component: AdminAddGameComponent;
  let fixture: ComponentFixture<AdminAddGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddGameComponent]
    });
    fixture = TestBed.createComponent(AdminAddGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
