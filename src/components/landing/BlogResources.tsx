import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen, FileText, Video } from "lucide-react";

const BlogResources = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI-Powered Marketing: 2025 Trends",
      excerpt: "Discover the emerging trends that will shape marketing in the AI era and how to prepare your business for success.",
      category: "Trends",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
      type: "article"
    },
    {
      id: 2,
      title: "Complete Guide to AI Content Generation",
      excerpt: "Learn how to leverage AI for creating compelling content that engages your audience and drives conversions.",
      category: "Guide",
      readTime: "12 min read", 
      date: "Dec 12, 2024",
      image: "bg-gradient-to-br from-green-500/20 to-blue-500/20",
      type: "guide"
    },
    {
      id: 3,
      title: "Case Study: 300% ROI Boost with AI Marketing",
      excerpt: "How TechCorp increased their marketing ROI by 300% using ADmyBRAND AI Suite's automation features.",
      category: "Case Study",
      readTime: "6 min read",
      date: "Dec 10, 2024", 
      image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      type: "case-study"
    },
    {
      id: 4,
      title: "Video: Setting Up Your First AI Campaign",
      excerpt: "Step-by-step video tutorial showing how to create and launch your first AI-powered marketing campaign.",
      category: "Tutorial",
      readTime: "15 min watch",
      date: "Dec 8, 2024",
      image: "bg-gradient-to-br from-orange-500/20 to-red-500/20", 
      type: "video"
    }
  ];

  const resources = [
    {
      title: "AI Marketing Playbook",
      description: "Complete guide to implementing AI in your marketing strategy",
      type: "PDF Guide",
      icon: FileText
    },
    {
      title: "ROI Calculator Template",
      description: "Calculate the potential ROI of AI marketing for your business",
      type: "Excel Template", 
      icon: FileText
    },
    {
      title: "Webinar Series",
      description: "Monthly expert sessions on AI marketing best practices",
      type: "Video Series",
      icon: Video
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />;
      case "guide":
        return <BookOpen className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <section className="py-20 px-4 bg-glass-subtle" id="resources">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Resources & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with the latest AI marketing insights, guides, and success stories from industry experts.
          </p>
        </div>

        {/* Featured Blog Posts */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">Latest Articles</h3>
            <Button variant="outline">View All Posts <ArrowRight className="h-4 w-4 ml-2" /></Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="glass group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className={`h-40 ${post.image} rounded-t-lg flex items-center justify-center`}>
                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                    {getTypeIcon(post.type)}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <ArrowRight className="h-3 w-3 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resource Downloads */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Free Resources</h3>
            <p className="text-muted-foreground">
              Download our exclusive guides and tools to accelerate your AI marketing journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="glass group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{resource.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <Badge variant="outline" className="mb-4">
                    {resource.type}
                  </Badge>
                  <Button variant="outline" size="sm" className="w-full">
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="glass mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest AI marketing insights delivered to your inbox weekly
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              No spam. Unsubscribe anytime.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BlogResources;