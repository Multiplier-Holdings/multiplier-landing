import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Guilloche from "@/components/Guilloche";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  thumbnail: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "ai-driven-ma-due-diligence",
    title: "AI-Driven M&A: The New Due Diligence Standard",
    description: "How artificial intelligence is revolutionizing the merger and acquisition landscape, from automated risk assessment to predictive valuation models. We explore the strategic advantages of early adoption in high-stakes deal flows.",
    author: {
      name: "Alex Morgan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    },
    tags: ["M&A Strategy", "Artificial Intelligence"],
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2000",
    date: "Mar 15, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    slug: "optimizing-corporate-tax-workflows",
    title: "Optimizing Corporate Tax Workflows",
    description: "Streamlining complex multi-jurisdictional tax reporting using modern dev workflows and automated compliance engines.",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
    },
    tags: ["Tax Strategy", "Workflow"],
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000",
    date: "Mar 12, 2025",
    readTime: "5 min read",
  },
  {
    id: "3",
    slug: "design-system-of-finance",
    title: "The Design System of Finance",
    description: "Bringing clarity to complex financial data through atomic design principles and user-centric dashboard interfaces.",
    author: {
      name: "Michael Ross",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
    },
    tags: ["Design", "Fintech"],
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
    date: "Mar 10, 2025",
    readTime: "6 min read",
  },
  {
    id: "4",
    slug: "scaling-professional-services-tech",
    title: "Scaling Professional Services with Tech",
    description: "How boutique firms are leveraging custom dev tools to compete with global consulting giants.",
    author: {
      name: "Emily Watson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    },
    tags: ["Professional Services", "Dev"],
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
    date: "Mar 5, 2025",
    readTime: "7 min read",
  },
  {
    id: "5",
    slug: "machine-learning-fraud-detection",
    title: "Machine Learning in Fraud Detection",
    description: "Implementing real-time anomaly detection pipelines for high-volume transaction processing systems.",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=100&h=100",
    },
    tags: ["Security", "AI"],
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000",
    date: "Mar 1, 2025",
    readTime: "10 min read",
  },
  {
    id: "6",
    slug: "navigating-regulatory-moats",
    title: "Navigating Regulatory Moats",
    description: "Using technology to turn complex regulatory frameworks into a competitive advantage for new market entrants.",
    author: {
      name: "Jessica Lee",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
    },
    tags: ["Strategy", "Regulation"],
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    date: "Feb 28, 2025",
    readTime: "5 min read",
  },
];

export default function Blog() {
  const featuredPost = MOCK_POSTS[0];
  const regularPosts = MOCK_POSTS.slice(1);

  return (
    <div className="min-h-screen bg-cream selection:bg-gold/30">
      
      {/* Featured Section */}
      <section className="relative pt-16 pb-20 px-4 overflow-hidden">
        {/* Background Guilloche Accent */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30 pointer-events-none translate-x-1/3 -translate-y-1/4">
            <Guilloche type="wave" opacity={0.3} className="text-gold" />
         </div>

        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                 {/* Featured Content */}
                <div className="flex-1 space-y-8 relative z-10 pt-4">
                     <div className="flex items-center gap-3 text-forest/60 font-sans tracking-wider text-xs uppercase font-medium">
                        <span className="bg-gold/20 text-dark-gold px-3 py-1 rounded-sm">Latest</span>
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-forest leading-[1] tracking-tight text-balance">
                        <Link href={`/blog/${featuredPost.slug}`} className="hover:text-dark-gold transition-colors duration-300">
                            {featuredPost.title}
                        </Link>
                    </h1>
                    
                    <p className="text-xl text-forest/70 font-sans leading-relaxed max-w-2xl">
                        {featuredPost.description}
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <img 
                            src={featuredPost.author.avatar} 
                            alt={featuredPost.author.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-cream shadow-md"
                        />
                        <div>
                            <p className="text-forest font-serif font-semibold text-lg">{featuredPost.author.name}</p>
                            <div className="flex gap-2 text-xs text-forest/60 uppercase tracking-wide">
                                {featuredPost.tags.map(tag => <span key={tag}>{tag}</span>)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="flex-1 w-full relative group cursor-pointer">
                    <Link href={`/blog/${featuredPost.slug}`}>
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                            <img 
                                src={featuredPost.thumbnail} 
                                alt={featuredPost.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/5 transition-colors duration-300" />
                        </div>
                         {/* Circle Button Accent */}
                        <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-cream border border-forest/10 p-6 rounded-full shadow-xl group-hover:scale-110 transition-transform duration-300 hidden md:block">
                            <ArrowUpRight className="w-8 h-8 text-forest" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px w-full bg-forest/10" />
      </div>

      {/* Regular Feed */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {regularPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-transparent">
                    {/* Image */}
                    <div className="aspect-[3/2] overflow-hidden rounded-sm mb-6 relative">
                        <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                             <span className="px-2 py-1 bg-cream/95 text-forest text-[10px] font-bold uppercase tracking-widest border border-forest/5 shadow-sm">
                                {post.tags[0]}
                            </span>
                        </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs font-sans text-forest/50 mb-3 uppercase tracking-wide">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 rounded-full bg-forest/30" />
                            <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-2xl font-serif font-semibold text-forest mb-3 leading-tight tracking-tight group-hover:text-dark-gold transition-colors">
                            {post.title}
                        </h3>
                        
                        <p className="text-forest/70 font-sans text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                            {post.description}
                        </p>
                        
                        <div className="pt-4 border-t border-forest/5 flex items-center justify-between mt-auto">
                            <span className="text-xs font-bold text-forest/40 uppercase tracking-widest group-hover:text-forest/70 transition-colors">Read Article</span>
                            <ArrowUpRight className="w-4 h-4 text-forest/30 group-hover:text-forest transition-colors" />
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
