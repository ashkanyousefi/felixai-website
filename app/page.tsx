'use client'

import { useState } from 'react'
import {
  Search,
  FileText,
  Brain,
  Shield,
  Library,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  ArrowRight,
  Zap,
  Clock,
  Target,
  Globe,
  Users,
  CheckCircle2,
  Star,
  Sparkles,
} from 'lucide-react'

/* ───────────────────────────── HEADER ───────────────────────────── */

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-dark">
              Felix<span className="text-primary">AI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.felixai.io/login"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors px-4 py-2"
            >
              Sign In
            </a>
            <a
              href="#pricing"
              className="text-sm font-semibold text-white gradient-bg px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-gray-600 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="https://app.felixai.io/login"
                className="text-center text-sm font-medium text-gray-600 border border-gray-200 rounded-full py-2.5"
              >
                Sign In
              </a>
              <a
                href="#pricing"
                className="text-center text-sm font-semibold text-white gradient-bg rounded-full py-2.5"
              >
                Book a Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

/* ───────────────────────────── HERO ───────────────────────────── */

function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-8">
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm font-medium text-primary">
            AI-Powered Procurement Intelligence
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-dark leading-[1.1] max-w-5xl mx-auto">
          Win Government Tenders Across the{' '}
          <span className="gradient-text">GCC with AI</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover opportunities, draft compliant responses, and close deals
          faster. FelixAI is the all-in-one procurement intelligence platform
          built for the Gulf region.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 text-white gradient-bg px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/25"
          >
            Book a Demo
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-gray-700 bg-white border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-primary/30 hover:text-primary transition-all"
          >
            See How It Works
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { value: '10,000+', label: 'GCC Tenders Tracked', icon: Globe },
            { value: '70%', label: 'Time Saved Per Bid', icon: Clock },
            { value: '3x', label: 'Higher Win Rate', icon: Target },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-3">
                <stat.icon size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-extrabold text-dark">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── LOGOS / SOCIAL PROOF ───────────────────────────── */

