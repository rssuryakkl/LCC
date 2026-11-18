import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, SignupRequest } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  username = '';
  password = '';
  rememberMe = false;
  showPassword = false;
  showForgotPassword = false;
  forgotEmail = '';
  forgotOtp = '';
  errorMessage = '';
  successMessage = '';
  signupError = '';
  isLoggingIn = false;
  otpSent = false;
  otp: string[] = ['', '', '', '', '', ''];
  showSignup = false;
  signupData = {
    fullName: '',
    username: '',
    email: '',
    mobile: '',
    createPassword: '',
    confirmPassword: ''
  };

  showCreatePassword = false;
  showConfirmPassword = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  images = [
    '/asset/helping-person1.png',
    '/asset/helping-person2.png',
    '/asset/helping-person3.png'
  ];

  currentSlide = 0;
  private sliderInterval: ReturnType<typeof setInterval> | undefined;
  isSigningUp = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.startSliderTimer();
  }

  // Existing auth & slider logic
  private startSliderTimer(): void {
    this.sliderInterval = setInterval(() => {
      this.currentSlide++;
      if (this.currentSlide >= this.images.length) {
        this.currentSlide = 0;
      }
    }, 5000);
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
    this.startSliderTimer();
  }


  openSignup(event: Event): void {
    event.preventDefault();
    this.successMessage = '';
    this.errorMessage = '';
    this.signupError = '';
    this.showSignup = true;
  }

  closeSignup(): void {
    this.showSignup = false;
    this.signupError = '';
  }

  openForgotPassword(event: Event): void {
    event.preventDefault();
    this.showSignup = false;
    this.showForgotPassword = true;
    this.otpSent = false;
    this.otp = ['', '', '', '', '', ''];
  }

  closeForgotPassword(): void {
    this.showForgotPassword = false;
  }

  sendForgotOtp(): void {
    if (!this.forgotEmail.trim()) {
      alert('Please enter your email address');
      return;
    }

    this.otpSent = true;
  }

  verifyOtp(): void {
    const enteredOtp = this.otp.join('');

    if (enteredOtp.length !== 6) {
      alert('Please enter all 6 digits');
      return;
    }

    alert('OTP verification API connect செய்ய வேண்டும்.');
  }

  submitSignup(): void {
    this.signupError = '';

    if (
      !this.signupData.fullName.trim() ||
      !this.signupData.username.trim() ||
      !this.signupData.email.trim() ||
      !this.signupData.mobile.trim() ||
      !this.signupData.createPassword ||
      !this.signupData.confirmPassword
    ) {
      this.signupError = 'Please fill all fields';
      this.cdr.detectChanges();
      return;
    }

    if (!/^\d{10,15}$/.test(this.signupData.mobile.trim())) {
      this.signupError = 'Enter a valid 10-digit mobile number';
      this.cdr.detectChanges();
      return;
    }

    if (this.signupData.createPassword.length < 8) {
      this.signupError = 'Password must contain at least 8 characters';
      this.cdr.detectChanges();
      return;
    }

    if (
      this.signupData.createPassword !==
      this.signupData.confirmPassword
    ) {
      this.signupError = 'Passwords do not match';
      this.cdr.detectChanges();
      return;
    }

    const payload: SignupRequest = {
      fullName: this.signupData.fullName.trim(),
      username: this.signupData.username.trim(),
      email: this.signupData.email.trim(),
      mobileNumber: this.signupData.mobile.trim(),
      password: this.signupData.createPassword,
      confirmPassword: this.signupData.confirmPassword
    };

    this.isSigningUp = true;
    this.cdr.detectChanges();

    this.authService.signup(payload).subscribe({
      next: (response) => {
        this.isSigningUp = false;
        this.showSignup = false;
        this.signupError = '';

        // 1. Return to login page and pre-fill credentials
        this.username = payload.username;
        this.password = payload.password;
        this.successMessage = 'Account created successfully! Please click Login to continue to your Dashboard.';
        this.errorMessage = '';

        // Reset signup form
        this.signupData = {
          fullName: '',
          username: '',
          email: '',
          mobile: '',
          createPassword: '',
          confirmPassword: ''
        };

        this.cdr.detectChanges();
      },
      error: (error) => {
        this.isSigningUp = false;
        const msg = error.error?.message || (error.status === 0 ? 'Cannot reach backend server. Please verify port 5000 is running.' : 'Signup failed. Please try again.');
        this.signupError = msg;
        this.cdr.detectChanges();
      }
    });
  }



  loginUser(): void {
    if (!this.username.trim() || !this.password) {
      this.errorMessage = 'Please enter your username and password';
      this.successMessage = '';
      this.cdr.detectChanges();
      return;
    }

    this.errorMessage = '';
    this.isLoggingIn = true;
    this.cdr.detectChanges();

    this.authService.login({
      username: this.username.trim(),
      password: this.password
    }).subscribe({
      next: (res: any) => {
        this.isLoggingIn = false;
        this.errorMessage = '';
        this.successMessage = '';
        this.cdr.detectChanges();

        // 2. Navigate to Dashboard upon login
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        this.isLoggingIn = false;
        this.errorMessage = err.error?.message || 'Invalid username or password';
        this.cdr.detectChanges();
      }
    });
  }

  refreshPage(): void {
    window.location.reload();
  }

  ngOnDestroy(): void {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }
}