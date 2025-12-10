import { Container } from '../components/ui/Container';
import { Link, Table } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProblemNarrative() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      <Container>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.2] text-white tracking-tight"
          >
            Your team wasn't hired to be human middleware
            <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mx-3 bg-[#C7FF69]/5 rounded-full align-middle border border-[#C7FF69]/10">
              <Link className="w-5 h-5 md:w-6 md:h-6 text-[#C7FF69]" />
            </span>.
            They are drowning in spreadsheets
            <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mx-3 bg-[#C7FF69]/5 rounded-full align-middle border border-[#C7FF69]/10">
              <Table className="w-5 h-5 md:w-6 md:h-6 text-[#C7FF69]" />
            </span>,
            manual data entry, and repetitive glue-work. It's time to stop the burnout.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
