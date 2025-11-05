import { motion } from 'framer-motion';
import { Target, Award, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [ 
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To demystify investing and empower everyone with the knowledge and tools to build lasting wealth.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver world-class education and advisory services that exceed expectations.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a supportive network where investors learn from and inspire each other.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Transparent practices and ethical guidance in everything we do.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-white/90">
              Founded with a vision to make investing accessible to everyone, InvestEd has grown into a trusted platform serving thousands of investors worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold mb-6">Why We Exist</h2>
              <p className="text-muted-foreground mb-6">
                We started InvestEd because we saw too many people missing out on financial opportunities due to lack of education and guidance. The world of investing can be intimidating, filled with jargon and complex strategies that seem out of reach for the average person.
              </p>
              <p className="text-muted-foreground mb-6">
                Our founders, experienced investors and educators, came together with a simple goal: break down the barriers to successful investing. We wanted to create a platform where anyone—from students to busy professionals to business owners—could learn, grow, and thrive financially.
              </p>
              <p className="text-muted-foreground">
                Today, InvestEd is more than a platform. It's a community of learners, achievers, and wealth builders who support each other on their financial journeys.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 dark:hover:shadow-golden">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Learners</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="text-muted-foreground">Courses</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">$50M+</div>
                <div className="text-muted-foreground">Invested</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
