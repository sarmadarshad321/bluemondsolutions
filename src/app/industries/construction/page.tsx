import IndustryDetailPage from '@/components/sections/IndustryDetailPage';
import { industries } from '@/lib/siteData';

const industry = industries.find((item) => item.slug === 'construction');

export default function constructionPage() {
  return <IndustryDetailPage industry={industry} />;
}