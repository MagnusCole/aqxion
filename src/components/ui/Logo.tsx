type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="AQXION logo"
    >
      <text
        x="0"
        y="15"
        fontSize="14"
        fill="currentColor"
        fontFamily="Geist, sans-serif"
        letterSpacing="2"
        fontWeight="bold"
      >
        AQXION
      </text>
    </svg>
  );
}
