// export type ServiceItem = {
//   slug: string;
//   href: string;
//   title: string;
//   icon: string;
//   summary: string;
//   hero: {
//     label: string;
//     title: string;
//     description: string;
//   };
//   features: Array<{ title: string; desc: string }>;
//   bullets: string[];
//   cta: {
//     heading: string;
//     copy: string;
//     primary: string;
//     secondary: string;
//   };
// };

// export type IndustryItem = {
//   slug: string;
//   href: string;
//   title: string;
//   icon: string;
//   summary: string;
//   hero: {
//     label: string;
//     title: string;
//     description: string;
//   };
//   highlights: Array<{ title: string; desc: string }>;
//   stats: Array<{ value: string; label: string }>;
//   cta: {
//     heading: string;
//     copy: string;
//     primary: string;
//     secondary: string;
//   };
// };

// export type BlogPost = {
//   slug: string;
//   title: string;
//   date: string;
//   excerpt: string;
//   content: string;
// };

// export const services: ServiceItem[] = [
//   {
//     slug: 'cctv-monitoring',
//     href: '/services/cctv-monitoring',
//     title: 'CCTV Monitoring',
//     icon: '📹',
//     summary: '24/7 remote video surveillance with immediate human verification and alert support.',
//     hero: {
//       label: 'Service',
//       title: 'Remote CCTV Monitoring Built for Every Site',
//       description:
//         'We watch your cameras around the clock and verify every incident with trained security operators so you receive only real alerts.',
//     },
//     features: [
//       { title: 'Live Feed Supervision', desc: 'Continuous camera observation with instant human review for suspicious activity.' },
//       { title: 'Alarm Escalation', desc: 'Automatic escalation to your internal response team or local authorities when threats are confirmed.' },
//       { title: 'Secure Cloud Access', desc: 'Encrypted archive playback for audits, claims, and operational reviews.' },
//     ],
//     bullets: [
//       'Centralized command room visibility',
//       'Motion filtering and false alarm reduction',
//       'Night vision and thermal support for critical environments',
//     ],
//     cta: {
//       heading: 'Lock in surveillance with a robust monitoring pathway.',
//       copy: 'Submit your request and our security specialists will tailor a plan for your camera architecture and incident verification needs.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'incident-reporting',
//     href: '/services/incident-reporting',
//     title: 'Incident Reporting',
//     icon: '🚨',
//     summary: 'Fast analytic reports and evidence packages for every verified security event.',
//     hero: {
//       label: 'Service',
//       title: 'Automated Incident Reporting That Works with Your Workflow',
//       description:
//         'Every verified security incident is captured with video evidence, timeline documentation, and escalation notes so your team can act quickly.',
//     },
//     features: [
//       { title: 'Verified Event Summaries', desc: 'Exact incident timestamps, location data, and operator commentary for each event.' },
//       { title: 'Evidence Bundles', desc: 'Video clips, stills, and supporting metadata packaged cleanly for fast review.' },
//       { title: 'Mobile & Desktop Alerts', desc: 'Notifications delivered through secure channels to keep your stakeholders informed immediately.' },
//     ],
//     bullets: [
//       'Monthly incident intelligence dashboards',
//       'Custom reporting templates for insurers and compliance teams',
//       'Secure evidence retention policies',
//     ],
//     cta: {
//       heading: 'Turn every alarm into a documented security event.',
//       copy: 'Choose incident reporting that reduces response time and increases operational confidence.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'construction-monitoring',
//     href: '/services/construction-monitoring',
//     title: 'Construction Monitoring',
//     icon: '🏗️',
//     summary: 'Construction site coverage designed for high-risk builds, material protection, and personnel safety.',
//     hero: {
//       label: 'Service',
//       title: 'Construction Site Surveillance with Rapid Threat Containment',
//       description:
//         'Maintain visibility across multiple zones and protect heavy equipment, material stockpiles, and crews with targeted monitoring strategies.',
//     },
//     features: [
//       { title: 'Perimeter Breach Detection', desc: 'Real-time alerts for unauthorized access and after-hours movement.' },
//       { title: 'Equipment Loss Prevention', desc: 'Dedicated monitoring of critical assets and parking zones to reduce theft.' },
//       { title: 'Safety Compliance Tracking', desc: 'Observe high-risk operations and escalate unsafe behavior before incidents happen.' },
//     ],
//     bullets: [
//       'Temporary and permanent deployment options',
//       '4G / 5G on-site camera connectivity',
//       'Integration with access control and fencing systems',
//     ],
//     cta: {
//       heading: 'Build protection into every phase of the project.',
//       copy: 'Our construction team designs site-specific surveillance that prevents theft and supports safer operations.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'retail-monitoring',
//     href: '/services/retail-monitoring',
//     title: 'Retail Monitoring',
//     icon: '🏪',
//     summary: 'Loss prevention and customer safety monitoring designed for retail environments of all sizes.',
//     hero: {
//       label: 'Service',
//       title: 'Retail Monitoring That Shrinks Loss and Raises Confidence',
//       description:
//         'We protect your storefront, showroom, and back-of-house with live surveillance and incident reporting designed for retail teams.',
//     },
//     features: [
//       { title: 'Shrinkage Reduction', desc: 'Active observation of registers, stock rooms, and high-risk displays.' },
//       { title: 'Customer Safety Oversight', desc: 'Real-time support for crowd management and slip / trip incident response.' },
//       { title: 'Storewide Visibility', desc: 'A single monitoring feed for multiple stores and pop-up locations.', },
//     ],
//     bullets: [
//       'Loss-prevention playbooks',
//       'Employee safety monitoring',
//       'Integrated alarm and PA override support',
//     ],
//     cta: {
//       heading: 'Keep your retail locations safe and compliant.',
//       copy: 'Submit your site details and our team will define a protective monitoring package for your stores.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'residential-monitoring',
//     href: '/services/residential-monitoring',
//     title: 'Residential Monitoring',
//     icon: '🏠',
//     summary: 'Home and residential community monitoring tailored for family safety and asset protection.',
//     hero: {
//       label: 'Service',
//       title: 'Residential CCTV Monitoring for High-Value Homes and Communities',
//       description:
//         'Protect residential homes, apartments, and gated communities with meticulous camera oversight and alarm verification.',
//     },
//     features: [
//       { title: 'Home Perimeter Coverage', desc: 'Monitor entryways, gates, common areas, and parking zones with smart detection.' },
//       { title: 'Amenity Area Protection', desc: 'Watch pools, gyms, and shared spaces to keep residents safe and insured.' },
//       { title: 'Neighbourhood Incident Response', desc: 'Coordinate alerts across multiple properties for rapid local reaction.', },
//     ],
//     bullets: [
//       'Family-oriented monitoring workflows',
//       'Discrete alarm escalation',
//       'Nighttime thermal protection options',
//     ],
//     cta: {
//       heading: 'Protect what matters most with high-end residential surveillance.',
//       copy: 'We match your home security expectations with quiet, effective monitoring and incident reporting.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'corporate-surveillance',
//     href: '/services/corporate-surveillance',
//     title: 'Corporate Surveillance',
//     icon: '🏢',
//     summary: 'Enterprise-grade monitoring for office towers, campus facilities, and corporate headquarters.',
//     hero: {
//       label: 'Service',
//       title: 'Corporate Surveillance for Modern Office and Campus Security',
//       description:
//         'Secure executive spaces, reception areas, and high-value office zones with intelligent monitoring and loss prevention.',
//     },
//     features: [
//       { title: 'Executive Floor Security', desc: 'Dedicated oversight for restricted suites, server rooms, and visitor entrances.' },
//       { title: 'Campus-wide Surveillance', desc: 'Integrated video coverage across multiple buildings and access points.' },
//       { title: 'Policy and Compliance Support', desc: 'Documentation-ready incident reports for audits and investigations.', },
//     ],
//     bullets: [
//       'Secure network segmentation',
//       'Visitor screening integration',
//       'Custom escalation chains for risk teams',
//     ],
//     cta: {
//       heading: 'Scale security across your corporate estate.',
//       copy: 'Submit your requirements and we will propose the right monitoring plan for your operations.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'fuel-station',
//     href: '/services/fuel-station',
//     title: 'Fuel Station Monitoring',
//     icon: '⛽',
//     summary: 'Forecourt surveillance for pumps, payment lanes, and after-hours brand protection.',
//     hero: {
//       label: 'Service',
//       title: 'Fuel Station Monitoring for High-Risk Forecourts',
//       description:
//         'Protect pumps, transaction lanes, and convenience areas with specialized live surveillance and response protocols.',
//     },
//     features: [
//       { title: 'Drive-Off Detection', desc: 'Rapid confirmation of fuel theft and unattended pump incidents.' },
//       { title: 'Cashier & ATM Coverage', desc: 'Monitor payment zones and self-checkout lanes to deter fraud.' },
//       { title: 'Safety Hazard Monitoring', desc: 'Watch for spill events, fire risk, and unauthorized access after hours.', },
//     ],
//     bullets: [
//       'Discreet forecourt cameras',
//       'Live console support',
//       'Integrated alarm and fire watch procedures',
//     ],
//     cta: {
//       heading: 'Secure your station with a field-proven monitoring service.',
//       copy: 'Our fuel station specialists can help you limit liability and keep stations open safely.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'hospital-school',
//     href: '/services/hospital-school',
//     title: 'Hospital & School Monitoring',
//     icon: '🏥',
//     summary: 'Sensitive environment monitoring for healthcare campuses and educational facilities.',
//     hero: {
//       label: 'Service',
//       title: 'Hospital & School Monitoring with Discretion and Safety',
//       description:
//         'We monitor sensitive healthcare and school environments with careful protocols for privacy, patient safety, and student protection.',
//     },
//     features: [
//       { title: 'Sensitive Area Protection', desc: 'Surveillance that respects privacy while securing key zones like ER, ICU, and campuses.' },
//       { title: 'Visitor Management Support', desc: 'Monitor access points, drop-off areas, and campus perimeters for safe entry control.' },
//       { title: 'Incident Documentation', desc: 'Detailed reporting for medical review, safety investigations, and compliance audits.', },
//     ],
//     bullets: [
//       'Privacy-aware monitoring workflows',
//       'School and hospital safety playbooks',
//       'Rapid escalation to security teams',
//     ],
//     cta: {
//       heading: 'Protect vulnerable spaces with trusted monitoring.',
//       copy: 'We tailor surveillance for sensitive patient, student, and staff environments.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'customized-solutions',
//     href: '/services/customized-solutions',
//     title: 'Customized Solutions',
//     icon: '🛠️',
//     summary: 'Tailored security systems for unique sites, equipment, and operational requirements.',
//     hero: {
//       label: 'Service',
//       title: 'Customized Surveillance Solutions for Unique Security Needs',
//       description:
//         'If your environment demands a bespoke security approach, our engineering team develops layouts, hardware stacks, and monitoring workflows for your objectives.',
//     },
//     features: [
//       { title: 'Site-Specific Design', desc: 'Custom CCTV, access control, and alarm architecture built for your exact footprint.' },
//       { title: 'Specialty Camera Support', desc: 'Thermal, low-light, PTZ, and AI-enhanced cameras integrated precisely where you need them.' },
//       { title: 'Project Delivery Coordination', desc: 'A single team manages design, installation, handover, and monitoring integration.', },
//     ],
//     bullets: [
//       'Custom hardware and software integrations',
//       'Security engineering for non-standard sites',
//       'Turnkey monitoring solutions',
//     ],
//     cta: {
//       heading: 'Build a surveillance solution around your exact requirements.',
//       copy: 'Tell us about your site and we will respond with a tailored plan and pricing.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
// ];

