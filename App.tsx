
import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Users, 
  Cpu, 
  Menu,
  X,
  Target,
  Link2,
  TrendingUp,
  ArrowLeft,
  CheckCircle2,
  Activity,
  Layers,
  Globe,
  BarChart3
} from 'lucide-react';

// --- Types ---
type ViewType = 'home' | 'vision' | 'system' | 'portfolio' | 'team' | 'contact';

// --- Components ---

const InfinityLogo = ({ className, pulsing = false }: { className?: string; pulsing?: boolean }) => (
  <motion.svg 
    viewBox="0 0 100 60" 
    className={className}
    animate={pulsing ? { 
      scale: [1, 1.05, 1],
      filter: ["brightness(100%) saturate(1.2)", "brightness(160%) saturate(1.5)", "brightness(100%) saturate(1.2)"]
    } : {}}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#888888', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <path 
      d="M30,20 C10,20 10,40 30,40 C40,40 45,35 50,30 C55,25 60,20 70,20 C90,20 90,40 70,40 C60,40 55,35 50,30 C45,25 40,20 30,20 Z" 
      fill="none" 
      stroke="url(#logoGradient)" 
      strokeWidth="10" 
      strokeLinecap="round"
      filter="url(#glow)"
    />
  </motion.svg>
);

const TechnicalEngine = ({ className }: { className?: string }) => {
  const bStroke = "1";
  const dPattern = "4 3";
  const rotDuration = 10;

  return (
    <div className={`${className} flex justify-center items-center relative group`}>
      {/* Background Grid & Technical Markings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-white/40" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/40" />
        <div className="absolute top-0 left-0 w-px h-full bg-white/40" />
        <div className="absolute top-0 right-0 w-px h-full bg-white/40" />
        
        {/* Measurement Markings */}
        <div className="absolute top-4 left-4 font-futuristic text-[8px] uppercase tracking-widest text-white/40">Scale: 1:1.24 Protocol</div>
        <div className="absolute bottom-4 right-4 font-futuristic text-[8px] uppercase tracking-widest text-white/40">Grid_Ref: AX-902</div>
      </div>

      <svg viewBox="0 0 512 512" className="w-[85%] max-w-[520px] h-auto relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 1. CHASSIS INFRASTRUCTURE (RESTORED) */}
        <g stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} opacity="0.8">
          <path d="M150 360H362V250L415 175L350 120H162L97 175L150 250V360Z" strokeLinejoin="round" />
          <line x1="150" y1="250" x2="362" y2="250" opacity="0.3" />
          <line x1="256" y1="120" x2="256" y2="360" opacity="0.3" />
          <path d="M150 280 H200 M362 280 H312 M256 120 V195" opacity="0.6" strokeDasharray="none" />
          <line x1="162" y1="120" x2="350" y2="360" opacity="0.1" />
          <line x1="350" y1="120" x2="162" y2="360" opacity="0.1" />
        </g>

        {/* 2. BEARING HOUSINGS */}
        <g stroke="white" strokeWidth="0.5" strokeDasharray="none" opacity="0.5">
          <circle cx="200" cy="280" r="28" />
          <circle cx="256" cy="195" r="18" />
          <circle cx="312" cy="280" r="22" />
        </g>

        {/* 3. REINFORCED LOWER INTAKE BLOCK */}
        <g transform="translate(180, 360)">
          <rect width="152" height="35" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
          <line x1="38" y1="0" x2="38" y2="35" stroke="white" strokeWidth="0.5" strokeDasharray="1 2" opacity="0.4" />
        </g>

        {/* L-PULLEY UNIT (RESTORED) */}
        <g transform="translate(200, 280)">
          <motion.g animate={{ rotate: 360 }} transition={{ duration: rotDuration, repeat: Infinity, ease: "linear" }}>
            <circle cx="0" cy="0" r="24" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
            <circle cx="0" cy="0" r="4" fill="white" />
          </motion.g>
          <text y="40" x="-30" fill="white" className="font-futuristic text-[6px] opacity-40 uppercase">Outreach_Core</text>
        </g>

        {/* TOP-PULLEY UNIT (RESTORED) */}
        <g transform="translate(256, 195)">
          <motion.g animate={{ rotate: -360 }} transition={{ duration: rotDuration * 0.7, repeat: Infinity, ease: "linear" }}>
            <circle cx="0" cy="0" r="14" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
            <circle cx="0" cy="0" r="3" fill="white" />
          </motion.g>
          <text y="-20" x="-20" fill="white" className="font-futuristic text-[6px] opacity-40 uppercase">Logic_Filter</text>
        </g>

        {/* R-PULLEY UNIT (RESTORED) */}
        <g transform="translate(312, 280)">
          <motion.g animate={{ rotate: 360 }} transition={{ duration: rotDuration * 0.9, repeat: Infinity, ease: "linear" }}>
            <circle cx="0" cy="0" r="18" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
            <circle cx="0" cy="0" r="3" fill="white" />
          </motion.g>
          <text y="40" x="0" fill="white" className="font-futuristic text-[6px] opacity-40 uppercase">Conv_Link</text>
        </g>

        {/* 5. PISTON ASSEMBLIES (RESTORED COMPLEXITY) */}
        <g transform="translate(138, 145) rotate(-45)">
          <rect x="-18" y="-45" width="36" height="70" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
          <motion.g animate={{ y: [-15, 15, -15] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <rect x="-24" y="-55" width="48" height="12" stroke="white" strokeWidth={bStroke} fill="black" />
          </motion.g>
        </g>

        <g transform="translate(374, 145) rotate(45)">
          <rect x="-18" y="-45" width="36" height="70" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
          <motion.g animate={{ y: [15, -15, 15] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <rect x="-24" y="-55" width="48" height="12" stroke="white" strokeWidth={bStroke} fill="black" />
          </motion.g>
        </g>

        {/* 6. CENTRAL CORE */}
        <g transform="translate(256, 280)">
          <rect x="-22" y="-22" width="44" height="44" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
          <motion.circle r="10" fill="white" animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} />
        </g>

        {/* 7. TECHNICAL CALLOUTS (RESTORED) */}
        <g font-family="Orbitron" font-size="6" fill="white" stroke="none">
          <line x1="256" y1="280" x2="480" y2="340" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
          <circle cx="480" cy="340" r="2" fill="white" />
          <text x="485" y="343" fill="white" opacity="0.8" text-anchor="start">01. NEURAL BRIDGE</text>
          
          <line x1="200" y1="280" x2="50" y2="340" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
          <circle cx="50" cy="340" r="2" fill="white" />
          <text x="45" y="343" fill="white" opacity="0.8" text-anchor="end">02. CLIENT_SYNC</text>
        </g>
      </svg>
    </div>
  );
};

const MyoLogo = ({ className }: { className?: string }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className={className}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    <path 
      d="M50,20 L30,40 L35,45 L50,30 L65,45 L70,40 Z M50,40 L20,70 L30,80 L50,60 L70,80 L80,70 Z" 
      fill="white"
    />
    <path 
      d="M50,15 L85,50 L50,85 L15,50 Z" 
      fill="none" 
      stroke="white" 
      strokeWidth="1" 
      strokeDasharray="4 4"
      className="opacity-20"
    />
  </motion.svg>
);

// --- Constants & Data ---
const TEAM = [
  { name: 'Piyush Jadhav', role: 'Owner & Visionary', initials: 'PJ' },
  { name: 'Manas Ghate', role: 'CCO - Growth Lead', initials: 'MG' },
  { name: 'Dnyaneshwar Jadhav', role: 'CTO - Systems Architect', initials: 'DJ' },
];

// --- Sub-Components ---

const Navbar: React.FC<{ setView: (v: ViewType) => void, currentView: ViewType }> = ({ setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { if (window.scrollY > 20) setScrolled(true); else setScrolled(false); };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items: ViewType[] = ['vision', 'system', 'portfolio', 'team', 'contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || currentView !== 'home' ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl shadow-black/50' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          onClick={() => setView('home')}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center">
            <InfinityLogo className="h-10 md:h-12 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.45)]" pulsing={true} />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="font-futuristic font-black text-xl tracking-tighter uppercase hidden md:block text-white leading-none">AutomationGo</span>
            <span className="text-[8px] tracking-[0.4em] uppercase text-white/40 hidden md:block mt-1">Strategic Connector</span>
          </div>
        </motion.div>
        
        <div className="hidden md:flex gap-10 font-futuristic text-[10px] tracking-[0.3em] uppercase text-white/70">
          {items.map((item) => (
            <button 
              key={item} 
              onClick={() => setView(item)}
              className={`hover:text-white transition-colors relative group ${currentView === item ? 'text-white' : ''}`}
            >
              {item}
              <span className={`absolute -bottom-2 left-0 h-px bg-white transition-all ${currentView === item ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
          ))}
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center gap-8 md:hidden font-futuristic text-xl tracking-widest uppercase text-white"
          >
            <button className="absolute top-8 right-8" onClick={() => setIsOpen(false)}><X size={32} /></button>
            <button onClick={() => { setView('home'); setIsOpen(false); }} className="hover:text-white/50 transition-colors">Home</button>
            {items.map((item) => (
              <button key={item} onClick={() => { setView(item); setIsOpen(false); }} className="hover:text-white/50 transition-colors">{item}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const PageWrapper: React.FC<{ children: React.ReactNode, title: string, subtitle?: string, onBack: () => void }> = ({ children, title, subtitle, onBack }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 1.05 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="min-h-screen bg-black text-white py-32 md:py-48 px-6 relative overflow-hidden"
  >
    <div className="absolute top-10 left-6 z-50">
      <button onClick={onBack} className="flex items-center gap-2 font-futuristic text-[10px] tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-all group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
      </button>
    </div>
    
    <div className="container mx-auto max-w-6xl relative z-10">
      <div className="mb-20">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-8xl font-futuristic font-black uppercase tracking-tighter mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/40 font-light tracking-wide uppercase font-futuristic tracking-[0.2em]"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      {children}
    </div>
  </motion.div>
);

const VisionPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <PageWrapper title="Vision" subtitle="The Architecture of Scale" onBack={onBack}>
    <div className="space-y-40">
      {/* Serving Value Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-white/20 bg-white/5">
            <CheckCircle2 size={16} className="text-white" />
            <span className="font-futuristic text-[10px] tracking-[0.4em] uppercase">Value Protocol</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-futuristic font-bold uppercase leading-tight">Serving Value <br />To Capture Scale</h2>
          <p className="text-white/50 text-xl font-light leading-relaxed">
            We believe that profit is a byproduct of pure utility. Our connector vision isn't about mere transactions; it's about identifying gaps in high-potential businesses and bridging them with elite solutions. When we serve value, we secure longevity.
          </p>
        </div>
        
        <div className="flex flex-col gap-8 justify-center">
          <div className="p-8 border border-white/10 bg-white/[0.02]">
            <h4 className="font-futuristic text-lg mb-4 uppercase text-white/80">Collective Growth</h4>
            <p className="text-white/40 text-sm leading-relaxed">We don't grow alone. Our architecture is designed to lift every node in our network simultaneously.</p>
          </div>
          <div className="p-8 border border-white/10 bg-white/[0.02]">
            <h4 className="font-futuristic text-lg mb-4 uppercase text-white/80">Impact Over Income</h4>
            <p className="text-white/40 text-sm leading-relaxed">Focusing on the magnitude of the connection ensures the revenue follows naturally.</p>
          </div>
        </div>
      </section>

      {/* 10M Project Highlight */}
      <section className="relative">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-12">
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-white/20 bg-white/5 backdrop-blur-xl">
              <Activity size={18} className="text-white animate-pulse" />
              <span className="font-futuristic text-[11px] tracking-[0.5em] uppercase text-white/80">Primary Objective</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-futuristic font-black uppercase tracking-tighter leading-[0.85] text-white">
              THE <br />
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.9)] underline decoration-white/40 decoration-8 underline-offset-[20px]">
                10M
              </span> 
              <br />PROJECT
            </h2>
            <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-xl">
              Our target is to architect an ecosystem where our partner network reaches an aggregate revenue of <span className="text-white font-bold">$10,000,000</span> through our connector protocols.
            </p>
          </div>
          
          <div className="flex-1 relative flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square bg-[#050505] border border-white/10 flex items-center justify-center group overflow-hidden">
               {/* HUD Circles */}
               <div className="absolute inset-0 pointer-events-none opacity-40">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.25" strokeDasharray="1 2" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />
                    <motion.circle cx="50" cy="50" r="44" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10 6" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
                    <motion.circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
                    <motion.circle cx="50" cy="50" r="34" fill="none" stroke="white" strokeWidth="2" strokeDasharray="2 30" animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
                  </svg>
               </div>
               <div className="text-7xl md:text-[8rem] font-futuristic font-black text-white leading-none relative z-10">10M</div>
               <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-white/60" />
               <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-white/60" />
            </div>
          </div>
        </div>
      </section>

      {/* The Plan Section */}
      <section className="space-y-24">
        <h3 className="text-3xl md:text-5xl font-futuristic font-black uppercase tracking-tighter text-center">The Simple Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Audit & Align", desc: "Identify key leverage points in your existing sales framework." },
            { step: "02", title: "Bridge Construction", desc: "Connect your infrastructure to our proprietary high-yield networks." },
            { step: "03", title: "Exponential Yield", desc: "Activate the sales system to capture guaranteed client volume." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
              <span className="font-futuristic text-5xl text-white/10 mb-6 block">{item.step}</span>
              <h4 className="font-futuristic text-xl mb-4 uppercase tracking-tighter">{item.title}</h4>
              <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </PageWrapper>
);

const SystemPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <PageWrapper title="The System" subtitle="Connector Protocols" onBack={onBack}>
    <div className="space-y-40">
      <TechnicalEngine className="w-full h-auto max-w-5xl mx-auto" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h3 className="font-futuristic text-3xl uppercase tracking-tighter">Guaranteed Client System</h3>
          <p className="text-white/50 text-lg leading-relaxed font-light">
            Our system operates on a results-only logic. We don't sell 'leads' or 'clicks'. We deliver signed contracts and verified clients. The connection is the catalyst, but the system is the engine that keeps the fuel flowing.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 items-center font-futuristic text-[10px] tracking-widest text-white/80"><ShieldCheck size={16} /> ZERO UPFRONT RISK</li>
            <li className="flex gap-4 items-center font-futuristic text-[10px] tracking-widest text-white/80"><Cpu size={16} /> AI-DRIVEN OUTREACH</li>
            <li className="flex gap-4 items-center font-futuristic text-[10px] tracking-widest text-white/80"><Target size={16} /> TARGETED B2B MATCHING</li>
          </ul>
        </div>
        
        <div className="space-y-8">
          <h3 className="font-futuristic text-3xl uppercase tracking-tighter">Connector Dynamics</h3>
          <p className="text-white/50 text-lg leading-relaxed font-light">
            We bridge the gap between businesses that have the 'Solution' and businesses that have the 'Pain'. AutomationGo sits at the nexus, managing the flow of data, trust, and capital.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-6 border border-white/10 bg-white/5">
               <span className="block text-2xl font-black font-futuristic">98%</span>
               <span className="text-[8px] uppercase tracking-widest text-white/40 font-futuristic">Match Accuracy</span>
             </div>
             <div className="p-6 border border-white/10 bg-white/5">
               <span className="block text-2xl font-black font-futuristic">14D</span>
               <span className="text-[8px] uppercase tracking-widest text-white/40 font-futuristic">Avg Integration</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

const PortfolioPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <PageWrapper title="Portfolio" subtitle="Documented Success" onBack={onBack}>
    <div className="space-y-32">
      {/* Flagship Case Study */}
      <section className="max-w-5xl mx-auto bg-[#0a0a0a] border border-white/10 p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
         <div className="w-full lg:w-1/3 aspect-square shrink-0 flex items-center justify-center border border-white/5 bg-[#080808] relative group">
            <MyoLogo className="w-2/3 h-auto relative z-10 transition-transform group-hover:scale-110 duration-700" />
            <div className="absolute inset-4 border border-white/[0.03] pointer-events-none" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-futuristic text-[8px] tracking-[0.4em] opacity-40">FLAGSHIP_NODE</div>
         </div>
         
         <div className="flex-1 space-y-10">
           <div>
             <span className="font-futuristic text-[10px] tracking-[0.5em] text-white/30 uppercase mb-4 block">Case Study_01</span>
             <h3 className="font-futuristic text-5xl uppercase mb-4 tracking-tighter">MyoProcess</h3>
             <p className="text-white/40 text-xl font-light leading-relaxed">
               A comprehensive overhaul of B2B acquisition strategies, connecting their operational backend with high-tier corporate clients.
             </p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
             <div>
               <span className="text-[10px] font-futuristic text-white/30 uppercase block mb-1">Dec Yield</span>
               <span className="text-4xl font-black font-futuristic">$20,000</span>
             </div>
             <div>
               <span className="text-[10px] font-futuristic text-white/30 uppercase block mb-1">Efficiency</span>
               <span className="text-4xl font-black font-futuristic">+40%</span>
             </div>
             <div className="hidden md:block">
               <span className="text-[10px] font-futuristic text-white/30 uppercase block mb-1">Status</span>
               <span className="text-4xl font-black font-futuristic">SCALED</span>
             </div>
           </div>

           <div className="flex gap-4">
              <button className="flex items-center gap-3 px-8 py-4 border border-white/20 font-futuristic text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                Access Dossier <ArrowRight size={14} />
              </button>
           </div>
         </div>
      </section>
    </div>
  </PageWrapper>
);

const TeamPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <PageWrapper title="The Team" subtitle="Elite Architects" onBack={onBack}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {TEAM.map((member, i) => (
        <div key={i} className="group">
           <div className="aspect-[3/4] bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden mb-8">
              <span className="text-8xl font-futuristic font-black text-white/5 group-hover:text-white/20 transition-all duration-700">{member.initials}</span>
           </div>
           <h4 className="font-futuristic text-2xl uppercase tracking-tighter mb-2">{member.name}</h4>
           <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-futuristic">{member.role}</p>
        </div>
      ))}
    </div>
  </PageWrapper>
);

const ContactPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <PageWrapper title="Contact" subtitle="Direct Line" onBack={onBack}>
    <div className="max-w-2xl">
      <a href="mailto:info@automationgo.in" className="text-3xl md:text-5xl font-futuristic font-black border-b-4 border-white pb-4 hover:opacity-50 transition-all block">
        info@automationgo.in
      </a>
    </div>
  </PageWrapper>
);

// --- Landing Page Sections ---

const Hero: React.FC<{ setView: (v: ViewType) => void }> = ({ setView }) => {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} className="w-full max-w-[1000px] flex items-center justify-center">
          <InfinityLogo className="w-full opacity-10 blur-[1px]" />
        </motion.div>
      </div>
      <div className="relative z-10 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-futuristic font-black tracking-tighter leading-[0.85] mb-8 text-white">
            SCALE <br />
            <span className="text-white opacity-25 border-t border-b border-white/20 py-2 block uppercase">Without</span>
            LIMITS
          </h1>
          <p className="max-w-2xl mx-auto text-white/40 text-lg md:text-xl font-light mb-12">
            Architecting bridges between elite businesses using our Guaranteed Client System.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button onClick={() => setView('contact')} className="w-full md:w-auto px-12 py-6 bg-white text-black font-futuristic text-xs tracking-[0.3em] uppercase hover:bg-black hover:text-white border border-white transition-all duration-500">Get Started</button>
            <button onClick={() => setView('portfolio')} className="w-full md:w-auto px-12 py-6 border border-white/20 hover:border-white transition-all duration-500 font-futuristic text-xs tracking-[0.3em] uppercase text-white">View Case Study</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SystemSection: React.FC = () => {
  const features = [
    { title: 'Automated Outreach', desc: 'Proprietary algorithms that find and qualify your ideal client base.', icon: <Zap size={40} className="mb-4" /> },
    { title: 'Guaranteed ROI', desc: 'We deliver guaranteed clients. No results, no fees.', icon: <ShieldCheck size={40} className="mb-4" /> },
    { title: 'Global Connector', desc: 'Access elite networks across industries.', icon: <Users size={40} className="mb-4" /> },
    { title: 'Neural Systems', desc: 'AI-driven sales funnels.', icon: <Cpu size={40} className="mb-4" /> }
  ];
  return (
    <section id="system-landing" className="py-32 md:py-48 bg-white text-black">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl md:text-7xl font-futuristic font-black leading-none uppercase mb-24">The Mechanism</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-12 hover:bg-black hover:text-white transition-all duration-500 group cursor-default">
              <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-500">{f.icon}</div>
              <h4 className="font-futuristic text-xl mb-4 uppercase tracking-tighter">{f.title}</h4>
              <p className="opacity-60 group-hover:opacity-80 transition-opacity font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioLanding: React.FC = () => (
  <section id="portfolio-landing" className="py-32 md:py-48 border-y border-white/10 bg-black text-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <h3 className="text-4xl md:text-7xl font-futuristic font-black uppercase tracking-tighter">Market Dominance</h3>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-6xl mx-auto bg-[#0a0a0a] border border-white/10 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="mb-12 inline-block"><MyoLogo className="h-20 w-auto" /></div>
          <h4 className="font-futuristic text-4xl mb-6 uppercase tracking-tight">MyoProcess</h4>
          <p className="text-xl text-white/40 mb-12 font-light">
            Implemented acquisition framework, stabilizing monthly pipeline and unlocking scale.
          </p>
          <div className="p-10 border-l-4 border-white bg-white/5">
            <span className="text-7xl font-futuristic font-black text-white">$20k</span>
          </div>
        </div>
        <div className="lg:w-1/2 w-full relative aspect-square bg-[#080808] border border-white/5 flex items-center justify-center group overflow-hidden">
           <MyoLogo className="w-1/2 h-1/2 relative z-10" />
           <div className="absolute inset-4 border border-white/[0.03] pointer-events-none" />
        </div>
      </motion.div>
    </div>
  </section>
);

const TeamLanding: React.FC = () => (
  <section id="team-landing" className="py-32 md:py-48 bg-black">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center mb-28 text-white">
        <h3 className="text-4xl md:text-7xl font-futuristic font-black uppercase tracking-tighter">Leadership</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {TEAM.map((member, i) => (
          <div key={i} className="group text-center">
            <div className="aspect-[4/5] bg-white/5 border border-white/10 flex items-center justify-center mb-10 overflow-hidden relative text-white">
              <span className="text-9xl font-futuristic font-black text-white/5 group-hover:text-white/20 transition-all duration-700">{member.initials}</span>
            </div>
            <h4 className="font-futuristic text-2xl uppercase mb-2 text-white">{member.name}</h4>
            <p className="text-white/40 uppercase text-[10px] tracking-[0.5em] font-futuristic">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactLanding: React.FC = () => (
  <section id="contact-landing" className="py-32 md:py-48 bg-white text-black relative">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto border border-black/10 p-12 md:p-32 bg-black/[0.02] relative overflow-hidden">
        <h2 className="font-futuristic text-4xl md:text-8xl font-black uppercase text-black leading-none mb-16 tracking-tighter">READY TO <br />CONNECT?</h2>
        <a href="mailto:info@automationgo.in" className="text-2xl md:text-3xl font-futuristic font-black text-black border-b-2 border-black hover:opacity-50 transition-all pb-3">info@automationgo.in</a>
      </div>
    </div>
    <footer className="container mx-auto px-6 pt-32 pb-12 flex justify-center border-t border-black/5 mt-20">
        <span className="font-futuristic text-[10px] tracking-[0.5em] uppercase text-black/40">© 2024 AutomationGo</span>
    </footer>
  </section>
);

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => { window.scrollTo(0, 0); }, [view]);

  return (
    <div className="relative min-h-screen bg-black selection:bg-white selection:text-black overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-white z-[100] origin-left mix-blend-difference" style={{ scaleX }} />
      <Navbar setView={setView} currentView={view} />
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.6 }}>
            <Hero setView={setView} />
            <SystemSection />
            <PortfolioLanding />
            <TeamLanding />
            <ContactLanding />
          </motion.div>
        )}
        {view === 'vision' && <VisionPage key="vision" onBack={() => setView('home')} />}
        {view === 'system' && <SystemPage key="system" onBack={() => setView('home')} />}
        {view === 'portfolio' && <PortfolioPage key="portfolio" onBack={() => setView('home')} />}
        {view === 'team' && <TeamPage key="team" onBack={() => setView('home')} />}
        {view === 'contact' && <ContactPage key="contact" onBack={() => setView('home')} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
