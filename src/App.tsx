import React from 'react';
import { Play, Users, Star, MessageCircle, ShieldAlert, Gamepad2, Youtube } from 'lucide-react';

const DiscordIcon = () => (
  <svg role="img" className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
  </svg>
);

const LOGO_URL = "https://i.postimg.cc/sDB64kD2/9744325783487815c73c892043122c09-Photoroom.png";
const HERO_BG = "https://i.postimg.cc/3JMcB2n8/Estamos-Jodidos-Banner-Discord.png";

const TiktokIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.32A6.33 6.33 0 0 0 17.6 15.7V8.58a8.3 8.3 0 0 0 3.77.92V6.01a4.92 4.92 0 0 1-1.78-.32z"/>
  </svg>
);

const StatBox = ({ icon: Icon, text, subtext }: { icon: any, text: string, subtext: string }) => (
  <div className="flex flex-col items-center justify-center p-6 group transition-colors duration-300 hover:bg-neutral-900 cursor-default relative overflow-hidden">
    <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 blur-xl transition-all duration-300"></div>
    <div className="flex items-center gap-3 mb-2 relative z-10">
      <Icon className="text-red-600 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] transition-all duration-300" size={28} />
      <span className="font-teko text-4xl font-bold text-white tracking-wider">{text}</span>
    </div>
    <span className="font-inter text-xs text-neutral-400 uppercase tracking-widest relative z-10">{subtext}</span>
  </div>
);

