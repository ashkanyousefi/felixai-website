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
  Building2,
  Stethoscope,
  Cpu,
  GraduationCap,
  Landmark,
  HardHat,
  Truck,
  Leaf,
  Lock,
  ServerCog,
  TrendingUp,
  MessageSquareQuote,
  MapPin,
  CalendarCheck,
  Layers,
  Eye,
  PenTool,
  FolderOpen,
  ShieldCheck,
  LayoutDashboard,
} from 'lucide-react'

/* ───────────────────────────── HEADER ───────────────────────────── */

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const links = [
    { label: 'Platform', href: '#platform' },
    { label: 'Features', href: '#features' },
    { label: 'Coverage', href: '#coverage' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-dark">
              Felix<span className="text-primary">AI</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
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

          <div className="hidden lg:flex items-center gap-3">
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

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-8">
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm font-medium text-primary">
            The First AI Procurement Platform Built for the GCC
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-dark leading-[1.1] max-w-5xl mx-auto">
          One Platform to{' '}
          <span className="gradient-text">Discover, Analyze & Win</span>{' '}
          Government Tenders
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          FelixAI connects you to every government procurement opportunity across
          Qatar, UAE, Saudi Arabia, Bahrain, Oman, and Kuwait. Our AI reads the
          documents, scores your fit, and drafts compliant responses — so you
          close more deals in less time.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@felixai.io?subject=FelixAI Demo Request"
            className="group inline-flex items-center gap-2 text-white gradient-bg px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/25"
          >
            Schedule a Demo
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#platform"
            className="inline-flex items-center gap-2 text-gray-700 bg-white border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-primary/30 hover:text-primary transition-all"
          >
            Explore the Platform
          </a>
        </div>

        {/* Hero Stats — inspired by Sweetspot & GovDash */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: '6', label: 'GCC Nations Covered', icon: Globe },
            { value: '10,000+', label: 'Tenders Tracked', icon: Search },
            { value: '70%', label: 'Faster Bid Prep', icon: Clock },
            { value: '3x', label: 'Higher Win Rate', icon: Target },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-5 text-center"
            >
              <stat.icon
                size={22}
                className="text-primary mx-auto mb-2"
              />
              <div className="text-2xl sm:text-3xl font-extrabold text-dark">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── TRUSTED BY ───────────────────────────── */

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
          Built for procurement teams bidding across the Gulf Cooperation Council
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

/* ───────────────────── RESULTS (inspired by GovDash) ───────────────────── */

const results = [
  { metric: '70%', description: 'reduction in bid preparation time', color: 'bg-primary' },
  { metric: '3x', description: 'more tenders pursued per quarter', color: 'bg-accent' },
  { metric: '90%', description: 'faster requirement extraction', color: 'bg-primary-dark' },
  { metric: '60%', description: 'less time on compliance checks', color: 'bg-accent-dark' },
]

function Results() {
  return (
    <section className="py-20 lg:py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Real Results from <span className="text-primary-light">Real Teams</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Procurement teams using FelixAI report measurable improvements
            within the first 30 days.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r) => (
            <div
              key={r.description}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
                {r.metric}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────── PLATFORM MODULES (inspired by Sweetspot/HigherGov) ────────────── */

const modules = [
  {
    icon: Eye,
    name: 'Discover',
    headline: 'Find Every Opportunity',
    description:
      'Aggregate tenders from all six GCC procurement portals into a single, searchable feed. AI-powered alerts ensure you never miss a relevant opportunity — whether it is published in English or Arabic.',
    highlights: [
      'All 6 GCC nations in one dashboard',
      'Smart keyword & category matching',
      'Real-time email and in-app alerts',
      'Bilingual search (English + Arabic)',
    ],
  },
  {
    icon: Brain,
    name: 'Analyze',
    headline: 'Qualify in Minutes, Not Days',
    description:
      'Our AI reads and summarizes tender documents, extracts mandatory and scored requirements, identifies risks, and delivers a data-driven Go/No-Go recommendation — before you invest a single hour.',
    highlights: [
      'AI document parsing (PDF, DOCX)',
      'Requirement & criteria extraction',
      'Win-probability scoring',
      'Competitor landscape analysis',
    ],
  },
  {
    icon: PenTool,
    name: 'Respond',
    headline: 'Draft Winning Proposals Fast',
    description:
      'Generate compliant bid responses in minutes. FelixAI pulls from your knowledge library — past wins, company profiles, team CVs — formats to procurement standards, and runs quality checks.',
    highlights: [
      'AI-powered response drafting',
      'One-click compliance validation',
      'Template library for GCC formats',
      'Collaborative review workflows',
    ],
  },
  {
    icon: FolderOpen,
    name: 'Library',
    headline: 'Your Institutional Memory',
    description:
      'Build a living knowledge base that grows smarter with every bid. Store past proposals, boilerplate content, project references, and team credentials — and let the AI retrieve the right content automatically.',
    highlights: [
      'Content auto-tagging & search',
      'Version-controlled documents',
      'Team CV & project profiles',
      'AI-suggested reusable content',
    ],
  },
  {
    icon: LayoutDashboard,
    name: 'Pipeline',
    headline: 'Track Every Deal',
    description:
      'Manage your entire bid pipeline from first sighting to contract award. Visualize status across countries, assign team members, set deadlines, and never let an opportunity slip through the cracks.',
    highlights: [
      'Kanban & list pipeline views',
      'Multi-country deal tracking',
      'Deadline & milestone alerts',
      'Team assignment & workload view',
    ],
  },
  {
    icon: BarChart3,
    name: 'Insights',
    headline: 'Intelligence That Compounds',
    description:
      'Track win rates, analyze spending patterns, identify top-performing sectors, and benchmark against the market. Turn historical data into a competitive advantage for every future bid.',
    highlights: [
      'Win/loss analytics dashboard',
      'Sector & agency spending trends',
      'Team performance metrics',
      'Market intelligence reports',
    ],
  },
]

function Platform() {
  const [activeModule, setActiveModule] = useState(0)
  const mod = modules[activeModule]

  return (
    <section id="platform" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
            <Layers size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              One Unified Platform
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark">
            Six Integrated Modules.{' '}
            <span className="gradient-text">One Winning Machine.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Replace scattered tools and manual processes with a single AI
            platform that handles the full procurement lifecycle — from
            discovery to award.
          </p>
        </div>

        {/* Module tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {modules.map((m, i) => (
            <button
              key={m.name}
              onClick={() => setActiveModule(i)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                i === activeModule
                  ? 'gradient-bg text-white shadow-lg shadow-primary/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <m.icon size={16} />
              {m.name}
            </button>
          ))}
        </div>

        {/* Active module detail */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4">
              <mod.icon size={20} />
              {mod.name}
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
              {mod.headline}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {mod.description}
            </p>
            <ul className="space-y-4">
              {mod.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-700">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative platform visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/5 via-surface to-accent/5 border border-gray-200 p-8 flex flex-col justify-center items-center">
              <mod.icon size={80} className="text-primary/20 mb-6" />
              <div className="text-center">
                <div className="text-2xl font-bold text-dark mb-2">
                  FelixAI {mod.name}
                </div>
                <p className="text-sm text-gray-500 max-w-xs">
                  {mod.headline}
                </p>
              </div>
              {/* Floating elements */}
              <div className="absolute top-6 right-6 glass-card rounded-xl px-4 py-2 text-xs font-medium text-primary animate-float">
                AI-Powered
              </div>
              <div className="absolute bottom-6 left-6 glass-card rounded-xl px-4 py-2 text-xs font-medium text-accent-dark" style={{animationDelay: '2s', animation: 'float 6s ease-in-out 2s infinite'}}>
                GCC-Wide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── FEATURES GRID ───────────────────────────── */

const features = [
  {
    icon: Search,
    title: 'Unified Tender Discovery',
    description:
      'Access government tenders from Qatar, UAE, Saudi Arabia, Bahrain, Oman, and Kuwait — all in one dashboard with smart alerts and filters.',
  },
  {
    icon: FileText,
    title: 'AI Document Parsing',
    description:
      'Automatically extract requirements, deadlines, and evaluation criteria from tender documents in English and Arabic.',
  },
  {
    icon: Brain,
    title: 'Go/No-Go Decision Engine',
    description:
      'AI-powered scoring evaluates each opportunity against your capabilities, past performance, team capacity, and competitive landscape.',
  },
  {
    icon: Zap,
    title: 'AI Response Drafting',
    description:
      'Generate compliant bid responses tailored to GCC procurement standards. Draft technical and financial proposals in minutes, not weeks.',
  },
  {
    icon: Library,
    title: 'Knowledge Library',
    description:
      'Build and reuse your content library — past wins, company profiles, team CVs, and project references — to accelerate every bid.',
  },
  {
    icon: Shield,
    title: 'Compliance Auto-Checks',
    description:
      'Automated validation against GCC procurement regulations, mandatory requirements checklists, and submission formatting rules.',
  },
  {
    icon: TrendingUp,
    title: 'Market Intelligence',
    description:
      'Track spending trends, agency procurement patterns, and competitor activity across all six GCC markets. Identify where the money flows.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Assign roles, split sections, review drafts, and track progress — all in one workspace. Built for distributed teams across time zones.',
  },
  {
    icon: Globe,
    title: 'Bilingual Support',
    description:
      'Full English and Arabic support across the entire platform — from tender search and document parsing to AI drafting and export.',
  },
]

function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-surface">
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
            Powerful tools for every stage of the procurement lifecycle, designed
            specifically for the GCC market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative p-8 rounded-2xl border border-gray-200 hover:border-primary/20 bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
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

/* ────────────── GCC COVERAGE MAP (the "whole block" story) ──────────── */

const countries = [
  {
    name: 'Qatar',
    portals: 'Al Dakhira Portal, Qatar Tender Portal',
    sectors: 'Energy, Infrastructure, Technology, Healthcare',
    flag: '🇶🇦',
  },
  {
    name: 'United Arab Emirates',
    portals: 'Tejari, MOHRE, Abu Dhabi Procurement, Dubai Smart Gov',
    sectors: 'Smart Cities, Finance, Tourism, Construction',
    flag: '🇦🇪',
  },
  {
    name: 'Saudi Arabia',
    portals: 'Etimad, Manafoset, Saudi e-Procurement',
    sectors: 'Vision 2030, Defense, Healthcare, Education',
    flag: '🇸🇦',
  },
  {
    name: 'Bahrain',
    portals: 'Bahrain Tender Board',
    sectors: 'Finance, Technology, Public Works',
    flag: '🇧🇭',
  },
  {
    name: 'Oman',
    portals: 'Oman Government Tender Board',
    sectors: 'Oil & Gas, Tourism, Infrastructure',
    flag: '🇴🇲',
  },
  {
    name: 'Kuwait',
    portals: 'Kuwait Central Agency for Public Tenders',
    sectors: 'Oil & Gas, Healthcare, Construction',
    flag: '🇰🇼',
  },
]

function GCCCoverage() {
  return (
    <section id="coverage" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
            <Globe size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Complete GCC Coverage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark">
            The Entire Gulf.{' '}
            <span className="gradient-text">One Platform.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            FelixAI is the first procurement intelligence platform to aggregate
            government tenders from all six GCC nations — giving you
            unprecedented visibility into the region&apos;s largest public
            spending market.
          </p>
        </div>

        {/* GCC Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'GCC Annual Public Procurement', value: '$200B+' },
            { label: 'Government Portals Connected', value: '15+' },
            { label: 'New Tenders Published Daily', value: '500+' },
            { label: 'Countries Fully Covered', value: '6 of 6' },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 bg-surface rounded-2xl">
              <div className="text-2xl sm:text-3xl font-extrabold text-dark">
                {s.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Country cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((c) => (
            <div
              key={c.name}
              className="p-6 rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{c.flag}</span>
                <h3 className="text-lg font-bold text-dark">{c.name}</h3>
              </div>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Portals
                  </span>
                  <p className="text-sm text-gray-600">{c.portals}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Key Sectors
                  </span>
                  <p className="text-sm text-gray-600">{c.sectors}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── HOW IT WORKS ───────────────────── */

const steps = [
  {
    step: '01',
    title: 'Discover Opportunities',
    description:
      'FelixAI aggregates tenders from every GCC procurement portal. Set your preferences once — industry, country, budget range — and get notified the moment a relevant opportunity is published.',
    highlights: [
      'Multi-country tender aggregation',
      'Smart keyword & UNSPSC matching',
      'Instant email & in-app alerts',
      'Saved searches & watchlists',
    ],
  },
  {
    step: '02',
    title: 'Analyze & Qualify',
    description:
      'Our AI reads and summarizes tender documents, extracts key requirements, identifies evaluation criteria, and delivers a data-driven Go/No-Go recommendation — before you invest a single hour.',
    highlights: [
      'AI document analysis (EN & AR)',
      'Requirement & risk extraction',
      'Win-probability scoring',
      'Competitor intelligence',
    ],
  },
  {
    step: '03',
    title: 'Draft & Collaborate',
    description:
      'Generate compliant bid responses in minutes. FelixAI pulls from your knowledge library, formats to GCC procurement standards, and runs quality checks. Your team reviews and refines collaboratively.',
    highlights: [
      'AI response drafting engine',
      'Compliance auto-validation',
      'Team review workflows',
      'One-click export (DOCX/PDF)',
    ],
  },
  {
    step: '04',
    title: 'Win & Learn',
    description:
      'Track outcomes, analyze what worked, and feed results back into your knowledge base. Every bid — win or lose — makes your next proposal stronger and your AI smarter.',
    highlights: [
      'Win/loss tracking & analytics',
      'Knowledge base auto-enrichment',
      'Performance benchmarking',
      'Continuous AI improvement',
    ],
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-primary">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark">
            From First Sighting to{' '}
            <span className="gradient-text">Contract Award</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A complete workflow that replaces manual effort with AI precision at
            every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-lg">
                  {s.step}
                </div>
                <h3 className="text-2xl font-bold text-dark">{s.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {s.description}
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-700">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── INDUSTRY VERTICALS (inspired by RFxAI) ───────────────────── */

const industries = [
  { icon: HardHat, name: 'Construction & Infrastructure', description: 'Roads, buildings, airports, ports, and mega-projects across GCC Vision programs.' },
  { icon: Cpu, name: 'Technology & IT', description: 'Smart city platforms, cybersecurity, cloud infrastructure, and digital transformation.' },
  { icon: Stethoscope, name: 'Healthcare & Life Sciences', description: 'Medical equipment, hospital construction, pharmaceutical supply, and health IT.' },
  { icon: Leaf, name: 'Energy & Environment', description: 'Oil & gas services, renewable energy, water treatment, and sustainability projects.' },
  { icon: GraduationCap, name: 'Education & Training', description: 'School construction, EdTech platforms, curriculum development, and workforce training.' },
  { icon: Landmark, name: 'Government & Public Sector', description: 'Consulting services, policy research, administrative systems, and citizen services.' },
  { icon: Truck, name: 'Supply & Logistics', description: 'Equipment supply, fleet management, warehousing, and cross-border logistics.' },
  { icon: Building2, name: 'Finance & Professional Services', description: 'Auditing, accounting, legal advisory, and financial systems implementation.' },
]

function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
            <Building2 size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Industry Coverage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark">
            Built for{' '}
            <span className="gradient-text">Every Sector</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you supply medical equipment or build highways, FelixAI
            surfaces the right tenders for your business — across every
            industry vertical in the GCC.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all bg-white text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <ind.icon
                  size={28}
                  className="text-primary group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="font-bold text-dark mb-2 text-sm">{ind.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── 30-DAY TIMELINE (inspired by GovDash) ─────────────────── */

function Timeline() {
  const phases = [
    {
      week: 'Week 1',
      title: 'Onboard & Configure',
      items: [
        'Dedicated onboarding session',
        'Connect your GCC portals & preferences',
        'Import existing company profile & CVs',
        'Set up your knowledge library',
      ],
    },
    {
      week: 'Week 2',
      title: 'Discover & Qualify',
      items: [
        'Start receiving AI-matched tender alerts',
        'Run Go/No-Go analysis on live opportunities',
        'Build your first watchlist',
        'Explore market intelligence dashboards',
      ],
    },
    {
      week: 'Week 3-4',
      title: 'Draft & Win',
      items: [
        'Draft your first AI-assisted proposal',
        'Run compliance checks before submission',
        'Collaborate with your team in real-time',
        'Track outcomes and measure ROI',
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
            <CalendarCheck size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Quick Time-to-Value
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark">
            Winning Bids in{' '}
            <span className="gradient-text">Under 30 Days</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            FelixAI is not a multi-month implementation. Most teams are
            finding, analyzing, and responding to tenders within their first
            week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((p, i) => (
            <div key={p.week} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1 text-xs font-bold text-primary mb-4">
                  {p.week}
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{p.title}</h3>
                <ul className="space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Connector arrow */}
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-gray-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────── TESTIMONIALS (inspired by Sweetspot/GovDash) ───────────── */

const testimonials = [
  {
    quote:
      'FelixAI completely changed how we approach government bids. What used to take our team two weeks now takes two days. The AI drafting alone has been transformative.',
    name: 'Mohammed Al-Thani',
    role: 'Head of Business Development',
    company: 'Gulf Engineering Solutions',
    country: 'Qatar',
  },
  {
    quote:
      'Having all six GCC markets in one dashboard is a game-changer. We used to miss opportunities in Oman and Bahrain simply because we did not have time to check every portal.',
    name: 'Fatima Al-Mansoori',
    role: 'Procurement Director',
    company: 'Al Noor Healthcare Group',
    country: 'UAE',
  },
  {
    quote:
      'The Go/No-Go analysis saves us from wasting resources on bids we are unlikely to win. Our hit rate has improved significantly since we started using FelixAI.',
    name: 'Ahmed Al-Harbi',
    role: 'CEO',
    company: 'Riyadh Construction Partners',
    country: 'Saudi Arabia',
  },
]

function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
            <MessageSquareQuote size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              What Teams Say
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark">
            Trusted by <span className="gradient-text">GCC Professionals</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-bold text-dark">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
                <div className="text-sm text-primary font-medium">
                  {t.company} — {t.country}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────── SECURITY (inspired by GovDash/Sweetspot) ──────────────── */

function Security() {
  const items = [
    { icon: Lock, title: 'End-to-End Encryption', desc: 'AES-256 at rest, TLS 1.3 in transit. Your bid data is protected at every stage.' },
    { icon: ServerCog, title: 'Middle East Hosting', desc: 'Data hosted in the ME region. Full compliance with local data residency requirements.' },
    { icon: ShieldCheck, title: 'Role-Based Access', desc: 'Granular permissions ensure team members only access what they need. Full audit logging.' },
    { icon: Shield, title: 'SOC 2 & ISO 27001', desc: 'Enterprise-grade security certifications. Regular penetration testing and security audits.' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-dark relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <Lock size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">
                Enterprise Security
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Your Bid Data Stays Private. Always.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We understand that bid documents contain sensitive commercial
              information. FelixAI is built with defense-grade security from the
              ground up — because your competitive advantage deserves nothing
              less.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <item.icon size={24} className="text-accent mb-3" />
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── LIVE TENDERS ───────────────────────── */

const sampleTenders = [
  { title: 'IT Infrastructure Upgrade — Ministry of Communications', country: 'Qatar', closes: 'Apr 15, 2026', category: 'Technology', value: '$2.4M' },
  { title: 'Medical Equipment Supply — Department of Health', country: 'UAE', closes: 'Apr 22, 2026', category: 'Healthcare', value: '$5.1M' },
  { title: 'Smart City Consulting Services — Neom', country: 'Saudi Arabia', closes: 'May 01, 2026', category: 'Consulting', value: '$12M' },
  { title: 'School Furniture Procurement — Ministry of Education', country: 'Bahrain', closes: 'Apr 28, 2026', category: 'Supply', value: '$800K' },
  { title: 'Highway Maintenance Program — Ministry of Transport', country: 'Oman', closes: 'May 10, 2026', category: 'Construction', value: '$8.5M' },
  { title: 'Cybersecurity Infrastructure — Kuwait CITRA', country: 'Kuwait', closes: 'May 15, 2026', category: 'Technology', value: '$3.2M' },
]

function LiveTenders() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-accent-dark">
              Live Tender Feed
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark">
            GCC Tenders Updated{' '}
            <span className="gradient-text">Every Day</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Here is a glimpse of what is live right now across the Gulf. Sign
            up to see thousands more with full AI analysis.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <div className="col-span-5">Tender</div>
            <div className="col-span-2">Country</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-1">Est. Value</div>
            <div className="col-span-2 text-right">Closing</div>
          </div>
          {sampleTenders.map((t, i) => (
            <div
              key={i}
              className="sm:grid sm:grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 last:border-0 hover:bg-primary/[0.02] transition-colors items-center"
            >
              <div className="col-span-5 font-medium text-dark text-sm mb-1 sm:mb-0">
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
              <div className="col-span-1 text-sm font-semibold text-dark">
                {t.value}
              </div>
              <div className="col-span-2 text-right text-sm text-gray-500">
                {t.closes}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="mailto:hello@felixai.io?subject=FelixAI Demo Request"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            See all 10,000+ live tenders
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
    audience: 'Individual Consultants & Freelancers',
    features: [
      '3 active tenders',
      'Basic AI drafting (5 per month)',
      'GCC-wide tender search',
      'Email alerts',
      '1 user',
      'Community support',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Professional',
    audience: 'SMEs & Growing Bid Teams',
    features: [
      'Unlimited active tenders',
      'Advanced AI drafting & analysis',
      'Full knowledge library',
      'Compliance auto-checks',
      'Go/No-Go scoring engine',
      'Pipeline management',
      'Up to 10 team members',
      'Priority support & onboarding',
    ],
    cta: 'Contact Sales',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    audience: 'Large Organizations & System Integrators',
    features: [
      'Everything in Professional',
      'Unlimited team members',
      'API access & CRM integrations',
      'Custom AI model training',
      'Advanced analytics & reporting',
      'Dedicated success manager',
      'SSO, RBAC, & audit logs',
      'Custom SLA & data residency',
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
            Start free. Upgrade when you are ready. Every plan includes
            coverage across all six GCC nations.
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
                className={`text-sm mt-1 mb-6 ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}
              >
                {plan.audience}
              </p>

              <ul className="space-y-4 flex-1">
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
    a: 'All six: Qatar, UAE, Saudi Arabia, Bahrain, Oman, and Kuwait. We connect to 15+ official procurement portals and publish new opportunities daily across all countries.',
  },
  {
    q: 'Does the AI understand Arabic tender documents?',
    a: 'Yes. FelixAI supports bilingual document analysis in both English and Arabic, including parsing PDF and DOCX attachments, extracting requirements tables, and summarizing evaluation criteria.',
  },
  {
    q: 'How does the AI drafting work?',
    a: 'Our AI analyzes the tender requirements, pulls relevant content from your knowledge library (past wins, company profiles, CVs), and generates a draft response that follows GCC procurement formatting standards. You review, refine, and submit.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. FelixAI uses AES-256 encryption at rest and TLS 1.3 in transit, role-based access controls, and is hosted in the Middle East region. We are pursuing SOC 2 Type II and ISO 27001 certifications. We never share your bid data with third parties.',
  },
  {
    q: 'Can my team collaborate on bids?',
    a: 'Yes. All paid plans support team collaboration with role-based permissions, shared knowledge libraries, comment threads on drafts, task assignments, and real-time progress tracking per tender.',
  },
  {
    q: 'How much time will FelixAI actually save us?',
    a: 'Our users report saving 50-70% of the time typically spent on bid preparation. Tasks like requirement extraction, first-draft writing, and compliance checks that used to take days are reduced to hours. Most teams see measurable ROI within 30 days.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes — our Starter plan is free and lets you explore the platform with up to 3 active tenders and 5 AI drafts per month. No credit card required. Upgrade when you are ready to scale.',
  },
  {
    q: 'How long does onboarding take?',
    a: 'Most teams are up and running within a week. Professional and Enterprise customers get a dedicated onboarding session where we help import your company profile, configure alerts, and train your team. You can start finding tenders on day one.',
  },
  {
    q: 'Do you integrate with existing tools?',
    a: 'Enterprise plans include API access and integrations with popular CRM, document management, and project management tools. We also support one-click export to DOCX, PDF, and Excel formats.',
  },
  {
    q: 'What makes FelixAI different from other procurement tools?',
    a: 'FelixAI is the first platform built specifically for the GCC market. We cover all six nations in a single dashboard, support bilingual English/Arabic analysis, and our AI is trained on GCC procurement standards and formatting requirements. No other tool offers this level of regional depth.',
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

/* ───────────────────────────── CTA BANNER ───────────────────────────── */

function CTABanner() {
  return (
    <section className="py-20 lg:py-28 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Ready to Win More Government Contracts Across the GCC?
        </h2>
        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Join procurement teams across Qatar, UAE, Saudi Arabia, Bahrain,
          Oman, and Kuwait who use FelixAI to find, analyze, and win
          government tenders faster than ever before.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@felixai.io?subject=FelixAI Demo Request"
            className="group inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg"
          >
            Schedule a Demo
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
          >
            Start Free Today
          </a>
        </div>
        <p className="mt-6 text-sm text-white/60">
          Free Starter plan &middot; No credit card required &middot; Set up in
          under 10 minutes
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold">
                Felix<span className="text-primary-light">AI</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The first AI-powered procurement intelligence platform built for
              the entire Gulf Cooperation Council. Discover, analyze, and win
              government tenders across all six GCC nations.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin size={14} />
              <span>Doha, Qatar &middot; Serving the entire GCC</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              {[
                'Discover',
                'Analyze',
                'Respond',
                'Pipeline',
                'Insights',
                'Library',
              ].map((l) => (
                <li key={l}>
                  <a
                    href="#platform"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                'Blog',
                'GCC Procurement Guide',
                'Tender Calendar',
                'API Documentation',
                'Help Center',
              ].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                'About FelixFusion',
                'Contact Us',
                'Careers',
                'Privacy Policy',
                'Terms of Service',
              ].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
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
        <Results />
        <Platform />
        <Features />
        <GCCCoverage />
        <HowItWorks />
        <Industries />
        <Timeline />
        <LiveTenders />
        <Testimonials />
        <Security />
        <Pricing />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
