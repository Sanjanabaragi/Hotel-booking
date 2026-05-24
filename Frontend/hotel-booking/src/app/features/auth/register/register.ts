import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,                          // <-- Add this
=======
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
>>>>>>> 462dd22762710153fd34e103e7d67f66a91e32c2
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  imports: [CommonModule, ReactiveFormsModule] // <-- Add this
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const payload = this.registerForm.value;
    console.log('Registration Form Submitted Data:', payload);

    // Simulated standalone behavior
    setTimeout(() => {
      this.loading = false;
      this.successMessage = 'Local Validation Passed! Registration logic active.';
    }, 1000);
  }
}