async function getPromociones() {
  const SHEET_PROMOCIONES = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTFpOP3ZzMT_LmU8nEjlyBguAyYb-4Q5raL2ZieO2o6iSbHRNHsnEXgsUgsmkjR90uiy8lkDceYTCuK/pub?gid=0&single=true&output=csv";
  try {
    const res = await fetch(SHEET_PROMOCIONES, { cache: "no-store" });
    const text = await res.text();
    const rows = text.split("\n").slice(1);
    return rows
      .filter(row => row.trim())
      .map(row => {
        const match = row.match(/^([^,]+),([^,]+(?:,[^,]+)*),(si|no)\s*$/i);
        if (!match) return null;
        return {
          titulo: match[1]?.trim(),
          imagen_url: match[2]?.trim(),
          activa: match[3]?.trim().toLowerCase() === "si",
        };
      })
      .filter((p): p is { titulo: string; imagen_url: string; activa: boolean } => p !== null && p.activa);
  } catch {
    return [];
  }
}

export default async function Promociones() {
  const promociones = await getPromociones();

  if (promociones.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">🔥 Promociones especiales</h2>
      <p className="text-gray-500 text-sm mb-6">On Vacation · Cupos limitados</p>
      <div className="flex flex-col gap-4 mb-6">
        {promociones.map((p, i) => (
          <div key={i} className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={p.imagen_url}
              alt={p.titulo}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <a href="#contacto" className="bg-red-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-red-700 transition inline-block">
          ¡Quiero este paquete! ✈
        </a>
      </div>
    </section>
  );
}