const StepCard = ({ num, title, text, btnText, btnColor, Icon, href, target, textCase = "uppercase" }: any) => {
  const buttonClasses = `mt-8 w-full py-4 rounded-xl font-teko text-2xl font-bold ${textCase} tracking-widest transition-all duration-300 z-10 ${
    btnColor === 'discord' 
      ? 'bg-[#5865F2] hover:bg-[#4752C4] text-white shadow-[0_0_20px_rgba(88,101,242,0.3)] hover:shadow-[0_0_30px_rgba(88,101,242,0.5)] cursor-pointer' 
      : btnColor === 'red'
        ? 'bg-red-600 hover:bg-red-700 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] cursor-pointer'
        : 'bg-transparent border border-neutral-700 hover:border-red-600 hover:bg-red-600/10 text-white cursor-pointer'
  }`;

  return (
    <div className="min-h-[400px] w-full bg-[#0a0a0a] border-t-4 border-t-red-600 border border-neutral-800 rounded-2xl p-10 flex flex-col items-center text-center group hover:-translate-y-2 hover:border-neutral-700 hover:shadow-[0_20px_40px_rgba(220,38,38,0.1)] transition-all duration-500 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600/10 blur-[50px] rounded-full group-hover:bg-red-600/20 transition-colors pointer-events-none"></div>
      <div className="w-20 h-20 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-8 relative group-hover:border-red-600/50 transition-colors z-10">
        <span className="absolute -top-3 -right-3 text-red-600/20 font-teko text-7xl font-bold pointer-events-none group-hover:text-red-600/40 transition-colors">{num}</span>
        <Icon size={32} className="text-white group-hover:text-red-500 transition-colors" />
      </div>
      <h3 className="font-teko text-4xl font-bold text-white uppercase tracking-wide mb-4 z-10">{title}</h3>
      <p className="font-inter text-neutral-400 text-sm leading-relaxed mb-auto z-10">
        {text}
      </p>
      {href ? (
        <a href={href} target={target} rel="noopener noreferrer" className={buttonClasses + " flex items-center justify-center"}>
          {btnText}
        </a>
      ) : (
        <button className={buttonClasses}>
          {btnText}
        </button>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-600 selection:text-white font-['Tomorrow'] relative overflow-x-hidden">
      
      {/* FONDO PRINCIPAL */}
      <div className="fixed inset-0 z-0">
          <img 
            src={HERO_BG}
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10">
        {/* NAVBAR CON DISTRIBUCIÓN SIMÉTRICA */}
      <nav className="w-full bg-neutral-950/90 backdrop-blur-md border-b border-red-600/30 sticky top-0 z-[100] h-24 flex items-center">
          <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
              
              {/* 1. BLOQUE IZQUIERDO: LOGO */}
              {/* El flex-1 asegura que ocupe exactamente 1/3 del espacio, empujando todo lo demás */}
              <div className="flex-1 flex justify-start items-center">
                  <a href="/">
                      <img src="https://i.postimg.cc/sDB64kD2/9744325783487815c73c892043122c09-Photoroom.png" 
                           alt="Logo Perú RP" className="h-14 drop-shadow-[0_0_12px_rgba(220,38,38,0.5)] transition-transform hover:scale-105" />
                  </a>
              </div>

              {/* 2. BLOQUE CENTRAL: ENLACES */}
              {/* El flex-none permite que se mantenga exactamente en el centro de la pantalla */}
              <div className="hidden md:flex flex-none items-center gap-10 font-[Tomorrow]">
                  <a href="normativa.html" className="text-white font-bold uppercase tracking-widest text-[13px] hover:text-red-500 transition-colors drop-shadow-md">Normativa</a>
                  <a href="tienda.html" className="text-white font-bold uppercase tracking-widest text-[13px] hover:text-red-500 transition-colors drop-shadow-md">Tienda</a>
                  <a href="facciones.html" className="text-white font-bold uppercase tracking-widest text-[13px] hover:text-red-500 transition-colors drop-shadow-md">Facciones</a>
              </div>

              {/* 3. BLOQUE DERECHO: ESTADO Y BOTÓN */}
              {/* flex-1 y justify-end alinean todo perfectamente al borde derecho */}
              <div className="flex-1 flex justify-end items-center gap-8">
                  {/* Indicador Servidor Activo */}
                  <div className="hidden lg:flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.8)]"></div>
                      <span className="text-green-500 font-bold uppercase tracking-widest text-[11px] drop-shadow-[0_0_5px_rgba(34,197,94,0.3)]">Servidor Activo</span>
                  </div>
                  
                  {/* Botón Código */}
                  <a 
                    href="https://percdev.xyz/login" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold tracking-[0.15em] text-[13px] px-8 py-3 rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] transition-all transform hover:-translate-y-0.5 cursor-pointer inline-block text-center"
                  >
                      INICIAR SESIÓN
                  </a>
              </div>

          </div>
      </nav>

      {/* 2. HERO SECTION INMERSIVO */}
      <header className="w-full pt-20 pb-28 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-4">
              Perú <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">Roleplay</span><br/>
              Community
          </h1>
          <p className="text-gray-400 text-sm md:text-base tracking-widest uppercase mt-6 max-w-2xl mx-auto font-bold">
              Tu historia, tu ciudad, tus reglas. La experiencia de rol más inmersiva, seria y realista de ERLC.
          </p>
      </header>

      {/* PANEL DE ESTADÍSTICAS OFICIAL */}
      <div className="max-w-5xl mx-auto px-6 -mt-16 relative z-50">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.15)] hover:border-red-600/30 hover:-translate-y-1">
              
              {/* Miembros */}
              <div className="p-8 text-center border-b md:border-b-0 md:border-r border-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 cursor-default">
                  <div className="flex items-center justify-center gap-4 mb-3 whitespace-nowrap">
                      <span className="text-3xl drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]">👥</span>
                      <span className="text-4xl font-bold text-white uppercase">+850</span>
                  </div>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">Miembros Reales</p>
              </div>

              {/* Servidor Activo */}
              <div className="p-8 text-center border-b md:border-b-0 md:border-r border-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 cursor-default">
                  <div className="flex items-center justify-center gap-4 mb-3 whitespace-nowrap">
                      <div className="w-3.5 h-3.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.8)] flex-shrink-0"></div>
                      <span className="text-4xl font-bold text-white uppercase">En Línea</span>
                  </div>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">Servidor Activo 24/7</p>
              </div>

              {/* Rating */}
              <div className="p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 cursor-default">
                  <div className="flex items-center justify-center gap-4 mb-3 whitespace-nowrap">
                      <span className="text-3xl text-yellow-500 drop-shadow-[0_0_12px_rgba(234,179,8,0.6)]">⭐</span>
                      <span className="text-4xl font-bold text-white uppercase">4.3</span>
                  </div>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">Rating Oficial</p>
              </div>

          </div>
      </div>

      {/* BOTÓN DISCORD ARREGLADO */}
      <div className="flex justify-center w-full py-16 px-6">
          <a href="https://peruroleplay.com" target="_blank" rel="noopener noreferrer" 
             className="group flex items-center justify-center gap-3 sm:gap-4 w-full max-w-3xl bg-[#5865F2] hover:bg-[#4752C4] text-white py-4 sm:py-6 px-4 sm:px-8 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(88,101,242,0.3)] hover:shadow-[0_0_40px_rgba(88,101,242,0.6)] hover:-translate-y-1 transform">
              
              {/* Icono de Discord con flex-shrink-0 para que no se aplaste */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-white flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
              </svg>
              <span className="text-[11px] min-[360px]:text-[13px] sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider sm:tracking-widest text-white whitespace-nowrap">
                  UNIRTE AL SERVIDOR DE DISCORD
              </span>
          </a>
      </div>

      {/* 3. SECCIÓN "CÓMO UNIRTE" */}
      <section className="bg-neutral-950 py-32 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-teko text-5xl md:text-6xl font-bold text-white uppercase tracking-wider mb-4 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              COMO UNIRTE <span className="text-neutral-500">-</span> 3 PASOS SIMPLES
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard 
              num="1"
              Icon={MessageCircle}
              title="DISCORD & VERIFICACIÓN"
              text="Entra, vincúlate y verifica tu cuenta para acceder a la Intranet de forma segura."
              btnText="UNIRSE AL DISCORD"
              btnColor="discord"
              href="https://peruroleplay.com"
              target="_blank"
            />
            <StepCard 
              num="2"
              Icon={ShieldAlert}
              title="Lee la Normativa"
              text="Conoce las reglas de nuestra ciudad para evitar sanciones. Es obligatorio antes de jugar."
              btnText="VER NORMATIVA"
              btnColor="outline"
              href="normativa.html"
            />
            <StepCard 
              num="3"
              Icon={Gamepad2}
              title="Entra a ER:LC"
              text="Busca nuestro servidor privado dentro del juego y usa el código oficial para comenzar a rolear."
              btnText="INICIAR SESIÓN"
              btnColor="red"
              textCase="normal-case"
              href="https://percdev.xyz/login"
              target="_blank"
            />
          </div>
        </div>
      </section>

      {/* 4. FOOTER MINIMALISTA */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 opacity-60">
            <img src={LOGO_URL} alt="PRC" className="w-8 h-8 object-contain grayscale" />
            <span className="font-teko text-xl font-bold uppercase tracking-widest text-neutral-400">PERÚ ROLEPLAY</span>
          </div>
          
          <div className="text-center md:text-left font-inter text-neutral-600 text-xs tracking-wider">
            &copy; 2026 PERÚ ROLEPLAY COMMUNITY. TODOS LOS DERECHOS RESERVADOS.
          </div>

          <div className="flex items-center gap-4 text-neutral-600">
            <a href="https://www.tiktok.com/@peruroleplay.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-red-500 transition-colors"><TiktokIcon size={20} /></a>
            <a href="https://www.youtube.com/@PeruRoleplay" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-red-500 transition-colors"><Youtube size={20} /></a>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
