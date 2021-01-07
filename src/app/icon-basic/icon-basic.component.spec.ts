import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconBasicComponent } from './icon-basic.component';

describe('IconBasicComponent', () => {
  let component: IconBasicComponent;
  let fixture: ComponentFixture<IconBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
