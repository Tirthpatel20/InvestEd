import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  // {
  //   name: 'David Anderson',
  //   role: 'CEO & Founder',
  //   credentials: 'CFA, MBA',
  //   bio: 'Former hedge fund manager with 20+ years of experience in portfolio management and investment strategy.',
  //   image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  // },
  // {
  //   name: 'Jennifer Liu',
  //   role: 'Chief Investment Officer',
  //   credentials: 'CFP, CPA',
  //   bio: 'Expert in wealth management and financial planning, helping clients achieve their long-term financial goals.',
  //   image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  // },
  // {
  //   name: 'Marcus Thompson',
  //   role: 'Head of Education',
  //   credentials: 'PhD Finance',
  //   bio: 'Former professor with a passion for making complex financial concepts accessible to everyone.',
  //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  // },
  // {
  //   name: 'Sarah Martinez',
  //   role: 'Senior Advisor',
  //   credentials: 'CFA, CAIA',
  //   bio: 'Specializes in alternative investments and portfolio diversification strategies.',
  //   image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  // },
  // {
  //   name: 'Robert Kim',
  //   role: 'Technical Analyst',
  //   credentials: 'CMT',
  //   bio: 'Expert in market analysis and trading strategies with a focus on risk management.',
  //   image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
  // },
  // {
  //   name: 'Emily Watson',
  //   role: 'Community Manager',
  //   credentials: 'MBA',
  //   bio: 'Dedicated to building and nurturing our vibrant community of investors and learners.',
  //   image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  // },
];

const Team = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-white/90">
              World-class professionals dedicated to your financial success
            </p>
          </motion.div>
        </div>
      </section>
 
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 dark:hover:shadow-golden overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.credentials}</p>
                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
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

export default Team;
