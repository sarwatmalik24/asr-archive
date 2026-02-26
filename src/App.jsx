import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, BookOpen, Film, Image as ImageIcon, 
  Library, ArrowRight, PlayCircle, Users, Megaphone, 
  Palette, Calendar, FileText, Quote, MoveRight, ChevronRight,
  History, Newspaper, MessageSquare, Download, Filter, Eye,
  Clock, MapPin, Tag, Share2, ExternalLink, Award, Sparkles,
  Layers, HeartHandshake, Microscope
} from 'lucide-react';

// --- Navigation Data ---
const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: null },
  { id: 'programmes', label: 'Programmes', icon: <Users size={18} /> },
  { id: 'network', label: 'Network & Linkages', icon: <Globe size={18} /> },
  { id: 'advocacy', label: 'Advocacy & Activism', icon: <Megaphone size={18} /> },
  { id: 'research', label: 'Research', icon: <FileText size={18} /> },
  { id: 'publications', label: 'Publications', icon: <BookOpen size={18} /> },
  { id: 'film-unit', label: 'Film Unit', icon: <Film size={18} /> },
  { id: 'theatre', label: 'Theatre & Creativity', icon: <Palette size={18} /> },
  { id: 'cultural-events', label: 'Cultural Events', icon: <Calendar size={18} /> },
  { id: 'library', label: 'Library & Archives', icon: <Library size={18} /> },
];

function Globe(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
    </svg>
  );
}

