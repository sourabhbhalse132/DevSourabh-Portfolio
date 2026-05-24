import { useState } from 'react';
import {
  Send,
  CheckCircle,
  MessageSquare,
  Github,
  Twitter,
  Mail,
  Video,
  Linkedin,
  SendHorizonal,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let localErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      localErrors.name = 'Name field is required';
    }

    if (!emailRegex.test(formData.email)) {
      localErrors.email = 'Provide a valid email address';
    }

    if (!formData.role) {
      localErrors.role = 'Role field is required';
    }

    if (!formData.message.trim()) {
      localErrors.message = 'Message context cannot be blank';
    }

    setErrors(localErrors);
    return Object.keys(localErrors).length === 0;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Sanitized Data Captured:', formData);
      setIsSubmitted(true);

      setFormData({
        name: '',
        email: '',
        role: '',
        message: '',
      });

      setErrors({});
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const links = [
    { name: 'GitHub', icon: <Github size={14} />, url: 'https://github.com/sourabh433' },
    { name: 'LinkedIn', icon: <Linkedin size={14} />, url: 'https://linkedin.com/in/sourabhbhalse132' },
    { name: 'X', icon: <Twitter size={14} />, url: 'https://x.com/Bhalse_sourabh' },
    { name: 'Telegram', icon: <SendHorizonal size={14} />, url: 'https://t.me/sourabh_bhalse' },
    { name: 'Email', icon: <Mail size={14} />, url: 'mailto:sourabhbhalse132@gmail.com' },
    { name: 'Calendly', icon: <Video size={14} />, url: 'https://calendly.com/sourabhbhalse' },
  ];

  return (
    <section id="contact" className="w-full py-16 sm:py-20 md:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center md:text-left mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let’s <span className="text-indigo-400">Connect</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Have a project idea, opportunity, or technical discussion? Let’s collaborate and build something impactful.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-5 gap-8 lg:gap-10 items-start">
          
          {/* LEFT PANEL */}
          <div className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900 p-6 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(99,102,241,0.10)]">
            <div className="absolute top-[-60px] right-[-60px] w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full" />
            <div className="absolute bottom-[-60px] left-[-60px] w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={20} className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Let’s Connect</h3>
                  
                  {/* HIGHLIGHT BADGES */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold tracking-wide transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.45)] cursor-default">
                      Open For Projects
                    </span>
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-semibold tracking-wide transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.45)] cursor-default">
                      Freelance Projects
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] font-semibold tracking-wide transition-all duration-300 hover:bg-purple-500 hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.45)] cursor-default">
                      Collaborations
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                Have an opportunity, project idea, or technical discussion? Connect with me through the platforms below or submit the form directly.
              </p>

              {/* SOCIAL LINKS */}
              <div className="flex flex-wrap gap-3 mt-6">
                {links.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-slate-400 group-hover:text-indigo-300 transition">
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium tracking-wide">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* WhatsApp Button */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href="http://bit.ly/4nR0ZSS"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-full inline-flex items-center justify-center gap-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-3 rounded-2xl text-sm font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.516 2.266 2.27 3.51 5.284 3.508 8.492-.004 6.66-5.343 11.997-11.956 11.997-2.005-.001-3.975-.502-5.734-1.455L0 24zm6.59-4.846c1.66.986 3.294 1.489 5.34 1.491 5.485.002 9.948-4.464 9.951-9.952.002-2.659-1.031-5.158-2.903-7.03C17.16 1.791 14.665.759 12.007.759c-5.488 0-9.95 4.463-9.953 9.951-.001 2.09.551 4.127 1.597 5.865L2.648 21.64l5.001-1.312z" />
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="md:col-span-3 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative">
            {isSubmitted && (
              <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center text-center p-6 z-10">
                <CheckCircle size={48} className="text-emerald-400 mb-3" />
                <h4 className="text-xl font-bold text-white">Payload Cleared Successfully</h4>
                <p className="text-sm text-slate-400 mt-1 max-w-xs">
                  Data captured cleanly inside console targets. State maps are reset.
                </p>
              </div>
            )}

            <form onSubmit={submitForm} className="space-y-5">
              {/* NAME */}
              <div>
                <label className="block text-xs font-semibold tracking-wider text-slate-400 uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInput}
                  placeholder="John Doe"
                  className={`w-full bg-slate-900 border ${
                    errors.name ? 'border-rose-500/50 focus:border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                  } rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none transition duration-200`}
                />
                {errors.name && (
                  <p className="text-rose-400 text-xs mt-1.5 font-medium">{errors.name}</p>
                )}
              </div>

              {/* EMAIL + ROLE */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-slate-400 uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInput}
                    placeholder="name@domain.com"
                    className={`w-full bg-slate-900 border ${
                      errors.email ? 'border-rose-500/50 focus:border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                    } rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none transition duration-200`}
                  />
                  {errors.email && (
                    <p className="text-rose-400 text-xs mt-1.5 font-medium">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wider text-slate-400 uppercase mb-2">
                    Select Role
                  </label>
                  <div className="relative">
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInput}
                      className="w-full appearance-none bg-[#0b1220] border border-white/10 text-slate-200 text-sm rounded-xl px-4 py-3 pr-10 backdrop-blur-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-400 transition-all duration-300 cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#0b1220] text-slate-400">Choose option</option>
                      <option value="recruiter" className="bg-[#0b1220] text-slate-200">Recruiter</option>
                      <option value="client" className="bg-[#0b1220] text-slate-200">Client</option>
                      <option value="collaborator" className="bg-[#0b1220] text-slate-200">Collaborator</option>
                      <option value="other" className="bg-[#0b1220] text-slate-200">Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]">
                      ▼
                    </div>
                  </div>
                  {errors.role && (
                    <p className="text-rose-400 text-xs mt-1.5 font-medium">{errors.role}</p>
                  )}
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-xs font-semibold tracking-wider text-slate-400 uppercase mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInput}
                  placeholder="Let’s connect! Share your thoughts, ideas, or collaboration plans..."
                  className={`w-full bg-slate-900 border ${
                    errors.message ? 'border-rose-500/50 focus:border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                  } rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none transition duration-200 resize-none`}
                />
                {errors.message && (
                  <p className="text-rose-400 text-xs mt-1.5 font-medium">{errors.message}</p>
                )}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-300 cursor-pointer text-sm"
              >
                <Send size={16} />
                Transmit Entries
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;