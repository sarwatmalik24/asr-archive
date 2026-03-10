import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Menu, X, Search, BookOpen, Film, Image as ImageIcon, 
  Library, ArrowRight, PlayCircle, Users, Megaphone, 
  Palette, Calendar, FileText, Quote, MoveRight, ChevronRight,
  History, Newspaper, MessageSquare, Download, Filter, Eye,
  Clock, MapPin, Tag, Share2, ExternalLink, Award, Sparkles,
  Layers, HeartHandshake, Microscope, ChevronLeft, Mail, Phone,
  Instagram, Facebook, Twitter, Globe, DownloadCloud, Info,
  Map, Lightbulb, UserCheck, Radio, Music, Heart, GraduationCap,
  Theater, Building2, BookMarked, Landmark, ScrollText, PenTool,
  ChevronDown, Zap
} from 'lucide-react';

import heroImage1 from "../src/assets/BANNERS/Banner---Holistic-Methodology.gif";
import heroImage2 from "../src/assets/BANNERS/Banner---Library.gif";
import heroImage3 from "../src/assets/BANNERS/Banner---Activism.gif";

import archivalImage1 from "../src/assets/photos/Peace/img036.jpg"
import archivalImage2 from "../src/assets/photos/Peace/img044.jpg"
import archivalImage3 from "../src/assets/photos/International/img002.jpg"
import archivalImage4 from "../src/assets/photos/Activist District/img006.jpg"

import advocacyImage from "../src/assets/photos/International/img005.jpg"

import iwslImage from "../src/assets/photos/iwsl/img092.jpg"

import herstoryImage from "../src/assets/BANNERS/Banner---Activism.gif"

import programmesImage from "../src/assets/BANNERS/Banner---Programmes.gif"

import iwslImage2 from "../src/assets/BANNERS/Banner---Library.gif"

import networkImage from "../src/assets/BANNERS/Banner---International.gif"

import advImage from "../src/assets/BANNERS/Banner---Activism.gif"

import publicationsImage from "../src/assets/BANNERS/Banner---Publications.gif"

import theatreImage from "../src/assets/BANNERS/Banner---Networks-Collaboration.gif"

import libraryImage from "../src/assets/BANNERS/Banner---Library.gif"

// --- Data Constants ---
const HERO_SLIDES = [
  {
    id: 1,
    title: "The ASR Legacy",
    italic: "Resistance",
    subtitle: "Digitalizing four decades of feminist research and political education in South Asia.",
    image: heroImage1,
    tag: "EST. 1983 — LAHORE",
    cta: "Explore Archive"
  },
  {
    id: 2,
    title: "Political Education",
    italic: "Empowerment",
    subtitle: "Documentation of the Institute of Women's Studies Lahore and its regional impact.",
    image: heroImage2,
    tag: "IWSL LEGACY",
    cta: "View Programmes"
  },
  {
    id: 3,
    title: "Visualizing Struggle",
    italic: "History",
    subtitle: "A vast repository of posters, films, and theatre records from the frontlines of activism.",
    image: heroImage3,
    tag: "CURATED COLLECTIONS",
    cta: "Browse Media"
  }
];

const PROGRAMMES_SUBMENU = [
  "ACFOD Women’s Programme",
  "WCW Programme",
  "Women and Violence Programme",
  "Peace Programme",
  "Minorities Programme",
  "Tenants, Workers, Fisher folk Programme",
  "ASR’s Programme in AJK, Gilgit – Baltistan",
  "Programme on Sexualities",
  "Women, Peace and Conflict",
  "Women and Representation",
  "Summer School Programme for Children"
];

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: null },
  { id: 'herstory', label: 'Herstory', icon: <History size={18} /> },
  { 
    id: 'programmes', 
    label: 'Programmes', 
    icon: <Users size={18} />,
    hasDropdown: true,
    subMenu: PROGRAMMES_SUBMENU
  },
  { id: 'iwsl', label: 'IWSL', icon: <GraduationCap size={18} /> },
  { id: 'network', label: 'Network and Linkages', icon: <Globe size={18} /> },
  { id: 'advocacy', label: 'Advocacy & Activism', icon: <Megaphone size={18} /> },
  { id: 'publications', label: 'Publications', icon: <BookOpen size={18} /> },
  { id: 'theatre', label: 'Theatre & Creativity', icon: <Palette size={18} /> },
  { id: 'library', label: 'Library & Archives', icon: <Library size={18} /> },
];