// export const industries: IndustryItem[] = [
//   {
//     slug: 'residential',
//     href: '/industries/residential',
//     title: 'Residential',
//     icon: '🏠',
//     summary: 'Monitoring for apartments, estates, and gated communities with privacy-first coverage.',
//     hero: {
//       label: 'Industry',
//       title: 'Residential Security Built for Homes & Communities',
//       description:
//         'We secure residential environments with perimeter monitoring, amenity supervision, and incident alerting that supports residents and management teams.',
//     },
//     highlights: [
//       { title: 'Estate-Level Surveillance', desc: 'Protect high-value homes and property boundaries without intrusive signage.' },
//       { title: 'Community Amenity Monitoring', desc: 'Oversee shared spaces like lobbies, gyms, and visitor areas safely.' },
//       { title: 'Rapid Alarm Response', desc: 'Delivered through local teams and our live monitoring center.', },
//     ],
//     stats: [
//       { value: '1200+', label: 'Homes Protected' },
//       { value: '99%', label: 'Resident Satisfaction' },
//       { value: '24/7', label: 'Monitoring Coverage' },
//     ],
//     cta: {
//       heading: 'Deliver reassurance to residents and property teams.',
//       copy: 'Our residential monitoring plans are designed for safety, discretion, and simple management.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'commercial',
//     href: '/industries/commercial',
//     title: 'Commercial',
//     icon: '🏢',
//     summary: 'Security for office buildings, retail campuses, and mixed-use commercial zones.',
//     hero: {
//       label: 'Industry',
//       title: 'Commercial Security Designed for Business Continuity',
//       description:
//         'Protect commercial assets, customer-facing spaces, and shared services with live surveillance and incident management built for work environments.',
//     },
//     highlights: [
//       { title: 'Lobby & Access Control', desc: 'Monitor entrances, visitor flow, and secure access points with clear incident pathways.' },
//       { title: 'Retail Annex Protection', desc: 'Track retail, foodservice, and parking areas within commercial hubs.' },
//       { title: 'Operational Risk Reduction', desc: 'Reduce shrinkage, liability, and unauthorized access costs.', },
//     ],
//     stats: [
//       { value: '90+', label: 'Complexes Serviced' },
//       { value: '48h', label: 'Average Response Time' },
//       { value: '95%', label: 'False Alarm Reduction' },
//     ],
//     cta: {
//       heading: 'Secure your commercial environment with enterprise-grade monitoring.',
//       copy: 'We align monitoring with your business operations and tenant safety goals.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'construction',
//     href: '/industries/construction',
//     title: 'Construction',
//     icon: '🏗️',
//     summary: 'Deployment-ready monitoring for active construction sites and infrastructure projects.',
//     hero: {
//       label: 'Industry',
//       title: 'Construction Surveillance That Keeps Sites Moving',
//       description:
//         'Our construction monitoring solutions are engineered for changing work zones, material theft prevention, and crew safety oversight.',
//     },
//     highlights: [
//       { title: 'Mobile Site Security', desc: 'Quickly deploy cameras, power, and connectivity across multiple builds.' },
//       { title: 'Material Theft Prevention', desc: 'Track compound access and high-value equipment constantly.' },
//       { title: 'Safety Assurance', desc: 'Monitor hazardous operations and alert supervisors immediately.', },
//     ],
//     stats: [
//       { value: '210+', label: 'Active Projects' },
//       { value: '20%', label: 'Theft Reduction' },
//       { value: '4.8/5', label: 'Client Satisfaction' },
//     ],
//     cta: {
//       heading: 'Protect your build from day one.',
//       copy: 'Our construction monitoring is built to keep projects secure, compliant, and on schedule.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'healthcare',
//     href: '/industries/healthcare',
//     title: 'Healthcare',
//     icon: '🏥',
//     summary: 'Sensitive environment monitoring for hospitals, clinics, and care facilities.',
//     hero: {
//       label: 'Industry',
//       title: 'Healthcare Monitoring with Patient Safety and Privacy in Mind',
//       description:
//         'We secure patient areas, entry points, and emergency departments while respecting clinical privacy requirements and regulatory demands.',
//     },
//     highlights: [
//       { title: 'Critical Zone Monitoring', desc: 'Protect ER, ICU, supply rooms, and staff dispatch areas.' },
//       { title: 'Patient Safety Support', desc: 'Observe walkways, waiting rooms, and public spaces for safety incidents.' },
//       { title: 'Regulatory Reporting', desc: 'Capture evidence and incident logs for healthcare compliance.', },
//     ],
//     stats: [
//       { value: '45+', label: 'Medical Zones' },
//       { value: '24/7', label: 'Operator Coverage' },
//       { value: '99%', label: 'Privacy Compliance' },
//     ],
//     cta: {
//       heading: 'Maintain a safe, compliant healthcare environment.',
//       copy: 'Our services are built for the sensitivity and urgency of healthcare spaces.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'education',
//     href: '/industries/education',
//     title: 'Education',
//     icon: '🎓',
//     summary: 'Campus safety monitoring built for schools, colleges, and training centers.',
//     hero: {
//       label: 'Industry',
//       title: 'Education Security That Supports Students and Staff',
//       description:
//         'Keep campuses safe with monitoring that balances security, learning environments, and visitor management.',
//     },
//     highlights: [
//       { title: 'Campus Perimeter Defense', desc: 'Protect entry points, parking lots, and transverse access routes.' },
//       { title: 'Classroom & Common Area Safety', desc: 'Monitor large gatherings and high-traffic student zones.' },
//       { title: 'Emergency Preparedness', desc: 'Rapidly escalate incidents to safety teams and administrators.', },
//     ],
//     stats: [
//       { value: '80+', label: 'Campus Networks' },
//       { value: '90%', label: 'Safety Review Approval' },
//       { value: '24/7', label: 'Coverage Availability' },
//     ],
//     cta: {
//       heading: 'Secure campuses while preserving a supportive learning atmosphere.',
//       copy: 'Our education monitoring plans are tuned for student safety and operational resilience.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'hospitality',
//     href: '/industries/hospitality',
//     title: 'Hospitality',
//     icon: '🏨',
//     summary: 'Guest experience security for hotels, resorts, and hospitality venues.',
//     hero: {
//       label: 'Industry',
//       title: 'Hospitality Monitoring That Protects Guests and Reputation',
//       description:
//         'Our hospitality surveillance secures guest arrivals, public venues, and back-of-house operations without disrupting premium service.',
//     },
//     highlights: [
//       { title: 'Guest Arrival Visibility', desc: 'Monitor valet, lobby, and reception zones for safety and welcome excellence.' },
//       { title: 'Event & Venue Coverage', desc: 'Protect ballrooms, dining areas, and pool decks with focused monitoring.' },
//       { title: 'Reputation Risk Control', desc: 'Capture incidents cleanly to support rapid remediation and guest communication.', },
//     ],
//     stats: [
//       { value: '60+', label: 'Venues Protected' },
//       { value: '98%', label: 'Incident Resolution' },
//       { value: '4.9/5', label: 'Guest Satisfaction' },
//     ],
//     cta: {
//       heading: 'Keep hospitality spaces safe without sacrificing ambience.',
//       copy: 'We design monitoring that complements your brand and protects your guests.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'industrial',
//     href: '/industries/industrial',
//     title: 'Industrial',
//     icon: '🏭',
//     summary: 'Monitoring for factories, logistics facilities, and industrial campuses.',
//     hero: {
//       label: 'Industry',
//       title: 'Industrial Security for High-Risk Facilities',
//       description:
//         'Keep industrial operations safe with surveillance that observes yard activity, loading docks, and process zones.',
//     },
//     highlights: [
//       { title: 'Critical Asset Protection', desc: 'Monitor machinery, warehousing, and shipping areas with constant visibility.' },
//       { title: 'Hazard Response Support', desc: 'Observe safety zones and rapidly notify on potential process incidents.' },
//       { title: 'Access & Perimeter Control', desc: 'Reduce unauthorized entry with monitored gates and storage compounds.', },
//     ],
//     stats: [
//       { value: '110+', label: 'Logistics Yards' },
//       { value: '22%', label: 'Theft Reduction' },
//       { value: '24/7', label: 'Monitoring Availability' },
//     ],
//     cta: {
//       heading: 'Create resilient protection for industrial operations.',
//       copy: 'Our monitoring solutions help you secure assets, people, and productivity.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
//   {
//     slug: 'retail',
//     href: '/industries/retail',
//     title: 'Retail',
//     icon: '🛍️',
//     summary: 'Security for retail environments and shopping destinations of every scale.',
//     hero: {
//       label: 'Industry',
//       title: 'Retail Security That Protects People and Profit',
//       description:
//         'We monitor storefronts, malls, and retail chains with specialized anti-shrink and loss-prevention workflows.',
//     },
//     highlights: [
//       { title: 'Open Floor Oversight', desc: 'Protect point-of-sale areas, aisles, and back-of-house operations.' },
//       { title: 'Loss Prevention Intelligence', desc: 'Use incident reporting to identify trends and close gaps quickly.' },
//       { title: 'Customer Safety Management', desc: 'Monitor occupancy, crowding, and emergency exits with clarity.', },
//     ],
//     stats: [
//       { value: '320+', label: 'Outlets Armed' },
//       { value: '98%', label: 'Detection Accuracy' },
//       { value: '24/7', label: 'Retail Coverage' },
//     ],
//     cta: {
//       heading: 'Protect your retail operation from shrinkage and disruption.',
//       copy: 'Our retail monitoring plans are designed around your customer experience and loss prevention goals.',
//       primary: 'Request a Quote',
//       secondary: 'Contact Sales',
//     },
//   },
// ];

