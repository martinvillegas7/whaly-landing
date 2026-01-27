"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import HeaderSimple from "@/components/header-simple"
import Footer from "@/components/footer"
import ServiceModal from "@/components/service-modal"

export default function PersonasPage() {
  const [selectedService, setSelectedService] = useState<{
    title: string
    description: string
    image?: string
    icon?: string
    details: string[]
  } | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const serviciosPersonas = [
    {
      title: "Seguro de Vida",
      description: "Asegura la estabilidad económica de tu familia en caso de que faltes o padezcas alguna invalidez",
      image: "/Escenarios/Escenarios-3.jpg",
      details: [
        "Protección financiera para tu familia",
        "Cobertura por fallecimiento",
        "Cobertura por invalidez",
        "Planes personalizados",
      ],
    },
    {
      title: "Seguro de Movilidad",
      description: "Prepárate para cualquier imprevisto en la carretera y protege tu patrimonio por si te roban",
      image: "/Escenarios/Escenarios-4.jpg",
      details: [
        "Carros",
        "Motos",
        "Camiones",
        "Bicicletas",
        "Patinetas",
        "Asistencia y protección cuando más lo necesitas",
      ],
    },
    {
      title: "Renta Pensión",
      description: "Diseña tu jubilación perfecta con nosotros. Te ayudamos garantizando la entrega de la cantidad de plata que escojas durante el periodo de tiempo que prefieras",
      image: "/Escenarios/Escenarios-5.jpg",
      details: [
        "Planes de jubilación personalizados",
        "Cantidad y periodo a tu elección",
        "Garantía de entrega",
        "Planificación financiera",
      ],
    },
    {
      title: "Renta Educación",
      description: "Descansa tranquilo sabiendo que el futuro de tus hijos está asegurado. La renta educativa te permite planificar y ahorrar para lo más importante en tu vida",
      image: "/Escenarios/Escenarios-6.jpg",
      details: [
        "Planificación educativa",
        "Ahorro para el futuro de tus hijos",
        "Tranquilidad garantizada",
        "Planes flexibles",
      ],
    },
    {
      title: "Seguros de Salud",
      description: "Tu salud es lo más importante, te mereces atención rápida y de calidad. Pregunta por nuestras opciones que no dependen de la EPS y por las que te ayudan a complementarla",
      image: "/Escenarios/Escenarios-7.jpg",
      details: [
        "Salud para todos",
        "Salud a tu alcance",
        "Evoluciona",
        "Clásico",
        "Global",
        "Complementa tu EPS",
      ],
    },
    {
      title: "Seguros de Viaje",
      description: "Viaja sin preocupaciones con nuestros seguros de viaje. Te ofrecemos la tranquilidad que necesitas para disfrutar de tus vacaciones o tu trabajo",
      image: "/Escenarios/Escenarios-8.jpg",
      details: [
        "Protección durante tus viajes",
        "Cobertura ante imprevistos",
        "Tranquilidad en vacaciones",
        "Protección en viajes de trabajo",
      ],
    },
    {
      title: "Seguros de Hogar",
      description: "¿Sabías que un incendio puede destruir tu hogar en menos de 30 minutos? Protege tu patrimonio de todos los riesgos que puedan afectarlo",
      image: "/Escenarios/Escenarios-9.jpg",
      details: [
        "Protección contra incendios",
        "Cobertura de patrimonio",
        "Protección de bienes importantes",
        "Cobertura completa del hogar",
      ],
    },
    {
      title: "Crédito Protegido",
      description: "Te tenemos la manera de bajar las cuotas de tu crédito. Por el hecho de tener un préstamo, obligatoriamente necesitas un seguro de vida, el cual sale muy caro con el banco",
      image: "/Escenarios/Escenarios-10.jpg",
      details: [
        "Reduce las cuotas de tu crédito",
        "Seguro de vida más económico",
        "Ahorro mensual garantizado",
        "Alternativa al seguro del banco",
      ],
    },
    {
      title: "Seguro para Mascotas",
      description: "Imagínate que existe un nuevo seguro que protege la salud de tu mascota y se preocupa por prevenir eventos inesperados y dolorosos para ella",
      image: "/Escenarios/Escenarios-11.jpg",
      details: [
        "Entre 4 meses y 8 años",
        "Sin preexistencias",
        "Medellín, Bogotá y Cali",
        "Todas las razas",
        "Protección de salud",
      ],
    },
    {
      title: "Responsabilidad Civil",
      description: "Lo que más puede afectar tu patrimonio es causarle un daño a un tercero, ya sea por tu perro, tus hijos, tu casa o incluso por tu profesión",
      image: "/Escenarios/Escenarios-12.jpg",
      details: [
        "Responsabilidad Familiar",
        "Responsabilidad Profesional",
        "Protección patrimonial",
        "Cobertura por daños a terceros",
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
              <span className="text-[#351E73] font-[800]">Personas</span>
            </h1>
            <p className="text-lg md:text-xl text-[#351E73] max-w-2xl mx-auto leading-relaxed">
              Protección integral diseñada para ti y tu familia
            </p>
            <div className="h-1 w-32 bg-[#351E73] mx-auto rounded-full mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {serviciosPersonas.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedService(service)
                  setIsModalOpen(true)
                }}
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#351E73]/30 via-[#351E73]/8 to-transparent"></div>
                </div>

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
              ¿Listo para proteger a tu familia?
            </h2>
            <p className="text-[#351E73] mb-8 max-w-2xl mx-auto text-base md:text-lg font-normal leading-relaxed">
              Contáctanos hoy para una asesoría personalizada y descubre el plan perfecto para ti
            </p>
            <Link
              href="/#contacto"
              className="bg-[#351E73] text-white px-10 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#2a1859] transition-all duration-300 shadow-lg inline-block"
            >
              Escríbenos
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

