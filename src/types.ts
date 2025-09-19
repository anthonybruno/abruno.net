export interface SectionItem {
  name: string;
  description?: string;
  url: string;
  color?: string;
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
}

export interface Section {
  title: string;
  items: SectionItem[];
}

export interface CurrentlyData {
  name: string;
  description: string;
  url: string;
  timestamp: Date | null;
}