// export const blogPosts: BlogPost[] = [
//   {
//     slug: 'remote-monitoring-best-practices',
//     title: 'Remote Monitoring Best Practices for Modern Security',
//     date: 'June 1, 2026',
//     excerpt: 'How smart remote monitoring reduces risk, improves response times, and gives teams greater confidence in their security footprint.',
//     content:
//       'Remote monitoring is more than cameras and feeds. It is a combination of strong processes, verified incident workflows, and technology that adapts to your environment. At BlueMond, we focus on human-verified alerts, data-backed reporting, and layered access control to ensure every event is handled with precision.',
//   },
//   {
//     slug: 'why-incident-reporting-matters',
//     title: 'Why Incident Reporting Matters in Security Operations',
//     date: 'May 22, 2026',
//     excerpt: 'Incident reporting turns reactive operations into proactive security programs. Learn what makes a report useful and actionable.',
//     content:
//       'A strong incident report does more than document an event. It provides clarity for decision makers, helps insurance reviews, and drives operational improvements. That is why BlueMond packages reports with timeline data, evidence assets, and contextual operator notes.',
//   },
//   {
//     slug: 'scaling-security-for-construction-sites',
//     title: 'Scaling Security for Construction Sites',
//     date: 'May 10, 2026',
//     excerpt: 'Construction projects need security that can move with the site. These are the strategies that work for active builds.',
//     content:
//       'Construction security demands mobility, visibility, and integration with site operations. Portable cameras, thermal detection, and dedicated monitoring teams all play a part in reducing theft and keeping crews safe.',
//   },
//   {
//     slug: 'choosing-a-service-provider',
//     title: 'Choosing a Security Service Provider: What to Look For',
//     date: 'April 28, 2026',
//     excerpt: 'Selecting the right security partner requires more than price. Focus on response, reporting, and solution consistency.',
//     content:
//       'The best provider offers clear escalation paths, transparent reporting, and a proven ability to adapt to your site. Look for teams that pair technology with experienced operators and measurable service standards.',
//   },
// ];

