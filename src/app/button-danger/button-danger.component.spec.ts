import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonDangerComponent } from './button-danger.component';

describe('ButtonDangerComponent', () => {
  let component: ButtonDangerComponent;
  let fixture: ComponentFixture<ButtonDangerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
