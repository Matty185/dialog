interface Props {
  size?: number;
  className?: string;
}

export default function PlaceholderSilhouette({ size = 280, className = "" }: Props) {
  return (
    <div
      className={`rounded-full bg-brand-mint flex items-center justify-center overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size * 0.65, height: size * 0.65 }}
      >
        {/* Head */}
        <circle cx="50" cy="32" r="18" fill="#1C6E73" opacity="0.45" />
        {/* Shoulders */}
        <path
          d="M14 90 C14 68 86 68 86 90"
          stroke="#1C6E73"
          strokeWidth="2"
          fill="#1C6E73"
          opacity="0.45"
        />
      </svg>
    </div>
  );
}