// export const careersPage = {
//   title: 'Join BlueMond Solutions',
//   label: 'Careers',
//   heading: 'Build the future of remote security.',
//   description:
//     'We are looking for sharp, responsible, and motivated team members who want to help protect people, property, and continuity of operations through modern surveillance services.',
//   openings: [
//     {
//       role: 'Remote Monitoring Specialist',
//       location: 'Toronto, ON / Remote',
//       summary: 'Monitor live feeds, verify alerts, and coordinate response procedures for high-risk facilities.',
//     },
//     {
//       role: 'Security Solutions Engineer',
//       location: 'Toronto, ON',
//       summary: 'Design surveillance layouts, integrate camera systems, and support deployments for complex sites.',
//     },
//     {
//       role: 'Client Success Manager',
//       location: 'Remote',
//       summary: 'Serve as the primary contact for existing clients and ensure their security programs stay aligned with operational goals.',
//     },
//   ],
// };

// export const resourcesPage = {
//   title: 'Resources',
//   label: 'Resources',
//   heading: 'Security insights and operational guides.',
//   description:
//     'Browse our guides, case studies, and tools designed to help security leaders make informed decisions about monitoring, incident management, and infrastructure readiness.',
//   items: [
//     {
//       label: 'Security Operations Guide',
//       description: 'A framework for evaluating remote monitoring maturity across your sites.',
//       href: '#',
//     },
//     {
//       label: 'Incident Response Checklist',
//       description: 'A practical checklist to standardize escalation and reporting after a security event.',
//       href: '#',
//     },
//     {
//       label: 'Technology Integration Workbook',
//       description: 'A planning guide for connecting cameras, alarms, and access control systems to a monitoring platform.',
//       href: '#',
//     },
//   ],
// };

