import Image from "next/image";

/** The original Aeria logo artwork, unchanged, for every Aeria wordmark lockup. */
export default function OriginalLogo({
  className = "",
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/logo.png"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      className={`original-logo ${className}`}
    />
  );
}
