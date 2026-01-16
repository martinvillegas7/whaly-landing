"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EmpresasPage() {
  const serviciosEmpresas = [
    {
      title: "Seguro de Responsabilidad Civil",
      description: "Protección legal y financiera para tu empresa",
      icon: "⚖️",
      details: [
        "Cobertura por daños a terceros",
        "Gastos de defensa legal",
        "Responsabilidad por productos",
        "Protección patrimonial",
      ],
    },
    {
      title: "Seguro de Incendio y Robo",
      description: "Protección de tus activos e instalaciones",
      icon: "🔥",
      details: [
        "Cobertura de incendio",
        "Robo y hurto calificado",
        "Daños por agua",
        "Activos fijos y muebles",
      ],
    },
    {
      title: "Seguro de Equipo y Maquinaria",
      description: "Protección para tu maquinaria y equipos",
      icon: "⚙️",
      details: [
        "Equipos de producción",
        "Maquinaria especializada",
        "Cobertura por rotura",
        "Pérdida de beneficios",
      ],
    },
    {
      title: "Cobertura de Contingencia",
      description: "Protección ante interrupciones del negocio",
      icon: "📊",
      details: [
        "Pérdida de beneficios",
        "Gastos fijos continuos",
        "Interrupción de operaciones",
        "Recuperación de mercado",
      ],
    },
    {
      title: "Seguro de Transporte",
      description: "Protección para tu flota y mercancías",
      icon: "🚚",
      details: [
        "Cobertura de vehículos comerciales",
        "Mercancías en tránsito",
        "Responsabilidad civil vehicular",
        "Asistencia en carretera",
      ],
    },
    {
      title: "Seguro de Ciberriesgos",
      description: "Protección digital para tu empresa",
      icon: "💻",
      details: [
        "Cobertura por ataques cibernéticos",
        "Pérdida de datos",
        "Extorsión digital",
        "Responsabilidad por privacidad",
      ],
    },
    {
      title: "Seguro de Fidelidad",
      description: "Protección ante fraudes internos",
      icon: "🔒",
      details: [
        "Cobertura por desfalcos",
        "Fraude de empleados",
        "Robo de información",
        "Protección patrimonial",
      ],
    },
    {
      title: "Seguro de Directivos",
      description: "Protección para altos ejecutivos",
      icon: "👔",
      details: [
        "Responsabilidad civil de directivos",
        "Gastos de defensa legal",
        "Reclamaciones de accionistas",
        "Cobertura de errores y omisiones",
      ],
    },
    {
      title: "Seguro de Salud Empresarial",
      description: "Cobertura médica para tus empleados",
      icon: "🏥",
      details: [
        "Planes grupales",
        "Medicina prepagada",
        "Atención ambulatoria",
        "Hospitalización",
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
              <span className="text-[#351E73] font-[800]">Empresas</span>
            </h1>
            <p className="text-lg md:text-xl text-[#351E73] max-w-2xl mx-auto leading-relaxed">
              Soluciones completas para proteger tu negocio y activos
            </p>
            <div className="h-1 w-32 bg-[#351E73] mx-auto rounded-full mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {serviciosEmpresas.map((service, index) => (
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
                <div className="h-1.5 w-12 bg-[#4F6F71] rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-white border-2 border-[#351E73]/30 rounded-2xl p-8 md:p-10 text-center mt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight text-[#351E73]" style={{ fontFamily: 'var(--font-display), serif' }}>
              ¿Listo para proteger tu negocio?
            </h2>
            <p className="text-[#351E73] mb-8 max-w-2xl mx-auto text-base md:text-lg font-normal leading-relaxed">
              Contáctanos hoy para una asesoría personalizada y descubre el plan perfecto para tu empresa
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

