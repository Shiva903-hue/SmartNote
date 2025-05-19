import { Notebook } from "lucide-react";
import  { useState } from "react";
import {  Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form is submitted","email", email, "password",password,"terms and conadition", rememberMe);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0f172a] p-4">
      <div className="mb-8 flex items-center gap-2">
        <div className="flex h-12 w-12 text-white items-center justify-center rounded-full ">
          <Notebook size={32} />
        </div>
        <span className="text-3xl font-bold text-white">SmartNote</span>
      </div>

      <div className="w-full max-w-md rounded-lg bg-[#1e293b] p-8 shadow-lg">
        <h1 className="mb-2 text-3xl font-bold text-white">
          Sign in to your account
        </h1>
        <p className="mb-6 text-sm text-[#94a3b8]">
          Join our community of thinkers and creators to access a suite of
          powerful note-taking tools, customizable templates, and collaborative
          features. Elevate your productivity and transform your ideas into
          organized, actionable plans.
        </p>
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-[#94a3b8]">
              Your email
            </label>
            <input
              id="email"
              required
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-full rounded-md border border-[#334155] bg-[#1e293b] px-4 text-white focus:border-[#3b82f6] focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="mb-2 block text-[#94a3b8]">
              Your password
            </label>
            <input
              id="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 w-full rounded-md border border-[#334155] bg-[#1e293b] px-4 text-white focus:border-[#3b82f6] focus:outline-none"
            />
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                id="remember"
                required
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-[#334155] bg-[#1e293b]"
              />
              <label htmlFor="remember" className="text-sm text-[#94a3b8]">
                Remember me
              </label>
            </div>
            <Link
              to="#"
              className="text-sm ml-1 text-[#3b82f6] hover:underline"
            >
              Forget password
            </Link>
          </div>

          <button
            type="submit"
            className="mb-6 cursor-pointer h-12 w-full font-semibold rounded-md bg-[#3b82f6] text-white hover:bg-[#2563eb]"
          >
            Login
          </button>
        </form>
        <div className="text-center text-[#94a3b8]">
          Not Ragistered?
          <Link to="/create" className="text-[#3b82f6] hover:underline">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
