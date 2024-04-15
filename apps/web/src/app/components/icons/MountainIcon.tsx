import type { SVGProps } from 'react';

export default function MountainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Mountain Icon</title>
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
