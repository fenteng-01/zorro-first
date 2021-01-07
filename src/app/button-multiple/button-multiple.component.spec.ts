import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonMultipleComponent } from './button-multiple.component';

describe('ButtonMultipleComponent', () => {
  let component: ButtonMultipleComponent;
  let fixture: ComponentFixture<ButtonMultipleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
