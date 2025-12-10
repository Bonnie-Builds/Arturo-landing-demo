import { Container } from '../components/ui/Container';
import { motion } from 'framer-motion';

export function HowItWorks() {
  const steps = [
    { number: "01", title: "Connect", desc: "Link your stack (Slack, CRM, DB) in one click." },
    { number: "02", title: "Train", desc: "Show the agent what 'good' looks like with natural language." },
    { number: "03", title: "Delegate", desc: "Set the agent loose with defined guardrails." },
  ];

  return (
    <section className="py-32 relative bg-[#050505] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">From Chaos to Orchestration</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Demystifying the magic. Build autonomous workflows in three simple steps.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#333] to-transparent z-0" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              <div className="w-24 h-24 mx-auto mb-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center relative z-10 group-hover:border-[#C7FF69] group-hover:shadow-[0_0_40px_-10px_rgba(199,255,105,0.4)] transition-all duration-500">
                <span className="text-2xl font-mono text-white group-hover:text-[#C7FF69] transition-colors">{step.number}</span>
              </div>
              
              <div className="text-center p-8 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#C7FF69] transition-colors">{step.title}</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
