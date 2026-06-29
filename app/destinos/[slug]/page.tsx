import Image from "next/image";
import Link from "next/link";
import FormularioCotizacion from "../../components/FormularioCotizacion";

const destinos: Record<string, { nombre: string; descripcion: string; img: string; incluye: string[] }> = {
  amazonas: { nombre: "Amazonas", descripcion: "Sumérgete en la selva más grande del mundo. Una experiencia única de naturaleza, biodiversidad y cultura indígena que te cambiará la vida.", img: "https://images.unsplash.com/photo-1518182170546-07661fd94144?w=800&q=80", incluye: ["Tiquetes aéreos", "Hospedaje en lodge", "Alimentación completa", "Guía especializado", "Excursiones por el río"] },
  cartagena: { nombre: "Cartagena", descripcion: "La ciudad amurallada más hermosa de Colombia. Historia, playas cristalinas, gastronomía y cultura caribeña en un solo destino.", img: "https://images.unsplash.com/photo-1583997052103-b4a1cb974ce5?w=800&q=80", incluye: ["Tiquetes aéreos", "Hotel en el centro histórico", "City tour", "Traslados", "Paseo en chiva"] },
  "la-guajira": { nombre: "La Guajira", descripcion: "El desierto que llega al mar. Punta Gallinas, Cabo de la Vela y la cultura Wayuu te esperan en el norte más extremo de Colombia.", img: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=800&q=80", incluye: ["Transporte terrestre", "Hospedaje en rancherías", "Alimentación", "Guía local Wayuu", "Paseo en jeep"] },
  "san-andres": { nombre: "San Andrés", descripcion: "El mar de los siete colores. Aguas turquesas, arrecifes de coral y el ambiente caribeño más relajante de Colombia.", img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80", incluye: ["Tiquetes aéreos", "Hotel frente al mar", "Snorkel", "Traslados", "Tour por la isla"] },
  "santa-marta": { nombre: "Santa Marta", descripcion: "Mar, sierra y selva en un solo lugar. La ciudad más antigua de Colombia, puerta al Parque Tayrona y la Ciudad Perdida.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", incluye: ["Tiquetes aéreos", "Hotel", "Visita al Tayrona", "Traslados", "Guía"] },
  girardot: { nombre: "Girardot", descripcion: "El destino de descanso favorito de los caleños. Sol, piscinas, ríos y la mejor rumba de fin de semana.", img: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?w=800&q=80", incluye: ["Transporte", "Hotel con piscina", "Desayunos", "Paseo al río Magdalena"] },
  "eje-cafetero": { nombre: "Eje Cafetero", descripcion: "Paisaje Cultural Cafetero declarado Patrimonio de la Humanidad. Jeeps, fincas, café de origen y el Parque del Café te esperan.", img: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80", incluye: ["Transporte", "Finca cafetera", "Tour del café", "Desayunos", "Parque del Café"] },
  europa: { nombre: "Europa", descripcion: "El viejo continente en un solo paquete. París, Roma, Madrid y más ciudades icónicas con toda la logística resuelta.", img: "https://images.unsplash.com/photo-1499856871958-5b9357976b82?w=800&q=80", incluye: ["Tiquetes internacionales", "Hoteles", "Traslados entre ciudades", "Guía en español", "Seguro de viaje"] },
  cancun: { nombre: "Cancún", descripcion: "El Caribe mexicano en todo su esplendor. Playas blancas, hoteles todo incluido, cenotes y la magia de las ruinas mayas.", img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=800&q=80", incluye: ["Tiquetes aéreos", "Hotel todo incluido", "Traslados", "Visita a Chichén Itzá", "Seguro de viaje"] },
  "punta-cana": { nombre: "Punta Cana", descripcion: "República Dominicana en su máxima expresión. Playas paradisíacas, resorts de lujo y el mejor todo incluido del Caribe.", img: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=800&q=80", incluye: ["Tiquetes aéreos", "Resort todo incluido", "Traslados", "Excursión a Saona", "Seguro de viaje"] },
  panama: { nombre: "Panamá", descripcion: "Donde se unen dos océanos. El Canal, la ciudad moderna, las islas San Blas y la selva tropical en un destino único.", img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80", incluye: ["Tiquetes aéreos", "Hotel", "Tour al Canal", "City tour", "Traslados"] },
  ecuador: { nombre: "Ecuador", descripcion: "Cuatro mundos en un país: Galápagos, Amazonía, Andes y Costa. Ecuador es el secreto mejor guardado de Sudamérica.", img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=800&q=80", incluye: ["Tiquetes aéreos", "Hoteles", "Traslados", "Tour por Quito", "Guía en español"] },
};

export default async function DestinoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destino = destinos[slug];

  if (!destino) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="text-5xl mb-4">🌍</p>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Destino no encontrado</h1>
        <p className="text-gray-500 mb-6">El destino que buscas no existe o fue removido.</p>
        <Link href="/" className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white font-sans">

      <div className="bg-red-600 py-4 px-6">
        <Link href="/" className="text-white text-sm opacity-80 hover:opacity-100 transition">
          ← Volver al inicio
        </Link>
      </div>

      <div className="relative h-64 sm:h-96 w-full">
        <Image src={destino.img} alt={destino.nombre} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-end p-6">
          <h1 className="text-white text-4xl font-bold">{destino.nombre}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 gap-10">

        <div>
          <p className="text-gray-600 leading-relaxed mb-6">{destino.descripcion}</p>

          <div className="bg-gray-50 rounded-2xl p-5 mb-6">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">El paquete incluye</p>
            <ul className="flex flex-col gap-2">
              {destino.incluye.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-center">
            <p className="text-red-600 font-semibold text-sm">Precios personalizados según fecha y grupo</p>
            <p className="text-gray-500 text-xs mt-1">Cotiza gratis · Diana te responde en menos de 2 horas</p>
          </div>
        </div>

        <div>
          <p className="text-lg font-bold text-gray-800 mb-4">Cotiza este destino</p>
          <FormularioCotizacion />
        </div>

      </div>
    </main>
  );
}