import Image from "next/image";
import Link from "next/link";
import FormularioCotizacion from "./components/FormularioCotizacion";

const destinos = [
  { nombre: "Amazonas", slug: "amazonas", img: "/images/amazonas3.jpeg", tipo: "nacional" },
  { nombre: "La Guajira", slug: "la-guajira", img: "/images/guajira1.png", tipo: "nacional" },
  { nombre: "San Andrés", slug: "san-andres", img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&q=80", tipo: "nacional" },
  { nombre: "Santa Marta", slug: "santa-marta", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80", tipo: "nacional" },
  { nombre: "Girardot", slug: "girardot", img: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?w=400&q=80", tipo: "nacional" },
  { nombre: "Coveñas", slug: "covenas", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80", tipo: "nacional" },
  { nombre: "Eje Cafetero", slug: "eje-cafetero", img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=400&q=80", tipo: "nacional" },
  { nombre: "Europa", slug: "europa", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80", tipo: "internacional" },
  { nombre: "Cancún", slug: "cancun", img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=400&q=80", tipo: "internacional" },
  { nombre: "Punta Cana", slug: "punta-cana", img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&q=80", tipo: "internacional" },
  { nombre: "Panamá", slug: "panama", img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&q=80", tipo: "internacional" },
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
      <section className="bg-red-600 text-white text-center py-12 px-6">
        <p className="text-yellow-300 font-semibold text-lg tracking-wide mb-1">☀ on vacation</p>
        <p className="text-sm opacity-80 mb-6">Asesora autorizada · Cali, Colombia</p>
        <h1 className="text-3xl font-bold leading-tight mb-3">
          Viaja con quien conoce<br />cada destino
        </h1>
        <p className="text-base opacity-90 mb-8">
          Diana Ramírez te acompaña desde la cotización hasta tu regreso
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="#contacto" className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-red-50 transition">
            Planea tu viaje ahora ✈
          </a>
          <a href="https://wa.me/573186624920" target="_blank" className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition">
            WhatsApp directo
          </a>
        </div>
      </section>

{/* PROMOCIONES */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔥 Promoción especial</h2>
        <div className="rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/promocion.jpg"
            alt="Mega Paquete On Vacation"
            width={1200}
            height={1600}
            className="w-full h-auto"
          />
        </div>
        <div className="mt-4 text-center">
          <a href="#contacto" className="bg-red-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-red-700 transition inline-block">
            ¡Quiero este paquete! ✈
          </a>
        </div>
      </section>
      
      {/* NAV */}
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

        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Colombia</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {destinos.filter(d => d.tipo === "nacional").map((d) => (
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

        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Internacional</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {destinos.filter(d => d.tipo === "internacional").map((d) => (
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

      {/* ASESORA */}
      <section id="asesora" className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tu asesora</h2>
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex gap-5 items-center">
          <div className="flex-shrink-0">
            <Image
              src="/foto_diana.jpeg"
              alt="Diana Ramírez Losada"
              width={80}
              height={80}
              className="rounded-full object-cover w-20 h-20"
            />
          </div>
          <div>
            <p className="font-bold text-gray-800 text-lg">Diana Ramírez Losada</p>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              Asesora autorizada On Vacation con años de experiencia ayudando a familias y empresas a viajar sin estrés desde Cali, Bogotá, Medellín, Pereira y Bucaramanga.
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
      <footer className="text-center text-xs text-gray-400 py-6 border-t border-gray-100">
        © 2025 · Diana Ramírez Losada · Asesora autorizada On Vacation · Cali, Colombia
      </footer>

    </main>
  );
}