"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Microscope,
  Brain,
  Activity,
  FlaskConical,
  ChevronDown,
} from "lucide-react";

const figures = {
  subgroup: "/figures/fig_nejm_A_gradient.png",
  prediction: "/figures/fig04_prediction_interval.png",
  loo: "/figures/fig_nejm_C_loo.png",
  prisma: "/figures/fig02_prisma_flow.png",
  sensitivity: "/figures/fig04_sensitivity.png",
};

export default function AspirinResistanceCompanionPage() {
  return (
    <main className="bg-[#06080B] text-[#F5F1EA] overflow-hidden selection:bg-[#8BAD65]/40">
      <BackgroundTexture />

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#06080B]/65 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="font-black tracking-[0.35em] text-sm text-[#D6E6C0]">
            STROKE_001
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-[#D8D0C7]">
            <a href="#concept" className="hover:text-[#8BAD65] transition">
              Concept
            </a>
            <a href="#assays" className="hover:text-[#8BAD65] transition">
              Assays
            </a>
            <a href="#results" className="hover:text-[#8BAD65] transition">
              Results
            </a>
            <a href="#methods" className="hover:text-[#8BAD65] transition">
              Methods
            </a>
            <a href="#future" className="hover:text-[#8BAD65] transition">
              Future
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,173,101,0.12),transparent_45%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 border border-[#8BAD65]/30 bg-[#8BAD65]/10 rounded-full px-5 py-2 mb-8 text-sm tracking-[0.2em] uppercase text-[#DCE8CF]">
              <Microscope className="w-4 h-4" />
              Systematic Review & Meta-analysis
            </div>

            <h1 className="text-[4.5rem] md:text-[7rem] leading-[0.92] font-black tracking-[-0.05em] uppercase max-w-5xl">
              Aspirin
              <br />
              Resistance
              <br />
              <span className="text-[#8BAD65]">is assay-defined</span>
            </h1>

            <p className="mt-10 text-xl leading-relaxed text-[#BEB4A7] max-w-2xl font-light">
              A conceptual and statistical re-examination of laboratory-defined
              aspirin resistance in ischemic stroke. Different platelet-function
              assays may not measure the same biological reality.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="group bg-[#8BAD65] text-[#081008] rounded-full px-7 py-4 font-semibold flex items-center gap-3 hover:bg-[#A4C57E] transition-all">
                Explore Findings
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>

              <button className="rounded-full border border-white/15 px-7 py-4 text-[#D4CCC2] hover:bg-white/5 transition">
                Supplementary Material
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-[#8BAD65]/10 blur-[120px] rounded-full" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.6))] z-10" />

              <Image
                src={figures.subgroup}
                alt="Assay subgroup analysis"
                width={1600}
                height={1200}
                className="w-full h-auto opacity-90 mix-blend-screen"
              />

              <div className="absolute bottom-0 left-0 p-8 z-20">
                <p className="text-[#D7E7C7] uppercase tracking-[0.25em] text-xs mb-4">
                  Core Observation
                </p>

                <h3 className="text-3xl font-bold leading-tight max-w-lg">
                  AR prevalence varies nearly fourfold across assay platforms.
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#8BAD65] animate-bounce">
          <ChevronDown className="w-7 h-7" />
        </div>
      </section>

      {/* METRICS */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-5">
          <MetricCard
            title="Pooled Prevalence"
            value="15.6%"
            subtitle="95% CI 11.3–20.9%"
          />

          <MetricCard
            title="Prediction Interval"
            value="3.8–45.9%"
            subtitle="Future-study range"
          />

          <MetricCard
            title="Heterogeneity"
            value="88.3%"
            subtitle="Substantial between-study variance"
          />

          <MetricCard
            title="Assay Gradient"
            value="4.4×"
            subtitle="AA Aggregometry → PFA-200"
          />
        </div>
      </section>

      {/* CONCEPT */}
      <section id="concept" className="relative px-6 py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-20 items-start">
          <div className="sticky top-32">
            <p className="text-[#8BAD65] uppercase tracking-[0.3em] text-sm mb-5">
              Conceptual Reframing
            </p>

            <h2 className="text-5xl leading-[1] font-black uppercase mb-8">
              We may not be measuring a single construct.
            </h2>

            <p className="text-lg text-[#BFB5A9] leading-relaxed">
              The apparent prevalence of aspirin resistance changes depending on
              how platelet inhibition is operationalized. Assay class explains a
              substantial proportion of heterogeneity, challenging the assumption
              that “aspirin resistance” represents a biologically unified
              phenotype.
            </p>
          </div>

          <div className="space-y-8">
            <ConceptCard
              icon={<Brain className="w-6 h-6" />}
              title="Construct Instability"
              text="A patient may be labeled aspirin-resistant by one platform and aspirin-sensitive by another."
            />

            <ConceptCard
              icon={<Activity className="w-6 h-6" />}
              title="Pathway Specificity"
              text="AA-specific aggregometry interrogates the COX-1 pathway directly, whereas closure-time platforms capture broader platelet behavior."
            />

            <ConceptCard
              icon={<FlaskConical className="w-6 h-6" />}
              title="Clinical Translation Problem"
              text="Without assay standardization, pooled prevalence estimates and escalation strategies may not be biologically comparable."
            />
          </div>
        </div>
      </section>

      {/* ASSAYS */}
      <section id="assays" className="px-6 py-28 bg-[linear-gradient(to_bottom,#090C10,#0E1115)] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <p className="text-[#8BAD65] uppercase tracking-[0.3em] text-sm mb-5">
              Assay Architecture
            </p>

            <h2 className="text-6xl font-black uppercase leading-[0.95] mb-8">
              Different assays.<br />
              Different biology.
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <AssayCard
              title="AA Aggregometry"
              prevalence="7.3%"
              specificity="High COX-1 specificity"
              description="Direct interrogation of the arachidonic-acid pathway inhibited by aspirin."
              accent="#8BAD65"
            />

            <AssayCard
              title="Non-AA Aggregometry"
              prevalence="14.4%"
              specificity="Mixed agonist activation"
              description="Includes pathways partially independent of aspirin’s canonical mechanism."
              accent="#4B9FE1"
            />

            <AssayCard
              title="VerifyNow ARU"
              prevalence="18.0%"
              specificity="Flow / closure-time platform"
              description="Measures broader platelet reactivity under standardized flow conditions."
              accent="#D98B2C"
            />

            <AssayCard
              title="PFA-200"
              prevalence="32.0%"
              specificity="Collagen / epinephrine closure"
              description="Highest prevalence estimate with substantial aspirin-independent contribution."
              accent="#D45845"
            />
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="px-6 py-28">
        <div className="max-w-7xl mx-auto space-y-32">
          <SectionHeader
            eyebrow="Primary Results"
            title="Quantitative findings"
          />

          <FeatureFigure
            title="Assay-dependent prevalence gradient"
            description="More COX-1-specific assays produced lower and more internally consistent prevalence estimates."
            image={figures.subgroup}
          />

          <FeatureFigure
            title="Prediction interval"
            description="A future stroke/TIA cohort using a different assay in a different setting could plausibly observe prevalence estimates ranging from 3.8% to 45.9%."
            image={figures.prediction}
          />

          <div className="grid lg:grid-cols-2 gap-10">
            <MiniFigure
              title="Leave-One-Out Stability"
              image={figures.loo}
            />

            <MiniFigure
              title="Sensitivity Analyses"
              image={figures.sensitivity}
            />
          </div>
        </div>
      </section>

      {/* METHODS */}
      <section id="methods" className="px-6 py-28 border-t border-white/10 bg-[radial-gradient(circle_at_top,#10151A,transparent_65%)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">
          <div>
            <p className="text-[#8BAD65] uppercase tracking-[0.3em] text-sm mb-5">
              Methods & Transparency
            </p>

            <h2 className="text-5xl font-black uppercase leading-[0.95] mb-8">
              Source verification & robustness framework
            </h2>

            <p className="text-lg text-[#BEB4A7] leading-relaxed">
              Studies were re-reviewed manually to verify aspirin-resistance
              numerators, denominators, assay definitions, and eligibility.
              Multiple sensitivity models were pre-specified to test estimate
              stability.
            </p>
          </div>

          <div className="space-y-8">
            <MethodBlock
              title="Strict Platelet-Function Model"
              text="Restricted to stroke/TIA populations with verified chronic aspirin exposure and platelet-function testing."
            />

            <MethodBlock
              title="Prediction Intervals"
              text="Prediction intervals were emphasized over pooled prevalence estimates to reflect expected future-study variability."
            />

            <MethodBlock
              title="Bias Assessment"
              text="Egger’s and Lin–Chu testing demonstrated no major small-study effects."
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-24">
          <Image
            src={figures.prisma}
            alt="PRISMA flow"
            width={1800}
            height={1200}
            className="w-full rounded-[2rem] border border-white/10 shadow-2xl"
          />
        </div>
      </section>

      {/* FUTURE */}
      <section id="future" className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Research Agenda"
            title="Toward clinical translation"
          />

          <div className="grid lg:grid-cols-4 gap-6 mt-20">
            <RoadmapCard number="01" title="Assay Standardisation" />
            <RoadmapCard number="02" title="Prospective Cohorts" />
            <RoadmapCard number="03" title="IPD Meta-analysis" />
            <RoadmapCard number="04" title="Pharmacogenetic Trials" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-20 border-t border-white/10 bg-[#050608]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#8BAD65] text-sm mb-5">
              Correspondence
            </p>

            <h3 className="text-3xl font-black uppercase mb-6">
              Aspirin Resistance in Ischemic Stroke
            </h3>

            <p className="text-[#BFB4A8] leading-relaxed max-w-xl">
              Supplementary companion website developed for poster presentation
              and extended methodological transparency.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm text-[#BEB5A8]">
            <div>
              <p className="text-[#8BAD65] uppercase tracking-[0.2em] mb-3">
                Selected References
              </p>

              <div className="space-y-2 leading-relaxed">
                <p>(1) GBD 2019 Stroke Collaborators. Lancet Neurol. 2021.</p>
                <p>(2) Patrono C, Rocca B. ATVB. 2008.</p>
                <p>(3) Lordkipanidzé M, et al. Eur Heart J. 2007.</p>
              </div>
            </div>

            <div>
              <p className="text-[#8BAD65] uppercase tracking-[0.2em] mb-3">
                Technical Notes
              </p>

              <div className="space-y-2 leading-relaxed">
                <p>PRISMA 2020</p>
                <p>Random-effects meta-analysis</p>
                <p>Prediction intervals</p>
                <p>Assay subgrouping</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function BackgroundTexture() {
  return (
    <>
      <div className="fixed inset-0 opacity-[0.08] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
    </>
  );
}

function MetricCard({ title, value, subtitle }: any) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:-translate-y-1 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8BAD65]/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

      <p className="uppercase tracking-[0.2em] text-xs text-[#B8AEA3] mb-5 relative z-10">
        {title}
      </p>

      <div className="text-5xl font-black tracking-tight text-[#F4F0EA] relative z-10">
        {value}
      </div>

      <p className="mt-5 text-[#9E9387] relative z-10 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

function ConceptCard({ icon, title, text }: any) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-[#8BAD65]/40 transition-all">
      <div className="w-14 h-14 rounded-2xl bg-[#8BAD65]/15 text-[#8BAD65] flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-5 uppercase tracking-tight">
        {title}
      </h3>

      <p className="text-[#BDB3A7] leading-relaxed text-lg">
        {text}
      </p>
    </div>
  );
}

function AssayCard({ title, prevalence, specificity, description, accent }: any) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D1014] p-8 hover:-translate-y-2 transition-all duration-500">
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ background: accent }}
      />

      <div
        className="w-4 h-4 rounded-full mb-8"
        style={{ background: accent }}
      />

      <h3 className="text-3xl font-black uppercase leading-none mb-8">
        {title}
      </h3>

      <div
        className="text-6xl font-black tracking-tight mb-6"
        style={{ color: accent }}
      >
        {prevalence}
      </div>

      <p className="uppercase tracking-[0.18em] text-xs mb-5 text-[#A89F94]">
        {specificity}
      </p>

      <p className="text-[#C0B7AB] leading-relaxed text-lg">
        {description}
      </p>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: any) {
  return (
    <div className="max-w-4xl">
      <p className="text-[#8BAD65] uppercase tracking-[0.3em] text-sm mb-5">
        {eyebrow}
      </p>

      <h2 className="text-6xl font-black uppercase leading-[0.92]">
        {title}
      </h2>
    </div>
  );
}

function FeatureFigure({ title, description, image }: any) {
  return (
    <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-12 items-center">
      <div>
        <h3 className="text-5xl font-black uppercase leading-[0.95] mb-8">
          {title}
        </h3>

        <p className="text-xl text-[#BDB4A9] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-[#0A0D11] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
        <Image
          src={image}
          alt={title}
          width={1800}
          height={1200}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

function MiniFigure({ title, image }: any) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#0B0E12] overflow-hidden">
      <div className="p-8 border-b border-white/10">
        <h3 className="text-2xl font-black uppercase">
          {title}
        </h3>
      </div>

      <Image
        src={image}
        alt={title}
        width={1400}
        height={1000}
        className="w-full h-auto"
      />
    </div>
  );
}

function MethodBlock({ title, text }: any) {
  return (
    <div className="border-l-2 border-[#8BAD65] pl-8 py-2">
      <h3 className="text-2xl font-black uppercase mb-4">
        {title}
      </h3>

      <p className="text-[#BFB5A9] text-lg leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function RoadmapCard({ number, title }: any) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D1014] p-10 min-h-[260px] group hover:border-[#8BAD65]/50 transition-all">
      <div className="absolute -right-10 -top-10 text-[9rem] font-black text-white/[0.03] group-hover:text-[#8BAD65]/10 transition-all">
        {number}
      </div>

      <div className="relative z-10">
        <p className="text-[#8BAD65] uppercase tracking-[0.3em] text-sm mb-10">
          {number}
        </p>

        <h3 className="text-4xl font-black uppercase leading-[0.95]">
          {title}
        </h3>
      </div>
    </div>
  );
}
