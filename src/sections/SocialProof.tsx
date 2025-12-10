import { Container } from '../components/ui/Container';

export function SocialProof() {
  const logos = [
    "TechFlow", "Ventura", "ScaleUp", "Nebula", "Orbit", 
    "Vertex", "Horizon", "Quantum", "Cipher", "Apex"
  ];

  return (
    <section className="w-full py-12 bg-background border-b border-white/5 overflow-hidden">
      <Container className="mb-8 text-center">
        <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
          Powering critical infrastructure for
        </p>
      </Container>
      
      <div className="relative flex overflow-x-hidden group mask-linear-fade">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
        
        <div className="animate-marquee whitespace-nowrap flex items-center gap-24 px-8">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span 
              key={i} 
              className="text-xl font-semibold tracking-tight text-white/20 hover:text-white transition-colors duration-500 cursor-default select-none"
              style={{ fontFeatureSettings: '"ss01" 1' }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
