
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  video?: string;
  year: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface MenuItem {
  label: string;
  href: string;
}
