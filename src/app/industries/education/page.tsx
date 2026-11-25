import IndustryDetailPage from '@/components/sections/IndustryDetailPage';
import { industries } from '@/lib/siteData';

const industry = industries.find((item) => item.slug === 'education');

export default function educationPage() {
  return <IndustryDetailPage industry={industry} />;
}