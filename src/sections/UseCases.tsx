import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { motion } from 'framer-motion';

export function UseCases() {
  const cases = [
    {
      title: "RevOps",
      description: "Enrich leads and route them to sales instantly.",
      metric: "Zero lead leakage"
    },
    {
      title: "HR & People",
      description: "Automate onboarding checklists and provisioning.",
      metric: "Day 1 readiness"
    },
    {
      title: "Customer Success",
      description: "Triage tickets and draft responses automatically.",
      metric: "<5 min response time"
    }
  ];

  return (
    <section id="use-cases" className="py-32 bg-[#050505] relative">
      <Container>
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Blueprints for every department</h2>
          <p className="text-neutral-400 text-lg">Don't start from scratch. Use our pre-built agent swarms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group hover:border-white/20 transition-all duration-500 bg-white/[0.02] backdrop-blur-sm border-white/5 hover:bg-white/[0.04]">
                <div className="mb-8 transform group-hover:-translate-y-1 transition-transform duration-500">
                  <Badge variant="accent" className="bg-[#C7FF69]/10 text-[#C7FF69] border-[#C7FF69]/20 mb-6">{useCase.metric}</Badge>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#C7FF69] transition-colors">{useCase.title}</h3>
                  <p className="text-neutral-400 text-lg leading-relaxed">{useCase.description}</p>
                </div>
                <div className="h-1 w-12 bg-white/10 group-hover:w-full group-hover:bg-[#C7FF69]/30 transition-all duration-700 rounded-full" />
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
