import Image from "next/image";
import { img } from "@/lib/images";

// A content photo. The `data-lightbox` attribute lets the Lightbox open it full size.
export default function Photo({ name, alt, className = "", sizes = "(min-width: 900px) 33vw, 50vw", priority = false, fit }) {
  const { src, width, height } = img(name);
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={`pic ${className}`}
      data-lightbox=""
      tabIndex={0}
      role="button"
      aria-label={`View larger: ${alt}`}
      style={fit ? { objectFit: fit } : undefined}
    />
  );
}