const ADVOCACY_MILESTONES = [
  { year: "1983", event: "Women's Action Forum", desc: "Key role in the formation and growth of WAF in Lahore." },
  { year: "1988", event: "South Asian Dialogue", desc: "Initiating regional cross-border feminist solidarities." },
  { year: "1994", event: "Beijing Platform", desc: "Leading the Pakistani civil society delegation for the UN World Conference." },
  { year: "2002", event: "Peasant Movements", desc: "Extending feminist research into agrarian rights and labor struggles." },
  { year: "2015", event: "Legal Reform", desc: "Advocating for legislative protection against harassment at the workplace." }
];

const ARCHIVAL_ITEMS = [
  {
    id: 1,
    title: "WAF Charter 1981",
    type: "Document",
    category: "Politics",
    image: archivalImage1,
    year: "1981"
  },
  {
    id: 2,
    title: "Aurat Raj Poster",
    type: "Visual",
    category: "Art",
    image: archivalImage2,
    year: "1990"
  },
  {
    id: 3,
    title: "Regional Dialogue",
    type: "Audio",
    category: "History",
    image: archivalImage3,
    year: "1988"
  },
  {
    id: 4,
    title: "Feminist Pedagogy",
    type: "Publication",
    category: "Education",
    image: archivalImage4,
    year: "1995"
  }
];