function TrustedBy() {
  const orgs = [
    'Qatar Government',
    'UAE Procurement',
    'Saudi Vision 2030',
    'Bahrain Tender Board',
    'Oman Government',
    'Kuwait Central Agency',
  ]
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
          Trusted by procurement teams across the Gulf
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {orgs.map((org) => (
            <span
              key={org}
              className="text-gray-300 font-semibold text-lg whitespace-nowrap"
            >
              {org}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── FEATURES ───────────────────────────── */

const features = [
  {
    icon: Search,
    title: 'Unified Tender Discovery',
    description:
      'Access government tenders from Qatar, UAE, Saudi Arabia, Bahrain, Oman, and Kuwait — all in one dashboard with smart alerts.',
  },
  {
    icon: FileText,
    title: 'AI Document Parsing',
    description:
      'Automatically extract requirements, deadlines, and evaluation criteria from tender documents in English and Arabic.',
  },
  {
    icon: Brain,
    title: 'Go/No-Go Decision Support',
    description:
      'AI-powered evaluation scores each opportunity based on your capabilities, past performance, and competitive landscape.',
  },
  {
    icon: Zap,
    title: 'AI-Assisted Response Drafting',
    description:
      'Generate compliant bid responses tailored to GCC procurement standards. Draft technical and financial proposals in minutes.',
  },
  {
    icon: Library,
    title: 'Knowledge Library',
    description:
      'Build and reuse your content library — past wins, company profiles, team CVs, and project references — to accelerate every bid.',
  },
  {
    icon: Shield,
    title: 'Compliance & Quality Checks',
    description:
      'Automated validation against GCC procurement regulations, mandatory requirements checklists, and submission formatting rules.',
  },
]

function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-primary">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark">
            Everything You Need to{' '}
            <span className="gradient-text">Win More Bids</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From discovery to submission, FelixAI automates the entire
            procurement lifecycle so your team can focus on strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative p-8 rounded-2xl border border-gray-100 hover:border-primary/20 bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <f.icon
                  size={28}
                  className="text-primary group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── HOW IT WORKS ───────────────────────────── */

const steps = [
  {
    step: '01',
    title: 'Discover Opportunities',
    description:
      'FelixAI aggregates tenders from every GCC procurement portal. Set your preferences and get notified the moment a relevant opportunity is published.',
    highlights: [
      'Multi-country tender aggregation',
      'Smart keyword matching',
      'Instant email & in-app alerts',
    ],
  },
  {
    step: '02',
    title: 'Analyze & Decide',
    description:
      'Our AI reads and summarizes tender documents, extracts key requirements, and gives you a data-driven Go/No-Go recommendation — before you invest hours.',
    highlights: [
      'AI document analysis (EN & AR)',
      'Requirement extraction',
      'Win-probability scoring',
    ],
  },
  {
    step: '03',
    title: 'Draft & Submit',
    description:
      'Generate compliant bid responses in minutes. FelixAI pulls from your knowledge library, formats to procurement standards, and runs quality checks automatically.',
    highlights: [
      'AI response drafting',
      'Compliance auto-check',
      'One-click export',
    ],
  },
]

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-32 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-primary">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark">
            From Discovery to Submission in{' '}
            <span className="gradient-text">Three Steps</span>
          </h2>
        </div>

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="text-5xl font-extrabold text-primary/10 mb-4">
                  {s.step}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {s.description}
                </p>
                <ul className="space-y-3">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-gray-700">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── LIVE TENDERS PREVIEW ───────────────────────────── */

const sampleTenders = [
  {
    title: 'IT Infrastructure Upgrade — Ministry of Communications',
    country: 'Qatar',
    closes: 'Apr 15, 2026',
    category: 'Technology',
  },
  {
    title: 'Medical Equipment Supply — Department of Health',
    country: 'UAE',
    closes: 'Apr 22, 2026',
    category: 'Healthcare',
  },
  {
    title: 'Smart City Consulting Services — Neom',
    country: 'Saudi Arabia',
    closes: 'May 01, 2026',
    category: 'Consulting',
  },
  {
    title: 'School Furniture Procurement — Ministry of Education',
    country: 'Bahrain',
    closes: 'Apr 28, 2026',
    category: 'Supply',
  },
  {
    title: 'Highway Maintenance Program — Ministry of Transport',
    country: 'Oman',
    closes: 'May 10, 2026',
    category: 'Construction',
  },
]

function LiveTenders() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-accent-dark">
              Live Feed
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark">
            Latest GCC Government Tenders
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            New opportunities published daily across all six GCC nations.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <div className="col-span-5">Tender</div>
            <div className="col-span-2">Country</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-3 text-right">Closing Date</div>
          </div>
          {sampleTenders.map((t, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 last:border-0 hover:bg-primary/[0.02] transition-colors items-center"
            >
              <div className="col-span-5 font-medium text-dark text-sm">
                {t.title}
              </div>
              <div className="col-span-2">
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
                  <Globe size={14} className="text-primary" />
                  {t.country}
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-xs font-medium bg-primary/5 text-primary px-2.5 py-1 rounded-full">
                  {t.category}
                </span>
              </div>
              <div className="col-span-3 text-right text-sm text-gray-500">
                {t.closes}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View all tenders
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── PRICING ───────────────────────────── */

const plans = [
  {
    name: 'Starter',
    audience: 'Individual Consultants',
    features: [
      '3 active tenders',
      'Basic AI drafting',
      'GCC portal aggregation',
      'Email support',
      '1 user',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Professional',
    audience: 'Growing Businesses',
    features: [
      'Unlimited active tenders',
      'Advanced AI drafting & analysis',
      'Knowledge library',
      'Compliance auto-checks',
      'Up to 10 team members',
      'Priority support',
    ],
    cta: 'Contact Sales',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    audience: 'Large Organizations',
    features: [
      'Everything in Professional',
      'Unlimited team members',
      'API access & integrations',
      'Custom AI training',
      'Advanced analytics & reporting',
      'Dedicated success manager',
      'SSO & audit logs',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-primary">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark">
            Plans That <span className="gradient-text">Scale With You</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start free. Upgrade when you are ready. All plans include GCC-wide
            tender coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? 'bg-dark text-white shadow-2xl shadow-dark/30 scale-[1.02] border-2 border-primary'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    <Star size={12} /> Most Popular
                  </span>
                </div>
              )}
              <h3
                className={`text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-dark'}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mt-1 ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}
              >
                {plan.audience}
              </p>

              <ul className="mt-8 space-y-4 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className={`flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-accent' : 'text-primary'}`}
                    />
                    <span
                      className={`text-sm ${plan.highlighted ? 'text-gray-200' : 'text-gray-700'}`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:hello@felixai.io?subject=FelixAI Demo Request"
                className={`mt-8 block text-center py-3.5 rounded-full font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary-light'
                    : 'bg-dark text-white hover:bg-dark-light'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── FAQ ───────────────────────────── */

const faqs = [
  {
    q: 'Which GCC countries does FelixAI cover?',
    a: 'FelixAI aggregates government tenders from all six GCC nations: Qatar, UAE, Saudi Arabia, Bahrain, Oman, and Kuwait. We pull from official procurement portals and publish new opportunities daily.',
  },
  {
    q: 'Does the AI understand Arabic tender documents?',
    a: 'Yes. FelixAI supports bilingual document analysis in both English and Arabic, including parsing PDF attachments, extracting requirements tables, and summarizing evaluation criteria.',
  },
  {
    q: 'How does the AI drafting work?',
    a: 'Our AI analyzes the tender requirements, pulls relevant content from your knowledge library (past wins, company profiles, CVs), and generates a draft response that follows GCC procurement formatting standards. You review, refine, and submit.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. FelixAI uses enterprise-grade encryption at rest and in transit, role-based access controls, and is hosted in the Middle East region. We never share your bid data with third parties.',
  },
  {
    q: 'Can my team collaborate on bids?',
    a: 'Yes. All paid plans support team collaboration with role-based permissions, shared knowledge libraries, comment threads on drafts, and real-time progress tracking per tender.',
  },
  {
    q: 'How much time will FelixAI actually save us?',
    a: 'Our users report saving 50-70% of the time typically spent on bid preparation. Tasks like requirement extraction, first-draft writing, and compliance checks that used to take days are reduced to hours.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes — our Starter plan is free and lets you explore the platform with up to 3 active tenders. No credit card required. Upgrade to a paid plan when you are ready to scale.',
  },
  {
    q: 'Do you offer onboarding support?',
    a: 'Every Professional and Enterprise customer gets a dedicated onboarding session. We help you set up your knowledge library, configure alerts, and train your team on AI-assisted bid writing.',
  },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-dark pr-4">{faq.q}</span>
                {open === i ? (
                  <ChevronUp size={20} className="text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown
                    size={20}
                    className="text-gray-400 flex-shrink-0"
                  />
                )}
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── CTA ───────────────────────────── */

function CTABanner() {
  return (
    <section className="py-20 lg:py-28 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Ready to Win More Government Contracts?
        </h2>
        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Join procurement teams across the GCC who use FelixAI to find, analyze,
          and win government tenders faster than ever before.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@felixai.io?subject=FelixAI Demo Request"
            className="group inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg"
          >
            Book a Demo
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
          >
            Start Free Trial
          </a>
        </div>
        <p className="mt-6 text-sm text-white/60">
          Free plan available &middot; No credit card required &middot; Cancel
          anytime
        </p>
      </div>
    </section>
  )
}

/* ───────────────────────────── FOOTER ───────────────────────────── */

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold">
                Felix<span className="text-primary-light">AI</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered procurement intelligence for the Gulf region. Discover,
              analyze, and win government tenders with confidence.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'How It Works', 'Integrations'].map(
                (l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase().replace(/ /g, '-')}`}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {['Blog', 'Tender Calendar', 'GCC Procurement Guide', 'API Docs'].map(
                (l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {['About', 'Contact', 'Privacy Policy', 'Terms of Service'].map(
                (l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FelixFusion. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Twitter
            </a>
            <a
              href="mailto:hello@felixai.io"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              hello@felixai.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ───────────────────────────── PAGE ───────────────────────────── */

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <LiveTenders />
        <Pricing />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
