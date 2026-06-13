import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Home, Sun, Droplets } from "lucide-react";

import heroBg from "@/assets/hero-bg.webp";
import {
  FiArrowRight,
  FiChevronDown,
  FiStar,
  FiThumbsUp,
  FiMail,
  FiPhone,
  FiUser,
  FiHome,
  FiDollarSign,
  FiBriefcase,
  FiSend,
  FiCheckCircle,
  FiUsers,
  FiUserCheck,
  FiMessageSquare,
  FiSmartphone,
  FiZap,
  FiClock,
  FiShield,
  FiTool,
  FiSun,
  FiCloudRain,
  FiAward,
  FiDroplet,
  FiSearch,
  FiMapPin,
} from "react-icons/fi";
import { RiBuildingLine, RiShieldCheckLine } from "react-icons/ri";
import completeData from "../src/data/completeData.json";



// MODERN PROFESSIONAL FORM COMPONENT - UPDATED FOR COATINGS SERVICES
const CoatingInquiryForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    serviceType: "garage",
    serviceDetails: "",
    email: "",
    phone: "",
    address: "",
    urgency: "standard",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(520);

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.scrollHeight;
      setContainerHeight(Math.max(height, 500));
    }
  }, [step, isSubmitted]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Coating quote request:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      setFormData({
        firstName: "",
        lastName: "",
        serviceType: "garage",
        serviceDetails: "",
        email: "",
        phone: "",
        address: "",
        urgency: "standard",
      });
    }, 3000);
  };

  const serviceOptions = [
    {
      value: "garage",
      label: "Garage Floor Coating",
      icon: FiHome,
      desc: "Premium garage floor coating systems",
    },
    {
      value: "patio-pool",
      label: "Patio & Pool Deck",
      icon: FiSun,
      desc: "UV stable, slip-resistant exterior coatings",
    },
    {
      value: "commercial",
      label: "Commercial Coating",
      icon: RiBuildingLine,
      desc: "Heavy-duty commercial floor systems",
    },
    {
      value: "industrial",
      label: "Industrial Floor",
      icon: FiTool,
      desc: "High-performance industrial coating",
    },
    {
      value: "driveway",
      label: "Driveways & Walkways",
      icon: FiSearch,
      desc: "Enhance curb appeal and protect concrete",
    },
    {
      value: "other",
      label: "Other Service",
      icon: FiTool,
      desc: "Custom concrete coating solutions",
    },
  ];

  const urgencyOptions = [
    { value: "emergency", label: "🚨 Urgent (ASAP)" },
    { value: "soon", label: "⚡ Soon (1-2 weeks)" },
    { value: "planned", label: "📅 Planning (1-3 months)" },
  ];

  const stepIcons = [FiUserCheck, FiMessageSquare, FiSmartphone];
  const stepLabels = ["Your Info", "Project Details", "Contact"];

  const SelectedIcon =
    serviceOptions.find((opt) => opt.value === formData.serviceType)?.icon ||
    FiHome;

  return (
    <div className="w-full max-w-lg mx-auto lg:mx-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ background: "#1A1A1A", border: "1px solid #2C2C2C", borderRadius: 24, boxShadow: "0 32px 80px rgba(0,0,0,0.7)" }}
        className="overflow-hidden will-change-transform transform-gpu"
      >
        <div className="relative flex-shrink-0" style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #111111 100%)", borderBottom: "1px solid #2C2C2C" }}>
          <div className="px-5 sm:px-6 md:px-8 py-4 sm:py-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #C8A35A, #9B7740)" }}>
                  <FiZap className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#111" }} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>
                    Free Coating Estimate
                  </h3>
                  <p className="text-sm mt-0.5" style={{ color: "#B6B7BA99" }}>
                    Get your quote in 3 easy steps
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1 rounded-full px-3 py-1.5" style={{ background: "#C8A35A18", border: "1px solid #C8A35A30" }}>
                <div className="flex -space-x-1">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={step >= i ? { background: "#C8A35A", color: "#111" } : { background: "#2C2C2C", color: "#B6B7BA66" }}
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-xs font-medium ml-1" style={{ color: "#C8A35A" }}>
                  Steps
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={containerRef}
          style={{ minHeight: `${containerHeight}px` }}
          className="transition-all duration-300 ease-in-out"
        >
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="px-4 sm:px-6 md:px-8 py-4 sm:py-6"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  {[1, 2, 3].map((s) => {
                    const StepIcon = stepIcons[s - 1];
                    const isActive = step === s;
                    const isCompleted = step > s;
                    return (
                      <div
                        key={s}
                        className="flex flex-col items-center flex-1"
                      >
                        <div
                          className="relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                          style={isActive ? { background: "linear-gradient(135deg,#C8A35A,#9B7740)", color: "#111", boxShadow: "0 0 20px #C8A35A40" } : isCompleted ? { background: "#C8A35A22", color: "#C8A35A" } : { background: "#2C2C2C", color: "#B6B7BA44" }}
                        >
                          {isCompleted ? (
                            <FiCheckCircle className="w-6 h-6" />
                          ) : (
                            <StepIcon className="w-5 h-5" />
                          )}
                        </div>
                        <span
                          className="text-xs font-bold mt-2 transition-colors"
                          style={{ color: isActive ? "#C8A35A" : isCompleted ? "#C8A35A99" : "#ffffff44" }}
                        >
                          {stepLabels[s - 1]}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="relative mt-4 h-1 rounded-full overflow-hidden" style={{ background: "#2C2C2C" }}>
                  <motion.div
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #C8A35A, #9B7740)" }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${((step - 1) / 2) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <div className="relative">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="rounded-xl p-3 flex items-center gap-2 mb-2" style={{ background: "#C8A35A10", border: "1px solid #C8A35A22" }}>
                        <FiUser className="w-4 h-4" style={{ color: "#C8A35A" }} />
                        <span className="text-xs" style={{ color: "#B6B7BA99" }}>
                          Step 1 of 3 - Tell us who you are
                        </span>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#D9D9D9" }}>
                          First name
                        </label>
                        <div className="relative group">
                          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors" style={{ color: "#B6B7BA66" }} />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full rounded-xl py-3 pl-11 pr-4 text-white transition-all focus:outline-none"
                            style={{ background: "#111111", border: "1px solid #2C2C2C" }}
                            onFocus={(e) => e.currentTarget.style.borderColor = "#C8A35A66"}
                            onBlur={(e) => e.currentTarget.style.borderColor = "#2C2C2C"}
                            placeholder="John"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#D9D9D9" }}>
                          Last name
                        </label>
                        <div className="relative group">
                          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors" style={{ color: "#B6B7BA66" }} />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full rounded-xl py-3 pl-11 pr-4 text-white transition-all focus:outline-none"
                            style={{ background: "#111111", border: "1px solid #2C2C2C" }}
                            onFocus={(e) => e.currentTarget.style.borderColor = "#C8A35A66"}
                            onBlur={(e) => e.currentTarget.style.borderColor = "#2C2C2C"}
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#D9D9D9" }}>
                          Property address
                        </label>
                        <div className="relative group">
                          <FiHome className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors" style={{ color: "#B6B7BA66" }} />
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full rounded-xl py-3 pl-11 pr-4 text-white transition-all focus:outline-none"
                            style={{ background: "#111111", border: "1px solid #2C2C2C" }}
                            onFocus={(e) => e.currentTarget.style.borderColor = "#C8A35A66"}
                            onBlur={(e) => e.currentTarget.style.borderColor = "#2C2C2C"}
                            placeholder="123 Main St, Canton, MI"
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!formData.firstName || !formData.lastName || !formData.address}
                        className="w-full py-3.5 rounded-xl font-bold mt-4 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
                        style={{ background: "linear-gradient(135deg, #C8A35A, #9B7740)", color: "#111", boxShadow: "0 8px 24px #C8A35A30" }}
                      >
                        Continue
                        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="rounded-xl p-3 flex items-center gap-2 mb-2" style={{ background: "#C8A35A10", border: "1px solid #C8A35A22" }}>
                        <FiTool className="w-4 h-4" style={{ color: "#C8A35A" }} />
                        <span className="text-xs" style={{ color: "#B6B7BA99" }}>
                          Step 2 of 3 - What service do you need?
                        </span>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#D9D9D9" }}>
                          Service needed
                        </label>
                        <div className="relative">
                          <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className="w-full rounded-xl py-3.5 pl-12 pr-10 text-white focus:outline-none transition-all appearance-none cursor-pointer"
                            style={{ background: "#111111", border: "1px solid #2C2C2C", height: "52px" }}
                          >
                            {serviceOptions.map((opt) => (
                              <option key={opt.value} value={opt.value} className="bg-card text-white">
                                {opt.label}
                              </option>
                            ))}
                          </select>
                          <SelectedIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#D9D9D9" }}>
                          Urgency
                        </label>
                        <div className="relative">
                          <select
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleChange}
                            className="w-full rounded-xl py-3.5 pl-4 pr-10 text-white focus:outline-none transition-all appearance-none cursor-pointer"
                            style={{ background: "#111111", border: "1px solid #2C2C2C" }}
                          >
                            {urgencyOptions.map((opt) => (
                              <option key={opt.value} value={opt.value} className="bg-card text-white">
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#D9D9D9" }}>
                          Additional details{" "}
                          <span className="font-normal" style={{ color: "#B6B7BA66" }}>
                            (optional)
                          </span>
                        </label>
                        <textarea
                          name="serviceDetails"
                          value={formData.serviceDetails}
                          onChange={handleChange}
                          rows={3}
                          className="w-full rounded-xl py-3 px-4 text-white focus:outline-none transition-all resize-none"
                          style={{ background: "#111111", border: "1px solid #2C2C2C", minHeight: "80px" }}
                          placeholder="Tell us about your project, colors, etc."
                        />
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="flex-1 py-3.5 rounded-xl font-semibold transition-all"
                          style={{ background: "#111111", border: "1px solid #2C2C2C", color: "#B6B7BA" }}
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="flex-1 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group"
                          style={{ background: "linear-gradient(135deg, #C8A35A, #9B7740)", color: "#111" }}
                        >
                          Continue
                          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="rounded-xl p-3 flex items-center gap-2 mb-2" style={{ background: "#C8A35A10", border: "1px solid #C8A35A22" }}>
                        <FiShield className="w-4 h-4" style={{ color: "#C8A35A" }} />
                        <span className="text-xs" style={{ color: "#B6B7BA99" }}>
                          Step 3 of 3 - How should we reach you?
                        </span>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#D9D9D9" }}>
                          Email address
                        </label>
                        <div className="relative group">
                          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors" style={{ color: "#B6B7BA66" }} />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-xl py-3 pl-11 pr-4 text-white transition-all focus:outline-none"
                            style={{ background: "#111111", border: "1px solid #2C2C2C" }}
                            onFocus={(e) => e.currentTarget.style.borderColor = "#C8A35A66"}
                            onBlur={(e) => e.currentTarget.style.borderColor = "#2C2C2C"}
                            placeholder="hello@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: "#D9D9D9" }}>
                          Phone number
                        </label>
                        <div className="relative group">
                          <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors" style={{ color: "#B6B7BA66" }} />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-xl py-3 pl-11 pr-4 text-white transition-all focus:outline-none"
                            style={{ background: "#111111", border: "1px solid #2C2C2C" }}
                            onFocus={(e) => e.currentTarget.style.borderColor = "#C8A35A66"}
                            onBlur={(e) => e.currentTarget.style.borderColor = "#2C2C2C"}
                            placeholder="+1 (386) 246-7999"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="flex-1 py-3.5 rounded-xl font-semibold transition-all"
                          style={{ background: "#111111", border: "1px solid #2C2C2C", color: "#B6B7BA" }}
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting || !formData.email || !formData.phone}
                          className="flex-1 py-3.5 rounded-xl font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                          style={{ background: "linear-gradient(135deg, #C8A35A, #9B7740)", color: "#111", boxShadow: "0 8px 24px #C8A35A30" }}
                        >
                          {isSubmitting ? "Sending..." : "Get Free Estimate"}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-6 py-12 text-center flex flex-col items-center justify-center"
              style={{ minHeight: `${containerHeight}px` }}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <FiCheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Estimate Request Sent!
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                Thanks for contacting Titan Coatings. We'll reach out within 24 hours with your free estimate.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  const { badge, headlines, description, buttons, stats } = completeData.hero;

  const iconComponents = {
    FiArrowRight: FiArrowRight,
    RiBuildingLine: RiBuildingLine,
    FiStar: FiStar,
    FiThumbsUp: FiThumbsUp,
    RiShieldCheckLine: RiShieldCheckLine,
    FiDollarSign: FiDollarSign,
    FiClock: FiClock,
    FiShield: FiShield,
    FiHome: FiHome,
    FiTool: FiTool,
    FiMapPin: FiMapPin,
    FiMessageSquare: FiMessageSquare,
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black isolate"
    >
      <div className="absolute inset-0 -z-10">
        <motion.img
          src={heroBg}
          alt="Titan Coatings - Premium Concrete Coating Systems"
          loading="eager"
          {...({ fetchpriority: "high" } as any)}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full object-cover absolute inset-0 opacity-55 sm:opacity-70 md:opacity-80 will-change-transform"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Softened Directional Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center pt-24 pb-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
              <motion.div
                className="mt-2 inline-flex items-center gap-2 rounded-full px-4 py-2 mx-auto lg:mx-0"
                style={{ background: "#C8A35A15", border: "1px solid #C8A35A40" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#C8A35A" }} />
                <span className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: "#C8A35A" }}>
                  {badge}
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white lg:leading-[1.1] tracking-tight uppercase"
                style={{ fontFamily: "'Cinzel', serif", textShadow: "0 2px 40px rgba(200,163,90,0.15)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {headlines.join(" ")}
              </motion.h1>

              <motion.p
                className="text-base sm:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {description}
              </motion.p>

              <motion.div
                className=" w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
                  {buttons.map((button, idx) => {
                    const Icon = iconComponents[button.icon as keyof typeof iconComponents];
                    const isFirst = idx === 0;

                    return (
                      <motion.a
                        key={idx}
                        href={button.href}
                        className={`group relative overflow-hidden px-8 py-4 rounded-xl sm:rounded-2xl w-full sm:w-auto inline-flex items-center justify-center gap-3 text-base font-bold transition-all duration-300 active:scale-95 border-2 ${isFirst
                            ? "bg-gradient-to-r from-primary to-secondary text-[#111111] border-transparent hover:opacity-90 shadow-lg shadow-primary/20"
                            : "bg-transparent text-white border-primary/30 hover:bg-primary/10 hover:border-primary"
                          }`}
                        whileHover={{ y: -4 }}
                      >
                        <span className="relative z-10">{button.text}</span>
                        {Icon && (
                          <Icon className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        )}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-5 w-full"
                style={{ borderTop: "1px solid rgba(200,163,90,0.18)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {stats.map((stat, idx) => {
                  const StatIcon = iconComponents[stat.icon as keyof typeof iconComponents];
                  return (
                    <div key={stat.label} className="flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 group mx-auto lg:mx-0">
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ background: "#C8A35A18", border: "1px solid #C8A35A30" }}
                      >
                        {StatIcon
                          ? <StatIcon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#C8A35A" }} />
                          : <span className="w-4 h-4 rounded-full" style={{ background: "#C8A35A" }} />
                        }
                      </div>
                      <div className="min-w-0 text-center lg:text-left">
                        <div className="text-base sm:text-xl lg:text-2xl font-black text-white leading-none mb-0.5 break-words">
                          {stat.value}
                        </div>
                        <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-bold break-words" style={{ color: "#B6B7BA66" }}>
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <CoatingInquiryForm />
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Elegant Transition Fade to Next Section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section >
  );
};

export default Hero;
