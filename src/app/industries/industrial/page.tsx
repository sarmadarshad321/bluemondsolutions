import IndustryDetailPage from '@/components/sections/IndustryDetailPage';
import { industries } from '@/lib/siteData';

const industry = industries.find((item) => item.slug === 'industrial');

export default function industrialPage() {
  return <IndustryDetailPage industry={industry} />;
}