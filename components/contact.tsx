"use client"

export default function Contact() {
  const contactInfo = [
    {
      label: "Teléfono",
      value: "3163206697",
      href: "tel:+573163206697",
      icon: "📞",
      accentColor: "from-[#351E73] to-[#4F6F71]",
    },
    {
      label: "WhatsApp",
      value: "Chat directo",
      href: "https://wa.me/573163206697",
      icon: "💬",
      accentColor: "from-[#4F6F71] to-[#BFEAC1]",
    },
    {
      label: "Correo",
      value: "comercial@whalyseguros.com",
      href: "mailto:comercial@whalyseguros.com",
      icon: "📧",
      accentColor: "from-[#BFEAC1] to-[#351E73]",
    },
    {
      label: "Instagram",
      value: "@whaly.seguros",
      href: "https://www.instagram.com/whaly.seguros",
      icon: "📸",
      accentColor: "from-[#351E73] to-[#4F6F71]",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-[#E8E9F5] to-[#B9C0EA] text-[#351E73] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#351E73]">
            <span className="bg-gradient-to-r from-[#351E73] to-[#4F6F71] bg-clip-text text-transparent">
              Listo para agendar
            </span>
            <br />
            <span className="text-[#351E73]">tu tranquilidad</span>
          </h2>
          <p className="text-[#351E73]/80 text-lg max-w-2xl mx-auto">
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
              className="group bg-white/50 border border-[#351E73]/20 rounded-2xl p-6 hover:border-[#351E73]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#351E73]/20 hover:-translate-y-1 hover:bg-white"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>

              {/* Label */}
              <p className="text-sm text-[#351E73]/60 mb-2 font-medium">{contact.label}</p>

              {/* Value */}
              <p className="text-lg font-bold text-[#351E73] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#351E73] group-hover:to-[#4F6F71] group-hover:bg-clip-text transition-all">
                {contact.value}
              </p>

              {/* Accent */}
              <div
                className={`h-1 w-8 bg-gradient-to-r ${contact.accentColor} rounded-full mt-4 group-hover:w-full transition-all duration-300`}
              ></div>
            </a>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="bg-gradient-to-r from-[#351E73]/10 to-[#4F6F71]/10 border border-[#351E73]/20 rounded-2xl p-8 text-center">
          <p className="text-xl text-[#351E73] mb-4">
            📱 <span className="font-bold">Atención rápida y profesional</span>
          </p>
          <p className="text-[#351E73]/80">Disponibles para ti en horario comercial y emergencias las 24 horas</p>
        </div>
      </div>
    </section>
  )
}
