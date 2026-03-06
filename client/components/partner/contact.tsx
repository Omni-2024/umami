import React from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20 px-5 sm:px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-start gap-14 lg:gap-16 max-w-7xl mx-auto">
      
      {/* Left Side */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-light text-[#0A192F] tracking-tight text-left">
          Let’s <span className="font-italic">Connect</span>
        </h2>

        <p className="mt-5 font-regular text-base lg:text-[18px] leading-[28px] max-w-md mx-auto lg:mx-0 text-left">
          If you have any questions or inquiries, connect with us through this form
        </p>

        <div className="mt-10 sm:mt-12 space-y-8 sm:space-y-10">

          {/* Email */}
          <div className="flex items-start sm:items-center group cursor-pointer gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 rounded-xl">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 !text[#03045E]" />
            </div>

            <div className="flex-1 border-b border-slate-100 pb-2">
              <p className="lg:text-[12px] sm:text-xs font-bold tracking-[3.6px] uppercase">
                Email Us
              </p>
              <p className="lg:text-[10px] sm:text-sm font-medium !text-[#033E8A] tracking-[3.6px] break-all">
                partnerships@umamibioworks.com
              </p>
            </div>

            <div className="border-2 border-[#03045E] rounded-full p-1 group-hover:bg-slate-900 group-hover:text-white transition-colors">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text" />
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start sm:items-center group cursor-pointer gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 rounded-xl">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 !text-[#03045E]" />
            </div>

            <div className="flex-1 border-b border-slate-100 pb-2">
              <p className="lg:text-[12px] sm:text-xs font-bold tracking-[3.6px] text-[#0A192F] uppercase">
                Address
              </p>
              <p className="lg:text-[10px] sm:text-xs font-medium !text-[#033E8A] tracking-[3.6px] leading-relaxed">
                89 Science Park Dr, #04-22, Singapore 118261
              </p>
            </div>

            <div className="border-2 border-[#03045E] rounded-full p-1 group-hover:bg-slate-900 group-hover:text-white transition-colors">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>

        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-[500px] border border-slate-300 rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 bg-white shadow-sm">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Name"
            className="w-full bg-[#F3F8FF] rounded-full px-5 sm:px-6 py-3 sm:py-4 outline-none border border-slate-300 focus:border-blue-200 transition-all text-sm"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#F3F8FF] rounded-full px-5 sm:px-6 py-3 sm:py-4 outline-none border border-slate-300 focus:border-blue-200 transition-all text-sm"
          />

          <input
            type="text"
            placeholder="Contact No"
            className="w-full bg-[#F3F8FF] rounded-full px-5 sm:px-6 py-3 sm:py-4 outline-none border border-slate-300 focus:border-blue-200 transition-all text-sm"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="w-full bg-[#F3F8FF] rounded-full px-5 sm:px-6 py-3 sm:py-4 outline-none border border-slate-300 focus:border-blue-200 transition-all text-sm"
          />

          <input
            type="text"
            placeholder="Country"
            className="w-full bg-[#F3F8FF] rounded-full px-5 sm:px-6 py-3 sm:py-4 outline-none border border-slate-300 focus:border-blue-200 transition-all text-sm"
          />

          <select className="w-full bg-[#F3F8FF] rounded-full px-5 sm:px-6 py-3 sm:py-4 outline-none border border-slate-300 focus:border-blue-200 appearance-none transition-all text-sm text-slate-500">
            <option>Select Reason</option>
          </select>

          <textarea
            rows={4}
            placeholder="Message"
            className="sm:col-span-2 w-full bg-[#F3F8FF] rounded-[20px] sm:rounded-[24px] px-5 sm:px-6 py-3 sm:py-4 outline-none border border-slate-300 focus:border-blue-200 transition-all text-sm resize-none"
          />

          <button className="sm:col-span-2 mt-2 w-full notfish rounded-full py-3 sm:py-4 text-[11px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase hover:bg-slate-800 transition-colors">
            Contact Us
          </button>

        </form>
      </div>

    </section>
  );
};

export default ContactSection;
