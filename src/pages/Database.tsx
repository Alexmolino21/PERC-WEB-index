import React, { useState } from 'react';
import { 
  ShieldAlert, BookOpen, AlertCircle, UserX, Heart, MessageCircle, Monitor, 
  MessageSquare, AlertTriangle, Shield, EyeOff, Map, CheckCircle2,
  BrainCircuit, Users, Square, Car, RefreshCcw, MapPin, Activity, 
  Crosshair, Users2, Flag, MoreHorizontal, Briefcase, Mail, Trash2, Truck, Star, Zap,
  ChevronDown
} from 'lucide-react';

const AccordionItem = ({ title, num, children }: { title: string, num: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 ${isOpen ? 'border-red-600/50 bg-red-950/10' : 'hover:border-white/20'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <span className="font-teko text-2xl text-red-600 font-semibold">{num}</span>
          <span className="font-teko text-xl tracking-wide uppercase text-gray-200">{title}</span>
        </div>
        <ChevronDown className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-500' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 pt-0 text-sm font-inter text-gray-400 leading-relaxed border-t border-white/5 mt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

const DiscordRule = ({ num, title, icon: Icon }: any) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 flex flex-col gap-3 hover:border-red-600/50 transition-colors group">
    <div className="flex justify-between items-start">
      <span className="font-teko text-xl text-red-600/80 font-bold">{num}</span>
      <Icon size={20} className="text-gray-500 group-hover:text-red-500 transition-colors" />
    </div>
    <h3 className="font-teko text-xl tracking-wide uppercase text-gray-200">{title}</h3>
  </div>
);

export default function Database() {
  const discordRules = [
    { num: '01', title: 'Respeta a Todos', icon: Heart },
    { num: '02', title: 'Cero Conflictos', icon: AlertCircle },
    { num: '03', title: 'Perfiles Seguros', icon: UserX },
    { num: '04', title: 'Sin Coqueteos', icon: MessageCircle },
    { num: '05', title: 'Bromas Leves', icon: MessageSquare },
    { num: '06', title: 'Uso Adecuado', icon: Monitor },
    { num: '07', title: 'Uso de Canales', icon: Activity },
    { num: '08', title: 'Cero Spam', icon: AlertTriangle },
    { num: '09', title: 'Sin Malware', icon: Shield },
    { num: '10', title: 'Contenido SFW', icon: EyeOff },
    { num: '11', title: 'Sin Doxxing', icon: Map },
    { num: '12', title: 'Verificación', icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 w-full selection:bg-red-600 selection:text-white pb-20 pt-10">
      
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-4 mb-16 relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="flex items-center gap-3 mb-4 text-red-600 font-teko text-2xl tracking-widest uppercase">
          <BookOpen className="text-red-600" />
          <span>Archivo Clasificado</span>
        </div>
        <h1 className="font-teko text-6xl md:text-8xl font-bold tracking-wider text-white uppercase leading-none drop-shadow-lg">
          BASE DE DATOS <br/><span className="text-red-600">CENTRAL</span>
        </h1>
        <p className="font-inter text-gray-400 mt-4 max-w-2xl text-lg border-l-2 border-red-600 pl-4 py-1">
          Normativa estricta, bolsa de trabajos libres y donaciones oficiales de Perú Roleplay.
        </p>
      </header>

      {/* SECCIÓN 1: NORMATIVA DE DISCORD Y ROLEPLAY */}
      <section className="w-full max-w-7xl mx-auto px-4 mb-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Columna Izquierda: Reglas y Roles */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Reglas de Discord */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <MessageSquare className="text-red-600" size={28} />
                <h2 className="font-teko text-4xl text-white tracking-wide uppercase">Normativa de Discord</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {discordRules.map((r, i) => <DiscordRule key={i} {...r} />)}
              </div>
            </div>

            {/* Reglas de Roleplay */}
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Users className="text-red-600" size={28} />
                <h2 className="font-teko text-4xl text-white tracking-wide uppercase">Principios de Roleplay</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AccordionItem num="01" title="Sentido Común">Usa la lógica ante todo. Si no harías algo en la vida real porque pone en riesgo tu vida o libertad de forma absurda, no lo hagas en el servidor.</AccordionItem>
                <AccordionItem num="02" title="RP Realista">Mantén un rol serio. Las interpretaciones alienígenas, poderes mágicos o situaciones salidas de una película de ciencia ficción están prohibidas.</AccordionItem>
                <AccordionItem num="03" title="Avatar Cuadrado">Está estrictamente prohibido usar avatares de cuerpo complejo (Rthro, personajes antropomórficos excesivos). Usa el bloque estándar de Roblox.</AccordionItem>
                <AccordionItem num="04" title="Respeto en Rol">Si bien los personajes pueden insultarse, el respeto entre jugadores OOC (Out of Character) es obligatorio en todo momento.</AccordionItem>
                <AccordionItem num="05" title="Vehículos">Prohibido circular con vehículos que tengan las texturas o skins por defecto sin justificación. Personaliza tu auto para mantener el realismo.</AccordionItem>
                <AccordionItem num="06" title="Respawn / RK">Si tu personaje muere, olvida la situación de rol que provocó su muerte (NLR - New Life Rule). No puedes volver al lugar por venganza.</AccordionItem>
                <AccordionItem num="07" title="Zonas">Las Zonas Seguras prohíben el crimen. Las Zonas Picantes lo permiten. Revisa el mapa oficial para conocer los límites exactos.</AccordionItem>
                <AccordionItem num="08" title="Realismo Médico">Si recibes disparos, acude al hospital o usa rol de entorno para sanar. Curarse mágicamente comiendo en medio del tiroteo es anti-RP.</AccordionItem>
                <AccordionItem num="09" title="Armas Permitidas">Los civiles y criminales básicos solo pueden usar armamento ligero (M9, M1911, TEC-9). Armas pesadas requieren facciones oficiales o eventos.</AccordionItem>
                <AccordionItem num="10" title="Pandillas">La creación de pandillas requiere aprobación. Los tiroteos entre pandillas deben tener un motivo OOC o rol previo sustancial.</AccordionItem>
                <AccordionItem num="11" title="Territorios">La captura de territorios está sujeta a horarios administrativos. No puedes campear zonas sin rol.</AccordionItem>
                <AccordionItem num="12" title="Otros">Cualquier evasión de rol cambiando de equipo, saliendo del juego o abusando de mecánicas será sancionada inmediatamente.</AccordionItem>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Mapa de Zonas */}
          <div className="lg:col-span-4 relative">
             <div className="sticky top-28 bg-white/5 border border-white/10 p-1 backdrop-blur-md rounded-sm overflow-hidden">
                {/* Neon Glow */}
                <div className="absolute inset-0 bg-red-600/10 mix-blend-screen pointer-events-none animate-pulse"></div>
                <div className="p-5 border-b border-white/10 bg-black/40">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="text-red-500" size={24} />
                    <h3 className="font-teko text-3xl tracking-wide uppercase text-white">Mapa de Zonas</h3>
                  </div>
                  <p className="font-inter text-xs text-gray-400">Distribución de riesgo en la ciudad</p>
                </div>
                
                <div className="p-5 flex flex-col gap-6 bg-neutral-950/80">
                  <div className="relative w-full aspect-square bg-neutral-900 border border-white/10 flex items-center justify-center overflow-hidden">
                     {/* Imagen del mapa (placeholder o ruta si se subió) */}
                     <img src="/MAPA.png" alt="Mapa Zonas" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80'; e.currentTarget.className="w-full h-full object-cover opacity-30 grayscale"; }} />
                     
                     {/* Overlays decorativos */}
                     <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                     <div className="absolute bottom-2 right-2 font-teko text-xl text-red-600/50 tracking-widest">SAT_UPLINK_OK</div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-start bg-blue-950/30 border border-blue-500/20 p-3 rounded-sm">
                      <div className="w-4 h-4 bg-blue-600 mt-0.5 rounded-sm shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                      <div>
                        <h4 className="font-teko text-xl text-blue-400 tracking-wide uppercase">ZONAS SEGURAS</h4>
                        <p className="text-xs font-inter text-gray-400">Hospitales, Comisarías, Spawn Principal. Prohibido cometer actos delictivos o agresiones de cualquier índole.</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start bg-orange-950/30 border border-orange-500/20 p-3 rounded-sm">
                      <div className="w-4 h-4 bg-orange-500 mt-0.5 rounded-sm shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                      <div>
                        <h4 className="font-teko text-xl text-orange-400 tracking-wide uppercase">ZONAS PICANTES</h4>
                        <p className="text-xs font-inter text-gray-400">Barrios conflictivos. Rol agresivo, robos y tiroteos permitidos previa interacción narrativa. Entra bajo tu propio riesgo.</p>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 2: BOLSA DE TRABAJOS LIBRES (Bento Grid) */}
      <section className="w-full max-w-7xl mx-auto px-4 mb-24">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="text-red-600" size={32} />
          <h2 className="font-teko text-4xl md:text-5xl font-bold tracking-widest uppercase text-white">Bolsa de Trabajos</h2>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-red-600/50 to-transparent ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          
          {/* Prosegurro - Ocupa 2 cols */}
          <div className="col-span-1 md:col-span-2 row-span-1 bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-red-600/50 transition-colors group relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldAlert size={150} />
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-red-600/20 flex items-center justify-center text-red-500 rounded-sm">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h3 className="font-teko text-3xl uppercase tracking-wide text-white group-hover:text-red-500 transition-colors">Prosegurro</h3>
                <p className="font-inter text-sm text-gray-400">Transporte de Valores y Dinero</p>
              </div>
            </div>
            <div className="mt-4">
              <span className="font-inter text-xs text-gray-500 uppercase tracking-widest block mb-1">Pago Base</span>
              <span className="font-teko text-4xl text-green-400 tracking-wide">75% <span className="text-xl text-gray-400">del monto entregado</span></span>
            </div>
          </div>

          {/* SERPOST */}
          <div className="col-span-1 row-span-1 bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-blue-500/50 transition-colors group">
            <div className="flex gap-3 justify-between items-start">
              <h3 className="font-teko text-2xl uppercase tracking-wide text-white">SERPOST<br/><span className="text-gray-400 text-lg">Servicio Postal</span></h3>
              <Mail className="text-blue-500 opacity-50" size={28} />
            </div>
            <div>
              <span className="font-teko text-4xl text-green-400 tracking-wide">S/. 2,200</span>
              <span className="font-inter text-xs text-gray-400 block mt-1">Por 4 paquetes entregados</span>
            </div>
          </div>

          {/* Taxista */}
          <div className="col-span-1 row-span-1 bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-yellow-500/50 transition-colors group">
            <div className="flex gap-3 justify-between items-start">
              <h3 className="font-teko text-2xl uppercase tracking-wide text-white">TAXISTA<br/><span className="text-gray-400 text-lg">Transporte Civil</span></h3>
              <Car className="text-yellow-500 opacity-50" size={28} />
            </div>
            <div>
              <span className="font-teko text-3xl text-green-400 tracking-wide mt-2 block">PAGO A COORDINAR</span>
              <span className="font-inter text-xs text-gray-400 block mt-1">Define tu propia tarifa</span>
            </div>
          </div>

          {/* GORELIMA (Basura) */}
          <div className="col-span-1 md:col-span-2 row-span-1 bg-white/5 border border-white/10 p-6 flex gap-6 items-center hover:border-emerald-500/50 transition-colors group">
            <div className="w-16 h-16 bg-emerald-950 flex items-center justify-center text-emerald-500 shrink-0 border border-emerald-900/50">
              <Trash2 size={32} />
            </div>
            <div className="flex-1">
              <h3 className="font-teko text-3xl uppercase tracking-wide text-white mb-2">GORELIMA - Recojo de Residuos</h3>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="font-inter text-xs text-gray-500 uppercase tracking-widest">Sueldo Bruto</span>
                  <span className="font-teko text-3xl text-green-400 tracking-wide leading-none">S/. 2,400</span>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="font-inter text-xs text-gray-500 uppercase tracking-widest">Condición</span>
                  <span className="font-teko text-xl text-gray-300 tracking-wide leading-none mt-1">10/10 Capacidad</span>
                </div>
              </div>
            </div>
          </div>

          {/* Camiones de Carga */}
          <div className="col-span-1 md:col-span-2 row-span-1 bg-white/5 border border-white/10 p-6 flex gap-6 items-center hover:border-orange-500/50 transition-colors group">
            <div className="w-16 h-16 bg-orange-950 flex items-center justify-center text-orange-500 shrink-0 border border-orange-900/50">
              <Truck size={32} />
            </div>
            <div className="flex-1">
              <h3 className="font-teko text-3xl uppercase tracking-wide text-white mb-2">TRANSPORTISTAS DE CARGA</h3>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="font-inter text-xs text-gray-500 uppercase tracking-widest">Sueldo Base</span>
                  <span className="font-teko text-3xl text-green-400 tracking-wide leading-none">S/. 1,000</span>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="font-inter text-xs text-gray-500 uppercase tracking-widest">Condición</span>
                  <span className="font-teko text-xl text-gray-300 tracking-wide leading-none mt-1">Por Entrega Completada</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 3: APORTES Y BENEFICIOS (Tarjetas VIP) */}
      <section className="w-full max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-col items-center mb-12 text-center">
          <Star className="text-red-600 mb-3" size={32} />
          <h2 className="font-teko text-4xl md:text-5xl font-bold tracking-widest uppercase text-white mb-2">Aportes y Beneficios</h2>
          <p className="font-inter text-gray-400 text-sm max-w-xl">
            Todo aporte es utilizado para la manutención del servidor y desarrollo de scripts personalizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Tarjeta Donador Normal (Black Card) */}
          <div className="bg-[#0a0a0a] border border-white/10 flex flex-col p-8 relative overflow-hidden group hover:border-white/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[50px] pointer-events-none"></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <h3 className="font-teko text-3xl uppercase tracking-widest text-white">TARJETA DE DONACIONES</h3>
                <p className="font-inter text-sm text-gray-500">"Apoya a la comunidad directamente"</p>
              </div>
              <div className="w-12 h-8 border border-white/20 bg-white/5 flex items-center justify-center rounded-sm">
                <div className="w-6 h-4 bg-white/20 rounded-[2px]"></div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center mb-8">
              <div className="font-inter text-xs text-gray-500 uppercase tracking-wider mb-3">Tiers Disponibles (Robux)</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 font-teko text-xl text-white">5 R$</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 font-teko text-xl text-white">10 R$</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 font-teko text-xl text-white">25 R$</span>
                <span className="px-3 py-1 bg-white/10 border border-red-500/50 font-teko text-xl text-red-400 shadow-[0_0_10px_rgba(220,38,38,0.2)]">50⭐</span>
                <span className="px-3 py-1 bg-white/10 border border-red-500/50 font-teko text-xl text-red-400 shadow-[0_0_10px_rgba(220,38,38,0.2)]">100⭐</span>
              </div>
            </div>

            <div className="mt-auto border-t border-white/10 pt-4 font-inter text-xs text-gray-400">
              <span className="text-red-500 font-semibold">*Nota:</span> Las donaciones de 50 o 100 R$ otorgan el rol oficial de <span className="text-white">@Donador</span>. Reclámalo abriendo un ticket en Discord.
            </div>
            
            <div className="absolute bottom-4 right-4 opacity-20 font-teko text-4xl tracking-widest grayscale">DONOR</div>
          </div>

          {/* Tarjeta Server Booster (Gold/Red) */}
          <div className="bg-gradient-to-br from-red-950 via-neutral-900 to-[#1a1500] border border-yellow-600/30 flex flex-col p-8 relative overflow-hidden group hover:border-yellow-500/60 shadow-[0_0_30px_rgba(202,138,4,0.05)] hover:shadow-[0_0_40px_rgba(202,138,4,0.15)] transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600"></div>
            <div className="absolute -right-10 -bottom-10 opacity-10 text-yellow-600">
              <Zap size={200} />
            </div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <h3 className="font-teko text-3xl uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">SERVER BOOSTER VIP</h3>
                <p className="font-inter text-sm text-yellow-600/60">"Beneficios masivos para mecenas"</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-yellow-500/30 flex items-center justify-center bg-yellow-500/10 text-yellow-500">
                <Zap size={20} className="fill-yellow-500" />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-3 relative z-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-yellow-500" />
                <span className="font-inter text-sm text-gray-200"><strong className="text-white font-semibold">Rol Automático</strong> en Discord.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-yellow-500" />
                <span className="font-inter text-sm text-gray-200"><strong className="text-white font-semibold">2X en Sueldo Base.</strong> Sumas S/. 700 cada 5 días.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-yellow-500" />
                <span className="font-inter text-sm text-gray-200"><strong className="text-white font-semibold">8 Vehículos Exclusivos</strong> totalmente gratis.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-yellow-500" />
                <span className="font-inter text-sm text-gray-200"><strong className="text-white font-semibold">Permisos Multimedia</strong> en chats de la comunidad.</span>
              </div>
            </div>

            <div className="mt-8 border-t border-yellow-600/20 pt-4 font-inter text-xs text-yellow-200/60 relative z-10">
              Si realizas más de un boost, se te pagarán <span className="text-green-400 font-semibold font-teko text-sm">S/. 500 extra</span> a partir de la 2da mejora continua.
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 bg-[#030303] py-12 px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <ShieldAlert className="text-red-600 mb-4 opacity-50" size={32} />
          <p className="font-inter text-gray-400 text-sm max-w-2xl leading-relaxed mb-6">
            Al unirte a nuestro Discord o Servidor de Roblox, <span className="text-white font-semibold border-b border-red-600">ACEPTAS cumplir al 100% las normativas</span> presentadas en esta base de datos. 
            El desconocimiento no exime de la sanción. La interpretación final de cada regla queda sujeta a la discreción del STAFF Administrativo.
          </p>
          <div className="flex gap-6 font-teko text-xl tracking-wider uppercase text-gray-600">
            <a href="#" className="hover:text-red-500 transition-colors">Términos de Roblox</a>
            <a href="#" className="hover:text-red-500 transition-colors">Soporte Técnico</a>
            <a href="#" className="hover:text-red-500 transition-colors">Reportar Abuso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
