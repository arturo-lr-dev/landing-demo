"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-24">
        <div
          className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-400/20 to-rose-500/20 blur-3xl rounded-full transition-all duration-[2000ms] ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-stone-950 text-stone-50 text-sm font-bold tracking-wider">
                DEMO GRATIS
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                TU LANDING
                <br />
                <span className="text-amber-600">GRATIS</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-stone-600 max-w-xl leading-relaxed">
              Diseñamos y desarrollamos tu landing page sin coste inicial.
              <span className="text-stone-950 font-bold">
                {" "}
                Solo pagas si te convence.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/34649355701?text=Hola,%20quiero%20solicitar%20una%20demo%20gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-stone-950 text-stone-50 font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 text-center"
              >
                <span className="relative z-10">SOLICITAR DEMO</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-rose-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </a>
              {/* <button className="px-8 py-4 border-2 border-stone-950 text-stone-950 font-bold text-lg hover:bg-stone-950 hover:text-stone-50 transition-all">
                VER EJEMPLOS
              </button> */}
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-black text-stone-950">100%</div>
                <div className="text-sm text-stone-600 font-medium">
                  SIN RIESGO
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-stone-950">24H</div>
                <div className="text-sm text-stone-600 font-medium">
                  PRIMERA VERSIÓN
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-stone-950">0€</div>
                <div className="text-sm text-stone-600 font-medium">
                  COSTE INICIAL
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              mounted
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] bg-gradient-to-br from-stone-900 to-stone-700 rounded-sm overflow-hidden shadow-2xl">
              {/* Mock Browser Window */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-stone-800 flex items-center gap-2 px-3">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Mock Content */}
              <div className="absolute top-8 inset-0 p-8 space-y-4">
                <div className="h-12 bg-stone-600 rounded w-3/4 animate-pulse" />
                <div className="h-6 bg-stone-700 rounded w-1/2 animate-pulse delay-100" />
                <div className="h-6 bg-stone-700 rounded w-2/3 animate-pulse delay-200" />
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="h-32 bg-stone-600 rounded animate-pulse delay-300" />
                  <div className="h-32 bg-stone-600 rounded animate-pulse delay-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-stone-950 text-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 tracking-tight">
            CÓMO FUNCIONA
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                number: "01",
                title: "HABLA CON NOSOTROS",
                description:
                  "Cuéntanos tu proyecto, tu negocio, tu visión. Sin compromisos.",
              },
              {
                number: "02",
                title: "RECIBE TU DEMO",
                description:
                  "En 24-48h tienes tu landing completa, funcional y lista para lanzar.",
              },
              {
                number: "03",
                title: "DECIDE SI CONTINÚAS",
                description:
                  "¿Te gusta? Perfecto. Si no, no pasa nada. Sin coste, sin ataduras.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`space-y-4 transition-all duration-700 delay-${
                  i * 200
                } ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-6xl font-black text-amber-500">
                  {step.number}
                </div>
                <h3 className="text-2xl font-black">{step.title}</h3>
                <p className="text-stone-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                SOLO PAGAS
                <br />
                <span className="text-amber-600">SI TE CONVENCE</span>
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed">
                No creemos en cobrar por adelantado. Creemos en hacer un
                trabajo tan bueno que{" "}
                <span className="text-stone-950 font-bold">
                  quieras quedarte con nosotros
                </span>
                . Si la demo no te convence, no hay cargo. Simple.
              </p>

              <div className="space-y-4">
                {[
                  "Diseño único y personalizado",
                  "Desarrollo profesional",
                  "Optimizado para conversión",
                  "Responsive y rápido",
                  "SEO configurado",
                  "Hosting incluido",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-amber-600 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-stone-100 border-l-4 border-stone-950">
                <div className="text-sm font-bold text-stone-600 mb-2">
                  DESPUÉS DE LA DEMO
                </div>
                <div className="text-4xl font-black text-stone-950 mb-4">
                  €49/mes
                </div>
                <ul className="space-y-2 text-stone-700">
                  <li>✓ Mantenimiento</li>
                  <li>✓ Actualizaciones</li>
                  <li>✓ Soporte técnico</li>
                  <li>✓ Hosting incluido</li>
                  <li>✓ Cambios mensuales</li>
                </ul>
              </div>

              <div className="p-6 bg-amber-50 border border-amber-600">
                <p className="text-sm font-bold text-amber-900">
                  💡 Cancela cuando quieras. Sin permanencias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-stone-900 via-stone-950 to-amber-950 text-stone-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            PRUEBA
            <br />
            <span className="text-amber-500">SIN RIESGO</span>
          </h2>
          <p className="text-xl md:text-2xl text-stone-300">
            La próxima landing que diseñemos podría ser la tuya.
            <br />
            <span className="text-stone-50 font-bold">Gratis.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="https://wa.me/34649355701?text=Hola,%20quiero%20empezar%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-5 bg-amber-600 text-stone-950 font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 text-center"
            >
              <span className="relative z-10">EMPEZAR AHORA</span>
              <div className="absolute inset-0 bg-stone-50 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          <div className="pt-8 text-sm text-stone-400">
            <p>📧 arturo@legasint.com</p>
          </div>
        </div>
      </section>

      {/* Meta Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-stone-900 text-stone-300 border-t border-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm leading-relaxed">
            💡{" "}
            <span className="text-stone-50 font-bold">
              Esta web es un ejemplo real
            </span>{" "}
            de cómo trabajamos. Diseño atrevido, código limpio, mensaje claro.
            <br />
            Así es como creamos tu landing page: directa, funcional y
            memorable.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-stone-950 text-stone-400 border-t border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2025 Landing Demo. Sin ataduras.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-stone-50 transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-stone-50 transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-stone-50 transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
