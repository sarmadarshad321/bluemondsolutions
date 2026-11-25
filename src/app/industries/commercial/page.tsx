import IndustryDetailPage from '@/components/sections/IndustryDetailPage';
import { industries } from '@/lib/siteData';

const industry = industries.find((item) => item.slug === 'commercial');

export default function commercialPage() {
  return <IndustryDetailPage industry={industry} />;
}