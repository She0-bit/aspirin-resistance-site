export default function AspirinResistanceCompanionPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#3a2a1d] font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-14 border-b border-[#d7dfd0] pb-10">
          <p className="uppercase tracking-[0.3em] text-sm text-[#8BAD65] mb-4 font-medium">
            Supplemental Material & Extended Analyses
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-semibold leading-[1.05] max-w-4xl mb-5">
                Aspirin Resistance in Ischemic Stroke
              </h1>

              <p className="text-xl text-[#6d5a47] max-w-3xl leading-relaxed">
                Systematic review and meta-analysis evaluating assay-dependent
                variability in laboratory-defined aspirin resistance among
                ischemic stroke and TIA patients.
              </p>
            </div>

            <div className="bg-white border border-[#dce5d1] rounded-3xl p-5 shadow-sm min-w-[280px]">
              <p className="text-sm uppercase tracking-widest text-[#8BAD65] mb-3">
                Corresponding Author
              </p>
              <p className="font-medium">Sheikah Alotaibi</p>
              <p className="text-[#6d5a47] text-sm mt-1">
                shekeh.adel.b@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-7 text-sm text-[#7b6855] leading-relaxed">
            Alotaibi SA · Almarhabi MO · Khan A · Alamri AA · Alsharif GH ·
            Albaqami AA · Balbaid RJ · Alzubaidi ST · AlQurashi RM · Mouminah AS
          </div>
        </div>

        <section className="mb-14">
          <div className="bg-gradient-to-r from-[#8BAD65] to-[#754B27] text-white rounded-[2rem] p-10 shadow-lg">
            <p className="uppercase tracking-[0.3em] text-xs text-white/70 mb-4">
              Central Thesis
            </p>

            <h2 className="text-3xl md:text-4xl leading-tight font-medium max-w-5xl">
              Reported aspirin resistance prevalence varies substantially across
              platelet-function assays, suggesting that current AR estimates may
              reflect assay-dependent classification rather than a single,
              biologically unified phenotype.
            </h2>
          </div>
        </section>

        <section className="grid md:grid-cols-4 gap-5 mb-16">
          <div className="bg-[#edf5e4] border border-[#cfe0bb] rounded-3xl p-7 shadow-sm">
            <p className="uppercase text-xs tracking-[0.25em] text-[#6f8f4d] mb-4">
              Pooled Prevalence
            </p>
            <h3 className="text-5xl font-semibold text-[#6f8f4d] mb-4">15.6%</h3>
            <p className="text-sm text-[#5f533f] leading-relaxed">
              95% CI 11.3–20.9% <br />
              k = 17 studies · n = 2,255
            </p>
          </div>

          <div className="bg-[#f6efe7] border border-[#e5d2bf] rounded-3xl p-7 shadow-sm">
            <p className="uppercase text-xs tracking-[0.25em] text-[#754B27] mb-4">
              Prediction Interval
            </p>
            <h3 className="text-5xl font-semibold text-[#754B27] mb-4">3.8–45.9%</h3>
            <p className="text-sm text-[#5f533f] leading-relaxed">
              Expected prevalence range in future stroke/TIA populations
            </p>
          </div>

          <div className="bg-[#eef2e7] border border-[#d7e0cd] rounded-3xl p-7 shadow-sm">
            <p className="uppercase text-xs tracking-[0.25em] text-[#6f8f4d] mb-4">
              Heterogeneity
            </p>
            <h3 className="text-5xl font-semibold text-[#6f8f4d] mb-4">88.3%</h3>
            <p className="text-sm text-[#5f533f] leading-relaxed">
              Substantial between-study variability driven largely by assay type
            </p>
          </div>

          <div className="bg-[#f5ece8] border border-[#e3c7b9] rounded-3xl p-7 shadow-sm">
            <p className="uppercase text-xs tracking-[0.25em] text-[#754B27] mb-4">
              Assay Gradient
            </p>
            <h3 className="text-5xl font-semibold text-[#754B27] mb-4">4.4×</h3>
            <p className="text-sm text-[#5f533f] leading-relaxed">
              Approximate prevalence variation across assay platforms
            </p>
          </div>
        </section>

        <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mb-16">
          <div className="bg-white border border-[#dde5d3] rounded-[2rem] p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="uppercase tracking-[0.25em] text-xs text-[#8BAD65] mb-3">
                  Key Finding
                </p>
                <h2 className="text-3xl font-semibold">
                  Assay-Dependent Prevalence Gradient
                </h2>
              </div>

              <div className="text-right">
                <p className="text-sm text-[#7b6855]">Approximate variation</p>
                <p className="text-3xl font-semibold text-[#754B27]">4.4×</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between bg-[#edf5e4] rounded-2xl p-5">
                <div>
                  <h3 className="text-xl font-medium text-[#6f8f4d]">
                    AA-Specific Aggregometry
                  </h3>
                  <p className="text-sm text-[#5f533f] mt-1">
                    Most COX-1-specific and consistent estimates
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-4xl font-semibold text-[#6f8f4d]">7.3%</p>
                  <p className="text-sm text-[#5f533f]">I² = 0%</p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#fff5ea] rounded-2xl p-5">
                <div>
                  <h3 className="text-xl font-medium text-[#c77a1d]">
                    VerifyNow ARU
                  </h3>
                  <p className="text-sm text-[#5f533f] mt-1">
                    Greater variability across studies
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-4xl font-semibold text-[#c77a1d]">18.0%</p>
                  <p className="text-sm text-[#5f533f]">I² = 83.9%</p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#f9efea] rounded-2xl p-5">
                <div>
                  <h3 className="text-xl font-medium text-[#b54d31]">
                    PFA-200 (COL/EPI)
                  </h3>
                  <p className="text-sm text-[#5f533f] mt-1">
                    Highest observed prevalence estimate
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-4xl font-semibold text-[#b54d31]">32.0%</p>
                  <p className="text-sm text-[#5f533f]">Single study</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#754B27] text-white rounded-[2rem] p-8 shadow-lg">
            <p className="uppercase tracking-[0.25em] text-xs text-[#e7d4c3] mb-4">
              Conceptual Implications
            </p>

            <div className="space-y-6 text-lg leading-relaxed text-[#f7efe9]">
              <p>
                Different platelet-function assays may interrogate distinct
                biological pathways and platelet phenotypes.
              </p>

              <p>
                Reported AR prevalence may partly reflect assay construction
                rather than a stable biological entity.
              </p>

              <p>
                Without assay standardisation, pooled AR estimates may lack
                direct biological comparability and limited clinical
                interpretability.
              </p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-[#dde5d3] rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Methods</h3>

            <ul className="space-y-4 text-[#5f533f] leading-relaxed">
              <li>• PRISMA 2020 systematic review</li>
              <li>• Five-database literature search</li>
              <li>• Random-effects meta-analysis</li>
              <li>• Logit-transformed proportions</li>
              <li>• DerSimonian-Laird τ² estimator</li>
              <li>• Assay-specific subgroup analysis</li>
              <li>• Leave-one-out sensitivity analysis</li>
              <li>• Egger’s + Lin & Chu publication bias testing</li>
            </ul>
          </div>

          <div className="bg-white border border-[#dde5d3] rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">
              Robustness & Bias Assessment
            </h3>

            <div className="space-y-6 text-[#5f533f] leading-relaxed">
              <div>
                <p className="font-semibold text-[#3a2a1d] mb-2">
                  Leave-One-Out Stability
                </p>
                <p>
                  Pooled prevalence estimates remained stable across sequential
                  study exclusion analyses (14.7%–16.6%).
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#3a2a1d] mb-2">
                  Publication Bias
                </p>
                <p>Egger’s test: p = 0.21</p>
                <p>Lin & Chu test: p = 0.31</p>
              </div>

              <div>
                <p className="font-semibold text-[#3a2a1d] mb-2">
                  Interpretation
                </p>
                <p>
                  No major small-study effects were identified, though
                  interpretation remains limited by substantial heterogeneity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#8BAD65] to-[#6f8f4d] text-white rounded-[2rem] p-10 mb-16 shadow-lg">
          <p className="uppercase tracking-[0.25em] text-xs text-white/70 mb-4">
            Take-Home Message
          </p>

          <h2 className="text-3xl leading-relaxed max-w-5xl font-medium">
            Aspirin resistance prevalence in ischemic stroke is strongly
            assay-dependent. Before AR can reliably guide treatment escalation,
            prognostication, or guideline development, assay standardisation and
            construct validation are essential.
          </h2>
        </section>

        <section className="border-t border-[#d7dfd0] pt-8">
          <h3 className="text-xl font-semibold mb-5">Selected References</h3>

          <div className="text-sm text-[#6d5a47] leading-8">
            (1) GBD 2019 Stroke Collaborators. <i>Lancet Neurol.</i> 2021;20(10):795–820. <br />
            (2) Antithrombotic Trialists' Collaboration. <i>BMJ.</i> 2002;324(7329):71–86. <br />
            (3) Patrono C, Rocca B. <i>Arterioscler Thromb Vasc Biol.</i> 2008;28(3):s25–32. <br />
            (4) Lordkipanidzé M, et al. <i>Eur Heart J.</i> 2007;28(14):1702–1708. <br />
            (5) Krasopoulos G, et al. <i>BMJ.</i> 2008;336(7637):195–198. <br />
            (6) Page MJ, et al. <i>BMJ.</i> 2021;372:n71. <br />
            (7) Higgins JPT, et al. <i>BMJ.</i> 2003;327(7414):557–560. <br />
            (8) DerSimonian R, Laird N. <i>Control Clin Trials.</i> 1986;7(3):177–188.
          </div>
        </section>

        <div className="mt-12 pt-6 border-t border-[#d7dfd0] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-sm text-[#7b6855]">
          <div>
            PRISMA 2020 · Random-effects meta-analysis · Prediction intervals · Assay-specific subgrouping
          </div>

          <div>
            © Aspirin Resistance in Ischemic Stroke Meta-analysis
          </div>
        </div>
      </div>
    </div>
  )
}
