import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderComponent } from './loader';

describe('LoaderComponent', () => {

  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [LoaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
  });

  it('should create loader', () => {
    expect(component).toBeTruthy();
  });

  it('should default loading false', () => {
    expect(component.loading).toBeFalsy();
  });

});