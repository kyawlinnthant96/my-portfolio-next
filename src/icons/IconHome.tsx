import { SVGProps } from "react";

export function IconHome(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.713-.288T14 20v-5q0-.425-.288-.713T13 14h-2q-.425 0-.713.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.413-.588T4 19Z"
      ></path>
    </svg>
  );
}
