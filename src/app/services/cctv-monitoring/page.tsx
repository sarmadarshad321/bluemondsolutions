import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { services } from '@/lib/siteData';

const service = services.find((item) => item.slug === 'cctv-monitoring');

export default function cctv_monitoringPage() {
  return <ServiceDetailPage service={service} />;
}