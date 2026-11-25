export type ContactSubmission = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  department?: string;
  message: string;
  createdAt: string;
};

export type QuoteRequest = {
  name: string;
  company: string;
  email: string;
  phone: string;
  jobTitle?: string;
  industry: string;
  cameras: string;
  services: string[];
  location: string;
  sites: string;
  timeframe?: string;
  budget?: string;
  notes?: string;
  createdAt: string;
};

const contactSubmissions: ContactSubmission[] = [];
const quoteRequests: QuoteRequest[] = [];

export function saveContactSubmission(submission: Omit<ContactSubmission, 'createdAt'>) {
  const record: ContactSubmission = {
    ...submission,
    createdAt: new Date().toISOString(),
  };
  contactSubmissions.push(record);
  return record;
}

export function saveQuoteRequest(request: Omit<QuoteRequest, 'createdAt'>) {
  const record: QuoteRequest = {
    ...request,
    createdAt: new Date().toISOString(),
  };
  quoteRequests.push(record);
  return record;
}

export function getContactSubmissions() {
  return contactSubmissions;
}

export function getQuoteRequests() {
  return quoteRequests;
}


// ─── Add these to your existing formStore.ts file ────────────────────────────

export type CareerApplication = {
  name: string;
  email: string;
  role: string;
  message?: string;
  resumeName?: string;
  createdAt: string;
};

const careerApplications: CareerApplication[] = [];

export function saveCareerApplication(
  application: Omit<CareerApplication, 'createdAt'>
): CareerApplication {
  const record: CareerApplication = {
    ...application,
    createdAt: new Date().toISOString(),
  };
  careerApplications.push(record);
  return record;
}

export function getCareerApplications(): CareerApplication[] {
  return careerApplications;
}