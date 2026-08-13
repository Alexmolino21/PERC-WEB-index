import React from 'react';
import { Fingerprint, Terminal, ShieldAlert, FileText, Component, Server } from 'lucide-react';

const Barcode = () => (
  <svg width="100%" height="40" viewBox="0 0 100 40" preserveAspectRatio="none" className="fill-current text-white">
    <rect x="0" y="0" width="2" height="40" />
    <rect x="4" y="0" width="1" height="40" />
    <rect x="7" y="0" width="3" height="40" />
    <rect x="12" y="0" width="1" height="40" />
    <rect x="15" y="0" width="2" height="40" />
    <rect x="19" y="0" width="4" height="40" />
    <rect x="25" y="0" width="1" height="40" />
    <rect x="28" y="0" width="2" height="40" />
    <rect x="32" y="0" width="1" height="40" />
    <rect x="35" y="0" width="3" height="40" />
    <rect x="40" y="0" width="2" height="40" />
    <rect x="44" y="0" width="1" height="40" />
    <rect x="47" y="0" width="3" height="40" />
    <rect x="52" y="0" width="1" height="40" />
    <rect x="55" y="0" width="2" height="40" />
    <rect x="59" y="0" width="4" height="40" />
    <rect x="65" y="0" width="1" height="40" />
    <rect x="68" y="0" width="2" height="40" />
    <rect x="72" y="0" width="1" height="40" />
    <rect x="75" y="0" width="3" height="40" />
    <rect x="80" y="0" width="2" height="40" />
    <rect x="84" y="0" width="1" height="40" />
    <rect x="87" y="0" width="4" height="40" />
    <rect x="93" y="0" width="2" height="40" />
    <rect x="97" y="0" width="3" height="40" />
  </svg>
);

const DiscordIcon = () => (
  <svg role="img" className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
  </svg>
);

const IDCard = ({ name, rank, photo }: { name: string; rank: string; photo: string }) => (
  <div className="w-full bg-[#0c0c0c] border border-gray-800 flex flex-col relative overflow-hidden group">
    {/* Red Stripe */}
    <div className="h-2 bg-brand-red w-full"></div>
    
    <div className="p-6 flex flex-col items-center">
      <div className="w-full text-center border-b border-gray-800 pb-2 mb-6">
        <span className="font-oswald text-xs tracking-[0.2em] text-gray-500 font-bold uppercase">Departamento de Estado</span>
      </div>
      
      {/* Photo box grayscale */}
      <div className="w-32 h-32 mb-5 border border-gray-700 bg-gray-900 p-1 relative">
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-brand-red"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-brand-red"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-brand-red"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-brand-red"></div>
        
        <img src={photo} alt={name} className="w-full h-full object-cover grayscale opacity-90 contrast-125" />
      </div>

      <h3 className="font-oswald text-2xl font-bold tracking-wider uppercase mb-1 text-white">{name}</h3>
      <p className="font-inter text-brand-red text-sm font-bold tracking-widest uppercase mb-8">{rank}</p>

      {/* Barcode */}
      <div className="w-full opacity-40 mt-auto">
         <Barcode />
         <p className="text-[10px] font-oswald text-gray-500 text-center tracking-widest mt-2 uppercase">
            ID-{Math.random().toString(36).substring(2, 8).toUpperCase()}
         </p>
      </div>
    </div>
  </div>
);

