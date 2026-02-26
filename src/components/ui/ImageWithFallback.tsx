import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  fallback: string;
}

export function ImageWithFallback({ src, alt, fallback }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="w-full h-12 flex items-center justify-center">
        <span className="text-xl font-bold text-gray-900">{fallback}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className="max-h-12 w-auto object-contain"
    />
  );
}