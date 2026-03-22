import './Login.css'

const Login = () => {
  const handleLogin = () => {
    // Redirect to your backend login route
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    window.location.href = `${backendUrl}/auth/google/login`;
  };

  return (
    <>
     <div className="login-container">
      <h1>Wellness Tracker</h1>
      <p>Track your wellness journey and stay healthy every day.</p>
      <button className="google-button" onClick={handleLogin}>
        Sign in with Google
      </button>
    </div>
    </>
  )
}

export default Login
