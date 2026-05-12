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
  funnel: "/figures/fig09_funnel_egger.png",
};

export default function Home() {
  return (
    <main className="bg-[#05070A] text-[#F5F1EA] overflow-x-hidden">

      <BackgroundTexture />

      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-fit">
        <div className="backdrop-blur-2xl bg-black/40 border border-white/10 rounded-full px-4 sm:px-6 py-3 shadow-2xl">

          <div className="flex items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs uppercase tracking-[0.18em] whitespace-nowrap">

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

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-3 border border-[#8BAD65]/30 bg-[#8BAD65]/10 rounded-full px-5 py-2 mb-8 text-xs uppercase tracking-[0.2em] text-[#DCE8CF]">
              <Microscope className="w-4 h-4" />
              Systematic Review & Meta-analysis
            </div>

            <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[7rem] leading-[0.9] font-black tracking-[-0.06em] uppercase">
              Aspirin
              <br />
              Resistance
              <br />
              <span className="text-[#8BAD65]">
                Is Assay-Defined
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[#BEB4A8] max-w-2xl">
              A conceptual and statistical re-examination of
              laboratory-defined aspirin resistance in ischemic
              stroke and transient ischemic attack.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#results"
                className="group bg-[#8BAD65] text-black rounded-full px-6 py-4 font-semibold flex items-center gap-3 hover:bg-[#A7C980] transition-all"
              >
                Explore Findings

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>

              <a
                href="/manuscript.pdf"
                download
                className="rounded-full border border-white/10 px-6 py-4 hover:bg-white/5 transition"
              >
                Download Manuscript
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >

            <Tilt
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              perspective={1500}
              glareEnable
              glareMaxOpacity={0.08}
            >

              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">

                <Image
                  src={figures.subgroup}
                  alt="Subgroup figure"
                  width={1600}
                  height={1200}
                  className="w-full h-auto"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.7))]" />

                <div className="absolute bottom-0 left-0 p-8">

                  <p className="uppercase tracking-[0.25em] text-xs text-[#DDE9D1] mb-3">
                    Central Observation
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase leading-tight max-w-lg">
                    AR prevalence varies nearly fourfold across assay platforms
                  </h3>
                </div>
              </div>

            </Tilt>
          </motion.div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#8BAD65]">
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

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          <div>

            <p className="uppercase tracking-[0.25em] text-sm text-[#8BAD65] mb-5">
              Conceptual Reframing
            </p>

            <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[0.92]">
              We may not be measuring a single construct.
            </h2>
          </div>

          <div className="space-y-8">

            <ConceptCard
              icon={<Brain className="w-6 h-6" />}
              title="Construct Instability"
              text="Patients classified as aspirin-resistant by one assay may be aspirin-sensitive by another."
            />

            <ConceptCard
              icon={<Activity className="w-6 h-6" />}
              title="Pathway Specificity"
              text="AA-specific assays directly interrogate aspirin’s canonical COX-1 pathway."
            />

            <ConceptCard
              icon={<FlaskConical className="w-6 h-6" />}
              title="Translation Problem"
              text="Without assay standardization, prevalence estimates may lack biological comparability."
            />

          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section
        id="results"
        className="px-6 py-28 bg-[linear-gradient(to_bottom,#090C10,#0F1216)] border-y border-white/10"
      >

        <div className="max-w-7xl mx-auto space-y-24">

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
            description="Future studies may plausibly observe prevalence estimates ranging from negligible aspirin resistance to nearly half of patients meeting criteria."
            image={figures.prediction}
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <MiniFigure
              title="Leave-One-Out Stability"
              image={figures.loo}
            />

            <MiniFigure
              title="Publication Bias"
              image={figures.funnel}
            />

          </div>
        </div>
      </section>

      {/* METHODS */}
      <section
        id="methods"
        className="px-6 py-28"
      >

        <div className="max-w-7xl mx-auto">

          <SectionHeader
            eyebrow="Methods"
            title="Robustness & source verification"
          />

          <div className="grid lg:grid-cols-2 gap-10 mt-20">

            <MethodBlock
              title="Strict Platelet-Function Model"
              text="Restricted to stroke/TIA populations with confirmed aspirin exposure and platelet-function testing."
            />

            <MethodBlock
              title="Prediction Intervals"
              text="Prediction intervals were emphasized over pooled prevalence estimates."
            />

            <MethodBlock
              title="Source Verification"
              text="Primary studies were manually re-reviewed to verify numerators and assay eligibility."
            />

            <MethodBlock
              title="Bias Assessment"
              text="Egger’s and Lin–Chu testing demonstrated no major small-study effects."
            />

          </div>

          <div className="mt-20">

            <details className="group border border-white/10 rounded-[2rem] p-8 bg-white/[0.03]">

              <summary className="cursor-pointer text-3xl font-black uppercase">
                Methods Deep Dive
              </summary>

              <div className="mt-8 space-y-5 text-[#BEB4A8] leading-relaxed">

                <p>
                  Random-effects pooling used logit-transformed
                  proportions with DerSimonian-Laird τ² estimation.
                </p>

                <p>
                  Sensitivity analyses included leave-one-out
                  diagnostics and assay subgrouping.
                </p>

                <p>
                  Meta-regression suggested assay class explained
                  substantial between-study variance.
                </p>

              </div>

            </details>
          </div>

          <div className="mt-24">

            <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>

              <Image
                src={figures.prisma}
                alt="PRISMA"
                width={1800}
                height={1200}
                className="w-full rounded-[2rem] border border-white/10"
              />

            </Tilt>
          </div>
        </div>
      </section>

      {/* MANUSCRIPT */}
      <section
        id="manuscript"
        className="px-6 py-28 border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto">

          <SectionHeader
            eyebrow="Supplementary Material"
            title="Embedded manuscript viewer"
          />

          <div className="mt-16 grid lg:grid-cols-[0.35fr_0.65fr] gap-10">

            <div className="space-y-8">

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">

                <div className="w-14 h-14 rounded-2xl bg-[#8BAD65]/15 flex items-center justify-center mb-6 text-[#8BAD65]">
                  <FileText className="w-6 h-6" />
                </div>

                <h3 className="text-3xl font-black uppercase mb-5">
                  Full Manuscript
                </h3>

                <p className="text-[#BEB4A8] leading-relaxed mb-8">
                  Extended analyses, supplementary figures,
                  methodological rationale, and source verification details.
                </p>

                <a
                  href="/manuscript.pdf"
                  download
                  className="inline-flex items-center gap-3 bg-[#8BAD65] text-black rounded-full px-6 py-4 font-semibold hover:bg-[#A8C982] transition"
                >

                  <Download className="w-4 h-4" />
                  Download PDF

                </a>
              </div>

              <div className="border-l-2 border-[#8BAD65] pl-6 py-3 text-sm text-[#BEB5A8]">

                <p className="uppercase tracking-[0.25em] text-[#8BAD65] mb-3">
                  Citation
                </p>

                <p>
                  Alotaibi SA, et al. Aspirin resistance in ischemic stroke:
                  assay-dependent prevalence variability.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden border border-white/10">

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

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-[#8BAD65] text-sm mb-4">
            Translational Science Companion Site
          </p>

          <h3 className="text-4xl font-black uppercase mb-5">
            Aspirin Resistance in Stroke
          </h3>

          <p className="text-[#BFB4A8] max-w-2xl leading-relaxed">
            Interactive supplementary companion developed for
            scientific presentation, conceptual framing,
            and methodological transparency.
          </p>
        </div>
      </footer>

    </main>
  );
}

