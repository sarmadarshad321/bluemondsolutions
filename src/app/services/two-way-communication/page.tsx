import ServiceDetailPage from '@/components/sections/ServiceDetailPage';
import { services } from '@/lib/siteData';

const service = services.find((item) => item.slug === 'two-way-communication');

export default function TwoWayCommunicationPage() {
  return <ServiceDetailPage service={service} />;
}