// --- Mock Data ---
const PUBLICATIONS_DATA = [
  { id: 1, title: "Locating the Self", author: "Nighat Said Khan", year: "1994", category: "Theory", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400" },
  { id: 2, title: "Unveiling the Issues", author: "Edited by ASR", year: "1995", category: "Anthology", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400" },
  { id: 3, title: "Feminist Narratives", author: "ASR Collection", year: "1988", category: "History", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400" },
];

const FILM_DATA = [
  { id: 1, title: "Zia and the Women", duration: "45 min", year: "1988", description: "A documentary on the legislative changes affecting women during the Zia regime.", thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "Theatre for Change", duration: "30 min", year: "1992", description: "Documentation of street theatre performances across rural Punjab.", thumbnail: "https://images.unsplash.com/photo-1503095396549-807759c4bc0e?auto=format&fit=crop&q=80&w=600" },
];

// --- Reusable UI Elements ---

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold transition-all duration-300 rounded-full whitespace-nowrap tracking-wide";
  const variants = {
    primary: "bg-purple-900 text-white hover:bg-purple-800 shadow-xl shadow-purple-900/20 active:scale-95",
    outline: "border border-purple-200 text-purple-900 hover:bg-purple-50 active:scale-95",
    ghost: "text-purple-700 hover:text-purple-900 hover:bg-purple-100 active:scale-95",
    white: "bg-white text-purple-950 hover:bg-purple-50 shadow-lg"
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

// --- Home Page Components ---

const HomePage = ({ navigateTo }) => {
  const handleImgError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1200";
  };

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-purple-50 overflow-hidden pt-28 pb-12">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-purple-100/30 lg:clip-path-slant hidden sm:block"></div>
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl order-2 lg:order-1">
            <div className="flex items-center space-x-2 mb-6">
              <span className="w-8 h-[2px] bg-purple-600"></span>
              <span className="text-purple-600 tracking-[0.3em] uppercase text-xs font-black">EST. 1983 — Lahore</span>
            </div>
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-light text-stone-900 leading-[1] mb-8 tracking-tighter">
              The <span className="font-serif italic text-purple-800">ASR</span> <br/>
              Legacy.
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-relaxed font-light">
              Digitalizing four decades of resistance, feminist research, and political education across South Asia.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button onClick={() => navigateTo('library')}>
                Explore The Archive <MoveRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" onClick={() => navigateTo('publications')}>
                Browse Publications
              </Button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl bg-purple-200 aspect-[4/5] lg:aspect-auto lg:h-[750px]">
              <img 
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1200" 
                alt="Archive collection" 
                className="w-full h-full object-cover"
                onError={handleImgError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <p className="text-xs uppercase tracking-[0.4em] font-black mb-3 opacity-80">Featured Collection</p>
                <h3 className="text-3xl md:text-4xl font-serif italic">Women's Struggle (1983-1999)</h3>
                <p className="mt-4 text-purple-200/70 text-sm max-w-sm">Rare documentation of early WAF meetings and street protests in Lahore.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Archival Highlights Grid */}
      <section className="py-32 bg-stone-50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Archival Highlights" 
            subtitle="Curated windows into the most significant moments stored within our digital vaults."
            centered
          />
          <div className="grid md:grid-cols-4 gap-4 md:h-[800px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2rem] cursor-pointer">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/20 to-transparent p-10 flex flex-col justify-end">
                <span className="text-[10px] uppercase font-black text-purple-400 tracking-[0.4em] mb-4">Posters & Visuals</span>
                <h4 className="text-3xl text-white font-serif italic mb-2">Street Art of Resistance</h4>
                <p className="text-purple-200/60 text-sm max-w-sm">Hand-painted protest posters from the 1980s anti-discrimination marches.</p>
              </div>
            </div>
            <div className="md:col-span-2 relative group overflow-hidden rounded-[2rem] cursor-pointer">
              <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-purple-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-12 text-center text-white">
                <div>
                  <BookOpen className="mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Rare Manuscripts</h4>
                  <p className="text-xs text-purple-200">Early drafts of feminist theory papers published by ASR.</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-[2rem] cursor-pointer">
              <img src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-purple-900/40"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] font-bold tracking-widest uppercase">Theatre Records</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-[2rem] cursor-pointer">
              <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-purple-900/40"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] font-bold tracking-widest uppercase">Field Recordings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Institute (IWSL) Spotlight */}
      <section className="py-32 bg-purple-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center space-x-3 text-purple-400 mb-8">
                <Award size={20} />
                <span className="text-xs font-black uppercase tracking-[0.4em]">Educational Legacy</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">Institute of Women's <span className="font-serif italic">Studies</span> Lahore.</h2>
              <p className="text-purple-200/70 text-lg md:text-xl font-light leading-relaxed mb-12">
                Founded in 1998, IWSL has been the cornerstone of feminist education in Pakistan, offering courses that merge theory with transformative social practice.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="border-l-2 border-purple-500 pl-6">
                  <h4 className="text-xl font-bold mb-2">Diplomas & Degrees</h4>
                  <p className="text-sm text-purple-300/60">Comprehensive curricula covering political economy, sociology, and gender.</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-6">
                  <h4 className="text-xl font-bold mb-2">Resource Network</h4>
                  <p className="text-sm text-purple-300/60">Connecting thousands of alumnae working in civil society across South Asia.</p>
                </div>
              </div>
              <Button variant="white" onClick={() => navigateTo('programmes')}>Explore Courses</Button>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-3xl bg-white/10 p-4 border border-white/10">
                <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800" className="rounded-[2.5rem] w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2rem] shadow-2xl text-stone-900 hidden md:block">
                <p className="text-4xl font-serif italic mb-1 text-purple-900">25+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Years of Education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advocacy Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-stone-100">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  alt="Advocacy" 
                  onError={handleImgError}
                />
              </div>
              <div className="absolute -top-10 -right-10 bg-purple-50 p-8 rounded-[2rem] border border-purple-100 hidden lg:block">
                <Megaphone size={40} className="text-purple-600 mb-4" />
                <p className="text-xs font-bold text-stone-400">Voices of Freedom</p>
              </div>
          </div>
          <div>
            <SectionHeader 
              title="Advocacy & Activism" 
              subtitle="The history of ASR is written on the streets. Explore the posters, flyers, and manifestos that powered movements."
            />
            <div className="space-y-6 mb-12">
              {[
                { label: 'WAF Records', desc: 'Minutes and manifestos from 1983 onwards.' },
                { label: 'Labor Archives', desc: 'Documentation of peasant and factory worker movements.' },
                { label: 'Legal Review', desc: 'Constitutional advocacy and judicial challenges.' }
              ].map((item, i) => (
                <div key={i} className="flex space-x-6 items-start">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 shrink-0 font-bold">0{i+1}</div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-1">{item.label}</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button onClick={() => navigateTo('advocacy')} variant="primary">Access Archives</Button>
          </div>
        </div>
      </section>

      {/* Regional Impact Map */}
      <section className="py-32 bg-stone-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader 
            title="A South Asian Pulse" 
            subtitle="ASR has always looked beyond borders, fostering a regional feminist identity through its networks and linkages."
            light
            centered
          />
          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid md:grid-cols-5 gap-4">
               {['Pakistan', 'India', 'Bangladesh', 'Nepal', 'Sri Lanka'].map((country) => (
                 <div key={country} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-purple-900 transition-colors group cursor-default">
                   <h4 className="text-xl font-serif italic mb-2 group-hover:scale-110 transition-transform">{country}</h4>
                   <div className="w-8 h-[1px] bg-purple-500 mx-auto opacity-40"></div>
                 </div>
               ))}
            </div>
          </div>
          <div className="inline-flex items-center space-x-12 text-stone-500">
             <div className="text-center">
               <p className="text-3xl text-white font-light">50+</p>
               <p className="text-[10px] uppercase font-bold tracking-widest mt-1">Cross-Border Workshops</p>
             </div>
             <div className="w-px h-10 bg-white/10"></div>
             <div className="text-center">
               <p className="text-3xl text-white font-light">12</p>
               <p className="text-[10px] uppercase font-bold tracking-widest mt-1">Regional Networks</p>
             </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-40 bg-purple-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <Quote size={500} />
        </div>
        <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
          <Quote className="mx-auto text-purple-400 w-16 h-16 mb-12" />
          <h2 className="text-4xl md:text-6xl font-serif italic leading-[1.15] mb-12">
            "History is not just about what happened, but about who was allowed to tell the story. We are reclaiming our own narrative."
          </h2>
          <div className="flex flex-col items-center">
             <div className="w-16 h-[1px] bg-purple-400 mb-6"></div>
             <p className="text-purple-300 font-black uppercase tracking-[0.4em] text-sm">— Nighat Said Khan</p>
          </div>
        </div>
      </section>

      {/* Contribute / Newsletter */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-purple-50 rounded-[3.5rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-24 h-24 bg-purple-100 rounded-br-full opacity-50"></div>
             <div className="lg:w-1/2 relative z-10">
               <h3 className="text-4xl md:text-5xl font-light text-stone-900 mb-6">Contribute to the <span className="font-serif italic text-purple-800">Archive</span>.</h3>
               <p className="text-stone-500 text-lg leading-relaxed font-light mb-10">
                 Do you have photographs, pamphlets, or memories from the South Asian feminist movement? Help us build a more complete history.
               </p>
               <div className="flex flex-wrap gap-4">
                 <Button variant="primary">Donate Records</Button>
                 <Button variant="outline">Volunteer</Button>
               </div>
             </div>
             <div className="lg:w-1/2 w-full">
               <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-purple-100">
                 <h4 className="text-xl font-bold mb-6 text-stone-900">Stay Updated</h4>
                 <p className="text-stone-400 text-sm mb-8">Receive monthly digests of newly digitized collections and research.</p>
                 <div className="flex flex-col sm:flex-row gap-4">
                   <input type="email" placeholder="Email address" className="flex-grow bg-stone-50 border border-stone-200 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-purple-500" />
                   <Button variant="primary" className="px-10">Join</Button>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Other Pages Controller ---

const MasterContent = ({ currentPath, icon, title }) => {
  const renderSpecificContent = () => {
    switch (currentPath) {
      case 'programmes': return <ProgrammesPage />;
      case 'network': return <NetworkPage />;
      case 'advocacy': return <AdvocacyPage />;
      case 'research': return <ResearchPage />;
      case 'publications': return <PublicationsPage />;
      case 'film-unit': return <FilmUnitPage />;
      case 'theatre': return <TheatrePage />;
      case 'cultural-events': return <CulturalEventsPage />;
      case 'library': return <LibraryPage />;
      default: return (
        <div className="p-12 md:p-24 border-2 border-dashed border-purple-100 rounded-3xl text-center bg-purple-50/30">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Library className="w-10 h-10 text-purple-300" />
          </div>
          <h3 className="text-2xl font-medium text-purple-900 mb-4">Archive Under Review</h3>
          <p className="text-stone-500 max-w-lg mx-auto leading-relaxed">
            The {title} collection is currently undergoing high-resolution digitization. Please check back soon for our full digital repository access.
          </p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white py-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-10 mb-20 border-b border-stone-50 pb-20">
          <div className="w-24 h-24 bg-purple-100 text-purple-800 rounded-[2rem] flex items-center justify-center shadow-inner shrink-0">
            {icon || <Library size={40} />}
          </div>
          <div className="flex-grow">
            <div className="flex items-center space-x-3 text-purple-500 mb-3">
              <History size={16} />
              <span className="text-[10px] uppercase font-black tracking-[0.4em]">Digital Repository</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-stone-900 mb-4">{title}</h1>
            <p className="text-stone-400 text-lg max-w-3xl leading-relaxed font-light">
              Explore our historic archives, preserving feminist research, artistic expressions, and the documentation of social movements in Pakistan since 1983.
            </p>
          </div>
        </div>
        {renderSpecificContent()}
      </div>
    </div>
  );
};

// --- Page Specific Views ---

const ProgrammesPage = () => (
  <div className="space-y-16">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: "Institute of Women's Studies Lahore (IWSL)", period: "Since 1998", desc: "A formal educational body providing certificate and diploma courses in feminist theory and practice." },
        { title: "Political Education Series", period: "1984-Present", desc: "Training modules and workshops designed for grassroots organizers and political aspirants." },
        { title: "Gender & Development Training", period: "1990-2010", desc: "A pioneering program that challenged NGO paradigms with radical feminist analysis." }
      ].map((prog, i) => (
        <div key={i} className="p-12 bg-purple-50 rounded-[2.5rem] hover:bg-purple-100 transition-colors border border-purple-100/50 group">
          <Award className="text-purple-800 mb-8 transition-transform group-hover:scale-110" size={36} />
          <h3 className="text-2xl font-bold mb-3 text-stone-900 leading-tight">{prog.title}</h3>
          <p className="text-purple-600 text-[10px] font-black uppercase mb-6 tracking-widest">{prog.period}</p>
          <p className="text-stone-600 leading-relaxed mb-10 font-light">{prog.desc}</p>
          <Button variant="outline" className="px-6 py-2 text-xs">View Records</Button>
        </div>
      ))}
    </div>
  </div>
);

const NetworkPage = () => (
  <div className="space-y-16">
    <div className="bg-stone-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
      <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h3 className="text-5xl font-serif italic mb-8">Regional Solidarity</h3>
          <p className="text-stone-400 text-lg leading-relaxed mb-12 font-light">
            ASR has served as the secretariat for numerous South Asian networks, facilitating cross-border dialogues between India, Pakistan, Bangladesh, Sri Lanka, and Nepal.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-widest uppercase">SANGAT Member</div>
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-widest uppercase">South Asian Feminist Network</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="aspect-square rounded-[2rem] bg-purple-800/10 border border-white/5 flex flex-col items-center justify-center p-8 text-center hover:bg-purple-800/20 transition-colors">
            <div className="text-3xl font-serif italic text-purple-400 mb-2">50+</div>
            <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">Regional Workshops</p>
          </div>
          <div className="aspect-square rounded-[2rem] bg-purple-800/10 border border-white/5 flex flex-col items-center justify-center p-8 text-center hover:bg-purple-800/20 transition-colors">
             <div className="text-3xl font-serif italic text-purple-400 mb-2">12</div>
            <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">International Summits</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AdvocacyPage = () => (
  <div className="space-y-12">
    <div className="grid md:grid-cols-2 gap-12">
      <div className="bg-stone-50 p-12 rounded-[2.5rem] border border-stone-100">
        <h3 className="text-2xl font-bold mb-6 text-stone-900">Women's Action Forum (WAF)</h3>
        <p className="text-stone-500 mb-10 leading-relaxed font-light">
          The WAF collection includes minutes of meetings, press releases, and protest flyers from the 1980s movement against discriminatory laws.
        </p>
        <Button variant="primary">Access Digital WAF Folders</Button>
      </div>
      <div className="bg-stone-50 p-12 rounded-[2.5rem] border border-stone-100">
        <h3 className="text-2xl font-bold mb-6 text-stone-900">Law & Constitutional Rights</h3>
        <p className="text-stone-500 mb-10 leading-relaxed font-light">
          Legal aid documentation and advocacy papers submitted for judicial review regarding the Hadood Ordinance.
        </p>
        <Button variant="outline">View Advocacy Papers</Button>
      </div>
    </div>
  </div>
);

const TheatrePage = () => (
  <div className="space-y-16">
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      {[
        { title: "Dukhini", year: "1987", img: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=600", desc: "A stage play exploring rural women's labor." },
        { title: "The Street Theatre Toolkit", year: "1992", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600", desc: "A guide for activists using performance." },
        { title: "Regional Creative Fest", year: "1995", img: "https://images.unsplash.com/photo-1460518451285-cd7ba71ba4c8?auto=format&fit=crop&q=80&w=600", desc: "Folk music and poetry from the Punjab region." }
      ].map((item, i) => (
        <div key={i} className="break-inside-avoid bg-white border border-stone-100 rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-500">
          <div className="overflow-hidden">
            <img src={item.img} className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
          </div>
          <div className="p-10">
            <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
            <span className="text-purple-600 text-[10px] font-black tracking-[0.4em] uppercase">{item.year}</span>
            <p className="text-stone-500 text-sm mt-6 font-light leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const LibraryPage = () => (
  <div className="space-y-16">
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { label: "Audio Archives", count: "450 Cassettes", icon: <PlayCircle /> },
        { label: "Poster Collection", count: "1,200 Prints", icon: <ImageIcon /> },
        { label: "Manuscript Room", count: "8,000+ Pages", icon: <FileText /> }
      ].map((cat, i) => (
        <div key={i} className="p-12 bg-white border border-stone-100 rounded-[2.5rem] text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
          <div className="w-20 h-20 bg-purple-50 text-purple-800 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-purple-900 group-hover:text-white transition-colors">
            {React.cloneElement(cat.icon, { size: 36 })}
          </div>
          <h4 className="text-2xl font-bold text-stone-900 mb-2">{cat.label}</h4>
          <p className="text-purple-600 text-[10px] uppercase tracking-[0.4em] font-black">{cat.count}</p>
        </div>
      ))}
    </div>
    
    <div className="bg-purple-900 p-12 md:p-24 rounded-[4rem] text-white flex flex-col lg:flex-row justify-between items-center gap-12">
      <div className="max-w-2xl">
        <h3 className="text-4xl md:text-5xl font-serif italic mb-6">Visit the Physical Library</h3>
        <p className="text-purple-200/70 text-lg leading-relaxed font-light">
          The ASR Library in Lahore remains a sanctuary for researchers. If you are a student or scholar, you can request physical access to our un-digitized collections.
        </p>
      </div>
      <Button variant="white">Book Appointment</Button>
    </div>
  </div>
);

const PublicationsPage = () => (
  <div className="py-12 md:py-20">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
      <div className="flex-grow">
        <div className="flex items-center space-x-3 text-purple-600 mb-3">
          <Tag size={16} />
          <span className="text-[10px] uppercase font-black tracking-[0.4em]">Digital Bookstore & Library</span>
        </div>
        <h2 className="text-5xl font-light text-stone-900">ASR Publications</h2>
      </div>
      <div className="flex space-x-3">
        <Button variant="outline" className="px-6 py-3 text-xs font-bold"><Filter size={14} className="mr-2"/> Filter</Button>
        <Button variant="outline" className="px-6 py-3 text-xs font-bold"><Search size={14} className="mr-2"/> Search</Button>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {PUBLICATIONS_DATA.map(pub => (
        <div key={pub.id} className="group cursor-pointer">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-stone-100 shadow-sm transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-2">
            <img src={pub.image} alt={pub.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          </div>
          <p className="text-[10px] text-purple-600 font-black uppercase mb-2 tracking-widest">{pub.category} • {pub.year}</p>
          <h3 className="text-xl font-bold text-stone-900 leading-tight mb-2 group-hover:text-purple-800 transition-colors">{pub.title}</h3>
          <p className="text-stone-500 font-light">{pub.author}</p>
        </div>
      ))}
    </div>
  </div>
);

const FilmUnitPage = () => (
  <div className="py-12 md:py-20">
    <div className="grid lg:grid-cols-2 gap-12">
      {FILM_DATA.map(film => (
        <div key={film.id} className="bg-stone-50 rounded-[2.5rem] overflow-hidden border border-stone-100 flex flex-col md:flex-row h-full group">
          <div className="md:w-1/2 relative">
            <img src={film.thumbnail} alt={film.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-purple-950/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-purple-900 shadow-3xl transform group-hover:scale-110 transition-transform">
                <PlayCircle size={40} />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-10 flex flex-col">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-purple-100 text-purple-700 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">{film.duration}</span>
              <span className="text-stone-400 text-xs font-bold">{film.year}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-stone-900 leading-tight">{film.title}</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-10 flex-grow font-light">
              {film.description}
            </p>
            <Button variant="ghost" className="justify-start p-0 group-item">
              Watch Film <ArrowRight size={18} className="ml-2 transition-transform group-item-hover:translate-x-2" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ResearchPage = () => (
  <div className="py-12">
    <div className="bg-purple-50 rounded-[3rem] p-12 md:p-20 mb-20 border border-purple-100">
      <h3 className="text-3xl font-bold text-purple-900 mb-10">Current Research Themes</h3>
      <div className="grid md:grid-cols-3 gap-10">
        {['Institutional Memory', 'Labor History', 'Identity & Self'].map((theme, i) => (
          <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-purple-50 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mb-6 font-bold">
              0{i + 1}
            </div>
            <h4 className="text-xl font-bold text-stone-800 mb-4">{theme}</h4>
            <p className="text-sm text-stone-500 font-light leading-relaxed">Exploring the nuances of {theme.toLowerCase()} in the South Asian context.</p>
          </div>
        ))}
      </div>
    </div>
    
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-stone-900 mb-10 px-4">Recent Digital Papers</h3>
      {[
        { title: "Reflections on the Women's Movement in Pakistan", type: "Working Paper", size: "2.4 MB" },
        { title: "The Impact of Globalization on Rural Craftswomen", type: "Case Study", size: "4.1 MB" },
        { title: "Education and Radicalization: A Feminist Critique", type: "Symposium Paper", size: "1.8 MB" },
      ].map((paper, i) => (
        <div key={i} className="group flex items-center justify-between p-10 bg-white border border-stone-100 rounded-[2rem] hover:border-purple-200 hover:shadow-xl transition-all">
          <div className="flex items-center space-x-8">
            <div className="hidden sm:flex w-16 h-16 bg-stone-50 text-stone-400 group-hover:bg-purple-100 group-hover:text-purple-600 rounded-2xl items-center justify-center transition-colors">
              <FileText size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-stone-800 group-hover:text-purple-900 transition-colors">{paper.title}</h4>
              <p className="text-[10px] text-stone-400 uppercase font-black tracking-[0.4em] mt-2">{paper.type} • PDF</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <span className="hidden sm:block text-xs font-mono text-stone-300">{paper.size}</span>
            <button className="p-4 text-stone-400 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all">
              <Download size={24} />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CulturalEventsPage = () => (
  <div className="py-12">
    <div className="space-y-32">
      {[
        { date: "Oct 1994", title: "Regional Workshop on Feminism", location: "Lahore", desc: "A landmark gathering of over 200 activists from across South Asia defining a regional agenda." },
        { date: "Mar 1988", title: "Peasant Women's Conference", location: "Multan", desc: "The first large-scale mobilization of rural women workers for land rights documentation." },
        { date: "Dec 2001", title: "Peace March Documentation", location: "Wagah Border", desc: "Records of the peace initiatives during the regional military standoff between nuclear neighbors." }
      ].map((event, i) => (
        <div key={i} className="flex flex-col md:flex-row gap-12 items-start group">
          <div className="md:w-48 pt-4">
            <span className="text-4xl font-serif italic text-purple-900 block mb-2">{event.date}</span>
            <div className="w-10 h-1 bg-purple-100"></div>
          </div>
          <div className="flex-grow bg-stone-50 p-12 md:p-16 rounded-[3rem] group-hover:bg-purple-50 transition-all duration-500 border border-stone-100 group-hover:border-purple-100">
            <div className="flex items-center space-x-3 text-stone-400 text-xs mb-6 font-bold uppercase tracking-widest">
              <MapPin size={14} />
              <span>{event.location}</span>
            </div>
            <h3 className="text-4xl font-light text-stone-900 mb-6 leading-tight group-hover:text-purple-900 transition-colors">{event.title}</h3>
            <p className="text-stone-500 text-lg leading-relaxed max-w-3xl font-light">{event.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Master Layout App ---

export default function App() {
  const [currentPath, setCurrentPath] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navigateTo = (path) => {
    setCurrentPath(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    if (currentPath === 'home') return <HomePage navigateTo={navigateTo} />;
    const currentNavItem = NAV_ITEMS.find(item => item.id === currentPath);
    return (
      <MasterContent 
        currentPath={currentPath} 
        title={currentNavItem?.label || 'Page Not Found'} 
        icon={currentNavItem?.icon} 
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-white selection:bg-purple-200 overflow-x-hidden">
      
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8 md:py-12'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex flex-col cursor-pointer z-[110] relative group" 
            onClick={() => navigateTo('home')}
          >
            <span className="text-4xl font-bold tracking-tighter text-purple-950 leading-none group-hover:scale-105 transition-transform">ASR</span>
            <span className={`text-[9px] tracking-[0.4em] uppercase font-black mt-2 transition-colors ${isScrolled ? 'text-purple-400' : 'text-purple-800'}`}>
              Resource Centre
            </span>
          </div>

          <nav className="hidden xl:flex items-center space-x-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`px-4 py-2.5 text-[11px] font-black tracking-widest uppercase transition-all rounded-full whitespace-nowrap ${
                  currentPath === item.id 
                    ? 'text-purple-900 bg-purple-100' 
                    : 'text-stone-500 hover:text-purple-700 hover:bg-purple-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="ml-6 p-3 text-purple-950 bg-purple-50 hover:bg-purple-100 rounded-full transition-colors border border-purple-100 shadow-sm">
              <Search size={20} />
            </button>
          </nav>

          <div className="xl:hidden flex items-center z-[110] space-x-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-3 text-purple-950 bg-white shadow-xl border border-stone-100 rounded-full active:scale-95 transition-all"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-purple-950/60 backdrop-blur-xl z-[115] transition-opacity duration-700 xl:hidden ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className={`
          fixed top-0 right-0 h-screen w-full sm:w-[500px] bg-white z-[120] xl:hidden shadow-3xl transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="p-10 flex justify-between items-center border-b border-stone-50">
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tighter text-purple-950 leading-none">ASR</span>
              <span className="text-[10px] tracking-[0.3em] uppercase font-black text-purple-400 mt-2">Archive Menu</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-4 text-stone-400 hover:text-purple-900 bg-stone-50 rounded-full transition-all">
              <X size={32} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto py-10 px-6 scrollbar-hide">
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`flex items-center justify-between text-left p-6 rounded-3xl transition-all group ${
                    currentPath === item.id 
                      ? 'text-purple-950 bg-purple-50 font-bold' 
                      : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className={`mr-6 transition-colors ${currentPath === item.id ? 'text-purple-700' : 'text-stone-300'}`}>
                      {item.icon || <Globe size={24} />}
                    </span>
                    <span className="text-2xl font-light tracking-tight">{item.label}</span>
                  </div>
                  <ChevronRight size={20} className={`transition-transform duration-500 group-hover:translate-x-2 ${currentPath === item.id ? 'text-purple-600 opacity-100' : 'opacity-10'}`} />
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-10 bg-purple-50 flex flex-col space-y-8">
             <div className="flex justify-between items-center">
                <div className="text-[10px] uppercase tracking-[0.4em] font-black text-purple-400">South Asia Archive</div>
                <div className="flex space-x-4">
                  {['TW', 'IG', 'FB'].map(s => (
                    <div key={s} className="w-10 h-10 rounded-full bg-white border border-purple-100 flex items-center justify-center text-[10px] font-black text-purple-900 shadow-sm">
                      {s}
                    </div>
                  ))}
                </div>
             </div>
             <p className="text-xs leading-relaxed text-stone-400 italic font-light">
               Lahore, Pakistan. Founded 1983. <br/>
               Digitalizing the history of resistance.
             </p>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Footer */}
      <footer className="bg-purple-950 text-purple-200/60 py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600"></div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-32">
            <div className="lg:col-span-2">
              <span className="text-5xl font-bold text-white tracking-tighter">ASR</span>
              <p className="text-[11px] tracking-[0.5em] uppercase text-purple-400 font-black mt-4 mb-10">Digital History Project</p>
              <p className="max-w-md leading-relaxed text-purple-100/70 text-lg font-light">
                Preserving four decades of the ASR Resource Centre's contribution to feminist research and social justice movements in Pakistan and South Asia.
              </p>
            </div>
            
            <div>
              <h4 className="text-white text-[11px] font-black uppercase tracking-[0.4em] mb-10 border-b border-white/10 pb-6">Collections</h4>
              <ul className="space-y-6 text-base font-light">
                <li><button onClick={() => navigateTo('publications')} className="hover:text-white transition-colors">Publications</button></li>
                <li><button onClick={() => navigateTo('film-unit')} className="hover:text-white transition-colors">Filmography</button></li>
                <li><button onClick={() => navigateTo('theatre')} className="hover:text-white transition-colors">Creative Works</button></li>
                <li><button onClick={() => navigateTo('library')} className="hover:text-white transition-colors">Main Archive</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-[11px] font-black uppercase tracking-[0.4em] mb-10 border-b border-white/10 pb-6">Resources</h4>
              <ul className="space-y-6 text-base font-light">
                <li><button onClick={() => navigateTo('research')} className="hover:text-white transition-colors">Research Papers</button></li>
                <li><button onClick={() => navigateTo('advocacy')} className="hover:text-white transition-colors">Activism Records</button></li>
                <li><button onClick={() => navigateTo('network')} className="hover:text-white transition-colors">Regional Network</button></li>
                <li><button onClick={() => navigateTo('programmes')} className="hover:text-white transition-colors">Educational Programs</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 mt-24 md:mt-32 pt-12 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-[0.3em] gap-10">
            <p className="font-bold opacity-40">&copy; {new Date().getFullYear()} ASR Resource Centre Digital Archive.</p>
            <div className="flex space-x-10">
              <span className="text-purple-400">Lahore, Pakistan</span>
              <span className="text-purple-400">Since 1983</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}