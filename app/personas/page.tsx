"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PersonasPage() {
  const serviciosPersonas = [
    {
      title: "Seguro de Vida Individual",
      description: "Protección financiera para tu familia en caso de fallecimiento",
      icon: "🛡️",
      details: [
        "Cobertura por muerte natural o accidental",
        "Suma asegurada personalizable",
        "Beneficiarios designables",
        "Primas competitivas",
      ],
    },
    {
      title: "Seguro Familiar",
      description: "Protección integral para toda tu familia",
      icon: "👨‍👩‍👧‍👦",
      details: [
        "Cobertura para todos los miembros",
        "Planes adaptados a tu presupuesto",
        "Asistencia médica incluida",
        "Flexibilidad en coberturas",
      ],
    },
    {
      title: "Seguro de Accidentes Personales",
      description: "Protección ante imprevistos y accidentes",
      icon: "🚑",
      details: [
        "Cobertura por invalidez total o parcial",
        "Indemnización diaria por hospitalización",
        "Gastos médicos",
        "Muerte accidental",
      ],
    },
    {
      title: "Protección de Salud",
      description: "Cobertura médica completa para ti y tu familia",
      icon: "🏥",
      details: [
        "Consultas médicas",
        "Hospitalización",
        "Medicamentos",
        "Exámenes y procedimientos",
      ],
    },
    {
      title: "Seguro de Educación",
      description: "Asegura el futuro educativo de tus hijos",
      icon: "📚",
      details: [
        "Cobertura de matrículas",
        "Protección ante fallecimiento del padre",
        "Planes de ahorro educativo",
        "Flexibilidad en pagos",
      ],
    },
    {
      title: "Seguro de Vehículos",
      description: "Protección completa para tu automóvil",
      icon: "🚗",
      details: [
        "Cobertura de daños materiales",
        "Responsabilidad civil",
        "Robo y hurto",
        "Asistencia en carretera",
      ],
    },
  ]

  return (
    <main>
      <Header />
      <div className="bg-[#EBF4F6] text-[#351E73] min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Link
              href="/"
              className="inline-block mb-8 text-[#351E73] hover:text-[#2a1859] transition-colors duration-300 font-medium"
            >
              ← Volver al inicio
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#351E73] tracking-tight" style={{ fontFamily: 'var(--font-display), serif' }}>
              <span className="text-[#351E73] font-[800]">Seguros para </span>
              <span className="text-[#351E73] font-[800]">Personas</span>
            </h1>
            <p className="text-lg md:text-xl text-[#351E73] max-w-2xl mx-auto leading-relaxed">
              Protección integral diseñada para ti y tu familia
            </p>
            <div className="h-1 w-32 bg-[#351E73] mx-auto rounded-full mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {serviciosPersonas.map((service, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-[#351E73]/20 rounded-2xl p-6 md:p-8 hover:border-[#351E73] transition-all duration-300 hover:shadow-xl hover:shadow-[#351E73]/20 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#351E73] transition-all tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#351E73] text-sm md:text-base mb-5 font-normal leading-relaxed">
                  {service.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-[#351E73] text-sm flex items-start gap-2 font-normal">
                      <span className="text-[#4F6F71] mt-1 font-semibold">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Accent Bar */}
                <div className="h-1.5 w-12 bg-[#351E73] rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-white border-2 border-[#351E73]/30 rounded-2xl p-8 md:p-10 text-center mt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight text-[#351E73]" style={{ fontFamily: 'var(--font-display), serif' }}>
              ¿Listo para proteger a tu familia?
            </h2>
            <p className="text-[#351E73] mb-8 max-w-2xl mx-auto text-base md:text-lg font-normal leading-relaxed">
              Contáctanos hoy para una asesoría personalizada y descubre el plan perfecto para ti
            </p>
            <Link
              href="/#contacto"
              className="bg-[#351E73] text-white px-10 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#2a1859] transition-all duration-300 shadow-lg inline-block"
            >
              Contactar Ahora
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

