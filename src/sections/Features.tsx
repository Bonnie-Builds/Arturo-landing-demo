import { Container } from '../components/ui/Container';
import { Play, PauseOctagon, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export function Features() {
  const features = [
    { 
      title: "Visual Workflow Builder", 
      desc: "Drag, drop, and connect. No Python required.",
      icon: <Play className="w-5 h-5 text-[#C7FF69]" />
    },
    { 
      title: "Human-in-the-loop", 
      desc: "Agents pause for approval when confidence is low.",
      icon: <PauseOctagon className="w-5 h-5 text-[#C7FF69]" />
    },
    { 
      title: "Observability Dashboard", 
      desc: "Trace every decision your agents make in real-time.",
      icon: <Activity className="w-5 h-5 text-[#C7FF69]" />
    },
  ];

  return (
    <section id="features" className="py-32 bg-[#080808]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Side */}
          <div className="lg:w-1/3 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Build without breaking</h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Enterprise-grade controls for autonomous systems. You set the guardrails, they do the work.
              </p>
            </motion.div>

            <div className="space-y-8">
              {features.map((feat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 group"
                >
                  <div className="mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#C7FF69] transition-colors shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#C7FF69] transition-colors">{feat.title}</h3>
                    <p className="text-neutral-500 leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Side - The Builder Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 w-full"
          >
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl group hover:border-[#C7FF69]/30 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-10 bg-[#050505] border-b border-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="ml-4 px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-neutral-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF69] animate-pulse"></span>
                  arturo_workflow_v2.json
                </div>
              </div>
              
              <div className="p-8 md:p-12 min-h-[400px] flex items-center justify-center relative bg-[radial-gradient(#222_1px,transparent_1px)] bg-[size:20px_20px]">
                 {/* Fake Nodes */}
                 <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
                    {/* Node 1 */}
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="w-48 bg-[#0a0a0a] border border-white/20 rounded-lg p-4 shadow-lg cursor-default"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-mono text-white">TRIGGER</span>
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                      </div>
                      <div className="text-sm text-neutral-300">New Email (Gmail)</div>
                    </motion.div>

                    {/* Connection Line */}
                    <div className="w-1 h-8 md:w-16 md:h-1 bg-white/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#C7FF69] opacity-50 animate-[marquee_2s_linear_infinite]" />
                    </div>

                    {/* Node 2 - AI */}
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="w-48 bg-[#0a0a0a] border border-[#C7FF69] rounded-lg p-4 shadow-[0_0_30px_-10px_rgba(199,255,105,0.3)] cursor-default"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-mono text-[#C7FF69]">INTELLIGENCE</span>
                        <div className="w-2 h-2 rounded-full bg-[#C7FF69] animate-pulse" />
                      </div>
                      <div className="text-sm text-white">Extract Intent</div>
                      <div className="mt-2 text-[10px] bg-white/5 p-1 rounded font-mono text-neutral-400">
                        Confidence: 98%
                      </div>
                    </motion.div>

                    {/* Connection Line */}
                    <div className="w-1 h-8 md:w-16 md:h-1 bg-white/10" />

                    {/* Node 3 */}
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="w-48 bg-[#0a0a0a] border border-white/20 rounded-lg p-4 shadow-lg opacity-50 cursor-default"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-mono text-white">ACTION</span>
                        <div className="w-2 h-2 rounded-full bg-neutral-500" />
                      </div>
                      <div className="text-sm text-neutral-300">Update Salesforce</div>
                    </motion.div>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
