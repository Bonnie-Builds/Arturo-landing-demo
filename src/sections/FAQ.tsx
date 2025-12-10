import { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      q: "Do I need engineering to set this up?",
      a: "No. Arturo is designed for Ops professionals. If you can use Zapier, you can use Arturo."
    },
    {
      q: "Is my data safe?",
      a: "Yes. We are SOC2 compliant and offer on-premise deployment for enterprise."
    },
    {
      q: "Can I connect custom internal tools?",
      a: "Absolutely. Our API connector allows you to interface with any REST or GraphQL endpoint securely."
    },
    {
      q: "How do you handle rate limits?",
      a: "Our orchestration engine automatically manages rate limits, retries, and back-off strategies so your workflows never fail silently."
    }
  ];

  return (
    <section className="py-24 border-t border-white/5">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Common Questions</h2>
            <p className="text-neutral-400">Everything you need to know about the platform.</p>
          </motion.div>

          <div className="lg:w-2/3">
            <div className="space-y-4">
              {questions.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-t border-white/10 pt-4"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between text-left py-4 focus:outline-none group"
                  >
                    <span className="text-xl font-medium text-white group-hover:text-[#C7FF69] transition-colors">
                      {item.q}
                    </span>
                    <span className="ml-4 text-white/50 group-hover:text-[#C7FF69] transition-colors">
                      {openIndex === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-neutral-400 leading-relaxed text-lg pr-12 pl-4 border-l-2 border-[#C7FF69]/20 mb-8">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
