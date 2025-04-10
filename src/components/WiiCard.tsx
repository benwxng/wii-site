"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface WiiCardProps {
  title: string;
  color?: string;
  icon?: string;
  content?: React.ReactNode;
  isEmpty?: boolean;
  coverImage?: string;
}

export const WiiCard = ({
  title,
  color = "#009EE3",
  icon,
  content,
  isEmpty = false,
  coverImage,
}: WiiCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [initialRect, setInitialRect] = useState<DOMRect | null>(null);
  const [animationInProgress, setAnimationInProgress] = useState(false);

  const handleCardClick = () => {
    if (animationInProgress || isEmpty) return;

    if (!isExpanded) {
      const rect = cardRef.current?.getBoundingClientRect() || null;
      setInitialRect(rect);
      setAnimationInProgress(true);

      // Start expanding
      setIsExpanded(true);
    }
  };

  const handleClose = () => {
    if (animationInProgress) return;
    setAnimationInProgress(true);
    setIsExpanded(false);
  };

  useEffect(() => {
    if (isExpanded) {
      // Animation completed
      setTimeout(() => {
        setAnimationInProgress(false);
      }, 300);
    } else if (initialRect) {
      // Animation back completed
      setTimeout(() => {
        setAnimationInProgress(false);
      }, 300);
    }
  }, [isExpanded, initialRect]);

  // Prevent scrolling when expanded
  //change this later
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      className={`wii-card ${isExpanded ? "wii-channel-expanded" : ""} ${
        isEmpty ? "wii-card-empty" : ""
      }`}
      style={{
        backgroundColor: isExpanded ? "white" : color,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        borderRadius: "24px",
        aspectRatio: isEmpty || !isExpanded ? "16/9" : "auto",
        height: isExpanded ? "auto" : "unset",
        opacity: isEmpty ? 0.6 : 1,
        cursor: isEmpty ? "default" : isExpanded ? "default" : "pointer",
        overflow: "hidden",
      }}
    >
      {coverImage && !isExpanded && !isEmpty && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      {!isExpanded ? (
        // Card view
        <div className="flex flex-col items-center justify-center h-full py-6 px-2 relative z-10">
          {icon && !isEmpty && (
            <div className="flex justify-center items-center mb-4 w-full">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image
                  src={icon}
                  alt={title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          )}
          {title && (
            <div
              className={`text-center font-bold text-sm mt-auto px-2 py-1 rounded max-w-full ${
                coverImage ? "text-white bg-black/50" : "text-white bg-black/30"
              }`}
              style={{
                textShadow: "0.5px 0.5px 0px rgba(0,0,0,0.3)",
                letterSpacing: "0.5px",
                filter: "blur(0.2px)",
              }}
            >
              {title}
            </div>
          )}
        </div>
      ) : (
        // Expanded view
        <div className="w-80% h-80%">
          <div
            className="flex justify-between items-center p-4"
            style={{ backgroundColor: color }}
          >
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              className="bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100"
            >
              ✕
            </button>
          </div>
          <div
            className="p-4 overflow-auto h-[calc(100vh-60px)]"
            onClick={(e) => e.stopPropagation()}
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
};
