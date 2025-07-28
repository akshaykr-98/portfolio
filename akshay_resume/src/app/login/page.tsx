'use client'

// React hooks for state management and Next.js Link component
import { useState } from 'react';
import Link from 'next/link';
import { UserLogin } from '@/services/common';
import { useRouter } from 'next/navigation';

/**
 * Login Page Component
 * Handles user authentication with email and password
 */
export default function Login() {
  // State variables for form inputs and loading status
  const [email, setEmail] = useState(''); // User's email input
  const [password, setPassword] = useState(''); // User's password input
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const router = useRouter();
  /**
   * Handles login form submission
   * @param e - Form event object
   */
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Show loading state

    try {
      // TODO: Replace with actual API call to authentication service
      const result = await UserLogin(email, password)
      console.log("====login result ===", result);
      if (result.status == 200) {
        router.push('/dashboard'); // navigate to dashboard
      }
      // Simulate API call delay
      // await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      // Handle login errors (network issues, invalid credentials, etc.)
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    } finally {
      // Reset loading state regardless of success or failure
      setLoading(false);
    }
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

      {/* Login card with form elements */}
      <div className="auth-card">
        {/* Header section with title and subtitle */}
        <div className="auth-header">
          <h1>🔐 Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>

        {/* Login form with email and password fields */}
        <form onSubmit={handleLogin} className="auth-form">
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
              placeholder="Enter your password"
              required // HTML5 validation
            />
          </div>

          {/* Submit button with loading state */}
          <button type="submit" className="auth-btn primary" disabled={loading}>
            {loading ? '⏳ Signing in...' : '🚀 Sign In'}
          </button>
        </form>

        {/* Footer with link to signup page */}
        <div className="auth-footer">
          <p>Don't have an account? <Link href="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}