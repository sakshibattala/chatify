import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { LoaderIcon } from "react-hot-toast";
import { LockIcon, MailIcon, MessageCircleIcon, UserIcon } from "lucide-react";
import { Link } from "react-router";

const SignUpPage = () => {
  const { isSigningUp, signup } = useAuthStore();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="w-full flex items-center justify-center py-6 bg-slate-900 overflow-hidden">
      <div className="relative w-full max-w-4xl">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row">
            {/* LEFT SIDE FORM */}
            <div className="md:w-1/2 p-6 flex items-center justify-center md:border-r border-slate-600/30">
              <div className="w-full max-w-sm">
                {" "}
                {/* smaller form box */}
                {/* HEADING */}
                <div className="text-center mb-6">
                  <MessageCircleIcon className="w-10 h-10 mx-auto text-slate-400 mb-3" />
                  <h2 className="text-xl font-bold text-slate-200 mb-1">
                    Create Account
                  </h2>
                  <p className="text-slate-400 text-sm">
                    Sign up for a new account
                  </p>
                </div>
                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* FULL NAME */}
                  <div>
                    <label className="auth-input-label">Full Name</label>
                    <div className="relative">
                      <UserIcon className="auth-input-icon" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="input"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="auth-input-label">Email</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="input"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div>
                    <label className="auth-input-label">Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="input"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  {/* SUBMIT */}
                  <button
                    className="auth-btn"
                    type="submit"
                    disabled={isSigningUp}
                  >
                    {isSigningUp ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>
                <div className="mt-4 text-center">
                  <Link to="/login" className="auth-link text-sm">
                    Already have an account? Login
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="hidden md:flex md:w-1/2 items-center justify-center p-4 bg-gradient-to-bl from-slate-800/20 to-transparent">
              <div className="max-w-sm">
                {" "}
                {/* smaller image container */}
                <img
                  src="/signup.png"
                  alt="People using mobile devices"
                  className="w-full h-auto object-contain"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-cyan-400">
                    Start Your Journey Today
                  </h3>

                  <div className="mt-3 flex justify-center gap-3">
                    <span className="auth-badge">Free</span>
                    <span className="auth-badge">Easy Setup</span>
                    <span className="auth-badge">Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
};

export default SignUpPage;
