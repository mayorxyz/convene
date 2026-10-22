import { useTheme } from './ThemeProvider';

export function ThemeSegmentedControl() {
  const { theme, setTheme } = useTheme();

  const options: { value: 'light' | 'dark' | 'system'; label: string }[] = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ];

  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-[6px] bg-[var(--color-card)] border border-[var(--color-hairline)]">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => setTheme(option.value)}
          className={`px-3 py-1.5 text-xs font-mono rounded-[4px] transition-colors ${
            theme === option.value
              ? 'bg-[var(--color-accent-blue)] text-white'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
