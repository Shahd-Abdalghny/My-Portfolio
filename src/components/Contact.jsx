import React, { useState } from 'react'
import { Phone, Mail, DollarSign, MapPin } from "lucide-react";
import Title from './Title';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: ""
    });

  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[80px] md:mt-[150px] mb-20' id='Contact'>
      <div className='flex flex-col lg:grid lg:grid-cols-2 gap-2 gap-y-10'>

        {/* ------ Left Info Section ------ */}
        <div className="  flex flex-col ">
          <div className="space-y-8">
            <Title topTitle="Contact Me" description="Let's Talk For" colorDescription="Your Next Project" />
            <div>
              <p className="text-base sm:text-lg leading-relaxed text-gray-500">
                I’m open to new opportunities and collaborations — feel free to reach out!
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>
                <span className="text-foreground font-medium text-sm sm:text-base">+20 11 42587545</span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>
                <span className="text-foreground font-medium text-sm sm:text-base">shahdabdalgny123@gmail.com</span>
              </div>

  

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>
                <div className="text-sm sm:text-base">
                  <span className="text-foreground font-medium">El-Genain St., Deshna,</span>
                  <br />
                  <span className="text-foreground font-medium">Qena Governorate, Egypt</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------ Right Form Section ------ */}
        <div className="flex flex-col">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Your Name *</label>
                <input
                  placeholder="Ex. John Doe"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-muted border border-gray-300 rounded-md px-3 h-11 sm:h-12 w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email *</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-muted border border-gray-300 rounded-md px-3 h-11 sm:h-12 w-full"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone *</label>
                <input
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-muted border border-gray-300 rounded-md px-3 h-11 sm:h-12 w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">I'm Interested in *</label>
                <select
                  value={formData.interest}
                  onChange={(e) => handleInputChange("interest", e.target.value)}
                  className="bg-muted border border-gray-300 rounded-md px-3 h-11 sm:h-12 w-full"
                >
                  <option value="">Select</option>
                  <option value="web-dev">Web Development</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ui-design">UI/UX Design</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>
            </div>

           

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Your Message *</label>
              <textarea
                placeholder="Enter here..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="bg-muted border border-gray-300 rounded-md px-3 py-2 min-h-[100px] sm:min-h-[120px] resize-none w-full"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-primary hover:scale-105 active:scale-105 text-white px-6 sm:px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 w-full sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact
