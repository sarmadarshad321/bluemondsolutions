import IndustryDetailPage from '@/components/sections/IndustryDetailPage';
import { industries } from '@/lib/siteData';

const industry = industries.find((item) => item.slug === 'retail');

export default function retailPage() {
  return <IndustryDetailPage industry={industry} />;
}