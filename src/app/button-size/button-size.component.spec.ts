import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonSizeComponent } from './button-size.component';

describe('ButtonSizeComponent', () => {
  let component: ButtonSizeComponent;
  let fixture: ComponentFixture<ButtonSizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
