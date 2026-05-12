"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  ArrowRight,
  Brain,
  Microscope,
  Activity,
  FlaskConical,
  ChevronDown,
  FileText,
  Download,
} from "lucide-react";

const figures = {
  subgroup: "/figures/fig_nejm_A_gradient.png",
  prediction: "/figures/fig04_prediction_interval.png",
  loo: "/figures/fig_nejm_C_loo.png",
  prisma: "/figures/fig02_prisma_flow.png",
  sensitivity: "/figures/fig04_sensitivity.png",
  funnel: "/figures/fig09_funnel_egger.png",
  pharmacogenetic: "/figures/figSX_pharmacogenetic.png",
};

export default function Home() {
  return (
    <main className="bg-[#05070A] text-[#F5F1EA] overflow-hidden selection:bg-[#8BAD65]/30">

      <BackgroundTexture />

      {/* FLOATING NAV */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="backdrop-blur-2xl bg-black/30 border border-white/10 rounded-full px-6 py-4 shadow-2xl">
          <div className="flex items-center gap-8 text-sm uppercase tracking-[0.2em]">
            <a href="#concept" className="hover:text-[#8BAD65] transition">
              Concept
            </a>

            <a href="#results" className="hover:text-[#8BAD65] transition">
              Results
            </a>

            <a href="#methods" className="hover:text-[#8BAD65] transition">
              Methods
            </a>

            <a href="#manuscript" className="hover:text-[#8BAD65] transition">
              Manuscript
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,173,101,0.12),transparent_45%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-3 border border-[#8BAD65]/30 bg-[#8BAD65]/10 rounded-full px-5 py-2 mb-8 text-sm tracking-[0.2em] uppercase text-[#DCE8CF]">
              <Microscope className="w-4 h-4" />
              Systematic Review & Meta-analysis
            </div>

            <h1 className="text-[4.5rem] md:text-[7rem] leading-[0.9] font-black tracking-[-0.06em] uppercase">
              Aspirin
              <br />
              Resistance
              <br />
              <span className="text-[#8BAD65]">
                Is Assay-Defined
              </span>
            </h1>

            <p className="mt-10 text-xl leading-relaxed text-[#BFB5A9] max-w-2xl">
              A conceptual and statistical re-examination of
              laboratory-defined aspirin resistance in ischemic
              stroke and TIA.
            </p>

            <div className="mt-12 flex gap-4 flex-wrap">

              <div className="mt-12 flex gap-4 flex-wrap">
                <a
                href="#results"
                className="group bg-[#8BAD65] text-black rounded-full px-7 py-4 font-semibold flex items-center gap-3 hover:bg-[#A8C982] transition-all w-fit"
                >
                  Explore Findings
                  
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </a>

              <a
                href="/manuscript.pdf"
                download
                className="rounded-full border border-white/10 px-7 py-4 hover:bg-white/5 transition"
              >
                Download Manuscript
              </a>
            </div>
          </motion.div>

          {/* HERO FIGURE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >

            <Tilt
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              perspective={1500}
              glareEnable={true}
              glareMaxOpacity={0.08}
              scale={1.01}
            >
              <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.55)]">

                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.65))] z-10" />

                <Image
                  src={figures.subgroup}
                  alt="Subgroup Analysis"
                  width={1600}
                  height={1200}
                  className="w-full h-auto"
                />

                <div className="absolute bottom-0 left-0 z-20 p-8">
                  <p className="uppercase tracking-[0.25em] text-xs text-[#DDE9D1] mb-4">
                    Central Observation
                  </p>

                  <h3 className="text-3xl font-black uppercase leading-tight max-w-lg">
                    AR prevalence varies nearly fourfold across assay platforms
                  </h3>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[#8BAD65]">
          <ChevronDown className="w-8 h-8" />
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
            subtitle="Expected future-study range"
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
      <section
        id="concept"
        className="px-6 py-28 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-20">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="sticky top-32 h-fit"
          >

            <p className="uppercase tracking-[0.3em] text-sm text-[#8BAD65] mb-5">
              Conceptual Reframing
            </p>

            <h2 className="text-6xl font-black uppercase leading-[0.9] mb-8">
              We may not be measuring a single construct.
            </h2>

            <p className="text-lg leading-relaxed text-[#BFB5A9]">
              Different platelet-function assays interrogate
              distinct biological pathways. Apparent aspirin
              resistance prevalence may partly reflect assay
              architecture rather than a biologically unified
              phenotype.
            </p>
          </motion.div>

          <div className="space-y-8">

            <ConceptCard
              icon={<Brain className="w-6 h-6" />}
              title="Construct Instability"
              text="A patient classified as aspirin-resistant by one assay may be aspirin-sensitive by another."
            />

            <ConceptCard
              icon={<Activity className="w-6 h-6" />}
              title="Pathway Specificity"
              text="AA-specific aggregometry directly interrogates the COX-1 pathway inhibited by aspirin."
            />

            <ConceptCard
              icon={<FlaskConical className="w-6 h-6" />}
              title="Translation Problem"
              text="Without assay standardization, prevalence estimates may lack direct biological comparability."
            />
          </div>
        </div>
      </section>

      {/* ASSAYS */}
      <section className="px-6 py-28 bg-[linear-gradient(to_bottom,#090C10,#0F1216)] border-y border-white/10">

        <div className="max-w-7xl mx-auto">

          <SectionHeader
            eyebrow="Assay Architecture"
            title="Different assays. Different biology."
          />

          <div className="grid lg:grid-cols-4 gap-6 mt-20">

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
              title="VerifyNow"
              prevalence="18.0%"
              specificity="Flow-based platform"
              description="Measures broader platelet reactivity under standardized conditions."
              accent="#D88A2B"
            />

            <AssayCard
              title="PFA-200"
              prevalence="32.0%"
              specificity="COL/EPI closure"
              description="Highest prevalence estimate with substantial aspirin-independent contribution."
              accent="#D45845"
            />
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section
        id="results"
        className="px-6 py-32"
      >
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

          <IntervalExplainer />

          <FeatureFigure
            title="Prediction interval"
            description="A future study using a different assay in a different setting could plausibly observe prevalence estimates ranging from negligible aspirin resistance to nearly half of patients meeting criteria."
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

          <FeatureFigure
            title="Publication Bias Assessment"
            description="Egger’s and trim-and-fill analyses demonstrated no major small-study effects."
            image={figures.funnel}
          />
        </div>
      </section>

      {/* METHODS */}
      <section
        id="methods"
        className="px-6 py-28 border-t border-white/10 bg-[radial-gradient(circle_at_top,#10151A,transparent_65%)]"
      >
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            eyebrow="Methods"
            title="Robustness & source verification"
          />

          <div className="grid lg:grid-cols-2 gap-14 mt-20">

            <MethodBlock
              title="Strict Platelet-Function Model"
              text="Restricted to stroke/TIA populations with confirmed aspirin exposure and platelet-function testing."
            />

            <MethodBlock
              title="Prediction Intervals"
              text="Prediction intervals were emphasized over pooled prevalence estimates to reflect expected future-study variability."
            />

            <MethodBlock
              title="Source Verification"
              text="Primary studies were manually re-reviewed to verify numerators, denominators, and assay eligibility."
            />

            <MethodBlock
              title="Bias Assessment"
              text="Egger’s and Lin–Chu testing demonstrated no major small-study effects."
            />
          </div>

          {/* METHODS DEEP DIVE */}
          <div className="mt-20">

            <details className="group border border-white/10 rounded-[2rem] p-8 bg-white/[0.02]">

              <summary className="cursor-pointer text-3xl font-black uppercase flex items-center gap-4">
                Methods Deep Dive
              </summary>

              <div className="mt-10 space-y-6 text-[#BFB5A9] leading-relaxed text-lg">

                <p>
                  Random-effects pooling used logit-transformed
                  proportions with DerSimonian-Laird τ² estimation.
                </p>

                <p>
                  Sensitivity analyses included leave-one-out
                  diagnostics, assay-specific subgrouping,
                  denominator verification, and temporal restriction.
                </p>

                <p>
                  Meta-regression suggested assay class explained
                  a substantial proportion of between-study variance.
                </p>
              </div>
            </details>
          </div>

          <div className="mt-24">

            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              perspective={1200}
            >
              <Image
                src={figures.prisma}
                alt="PRISMA"
                width={1800}
                height={1200}
                className="w-full rounded-[2rem] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
              />
            </Tilt>
          </div>
        </div>
      </section>

      {/* MANUSCRIPT */}
      <section
        id="manuscript"
        className="px-6 py-32"
      >
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            eyebrow="Supplementary Material"
            title="Embedded manuscript viewer"
          />

          <div className="mt-20 grid lg:grid-cols-[0.35fr_0.65fr] gap-10">

            <div className="space-y-8">

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">

                <div className="w-14 h-14 rounded-2xl bg-[#8BAD65]/15 flex items-center justify-center mb-6 text-[#8BAD65]">
                  <FileText className="w-6 h-6" />
                </div>

                <h3 className="text-3xl font-black uppercase mb-6">
                  Full Manuscript
                </h3>

                <p className="text-[#BEB4A8] leading-relaxed mb-8">
                  Extended analyses, supplementary figures,
                  methodological rationale, and source verification details.
                </p>

                <a
                  href="/manuscript.pdf"
                  download
                  className="inline-flex items-center gap-3 bg-[#8BAD65] text-black rounded-full px-6 py-4 font-semibold hover:bg-[#A9CA83] transition"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>

              {/* DOI STYLE BLOCK */}
              <div className="border-l-2 border-[#8BAD65] pl-6 py-3 text-sm text-[#BEB5A8]">

                <p className="uppercase tracking-[0.25em] text-[#8BAD65] mb-3">
                  Citation
                </p>

                <p className="leading-relaxed">
                  Alotaibi SA, et al. Aspirin resistance in ischemic stroke:
                  assay-dependent prevalence variability. Manuscript under review.
                </p>
              </div>
            </div>

            {/* PDF VIEWER */}
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">

              <iframe
                src="/manuscript.pdf"
                className="w-full h-[900px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-20 border-t border-white/10 bg-[#040507]">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          <div>

            <p className="uppercase tracking-[0.25em] text-[#8BAD65] text-sm mb-5">
              Correspondence
            </p>

            <h3 className="text-4xl font-black uppercase mb-5">
              Aspirin Resistance in Ischemic Stroke
            </h3>

            <p className="text-[#BFB4A8] max-w-xl leading-relaxed">
              Supplementary companion website developed for
              translational-science presentation and extended
              methodological transparency.
            </p>
          </div>

          <div className="text-sm text-[#9E9387] leading-relaxed">
            PRISMA 2020 · Random-effects meta-analysis · Prediction intervals · Assay subgrouping
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ========================= */
/* COMPONENTS */
/* ========================= */

function BackgroundTexture() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, -10, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="fixed inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
      />

      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
    </>
  );
}

function SectionHeader({ eyebrow, title }: any) {
  return (
    <div className="max-w-4xl">
      <p className="uppercase tracking-[0.3em] text-sm text-[#8BAD65] mb-5">
        {eyebrow}
      </p>

      <h2 className="text-6xl font-black uppercase leading-[0.92]">
        {title}
      </h2>
    </div>
  );
}

function MetricCard({ title, value, subtitle }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
    >
      <p className="uppercase tracking-[0.2em] text-xs text-[#B8AEA3] mb-5">
        {title}
      </p>

      <div className="text-5xl font-black">
        {value}
      </div>

      <p className="mt-5 text-[#9E9387]">
        {subtitle}
      </p>
    </motion.div>
  );
}