/* COMPONENTS */

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

      <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[0.92]">
        {title}
      </h2>
    </div>
  );
}

function MetricCard({ title, value, subtitle }: any) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
      <p className="uppercase tracking-[0.2em] text-xs text-[#AAA093] mb-5">
        {title}
      </p>

      <div className="text-5xl font-black">
        {value}
      </div>

      <p className="mt-4 text-[#9E9387]">
        {subtitle}
      </p>
    </div>
  );
}

function ConceptCard({ icon, title, text }: any) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">

      <div className="w-14 h-14 rounded-2xl bg-[#8BAD65]/15 text-[#8BAD65] flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="text-3xl font-black uppercase mb-5">
        {title}
      </h3>

      <p className="text-[#BDB3A7] leading-relaxed text-lg">
        {text}
      </p>
    </div>
  );
}

function FeatureFigure({ title, description, image }: any) {
  return (
    <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-12 items-center">

      <div>

        <h3 className="text-4xl sm:text-5xl font-black uppercase leading-[0.95] mb-8">
          {title}
        </h3>

        <p className="text-lg sm:text-xl text-[#BDB4A9] leading-relaxed">
          {description}
        </p>
      </div>

      <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>

        <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-[#0B0E12]">

          <Image
            src={image}
            alt={title}
            width={1800}
            height={1200}
            className="w-full h-auto"
          />
        </div>

      </Tilt>
    </div>
  );
}

function MiniFigure({ title, image }: any) {
  return (
    <div className="rounded-[2rem] border border-white/10 overflow-hidden">

      <div className="p-6 border-b border-white/10">
        <h3 className="text-2xl font-black uppercase">
          {title}
        </h3>
      </div>

      <Image
        src={image}
        alt={title}
        width={1600}
        height={1200}
        className="w-full h-auto"
      />
    </div>
  );
}

function MethodBlock({ title, text }: any) {
  return (
    <div className="border-l-2 border-[#8BAD65] pl-8 py-2">

      <h3 className="text-3xl font-black uppercase mb-4">
        {title}
      </h3>

      <p className="text-[#BFB5A9] text-lg leading-relaxed">
        {text}
      </p>
    </div>
  );
}