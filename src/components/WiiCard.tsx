"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface WiiCardProps {
  id: string;
  title: string;
  color?: string;
  content?: React.ReactNode;
  isEmpty?: boolean;
  coverImage?: string;
  customHandler?: (id: string) => void;
}

export const WiiCard = ({
  id,
  title,
  color = "#009EE3",
  content,
  isEmpty = false,
  coverImage,
  customHandler,
}: WiiCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [initialRect, setInitialRect] = useState<DOMRect | null>(null);
  const [animationInProgress, setAnimationInProgress] = useState(false);

  const handleCardClick = () => {
    if (animationInProgress || isEmpty) return;

    // If a custom handler is provided, use it instead of default behavior
    if (customHandler) {
      customHandler(id);
      return;
    }

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
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        borderRadius: "18px",
        aspectRatio: isEmpty || !isExpanded ? "16/9" : "auto",
        height: isExpanded ? "auto" : "unset",
        opacity: isEmpty ? 0.6 : 1,
        cursor: isEmpty ? "default" : isExpanded ? "default" : "pointer",
        overflow: "hidden",
        padding: 0,
        margin: 0,
        ...(isExpanded && {
          top: "10%",
          left: "10%",
          width: "80%",
          height: "80%",
          maxHeight: "80vh",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
        }),
      }}
    >
      {coverImage && !isExpanded && !isEmpty && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={coverImage}
            alt={title}
            fill
            className={`object-cover w-full h-full ${
              id === "disc" ? "object-[center_30%]" : ""
            }`}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <div className="text-left font-bold text-white text-sm pl-3 wii-card-title">
                {title}
              </div>
            </div>
          )}
        </div>
      )}
      {!isExpanded && !coverImage && !isEmpty && (
        // Card view without cover image
        <div className="flex flex-col items-start justify-end h-full py-6 px-4 relative z-10">
          {title && (
            <div
              className="text-left font-bold text-sm px-2 py-1 rounded max-w-full text-white bg-black/30 wii-card-title"
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
      )}
      {isExpanded && (
        // Expanded view
        <div className="h-full flex flex-col">
          <div
            className="flex justify-between items-center p-4 border-b"
            style={{ backgroundColor: color }}
          >
            <h2 className="text-2xl font-bold text-black p-1">{title}</h2>
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
            className="p-6 overflow-auto flex-grow"
            onClick={(e) => e.stopPropagation()}
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
};