// export const legalPages = {
//   'privacy-policy': {
//     title: 'Privacy Policy',
//     content: [
//       'BlueMond Solutions is committed to protecting your privacy. We collect only the personal information necessary to respond to inquiries and deliver services.',
//       'Information collected through our website is used to manage communications, support requests, and service delivery. We do not sell personal data to third parties.',
//       'We use industry standard security controls to protect data and we retain information only for as long as it is needed to fulfill the purpose for which it was collected.',
//     ],
//   },
//   terms: {
//     title: 'Terms & Conditions',
//     content: [
//       'By using this website, you agree to the terms and conditions outlined by BlueMond Solutions. Our services are provided subject to separate contractual agreements.',
//       'Information on this site is provided for general informational purposes only and does not constitute a guarantee of performance.',
//       'All trademarks, logos, and service marks displayed on this site are the property of their respective owners.',
//     ],
//   },
//   'cookie-policy': {
//     title: 'Cookie Policy',
//     content: [
//       'This website uses cookies and similar tracking technologies to improve user experience and site performance.',
//       'Cookies are used to remember preferences, analyze site usage, and support navigation. You can manage your browser cookie settings at any time.',
//       'No personally identifying data is stored in cookies by BlueMond Solutions unless you choose to submit it through a form on this site.',
//     ],
//   },
//   disclaimer: {
//     title: 'Disclaimer',
//     content: [
//       'BlueMond Solutions provides this website for informational purposes only. We do not guarantee that the information is complete, accurate, or fully up to date.',
//       'Use of this site does not create a contractual relationship with BlueMond Solutions unless expressly agreed in writing.',
//       'BlueMond Solutions is not liable for any indirect or consequential losses arising from the use of information on this website.',
//     ],
//   },
// };


export type ServiceItem = {
  slug: string;
  href: string;
  title: string;
  icon: string;
  summary: string;
  hero: {
    label: string;
    title: string;
    description: string;
  };
  features: Array<{ title: string; desc: string }>;
  bullets: string[];
  cta: {
    heading: string;
    copy: string;
    primary: string;
    secondary: string;
  };
};

