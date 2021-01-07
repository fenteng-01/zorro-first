import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonBlockComponent } from './button-block.component';

describe('ButtonBlockComponent', () => {
  let component: ButtonBlockComponent;
  let fixture: ComponentFixture<ButtonBlockComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
