import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonButtonGroupComponent } from './button-button-group.component';

describe('ButtonButtonGroupComponent', () => {
  let component: ButtonButtonGroupComponent;
  let fixture: ComponentFixture<ButtonButtonGroupComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
