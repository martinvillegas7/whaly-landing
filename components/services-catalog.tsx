"use client"

interface ServicesCatalogProps {
  onBack: () => void
}

export default function ServicesCatalog({ onBack }: ServicesCatalogProps) {
  const allServices = [
    {
      title: "Seguros Personas y Familias",
      description: "Protección integral para ti y tu familia",
      details: [
        "Seguro de vida individual",
        "Seguro familiar",
        "Seguro de accidentes personales",
        "Protección de salud",
      ],
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Seguros Empresariales",
      description: "Soluciones para proteger tu negocio",
      details: [
        "Seguro de responsabilidad civil",
        "Seguro de incendio y robo",
        "Seguro de equipo y maquinaria",
        "Cobertura de contingencia",
      ],
      icon: "🏢",
    },
    {
      title: "Seguros Obligatorios",
      description: "Cumplimiento legal requerido",
      details: [
        "SOAT (Seguro Obligatorio de Accidentes)",
        "Seguro de responsabilidad civil obligatorio",
        "Cumplimiento normativo",
        "Pólizas garantizadas",
      ],
      icon: "📋",
    },
    {
      title: "Financiación",
      description: "Soluciones de pago flexibles",
      details: [
        "Planes de pago personalizados",
        "Financiación sin intereses",
        "Modalidades de pago adaptadas",
        "Crédito accesible",
      ],
      icon: "💳",
    },
    {
      title: "Análisis Personalizado",
      description: "Asesoramiento especializado",
      details: [
        "Evaluación de riesgos",
        "Propuestas personalizadas",
        "Comparativa de coberturas",
        "Consultoría profesional",
      ],
      icon: "📊",
    },
    {
      title: "Atención Premium",
      description: "Servicio diferenciado",
      details: ["Gestor de seguros dedicado", "Soporte 24/7", "Tramitación rápida", "Aseoramiento continuo"],
      icon: "⭐",
    },
  ]

  return (
    <div className="bg-gradient-to-b from-purple-900 via-gray-900 to-gray-900 min-h-screen text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 py-8 px-6 sticky top-0 z-20 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
            Catálogo de Servicios
          </h1>
          <button
            onClick={onBack}
            className="bg-gradient-to-r from-green-400 to-cyan-400 text-purple-900 px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all"
          >
            ← Volver
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>

              {/* Details */}
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Accent */}
              <div className="h-1 w-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mt-6 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 border border-purple-700/50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para proteger tu tranquilidad?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contáctanos hoy para una asesoría personalizada y descubre cómo podemos ayudarte
          </p>
          <button className="bg-gradient-to-r from-cyan-400 to-green-400 text-purple-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-400/50 transition-all transform hover:scale-105">
            Agendar Consulta
          </button>
        </div>
      </div>
    </div>
  )
}
