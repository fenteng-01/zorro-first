import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconCustomComponent } from './icon-custom.component';

describe('IconCustomComponent', () => {
  let component: IconCustomComponent;
  let fixture: ComponentFixture<IconCustomComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
