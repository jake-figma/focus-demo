import figma from "@figma/code-connect";
type IconProps = { size?: "sm" | "md" | "lg" };

export const IconArrow = ({ size = "md" }: IconProps = {}) => (
  <svg
    className={`icon icon-size-${size}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="var(--icon-fill)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.06006 11.14H16.0401L14.4401 9.54001L12.2001 7.34001L13.4201 6.14001L19.2601 12L13.4201 17.86L12.2001 16.66L14.4401 14.46L16.0401 12.86H4.06006V11.14Z"
      fill="var(--icon-fill)"
    />
  </svg>
);
export const IconBasket = ({ size = "md" }: IconProps = {}) => (
  <svg
    className={`icon icon-size-${size}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="var(--icon-fill)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 19C15.866 19 19 15.866 19 12L5 12C5 15.866 8.13401 19 12 19Z"
      fill="var(--icon-fill)"
    />
    <path
      d="M9 11V10C9 8.34315 10.3431 7 12 7V7C13.6569 7 15 8.34315 15 10V11"
      stroke="#2E341E"
    />
  </svg>
);
export const IconClose = ({ size = "md" }: IconProps = {}) => (
  <svg
    className={`icon icon-size-${size}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="var(--icon-fill)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12L7 7M12 12L17 7M12 12L7 17M12 12L17 17"
      stroke="#2E341E"
      stroke-width="2"
    />
  </svg>
);
export const IconDelete = ({ size = "md" }: IconProps = {}) => (
  <svg
    className={`icon icon-size-${size}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="var(--icon-fill)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 10H17L16 18H8L7 10Z" fill="var(--icon-fill)" />
    <path d="M17 9L7 9L7 8L17 8L17 9Z" fill="var(--icon-fill)" />
    <path
      d="M13.5 7C13.5 6 13 5.5 12 5.5C11 5.5 10.5 6 10.5 7"
      stroke="#2E341E"
    />
  </svg>
);
export const IconMenu = ({ size = "md" }: IconProps = {}) => (
  <svg
    className={`icon icon-size-${size}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="var(--icon-fill)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="6" fill="var(--icon-fill)" />
  </svg>
);
export const IconProfile = ({ size = "md" }: IconProps = {}) => (
  <svg
    className={`icon icon-size-${size}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="var(--icon-fill)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 12C15.3137 12 18 14.6863 18 18H6C6 14.6863 8.68629 12 12 12Z"
      fill="var(--icon-fill)"
    />
  </svg>
);

figma.connect(
  IconArrow,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf/FOCUS%3A-Core-Library?node-id=4%3A153&mode=dev",
  { example: () => <IconArrow /> }
);
figma.connect(
  IconBasket,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf/FOCUS%3A-Core-Library?node-id=4%3A155&mode=dev",
  { example: () => <IconBasket /> }
);
figma.connect(
  IconClose,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf/FOCUS%3A-Core-Library?node-id=4%3A151&mode=dev",
  { example: () => <IconClose /> }
);
figma.connect(
  IconDelete,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf/FOCUS%3A-Core-Library?node-id=4%3A147&mode=dev",
  { example: () => <IconDelete /> }
);
figma.connect(
  IconMenu,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf/FOCUS_-Core-Library?node-id=4%3A145&mode=dev",
  { example: () => <IconMenu /> }
);
figma.connect(
  IconProfile,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf/FOCUS_-Core-Library?node-id=4%3A158&mode=dev",
  { example: () => <IconProfile /> }
);
