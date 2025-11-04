import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const audiences = [
  {
    icon: Briefcase,
    title: 'For Professionals',
    description: 'Advance your career with finance skills that matter. Master portfolio management, risk assessment, and strategic planning.',
    cta: 'Explore Courses',
  },
  {
    icon: TrendingUp,
    title: 'For Investors',
    description: 'Build and optimize your portfolio with expert guidance. Get personalized strategies for long-term wealth creation.',
    cta: 'View Plans',
  },
  {
    icon: Building,
    title: 'For Business Owners',
    description: 'Master corporate finance strategy. Learn to manage cash flow, make investment decisions, and grow your business.',
    cta: 'Get Started',
  },
];

export const AudienceHighlights = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Designed For Your Success</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're growing your career, building wealth, or scaling your business, we have the right solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 dark:hover:shadow-golden">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
                    <audience.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{audience.description}</p>
                  <Link to="/plans">
                    <Button className="w-full">
                      {audience.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
