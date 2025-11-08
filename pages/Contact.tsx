import React, { useState, useRef } from 'react';
import CallToAction from '@/components/Call To Action/CallToAction';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState('');
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // Replace these with your own EmailJS credentials
    emailjs
      .sendForm(
        'service_nfdxcjf',      // e.g. service_xxxxxxx
        'template_8cz92ao',     // e.g. template_yyyyyyy
        form.current,
        'DJDOxM9hm6uA8R9CE'       // e.g. KJdfj48dfD_d9
      )
      .then(
        () => {
          setFormStatus('✅ Thank you! Your message has been sent successfully.');
          form.current?.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setFormStatus('❌ Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-secondary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Get in touch with our legal experts for property law consultation and documentation services.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold font-serif text-brand-primary mb-6">Send us a Message</h2>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    className="block w-full shadow-sm py-3 px-4 border border-gray-300 rounded-md focus:ring-brand-accent focus:border-brand-accent"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    className="block w-full shadow-sm py-3 px-4 border border-gray-300 rounded-md focus:ring-brand-accent focus:border-brand-accent"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    className="block w-full shadow-sm py-3 px-4 border border-gray-300 rounded-md focus:ring-brand-accent focus:border-brand-accent"
                    placeholder="Phone Number (Optional)"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="block w-full shadow-sm py-3 px-4 border border-gray-300 rounded-md focus:ring-brand-accent focus:border-brand-accent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand-accent hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
              {formStatus && <p className="mt-4 text-center text-green-600">{formStatus}</p>}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold font-serif text-brand-primary">Contact Information</h3>
                <div className="mt-4 space-y-4 text-lg text-gray-600">
                  <p className="flex items-start">
                    <span className="mt-1 mr-4 h-5 w-5 text-brand-accent">📍</span>
                    <span>
                      Chamber no. 4, Tehsil Compound
                      <br />
                      Hapur - 245101, Uttar Pradesh
                    </span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-4 h-5 w-5 text-brand-accent">📞</span>
                    <a href="tel:+91-7037455191" className="hover:text-brand-accent">
                      +91-7037455191
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-4 h-5 w-5 text-brand-accent">✉️</span>
                    <a href="mailto:contact@tiewalavakil.in" className="hover:text-brand-accent">
                      contact@tiewalavakil.in
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif text-brand-primary">Office Hours</h3>
                <div className="mt-4 space-y-2 text-lg text-gray-600">
                  <p>Mon - Sat: 10:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Contact;
