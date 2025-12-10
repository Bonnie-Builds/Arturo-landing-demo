import { Container } from '../components/ui/Container';
import { motion } from 'framer-motion';

export function Integrations() {
  const tools = ["Slack", "Salesforce", "Notion", "HubSpot", "Jira", "Linear"];

  return (
    <section className="py-32 border-b border-white/5 bg-[#050505]">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Plug-and-play with your stack</h2>
          <p className="text-neutral-400 text-lg">Deep bidirectional integrations with the tools you use every day.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {tools.map((tool, i) => (
            <motion.div 
              key={tool} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 0 30px -10px rgba(199,255,105,0.15)" }}
              className="group h-32 flex items-center justify-center bg-[#0a0a0a] border border-white/5 rounded-2xl transition-all duration-500 hover:border-[#C7FF69]/50 hover:bg-[#C7FF69]/[0.02] cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-xl font-medium text-neutral-500 group-hover:text-white transition-colors relative z-10">
                {tool}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
