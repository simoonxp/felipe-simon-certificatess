import { Award, Calendar, Building2, Hash, Image as ImageIcon } from 'lucide-react';
import { Certificate } from '@/data/certificates';
import { useState } from 'react';

interface CertificateCardProps {
  certificate: Certificate;
}

const categoryColors: Record<string, string> = {
  programming: 'bg-blue-950 border-blue-800',
  design: 'bg-purple-950 border-purple-800',
  business: 'bg-emerald-950 border-emerald-800',
  data: 'bg-orange-950 border-orange-800',
  ai: 'bg-pink-950 border-pink-800',
  other: 'bg-gray-800 border-gray-700',
};

const categoryBadgeColors: Record<string, string> = {
  programming: 'bg-blue-900 text-blue-300',
  design: 'bg-purple-900 text-purple-300',
  business: 'bg-emerald-900 text-emerald-300',
  data: 'bg-orange-900 text-orange-300',
  ai: 'bg-pink-900 text-pink-300',
  other: 'bg-gray-700 text-gray-300',
};

const categoryLabels: Record<string, string> = {
  programming: 'Programação',
  design: 'Design',
  business: 'Negócios',
  data: 'Dados',
  ai: 'I.A.',
  other: 'Outro',
};

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <div
        className={`group relative overflow-hidden rounded-lg border-2 p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${categoryColors[certificate.category] || categoryColors.other}`}
        onClick={() => certificate.certificateImage && setShowImage(true)}
      >
        {/* Linha azul no topo */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600" />

        {/* Ícone no canto superior direito */}
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Award size={48} className="text-blue-600" />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10">
          {/* Badge de categoria */}
          <div className="mb-4 inline-block">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryBadgeColors[certificate.category] || categoryBadgeColors.other}`}>
              {categoryLabels[certificate.category] || 'Outro'}
            </span>
          </div>

          {/* Título */}
          <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
            {certificate.title}
          </h3>

          {/* Informações */}
          <div className="space-y-2 text-sm text-gray-300">
            {/* Emissor */}
            <div className="flex items-center gap-2">
              <Building2 size={16} className="text-blue-400 flex-shrink-0" />
              <span className="font-medium">{certificate.issuer}</span>
            </div>

            {/* Data */}
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-blue-400 flex-shrink-0" />
              <span>{certificate.issueDate}</span>
            </div>

            {/* ID da credencial */}
            {certificate.credentialId && (
              <div className="flex items-center gap-2 pt-2 border-t border-gray-700">
                <Hash size={16} className="text-blue-400 flex-shrink-0" />
                <span className="font-mono text-xs text-gray-400">{certificate.credentialId}</span>
              </div>
            )}

            {/* Botão para ver certificado */}
            {certificate.certificateImage && (
              <div className="flex items-center gap-2 pt-3 border-t border-gray-700">
                <ImageIcon size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-xs text-blue-300 hover:text-blue-200">Ver certificado</span>
              </div>
            )}
          </div>
        </div>

        {/* Efeito hover - linha animada na base */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>

      {/* Modal de imagem */}
      {showImage && certificate.certificateImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setShowImage(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img
              src={certificate.certificateImage}
              alt={certificate.title}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setShowImage(false)}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
