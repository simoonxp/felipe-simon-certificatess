import { useState, useMemo } from 'react';
import { certificatesData, type Certificate } from '@/data/certificates';
import CertificateCard from '@/components/CertificateCard';
import { Button } from '@/components/ui/button';

type FilterCategory = 'all' | 'programming' | 'design' | 'business' | 'data' | 'ai' | 'other';

const filterLabels: Record<FilterCategory, string> = {
  all: 'Todos',
  programming: 'Programação',
  design: 'Design',
  business: 'Negócios',
  data: 'Dados',
  ai: 'I.A.',
  other: 'Outros',
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredCertificates = useMemo(() => {
    if (activeFilter === 'all') {
      return certificatesData;
    }
    return certificatesData.filter((cert) => cert.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663248944928/JtTPXPMpFPQz5xuArgdLag/hero-certificates-QWcQjrDJBBM2sHK3npzJiM.webp)',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Certificados de <span className="text-blue-600">Felipe Simon</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Explore minha jornada de aprendizado contínuo através de certificações em programação, análise de dados, inteligência artificial e muito mais.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <span>{certificatesData.length} certificados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div
          className="h-0.5 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663248944928/JtTPXPMpFPQz5xuArgdLag/pattern-accent-NL3G3EAFWnB84rwYCbY8ve.webp)',
            backgroundSize: 'cover',
          }}
        />
      </div>

      {/* Filtros */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3">
          {(Object.keys(filterLabels) as FilterCategory[]).map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? 'default' : 'outline'}
              className={`transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'text-gray-700 hover:border-blue-600'
              }`}
            >
              {filterLabels[category]}
            </Button>
          ))}
        </div>
      </section>

      {/* Grid de Certificados */}
      <section className="container mx-auto px-4 pb-20">
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <CertificateCard certificate={certificate} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum certificado encontrado nesta categoria.</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600 text-sm">
          <p>© 2026 Felipe Simon. Todos os certificados verificáveis através de seus respectivos emissores.</p>
        </div>
      </footer>
    </div>
  );
}
