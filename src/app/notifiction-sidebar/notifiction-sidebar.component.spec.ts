import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifictionSidebarComponent } from './notifiction-sidebar.component';

describe('NotifictionSidebarComponent', () => {
  let component: NotifictionSidebarComponent;
  let fixture: ComponentFixture<NotifictionSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifictionSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifictionSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
