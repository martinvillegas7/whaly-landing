"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import HeaderSimple from "@/components/header-simple"
import Footer from "@/components/footer"
import ServiceModal from "@/components/service-modal"

export default function EmpresasPage() {
  const [selectedService, setSelectedService] = useState<{
    title: string
    description: string
    image?: string
    icon?: string
    details: string[]
  } | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const serviciosEmpresas = [
    {
      title: "Todo Riesgo Empresarial",
      description: "Nuestro seguro todo riesgo empresarial te ofrece la tranquilidad que necesitas para proteger tu empresa de algún evento inesperado que pueda llegar a causarte pérdidas",
      image: "/Escenarios/Escenarios-13.jpg",
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
      image: "/Escenarios/Escenarios-14.jpg",
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
      image: "/Escenarios/Escenarios-15.jpg",
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
      image: "/Escenarios/Escenarios-16.jpg",
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
      image: "/Escenarios/Escenarios-17.jpg",
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
      image: "/Escenarios/Escenarios-18.jpg",
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
      image: "/Escenarios/Escenarios-19.jpg",
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
      image: "/Escenarios/Escenarios-20.jpg",
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
      image: "/Escenarios/Escenarios-21.jpg",
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
      image: "/Escenarios/Escenarios-22.jpg",
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {serviciosEmpresas.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedService(service)
                  setIsModalOpen(true)
                }}
              >
                {/* Image */}
                {service.image && (
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#351E73]/30 via-[#351E73]/8 to-transparent"></div>
                  </div>
                )}

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-[#351E73] tracking-tight" style={{ fontFamily: 'var(--font-display), serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-[#351E73]/80 text-sm md:text-base mb-4 font-normal leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <button className="text-[#351E73] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                    Ver más
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </button>
                </div>
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
              Escríbenos ahora
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

