"use client"

import { useState } from "react"
import Link from "next/link"
import HeaderSimple from "@/components/header-simple"
import Footer from "@/components/footer"
import ServiceModal from "@/components/service-modal"

export default function EmpresasPage() {
  const [selectedService, setSelectedService] = useState<{
    title: string
    description: string
    icon: string
    details: string[]
  } | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const serviciosEmpresas = [
    {
      title: "Todo Riesgo Empresarial",
      description: "Nuestro seguro todo riesgo empresarial te ofrece la tranquilidad que necesitas para proteger tu empresa de algún evento inesperado que pueda llegar a causarte pérdidas",
      icon: "🛡️",
      details: [
        "Protección contra incendio",
        "Eventos de la naturaleza",
        "Robo y actos malintencionados",
        "Cobertura integral",
      ],
    },
    {
      title: "Pólizas Colectivas",
      description: "Te ayudamos a cuidar tu capital humano con pólizas colectivas que tienen ventajas, como: precios más favorables, sin recargo mensual, debitadas por nómina",
      icon: "👥",
      details: [
        "Vida colectiva",
        "Autos colectivos",
        "Hogar colectivo",
        "Salud colectiva",
        "Mascotas colectivas",
        "Precios favorables",
      ],
    },
    {
      title: "Vida Socios",
      description: "Ten protección para la estabilidad de tu empresa en caso de que pase algún evento inesperado con un socio",
      icon: "🤝",
      details: [
        "Protección de estabilidad empresarial",
        "Cobertura por eventos inesperados",
        "Protección de socios",
        "Continuidad del negocio",
      ],
    },
    {
      title: "Transporte de Mercancías",
      description: "Quédate tranquilo por tu mercancía, ella viaja segura con nosotros en caso de que falte a la entrega, se dañe o se pierda durante su traslado, la roben, etc",
      icon: "🚚",
      details: [
        "Protección durante el traslado",
        "Cobertura por pérdida",
        "Cobertura por daños",
        "Protección contra robo",
      ],
    },
    {
      title: "Sostenibilidad Legal",
      description: "Protege tu empresa de riesgos legales que puedan llegar a generar muchas pérdidas con nuestro equipo de abogados especializados en diferentes áreas",
      icon: "⚖️",
      details: [
        "Protección contra riesgos legales",
        "Equipo de abogados especializados",
        "Diferentes áreas de expertise",
        "Prevención de pérdidas",
      ],
    },
    {
      title: "Protección Digital",
      description: "No te puedes dar el lujo de permitir un secuestro de la información de tu empresa, por eso tenemos esta solución para protegerte de un ciberataque",
      icon: "💻",
      details: [
        "Protección contra ciberataques",
        "Seguridad de información",
        "Prevención de secuestro de datos",
        "Soluciones digitales",
      ],
    },
    {
      title: "Cumplimiento",
      description: "Existe un seguro para cumplir con lo pactado, dale seriedad y confiabilidad a los contratos que ofrezcas o que te ofrezcan y firma con tranquilidad",
      icon: "📋",
      details: [
        "Cumplimiento de contratos",
        "Seriedad y confiabilidad",
        "Protección contractual",
        "Tranquilidad en negociaciones",
      ],
    },
    {
      title: "Responsabilidad Civil Empresarial",
      description: "Tener a tu empresa protegida es seguridad para tu bolsillo. Asegúrate ante cualquier imprevisto y evita grandes pérdidas económicas por accidentes con terceros",
      icon: "⚖️",
      details: [
        "Protección ante imprevistos",
        "Cobertura por accidentes con terceros",
        "Prevención de pérdidas económicas",
        "Seguridad patrimonial",
      ],
    },
    {
      title: "Intermediación de ARL",
      description: "Si todavía tu empresa no tiene intermediario de ARL estás desaprovechando muchos beneficios, es hora de que tengas uno y Whaly estaría muy feliz de serlo",
      icon: "🏢",
      details: [
        "Intermediación especializada",
        "Múltiples beneficios",
        "Propuestas competitivas",
        "Cambio de intermediario",
      ],
    },
    {
      title: "Financiación de Autos",
      description: "Esta es la señal para que compres tu carro nuevo. Nosotros te ayudamos con la financiación del carro que tanto has querido, a las mejores tasas y con muchos beneficios",
      icon: "🚗",
      details: [
        "Financiación de vehículos",
        "Mejores tasas del mercado",
        "Múltiples beneficios",
        "Salvamentos disponibles",
      ],
    },
  ]

  return (
    <main>
      <HeaderSimple />
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
                className="group bg-white border-2 border-[#351E73]/20 rounded-2xl p-6 md:p-8 hover:border-[#351E73] transition-all duration-200 hover:shadow-lg hover:shadow-[#351E73]/10 flex flex-col"
              >
                {/* Icon */}
                <div className="text-4xl mb-5 transition-transform duration-200 group-hover:scale-105">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#351E73] tracking-tight" style={{ fontFamily: 'var(--font-display), serif' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#351E73]/80 text-sm md:text-base mb-6 font-normal leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Ver Más Button */}
                <button
                  onClick={() => {
                    setSelectedService(service)
                    setIsModalOpen(true)
                  }}
                  className="bg-[#351E73] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#2a1859] transition-all duration-200 shadow-md w-full"
                >
                  Ver más
                </button>
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
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedService(null)
        }}
        service={selectedService}
      />
    </main>
  )
}

