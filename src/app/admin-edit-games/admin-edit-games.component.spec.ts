import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditGamesComponent } from './admin-edit-games.component';

describe('AdminEditGamesComponent', () => {
  let component: AdminEditGamesComponent;
  let fixture: ComponentFixture<AdminEditGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditGamesComponent]
    });
    fixture = TestBed.createComponent(AdminEditGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
