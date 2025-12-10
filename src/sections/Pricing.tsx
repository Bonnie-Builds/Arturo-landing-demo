import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$499",
      period: "/mo",
      features: ["5 Agents", "Standard Integrations", "Email Support"],
      cta: "Start Free Trial",
      variant: "outline"
    },
    {
      name: "Scale",
      price: "$1,299",
      period: "/mo",
      features: ["Unlimited Agents", "Custom Actions", "Priority Support", "Advanced Analytics"],
      cta: "Start Free Trial",
      highlight: true,
      variant: "primary"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["SSO", "SLA", "Dedicated Solutions Engineer", "VPC Deployment"],
      cta: "Contact Sales",
      variant: "outline"
    }
  ];

  return (
    <section id="pricing" className="py-32">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Invest in efficiency</h2>
          <p className="text-neutral-400 text-lg">Transparent pricing for teams of all sizes.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                tier.highlight 
                  ? 'bg-[#101010] border-[#C7FF69] shadow-[0_0_40px_-10px_rgba(199,255,105,0.15)] z-10 scale-105 hover:shadow-[0_0_60px_-10px_rgba(199,255,105,0.25)]' 
                  : 'bg-[#0a0a0a] border-white/10 hover:border-white/20 hover:bg-white/5'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-[#C7FF69] text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_-5px_#C7FF69]">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white tracking-tighter">{tier.price}</span>
                  <span className="text-neutral-500 font-mono text-sm">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${tier.highlight ? 'text-[#C7FF69]' : 'text-neutral-500'}`} />
                    <span className="text-neutral-300 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.variant as any} 
                className="w-full"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
