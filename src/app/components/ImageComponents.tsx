"use client";

import Image from "next/image";
import styles from "./ImageComponent.module.css";

interface ImageComponentProps {
  alt: string;
  src: string; // Image principale, optimisée par Next.js
  width: number;
  height: number;
  priority?: boolean; // Active pour les images critiques (LCP)
  className?: string;
  sizes?: string; // Ex: "100vw" ou "(min-width: 768px) 300px, 100vw"
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  alt,
  src,
  width,
  height,
  priority = false,
  className = "",
  sizes = "100vw",
}) => {
  return (
    <div className={[styles.imageWrapper, className].filter(Boolean).join(" ")}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={80}
        sizes={sizes}
        className={styles.image}
      />
    </div>
  );
};

export default ImageComponent;
