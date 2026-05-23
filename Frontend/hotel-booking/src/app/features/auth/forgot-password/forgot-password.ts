import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.css']
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