import IndustryDetailPage from '@/components/sections/IndustryDetailPage';
import { industries } from '@/lib/siteData';

const industry = industries.find((item) => item.slug === 'healthcare');

export default function healthcarePage() {
  return <IndustryDetailPage industry={industry} />;
}