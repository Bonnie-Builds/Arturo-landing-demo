import { Container } from '../components/ui/Container';
import { motion } from 'framer-motion';

export function ROI() {
  const stats = [
    { value: "20h+", label: "Saved per employee/week" },
    { value: "99.9%", label: "Accuracy on data entry" },
    { value: "10x", label: "Faster lead-to-response" },
  ];

  return (
    <section className="py-24 border-y border-white/5 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(199,255,105,0.03),transparent_50%)] pointer-events-none" />
      
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">The ROI of Autonomy</h2>
            <p className="text-neutral-400 text-xl max-w-lg leading-relaxed">
              Quantifiable impact from day one. Replace manual toil with scalable precision.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05] border border-white/[0.05] rounded-2xl overflow-hidden shadow-2xl relative z-10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#080808] p-12 flex flex-col items-center text-center group hover:bg-[#0c0c0c] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,255,105,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="text-6xl md:text-8xl font-bold text-[#C7FF69] mb-4 tracking-tighter group-hover:scale-105 transition-transform duration-500 block relative z-10">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-neutral-500 font-mono uppercase tracking-[0.2em] relative z-10">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
