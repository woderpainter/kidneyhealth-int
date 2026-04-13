'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Download, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Mail, 
  ChevronDown, 
  Heart, 
  Activity, 
  Stethoscope, 
  Clock,
  Menu,
  X,
  AlertCircle,
  Droplets,
  BookOpen,
  ArrowUp
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
            <Heart size={24} fill="currentColor" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-slate-900">
            International <span className="text-blue-600">Kidney</span> Health
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Health Risks</a>
          <a href="#solution" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">The Guide</a>
          <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#free-resources" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Free Resources</a>
          <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">FAQ</a>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
            Download Guide
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#problem" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">Health Risks</a>
            <a href="#solution" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">The Guide</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">Testimonials</a>
            <a href="#free-resources" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">Free Resources</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600">FAQ</a>
            <button className="bg-blue-600 text-white px-6 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all">
              Download Guide Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setIsSubmitted(true);
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent rounded-l-[100px]" />
      <div className="absolute -top-24 -left-24 -z-10 w-96 h-96 bg-blue-100/30 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6">
            <Stethoscope size={16} />
            <span>Doctor-Backed Kidney Education</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Protect Your Kidneys <br />
            <span className="text-blue-600 italic">Before It&apos;s Too Late</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
            Doctor-backed practical steps to support kidney health, prevent complications, and improve your daily quality of life starting today.
          </p>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                    <input 
                      type="email" 
                      placeholder="Enter your email to receive the guide" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-5 rounded-2xl border-2 border-slate-100 focus:border-blue-600 outline-none transition-all text-slate-900 bg-white/80 backdrop-blur-sm shadow-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button type="submit" className="flex-1 bg-blue-600 text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group active:scale-95">
                      Download the Guide Now
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>

                {/* Urgency Progress Bar */}
                <div className="mt-6 max-w-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Today&apos;s Free Copies Claimed</span>
                    <span className="text-xs font-bold text-blue-600">87%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "87%" }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    />
                  </div>
                  <p className="mt-2 text-[10px] text-slate-400 italic">
                    *Limited availability. Only 12 free copies remaining for today.
                  </p>
                </div>

                <p className="mt-6 text-sm text-slate-500 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-green-500" />
                  Your privacy is protected. Instant digital delivery.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-100 p-8 rounded-[32px] max-w-md"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Check your inbox!</h3>
                <p className="text-slate-600">
                  We&apos;ve sent the Kidney Health Guide to <span className="font-bold text-blue-600">{email}</span>. Please check your email (and spam folder) to start reading.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-bold text-blue-600 hover:underline"
                >
                  Didn&apos;t receive it? Try again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200">
                  <Image 
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="User" 
                    width={48} 
                    height={48} 
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm font-medium text-slate-600">Trusted by 15,000+ readers worldwide</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-white p-4 rounded-[40px] shadow-2xl shadow-blue-200/50 border border-slate-100">
            <div className="aspect-[3/4] relative rounded-[32px] overflow-hidden bg-slate-900">
              <Image 
                src="https://picsum.photos/seed/kidney-guide/800/1066" 
                alt="Kidney Health Guide Mockup" 
                fill
                className="object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex flex-col justify-end p-8">
                <div className="bg-blue-600 w-16 h-1 mb-4" />
                <h3 className="text-white font-serif text-3xl font-bold mb-2">The Complete Kidney Support Guide</h3>
                <p className="text-blue-100 text-sm font-medium">By Dr. Sarah Mitchell & The IKH Team</p>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-100/50 rounded-full blur-2xl -z-10" />
          <div className="absolute top-20 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-50 flex items-center gap-3 animate-bounce">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Instant Download</p>
              <p className="text-[10px] text-slate-500">Access immediately after purchase</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const badges = [
    { icon: ShieldCheck, text: "Secure Payment" },
    { icon: Download, text: "Instant Access" },
    { icon: Heart, text: "Satisfaction Guaranteed" },
    { icon: Stethoscope, text: "Evidence-Based" }
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-3">
              <badge.icon size={24} className="text-slate-600" />
              <span className="font-bold text-slate-900 uppercase tracking-widest text-xs">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const fears = [
    { icon: AlertCircle, title: "Silent Progression", text: "Kidney disease often has no symptoms until it's advanced. Are you missing the early signs?" },
    { icon: Activity, title: "Rising Creatinine", text: "Watching your lab numbers climb without knowing how to stop the trend is terrifying." },
    { icon: Droplets, title: "Dialysis Anxiety", text: "The fear of ending up on a machine for hours every week keeps many patients awake at night." },
    { icon: Clock, title: "Constant Fatigue", text: "Feeling drained and unable to keep up with your family because your kidneys aren't filtering properly." }
  ];

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Don&apos;t Wait Until It&apos;s Too Late</h2>
          <p className="text-lg text-slate-600">
            Kidney health is often ignored until a crisis happens. If you&apos;re dealing with high blood pressure, diabetes, or early-stage CKD, the time to act is <span className="text-blue-600 font-bold underline underline-offset-4">right now</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fears.map((fear, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <fear.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{fear.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{fear.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[40px] bg-blue-600 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-3xl font-serif font-bold mb-4">You are not alone in this journey.</h3>
              <p className="text-blue-100 text-lg">
                Millions of people face these same fears every day. We&apos;ve helped thousands regain control of their health through simple, science-backed lifestyle changes.
              </p>
            </div>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all whitespace-nowrap shadow-xl">
              See How We Help
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const features = [
    "Understanding Your Lab Results (Creatinine, GFR, BUN)",
    "The Kidney-Friendly Diet: What to Eat & What to Avoid",
    "Hydration Secrets for Optimal Filtration",
    "Natural Ways to Manage Blood Pressure",
    "Early Warning Signs You Must Never Ignore",
    "Supplement Guide: What's Safe and What's Dangerous"
  ];

  return (
    <section id="solution" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/health-ebook/800/1000" 
                  alt="Ebook Interior" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex text-amber-400 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-900 font-bold italic mb-2">&quot;This guide saved my life. My GFR improved by 12 points in just 3 months!&quot;</p>
                <p className="text-xs text-slate-500">— Robert K., Stage 3 CKD Patient</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8">The Ultimate Blueprint for Kidney Longevity</h2>
            <p className="text-lg text-slate-600 mb-10">
              Our comprehensive guide distills complex medical information into easy-to-follow daily actions. No medical degree required—just a commitment to your health.
            </p>
            
            <div className="space-y-4 mb-12">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 active:scale-95">
              Get the Full Guide - $27
            </button>
            <p className="mt-4 text-sm text-slate-500 text-center sm:text-left">One-time payment. Lifetime updates included.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    { icon: BookOpen, title: "Easy to Understand", text: "No confusing medical jargon. We explain everything in plain English so you can take action immediately." },
    { icon: Activity, title: "Practical Daily Tips", text: "Small, sustainable changes that fit into your busy life without feeling like a chore." },
    { icon: Stethoscope, title: "Trusted Information", text: "Every recommendation is backed by peer-reviewed clinical research and doctor-reviewed." },
    { icon: Heart, title: "For the Whole Family", text: "Perfect for patients, caregivers, and anyone wanting to prevent future kidney issues." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Why Choose Our Guide?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We focus on results, not just information. Here&apos;s how we help you succeed.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-6 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <benefit.icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Linda M.", role: "Caregiver", text: "I bought this for my husband who was struggling with high blood pressure. The diet tips were so easy to follow, and his last blood work showed significant improvement!", rating: 5 },
    { name: "David S.", role: "Stage 2 CKD", text: "Finally, a resource that doesn't just scare you but gives you a plan. The hydration section alone was worth the price.", rating: 5 },
    { name: "Maria G.", role: "Diabetes Patient", text: "As a diabetic, I was worried about my kidneys. This guide gave me the peace of mind and the tools to protect myself.", rating: 5 }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-500 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Real Stories from Real People</h2>
          <div className="flex justify-center gap-1 text-amber-400 mb-4">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={24} fill="currentColor" />)}
          </div>
          <p className="text-slate-400">Join over 15,000 people who have taken the first step.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[32px]"
            >
              <div className="flex gap-1 text-amber-400 mb-6">
                {[1, 2, 3, 4, 5].map((j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className="text-lg text-slate-200 italic mb-8 leading-relaxed">&quot;{review.text}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-sm text-slate-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadMagnet = () => {
  return (
    <section id="free-resources" className="py-24 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white p-12 md:p-16 rounded-[48px] shadow-2xl shadow-blue-200/50 border border-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full" />
          
          <div className="relative z-10">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">Not Ready to Buy Yet?</h2>
            <p className="text-xl text-slate-600 mb-10">
              Get our <span className="text-blue-600 font-bold">Free Early Kidney Warning Signs Checklist</span> delivered straight to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full pl-12 pr-4 py-5 rounded-2xl border-2 border-slate-100 focus:border-blue-600 outline-none transition-all text-slate-900"
                  required
                />
              </div>
              <button className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
                Send Me the Checklist
              </button>
            </form>
            <p className="mt-6 text-sm text-slate-500">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Is this for beginners?", a: "Absolutely. We designed this guide specifically for people who are new to kidney health. We avoid complex medical jargon and focus on actionable steps." },
    { q: "Is it an instant download?", a: "Yes! As soon as your payment is processed, you'll receive a link to download the guide in PDF format, which you can read on any device (phone, tablet, or computer)." },
    { q: "What is your refund policy?", a: "We offer a 30-day money-back guarantee. If you don't find the guide helpful, just email us and we'll refund your purchase, no questions asked." },
    { q: "Is this medical advice?", a: "No. This guide is for educational purposes only. While it is doctor-reviewed, it does not replace the advice of your own medical professional. Always consult your doctor before making significant changes to your diet or lifestyle." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button 
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogPreview = () => {
  const posts = [
    { title: "5 Foods That Are Secretly Killing Your Kidneys", category: "Nutrition", date: "Oct 12, 2023" },
    { title: "Understanding Your GFR: What the Numbers Really Mean", category: "Education", date: "Oct 08, 2023" },
    { title: "The Best Exercises for Stage 3 CKD Patients", category: "Lifestyle", date: "Oct 05, 2023" }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Latest from the Blog</h2>
            <p className="text-slate-600">Free resources to help you stay informed.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:underline">
            View All Posts <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="aspect-video relative bg-slate-200">
                <Image 
                  src={`https://picsum.photos/seed/blog${i}/600/400`} 
                  alt={post.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{post.category}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setIsSubmitted(true);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[64px] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Start Protecting Your Kidneys <span className="text-blue-400">Today</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Don&apos;t leave your health to chance. Get the comprehensive guide trusted by thousands and start your journey to better kidney health now.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <div className="w-full max-w-lg">
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="flex flex-col sm:flex-row gap-4 w-full"
                    >
                      <div className="flex-1 relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                        <input 
                          type="email" 
                          placeholder="Your email address" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-12 pr-4 py-5 rounded-2xl bg-white/10 border border-white/20 focus:border-blue-400 outline-none transition-all text-white placeholder:text-slate-500"
                          required
                        />
                      </div>
                      <button type="submit" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2">
                        Get the Guide
                        <ArrowRight size={20} />
                      </button>
                    </motion.form>

                    {/* Urgency Progress Bar */}
                    <div className="mt-8 text-left">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Limited Time Offer: 87% Claimed</span>
                        <span className="text-[10px] font-bold text-blue-400">12 Left</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: "0%" }}
                          animate={{ width: "87%" }}
                          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                          className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[32px] w-full max-w-lg"
                  >
                    <CheckCircle2 size={40} className="text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Sent Successfully!</h3>
                    <p className="text-slate-400">
                      We&apos;ve sent the guide to <span className="text-white font-bold">{email}</span>. Check your inbox to begin.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-8 text-sm font-medium text-slate-500 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  30-Day Guarantee
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  Secure Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Heart size={18} fill="currentColor" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-slate-900">
                International <span className="text-blue-600">Kidney</span> Health
              </span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
              Empowering individuals with the knowledge and tools to take control of their kidney health through science-backed education and practical lifestyle changes.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <div key={social} className="w-10 h-10 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all cursor-pointer">
                  <Activity size={18} />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Kidney Health Guide</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Free Checklist</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog Articles</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Lab Result Decoder</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400">
            © 2024 International Kidney Health. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Image src="https://picsum.photos/seed/visa/40/25" alt="Visa" width={40} height={25} className="opacity-40 grayscale" referrerPolicy="no-referrer" />
            <Image src="https://picsum.photos/seed/mastercard/40/25" alt="Mastercard" width={40} height={25} className="opacity-40 grayscale" referrerPolicy="no-referrer" />
            <Image src="https://picsum.photos/seed/paypal/40/25" alt="Paypal" width={40} height={25} className="opacity-40 grayscale" referrerPolicy="no-referrer" />
          </div>
        </div>
        
        <div className="mt-10 p-6 bg-slate-100 rounded-2xl text-[10px] text-slate-400 leading-relaxed text-center">
          DISCLAIMER: The information provided on this website and in our products is for educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
        </div>
      </div>
    </footer>
  );
};

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
        >
          <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-2 active:scale-95">
            Download Guide Now - $27
            <ArrowRight size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 p-4 bg-white text-blue-600 rounded-full shadow-xl border border-slate-100 hover:bg-blue-50 transition-colors md:bottom-8"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// --- Main Page ---

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <Testimonials />
      <LeadMagnet />
      <FAQ />
      <BlogPreview />
      <FinalCTA />
      <Footer />
      <StickyCTA />
      <ScrollToTop />
    </main>
  );
}
