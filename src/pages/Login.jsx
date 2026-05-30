import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dummyEmail = "admin@recruitment.com";
  const dummyPassword = "admin123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email wajib diisi");
      return;
    }

    if (!password) {
      setError("Password wajib diisi");
      return;
    }

    if (email !== dummyEmail || password !== dummyPassword) {
      setError("Email atau password salah");
      return;
    }

    setError("");
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Mini Recruitment Dashboard</h1>
          <p className="text-sm text-gray-500 mt-2">Login untuk masuk ke dashboard</p>
        </div>

        {error && <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="admin@recruitment.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="admin123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button type="submit" className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Email: admin@recruitment.com</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
