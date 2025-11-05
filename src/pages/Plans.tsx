import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    period: " 3 months",
    description: "Perfect for beginners starting their investment journey",
    features: [
      "Monthly returns: 2% on invested capital",
      "Total returns: 6% on invested capital",
      "Monthly interest payouts (Optional)",
      "Minimum investment: ₹30,000",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₹1,699",
    period: " 6 months",
    description: "Short-term investment with flexible capital options",
    features: [
      "Monthly returns: 2.25% on invested capital",
      "Total returns: 13.5% on invested capital",
      "Monthly interest payouts (Optional)",
      "Minimum investment: ₹70,000",
      "Email support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹3,499",
    period: " 9 months",
    description: "Medium-term growth with better profit sharing",
    features: [
      "Monthly returns: 2.5% on invested capital",
      "Total returns: 22.5% on invested capital",
      "Monthly interest payouts (Optional)",
      "Minimum investment: ₹70,000",
      "24/7 priority support",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "₹4,999",
    period: " 12 months",
    description: "Long-term wealth building with maximum returns",
    features: [
       "Monthly returns: 3% on invested capital",
      "Total returns: 36% on invested capital",
      "Monthly interest payouts (Optional)",
      "Minimum investment: ₹70,000",
      "Email support",
    ],
    popular: false,
  },
];

const Plans = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Investment Plans
            </h1>
            <p className="text-xl text-white/90">
              Choose the perfect plan to accelerate your financial growth
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-hero text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card
                  className={`h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 dark:hover:shadow-golden ${
                    plan.popular ? "border-primary shadow-card" : ""
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between h-[350px]">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-15 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button
                        className="w-full"
                        variant={plan.popular ? "default" : "outline"}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-2xl mx-auto"
          >
            <p className="text-muted-foreground mb-4">
              All plans include a 30-day money-back guarantee. Cancel anytime.
            </p>
            <p className="text-sm text-muted-foreground">
              * Investments carry risk. Returns are not guaranteed. Please read
              our full disclaimer.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
 
export default Plans;
