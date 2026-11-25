import IndustryDetailPage from '@/components/sections/IndustryDetailPage';
import { industries } from '@/lib/siteData';

const industry = industries.find((item) => item.slug === 'hospitality');

export default function hospitalityPage() {
  return <IndustryDetailPage industry={industry} />;
}