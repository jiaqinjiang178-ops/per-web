export type Language = 'zh' | 'en';

export interface Section {
  id: string;
  titleZh: string;
  titleEn: string;
  iconName: string; // Lucide icon name
}

export interface ProfileInfo {
  name: { zh: string; en: string };
  title: { zh: string; en: string };
  birth: string;
  hometown: { zh: string; en: string };
  email: string;
  phone: string;
  motto: { zh: string; en: string };
  avatar: string;
  tags: { zh: string[]; en: string[] };
}

export interface EducationEntry {
  period: string;
  school: { zh: string; en: string };
  major: { zh: string; en: string };
  degree: { zh: string; en: string };
  details?: { zh: string[]; en: string[] };
}

export interface AiProjectEntry {
  name: { zh: string; en: string };
  platform: { zh: string; en: string };
  description: { zh: string; en: string };
  points: { zh: string[]; en: string[] };
  tags: string[];
  link?: string;
  codeSnippet?: string;
}

export interface CampusExperienceEntry {
  period: string;
  role: { zh: string; en: string };
  organization: { zh: string; en: string };
  contributions: { zh: string[]; en: string[] };
}

export interface VolunteerEntry {
  period: string;
  activity: { zh: string; en: string };
  role: { zh: string; en: string };
  details: { zh: string[]; en: string[] };
}

export interface HonorEntry {
  name: { zh: string; en: string };
  level?: { zh: string; en: string };
  year: string;
  category: 'academic' | 'competition' | 'social';
}

export interface SkillGroup {
  category: { zh: string; en: string };
  skills: string[];
}

export interface SelfEvaluation {
  paragraphs: { zh: string[]; en: string[] };
  keywords: { zh: string[]; en: string[] };
}
