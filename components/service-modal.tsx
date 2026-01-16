"use client"

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    title: string
    description: string
    icon: string
    details: string[]
  } | null
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!isOpen || !service) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#EBF4F6] px-6 md:px-8 py-6 border-b border-[#351E73]/10">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{service.icon}</div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#351E73] tracking-tight" style={{ fontFamily: 'var(--font-display), serif' }}>
                {service.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-[#351E73]/60 hover:text-[#351E73] transition-colors duration-200 text-2xl font-light"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-8 py-6">
          <p className="text-[#351E73] text-lg mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Details */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-[#351E73] mb-3">Características principales:</h3>
            <ul className="space-y-2.5">
              {service.details.map((detail, i) => (
                <li key={i} className="text-[#351E73] text-base flex items-start gap-3 font-normal">
                  <span className="text-[#4F6F71] mt-1 font-semibold">✓</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#EBF4F6] px-6 md:px-8 py-4 border-t border-[#351E73]/10 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#351E73] text-white px-8 py-3 rounded-lg font-semibold text-base hover:bg-[#2a1859] transition-all duration-200 shadow-md"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

