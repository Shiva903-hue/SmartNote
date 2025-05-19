import { Notebook } from "lucide-react";
import  { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [varified , setVarified] = useState(null);


  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!terms) {
      alert("You must agree to the terms and conditions");
      return;
    }
    if (password !== cpassword) {
      setVarified(false);
      return;
    }
    console.log(
      "Account created successfully",
      "name",
      name,
      "lastname",
      lastname,
      "email",
      email,
      "password",
      password,
      "terms and conadition",
      terms
    );
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0f172a] p-4">
      <div className="mb-8 flex items-center gap-2">
        <div className="flex h-12 w-12 text-white items-center justify-center rounded-full ">
          <Notebook size={32} />
        </div>
        <span className="text-3xl font-bold text-white">SmartNote</span>
      </div>

      <div className=" max-w-xl rounded-lg bg-[#1e293b] p-8 shadow-lg">
        <h1 className="mb-2 text-3xl font-bold text-white">
          Create an account
        </h1>
        <p className="mb-6 text-sm text-[#94a3b8]">
          Join our community of thinkers and creators to access a suite of
          powerful note-taking tools, customizable templates, and collaborative
          features. Elevate your productivity and transform your ideas into
          organized, actionable plans.
        </p>
        <form onSubmit={handleSubmit} >
          <div className="flex gap-3 flex-wrap">
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block text-[#94a3b8]">
                First name
              </label>
              <input
                id="name"
                required
                type="text"
                placeholder="shivam"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 w-full rounded-md border border-[#334155] bg-[#1e293b] px-4 text-white focus:border-[#3b82f6] focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lastname" className="mb-2 block text-[#94a3b8]">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                required
                placeholder="waghmare"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="h-12 w-full rounded-md border border-[#334155] bg-[#1e293b] px-4 text-white focus:border-[#3b82f6] focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="mb-2 block text-[#94a3b8]">
              Your email
            </label>
            <input
              id="email"
              placeholder="shivamwagm@gmail.com"
              type="email"
              required
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
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 w-full rounded-md border border-[#334155] bg-[#1e293b] px-4 text-white focus:border-[#3b82f6] focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="Cpassword" className="mb-2 block text-[#94a3b8]">
              Confirm password
            </label>
            <input
              id="Cpassword"
              type="password"
              required
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              className="h-12 w-full rounded-md border border-[#334155] bg-[#1e293b] px-4 text-white focus:border-[#3b82f6] focus:outline-none"
            />
            {varified === false && (
              <p className="text-red-500 text-sm mb-2">Passwords do not match</p>
            )}
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                id="terms"
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
                className="h-4 w-4 rounded border-[#334155] bg-[#1e293b]"
              />
              <label htmlFor="terms" className="text-sm text-[#94a3b8]">
                I accept the
                <Link
                  to="#"
                  className="text-sm ml-1 text-[#3b82f6] hover:underline"
                >
                  terms and conditions
                </Link>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mb-6 cursor-pointer h-12 w-full font-semibold rounded-md bg-[#3b82f6] text-white hover:bg-[#2563eb]"
          >
            Create account
          </button>
        </form>
        <div className="text-center text-[#94a3b8]">
          Already have an account?
          <Link to="/login" className="text-[#3b82f6] hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}
