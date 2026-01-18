import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import './LoginPage.css';

/**
 * ===============================
 * TypeScript Types
 * ===============================
 */
interface Errors {
  email?: string;      // Error message for email input
  password?: string;   // Error message for password input
  submit?: string;     // Error message for overall form submission
}

/**
 * ===============================
 * LoginPage Component
 * ===============================
 */
const LoginPage: React.FC = () => {
  // ===============================
  // State Management
  // ===============================
  const [email, setEmail] = useState<string>('');         // Stores the user's email input
  const [password, setPassword] = useState<string>('');   // Stores the user's password input
  const [showPassword, setShowPassword] = useState<boolean>(false); // Toggle password visibility
  const [errors, setErrors] = useState<Errors>({});      // Stores form validation errors

  // ===============================
  // Form Submission Handler
  // ===============================
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Reset previous errors
    setErrors({});

    // Temporary object to hold validation errors
    const newErrors: Errors = {};

    // -------------------------------
    // Email Validation
    // -------------------------------
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // -------------------------------
    // Password Validation
    // -------------------------------
    if (!password) {
      newErrors.password = 'Password is required';
    }

    // -------------------------------
    // If there are errors, show them
    // -------------------------------
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // -------------------------------
    // TODO: Connect to backend API
    // Example: POST /api/auth/login
    // Payload: { email, password }
    // -------------------------------
    console.log('Login attempt:', { email, password });
    alert('Connect to backend: POST /api/auth/login');
  };

  

  // ===============================
  // Forgot Password Handler
  // ===============================
  const handleForgotPassword = (_e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: Trigger password reset flow
    console.log('Forgot password clicked');
    alert('Connect to backend: Password reset flow');
  };

  // ===============================
  // Sign Up Navigation Handler
  // ===============================
  const handleSignUp = (_e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: Navigate user to sign-up page
    console.log('Sign up clicked');
    alert('Navigate to: /signup or /register');
  };

  // ===============================
  // JSX / Render
  // ===============================
  return (
    <div className="login-wrapper">
      <div className="login-container">
        {/* ===============================
            Left Image Panel
            Optional: Can be hidden on mobile
        =============================== */}
        <div className="login-image-panel">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop"
            alt="Student studying"
            className="login-image"
          />
        </div>

        {/* ===============================
            Right Form Panel
        =============================== */}
        <div className="login-form-panel">
          <div className="login-form-container">

            {/* ===============================
                Logo Section
            =============================== */}
            
            <div className="logo-container flex items-center justify-center mb-8">
           <div className="logo-badge w-20 h-20 rounded-md overflow-hidden">
          <img
          src="/WhatsApp Image 2026-01-18 at 09.42.27.jpeg"
         alt="College Logo"
        className="w-full h-full object-cover"
        />
       </div>
      </div>

            {/* ===============================
                Titles / Instructions
            =============================== */}
            <h1 className="login-title">Hello Again</h1>
            <p className="login-subtitle">
              Log in to submit requests, view notices, and monitor your academic progress.
            </p>

            {/* ===============================
                Form Section
            =============================== */}
            <div className="login-form">

              {/* -------------------------------
                  Email Input
              ------------------------------- */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={20} />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    placeholder="example@gmail.com"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                  />
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              {/* -------------------------------
                  Password Input
                  Includes visibility toggle
              ------------------------------- */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={20} />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPassword(e.target.value)
                    }
                    placeholder="••••••••••••••"
                    className={`form-input ${errors.password ? 'input-error' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>

              {/* -------------------------------
                  Forgot Password Link
              ------------------------------- */}
              <div className="forgot-password-container">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="forgot-password-link"
                >
                  Forget Password?
                </button>
              </div>

              {/* -------------------------------
                  Sign In Button
                  Calls handleSubmit
              ------------------------------- */}
              <button onClick={handleSubmit} className="sign-in-button">
                Sign In
              </button>

              {errors.submit && (
                <div className="submit-error">{errors.submit}</div>
              )}

              {/* -------------------------------
                  Divider / OR
              ------------------------------- */}
              <div className="divider-container">
                <div className="divider-line"></div>
                <span className="divider-text">OR</span>
                <div className="divider-line"></div>
              </div>

              {/* -------------------------------
                  Google Sign-In
                  Uncomment & connect backend if needed
              ------------------------------- */}
              {/*
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="google-sign-in-button"
              >
                Sign with Google
              </button>
              */}

              {/* -------------------------------
                  Sign Up Link
              ------------------------------- */}
              <p className="sign-up-prompt">
                Don't have account?{' '}
                <button
                  type="button"
                  onClick={handleSignUp}
                  className="sign-up-link"
                >
                  SIGN UP
                </button>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
