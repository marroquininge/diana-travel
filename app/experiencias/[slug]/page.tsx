import Image from "next/image";
import Link from "next/link";

const experiencias: Record<string, {
  nombre: string;
  subtitulo: string;
  historia: string;
  fotos: string[];
  queHacer: string[];
  queComer: string[];
  mejorEpoca: string;
  tips: string[];
  porQueRecomiendo: string;
  img_portada: string;
}> = {
  amazonas: {
    nombre: "Amazonas",
    subtitulo: "El Amazonas me cambió para siempre",
    historia: "En 2022 tomé la decisión de vivir una de las experiencias más increíbles de mi vida: el Amazonas. Y te confieso algo — desde el momento en que salí de Leticia y crucé la Triple Frontera con Perú y Brasil, supe que este viaje iba a ser diferente a todo. Lo primero que noté fue el silencio. La señal del celular desaparece y de repente te das cuenta de que llevas años sin desconectarte de verdad. El Hotel Amazon te regala eso: paz total, naturaleza pura y la sensación de que el tiempo se detiene. La visita a la Isla de los Micos fue mágica — los pequeños monos tití se trepan por tus brazos como si te conocieran de toda la vida. Y la visita al pueblo indígena te deja sin palabras: sus tradiciones, su pintura corporal y su conexión con la selva te hacen reflexionar sobre lo que realmente importa en la vida.",
    fotos: [
      "/images/diana_amazonas1.jpeg",
      "/images/diana_amazonas2.jpeg",
      "/images/diana_amazonas3.jpeg",
      "/images/diana_amazonas4.jpeg",
      "/images/diana_amazonas5.jpeg",
    ],
    queHacer: [
      "Visita a la Isla de los Micos — los monos tití son increíbles",
      "Recorrido por el pueblo indígena y su cultura ancestral",
      "Kayak por el río Amazonas al amanecer",
      "Canopy en medio de la selva",
      "Visita a la Triple Frontera Colombia, Perú y Brasil",
      "Caminata nocturna por la selva",
      "Visita al Bioparque Mundo Amazónico",
    ],
    queComer: [
      "Piraña frita — el plato más típico de la región",
      "Juanes de pescado — arroz envuelto en hoja de bijao",
      "Tacacho — plátano verde con chicharrón",
      "Jugos de frutas amazónicas: copoazú, camu camu y arazá",
      "Caldos de bagre frescos del río",
    ],
    mejorEpoca: "La mejor época para visitar el Amazonas es entre junio y noviembre, en temporada seca. Los ríos bajan su nivel y puedes ver más fauna. Entre diciembre y mayo hay más lluvias pero la selva está más verde y exuberante.",
    tips: [
      "🦟 Lleva un buen repelente de insectos — es indispensable, úsalo desde que llegues",
      "🚫 Nunca lleves alimentos a tu habitación — los bichos del trópico son muy activos",
      "👟 Usa zapatos cerrados y ropa que cubra brazos y piernas para las caminatas",
      "📵 Desconéctate y disfruta — la señal es muy escasa y eso es parte de la magia",
      "🎒 Empaca ropa ligera y de colores neutros para las excursiones",
      "💊 Consulta con tu médico sobre vacuna de fiebre amarilla antes de viajar",
      "📷 Lleva cámara con buena batería — las fotos que vas a tomar son únicas",
    ],
    porQueRecomiendo: "El Amazonas es el destino que más me ha impactado en toda mi carrera como asesora. No es solo un viaje — es un encuentro con la naturaleza más impresionante del planeta. Fui dos veces y cada vez descubrí algo nuevo. Si estás pensando en ir, no lo dudes más. Te garantizo que vas a volver transformado.",
    img_portada: "/images/diana_amazonas1.jpeg",
  },
};

export default async function ExperienciaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exp = experiencias[slug];

  if (!exp) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="text-5xl mb-4">🌍</p>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Experiencia no encontrada</h1>
        <Link href="/" className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white font-sans">

      {/* HEADER */}
      <div className="bg-red-600 py-4 px-6 flex justify-between items-center">
        <Link href="/" className="text-white text-sm opacity-80 hover:opacity-100 transition">
          ← Volver al inicio
        </Link>
        <Link href="/experiencias" className="text-white text-sm opacity-80 hover:opacity-100 transition">
          Más experiencias
        </Link>
      </div>

      {/* PORTADA */}
      <div className="relative h-72 sm:h-96 w-full">
        <Image src={exp.img_portada} alt={exp.nombre} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <p className="text-yellow-300 text-sm font-semibold mb-2">✈ Experiencia de Diana</p>
          <h1 className="text-white text-4xl font-bold mb-2">{exp.nombre}</h1>
          <p className="text-white opacity-90 text-lg italic">"{exp.subtitulo}"</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* HISTORIA */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 Mi historia</h2>
          <p className="text-gray-600 leading-relaxed text-lg">{exp.historia}</p>
        </div>

        {/* FOTOS */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📸 Fotos reales del viaje</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {exp.fotos.map((foto, i) => (
              <div key={i} className="relative h-40 rounded-xl overflow-hidden">
                <Image src={foto} alt={`${exp.nombre} ${i + 1}`} fill className="object-cover hover:scale-105 transition duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* QUE HACER */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🗺 Qué hacer en {exp.nombre}</h2>
          <ul className="flex flex-col gap-3">
            {exp.queHacer.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-red-600 font-bold mt-0.5">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* QUE COMER */}
        <div className="mb-10 bg-orange-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🍽 Qué comer</h2>
          <ul className="flex flex-col gap-3">
            {exp.queComer.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-orange-500 font-bold mt-0.5">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* MEJOR EPOCA */}
        <div className="mb-10 bg-blue-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">🌤 Mejor época para viajar</h2>
          <p className="text-gray-600 leading-relaxed">{exp.mejorEpoca}</p>
        </div>

        {/* TIPS */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💡 Tips y recomendaciones</h2>
          <ul className="flex flex-col gap-3">
            {exp.tips.map((tip, i) => (
              <li key={i} className="bg-yellow-50 border border-yellow-100 rounded-xl px-4 py-3 text-gray-700 text-sm">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* POR QUE RECOMIENDO */}
        <div className="mb-10 bg-red-50 border border-red-100 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">⭐ Por qué Diana lo recomienda</h2>
          <p className="text-gray-600 leading-relaxed italic">"{exp.porQueRecomiendo}"</p>
          <div className="flex items-center gap-3 mt-4">
            <Image src="/foto_diana.jpeg" alt="Diana Ramírez" width={48} height={48} className="rounded-full object-cover w-12 h-12" />
            <div>
              <p className="font-semibold text-gray-800 text-sm">Diana Ramírez Losada</p>
              <p className="text-xs text-gray-500">Asesora autorizada On Vacation</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-red-600 rounded-2xl p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-2">¿Quieres vivir esta experiencia?</h3>
          <p className="opacity-90 text-sm mb-4">Diana te ayuda a planear todo. Cotiza gratis y sin compromiso.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/#contacto" className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-red-50 transition">
              Cotizar ahora ✈
            </a>
            <a href="https://wa.me/573186624920" target="_blank" className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition">
              WhatsApp directo
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}