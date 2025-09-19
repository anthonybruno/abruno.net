import { SectionItem } from '@/components/SectionItem';
import type { Section as SectionType } from '@/types';

interface SectionProps {
  section: SectionType;
}

export const Section = ({ section }: SectionProps) => (
  <section>
    <h3 class="text-xl font-semibold tracking-tight leading-none pb-9">
      {section.title}
    </h3>
    <ul class="space-y-4">
      {section.items.map((item) => (
        <SectionItem key={item.name} item={item} />
      ))}
    </ul>
  </section>
);
