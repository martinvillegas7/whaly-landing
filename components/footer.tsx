"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 text-gray-300 py-12 px-6 border-t border-purple-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">🐋</div>
              <span className="font-bold text-lg bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
                Whaly Seguros
              </span>
            </div>
            <p className="text-sm text-gray-400">+30 años protegiendo tu tranquilidad</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-800 pt-8 text-center text-sm text-gray-400">
          <p>
            © {currentYear} Whaly Seguros. Todos los derechos reservados. |{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent font-semibold">
              Diferentes de verdad
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
