
import React from 'react';

const blogPosts = [
    {
        imageUrl: "https://picsum.photos/400/250?image=1011",
        category: "Corporate Law",
        title: "Navigating Startup Funding: A Legal Primer",
        excerpt: "Understanding the legal intricacies of seed funding, venture capital, and angel investments is crucial for any startup founder...",
        author: "Aarav Sharma",
        date: "October 26, 2023",
    },
    {
        imageUrl: "https://picsum.photos/400/250?image=1025",
        category: "Real Estate",
        title: "The Importance of Title Searches in Property Transactions",
        excerpt: "A clean title is the cornerstone of any real estate purchase. Learn why a thorough title search is a non-negotiable step...",
        author: "Priya Singh",
        date: "October 15, 2023",
    },
    {
        imageUrl: "https://picsum.photos/400/250?image=106",
        category: "Family Law",
        title: "Understanding Child Custody Laws in India",
        excerpt: "When parents separate, the well-being of the child is paramount. We break down the key factors courts consider in custody cases.",
        author: "Ananya Gupta",
        date: "September 30, 2023",
    },
    {
        imageUrl: "https://picsum.photos/400/250?image=24",
        category: "Litigation",
        title: "What to Expect When Filing a Civil Suit",
        excerpt: "From pleadings to discovery to trial, the civil litigation process can be daunting. Here's a step-by-step overview...",
        author: "Rohan Mehta",
        date: "September 12, 2023",
    },
     {
        imageUrl: "https://picsum.photos/400/250?image=431",
        category: "Intellectual Property",
        title: "Protecting Your Brand: Trademark Basics",
        excerpt: "Your brand is your most valuable asset. Learn the basics of trademark law and how to protect your identity in the marketplace.",
        author: "Priya Singh",
        date: "August 28, 2023",
    },
     {
        imageUrl: "https://picsum.photos/400/250?image=577",
        category: "Criminal Defense",
        title: "Your Rights When Interacting with Law Enforcement",
        excerpt: "Knowing your fundamental rights can make a critical difference during an encounter with the police. We outline what you need to know.",
        author: "Rohan Mehta",
        date: "August 05, 2023",
    },
];


const BlogPostCard: React.FC<typeof blogPosts[0]> = ({ imageUrl, category, title, excerpt, author, date }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
        <img className="h-56 w-full object-cover" src={imageUrl} alt={title} />
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm font-semibold text-brand-accent uppercase">{category}</p>
            <h3 className="mt-2 text-xl font-serif font-bold text-brand-primary">{title}</h3>
            <p className="mt-3 text-gray-600 flex-grow">{excerpt}</p>
            <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                <span>By {author}</span>
                <span>{date}</span>
            </div>
        </div>
    </div>
);


const Blogs: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-brand-secondary py-20 text-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-serif font-extrabold">Legal Insights</h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">Stay informed with our latest articles, news, and analyses from our legal experts.</p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 sm:py-24 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map(post => (
                            <BlogPostCard key={post.title} {...post} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