const GuideStep = ({ num, title, desc, Icon }: any) => (
  <div className="bg-[#0a0a0a] border border-gray-800 p-8 flex flex-col group relative overflow-hidden transition-colors hover:border-brand-red/50">
    <div className="absolute top-0 right-0 w-24 h-24 flex items-center justify-center font-oswald text-8xl text-gray-900 font-bold opacity-30 select-none pointer-events-none group-hover:text-brand-red group-hover:opacity-10 transition-colors">
      {num}
    </div>
    <div className="text-brand-red mb-6">
      <Icon size={40} strokeWidth={1.5} />
    </div>
    <h4 className="font-oswald text-2xl font-bold tracking-widest uppercase mb-3 text-white">Fase {num}: {title}</h4>
    <p className="font-inter text-gray-400 text-sm leading-relaxed">{desc}</p>
    
    <div className="mt-8 flex items-center gap-2 text-[10px] font-oswald text-gray-600 tracking-widest uppercase mt-auto">
      <div className="w-1.5 h-1.5 bg-gray-800 group-hover:bg-brand-red transition-colors"></div>
      SYS.SEQ_0{num}
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black w-full selection:bg-brand-red selection:text-white pb-0">
      
      {/* Ticker de Alertas */}
      <div className="w-full border-b border-brand-red/30 bg-brand-red text-white py-1.5 overflow-hidden flex relative select-none">
        <div className="animate-marquee flex items-center font-oswald text-sm tracking-widest font-semibold uppercase">
          <span className="mx-8">⚠️ ALERTA: RECLUTAMIENTO ABIERTO - BIENVENIDO A PERÚ ROLEPLAY COMMUNITY - VERIFICA TU IDENTIDAD</span>
          <span className="mx-8">⚠️ ALERTA: RECLUTAMIENTO ABIERTO - BIENVENIDO A PERÚ ROLEPLAY COMMUNITY - VERIFICA TU IDENTIDAD</span>
          <span className="mx-8">⚠️ ALERTA: RECLUTAMIENTO ABIERTO - BIENVENIDO A PERÚ ROLEPLAY COMMUNITY - VERIFICA TU IDENTIDAD</span>
          <span className="mx-8">⚠️ ALERTA: RECLUTAMIENTO ABIERTO - BIENVENIDO A PERÚ ROLEPLAY COMMUNITY - VERIFICA TU IDENTIDAD</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden border-b border-gray-900">
        {/* Fondo oscurecido con imagen */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&q=80" 
            alt="Fondo ERLC" 
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center">
          {/* Tarjeta Asimétrica de Login */}
          <div className="bg-[#050505]/80 backdrop-blur-md border-l-4 border-r border-t border-b-4 border-brand-red p-8 sm:p-12 w-full max-w-2xl text-center flex flex-col items-center relative">
            
            {/* Decors terminales */}
            <div className="absolute top-2 left-2 text-[10px] text-brand-red font-oswald tracking-widest opacity-50">AUTH_GATE_01</div>
            <div className="absolute bottom-2 right-2 flex gap-1">
               <div className="w-4 h-1 bg-brand-red opacity-80"></div>
               <div className="w-8 h-1 bg-brand-red opacity-40"></div>
            </div>

            <Fingerprint size={48} className="text-brand-red mb-6" strokeWidth={1} />
            
            <h1 className="font-oswald text-4xl sm:text-6xl font-bold tracking-widest text-white uppercase mb-4 leading-none">
              Portal de Acceso <br/><span className="text-brand-red">Ciudadano</span>
            </h1>
            
            <p className="font-inter text-gray-400 text-sm sm:text-base mb-10 max-w-md">
              Autentica tu identidad mediante nuestra pasarela segura para ingresar a la Intranet oficial de Perú RP. Solo personal autorizado.
            </p>

            <button className="group relative w-full sm:w-auto bg-discord text-white font-oswald text-lg sm:text-xl font-semibold uppercase tracking-widest py-4 px-8 sm:px-12 transition-all hover:bg-[#4752C4] flex justify-center">
              <div className="absolute inset-0 border border-white/0 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-white/50 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              <span className="relative z-10 flex items-center gap-3">
                <DiscordIcon />
                Iniciar Sesión con Discord
              </span>
            </button>
            <div className="mt-4 flex items-center gap-2 text-xs font-inter text-gray-500">
               <ShieldAlert size={14} /> Conexión encriptada de extremo a extremo
            </div>
          </div>
        </div>
      </section>

      {/* Guía de Inmigración */}
      <section className="w-full max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col items-start min-w-full mb-12">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold tracking-widest uppercase text-white mb-2">Guía de Inmigración</h2>
          <div className="w-16 h-1 bg-brand-red"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GuideStep 
            num="01" 
            title="Verificación" 
            desc="Vincula tu cuenta de Discord para validar tu identidad. Nuestro sistema automatizado verificará tu edad en la plataforma y edad mínima requerida."
            Icon={Terminal}
          />
          <GuideStep 
            num="02" 
            title="Normativa" 
            desc="Lee y comprende el código penal y normativas de la ciudad. El desconocimiento del reglamento no exime de las sanciones correspondientes."
            Icon={FileText}
          />
          <GuideStep 
            num="03" 
            title="Ingreso" 
            desc="Accede a la sesión a través del servidor protegido de Roblox. Una vez dentro, configura tu personaje y prepárate para rolear."
            Icon={Server}
          />
        </div>
      </section>

      {/* Registro de Autoridades (Staff) */}
      <section className="w-full bg-[#030303] py-20 border-t border-gray-900">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold tracking-widest uppercase text-white mb-2">Registro de Autoridades</h2>
            <div className="w-16 h-1 bg-brand-red mb-4"></div>
            <p className="font-inter text-sm text-gray-500 max-w-xl">
              Nómina pública del Alto Mando Administrativo. Este personal mantiene el orden y vela por la prosperidad de nuestra ciudad virtual.
            </p>
          </div>

          {/* Tarjetas Centradas */}
          <div className="flex flex-wrap justify-center gap-8">
            <IDCard 
              name="S. Alegre" 
              rank="Fundador" 
              photo="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
            />
             <IDCard 
              name="DIRECTOR J." 
              rank="Director Administrativo" 
              photo="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300"
            />
             <IDCard 
              name="G. RUIZ" 
              rank="Jefe de Desarrollo" 
              photo="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300&h=300"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black border-t border-gray-900 py-12 px-4 flex flex-col items-center">
        <div className="flex items-center gap-2 font-oswald text-xl font-bold tracking-widest uppercase text-gray-400 mb-6 grayscale opacity-50">
          <ShieldAlert size={24} />
          <span>Perú RP</span>
        </div>
        <p className="font-inter text-gray-600 text-sm tracking-wider uppercase mb-2">
          &copy; 2026 Perú Roleplay Community
        </p>
        <p className="font-inter text-gray-700 text-xs">
          Desarrollado para la comunidad de ERLC. Esta comunidad no está afiliada a Liberty County ni a PRC official directamente.
        </p>
        
        <div className="mt-8 flex gap-1 items-center opacity-30">
           <div className="w-1 h-3 bg-brand-red"></div>
           <div className="w-1 h-3 bg-brand-red"></div>
           <div className="w-2 h-3 bg-brand-red"></div>
        </div>
      </footer>
    </div>
  );
}
