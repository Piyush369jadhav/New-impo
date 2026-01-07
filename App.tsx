
import React, { useEffect, useState } from 'react';
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
  Activity
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
        <div className="absolute top-1/2 -left-6 -translate-y-1/2 rotate-90 font-futuristic text-[6px] tracking-[1em] text-white/20">Y-AXIS SYNCHRONIZATION</div>
        <div className="absolute top-1/2 -right-6 -translate-y-1/2 -rotate-90 font-futuristic text-[6px] tracking-[1em] text-white/20">THRUPUT MONITOR</div>
      </div>

      <svg viewBox="0 0 512 512" className="w-[85%] max-w-[520px] h-auto relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 1. CHASSIS INFRASTRUCTURE (FIXED) */}
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
          <line x1="76" y1="0" x2="76" y2="35" stroke="white" strokeWidth="0.5" strokeDasharray="1 2" opacity="0.4" />
          <line x1="114" y1="0" x2="114" y2="35" stroke="white" strokeWidth="0.5" strokeDasharray="1 2" opacity="0.4" />
        </g>

        {/* 4. DRIVE SYSTEM (Belt) */}
        <motion.path 
          d="M200 256 L244 184 A14 14 0 0 1 268 184 L312 262 A18 18 0 0 1 312 298 L200 304 A24 24 0 0 1 200 256 Z"
          stroke="white" 
          strokeWidth="1.2" 
          strokeDasharray="4 2"
          animate={{ strokeDashoffset: [0, -40] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="opacity-40"
        />

        {/* L-PULLEY UNIT */}
        <g transform="translate(200, 280)">
          <motion.g animate={{ rotate: 360 }} transition={{ duration: rotDuration, repeat: Infinity, ease: "linear" }}>
            <circle cx="0" cy="0" r="24" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
            <circle cx="0" cy="0" r="4" fill="white" />
            <line x1="-24" y1="0" x2="24" y2="0" stroke="white" strokeWidth="0.5" opacity="0.2" />
          </motion.g>
        </g>

        {/* TOP-PULLEY UNIT */}
        <g transform="translate(256, 195)">
          <motion.g animate={{ rotate: -360 }} transition={{ duration: rotDuration * 0.7, repeat: Infinity, ease: "linear" }}>
            <circle cx="0" cy="0" r="14" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
            <circle cx="0" cy="0" r="3" fill="white" />
          </motion.g>
        </g>

        {/* R-PULLEY UNIT */}
        <g transform="translate(312, 280)">
          <motion.g animate={{ rotate: 360 }} transition={{ duration: rotDuration * 0.9, repeat: Infinity, ease: "linear" }}>
            <circle cx="0" cy="0" r="18" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
            <circle cx="0" cy="0" r="3" fill="white" />
            <line x1="0" y1="-18" x2="0" y2="18" stroke="white" strokeWidth="0.5" opacity="0.2" />
          </motion.g>
        </g>

        {/* 5. PISTON ASSEMBLIES */}
        <g transform="translate(138, 145) rotate(-45)">
          <rect x="-18" y="-45" width="36" height="70" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
          <rect x="-15" y="-10" width="30" height="5" stroke="white" strokeWidth="0.5" opacity="0.2" />
          <line x1="-18" y1="-45" x2="-18" y2="100" stroke="white" strokeWidth="0.5" opacity="0.3" />
          <line x1="18" y1="-45" x2="18" y2="100" stroke="white" strokeWidth="0.5" opacity="0.3" />
          <motion.g animate={{ y: [-15, 15, -15] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <rect x="-24" y="-55" width="48" height="12" stroke="white" strokeWidth={bStroke} fill="black" />
            <line x1="0" y1="-43" x2="0" y2="110" stroke="white" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.3" />
          </motion.g>
        </g>

        <g transform="translate(374, 145) rotate(45)">
          <rect x="-18" y="-45" width="36" height="70" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
          <rect x="-15" y="-10" width="30" height="5" stroke="white" strokeWidth="0.5" opacity="0.2" />
          <line x1="-18" y1="-45" x2="-18" y2="100" stroke="white" strokeWidth="0.5" opacity="0.3" />
          <line x1="18" y1="-45" x2="18" y2="100" stroke="white" strokeWidth="0.5" opacity="0.3" />
          <motion.g animate={{ y: [15, -15, 15] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <rect x="-24" y="-55" width="48" height="12" stroke="white" strokeWidth={bStroke} fill="black" />
            <line x1="0" y1="-43" x2="0" y2="110" stroke="white" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.3" />
          </motion.g>
        </g>

        {/* 6. CENTRAL CORE */}
        <g transform="translate(256, 280)">
          <rect x="-22" y="-22" width="44" height="44" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
          <g transform="translate(0, -50)">
            <rect x="-2" y="0" width="4" height="20" fill="white" opacity="0.2" />
            <rect x="-2" y="5" width="4" height="2" fill="white" opacity="0.5" />
            <rect x="-2" y="10" width="4" height="2" fill="white" opacity="0.5" />
            <rect x="-2" y="15" width="4" height="2" fill="white" opacity="0.5" />
          </g>
          <motion.circle r="10" fill="white" animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} />
          <line x1="0" y1="-22" x2="0" y2="-85" stroke="white" strokeWidth="1" opacity="0.4" />
        </g>

        <g transform="translate(305, 230)">
          <rect width="20" height="20" stroke="white" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.4" />
          <line x1="0" y1="10" x2="20" y2="10" stroke="white" strokeWidth="0.5" opacity="0.2" />
        </g>

        {/* Side Cooling Turbine */}
        <g transform="translate(65, 240)">
          <rect x="0" y="0" width="35" height="35" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
          <g transform="translate(17.5, 17.5)">
            <motion.g animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
              <path d="M-12 0 L12 0 M0 -12 L0 12" stroke="white" strokeWidth="1" />
              <circle r="4" fill="black" stroke="white" strokeWidth="0.5" />
            </motion.g>
          </g>
        </g>

        {/* Manifold Curves */}
        <g stroke="white" strokeWidth="0.5" opacity="0.15">
          <path d="M162 120 Q200 150, 240 195" />
          <path d="M350 120 Q312 150, 272 195" />
        </g>

        {/* Mechanical Linkage */}
        <g stroke="white" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.2">
          <line x1="200" y1="280" x2="150" y2="200" />
          <line x1="312" y1="280" x2="362" y2="200" />
        </g>

        {/* Top Sensor Array */}
        <g transform="translate(200, 95)">
          <rect width="112" height="25" stroke="white" strokeWidth={bStroke} strokeDasharray={dPattern} />
          <line x1="10" y1="12" x2="102" y2="12" stroke="white" strokeWidth="0.5" opacity="0.3" />
          <motion.rect x="40" y="5" width="32" height="15" fill="white" animate={{ opacity: [0, 0.5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </g>

        {/* 7. TECHNICAL CALLOUTS (Annotations around the engine) */}
        <g font-family="Orbitron" font-size="6" fill="white" stroke="none">
          {/* Callout 1: Connect Core */}
          <line x1="256" y1="280" x2="480" y2="340" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
          <circle cx="480" cy="340" r="2" fill="white" />
          <text x="485" y="343" fill="white" opacity="0.8" text-anchor="start" transform="scale(1)">01. NEURAL BRIDGE</text>
          
          {/* Callout 2: Scale Manifold */}
          <line x1="138" y1="145" x2="40" y2="60" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
          <circle cx="40" cy="60" r="2" fill="white" />
          <text x="35" y="55" fill="white" opacity="0.8" text-anchor="end">02. SCALE COMPRESSION</text>

          {/* Callout 3: Drive Protocol */}
          <line x1="200" y1="300" x2="60" y2="400" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
          <circle cx="60" cy="400" r="2" fill="white" />
          <text x="55" y="415" fill="white" opacity="0.8" text-anchor="end">03. KINETIC REVENUE DRIVE</text>
          
          {/* Callout 4: Client Intake */}
          <line x1="415" y1="175" x2="480" y2="120" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
          <circle cx="480" cy="120" r="2" fill="white" />
          <text x="485" y="115" fill="white" opacity="0.8" text-anchor="start">04. CLIENT ABSORPTION PORT</text>
        </g>

        {/* Structural Wiring Conduits */}
        <g stroke="white" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.2">
          <path d="M150 250 Q100 200, 97 175" />
          <path d="M362 250 Q412 200, 415 175" />
          <path d="M256 360 Q256 320, 256 302" />
        </g>
      </svg>
      
      {/* HUD Corners (Telemetry Readouts) */}
      <div className="absolute top-0 left-0 p-8 space-y-4 hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="w-1 h-1 bg-white animate-pulse" />
          <span className="font-futuristic text-[8px] tracking-widest text-white/60">SYS_AUTH: VERIFIED</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-24 h-px bg-white/20" />
          <span className="font-futuristic text-[6px] text-white/30 tracking-widest">LATENCY: 0.04ms</span>
          <span className="font-futuristic text-[6px] text-white/30 tracking-widest">ENCRYPTION: AES-X</span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 p-8 text-right space-y-4 hidden lg:block">
        <div className="flex items-center gap-3 justify-end">
          <span className="font-futuristic text-[8px] tracking-widest text-white/60">THRUPUT_INDEX: 99.4%</span>
          <div className="w-1 h-1 bg-white animate-pulse" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-32 h-px bg-white/20 ml-auto" />
          <span className="font-futuristic text-[6px] text-white/30 tracking-widest">PROTOCOL: CONN_8.1</span>
          <span className="font-futuristic text-[6px] text-white/30 tracking-widest">TARGET_YIELD: +$10M</span>
        </div>
      </div>
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
      d="M50,10 L10,50 L50,90 L90,50 Z" 
      fill="none" 
      stroke="white" 
      strokeWidth="2" 
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
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
            <div className="absolute inset-0 bg-white/10 blur-xl rounded-full scale-0 group-hover:scale-[2] transition-transform duration-1000 opacity-0 group-hover:opacity-10 pointer-events-none" />
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

// --- View Pages (Detail Pages) ---

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

    <div className="fixed inset-0 pointer-events-none z-[-1]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-white/[0.01] rounded-full blur-[200px]" />
    </div>
  </motion.div>
);

const VisionPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <PageWrapper title="Vision" subtitle="The Architecture of Scale" onBack={onBack}>
    <div className="space-y-40">
      
      {/* SECTION 1: THE 10M PROJECT */}
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
              Our target is to architect an ecosystem where our partner network reaches an aggregate revenue of <span className="text-white font-bold">$10,000,000</span>. This is the new standard of connectivity.
            </p>
          </div>
          
          <div className="flex-1 relative flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square bg-white/5 border border-white/10 flex items-center justify-center group">
               <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.1] to-transparent" />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="w-[85%] h-[85%] border border-dashed border-white/20 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute w-3/5 h-3/5 border border-dashed border-white/30 rounded-full"
                  />
               </div>
               <div className="relative z-10 flex flex-col items-center gap-8">
                 <motion.div 
                   animate={{ scale: [1, 1.05, 1] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="flex flex-col items-center"
                 >
                   <span className="text-7xl md:text-[8rem] font-futuristic font-black text-white drop-shadow-[0_0_50px_rgba(255,255,255,0.8)] leading-none">10M</span>
                 </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MYOPROCESS SUCCESS STORY */}
      <section className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <h3 className="font-futuristic text-xs tracking-[0.6em] uppercase text-white/30 mb-2">Phase 01: Impact Verified</h3>
            <h4 className="text-4xl md:text-6xl font-futuristic font-black uppercase tracking-tighter">MYOPROCESS CASE</h4>
          </div>
          <div className="px-6 py-3 bg-white text-black font-futuristic text-[10px] tracking-widest uppercase font-bold border border-white">Growth Locked</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 p-12 h-[380px] flex flex-col justify-between group transition-all"
          >
            <TrendingUp size={40} className="text-white opacity-20 group-hover:opacity-100 transition-opacity" />
            <div className="space-y-6">
              <span className="font-futuristic text-[10px] tracking-[0.4em] uppercase text-white/40">Monthly Impact</span>
              <h5 className="text-7xl font-futuristic font-black text-white">+$20K</h5>
              <p className="text-white/40 text-sm font-light leading-relaxed">Direct revenue scaling within 30 days of connector implementation.</p>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 p-12 h-[380px] flex flex-col justify-between group transition-all"
          >
            <Users size={40} className="text-white opacity-20 group-hover:opacity-100 transition-opacity" />
            <div className="space-y-6">
              <span className="font-futuristic text-[10px] tracking-[0.4em] uppercase text-white/40">Intro Precision</span>
              <h5 className="text-7xl font-futuristic font-black text-white">94%</h5>
              <p className="text-white/40 text-sm font-light leading-relaxed">Verified high-intent introduction accuracy through proprietary vetting logic.</p>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 p-12 h-[380px] flex flex-col justify-between group transition-all"
          >
            <CheckCircle2 size={40} className="text-white opacity-20 group-hover:opacity-100 transition-opacity" />
            <div className="space-y-6">
              <span className="font-futuristic text-[10px] tracking-[0.4em] uppercase text-white/40">System Status</span>
              <h5 className="text-5xl md:text-6xl font-futuristic font-black text-white leading-none">ACTIVE</h5>
              <p className="text-white/40 text-sm font-light leading-relaxed">Connector protocol successfully deployed and delivering guaranteed client growth.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 text-center max-w-5xl mx-auto px-6">
        <blockquote className="text-2xl md:text-5xl font-futuristic font-black uppercase tracking-tighter text-white/80 leading-none">
          "We aren't just connecting businesses; we're establishing the infrastructure for the next generation of <span className="text-white underline underline-offset-[12px] decoration-white/20">market leaders</span>."
        </blockquote>
        <div className="mt-16 w-24 h-px bg-white/20 mx-auto" />
      </section>
    </div>
  </PageWrapper>
);

const SystemPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <PageWrapper title="The System" subtitle="Connector Protocols" onBack={onBack}>
    <div className="space-y-32">
      <div className="relative">
        <TechnicalEngine className="w-full h-auto max-w-5xl mx-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <h4 className="font-futuristic text-[10px] tracking-[0.8em] uppercase text-white/10">Synchronized Engine Matrix</h4>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
        <div className="bg-black/40 backdrop-blur-md p-12 space-y-6 group hover:bg-white/5 transition-colors">
          <Link2 size={40} className="text-white/40 group-hover:text-white transition-colors" />
          <h4 className="font-futuristic text-xl uppercase tracking-tighter">The Connector</h4>
          <p className="text-white/40 font-light leading-relaxed">High-level bridge between elite businesses. Our system finds the synergy and handles the introduction.</p>
        </div>
        <div className="bg-black/40 backdrop-blur-md p-12 space-y-6 group hover:bg-white/5 transition-colors">
          <Target size={40} className="text-white/40 group-hover:text-white transition-colors" />
          <h4 className="font-futuristic text-xl uppercase tracking-tighter">Access Fees</h4>
          <p className="text-white/40 font-light leading-relaxed">Entry is exclusive. We charge an Access Fee for system integration and network whitelisting.</p>
        </div>
        <div className="bg-black/40 backdrop-blur-md p-12 space-y-6 group hover:bg-white/5 transition-colors">
          <TrendingUp size={40} className="text-white/40 group-hover:text-white transition-colors" />
          <h4 className="font-futuristic text-xl uppercase tracking-tighter">Revenue Share</h4>
          <p className="text-white/40 font-light leading-relaxed">Purely results-driven. We take a small share only when the deal we connected successfully closes.</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

const PortfolioPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <PageWrapper title="Portfolio" subtitle="Documented Success" onBack={onBack}>
    <div className="max-w-4xl bg-white/5 border border-white/10 p-12 flex flex-col md:flex-row gap-16 items-center">
       <div className="w-48 h-48 shrink-0 flex items-center justify-center border border-white/10">
          <MyoLogo className="w-2/3 h-auto" />
       </div>
       <div>
         <h3 className="font-futuristic text-3xl uppercase mb-6">MyoProcess</h3>
         <div className="flex gap-4 mb-8">
            <span className="px-3 py-1 bg-white text-black text-[8px] font-black uppercase tracking-widest font-futuristic">Case: Active</span>
            <span className="px-3 py-1 border border-white/20 text-white text-[8px] font-black uppercase tracking-widest font-futuristic">Scale: High</span>
         </div>
         <p className="text-white/40 text-xl font-light leading-relaxed mb-10">
           Immediate revenue capture of $20,000 in December 2025 alone following Connector deployment.
         </p>
         <button className="flex items-center gap-3 font-futuristic text-[10px] tracking-widest uppercase text-white/60 hover:text-white transition-colors">
           View Full Dataset <ArrowRight size={14} />
         </button>
       </div>
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
              <div className="absolute inset-4 border border-white/5 pointer-events-none" />
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
      <p className="text-2xl text-white/40 font-light leading-relaxed mb-16">
        The network is selective. We initiate strategy audits only for qualifying businesses.
      </p>
      <div className="space-y-4">
        <p className="font-futuristic text-[10px] tracking-[0.6em] uppercase text-white/20">Official Mailbox</p>
        <a href="mailto:info@automationgo.in" className="text-3xl md:text-5xl font-futuristic font-black border-b-4 border-white pb-4 hover:opacity-50 transition-all block">
          info@automationgo.in
        </a>
      </div>
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="inline-block px-4 py-1 border border-white/20 mb-10 rounded-full">
            <span className="font-futuristic text-[10px] tracking-[0.6em] text-white/60 uppercase">Strategic Connector Engine</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-futuristic font-black tracking-tighter leading-[0.85] mb-8 text-white">
            SCALE <br />
            <span className="text-white opacity-25 border-t border-b border-white/20 py-2 block">WITHOUT</span>
            LIMITS
          </h1>
          <p className="max-w-2xl mx-auto text-white/40 text-lg md:text-xl font-light mb-12 tracking-wide">
            Architecting bridges between elite businesses using our <span className="text-white font-bold">Guaranteed Client System</span>.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button onClick={() => setView('contact')} className="w-full md:w-auto px-12 py-6 bg-white text-black font-futuristic text-xs tracking-[0.3em] uppercase hover:bg-black hover:text-white border border-white transition-all duration-500 flex items-center justify-center gap-3 group">
              Get Started <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
            </button>
            <button onClick={() => setView('portfolio')} className="w-full md:w-auto px-12 py-6 border border-white/20 hover:border-white transition-all duration-500 font-futuristic text-xs tracking-[0.3em] uppercase text-white flex items-center justify-center">
              View Case Study
            </button>
          </div>
        </motion.div>
      </div>
      <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <span className="font-futuristic text-[8px] tracking-[0.5em] uppercase text-white">Explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
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
              <p className="opacity-60 group-hover:opacity-80 transition-opacity font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioLanding: React.FC = () => (
  <section id="portfolio-landing" className="py-32 md:py-48 border-y border-white/10 relative overflow-hidden bg-black text-white">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-24">
        <h2 className="font-futuristic text-xs tracking-[0.5em] uppercase mb-4 opacity-30">Case Evidence</h2>
        <h3 className="text-4xl md:text-7xl font-futuristic font-black uppercase tracking-tighter">Market Dominance</h3>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-6xl mx-auto bg-white/5 border border-white/10 p-8 md:p-20 flex flex-col lg:flex-row items-center gap-16 backdrop-blur-md">
        <div className="lg:w-1/2">
          <div className="mb-12 inline-block"><MyoLogo className="h-20 w-auto" /></div>
          <h4 className="font-futuristic text-4xl mb-6 uppercase tracking-tight">MyoProcess</h4>
          <p className="text-xl text-white/40 mb-12 leading-relaxed font-light">
            Implemented acquisition framework, stabilizing monthly pipeline and unlocking scale.
          </p>
          <div className="p-10 border-l-4 border-white bg-white/5">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-7xl font-futuristic font-black text-white leading-none">$20k</span>
              <span className="text-white/40 uppercase text-[10px] tracking-[0.4em] font-futuristic">Revenue / Mo</span>
            </div>
            <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-futuristic">Guaranteed Growth Results</p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full relative aspect-square bg-white/5 border border-white/10 flex items-center justify-center group overflow-hidden">
           <MyoLogo className="w-1/2 h-1/2 opacity-30 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000" />
        </div>
      </motion.div>
    </div>
  </section>
);

const TeamLanding: React.FC = () => (
  <section id="team-landing" className="py-32 md:py-48 bg-black">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center mb-28 text-white">
        <h2 className="font-futuristic text-xs tracking-[0.5em] uppercase mb-4 opacity-30">The Architects</h2>
        <h3 className="text-4xl md:text-7xl font-futuristic font-black uppercase tracking-tighter">Leadership</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {TEAM.map((member, i) => (
          <div key={i} className="group text-center">
            <div className="aspect-[4/5] bg-white/5 border border-white/10 flex items-center justify-center mb-10 overflow-hidden relative">
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 mix-blend-difference" />
              <span className="text-9xl font-futuristic font-black text-white/5 group-hover:text-black transition-colors duration-700 select-none">{member.initials}</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
          <div>
            <p className="text-xl text-black/60 font-light mb-12 leading-relaxed">Join the elite network scaling with mathematical precision.</p>
            <a href="mailto:info@automationgo.in" className="text-2xl md:text-3xl font-futuristic font-black text-black border-b-2 border-black hover:opacity-50 transition-all pb-3">info@automationgo.in</a>
          </div>
          <button className="w-full md:w-auto px-16 py-8 bg-black text-white font-futuristic text-xs tracking-[0.4em] uppercase hover:opacity-90 transition-all flex items-center justify-center gap-6 group">Begin Audit <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" /></button>
        </div>
      </div>
    </div>
    <footer className="container mx-auto px-6 pt-32 pb-12 flex flex-col md:flex-row justify-between items-center border-t border-black/5 mt-20 gap-10">
      <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <InfinityLogo className="h-10 w-auto brightness-0" />
        <span className="font-futuristic text-[10px] tracking-[0.5em] uppercase text-black/40">© 2024 AutomationGo</span>
      </div>
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
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-white/[0.02] rounded-full blur-[180px]" />
      </div>
    </div>
  );
};

export default App;
