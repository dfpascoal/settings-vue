export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  privateProfile: boolean;
  onlineStatus: string;
}

export type Theme = 'light' | 'dark';