export type IndustryItem = {
  slug: string;
  href: string;
  title: string;
  icon: string;
  summary: string;
  hero: {
    label: string;
    title: string;
    description: string;
  };
  highlights: Array<{ title: string; desc: string }>;
  stats: Array<{ value: string; label: string }>;
  cta: {
    heading: string;
    copy: string;
    primary: string;
    secondary: string;
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const services: ServiceItem[] = [
  {
    slug: 'cctv-monitoring',
    href: '/services/cctv-monitoring',
    title: 'CCTV Monitoring',
    icon: '📹',
    summary: '24/7 remote video surveillance with immediate human verification and alert support.',
    hero: {
      label: 'Service',
      title: 'Remote CCTV Monitoring Built for Every Site',
      description:
        'We watch your cameras around the clock and verify every incident with trained security operators so you receive only real alerts.',
    },
    features: [
      { title: 'Live Feed Supervision', desc: 'Continuous camera observation with instant human review for suspicious activity.' },
      { title: 'Alarm Escalation', desc: 'Automatic escalation to your internal response team or local authorities when threats are confirmed.' },
      { title: 'Secure Cloud Access', desc: 'Encrypted archive playback for audits, claims, and operational reviews.' },
    ],
    bullets: [
      'Centralized command room visibility',
      'Motion filtering and false alarm reduction',
      'Night vision and thermal support for critical environments',
    ],
    cta: {
      heading: 'Lock in surveillance with a robust monitoring pathway.',
      copy: 'Submit your request and our security specialists will tailor a plan for your camera architecture and incident verification needs.',
      primary: 'Request a Quote',
      secondary: 'Contact Sales',
    },
  },
  {
    slug: 'incident-reporting',
    href: '/services/incident-reporting',
    title: 'Incident Reporting',
    icon: '🚨',
    summary: 'Fast analytic reports and evidence packages for every verified security event.',
    hero: {
      label: 'Service',
      title: 'Automated Incident Reporting That Works with Your Workflow',
      description:
        'Every verified security incident is captured with video evidence, timeline documentation, and escalation notes so your team can act quickly.',
    },
    features: [
      { title: 'Verified Event Summaries', desc: 'Exact incident timestamps, location data, and operator commentary for each event.' },
      { title: 'Evidence Bundles', desc: 'Video clips, stills, and supporting metadata packaged cleanly for fast review.' },
      { title: 'Mobile & Desktop Alerts', desc: 'Notifications delivered through secure channels to keep your stakeholders informed immediately.' },
    ],
    bullets: [
      'Monthly incident intelligence dashboards',
      'Custom reporting templates for insurers and compliance teams',
      'Secure evidence retention policies',
    ],
    cta: {
      heading: 'Turn every alarm into a documented security event.',
      copy: 'Choose incident reporting that reduces response time and increases operational confidence.',
      primary: 'Request a Quote',
      secondary: 'Contact Sales',
    },
  },
  {
    slug: 'two-way-communication',
    href: '/services/two-way-communication',
    title: 'Two-Way Communication',
    icon: '🗣️',
    summary: 'Live audio intervention to instantly challenge intruders and voice-down perimeter threats.',
    hero: {
      label: 'Service',
      title: 'Real-Time Audio Intervention and Voice-Down Loops',
      description:
        'Our operators do not just watch threats—they talk back. Instantly intercept layout perimeter breaches with authoritative live microphone overrides.',
    },
    features: [
      { title: 'Live Voice-Downs', desc: 'Direct audio deployment to ward off trespassers and malicious actors before damage occurs.' },
      { title: 'Dual-Channel Intercoms', desc: 'Seamless synchronization between our terminal desk and your on-site hardware network.' },
      { title: 'Emergency Announcements', desc: 'Broadcast tactical clearance warnings during active site security events.' },
    ],
    bullets: [
      'Sub-second micro-speaker activation latency',
      'High-decibel weatherproof operational horn support',
      'Fully logged and recorded audio transmission packages',
    ],
    cta: {
      heading: 'Stop crimes in progress with active voice commands.',
      copy: 'Integrate remote live talk-back systems into your strategic perimeter loop layout today.',
      primary: 'Request a Quote',
      secondary: 'Contact Sales',
    },
  },
  {
    slug: 'virtual-doorman',
    href: '/services/virtual-doorman',
    title: 'Virtual Doorman',
    icon: '🔑',
    summary: 'Remote visitor verification, credential logging, and secure access control nodes.',
    hero: {
      label: 'Service',
      title: 'Automated Enterprise Entry & Digital Gatekeeper Nodes',
      description:
        'Replace expensive on-site security desks with our virtual gatekeeper operations. We verify credentials, log deliveries, and unlock gates remotely.',
    },
    features: [
      { title: 'Visitor Credential Verification', desc: 'Live visual identification and guest matching against structural whitelist databases.' },
      { title: 'Remote Access Control', desc: 'Secure control node signals to open gates, bay turnstiles, and main structural barriers.' },
      { title: 'Logistics Desk Management', desc: 'Continuous tracking of incoming cargo drivers, couriers, and out-of-hours drop-offs.' },
    ],
    bullets: [
      'Seamless multi-tenant entry layout coordination',
      'Real-time automated credential logging timelines',
      'Anti-tailgating surveillance enforcement matrices',
    ],
    cta: {
      heading: 'Optimize entryways with a digital security front desk.',
      copy: 'Deploy an automated cloud doorman layout to protect facility perimeters effortlessly.',
      primary: 'Request a Quote',
      secondary: 'Contact Sales',
    },
  },
  {
    slug: 'monthly-sheets',
    href: '/services/monthly-sheets',
    title: 'Monthly Sheets',
    icon: '📊',
    summary: 'Comprehensive analytical reports, operational metric sheets, and health data tracking.',
    hero: {
      label: 'Service',
      title: 'Comprehensive Operational Analytics & Security Metric Sheets',
      description:
        'Get absolute insight into your structural perimeter health. We deliver structured data analytics detailing every alarm, checkpoint trip, and system runtime metric.',
    },
    features: [
      { title: 'Perimeter Health Analytics', desc: 'Deep-dive metrics showcasing structural alert distributions across active monitoring nodes.' },
      { title: 'Operator Action Logs', desc: 'Granular timeline accountability verifying operator inspection metrics and dispatch trigger loops.' },
      { title: 'False Alarm Diagnostic Sheets', desc: 'Insightful system tuning charts outlining telemetry noise dropouts and system optimization recommendations.' },
    ],
    bullets: [
      'In-depth monthly executive PDF dashboard bundles',
      'Operational risk trend analysis charts over time',
      'Compliance and insurance audit-ready documentation keys',
    ],
    cta: {
      heading: 'Gain clear analytical proof of your perimeter protection.',
      copy: 'Receive comprehensive, metrics-driven data summaries delivered straight to your operational management desk every month.',
      primary: 'Request a Quote',
      secondary: 'Contact Sales',
    },
  },
];

export const industries: IndustryItem[] = [
  {
    slug: 'residential',
    href: '/industries/residential',
    title: 'Residential',
    icon: '🏠',
    summary: 'Monitoring for apartments, estates, and gated communities with privacy-first coverage.',
    hero: {
      label: 'Industry',
      title: 'Residential Security Built for Homes & Communities',
      description:
        'We secure residential environments with perimeter monitoring, amenity supervision, and incident alerting that supports residents and management teams.',
    },
    highlights: [
      { title: 'Estate-Level Surveillance', desc: 'Protect high-value homes and property boundaries without intrusive signage.' },
      { title: 'Community Amenity Monitoring', desc: 'Oversee shared spaces like lobbies, gyms, and visitor areas safely.' },
      { title: 'Rapid Alarm Response', desc: 'Delivered through local teams and our live monitoring center.' },
    ],
    stats: [
      { value: '1200+', label: 'Homes Protected' },
      { value: '99%', label: 'Resident Satisfaction' },
      { value: '24/7', label: 'Monitoring Coverage' },
    ],
    cta: {
      heading: 'Deliver reassurance to residents and property teams.',
      copy: 'Our residential monitoring plans are designed for safety, discretion, and simple management.',
      primary: 'Request a Quote',
      secondary: 'Contact Sales',
    },
  },
  {
    slug: 'commercial',
    href: '/industries/commercial',
    title: 'Commercial',
    icon: '🏢',
    summary: 'Security for office buildings, retail campuses, and mixed-use commercial zones.',
    hero: {
      label: 'Industry',
      title: 'Commercial Security Designed for Business Continuity',
      description:
        'Protect commercial assets, customer-facing spaces, and shared services with live surveillance and incident management built for work environments.',
    },
    highlights: [
      { title: 'Lobby & Access Control', desc: 'Monitor entrances, visitor flow, and secure access points with clear incident pathways.' },
      { title: 'Retail Annex Protection', desc: 'Track retail, foodservice, and parking areas within commercial hubs.' },
      { title: 'Operational Risk Reduction', desc: 'Reduce shrinkage, liability, and unauthorized access costs.' },
    ],
    stats: [
      { value: '90+', label: 'Complexes Serviced' },
      { value: '48h', label: 'Average Response Time' },
      { value: '95%', label: 'False Alarm Reduction' },
    ],
    cta: {
      heading: 'Secure your commercial environment with enterprise-grade monitoring.',
      copy: 'We align monitoring with your business operations and tenant safety goals.',
      primary: 'Request a Quote',
      secondary: 'Contact Sales',
    },
  },
  {
    slug: 'construction',
    href: '/industries/construction',
    title: 'Construction',
    icon: '🏗️',
    summary: 'Deployment-ready monitoring for active construction sites and infrastructure projects.',
    hero: {
      label: 'Industry',
      title: 'Construction Surveillance That Keeps Sites Moving',
      description:
        'Our construction monitoring solutions are engineered for changing work zones, material theft prevention, and crew safety oversight.',
    },
    highlights: [
      { title: 'Mobile Site Security', desc: 'Quickly deploy cameras, power, and connectivity across multiple builds.' },
      { title: 'Material Theft Prevention', desc: 'Track compound access and high-value equipment constantly.' },
      { title: 'Safety Assurance', desc: 'Monitor hazardous operations and alert supervisors immediately.' },
    ],
    stats: [
      { value: '210+', label: 'Active Projects' },
      { value: '20%', label: 'Theft Reduction' },
      { value: '4.8/5', label: 'Client Satisfaction' },
    ],
    cta: {
      heading: 'Protect your build from day one.',
      copy: 'Our construction monitoring is built to keep projects secure, compliant, and on schedule.',
      primary: 'Request a Quote',
      secondary: 'Contact Sales',
    },
  },
  {
    slug: 'healthcare',
    href: '/industries/healthcare',
    title: 'Healthcare',
    icon: '🏥',
    summary: 'Sensitive environment monitoring for hospitals, clinics, and care facilities.',
    hero: {
      label: 'Industry',
      title: 'Healthcare Monitoring with Patient Safety and Privacy in Mind',
      description:
        'We secure patient areas, entry points, and emergency departments while respecting clinical privacy requirements and regulatory demands.',
    },
    highlights: [
      { title: 'Critical Zone Monitoring', desc: 'Protect ER, ICU, supply rooms, and staff dispatch areas.' },
      { title: 'Patient Safety Support', desc: 'Observe walkways, waiting rooms, and public spaces for safety incidents.' },
      { title: 'Regulatory Reporting', desc: 'Capture evidence and incident logs for healthcare compliance.' },
    ],
    stats: [
      { value: '45+', label: 'Medical Zones' },
      { value: '24/7', label: 'Operator Coverage' },
      { value: '99%', label: 'Privacy Compliance' },
    ],
    cta: {
      heading: 'Maintain a safe, compliant healthcare environment.',
      copy: 'Our services are built for the sensitivity and urgency of healthcare spaces.',
      primary: 'Request a Quote',
      secondary: 'Contact Sales',
    },
  },
  {
    slug: 'education',
    href: '/industries/education',
    title: 'Education',
    icon: '🎓',
    summary: 'Campus safety monitoring built for schools, colleges, and training centers.',
    hero: {
      label: 'Industry',
      title: 'Education Security That Supports Students and Staff',
      description:
        'Keep campuses safe with monitoring that balances security, learning environments, and visitor management.',
    },
    highlights: [
      { title: 'Campus Perimeter Defense', desc: 'Protect entry points, parking lots, and transverse access routes.' },
      { title: 'Classroom & Common Area Safety', desc: 'Monitor large gatherings and high-traffic student zones.' },
      { title: 'Emergency Preparedness', desc: 'Rapidly escalate incidents to safety teams and administrators.' },
    ],
    stats: [
      { value: '80+', label: 'Campus Networks' },
      { value: '90%', label: 'Safety Review Approval' },
      { value: '24/7', label: 'Coverage Availability' },
    ],
    cta: {
      heading: 'Secure campuses while preserving a supportive learning atmosphere.',
      copy: 'Our education monitoring plans are tuned for student safety and operational resilience.',
      primary: 'Request a Quote',
      secondary: 'Contact Sales',
    },
  },
  {
    slug: 'hospitality',
    href: '/industries/hospitality',
    title: 'Hospitality',
    icon: '🏨',
    summary: 'Guest experience security for hotels, resorts, and hospitality venues.',
    hero: {
      label: 'Industry',
      title: 'Hospitality Monitoring That Protects Guests and Reputation',
      description:
        'Our hospitality surveillance secures guest arrivals, public venues, and back-of-house operations without disrupting premium service.',
    },
    highlights: [
      { title: 'Guest Arrival Visibility', desc: 'Monitor valet, lobby, and reception zones for safety and welcome excellence.' },
      { title: 'Event & Venue Coverage', desc: 'Protect ballrooms, dining areas, and pool decks with focused monitoring.' },
      { title: 'Reputation Risk Control', desc: 'Capture incidents cleanly to support rapid remediation and guest communication.' },
    ],
    stats: [
      { value: '60+', label: 'Venues Protected' },
      { value: '98%', label: 'Incident Resolution' },
      { value: '4.9/5', label: 'Guest Satisfaction' },
    ],
    cta: {
      heading: 'Keep hospitality spaces safe without sacrificing ambience.',
      copy: 'We design monitoring that complements your brand and protects your guests.',
      primary: 'Request a Quote',
      secondary: 'Contact Sales',
    },
  },
  {
    slug: 'industrial',
    href: '/industries/industrial',
    title: 'Industrial',
    icon: '🏭',
    summary: 'Monitoring for factories, logistics facilities, and industrial campuses.',
    hero: {
      label: 'Industry',
      title: 'Industrial Security for High-Risk Facilities',
      description:
        'Keep industrial operations safe with surveillance that observes yard activity, loading docks, and process zones.',
    },
    highlights: [
      { title: 'Critical Asset Protection', desc: 'Monitor machinery, warehousing, and shipping areas with constant visibility.' },
      { title: 'Hazard Response Support', desc: 'Observe safety zones and rapidly notify on potential process incidents.' },
      { title: 'Access & Perimeter Control', desc: 'Reduce unauthorized entry with monitored gates and storage compounds.' },
    ],
    stats: [
      { value: '110+', label: 'Logistics Yards' },
      { value: '22%', label: 'Theft Reduction' },
      { value: '24/7', label: 'Monitoring Availability' },
    ],
    cta: {
      heading: 'Create resilient protection for industrial operations.',
      copy: 'Our monitoring solutions help you secure assets, people, and productivity.',
      primary: 'Request a Quote',
      secondary: 'Contact Sales',
    },
  },
  {
    slug: 'retail',
    href: '/industries/retail',
    title: 'Retail',
    icon: '🛍️',
    summary: 'Security for retail environments and shopping destinations of every scale.',
    hero: {
      label: 'Industry',
      title: 'Retail Security That Protects People and Profit',
      description:
        'We monitor storefronts, malls, and retail chains with specialized anti-shrink and loss-prevention workflows.',
    },
    highlights: [
      { title: 'Open Floor Oversight', desc: 'Protect point-of-sale areas, aisles, and back-of-house operations.' },
      { title: 'Loss Prevention Intelligence', desc: 'Use incident reporting to identify trends and close gaps quickly.' },
      { title: 'Customer Safety Management', desc: 'Monitor occupancy, crowding, and emergency exits with clarity.' },
    ],
    stats: [
      { value: '320+', label: 'Outlets Armed' },
      { value: '98%', label: 'Detection Accuracy' },
      { value: '24/7', label: 'Retail Coverage' },
    ],
    cta: {
      heading: 'Protect your retail operation from shrinkage and disruption.',
      copy: 'Our retail monitoring plans are designed around your customer experience and loss prevention goals.',
      primary: 'Request a Quote',
      secondary: 'Contact Sales',
    },
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'remote-monitoring-best-practices',
    title: 'Remote Monitoring Best Practices for Modern Security',
    date: 'June 1, 2026',
    excerpt: 'How smart remote monitoring reduces risk, improves response times, and gives teams greater confidence in their security footprint.',
    content:
      'Remote monitoring is more than cameras and feeds. It is a combination of strong processes, verified incident workflows, and technology that adapts to your environment. At BlueMond, we focus on human-verified alerts, data-backed reporting, and layered access control to ensure every event is handled with precision.',
  },
  {
    slug: 'why-incident-reporting-matters',
    title: 'Why Incident Reporting Matters in Security Operations',
    date: 'May 22, 2026',
    excerpt: 'Incident reporting turns reactive operations into proactive security programs. Learn what makes a report useful and actionable.',
    content:
      'A strong incident report does more than document an event. It provides clarity for decision makers, helps insurance reviews, and drives operational improvements. That is why BlueMond packages reports with timeline data, evidence assets, and contextual operator notes.',
  },
  {
    slug: 'scaling-security-for-construction-sites',
    title: 'Scaling Security for Construction Sites',
    date: 'May 10, 2026',
    excerpt: 'Construction projects need security that can move with the site. These are the strategies that work for active builds.',
    content:
      'Construction security demands mobility, visibility, and integration with site operations. Portable cameras, thermal detection, and dedicated monitoring teams all play a part in reducing theft and keeping crews safe.',
  },
  {
    slug: 'choosing-a-service-provider',
    title: 'Choosing a Security Service Provider: What to Look For',
    date: 'April 28, 2026',
    excerpt: 'Selecting the right security partner requires more than price. Focus on response, reporting, and solution consistency.',
    content:
      'The best provider offers clear escalation paths, transparent reporting, and a proven ability to adapt to your site. Look for teams that pair technology with experienced operators and measurable service standards.',
  },
];

export const careersPage = {
  title: 'Join BlueMond Solutions',
  label: 'Careers',
  heading: 'Build the future of remote security.',
  description:
    'We are looking for sharp, responsible, and motivated team members who want to help protect people, property, and continuity of operations through modern surveillance services.',
  openings: [
    {
      role: 'Remote Monitoring Specialist',
      location: 'Toronto, ON / Remote',
      summary: 'Monitor live feeds, verify alerts, and coordinate response procedures for high-risk facilities.',
    },
    {
      role: 'Security Solutions Engineer',
      location: 'Toronto, ON',
      summary: 'Design surveillance layouts, integrate camera systems, and support deployments for complex sites.',
    },
    {
      role: 'Client Success Manager',
      location: 'Remote',
      summary: 'Serve as the primary contact for existing clients and ensure their security programs stay aligned with operational goals.',
    },
  ],
};

export const resourcesPage = {
  title: 'Resources',
  label: 'Resources',
  heading: 'Security insights and operational guides.',
  description:
    'Browse our guides, case studies, and tools designed to help security leaders make informed decisions about monitoring, incident management, and infrastructure readiness.',
  items: [
    {
      label: 'Security Operations Guide',
      description: 'A framework for evaluating remote monitoring maturity across your sites.',
      href: '#',
    },
    {
      label: 'Incident Response Checklist',
      description: 'A practical checklist to standardize escalation and reporting after a security event.',
      href: '#',
    },
    {
      label: 'Technology Integration Workbook',
      description: 'A planning guide for connecting cameras, alarms, and access control systems to a monitoring platform.',
      href: '#',
    },
  ],
};

export const legalPages = {
  'privacy-policy': {
    title: 'Privacy Policy',
    content: [
      'BlueMond Solutions is committed to protecting your privacy. We collect only the personal information necessary to respond to inquiries and deliver services.',
      'Information collected through our website is used to manage communications, support requests, and service delivery. We do not sell personal data to third parties.',
      'We use industry standard security controls to protect data and we retain information only for as long as it is needed to fulfill the purpose for which it was collected.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    content: [
      'By using this website, you agree to the terms and conditions outlined by BlueMond Solutions. Our services are provided subject to separate contractual agreements.',
      'Information on this site is provided for general informational purposes only and does not constitute a guarantee of performance.',
      'All trademarks, logos, and service marks displayed on this site are the property of their respective owners.',
    ],
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    content: [
      'This website uses cookies and similar tracking technologies to improve user experience and site performance.',
      'Cookies are used to remember preferences, analyze site usage, and support navigation. You can manage your browser cookie settings at any time.',
      'No personally identifying data is stored in cookies by BlueMond Solutions unless you choose to submit it through a form on this site.',
    ],
  },
  disclaimer: {
    title: 'Disclaimer',
    content: [
      'BlueMond Solutions provides this website for informational purposes only. We do not guarantee that the information is complete, accurate, or fully up to date.',
      'Use of this site does not create a contractual relationship with BlueMond Solutions unless expressly agreed in writing.',
      'BlueMond Solutions is not liable for any indirect or consequential losses arising from the use of information on this website.',
    ],
  },
};