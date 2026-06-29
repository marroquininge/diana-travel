"use client";
import { useState } from "react";

const destinos = [
  "Amazonas", "Cartagena", "La Guajira", "San Andrés", "Santa Marta",
  "Girardot", "Eje Cafetero", "Europa", "Cancún", "Punta Cana", "Panamá", "Ecuador",
];

export default function FormularioCotizacion() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    nombre: "", telefono: "", correo: "", destino: "", fechaSalida: "", personas: "1", mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Hola Diana! Me interesa cotizar un viaje 🌍
    
*Nombre:* ${form.nombre}
*Teléfono:* ${form.telefono}
*Correo:* ${form.correo}
*Destino:* ${form.destino}
*Fecha de salida:* ${form.fechaSalida}
*Número de personas:* ${form.personas}
*Mensaje:* ${form.mensaje}`;

    const url = `https://wa.me/573186624920?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="text-center py-8">
        <p className="text-4xl mb-3">🎉</p>
        <p className="text-xl font-bold text-gray-800">¡Mensaje enviado!</p>
        <p className="text-gray-500 mt-2">Diana te contactará muy pronto.</p>
        <button
          onClick={() => setEnviado(false)}
          className="mt-6 text-red-600 underline text-sm"
        >
          Hacer otra cotización
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Nombre completo</label>
          <input
            name="nombre" required value={form.nombre} onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Teléfono</label>
          <input
            name="telefono" required value={form.telefono} onChange={handleChange}
            placeholder="300 000 0000"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">Correo electrónico</label>
        <input
          name="correo" type="email" required value={form.correo} onChange={handleChange}
          placeholder="tucorreo@email.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Destino de interés</label>
          <select
            name="destino" required value={form.destino} onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 bg-white"
          >
            <option value="">Selecciona un destino</option>
            {destinos.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Número de personas</label>
          <input
            name="personas" type="number" min="1" max="20" required value={form.personas} onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">Fecha de salida aproximada</label>
        <input
          name="fechaSalida" type="date" required value={form.fechaSalida} onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">Mensaje adicional</label>
        <textarea
          name="mensaje" value={form.mensaje} onChange={handleChange}
          placeholder="¿Tienes alguna preferencia especial? Hotel, actividades, presupuesto..."
          rows={3}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-red-600 text-white font-semibold py-3 rounded-full hover:bg-red-700 transition text-sm"
      >
        Enviar cotización por WhatsApp
      </button>
    </form>
  );
}