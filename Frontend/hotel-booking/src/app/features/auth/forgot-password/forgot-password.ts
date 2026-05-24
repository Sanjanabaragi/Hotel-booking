import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,                          // <-- Add this
=======
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
>>>>>>> 462dd22762710153fd34e103e7d67f66a91e32c2
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.css'],
  imports: [CommonModule, ReactiveFormsModule] // <-- Add this
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.forgotForm.invalid) return;

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    console.log('Requesting reset for:', this.forgotForm.get('email')?.value);

    // Simulated standalone behavior
    setTimeout(() => {
      this.loading = false;
      this.successMessage = 'Reset token submission validated successfully.';
      this.forgotForm.reset();
    }, 1000);
  }
}