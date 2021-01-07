import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonGhostComponent } from './button-ghost.component';

describe('ButtonGhostComponent', () => {
  let component: ButtonGhostComponent;
  let fixture: ComponentFixture<ButtonGhostComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGhostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
