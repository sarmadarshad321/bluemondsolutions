import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { services } from '@/lib/siteData';

const service = services.find((item) => item.slug === 'virtual-doorman');

export default function VirtualDoormanPage() {
  return <ServiceDetailPage service={service} />;
}