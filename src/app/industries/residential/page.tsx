import IndustryDetailPage from '@/components/sections/IndustryDetailPage';
import { industries } from '@/lib/siteData';

const industry = industries.find((item) => item.slug === 'residential');

export default function residentialPage() {
  return <IndustryDetailPage industry={industry} />;
}