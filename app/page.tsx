import Image from "next/image";
import Link from "next/link";
import FormularioCotizacion from "../../components/FormularioCotizacion";

const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTj8U1DfTHLAGQGO9nSOQqZbMq-aKYElrdRYLiZJcKb9HmsLGkvPlTSTSd1zgmT1X_kg0svUGZZUCbO/pub?gid=0&single=true&output=csv";

const imagenes: Record<string, string> = {
  amazonas: "https://images.unsplash.com/photo-1518182170546-07661fd94144?w=800&q=80",
  cartagena: "https://images.unsplash.com/photo-1583997052103-b4a1cb974ce5?w=800&q=80",
  "la-guajira": "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=800&q=80",
  "san-andres": "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
  "santa-marta": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  girardot: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?w=800&q=80",
  "eje-cafetero": "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80",
  europa: "https://images.unsplash.com/photo-1499856871958-5b9357976b82?w=800&q=80",
  cancun: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=800&q=80",
  "punta-cana": "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=800&q=80",
  panama: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
  ecuador: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=800&q=80",
};

async function getDestino(slug: string) {
  const res = await fetch(SHEET_URL, { next: { revalidate: 60 } });
  const text = await res.text();
  const rows = text.split("\n").slice(1);
  for (const row of rows) {
    const cols = row.split(",");
    if (cols[0]?.trim() === slug) {
      return {
        slug: cols[0]?.trim(),
        nombre: cols[1]?.trim(),
        descripcion: cols[2]?.trim(),
        tipo: cols[3]?.trim(),
        incluye: cols[4]?.trim().split("|"),
        img: imagenes[slug] || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      };
    }
  }
  return null;
}

export default async function DestinoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destino = await getDestino(slug);

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
              {destino.incluye.map((item: string) => (
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