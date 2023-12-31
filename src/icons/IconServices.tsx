import { SVGProps } from "react";

export function IconServices(props: SVGProps<SVGSVGElement>) {
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
        d="M3 13V5q0-.825.588-1.413T5 3h6v10H3ZM13 3h6q.825 0 1.413.588T21 5v4h-8V3Zm0 18V11h8v8q0 .825-.588 1.413T19 21h-6ZM3 15h8v6H5q-.825 0-1.413-.588T3 19v-4Z"
      ></path>
    </svg>
  );
}
