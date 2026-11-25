import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { services } from '@/lib/siteData';

const service = services.find((item) => item.slug === 'incident-reporting');

export default function incident_reportingPage() {
  return <ServiceDetailPage service={service} />;
}