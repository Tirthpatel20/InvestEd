import { motion } from 'framer-motion';
import { GraduationCap, Users, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Education',
    description: 'Learn from industry professionals with courses designed for all levels, from beginners to advanced investors.',
  },
  {
    icon: Users,
    title: 'Personalized Advisory',
    description: 'Get customized investment strategies and one-on-one guidance tailored to your financial goals.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Strategies',
    description: 'Access battle-tested investment approaches that have delivered consistent returns for our clients.',
  },
  {
    icon: Shield,
    title: 'Secure & Trusted',
    description: 'Your data and investments are protected with bank-level security and transparent practices.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose InvestEd?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine personalized guidance, and community support to help you achieve financial freedom
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 dark:hover:shadow-golden border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
