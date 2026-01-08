import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Cpu, 
  Menu,
  X,
  Target,
  ArrowLeft,
  Activity,
  Globe,
  Database,
  Search,
  CheckCircle,
  Network,
  Terminal,
  Layers,
  BarChart3,
  ShieldAlert,
  HardDrive,
  Linkedin
} from 'lucide-react';

// --- Types ---
type ViewType = 'home' | 'vision' | 'system' | 'portfolio' | 'team' | 'contact';

// --- Constants ---
const TEAM = [
  { 
    name: 'Piyush Jadhav', 
    role: 'Chief Strategist', 
    initials: 'PJ', 
    loc: '010.012',
    bio: 'Specialist in high-velocity sales architecture and lead generation logic. Orchestrates the primary connection protocols.',
    linkedin: 'https://www.linkedin.com/in/piyush-jadhav-70b234397?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1XKdYBO2RouPVU3uy7Vj3A%3D%3D'
  },
  { 
    name: 'Manas Ghate', 
    role: 'Growth Architect', 
    initials: 'MG', 
    loc: '010.044',
    bio: 'Expert in operational scaling and market penetration strategies. Manages the execution loop and revenue optimization.'
  },
  { 
    name: 'Dnyaneshwar Jadhav', 
    role: 'Systems Lead', 
    initials: 'DJ', 
    loc: '010.089',
    bio: 'Oversees the technical backend and AI-driven outreach infrastructure. Ensures 99.9% protocol stability.'
  },
];

// --- Sub-Components ---

const CyberBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
    <div 
      className="absolute inset-0" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} 
    />
    <motion.div 
      animate={{ y: ['-100%', '100%'] }} 
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
    />
    <motion.div 
      animate={{ y: ['100%', '-100%'] }} 
      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      className="absolute right-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
    />
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full opacity-20"
        initial={{ 
          x: Math.random() * 100 + '%', 
          y: Math.random() * 100 + '%',
          scale: Math.random() * 2
        }}
        animate={{ 
          y: [null, '-20%'],
          opacity: [0, 0.4, 0]
        }}
        transition={{ 
          duration: 5 + Math.random() * 10, 
          repeat: Infinity, 
          delay: Math.random() * 5 
        }}
      />
    ))}
  </div>
);

const MetadataLabel = ({ children, active }: { children?: React.ReactNode, active?: boolean }) => (
  <div className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase flex items-center gap-2 mb-2">
    <div className={`w-1 h-1 rounded-full ${active ? 'bg-green-500 animate-pulse shadow-[0_0_5px_#22c55e]' : 'bg-white/40'}`} />
    {children}
  </div>
);

const InfinityLogo = ({ className, pulsing = false }: { className?: string; pulsing?: boolean }) => (
  <motion.svg 
    viewBox="0 0 100 60" 
    className={className}
    animate={pulsing ? { 
      filter: ["brightness(100%) blur(0px)", "brightness(180%) blur(1px)", "brightness(100%) blur(0px)"]
    } : {}}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <path 
      d="M30,20 C10,20 10,40 30,40 C40,40 45,35 50,30 C55,25 60,20 70,20 C90,20 90,40 70,40 C60,40 55,35 50,30 C45,25 40,20 30,20 Z" 
      fill="none" 
      stroke="white" 
      strokeWidth="4" 
      strokeLinecap="round"
      opacity="0.8"
    />
  </motion.svg>
);

