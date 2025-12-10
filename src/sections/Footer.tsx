import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';

export function Footer() {
  const links = ["Company", "Careers", "Legal", "Twitter", "LinkedIn"];

  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(199,255,105,0.05),transparent_70%)] pointer-events-none" />

      <Container>
        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32 relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            The future is automated.
          </h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Join the high-performing teams building on Arturo.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button variant="primary" size="lg" className="w-full sm:w-auto px-12 shadow-lg shadow-[#C7FF69]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              Start Building Now
            </Button>
            <p className="text-sm text-neutral-500">14-day free trial. No credit card required.</p>
          </div>
        </motion.div>

        {/* Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <div className="text-2xl font-bold text-white">Arturo</div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {links.map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-neutral-500 hover:text-white transition-colors text-sm font-mono uppercase tracking-wider hover:underline decoration-[#C7FF69] underline-offset-4"
              >
                {link}
              </a>
            ))}
          </div>
          
          <div className="text-neutral-600 text-sm">
            © 2024 Arturo Inc.
          </div>
        </div>
      </Container>
    </footer>
  );
}
