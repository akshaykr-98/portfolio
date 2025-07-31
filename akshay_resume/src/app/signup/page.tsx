'use client'

// React hooks for state management and Next.js Link component
import { useState } from 'react';
import Link from 'next/link';
import { SignUp } from '@/services/common';
import { useRouter } from 'next/navigation';

/**
 * Signup Page Component
 * Handles user registration with email/password and Google OAuth
 */
export default function Signup() {
  // State variables for form inputs and loading status
  const [name, setName] = useState(''); // User's name input
  const [email, setEmail] = useState(''); // User's email input
  const [password, setPassword] = useState(''); // User's password input
  const [confirmPassword, setConfirmPassword] = useState(''); // Password confirmation
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const router = useRouter();
  /**
   * Handles signup form submission with validation
   * @param e - Form event object
   */
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Validate password confirmation
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true); // Show loading state
    try {
      // TODO: Replace with actual API call to registration service
      const signup = await SignUp(name, email, password)
      console.log("====SIGNUP result ===", signup);
      if (signup.status == 200) {
        router.push('/login'); // navigate to dashboard
      }
      // Simulate API call delay
      // await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      // Handle signup errors (network issues, email already exists, etc.)
      console.error('Signup failed:', error);
      alert("Something Went Wrong, Please try again!")
    } finally {
      // Reset loading state regardless of success or failure
      setLoading(false);
    }
  };

  /**
   * Handles Google OAuth signup
   * TODO: Integrate with Google OAuth API
   */
  const handleGoogleSignup = () => {
    console.log('Google signup clicked');
    // Add Google OAuth logic here
  };

  return (
    // Main container with background image
    <div className="auth-container">
      {/* Left side tagline */}
      <div className="auth-tagline">
        <h1>
          Profile once.<br />
          Be seen everywhere.
        </h1>
      </div>

      {/* Signup card with form elements */}
      <div className="auth-card">
        {/* Header section with title */}
        <div className="auth-header">
          <h1>🚀 Create Account</h1>
          {/* Subtitle removed to save space */}
        </div>

        {/* Signup form with email, password, and confirmation fields */}
        <form onSubmit={handleSignup} className="auth-form">
          {/* Name input field */}
          <div className="form-group">
            <label>🏷️ Name</label>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name state
              placeholder="Enter your Name"
              required // HTML5 validation
            />
          </div>

          {/* Email input field */}
          <div className="form-group">
            <label>📧 Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              placeholder="Enter your email"
              required // HTML5 validation
            />
          </div>

          {/* Password input field */}
          <div className="form-group">
            <label>🔒 Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              placeholder="Create password"
              required // HTML5 validation
            />
          </div>

          {/* Password confirmation field */}
          <div className="form-group">
            <label>🔐 Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state
              placeholder="Confirm password"
              required // HTML5 validation
            />
          </div>

          {/* Submit button with loading state */}
          <button type="submit" className="auth-btn primary" disabled={loading}>
            {loading ? '⏳ Creating...' : '✨ Create Account'}
          </button>
        </form>

        {/* Divider between form and Google signup */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Google OAuth signup button with official logo - centered at bottom */}
        <button onClick={handleGoogleSignup} className="auth-btn google">
          {/* Official Google logo SVG with proper colors */}
          <svg className="google-logo" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        {/* Footer with link to login page */}
        <div className="auth-footer">
          <p>Already have an account? <Link href="/login">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
}