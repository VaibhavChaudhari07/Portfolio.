import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { Mail, MapPin, Calendar, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  // Using the provided access key
  const apiKey = "b9756673-e2aa-4303-9ba5-dea2ec4233ef";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Portfolio Contact",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Omchaudharo087@gmail.com',
      link: 'mailto:Omchaudharo087@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Maharashtra, India',
      link: null
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: 'Open for internships & projects',
      link: null
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/VaibhavChaudhari07', color: 'hover:text-gray-400' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/vaibhav-chaudhari-1355a3281/', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', link: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, label: 'Instagram', link: 'https://www.instagram.com/om_chaudhari098/', color: 'hover:text-pink-400' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Build Something Amazing
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects? I'm always excited to work on challenging 
            problems and create impactful solutions. Let's connect and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center">
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{info.label}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-orange-500/30`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Quick Response</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I typically respond to emails within 24 hours. For urgent matters or project 
                discussions, feel free to reach out via LinkedIn for faster communication.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: "Full name is required",
                    maxLength: 80,
                  })}
                  className={`w-full px-4 py-3 bg-gray-900/50 border-2 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors ${
                    errors.name
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-600 focus:border-orange-500 ring-orange-100"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                  className={`w-full px-4 py-3 bg-gray-900/50 border-2 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors ${
                    errors.email
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-600 focus:border-orange-500 ring-orange-100"
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.email.message}</small>
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", {
                    required: "Enter your Message",
                  })}
                  rows={5}
                  className={`w-full px-4 py-3 bg-gray-900/50 border-2 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none ${
                    errors.message
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-600 focus:border-orange-500 ring-orange-100"
                  }`}
                  placeholder="Tell me about your project or idea..."
                />
                {errors.message && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.message.message}</small>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                  </>
                )}
              </button>

              {/* Status Message */}
              {isSubmitSuccessful && isSuccess && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-sm">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
              {isSubmitSuccessful && !isSuccess && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try later.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

