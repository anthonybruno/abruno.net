import { SpriteIcon } from '@/components/SpriteIcon';
import type { SectionItem as SectionItemType } from '@/types';

interface SectionItemProps {
  item: SectionItemType;
}

export const SectionItem = ({ item }: SectionItemProps) => (
  <li>
    <a class="block group" href={item.url}>
      <div class="flex items-center gap-1">
        {item.icon && (
          <span class={`${item.color || ''}`}>
            <SpriteIcon
              name={item.icon}
              width={item.iconWidth}
              height={item.iconHeight}
            />
          </span>
        )}
        <span
          class={`block font-medium group-hover:underline underline-offset-2 ${
            item.color || 'text-tony-700 dark:text-tony-200'
          }`}
        >
          {item.name}
        </span>
      </div>
      <span class="text-tony-400">{item.description}</span>
    </a>
  </li>
);
