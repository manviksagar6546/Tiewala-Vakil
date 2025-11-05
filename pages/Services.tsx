
import React from 'react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-accent text-white">
                {icon}
            </div>
        </div>
        <div className="mt-4">
            <h3 className="text-lg leading-6 font-bold font-serif text-brand-primary">{title}</h3>
            <p className="mt-2 text-base text-gray-600">{description}</p>
        </div>
    </div>
);

const servicesData = [
    { title: "Corporate & Commercial Law", description: "Comprehensive legal support for businesses, from incorporation and compliance to complex commercial transactions and agreements.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { title: "Family Law & Matrimonial Disputes", description: "Sensitive and skilled handling of divorce, child custody, alimony, and other family-related legal issues with utmost discretion.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-3-5.197M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
    { title: "Real Estate & Property Law", description: "Expert guidance on property transactions, leasing, development projects, and title disputes for individuals and developers.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { title: "Criminal Defense", description: "Vigorous defense for clients facing criminal charges, ensuring their rights are protected throughout the legal process.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
    { title: "Civil Litigation", description: "Representing clients in civil disputes, including contract breaches, personal injury, and property disagreements.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg> },
    { title: "Intellectual Property", description: "Protecting your creative and innovative assets through trademark, copyright, and patent registration and enforcement.", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg> },
];

const Services: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-brand-secondary py-20 text-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-serif font-extrabold">Our Legal Services</h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">Comprehensive expertise across a wide spectrum of legal disciplines.</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 sm:py-24 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {servicesData.map(service => (
                            <ServiceCard key={service.title} {...service} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