// --- Reusable UI Elements ---
const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold transition-all duration-300 rounded-full whitespace-nowrap tracking-wide";
  const variants = {
    primary: "bg-purple-900 text-white hover:bg-purple-800 shadow-xl shadow-purple-900/20 active:scale-95",
    outline: "border border-purple-200 text-purple-900 hover:bg-purple-50 active:scale-95",
    ghost: "text-purple-700 hover:text-purple-900 hover:bg-purple-100 active:scale-95",
    white: "bg-white text-purple-950 hover:bg-purple-50 shadow-lg",
    dark: "bg-stone-900 text-white hover:bg-black",
    purple: "bg-purple-900 text-white hover:bg-purple-950 shadow-lg"
  };
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeader = ({ title, subtitle, light = false, centered = false }) => (
  <div className={`mb-12 md:mb-16 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
    <h2 className={`text-4xl md:text-6xl font-light mb-6 leading-tight tracking-tight ${light ? 'text-white' : 'text-stone-900'}`}>{title}</h2>
    {subtitle && <p className={`text-lg md:text-xl leading-relaxed font-light ${light ? 'text-purple-200/80' : 'text-stone-500'}`}>{subtitle}</p>}
    <div className={`w-20 h-1.5 mt-8 ${light ? 'bg-purple-400' : 'bg-purple-600'} ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

const SubpageHeader = ({ title, italic, tag, image }) => (
  <div className="relative h-[45vh] min-h-[400px] w-full flex items-end pb-20 overflow-hidden bg-purple-950">
    <div 
      className="absolute inset-0 opacity-40 grayscale"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/40 to-transparent" />
    <div className="container mx-auto px-6 relative z-10">
      <span className="text-purple-400 tracking-[0.4em] uppercase text-[10px] font-black mb-4 block animate-in slide-in-from-left duration-700">{tag}</span>
      <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight animate-in slide-in-from-bottom duration-1000">
        {title} <span className="font-serif italic text-purple-300">{italic}</span>
      </h1>
      <div className="w-16 h-1 bg-purple-500 mt-8" />
    </div>
  </div>
);

// --- Master Page Controller ---
const MasterContent = ({ currentPath, currentSubPath, navigateTo }) => {
  switch (currentPath) {
    case 'home': return <HomePage navigateTo={navigateTo} />;
    case 'herstory': return <HerstoryPage />;
    case 'programmes': return <ProgrammesPage currentSubPath={currentSubPath} />;
    case 'iwsl': return <IWSLPage />;
    case 'network': return <NetworkPage />;
    case 'advocacy': return <AdvocacyActivismPage />;
    case 'publications': return <PublicationsPage />;
    case 'theatre': return <TheatreCreativityPage />;
    case 'library': return <LibraryArchivePage />;
    default: return <HomePage navigateTo={navigateTo} />;
  }
};

// --- Page Components ---

const HerstoryPage = () => (
  <div className="bg-white">
    <SubpageHeader title="ASR" italic="Herstory" tag="Founded 1983" image={herstoryImage} />
    <section className="py-24 container mx-auto px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <p className="text-2xl font-light leading-relaxed text-stone-800">
          Applied Social Research (ASR) was founded by Nighat Said Khan and a collective of activists in 1983, a time when political dissent was high-risk but essential.
        </p>
        <div className="grid md:grid-cols-2 gap-12 text-stone-600 leading-relaxed font-light">
          <div className="space-y-6">
            <h3 className="text-xs font-black text-purple-900 uppercase tracking-widest">Our Roots</h3>
            <p>Born out of the need for an independent, non-hierarchical space for feminist thought, ASR became the nucleus for regional organizing. We didn't just document the movement; we were the movement's laboratory.</p>
            <p>In the early 80s, amidst institutionalized patriarchy, ASR provided a sanctuary for political education, research, and grassroots mobilization.</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-xs font-black text-purple-900 uppercase tracking-widest">The Evolution</h3>
            <p>From a small resource center in Lahore, we evolved into a regional powerhouse for feminist pedagogical transformation. Our journey is one of persistence—building counter-narratives and alternative structures of knowledge.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ProgrammesPage = ({ currentSubPath }) => (
  <div className="bg-stone-50">
    <SubpageHeader 
      title={currentSubPath || "Our"} 
      italic={currentSubPath ? "" : "Programmes"} 
      tag="Engagement & Impact" 
      image={programmesImage}
    />
    <section className="py-24 container mx-auto px-6">
      {currentSubPath ? (
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader title={currentSubPath} subtitle="Detailed archival records and documentation for this specific programme are being digitized and will be available soon in our repository." centered />
          <Button variant="outline" onClick={() => window.history.back()}>Go Back</Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <PenTool />, title: "Political Education", desc: "Training young activists in constitutional rights, gender theory, and community organizing." },
            { icon: <Microscope />, title: "Feminist Research", desc: "Interdisciplinary studies on labor, class, and the history of women's movements in Pakistan." },
            { icon: <Landmark />, title: "Institutional Building", desc: "Mentoring new autonomous organizations to build a resilient civil society network." },
            { icon: <Theater />, title: "Creative Activism", desc: "Using arts and performance as a medium for communicating complex socio-political issues." },
            { icon: <MessageSquare />, title: "Conflict Resolution", desc: "Regional dialogues focused on women's role in peace-building and trans-border solidarity." },
            { icon: <ScrollText />, title: "Digital Archiving", desc: "Systematic preservation of historical records for future generations of scholars and activists." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-stone-200 hover:border-purple-300 transition-all group shadow-sm hover:shadow-xl">
              <div className="text-purple-700 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-stone-500 font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  </div>
);

const IWSLPage = () => (
  <div className="bg-white">
    <SubpageHeader title="Institute of" italic="Women's Studies" tag="Lahore" image={iwslImage2} />
    <section className="py-24 container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-light mb-8">Redefining education through a <span className="font-serif italic text-purple-900">feminist lens</span>.</h2>
          <div className="space-y-6 text-stone-600 font-light leading-relaxed">
            <p>IWSL is the first dedicated institute for Women's Studies in Pakistan. We bridge the gap between academic theory and grassroots activism, creating a space where knowledge is a tool for liberation.</p>
            <p>Our courses attract students from across South Asia, fostering a unique regional perspective on patriarchy, labor, and social justice.</p>
            <div className="pt-8 flex gap-4">
              <Button variant="purple">Certificate Courses</Button>
              <Button variant="outline">Download Prospectus</Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square bg-purple-900 rounded-[2rem] flex flex-col items-center justify-center text-white p-6">
            <span className="text-4xl font-serif italic mb-2">1500+</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-purple-300">Graduates</span>
          </div>
          <div className="aspect-square bg-stone-100 rounded-[2rem] flex flex-col items-center justify-center text-stone-900 p-6">
            <span className="text-4xl font-serif italic mb-2">1998</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Year Est.</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const NetworkPage = () => (
  <div className="bg-stone-50">
    <SubpageHeader title="Network &" italic="Linkages" tag="Regional Solidarity" image={networkImage} />
    <section className="py-24 container mx-auto px-6">
      <SectionHeader title="A Front Without Borders" subtitle="Our strength lies in our regional and international linkages. ASR is part of a global movement for justice." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {['Sangat (Regional)', 'WAF (Pakistan)', 'AWID', 'DAWN', 'UN Women', 'WOREC (Nepal)', 'Nari Pokkho', 'WERC (Sri Lanka)'].map((n, i) => (
          <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center text-center font-bold text-stone-400 grayscale hover:grayscale-0 hover:text-purple-900 transition-all cursor-pointer">
            {n}
          </div>
        ))}
      </div>
    </section>
  </div>
);

const AdvocacyActivismPage = () => (
  <div className="bg-white">
    <SubpageHeader title="Advocacy &" italic="Activism" tag="Resistance" image={advImage} />
    <section className="py-24 container mx-auto px-6 max-w-5xl">
      <div className="space-y-24">
        {ADVOCACY_MILESTONES.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-12 group">
            <div className="md:w-1/4">
              <span className="text-6xl font-serif italic text-purple-100 group-hover:text-purple-900 transition-colors">{item.year}</span>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-3xl font-light mb-4">{item.event}</h3>
              <p className="text-stone-500 font-light text-lg leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const PublicationsPage = () => (
  <div className="bg-stone-50">
    <SubpageHeader title="ASR" italic="Publications" tag="Feminist Press" image={publicationsImage} />
    <section className="py-24 container mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          { title: "Women in Pakistan", year: "2015", cat: "Theory" },
          { title: "Peasant Revolts", year: "2012", cat: "History" },
          { title: "Labour Struggles", year: "2018", cat: "Research" },
          { title: "Feminist Voices", year: "2005", cat: "Sociology" },
          { title: "Posters of Dissent", year: "2021", cat: "Arts" },
          { title: "WAF: A History", year: "2000", cat: "Archive" }
        ].map((pub, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[3/4] bg-stone-200 mb-6 rounded-[2rem] overflow-hidden shadow-sm group-hover:shadow-xl transition-all relative">
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center opacity-40">
                <BookMarked size={48} className="text-stone-400" />
              </div>
            </div>
            <span className="text-purple-600 font-black text-[10px] uppercase tracking-widest">{pub.cat}</span>
            <h4 className="text-xl font-bold mt-2 group-hover:text-purple-900 transition-colors">{pub.title}</h4>
            <p className="text-stone-400 text-sm mt-1">{pub.year}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const TheatreCreativityPage = () => (
  <div className="bg-white">
    <SubpageHeader title="Theatre &" italic="Creativity" tag="Culture" image={theatreImage} />
    <section className="py-24 container mx-auto px-6 text-center max-w-4xl">
      <h2 className="text-4xl font-light mb-12">Art is not a mirror to reflect reality, but a <span className="font-serif italic text-purple-900">hammer with which to shape it</span>.</h2>
      <p className="text-stone-600 font-light text-xl leading-relaxed mb-20">
        ASR pioneered street theatre in Pakistan as a means of political communication. We use visual arts, music, and performance to simplify complex socio-legal concepts for community mobilization.
      </p>
      <div className="grid md:grid-cols-2 gap-8 text-left">
        <div className="p-12 bg-purple-50 rounded-[3rem]">
          <Theater className="text-purple-900 mb-6" />
          <h4 className="text-2xl font-bold mb-4">Street Theatre</h4>
          <p className="text-stone-500 font-light leading-relaxed">Collaborative performances in villages and factories focusing on labor rights and domestic violence.</p>
        </div>
        <div className="p-12 bg-stone-50 rounded-[3rem]">
          <Palette className="text-stone-900 mb-6" />
          <h4 className="text-2xl font-bold mb-4">Visual Archives</h4>
          <p className="text-stone-500 font-light leading-relaxed">A collection of posters, screen-prints, and banners that documented four decades of protests.</p>
        </div>
      </div>
    </section>
  </div>
);

const LibraryArchivePage = () => (
  <div className="bg-stone-50">
    <SubpageHeader title="Library &" italic="Archives" tag="The Living Record" image={libraryImage} />
    <section className="py-24 container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <div className="p-10 bg-purple-900 text-white rounded-[2.5rem] shadow-2xl mb-8">
            <h4 className="text-2xl font-bold mb-4">Archive Search</h4>
            <div className="relative mt-6">
              <input type="text" placeholder="Search the collection..." className="w-full bg-purple-800 border-none rounded-full py-4 pl-12 pr-6 text-sm focus:ring-2 focus:ring-purple-400 outline-none" />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" size={18} />
            </div>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] border border-stone-200">
            <h5 className="font-bold mb-6">Catalogue Highlights</h5>
            <ul className="space-y-4 text-stone-500 font-light text-sm">
              <li className="flex justify-between border-b pb-4"><span>Rare Manuscripts</span> <span className="font-bold text-stone-900">420</span></li>
              <li className="flex justify-between border-b pb-4"><span>WAF Minutes</span> <span className="font-bold text-stone-900">12k Pages</span></li>
              <li className="flex justify-between pb-2"><span>Audio Tapes</span> <span className="font-bold text-stone-900">800+</span></li>
            </ul>
          </div>
        </div>
        <div className="lg:w-2/3">
          <SectionHeader title="Digital Repository" subtitle="Access thousands of documents currently being restored and tagged for public research." />
          <div className="grid md:grid-cols-2 gap-8">
            {ARCHIVAL_ITEMS.map(item => (
              <div key={item.id} className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-lg transition-all">
                <img src={item.image} className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all" />
                <div className="p-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-purple-600">{item.type}</span>
                  <h4 className="text-lg font-bold mt-1">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

// --- Hero Slider & Homepage Components ---
const HeroSlider = ({ navigateTo }) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-stone-900">
      {HERO_SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 scale-105 transition-transform duration-[7000ms] ease-linear"
               style={{ 
                 transform: index === current ? 'scale(1.15)' : 'scale(1)',
                 backgroundImage: `url(${slide.image})`,
                 backgroundPosition: 'center',
                 backgroundSize: 'cover'
               }}>
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent"></div>
          </div>

          <div className="relative h-full container mx-auto px-6 flex items-center">
            <div className={`max-w-3xl transition-all duration-700 delay-300 transform ${
              index === current ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <div className="flex items-center space-x-4 mb-8">
                <span className="w-12 h-[2px] bg-purple-500"></span>
                <span className="text-purple-400 tracking-[0.4em] uppercase text-xs font-black">{slide.tag}</span>
              </div>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-light text-white leading-[1] mb-8 tracking-tighter">
                {slide.title} <br/>
                <span className="font-serif italic text-purple-400">{slide.italic}</span>
              </h1>
              <p className="text-lg md:text-xl text-stone-300 mb-12 leading-relaxed font-light max-w-xl">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button onClick={() => navigateTo('library')} variant="white" className="!rounded-none !px-12">
                  {slide.cta} <MoveRight className="ml-3 w-5 h-5" />
                </Button>
                <Button variant="ghost" className="text-white hover:bg-white/10 !rounded-none" onClick={() => navigateTo('publications')}>
                  Browse Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-12 right-6 md:right-12 z-20 flex items-center space-x-4">
        <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all duration-300">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all duration-300">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

const HomePage = ({ navigateTo }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <HeroSlider navigateTo={navigateTo} />

      {/* Mission & Stats */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-2/5">
              <h3 className="text-purple-900 text-xs font-black uppercase tracking-[0.4em] mb-6">The Mission</h3>
              <p className="text-4xl md:text-5xl font-light text-stone-900 leading-[1.2] mb-10">
                Preserving the collective memory of <span className="font-serif italic">feminist thought</span>.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-serif italic text-purple-900 mb-2">40+</div>
                  <p className="text-stone-400 text-xs uppercase font-bold tracking-widest">Years of Activism</p>
                </div>
                <div>
                  <div className="text-4xl font-serif italic text-purple-900 mb-2">12k+</div>
                  <p className="text-stone-400 text-xs uppercase font-bold tracking-widest">Archived Items</p>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 grid md:grid-cols-2 gap-12">
              <div className="bg-stone-50 p-10 rounded-[2rem] border border-stone-100">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 text-purple-800 shadow-sm">
                  <History size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-stone-900">Archival Preservation</h4>
                <p className="text-stone-500 leading-relaxed font-light">
                  Digitizing rare pamphlets, posters, and meeting minutes from the early days of WAF and labor movements to ensure history is never erased.
                </p>
              </div>
              <div className="bg-stone-50 p-10 rounded-[2rem] border border-stone-100">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 text-purple-800 shadow-sm">
                  <Microscope size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-stone-900">Radical Research</h4>
                <p className="text-stone-500 leading-relaxed font-light">
                  Providing access to published works and unpublished papers that challenge mainstream narratives of South Asian history and gender.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Advocacy Section - Light Purple Background */}
      <section className="py-32 bg-purple-50 text-stone-900 relative overflow-hidden">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200/50 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100/50 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-0.5 bg-purple-600" />
                <span className="text-purple-600 text-[10px] font-black uppercase tracking-[0.5em]">The Frontline</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light leading-tight tracking-tighter">
                Advocacy in <span className="font-serif italic text-purple-900">Action</span>
              </h2>
              <p className="mt-8 text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Moving beyond the archive—taking decades of feminist research into the streets and the halls of power to demand systemic change.
              </p>
            </div>
            <button 
              onClick={() => navigateTo('advocacy')}
              className="group flex items-center gap-4 bg-white hover:bg-purple-900 border border-purple-100 hover:border-purple-800 px-8 py-5 rounded-full transition-all duration-500 shadow-xl shadow-purple-900/5"
            >
              <span className="text-sm font-bold tracking-widest uppercase group-hover:text-white">Explore All Initiatives</span>
              <div className="bg-purple-50 p-2 rounded-full group-hover:bg-white group-hover:text-purple-900 transition-colors">
                <ArrowRight size={20} className="text-purple-900" />
              </div>
            </button>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Interactive Visual / Featured Milestone */}
            <div className="lg:col-span-7 relative group cursor-pointer">
              <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden relative shadow-2xl ring-1 ring-purple-100 bg-purple-100">
                <img 
                  src={advocacyImage}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  alt="Women Organising and Advocating" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
                
                {/* Floating Meta Tag */}
                <div className="absolute top-8 left-8 flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-xl rounded-full border border-purple-50 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-900">Featured Campaign</span>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <div className="text-4xl font-serif italic text-purple-300 mb-2">1994</div>
                  <h3 className="text-3xl font-bold tracking-tight mb-4 text-white">Beijing Platform for Action</h3>
                  <p className="text-purple-100 font-light max-w-md line-clamp-2">Leading the Pakistani civil society delegation to the United Nations World Conference on Women.</p>
                </div>
              </div>
            </div>

            {/* Scrolling Milestones List */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {ADVOCACY_MILESTONES.slice(0, 4).map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-8 p-8 bg-white hover:bg-purple-900 rounded-3xl border border-purple-100 hover:border-purple-800 transition-all duration-500 group shadow-sm hover:shadow-2xl"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-900 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                      <Zap size={24} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-xs font-black uppercase tracking-widest text-purple-600 group-hover:text-purple-300 transition-colors">{item.year}</span>
                      <div className="w-1 h-1 rounded-full bg-stone-200 group-hover:bg-purple-400" />
                      <span className="text-xs font-bold text-stone-400 group-hover:text-purple-300 uppercase tracking-widest">Milestone</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors">{item.event}</h4>
                    <p className="text-stone-500 font-light text-sm leading-relaxed group-hover:text-purple-100/70 transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Archival Highlights */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeader 
              title="Archival Highlights" 
              subtitle="A window into the rare collections currently being digitized from our vault."
            />
            <div className="flex gap-4 mb-8 overflow-x-auto pb-4 w-full md:w-auto">
              {['All', 'Document', 'Visual', 'Audio'].map(cat => (
                <button key={cat} className="px-6 py-2 rounded-full border border-stone-100 text-xs font-black uppercase tracking-widest hover:bg-purple-900 hover:text-white transition-all whitespace-nowrap">
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ARCHIVAL_ITEMS.map(item => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-stone-100">
                  <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={item.title} />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-purple-900">
                    {item.year}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <Button variant="white" className="!py-2 !px-4 !text-[10px] w-full">View Item</Button>
                  </div>
                </div>
                <span className="text-purple-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">{item.type}</span>
                <h4 className="text-xl font-bold text-stone-900 group-hover:text-purple-800 transition-colors">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institute of Women's Studies Lahore Section - Dark Purple Background */}
      <section id="iwsl-section" className="py-32 bg-purple-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
                <GraduationCap className="text-purple-300 w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-100">The Academic Arm</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light mb-10 leading-[1.1] tracking-tight text-white">
                Institute of Women's <br/>
                <span className="font-serif italic text-purple-300">Studies Lahore</span>
              </h2>
              <p className="text-purple-100/80 text-lg leading-relaxed mb-12 font-light max-w-xl">
                Established as the first of its kind in Pakistan, IWSL provides a radical space for intellectual inquiry and feminist pedagogy. Our curriculum bridges the gap between grassroots activism and academic theory.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">Post-Graduate Diploma</h4>
                  <p className="text-sm text-purple-200/60 font-light">Comprehensive 1-year immersion in gender studies and social theory.</p>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">Short Courses</h4>
                  <p className="text-sm text-purple-200/60 font-light">Modular sessions on labor rights, constitutional law, and media literacy.</p>
                </div>
              </div>
              <Button variant="white" onClick={() => navigateTo('iwsl')}>Explore Curriculum</Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img src={iwslImage} className="w-full h-full object-cover grayscale" alt="IWSL Classroom" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 p-12 bg-purple-800 rounded-[2rem] hidden md:block shadow-2xl">
                 <div className="text-5xl font-serif italic text-white mb-2">1998</div>
                 <p className="text-purple-100 text-xs font-black uppercase tracking-widest">Year Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section by Nighat Said Khan - Light Purple Background */}
      <section className="py-40 bg-purple-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[30rem] font-serif italic text-purple-100/40 select-none -z-0 leading-none pointer-events-none">“</div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Quote className="w-16 h-16 text-purple-200 mx-auto mb-12" />
            <h2 className="text-3xl md:text-5xl font-light text-purple-950 leading-[1.4] mb-16 tracking-tight">
              "Feminism for us is not just a theory; it is a lived <span className="font-serif italic text-purple-800">political practice</span>. We must document our struggles, or they will be written out of history by those who seek to silence us."
            </h2>
            <div className="w-20 h-0.5 bg-purple-200 mx-auto mb-8"></div>
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold text-purple-900 mb-2">Nighat Said Khan</p>
              <p className="text-purple-400 text-xs uppercase font-black tracking-[0.3em]">Executive Director & Founder, ASR</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Nav Item with Dropdown Logic ---
const NavDropdown = ({ item, currentPath, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => navigateTo(item.id)}
        className={`px-4 py-2 text-[10px] font-black tracking-widest uppercase transition-all rounded-full flex items-center gap-2 ${
          currentPath === item.id 
            ? 'text-purple-900 bg-purple-50' 
            : 'text-stone-500 hover:text-purple-700 hover:bg-stone-50'
        }`}
      >
        {item.label}
        {item.hasDropdown && <ChevronDown size={12} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />}
      </button>

      {item.hasDropdown && (
        <div className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
        }`}>
          <div className="bg-white border border-stone-100 shadow-xl rounded-2xl py-3 min-w-[280px] overflow-hidden">
            {item.subMenu.map((sub, idx) => (
              <button
                key={idx}
                onClick={() => {
                  navigateTo(item.id, sub);
                  setIsOpen(false);
                }}
                className="w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-wider text-stone-500 hover:text-purple-900 hover:bg-purple-50 transition-colors border-b last:border-none border-stone-50"
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main App ---
export default function App() {
  const [currentPath, setCurrentPath] = useState('home');
  const [currentSubPath, setCurrentSubPath] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);

  const navigateTo = (path, subPath = null) => {
    setCurrentPath(path);
    setCurrentSubPath(subPath);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-white">
      {/* MANDATORY STICKY HEADER */}
      <header className="sticky top-0 w-full z-[100] bg-white border-b border-stone-100 py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col cursor-pointer" onClick={() => navigateTo('home')}>
            <span className="text-3xl font-bold tracking-tighter text-purple-950">ASR</span>
            <span className="text-[9px] tracking-[0.4em] uppercase font-black text-purple-400">Resource Centre</span>
          </div>

          <nav className="hidden xl:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <NavDropdown 
                key={item.id} 
                item={item} 
                currentPath={currentPath} 
                navigateTo={navigateTo} 
              />
            ))}
          </nav>

          <button className="xl:hidden p-2 text-purple-950" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-[150] transition-all duration-500 ${
            isMobileMenuOpen ? 'visible' : 'invisible'
          }`}
        >
          <div 
            className={`absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity duration-500 ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`} 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div 
            className={`absolute top-0 right-0 h-full w-[85%] max-w-[360px] bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex justify-between items-center px-8 py-6 border-b border-stone-100">
              <span className="text-sm font-black text-purple-950 tracking-widest uppercase">Navigation</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-stone-50 rounded-full transition-colors">
                <X size={20} className="text-stone-500" />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto px-4 py-8">
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map(item => (
                  <div key={item.id} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => navigateTo(item.id)} 
                        className={`flex-grow flex items-center gap-4 px-4 py-4 rounded-xl text-left text-sm font-bold tracking-tight transition-all ${
                          currentPath === item.id ? 'text-purple-900 bg-purple-50' : 'text-stone-500'
                        }`}
                      >
                        {item.label}
                      </button>
                      {item.hasDropdown && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedMobileItem(expandedMobileItem === item.id ? null : item.id);
                          }}
                          className="px-4 h-full text-stone-400"
                        >
                          <ChevronDown size={18} className={`transition-transform duration-300 ${expandedMobileItem === item.id ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    {item.hasDropdown && expandedMobileItem === item.id && (
                      <div className="bg-stone-50 rounded-xl mb-2 mx-2">
                        {item.subMenu.map((sub, idx) => (
                          <button
                            key={idx}
                            onClick={() => navigateTo(item.id, sub)}
                            className="w-full text-left px-10 py-3 text-[11px] font-bold text-stone-500 border-b border-stone-100 last:border-none"
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow relative z-0">
        <MasterContent currentPath={currentPath} currentSubPath={currentSubPath} navigateTo={navigateTo} />
      </main>

      <footer className="bg-purple-950 text-white pt-24 pb-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <span className="text-4xl font-bold tracking-tighter block mb-6">ASR</span>
              <p className="text-purple-200/60 text-sm font-light leading-relaxed">
                A pioneer in feminist research, political education, and social activism in South Asia since 1983.
              </p>
            </div>
            <div className="lg:col-span-2">
              <h4 className="text-xs font-black uppercase tracking-widest text-purple-400 mb-8">Navigation</h4>
              <div className="grid grid-cols-2 gap-4 text-sm font-light text-purple-100/70">
                {NAV_ITEMS.map(item => (
                  <button key={item.id} onClick={() => navigateTo(item.id)} className="text-left hover:text-white transition-colors">
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-purple-400 mb-8">Contact & Social</h4>
              <p className="text-sm font-light text-purple-100/70 mb-6">Gulberg III, Lahore, Pakistan<br/>asr@brain.net.pk</p>
              <div className="flex space-x-6 text-purple-300">
                <Instagram size={20} className="hover:text-white cursor-pointer" /> 
                <Facebook size={20} className="hover:text-white cursor-pointer" /> 
                <Twitter size={20} className="hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <p className="pt-12 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-purple-400/50 flex flex-col md:flex-row justify-between gap-4">
            <span>&copy; {new Date().getFullYear()} ASR Resource Centre & IWSL Lahore.</span>
            <span>Digital Archive for Social Change</span>
          </p>
        </div>
      </footer>
    </div>
  );
}