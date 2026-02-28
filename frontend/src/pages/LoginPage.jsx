import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { LoaderIcon } from "react-hot-toast";
import { LockIcon, MailIcon, MessageCircleIcon, UserIcon } from "lucide-react";
import { Link } from "react-router";

const LoginPage = () => {
  const { isLoggingIn, login } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
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
                    Login to your Account
                  </h2>
                </div>
                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-4">

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
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Login"
                    )}
                  </button>
                </form>
                <div className="mt-4 text-center">
                  <Link to="/signup" className="auth-link text-sm">
                    New here? Sign up
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
                  src="/login.png"
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

export default LoginPage;
