import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

const posts = [
  {
    title: '10 Essential Investment Strategies for 2024',
    excerpt: 'Discover the top investment strategies that successful investors are using this year to maximize returns and minimize risk.',
    category: 'Investing Tips',
    author: 'David Anderson',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',
  },
  {
    title: 'Understanding Portfolio Diversification',
    excerpt: 'Learn how to properly diversify your investment portfolio to protect your wealth and achieve steady growth.',
    category: 'Education',
    author: 'Jennifer Liu',
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
  },
  {
    title: 'Market Analysis: Q1 2024 Trends',
    excerpt: 'Our expert analysis of the current market trends and what they mean for your investment strategy.',
    category: 'Market News',
    author: 'Robert Kim',
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=400&fit=crop',
  },
  {
    title: 'Success Story: From Beginner to Portfolio Manager',
    excerpt: 'Meet Sarah, who transformed her financial future through our courses and now manages a $5M portfolio.',
    category: 'Community Stories',
    author: 'Emily Watson',
    date: '2024-01-01',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=400&fit=crop',
  },
  {
    title: 'The Psychology of Investing',
    excerpt: 'Understanding behavioral finance and how emotions impact investment decisions.',
    category: 'Education',
    author: 'Marcus Thompson',
    date: '2023-12-28',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&h=400&fit=crop',
  },
  {
    title: 'Tax-Efficient Investment Strategies',
    excerpt: 'Maximize your returns by understanding and implementing tax-efficient investment approaches.',
    category: 'Investing Tips',
    author: 'Sarah Martinez',
    date: '2023-12-20',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & Resources</h1>
            <p className="text-xl text-white/90">
              Insights, strategies, and success stories from our expert team
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 dark:hover:shadow-golden overflow-hidden cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <Badge className="absolute top-4 left-4 bg-gradient-hero">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
