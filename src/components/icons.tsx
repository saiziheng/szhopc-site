export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.9"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function SparkIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4M12 17v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M3 12h4M17 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.5 13.1 11l2.4 1-2.4 1L12 15.5 10.9 13l-2.4-1 2.4-1L12 8.5Z" />
    </svg>
  );
}

export function MessageIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 6.5h13A2.5 2.5 0 0 1 21 9v6.2a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 3v-3H5.5A2.5 2.5 0 0 1 3 15.2V9a2.5 2.5 0 0 1 2.5-2.5Z" />
      <path strokeLinecap="round" d="M7.5 10h9M7.5 13.5h6" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect width="10" height="18" x="7" y="3" rx="2.4" />
      <path strokeLinecap="round" d="M10.5 18h3" />
    </svg>
  );
}
