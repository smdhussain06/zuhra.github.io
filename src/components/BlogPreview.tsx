
import React from 'react';
import { CalendarIcon, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Four Temperaments in Unani Medicine",
    excerpt: "Understanding your unique temperament is key to achieving balance. Learn how the four humors influence your health and wellbeing.",
    date: "May 15, 2023",
    readTime: "5 min read",
    image: "https://source.unsplash.com/random/600x400/?herbs,medicine",
    category: "Traditional Wisdom"
  },
  {
    id: 2,
    title: "Seasonal Eating for Summer Wellness",
    excerpt: "Discover which foods can keep you cool and balanced during the hot summer months according to ancient Unani dietary principles.",
    date: "June 8, 2023",
    readTime: "4 min read",
    image: "https://source.unsplash.com/random/600x400/?summer,food",
    category: "Nutrition"
  },
  {
    id: 3,
    title: "Natural Remedies for Stress and Anxiety",
    excerpt: "Ancient solutions for modern problems: herbal formulations, breathing techniques, and lifestyle adjustments for mental peace.",
    date: "July 22, 2023",
    readTime: "6 min read",
    image: "https://source.unsplash.com/random/600x400/?calm,nature",
    category: "Mental Wellness"
  }
];

const BlogPreview = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Wellness Wisdom</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Insights from our practitioners on holistic health, natural remedies, and the timeless principles of Unani medicine.
            </p>
          </div>
          <a 
            href="#" 
            className="mt-4 md:mt-0 inline-flex items-center text-unani-leaf font-medium hover:text-unani-sage transition-colors"
          >
            View all articles <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-background rounded-lg overflow-hidden shadow-md hover-lift">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium bg-unani-sage/20 text-unani-sage px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif mb-2">{post.title}</h3>
                <p className="text-foreground/80 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
