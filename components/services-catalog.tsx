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
    <div className="bg-[#351E73] min-h-screen text-white">
      {/* Header */}
      <div className="bg-[#351E73] py-8 px-6 sticky top-0 z-20 shadow-lg border-b border-[#2a1859]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold text-[#BFEAC1] tracking-tight" style={{ fontFamily: 'var(--font-display), serif' }}>
            Catálogo de Servicios
          </h1>
          <button
            onClick={onBack}
            className="bg-[#BFEAC1] text-[#351E73] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#a8d4aa] transition-all duration-300 shadow-md"
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
              className="group bg-[#2a1859] border-2 border-[#B9C0EA]/20 rounded-2xl p-6 md:p-8 hover:border-[#BFEAC1] transition-all duration-300 hover:shadow-xl hover:shadow-[#BFEAC1]/20 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#BFEAC1] transition-all tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#B9C0EA] text-sm md:text-base mb-5 font-normal">{service.description}</p>

              {/* Details */}
              <ul className="space-y-2.5">
                {service.details.map((detail, i) => (
                  <li key={i} className="text-[#B9C0EA] text-sm flex items-start gap-2.5 font-normal">
                    <span className="text-[#BFEAC1] mt-1 font-semibold">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Accent */}
              <div className="h-1.5 w-12 bg-[#BFEAC1] rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-[#2a1859] border-2 border-[#B9C0EA]/30 rounded-2xl p-8 md:p-10 text-center mt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight text-[#BFEAC1]" style={{ fontFamily: 'var(--font-display), serif' }}>¿Listo para proteger tu tranquilidad?</h2>
          <p className="text-[#B9C0EA] mb-8 max-w-2xl mx-auto text-base md:text-lg font-normal leading-relaxed">
            Contáctanos hoy para una asesoría personalizada y descubre cómo podemos ayudarte
          </p>
          <button className="bg-[#BFEAC1] text-[#351E73] px-10 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#a8d4aa] transition-all duration-300 shadow-lg">
            Agendar Consulta
          </button>
        </div>
      </div>
    </div>
  )
}
