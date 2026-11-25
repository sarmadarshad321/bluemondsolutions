import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { services } from '@/lib/siteData';

const service = services.find((item) => item.slug === 'monthly-sheets');

export default function MonthlySheetsPage() {
  return <ServiceDetailPage service={service} />;
}