import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- For *ngIf
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login', // (or your specific component selector)
  standalone: true,      // (Ensure this is true if using standalone)
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule, ReactiveFormsModule] // <-- Add both here
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.errorMessage = '';

    const payload = this.loginForm.value;
    console.log('Login Form Submitted Data:', payload);

    // TODO: Connect to shared authService once your teammate pushes core
    // Temporary simulation for front-end validation testing:
    setTimeout(() => {
      this.loading = false;
      alert('Local Form Validation Passed! Ready for API Integration.');
    }, 1000);
  }
}