// import { motion } from 'framer-motion';
// import { Card, CardContent } from '@/components/ui/card';
// import { Star } from 'lucide-react';

// const testimonials = [
//   {
//     name: 'Sarah Johnson',
//     role: 'Portfolio Manager',
//     content: 'InvestPro transformed my investment approach. The personalized advisory service helped me achieve 40% returns in my first year.',
//     rating: 5,
//   },
//   {
//     name: 'Michael Chen',
//     role: 'Entrepreneur',
//     content: 'The courses are incredibly practical. I applied what I learned immediately to my business and saw measurable improvements.',
//     rating: 5,
//   },
//   {
//     name: 'Emily Rodriguez',
//     role: 'Financial Analyst',
//     content: 'Best investment in my career. The expert sessions and community support are invaluable for continuous learning.',
//     rating: 5,
//   },
// ];

// export const Testimonials = () => {
//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Thousands</h2>
//           <p className="text-xl text-muted-foreground">
//             See what our community members have to say about their success
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <Card className="h-full hover:shadow-card transition-all duration-300 dark:hover:shadow-golden">
//                 <CardContent className="pt-6">
//                   <div className="flex mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-5 w-5 fill-primary text-primary" />
//                     ))}
//                   </div>
//                   <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
//                   <div className="border-t border-border pt-4">
//                     <p className="font-semibold">{testimonial.name}</p>
//                     <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
