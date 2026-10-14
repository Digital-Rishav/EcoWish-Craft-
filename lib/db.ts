import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "QUALIFIED"
  | "IN_PROGRESS"
  | "CONVERTED"
  | "CLOSED"
  | "SPAM";

export type TrainingStatus =
  | "NEW"
  | "CONTACTED"
  | "ENROLLED"
  | "WAITLISTED"
  | "COMPLETED"
  | "REJECTED";

export interface BusinessLead {
  id: string;
  leadType: "BUSINESS_CLIENT";
  name: string;
  companyName?: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  projectType: string;
  estimatedBudget?: string;
  expectedTimeline?: string;
  message: string;
  preferredContact: "WhatsApp" | "Phone Call" | "Email";
  couponCode?: string;
  status: LeadStatus;
  source: string;
  createdAt: string;
  updatedAt: string;
}

export interface TrainingApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  age?: string;
  city: string;
  education: string;
  course: string;
  trainingCategory: string;
  preferredBatch?: string;
  isDesignExamPrep: boolean;
  targetExam?: string;
  skillLevel: string;
  learningMode: string;
  message?: string;
  couponCode?: string;
  status: TrainingStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "NEW" | "READ" | "REPLIED" | "ARCHIVED";
  createdAt: string;
}

export interface CareerApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  roleId: string;
  portfolioUrl?: string;
  resumeSummary?: string;
  message: string;
  createdAt: string;
}

// Ensure data folder and file exist
async function ensureFile<T>(fileName: string, initialData: T[] = []): Promise<string> {
  const filePath = path.join(DATA_DIR, fileName);
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(filePath);
    } catch {
      await fs.writeFile(filePath, JSON.stringify(initialData, null, 2), "utf-8");
    }
  } catch (error) {
    console.error(`Error ensuring file ${fileName}:`, error);
  }
  return filePath;
}

async function readFileData<T>(fileName: string): Promise<T[]> {
  const filePath = await ensureFile<T>(fileName, []);
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    if (!raw.trim()) return [];
    return JSON.parse(raw) as T[];
  } catch (error) {
    console.error(`Error reading ${fileName}:`, error);
    return [];
  }
}

async function writeFileData<T>(fileName: string, data: T[]): Promise<void> {
  const filePath = await ensureFile<T>(fileName, []);
  const tempPath = `${filePath}.tmp-${Date.now()}`;
  try {
    await fs.writeFile(tempPath, JSON.stringify(data, null, 2), "utf-8");
    await fs.rename(tempPath, filePath);
  } catch (error) {
    console.error(`Error writing ${fileName}:`, error);
    try {
      await fs.unlink(tempPath);
    } catch {
      // ignore
    }
    throw error;
  }
}

// --------------------------------------------------------------------------
// BUSINESS LEADS
// --------------------------------------------------------------------------
export async function createBusinessLead(
  payload: Omit<BusinessLead, "id" | "leadType" | "status" | "createdAt" | "updatedAt">
): Promise<BusinessLead> {
  const leads = await readFileData<BusinessLead>("leads.json");
  const now = new Date().toISOString();
  const id = `EWC-LEAD-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

  const newLead: BusinessLead = {
    id,
    leadType: "BUSINESS_CLIENT",
    status: "NEW",
    createdAt: now,
    updatedAt: now,
    ...payload,
  };

  leads.unshift(newLead);
  await writeFileData("leads.json", leads);
  return newLead;
}

export async function getBusinessLeads(): Promise<BusinessLead[]> {
  return await readFileData<BusinessLead>("leads.json");
}

export async function updateLeadStatus(id: string, status: LeadStatus): Promise<boolean> {
  const leads = await readFileData<BusinessLead>("leads.json");
  const index = leads.findIndex((l) => l.id === id);
  if (index === -1) return false;
  leads[index].status = status;
  leads[index].updatedAt = new Date().toISOString();
  await writeFileData("leads.json", leads);
  return true;
}

// --------------------------------------------------------------------------
// TRAINING APPLICATIONS
// --------------------------------------------------------------------------
export async function createTrainingApplication(
  payload: Omit<TrainingApplication, "id" | "status" | "createdAt" | "updatedAt">
): Promise<TrainingApplication> {
  const applications = await readFileData<TrainingApplication>("training-applications.json");
  const now = new Date().toISOString();
  const id = `EWC-STU-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

  const newApp: TrainingApplication = {
    id,
    status: "NEW",
    createdAt: now,
    updatedAt: now,
    ...payload,
  };

  applications.unshift(newApp);
  await writeFileData("training-applications.json", applications);
  return newApp;
}

export async function getTrainingApplications(): Promise<TrainingApplication[]> {
  return await readFileData<TrainingApplication>("training-applications.json");
}

export async function updateTrainingStatus(id: string, status: TrainingStatus): Promise<boolean> {
  const apps = await readFileData<TrainingApplication>("training-applications.json");
  const index = apps.findIndex((a) => a.id === id);
  if (index === -1) return false;
  apps[index].status = status;
  apps[index].updatedAt = new Date().toISOString();
  await writeFileData("training-applications.json", apps);
  return true;
}

// --------------------------------------------------------------------------
// CONTACT MESSAGES
// --------------------------------------------------------------------------
export async function createContactMessage(
  payload: Omit<ContactMessage, "id" | "status" | "createdAt">
): Promise<ContactMessage> {
  const messages = await readFileData<ContactMessage>("contact-messages.json");
  const now = new Date().toISOString();
  const id = `EWC-MSG-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

  const newMsg: ContactMessage = {
    id,
    status: "NEW",
    createdAt: now,
    ...payload,
  };

  messages.unshift(newMsg);
  await writeFileData("contact-messages.json", messages);
  return newMsg;
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  return await readFileData<ContactMessage>("contact-messages.json");
}

// --------------------------------------------------------------------------
// CAREER APPLICATIONS
// --------------------------------------------------------------------------
export async function createCareerApplication(
  payload: Omit<CareerApplication, "id" | "createdAt">
): Promise<CareerApplication> {
  const applications = await readFileData<CareerApplication>("career-applications.json");
  const now = new Date().toISOString();
  const id = `EWC-JOB-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

  const newApp: CareerApplication = {
    id,
    createdAt: now,
    ...payload,
  };

  applications.unshift(newApp);
  await writeFileData("career-applications.json", applications);
  return newApp;
}

export async function getCareerApplications(): Promise<CareerApplication[]> {
  return await readFileData<CareerApplication>("career-applications.json");
}

// --------------------------------------------------------------------------
// STATS & METRICS FOR ADMIN VIEW
// --------------------------------------------------------------------------
export async function getDatabaseStats() {
  const leads = await getBusinessLeads();
  const training = await getTrainingApplications();
  const contacts = await getContactMessages();
  const careers = await getCareerApplications();

  return {
    totalBusinessLeads: leads.length,
    newBusinessLeads: leads.filter((l) => l.status === "NEW").length,
    totalTrainingApplications: training.length,
    newTrainingApplications: training.filter((t) => t.status === "NEW").length,
    totalContactMessages: contacts.length,
    totalCareerApplications: careers.length,
  };
}
