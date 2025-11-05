
import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';

const PracticeAreaCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="text-brand-accent mb-4">{icon}</div>
    <h3 className="text-xl font-serif font-bold text-brand-primary mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <Link to="/services" className="text-brand-accent hover:text-brand-accent-hover font-semibold mt-4 inline-block">Learn More &rarr;</Link>
  </div>
);

const WhyChooseUsItem: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-accent text-white mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-brand-primary font-serif">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-primary text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=2')" }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold tracking-tight">
            Expert Legal Counsel for Your Peace of Mind
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            Navigating complex legal challenges with strategic solutions and unwavering commitment to our clients.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <CTAButton />
            <Link to="/about" className="text-white font-bold py-3 px-6 rounded-lg bg-transparent border-2 border-white hover:bg-white hover:text-brand-primary transition-colors duration-300">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16 sm:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-primary">Our Practice Areas</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">We offer a comprehensive range of legal services tailored to your needs.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PracticeAreaCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
              title="Corporate Law"
              description="Advising businesses on formation, governance, mergers, and acquisitions to ensure compliance and strategic growth."
            />
             <PracticeAreaCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-3-5.197M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
              title="Family Law"
              description="Handling sensitive family matters including divorce, child custody, and adoption with compassion and expertise."
            />
             <PracticeAreaCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
              title="Real Estate Law"
              description="Guiding clients through residential and commercial real estate transactions, from contracts to closing."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                 <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-primary">Why Tiewala Vakil?</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Our firm is built on a foundation of trust, excellence, and unwavering client advocacy.</p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-12">
                <WhyChooseUsItem 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    title="Proven Track Record" 
                    description="Decades of combined experience achieving successful outcomes for our clients."
                />
                 <WhyChooseUsItem 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    title="Client-Centric Approach"
                    description="We listen to your needs and develop personalized legal strategies to meet your goals."
                />
                 <WhyChooseUsItem 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                    title="Integrity & Professionalism"
                    description="Upholding the highest ethical standards in every aspect of our practice."
                />
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
