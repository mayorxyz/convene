const HEX_PATTERN = /^#?([0-9a-f]{6})$/i;

function channelToLinear(value: number): number {
  const c = value / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

export function getReadableTextColor(background: string): string {
  const match = background.match(HEX_PATTERN);
  if (!match) return 'var(--color-text-primary)';
  const hex = match[1];
  const r = channelToLinear(parseInt(hex.slice(0, 2), 16));
  const g = channelToLinear(parseInt(hex.slice(2, 4), 16));
  const b = channelToLinear(parseInt(hex.slice(4, 6), 16));
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.179 ? '#111111' : '#FFFFFF';
}
