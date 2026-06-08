import { Award, Calendar, Building2, Hash } from 'lucide-react';
import { Certificate } from '@/data/certificates';

interface CertificateCardProps {
  certificate: Certificate;
}

const categoryColors: Record<string, string> = {
  programming: 'bg-blue-50 border-blue-200',
  design: 'bg-purple-50 border-purple-200',
  business: 'bg-emerald-50 border-emerald-200',
  data: 'bg-orange-50 border-orange-200',
  ai: 'bg-pink-50 border-pink-200',
  other: 'bg-gray-50 border-gray-200',
};

const categoryBadgeColors: Record<string, string> = {
  programming: 'bg-blue-100 text-blue-700',
  design: 'bg-purple-100 text-purple-700',
  business: 'bg-emerald-100 text-emerald-700',
  data: 'bg-orange-100 text-orange-700',
  ai: 'bg-pink-100 text-pink-700',
  other: 'bg-gray-100 text-gray-700',
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
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border-2 p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${categoryColors[certificate.category] || categoryColors.other}`}
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
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
          {certificate.title}
        </h3>

        {/* Informações */}
        <div className="space-y-2 text-sm text-gray-700">
          {/* Emissor */}
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-blue-600 flex-shrink-0" />
            <span className="font-medium">{certificate.issuer}</span>
          </div>

          {/* Data */}
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-blue-600 flex-shrink-0" />
            <span>{certificate.issueDate}</span>
          </div>

          {/* ID da credencial */}
          {certificate.credentialId && (
            <div className="flex items-center gap-2 pt-2 border-t border-gray-300">
              <Hash size={16} className="text-blue-600 flex-shrink-0" />
              <span className="font-mono text-xs text-gray-600">{certificate.credentialId}</span>
            </div>
          )}
        </div>
      </div>

      {/* Efeito hover - linha animada na base */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}
