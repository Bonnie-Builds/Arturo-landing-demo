import { Container } from '../components/ui/Container';
import { ShieldCheck, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export function Security() {
  const badges = ["SOC2 Type II", "GDPR", "AES-256", "SSO"];

  return (
    <section id="security" className="py-32 bg-[#0a0a0a] border-y border-white/5 overflow-hidden relative">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 mb-8 shadow-[0_0_20px_-10px_rgba(34,197,94,0.5)]">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span className="text-xs font-mono text-green-400 uppercase tracking-widest font-semibold">Bank-Grade Security</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">Enterprise-grade trust</h2>
            <p className="text-neutral-400 text-xl mb-10 leading-relaxed">
              Your data never trains our public models. We offer full VPC deployment for regulated industries.
              Sleep soundly knowing your agent swarms operate within strict boundaries.
            </p>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span key={badge} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-neutral-300 hover:border-white/20 hover:bg-white/10 transition-all cursor-default">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full flex justify-center relative"
          >
            <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full" />
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
              <div className="relative z-10 w-full h-full border border-white/10 bg-[#050505] rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shine_4s_linear_infinite]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1),transparent_70%)]" />
                <Lock className="w-32 h-32 text-white/20 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
