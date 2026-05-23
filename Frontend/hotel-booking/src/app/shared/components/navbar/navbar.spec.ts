import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { AuthService } from 'src/app/core/services/auth.service';

describe('NavbarComponent', () => {

  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  const authServiceMock = {
    isLoggedIn: jasmine.createSpy().and.returnValue(true),
    getCurrentUser: jasmine.createSpy().and.returnValue({
      fullName: 'Sahana'
    }),
    logout: jasmine.createSpy()
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [NavbarComponent],

      providers: [
        {
          provide: AuthService,
          useValue: authServiceMock
        }
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create navbar component', () => {
    expect(component).toBeTruthy();
  });

  it('should display username', () => {
    expect(component.userName).toBe('Sahana');
  });

  it('should call logout', () => {

    component.logout();

    expect(authServiceMock.logout).toHaveBeenCalled();
  });
});