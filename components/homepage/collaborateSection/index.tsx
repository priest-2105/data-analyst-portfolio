"use client"

import { Monitor, Smartphone, Palette, Code, type LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Monitor,
    title: "UX & UI",
    description: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App",
    description: "Transforming ideas into exceptional web and mobile app experiences.",
  },
  {
    icon: Palette,
    title: "Design & Creative",
    description: "Crafting visually stunning designs that connect with your audience.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Bringing your vision to life with the latest technology and design trends.",
  },
]

export default function CollaborateSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <h2 className="mt-4 max-w-2xl mx-auto text-4xl dark:text-slate-100 md:text-3xl lg:text-4xl font-semibold leading-tight text-transparent bg-clip-text bg-custom-gradient">
          Collaborate with brands and agencies to
          <span className="block mt-2">create impactful results.</span>
        </h2>
        </div>
     


        <div className="-right-0 w-fit mr-auto ml-auto mt-4 rotate-180 bottom-0 bg-white dark:bg-black dark:text-white rounded-full px-4 py-2 shadow-md  animate-updown">
            <span className="text-sm">Services</span>
            <span className="ml-1 text-xs">✨</span>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 text-center  rounded-2xl transition-all duration-300"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 group-hover:bg-gray-50 dark:bg-gray-600 dark:group-hover:bg-gray-700 transition-colors">
                <service.icon className="w-8 h-8 text-gray-600 dark:text-slate-100" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-slate-400">{service.title}</h3>
              <p className="text-gray-600 dark:text-slate-50 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

