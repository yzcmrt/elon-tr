export interface NavigationItem {
  name: string;
  href: string;
  submenu?: {
    name: string;
    href: string;
  }[];
}

export interface SlideItem {
  image: string;
  title: string;
  description: string;
} 