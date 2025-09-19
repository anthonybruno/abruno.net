interface SpriteIconProps {
  name: string;
  className?: string;
  width?: number;
  height?: number;
}

export const SpriteIcon = ({
  name,
  className,
  width = 12,
  height = 12,
}: SpriteIconProps) => (
  <svg width={width} height={height} className={className}>
    <use href={`#${name}`} />
  </svg>
);
