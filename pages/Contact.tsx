
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        console.log('Form data submitted:', formData);
        setFormStatus('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div>
            {/* Page Header */}
            <section className="bg-brand-secondary py-20 text-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-serif font-extrabold">Get In Touch</h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">We're here to help. Reach out to us for a consultation or any legal inquiries.</p>
                </div>
            </section>

            <section className="py-16 sm:py-24 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold font-serif text-brand-primary mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">Full Name</label>
                                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md focus:ring-brand-accent focus:border-brand-accent" placeholder="Full Name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md focus:ring-brand-accent focus:border-brand-accent" placeholder="Email Address" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="sr-only">Phone</label>
                                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md focus:ring-brand-accent focus:border-brand-accent" placeholder="Phone Number (Optional)" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md focus:ring-brand-accent focus:border-brand-accent" placeholder="How can we help you?"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand-accent hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-colors">
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
                                      <span>123 Legal Ave, Suite 400<br/>New Delhi, India 110001</span>
                                  </p>
                                  <p className="flex items-center">
                                      <span className="mr-4 h-5 w-5 text-brand-accent">📞</span>
                                      <a href="tel:+911234567890" className="hover:text-brand-accent">+91 12345 67890</a>
                                  </p>
                                  <p className="flex items-center">
                                      <span className="mr-4 h-5 w-5 text-brand-accent">✉️</span>
                                      <a href="mailto:contact@tiewalavakil.in" className="hover:text-brand-accent">contact@tiewalavakil.in</a>
                                  </p>
                                </div>
                            </div>
                             <div>
                                <h3 className="text-xl font-bold font-serif text-brand-primary">Business Hours</h3>
                                <div className="mt-4 space-y-2 text-lg text-gray-600">
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                               <img src="https://picsum.photos/600/400?image=980" alt="Map to office" className="w-full h-full object-cover"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
