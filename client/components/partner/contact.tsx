import React from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-start gap-16 max-w-7xl mx-auto">
      
      {/* Left Side: Text & Info */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl sm:text-5xl font-light text-[#0A192F] tracking-tight">
          Let’s <span className="font-italic">Connect</span>
        </h2>
        <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-md">
          If you have any questions or inquiries, connect with us through this form
        </p>

        <div className="mt-12 space-y-10">
          {/* Email Row */}
          <div className="flex items-center group cursor-pointer">
            <div className="p-4 bg-[#F0F7FF] rounded-xl mr-6">
              <Mail className="w-6 h-6 text-[#0A192F]" />
            </div>
            <div className="flex-1 border-b border-slate-100 pb-2">
              <p className="text-xs font-bold tracking-[0.2em] text-[#0A192F] uppercase">Email Us</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                partnerships@umamibioworks.com
              </p>
            </div>
            <div className="ml-4 border border-slate-900 rounded-full p-1 group-hover:bg-slate-900 group-hover:text-white transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Address Row */}
          <div className="flex items-center group cursor-pointer">
            <div className="p-4 bg-[#F0F7FF] rounded-xl mr-6">
              <MapPin className="w-6 h-6 text-[#0A192F]" />
            </div>
            <div className="flex-1 border-b border-slate-100 pb-2">
              <p className="text-xs font-bold tracking-[0.2em] text-[#0A192F] uppercase">Address</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                89 Science Park Dr, #04-22, Singapore 118261
              </p>
            </div>
            <div className="ml-4 border border-slate-900 rounded-full p-1 group-hover:bg-slate-900 group-hover:text-white transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Form Card */}
      <div className="w-full lg:w-[500px] border border-slate-300 rounded-[32px] p-6 sm:p-6 bg-white shadow-sm">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-[#F3F8FF] rounded-full px-6 py-4 outline-none border border-slate-300 focus:border-blue-200 transition-all text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#F3F8FF] rounded-full px-6 py-4 outline-none border border-slate-300 focus:border-blue-200 transition-all text-sm"
          />
          <input
            type="text"
            placeholder="Contact No"
            className="w-full bg-[#F3F8FF] rounded-full px-6 py-4 outline-none border border-slate-300 focus:border-blue-200 transition-all text-sm"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full bg-[#F3F8FF] rounded-full px-6 py-4 outline-none border border-slate-300 focus:border-blue-200 transition-all text-sm"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full bg-[#F3F8FF] rounded-full px-6 py-4 outline-none border border-slate-300 focus:border-blue-200 transition-all text-sm"
          />
          <div className="flex flex-col gap-1">
            <select className="w-full bg-[#F3F8FF] rounded-full px-6 py-4 outline-none border border-slate-300 focus:border-blue-200 appearance-none transition-all text-sm text-slate-500">
              <option>Select Reason</option>
            </select>
          </div>
          <textarea
            rows={4}
            placeholder="Message"
            className="sm:col-span-2 w-full bg-[#F3F8FF] rounded-[24px] px-6 py-4 outline-none border border-slate-300 focus:border-blue-200 transition-all text-sm resize-none"
            />
          <button className="sm:col-span-2 mt-2 w-full notfish rounded-full py-4 text-xs font-bold tracking-[0.3em] uppercase hover:bg-slate-800 transition-colors">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
