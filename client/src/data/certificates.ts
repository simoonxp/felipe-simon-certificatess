export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  certificateImage?: string;
  category: 'programming' | 'design' | 'business' | 'data' | 'ai' | 'other';
}

export const certificatesData: Certificate[] = [
  {
    id: '1',
    title: 'Big Data & Analytics',
    issuer: 'FIAP',
    issueDate: 'maio de 2026',
    credentialId: 'CA31608C83C1BB79FB35CACB06ABA833',
    certificateImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663248944928/JtTPXPMpFPQz5xuArgdLag/certificate-bigdata-analytics-VDYkXpSUyHoXdn38ek7AiN.webp',
    category: 'data',
  },
  {
    id: '2',
    title: 'Comece a Criar com o Power BI',
    issuer: 'Microsoft Learning',
    issueDate: 'maio de 2026',
    certificateImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663248944928/JtTPXPMpFPQz5xuArgdLag/certificate-powerbi-create-QWcQjrDJBBM2sHK3npzJiM.webp',
    category: 'data',
  },
  {
    id: '3',
    title: 'Descobrir a Análise de Dados',
    issuer: 'Microsoft Learning',
    issueDate: 'maio de 2026',
    certificateImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663248944928/JtTPXPMpFPQz5xuArgdLag/certificate-data-analysis-6oVdok2rnCyi2vbT6kKTmi.webp',
    category: 'data',
  },
  {
    id: '4',
    title: 'Projetar Relatórios do Power BI',
    issuer: 'Microsoft Learning',
    issueDate: 'maio de 2026',
    certificateImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663248944928/JtTPXPMpFPQz5xuArgdLag/certificate-powerbi-reports-NL3G3EAFWnB84rwYCbY8ve.webp',
    category: 'data',
  },
  {
    id: '5',
    title: 'Desenvolvimento de Sistemas',
    issuer: 'Governo do Estado de São Paulo',
    issueDate: 'abril de 2026',
    category: 'programming',
  },
  {
    id: '6',
    title: 'Python 3 - Mundo 1',
    issuer: 'Curso em Vídeo',
    issueDate: 'março de 2026',
    credentialId: '144F42-66E2-3',
    category: 'programming',
  },
  {
    id: '7',
    title: 'The Hour of A.I.',
    issuer: 'CodeAI',
    issueDate: 'fevereiro de 2026',
    category: 'ai',
  },
];