function ConceptCard({ icon, title, text }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
    >
      <div className="w-14 h-14 rounded-2xl bg-[#8BAD65]/15 text-[#8BAD65] flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="text-3xl font-black uppercase mb-5">
        {title}
      </h3>

      <p className="text-[#BDB3A7] leading-relaxed text-lg">
        {text}
      </p>
    </motion.div>
  );
}

function AssayCard({ title, prevalence, specificity, description, accent }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <Tilt
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
        perspective={1400}
        scale={1.02}
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D1014] p-8 min-h-[420px]">

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
            className="text-6xl font-black mb-6"
            style={{ color: accent }}
          >
            {prevalence}
          </div>

          <p className="uppercase tracking-[0.2em] text-xs text-[#AAA093] mb-5">
            {specificity}
          </p>

          <p className="text-[#C1B7AB] leading-relaxed text-lg">
            {description}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
}

function FeatureFigure({ title, description, image }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="grid lg:grid-cols-[0.42fr_0.58fr] gap-12 items-center"
    >

      <div>
        <h3 className="text-5xl font-black uppercase leading-[0.95] mb-8">
          {title}
        </h3>

        <p className="text-xl text-[#BDB4A9] leading-relaxed">
          {description}
        </p>
      </div>

      <Tilt
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        perspective={1400}
        glareEnable={true}
        glareMaxOpacity={0.08}
      >
        <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-[#0B0E12] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">

          <Image
            src={image}
            alt={title}
            width={1800}
            height={1200}
            className="w-full h-auto"
          />
        </div>
      </Tilt>
    </motion.div>
  );
}

function MiniFigure({ title, image }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="rounded-[2rem] border border-white/10 bg-[#0B0E12] overflow-hidden"
    >
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
    </motion.div>
  );
}

function IntervalExplainer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="bg-[#0D1014] border border-white/10 rounded-[2rem] p-10"
    >

      <h3 className="text-4xl font-black uppercase mb-10">
        Confidence vs Prediction Interval
      </h3>

      <div className="space-y-10">

        <div>
          <div className="flex justify-between mb-3">
            <span>Confidence Interval</span>
            <span>11.3–20.9%</span>
          </div>

          <div className="h-4 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "28%" }}
              transition={{ duration: 1.5 }}
              className="h-full bg-[#8BAD65]"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-3">
            <span>Prediction Interval</span>
            <span>3.8–45.9%</span>
          </div>

          <div className="h-4 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "72%" }}
              transition={{ duration: 1.8 }}
              className="h-full bg-[#754B27]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MethodBlock({ title, text }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-l-2 border-[#8BAD65] pl-8 py-2"
    >
      <h3 className="text-3xl font-black uppercase mb-4">
        {title}
      </h3>

      <p className="text-[#BFB5A9] text-lg leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}