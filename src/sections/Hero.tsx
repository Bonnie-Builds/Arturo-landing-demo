import { Suspense } from 'react';
import { Button } from '../components/ui/Button';
import { ArrowRight, Terminal } from 'lucide-react';
import { HeroScene } from '../components/three/HeroScene';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-center items-center isolation-auto pt-20">
      
      {/* 3D Scene Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#050505]" />}>
        <HeroScene />
      </Suspense>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col items-center text-center pointer-events-none">
        
        <div className="pointer-events-auto flex flex-col items-center">
          {/* System Online Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-8 shadow-2xl"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C7FF69] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C7FF69]"></span>
            </span>
            <span className="text-[10px] font-mono text-neutral-400 tracking-[0.2em] uppercase">System Online</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] font-bold tracking-tighter text-white mb-8"
          >
            Orchestrate <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">Intelligence.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-lg text-neutral-400 max-w-xl font-normal tracking-wide leading-relaxed mb-10 mx-auto"
          >
            The operating system for autonomous enterprise agents. Design, deploy, and direct swarms that execute complex business logic with surgical precision.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <Button variant="primary" size="lg" className="group shadow-lg shadow-[#C7FF69]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              Initialize System
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="ghost" className="text-neutral-400 hover:text-white font-mono text-sm transition-colors duration-200">
              <Terminal className="mr-2 w-4 h-4" />
              View Documentation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
