"use client"

export default function Contact() {
  const contactInfo = [
    {
      label: "Teléfono",
      value: "3163206697",
      href: "tel:+573163206697",
      icon: "📞",
      accentColor: "[#351E73]",
    },
    {
      label: "WhatsApp",
      value: "Chat directo",
      href: "https://wa.me/573163206697",
      icon: "💬",
      accentColor: "[#4F6F71]",
    },
    {
      label: "Correo",
      value: "comercial@whalyseguros.com",
      href: "mailto:comercial@whalyseguros.com",
      icon: "📧",
      accentColor: "[#351E73]",
    },
    {
      label: "Instagram",
      value: "@whaly.seguros",
      href: "https://www.instagram.com/whaly.seguros",
      icon: "📸",
      accentColor: "[#4F6F71]",
    },
  ]

  return (
    <section id="contacto" className="bg-[#B9C0EA] text-[#351E73] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#351E73] tracking-tight" style={{ fontFamily: 'var(--font-display), serif' }}>
            <span className="text-[#351E73] font-[800]">
              Listo para agendar
            </span>
            <br />
            <span className="text-[#351E73] font-[800]">tu tranquilidad</span>
          </h2>
          <p className="text-[#351E73] text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Contáctanos por el medio que prefieras y uno de nuestros especialistas te asesorará
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group bg-white border-2 border-[#351E73]/20 rounded-2xl p-6 md:p-8 hover:border-[#351E73] transition-all duration-300 hover:shadow-xl hover:shadow-[#351E73]/20 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>

              {/* Label */}
              <p className="text-xs md:text-sm text-[#351E73] mb-2 font-medium uppercase tracking-wider">{contact.label}</p>

              {/* Value */}
              <p className="text-base md:text-lg font-semibold text-[#351E73] transition-all">
                {contact.value}
              </p>

              {/* Accent */}
              <div
                className={`h-1.5 w-12 rounded-full mt-5 group-hover:w-full transition-all duration-500 ${contact.accentColor === '[#351E73]' ? 'bg-[#351E73]' : 'bg-[#4F6F71]'}`}
              ></div>
            </a>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="bg-white border-2 border-[#351E73]/30 rounded-2xl p-8 md:p-10 text-center mt-12">
          <p className="text-lg md:text-xl text-[#351E73] mb-3">
            📱 <span className="font-semibold">Atención rápida y profesional</span>
          </p>
          <p className="text-[#351E73] text-base md:text-lg font-normal">Disponibles para ti en horario comercial y emergencias las 24 horas</p>
        </div>
      </div>
    </section>
  )
}
