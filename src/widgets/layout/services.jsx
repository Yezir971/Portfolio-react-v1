import React, { useContext } from 'react'
import { ExternalLink, Code2, ShoppingCart, MessageCircle } from 'lucide-react'
import { MouseContext } from '@/context/mouseContext'
import services from '@/data/services'


const Services = () => {
  let { textEnter, textLeave2 } =
    useContext(MouseContext)
  return (
    <section id="produits" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2
            onMouseEnter={textEnter}
            onMouseLeave={textLeave2}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Mes Produits & Services
          </h2>
          <p
            onMouseEnter={textEnter}
            onMouseLeave={textLeave2}
            className="mt-4 text-xl text-gray-600"
          >
            Des solutions logicielles optimisées pour la performance et le
            business.
          </p>
        </div>

        {/* Grille des projets */}
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave2}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((project) => (
            <div
              key={project.id}
              className={`relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border ${
                project.isPrimary
                  ? 'border-blue-500 ring-1 ring-blue-500'
                  : 'border-gray-200'
              }`}
            >
              {/* Badge si produit principal */}
              {project.isPrimary && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  PRODUIT PHARE
                </div>
              )}

              <div className="p-8 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      project.isPrimary ? 'bg-green-50' : 'bg-blue-50'
                    }`}
                  >
                    {project.iconType === 'saas' ? <MessageCircle className="w-6 h-6 text-green-500" /> : <Code2 className="w-6 h-6 text-blue-500" /> }
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="text-sm font-medium text-gray-500">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pied de carte avec Action */}
              <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-medium text-green-700 flex items-center gap-1">
                  {project.status}
                </span>

                {project.isPrimary ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Acheter la Licence
                  </a>
                ) : (
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
                  >
                    Me contacter <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
