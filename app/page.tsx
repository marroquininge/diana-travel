import Image from "next/image";
import Link from "next/link";
import FormularioCotizacion from "./components/FormularioCotizacion";
import Promociones from "./components/Promociones";

const destinos = [
  { nombre: "San Andrés", slug: "san-andres", img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&q=80" },
  { nombre: "La Guajira", slug: "la-guajira", img: "/images/guajira1.png" },
  { nombre: "Amazonas", slug: "amazonas", img: "/images/amazonas3.jpeg" },
  { nombre: "Santa Marta", slug: "santa-marta", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" },
  { nombre: "Cancún", slug: "cancun", img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=400&q=80" },
  { nombre: "Punta Cana", slug: "punta-cana", img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&q=80" },
  { nombre: "Panamá", slug: "panama", img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&q=80" },
  { nombre: "Europa", slug: "europa", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80" },
  { nombre: "Coveñas", slug: "covenas", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" },
  { nombre: "Girardot", slug: "girardot", img: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?w=400&q=80" },
  { nombre: "Eje Cafetero", slug: "eje-cafetero", img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=400&q=80" },
];

const paquetes = [
  { destino: "Amazonas", detalle: "Tiquetes + hotel + traslados · hotel propio" },
  { destino: "La Guajira", detalle: "Tiquetes + hotel + traslados · hotel propio" },
  { destino: "Santa Marta", detalle: "Tiquetes + hotel + traslados · hotel propio" },
  { destino: "San Andrés", detalle: "Tiquetes + hotel + traslados · hotel propio" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">

      {/* HERO */}
      <section className="relative bg-[#0a1628] text-white overflow-hidden">
        
        {/* NAV SUPERIOR */}
        <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div>
            <p className="text-2xl font-bold italic" style={{fontFamily: 'Georgia, serif'}}>
              <span className="text-yellow-400">Diana</span>
              <span className="text-white">Travel</span>
              <span className="text-yellow-400 text-lg"> ✈</span>
            </p>
            <p className="text-xs text-gray-300 flex items-center gap-1">
              Asesora Oficial <span className="text-blue-400 font-semibold ml-1">On Vacation</span>
            </p>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-300">
            <a href="#destinos" className="hover:text-yellow-400 transition">Inicio</a>
            <a href="#destinos" className="hover:text-yellow-400 transition">Destinos</a>
            <a href="#promociones" className="hover:text-yellow-400 transition">Promociones</a>
            <a href="#experiencias" className="hover:text-yellow-400 transition">Blog</a>
            <a href="#contacto" className="hover:text-yellow-400 transition">Contacto</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/diana_asesora_on_vacation" target="_blank" className="text-gray-300 hover:text-yellow-400 transition text-lg">f</a>
            <a href="https://www.instagram.com/diana_asesora_on_vacation" target="_blank" className="text-gray-300 hover:text-yellow-400 transition text-lg">📷</a>
            <a href="https://www.tiktok.com/@diana_asesora_on_vacation" target="_blank" className="text-gray-300 hover:text-yellow-400 transition text-lg">🎵</a>
            <a href="https://wa.me/573186624920" target="_blank" className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition flex items-center gap-1">
              WhatsApp
            </a>
          </div>
        </div>

        {/* CONTENIDO HERO */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          
          {/* IZQUIERDA */}
          <div>
            <p className="text-yellow-400 font-semibold text-sm mb-3 uppercase tracking-widest">Planeemos juntos</p>
            <h1 className="text-5xl font-black leading-tight mb-4">
              TU PRÓXIMO<br />
              <span className="text-yellow-400">VIAJE</span>
            </h1>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Viaja con la tranquilidad de contar con la asesoría personalizada de <span className="text-white font-semibold">Diana Ramírez</span>, Asesora Oficial <span className="text-blue-400 font-semibold">On Vacation</span> en Cali.
            </p>
            <div className="flex gap-3 flex-wrap mb-6">
              <a href="https://wa.me/573186624920" target="_blank" className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition flex items-center gap-2">
                📱 Cotiza por WhatsApp
              </a>
              <a href="#destinos" className="border border-yellow-400 text-yellow-400 font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
                Ver Destinos →
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <p className="text-gray-300 text-sm">Más de <span className="text-white font-semibold">10 años</span> haciendo realidad los sueños de viajar.</p>
            </div>
          </div>

          {/* DERECHA — FOTO DIANA */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/presentacion_diana.png"
                alt="Diana Ramírez - Asesora On Vacation"
                width={500}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
            {/* TARJETAS FLOTANTES */}
            <div className="absolute top-4 right-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-xs text-center">
              <p className="text-yellow-400 font-bold">🛡</p>
              <p className="text-white text-xs">Respaldo<br/>On Vacation</p>
            </div>
            <div className="absolute bottom-4 left-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-xs text-center">
              <p className="text-yellow-400 font-bold">❤</p>
              <p className="text-white text-xs">Acompañamiento<br/>antes y después</p>
            </div>
          </div>
        </div>

        {/* BARRA DE SERVICIOS */}
        <div className="relative z-10 border-t border-white/10 px-6 py-4">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <span className="flex items-center gap-2">✈ Tiquetes Aéreos</span>
            <span className="flex items-center gap-2">🏨 Hoteles</span>
            <span className="flex items-center gap-2">🍽 Alimentación</span>
            <span className="flex items-center gap-2">🚌 Tours y Excursiones</span>
            <span className="flex items-center gap-2">💳 Financiación a tu medida</span>
          </div>
        </div>

      </section>

      {/* EXPERIENCIAS */}
      <section id="experiencias" className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">✈ Experiencias de Diana</h2>
          <p className="text-gray-500 text-sm mb-6">Destinos que he visitado y te recomiendo con el corazón</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/experiencias/amazonas">
              <div className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group">
                <Image src="/images/amazonas3.jpeg" alt="Amazonas" fill className="object-cover group-hover:scale-105 transition duration-300" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                  <p className="text-yellow-300 text-xs font-semibold">✈ Experiencia de Diana</p>
                  <p className="text-white text-xl font-bold">Amazonas</p>
                  <p className="text-white text-xs opacity-80">"El Amazonas me cambió para siempre"</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* NAV STICKY */}
      <nav className="sticky top-0 bg-white border-b border-gray-100 z-10">
        <div className="max-w-4xl mx-auto flex gap-6 justify-center py-3 text-sm text-gray-500">
          <a href="#destinos" className="hover:text-red-600 transition">Destinos</a>
          <a href="#paquetes" className="hover:text-red-600 transition">Paquetes</a>
          <a href="#asesora" className="hover:text-red-600 transition">Quién soy</a>
          <a href="#contacto" className="hover:text-red-600 transition">Contacto</a>
        </div>
      </nav>

      {/* DESTINOS */}
      <section id="destinos" className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Destinos disponibles</h2>
        <p className="text-gray-500 text-sm mb-6">Colombia y el mundo, al mejor precio</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {destinos.map((d) => (
            <Link href={`/destinos/${d.slug}`} key={d.nombre}>
              <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="relative h-24 w-full">
                  <Image src={d.img} alt={d.nombre} fill className="object-cover" />
                </div>
                <p className="text-center text-sm font-medium py-2 text-gray-700">{d.nombre}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PAQUETES */}
      <section id="paquetes" className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Paquetes destacados</h2>
          <p className="text-gray-500 text-sm mb-6">Todo incluido · Salidas desde Cali</p>
          <div className="flex flex-col gap-4">
            {paquetes.map((p) => (
              <div key={p.destino} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">{p.destino}</p>
                  <p className="text-sm text-gray-500">{p.detalle}</p>
                </div>
                <a href="#contacto" className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-red-700 transition">
                  Cotizar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMOCIONES */}
      <div id="promociones">
        <Promociones />
      </div>

      {/* ASESORA */}
      <section id="asesora" className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tu asesora</h2>
        <div className="rounded-2xl overflow-hidden shadow-md mb-4">
          <Image src="/images/presentacion_diana.png" alt="Diana Ramírez - Asesora On Vacation" width={1200} height={1600} className="w-full h-auto" />
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex gap-5 items-center">
          <div className="flex-shrink-0">
            <Image src="/foto_diana.jpeg" alt="Diana Ramírez Losada" width={80} height={80} className="rounded-full object-cover w-20 h-20" />
          </div>
          <div>
            <p className="font-bold text-gray-800 text-lg">Diana Ramírez Losada</p>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              Asesora autorizada On Vacation con más de 10 años de experiencia ayudando a familias y empresas a viajar sin estrés desde Cali, Bogotá, Medellín, Pereira y Bucaramanga.
            </p>
            <p className="text-sm text-gray-500 mt-1">📞 <a href="tel:+573186624920" className="hover:text-red-600 transition">318 662 4920</a></p>
            <span className="inline-block mt-2 bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
              Asesora autorizada On Vacation
            </span>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-gray-50 py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Cotiza tu viaje</h2>
          <p className="text-gray-500 text-sm mb-6">Gratis y sin compromiso. Diana te responde en menos de 2 horas.</p>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <FormularioCotizacion />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a1628] text-white text-center py-6 px-6">
        <p className="text-yellow-400 font-bold italic text-lg mb-1">Diana Travel ✈</p>
        <p className="text-gray-400 text-xs mb-3">Asesora Oficial On Vacation · Cali, Colombia</p>
        <div className="flex justify-center gap-4 mb-3">
          <a href="https://www.facebook.com/diana_asesora_on_vacation" target="_blank" className="text-gray-400 hover:text-yellow-400 transition text-sm">Facebook</a>
          <a href="https://www.instagram.com/diana_asesora_on_vacation" target="_blank" className="text-gray-400 hover:text-yellow-400 transition text-sm">Instagram</a>
          <a href="https://www.tiktok.com/@diana_asesora_on_vacation" target="_blank" className="text-gray-400 hover:text-yellow-400 transition text-sm">TikTok</a>
        </div>
        <p className="text-gray-600 text-xs">© 2025 · diana.travel · Todos los derechos reservados</p>
      </footer>

    </main>
  );
}