const ConnectorVisualization = () => {
  return (
    <div className="relative flex justify-center items-center py-32 bg-black/40 border border-white/5 rounded-3xl overflow-hidden glass-panel">
      <div className="absolute top-6 left-8 flex flex-col gap-2">
        <MetadataLabel active>PROCESS_NEXUS: ONLINE</MetadataLabel>
        <MetadataLabel active>CALIBRATION: ACTIVE</MetadataLabel>
      </div>
      
      <svg viewBox="0 0 800 500" className="w-full max-w-5xl h-auto drop-shadow-[0_0_40px_rgba(34,197,94,0.1)]" fill="none">
        {/* Background Grids & Circles */}
        <motion.circle 
          cx="400" cy="250" r="180" stroke="white" strokeWidth="0.5" strokeDasharray="10 20" opacity="0.1"
          animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle 
          cx="400" cy="250" r="140" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="5 5" opacity="0.1"
          animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Central Core */}
        <g>
          <rect x="340" y="190" width="120" height="120" stroke="white" strokeWidth="2" opacity="0.8" />
          <motion.rect 
            x="350" y="200" width="100" height="100" stroke="#22c55e" strokeWidth="0.5" opacity="0.2"
            animate={{ opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 2, repeat: Infinity }}
          />
          <text x="400" y="245" fill="white" fontSize="14" fontFamily="Orbitron" textAnchor="middle" fontWeight="bold">AG_HUB</text>
          <text x="400" y="265" fill="#22c55e" fontSize="7" fontFamily="JetBrains Mono" textAnchor="middle" opacity="0.8" letterSpacing="0.2em">NEXUS_SYNC</text>
        </g>

        {/* External Interaction Points */}
        {[
          { x: 120, y: 150, label: "INBOUND" },
          { x: 120, y: 350, label: "DEMAND" },
          { x: 680, y: 150, label: "CAPITAL" },
          { x: 680, y: 350, label: "YIELD" }
        ].map((node, i) => (
          <g key={i}>
            <rect x={node.x-40} y={node.y-30} width="80" height="60" stroke="white" strokeWidth="1" opacity="0.3" />
            <text x={node.x} y={node.y+5} fill="white" fontSize="8" fontFamily="Orbitron" textAnchor="middle" opacity="0.6">{node.label}</text>
            
            {/* Animated Paths */}
            <motion.path 
              d={`M ${node.x} ${node.y} L 400 250`} 
              stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.1"
            />
            
            {/* Moving Packets */}
            <motion.circle 
              r="2" fill="#22c55e"
              initial={{ 
                cx: node.x < 400 ? node.x : 400, 
                cy: node.y < 250 ? node.y : 250 
              }}
              animate={{ 
                cx: node.x < 400 ? 400 : node.x, 
                cy: node.y < 250 ? 250 : node.y 
              }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>
        ))}

        {/* Access & Rev Share Connectors */}
        <g opacity="0.7">
          <path d="M 200 250 L 340 250" stroke="#22c55e" strokeWidth="1" strokeDasharray="2 6" opacity="0.4" />
          <path d="M 460 250 L 600 250" stroke="#22c55e" strokeWidth="1" strokeDasharray="2 6" opacity="0.4" />
          <rect x="150" y="235" width="60" height="30" stroke="white" strokeWidth="0.5" opacity="0.4" />
          <text x="180" y="255" fill="white" fontSize="6" fontFamily="JetBrains Mono" textAnchor="middle">ACCESS</text>
          <rect x="590" y="235" width="60" height="30" stroke="white" strokeWidth="0.5" opacity="0.4" />
          <text x="620" y="255" fill="white" fontSize="6" fontFamily="JetBrains Mono" textAnchor="middle">REV_SHARE</text>
        </g>
      </svg>
    </div>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-20">
      <MetadataLabel>{subtitle}</MetadataLabel>
      <motion.h2 
        initial={{ x: -20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-7xl font-futuristic font-black uppercase tracking-tighter leading-none text-glow"
      >
        {title}
      </motion.h2>
    </div>
  );
};

const Navbar: React.FC<{ setView: (v: ViewType) => void, currentView: ViewType }> = ({ setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 20); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items: ViewType[] = ['vision', 'system', 'portfolio', 'team', 'contact'];

  return (
    <nav className={`fixed top-0 w-full z-[60] transition-all duration-700 ${scrolled || currentView !== 'home' ? 'bg-black/90 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div onClick={() => setView('home')} className="flex items-center gap-3 cursor-pointer group">
          <InfinityLogo className="h-6 md:h-10 w-auto" pulsing={currentView === 'home'} />
          <div className="flex flex-col">
             <span className="font-futuristic font-bold text-sm md:text-base tracking-[0.2em] text-white uppercase group-hover:text-glow transition-all">AutomationGo</span>
             <span className="font-mono text-[7px] tracking-[0.4em] text-white/20 uppercase -mt-1 group-hover:text-white/40">v3.0.1_STABLE</span>
          </div>
        </div>
        
        {/* Navigation items: Large size text-2xl as per previous request */}
        <div className="hidden md:flex gap-16 font-mono text-2xl tracking-[0.3em] uppercase text-white/40">
          {items.map((item) => (
            <button 
              key={item} 
              onClick={() => setView(item)}
              className={`hover:text-white transition-all relative group flex items-center gap-4 ${currentView === item ? 'text-white' : ''}`}
            >
              {currentView === item && (
                <motion.div 
                  layoutId="nav-dot" 
                  className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e]" 
                />
              )}
              {item}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-green-500/60 transition-all ${currentView === item ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
          ))}
        </div>

        <button className="md:hidden text-white/80 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[70] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            <button className="absolute top-8 right-8 text-white/40" onClick={() => setIsOpen(false)}><X size={32} /></button>
            <button onClick={() => { setView('home'); setIsOpen(false); }} className="text-3xl font-futuristic text-white/80 uppercase tracking-widest">_Home</button>
            {items.map((item) => (
              <button key={item} onClick={() => { setView(item); setIsOpen(false); }} className="text-3xl font-futuristic text-white/80 uppercase tracking-widest">_{item}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const PageWrapper: React.FC<{ children: React.ReactNode, title: string, subtitle: string, onBack: () => void }> = ({ children, title, subtitle, onBack }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
    className="min-h-screen bg-black text-white pt-32 pb-24 px-6 relative z-10"
  >
    <div className="container mx-auto max-w-6xl">
      <button onClick={onBack} className="group flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-all mb-16">
        <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-green-500 transition-all" />
        Return_to_Nexus
      </button>
      
      <div className="mb-24">
        <MetadataLabel active>{subtitle}</MetadataLabel>
        <h1 className="text-5xl md:text-9xl font-futuristic font-black uppercase tracking-tighter leading-none text-glow">{title}</h1>
      </div>
      {children}
    </div>
  </motion.div>
);

const VisionPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <PageWrapper title="Vision" subtitle="MANIFESTO_ARCH_2025" onBack={onBack}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
      <div className="space-y-12">
        <div className="glass-panel p-10 cyber-border">
          <h2 className="text-2xl font-futuristic font-bold uppercase mb-6 tracking-tight">The Revenue Frontier</h2>
          <p className="text-white/60 text-lg leading-relaxed font-light mb-8">
            We don't just "find leads." We architect a digital expansion protocol that bridges the gap between high-level engineering solutions and desperate market demand. Our goal is a symbiotic partnership: we manage the grid, you deliver the excellence.
          </p>
          <div className="flex gap-4">
             <div className="flex-1 border-t border-white/10 pt-4">
               <span className="font-mono text-[9px] text-white/20 block mb-1">NETWORK_VALUATION</span>
               <span className="font-futuristic text-xl text-green-500/80">$10M+ ARCH</span>
             </div>
             <div className="flex-1 border-t border-white/10 pt-4">
               <span className="font-mono text-[9px] text-white/20 block mb-1">PARTNER_RETAINMENT</span>
               <span className="font-futuristic text-xl text-green-500/80">94%</span>
             </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {[
          { icon: <Target className="w-5 h-5" />, label: "Target Saturation", desc: "Using deep-web data scrapers and intent signals to find high-intent prospects." },
          { icon: <Network className="w-5 h-5" />, label: "Systemic Integration", desc: "Plugging your CRM directly into our automated outreach nexus for lead flow." },
          { icon: <Zap className="w-5 h-5" />, label: "Viral Velocity", desc: "Scaling outreach volume by 500% within the first 30 days of activation." }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-8 p-8 border border-white/5 hover:border-green-500/40 transition-all bg-white/[0.02] glass-panel"
          >
            <div className="shrink-0 p-3 bg-white/5 rounded-lg h-fit text-green-500/80">{item.icon}</div>
            <div>
              <h4 className="font-futuristic text-sm tracking-[0.2em] uppercase mb-3 text-white/90">{item.label}</h4>
              <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </PageWrapper>
);

const PortfolioPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <PageWrapper title="Cases" subtitle="DEPLOYMENT_DATA_STREAM" onBack={onBack}>
    <div className="space-y-12">
      {[
        {
          name: "MyoProcess",
          tag: "NODE_ALPHA",
          desc: "Complete transformation of a manual intake system into a 'Revenue Hub.'",
          metrics: { rev: "$20k+", efficiency: "+340%", timeline: "90 Days" }
        }
      ].map((item, i) => (
        <motion.div 
          key={i}
          className="glass-panel cyber-border p-12 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-green-500">
            <Terminal size={150} />
          </div>
          <div className="max-w-4xl relative z-10">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h3 className="text-4xl md:text-6xl font-futuristic font-black uppercase tracking-tighter">{item.name}</h3>
              <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded text-[9px] font-mono tracking-widest uppercase border border-green-500/20">{item.tag}</span>
            </div>
            <p className="text-white/50 text-xl font-light leading-relaxed mb-12">
              {item.desc}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-8 border-t border-white/10">
              <div>
                <span className="text-[10px] font-mono text-white/20 uppercase block mb-2">Yield_Increase</span>
                <span className="text-2xl font-bold font-futuristic text-green-500/80">{item.metrics.rev}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/20 uppercase block mb-2">Efficiency</span>
                <span className="text-2xl font-bold font-futuristic">{item.metrics.efficiency}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/20 uppercase block mb-2">Deployment</span>
                <span className="text-2xl font-bold font-futuristic">{item.metrics.timeline}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/20 uppercase block mb-2">Status</span>
                <span className="text-2xl font-bold font-futuristic text-green-500 shadow-[0_0_10px_#22c55e44]">OPTIMIZED</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </PageWrapper>
);

const Hero: React.FC<{ setView: (v: ViewType) => void }> = ({ setView }) => (
  <section className="h-[105vh] w-full flex flex-col items-center justify-center bg-black relative overflow-hidden px-6 pb-20">
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] border border-white/10 rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border border-green-500/5 rounded-full" />
    </div>
    
    <div className="relative z-10 text-center space-y-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.2, ease: "circOut" }}
      >
        <div className="flex justify-center mb-8">
          <MetadataLabel active>ACCESS_FEE_MODEL_ACTIVE</MetadataLabel>
        </div>
        <h1 className="text-6xl md:text-[11rem] font-futuristic font-black tracking-tighter leading-[0.85] mb-8">
          ELITE <br />
          <span className="text-white/20 font-light hover:text-white transition-all duration-1000 cursor-default uppercase">Connector</span>
        </h1>
        <p className="text-white/50 text-sm md:text-base font-mono tracking-[0.4em] uppercase max-w-3xl mx-auto mb-16 leading-relaxed px-4">
          High-yield business expansion built on access-based infrastructure and performance revenue shares.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button 
            onClick={() => setView('contact')} 
            className="px-14 py-6 bg-white text-black font-mono text-[10px] tracking-[0.4em] uppercase hover:bg-green-500 hover:text-white border border-white transition-all cyber-border"
          >
            Initiate_Nexus
          </button>
          <button 
            onClick={() => setView('system')} 
            className="px-14 py-6 border border-white/10 font-mono text-[10px] tracking-[0.4em] uppercase hover:border-green-500 hover:bg-green-500/5 transition-all cyber-border"
          >
            System_Manifesto
          </button>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-10 left-10 hidden md:block">
      <MetadataLabel active>GEO: 19.0760° N, 72.8777° E</MetadataLabel>
    </div>
    <div className="absolute bottom-10 right-10 hidden md:block">
      <MetadataLabel active>UPLINK: ACTIVE_ENCRYPTED</MetadataLabel>
    </div>
  </section>
);

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => { window.scrollTo(0, 0); }, [view]);

  return (
    <div className="relative min-h-screen bg-black selection:bg-green-500 selection:text-black">
      <CyberBackground />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-green-500 shadow-[0_0_10px_#22c55e] z-[100] origin-left" style={{ scaleX }} />
      <Navbar setView={setView} currentView={view} />
      
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero setView={setView} />
            
            <section className="py-48 bg-white text-black relative z-10">
              <div className="container mx-auto px-6">
                <SectionHeading title="The Architecture" subtitle="CORE_SYSTEM_MODULES" />
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-black/10 border border-black/10">
                  {[
                    { label: "Access Control", icon: <Cpu />, desc: "Structured entry fees that grant you access to our lead nexus." },
                    { label: "Data Harvesting", icon: <Database />, desc: "Massive scale lead extraction and intent-based filtering." },
                    { label: "Expansion Logic", icon: <Layers />, desc: "Scaling outreach volume by orders of magnitude in days." },
                    { label: "RevShare Sync", icon: <Globe />, desc: "We align profit via revenue share on closed deals." }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5 }}
                      className="bg-white p-14 hover:bg-black hover:text-white transition-all duration-500 group border border-transparent hover:border-green-500/20"
                    >
                      <div className="mb-10 opacity-30 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-500 group-hover:text-green-500">{item.icon}</div>
                      <h4 className="font-futuristic text-xl mb-6 uppercase tracking-tighter group-hover:text-glow">{item.label}</h4>
                      <p className="text-sm opacity-50 font-light group-hover:opacity-80 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-48 bg-black text-white relative z-10 border-y border-white/5">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center space-y-16">
                  <MetadataLabel active>PARTNERSHIP_PROTOCOL</MetadataLabel>
                  <h2 className="text-4xl md:text-8xl font-futuristic font-black uppercase tracking-tighter text-glow">
                    Aligned for <br />
                    <span className="text-white/20">Success</span>
                  </h2>
                  <p className="max-w-3xl mx-auto text-white/40 text-lg md:text-xl font-light leading-relaxed">
                    We charge an <span className="text-white font-bold">Access Fee</span> to setup your custom grid + a <span className="text-green-500 font-bold">Revenue Share</span> on every deal closed through our system.
                  </p>
                  <div className="flex justify-center pt-8">
                     <button onClick={() => setView('contact')} className="group flex items-center gap-6 px-16 py-7 border border-white/20 hover:border-green-500 transition-all font-mono text-[11px] tracking-[0.5em] uppercase glass-panel">
                       Establish_Uplink
                       <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform group-hover:text-green-500" />
                     </button>
                  </div>
                </div>
              </div>
            </section>

            <footer className="py-24 text-center relative z-10">
              <div className="flex justify-center gap-12 mb-10 opacity-10">
                <MetadataLabel active>SECURE_GRID_V3</MetadataLabel>
                <MetadataLabel active>UPTIME_100%</MetadataLabel>
              </div>
              <span className="font-mono text-[9px] tracking-[0.6em] uppercase text-white/10">© 2025 AutomationGo | Strategic Connector</span>
            </footer>
          </motion.div>
        ) : (
          <div key="page-content">
            {view === 'vision' && <VisionPage onBack={() => setView('home')} />}
            {view === 'system' && <SystemPage onBack={() => setView('home')} />}
            {view === 'portfolio' && <PortfolioPage onBack={() => setView('home')} />}
            {view === 'team' && <TeamPage onBack={() => setView('home')} />}
            {view === 'contact' && <ContactPage onBack={() => setView('home')} />}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SystemPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <PageWrapper title="System" subtitle="ENGINEERING_SPEC_V3" onBack={onBack}>
    <div className="space-y-32">
      <ConnectorVisualization />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            title: "Access & Setup", 
            desc: "Baseline fee for mapping your market grid and deploying your custom nexus.", 
            icon: <HardDrive />,
            meta: "FEE_REQUIRED"
          },
          { 
            title: "Operational Loop", 
            desc: "Continuous, automated outreach campaigns fueled by internal data pools.", 
            icon: <Activity />,
            meta: "ACTIVE_STREAM"
          },
          { 
            title: "Revenue Dividend", 
            desc: "Percentage of every deal closed shared back to fuel grid optimization.", 
            icon: <BarChart3 />,
            meta: "REV_SHARE"
          }
        ].map((step, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-12 border border-white/10 bg-white/[0.01] glass-panel cyber-border group hover:bg-green-500/[0.04] transition-colors"
          >
            <div className="flex justify-between items-start mb-10">
              <div className="text-white/20 group-hover:text-green-500 transition-colors">{step.icon}</div>
              <span className="font-mono text-[8px] tracking-widest text-white/20">{step.meta}</span>
            </div>
            <h3 className="font-futuristic text-xl uppercase mb-6 tracking-tight group-hover:text-glow">{step.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed font-light">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </PageWrapper>
);

const TeamPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <PageWrapper title="Elite" subtitle="CORE_OPERATORS" onBack={onBack}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {TEAM.map((member, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="group border border-white/5 p-12 bg-white/[0.01] glass-panel cyber-border hover:border-green-500/20 transition-all flex flex-col"
        >
          <div className="aspect-square bg-white/[0.02] mb-12 flex items-center justify-center relative overflow-hidden group-hover:bg-green-500/[0.05] transition-all">
             <span className="text-9xl font-black font-futuristic text-white/[0.02] group-hover:text-green-500/10 transition-all duration-1000 select-none">{member.initials}</span>
          </div>
          <MetadataLabel active>LOC: {member.loc}</MetadataLabel>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-futuristic text-3xl uppercase tracking-tighter group-hover:text-glow">{member.name}</h4>
            {member.linkedin && (
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/5 hover:bg-green-500/20 text-white/40 hover:text-green-500 transition-all rounded-lg border border-white/10 hover:border-green-500/40"
              >
                <Linkedin size={20} />
              </a>
            )}
          </div>
          <p className="text-white/30 font-mono text-[9px] tracking-[0.4em] uppercase mb-8">{member.role}</p>
          <p className="text-white/40 text-sm leading-relaxed font-light flex-grow">{member.bio}</p>
        </motion.div>
      ))}
    </div>
  </PageWrapper>
);

const ContactPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <PageWrapper title="Link" subtitle="ESTABLISH_UPLINK" onBack={onBack}>
    <div className="max-w-4xl py-24 glass-panel p-12 md:p-20 cyber-border">
      <MetadataLabel active>SECURE_ENTRY_POINT</MetadataLabel>
      <h3 className="font-futuristic text-3xl md:text-5xl uppercase mb-16 tracking-tighter text-white/80">Direct Terminal Access</h3>
      <a href="mailto:info@automationgo.in" className="text-3xl md:text-7xl font-futuristic font-black border-b border-white/10 pb-8 hover:text-green-500/80 transition-all block text-glow truncate">
        info@automationgo.in
      </a>
      <div className="mt-20 flex flex-wrap gap-12">
        <div>
          <span className="font-mono text-[10px] text-white/20 block mb-2 uppercase">Active</span>
          <span className="font-futuristic text-xl text-green-500/80 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
            24/7
          </span>
        </div>
        <div>
          <span className="font-mono text-[10px] text-white/20 block mb-2 uppercase">Status</span>
          <span className="font-futuristic text-xl text-green-500/60">LISTENING...</span>
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default App;