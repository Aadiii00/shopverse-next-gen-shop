import { motion } from "framer-motion";
import { ShoppingBag, TrendingUp, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Welcome to Shopverse
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover amazing products at unbeatable prices. Your shopping journey starts here.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: ShoppingBag, title: "Wide Selection", desc: "1000+ products" },
            { icon: TrendingUp, title: "Best Prices", desc: "Competitive deals" },
            { icon: Shield, title: "Secure Payment", desc: "100% protected" },
            { icon: Truck, title: "Fast Delivery", desc: "2-3 day shipping" }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-lg bg-card shadow-card hover:shadow-card-hover transition-shadow"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
