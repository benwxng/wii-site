"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WiiCard } from "./WiiCard";
import { motion } from "framer-motion";
import AnimatedLink from "./AnimatedLink";
interface WiiChannel {
  id: string;
  title: string;
  color: string;
  icon?: string;
  coverImage?: string;
  content?: React.ReactNode;
  isEmpty?: boolean;
}

export const WiiHomescreen = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const channels: WiiChannel[] = [
    // Top row
    {
      id: "about",
      title: "about me",
      color: "#DDDDDD",
      icon: "/about-icon.svg",
      coverImage: "/pics/memenu.jpg",
      content: (
        <div className="z-40">
          <h3 className="text-xl mb-4 text-black font-gothic-130">
            name: Ben Wang
          </h3>
          <p className="text-xl text-black font-gothic-130">currently:</p>
          <ul className="list-disc list-inside text-black font-gothic-120">
            <li className="ml-2 md:ml-4">cs/math @ swarthmore</li>
            <li className="ml-2 md:ml-4">campus growth @ perplexity</li>
            <li className="ml-2 md:ml-4">
              crafting culture @{" "}
              <AnimatedLink
                href="https://www.swatsynthesis.info"
                className="text-slate-500"
                external={true}
              >
                synthesis
              </AnimatedLink>
            </li>
            <br />

            <p className="text-xl text-black font-gothic-130">previously:</p>
            <ul className="list-disc list-inside text-black font-gothic-120">
              <li className="ml-2 md:ml-4">
                growth ops @{" "}
                <AnimatedLink
                  href="https://whop.com/discover/kaizen-trading/"
                  className="text-slate-500"
                  external={true}
                >
                  kaizen
                </AnimatedLink>{" "}
              </li>
              <li className="ml-2 md:ml-4">sold $40k of shoes at 14</li>
              <li className="ml-2 md:ml-4">
                #1 tennis player in maryland 4+ years
              </li>
              <li className="ml-2 md:ml-4">picked piplup on pokemon diamond</li>
            </ul>

            <br />

            <span className="text-gray-700 italic">
              say hi @{" "}
              <AnimatedLink
                href="mailto:benxwang7@gmail.com"
                className="text-slate-500"
                external={true}
              >
                benxwang7
              </AnimatedLink>{" "}
              at gmail dot com
            </span>
          </ul>
        </div>
      ),
    },
    {
      id: "reading",
      title: "reading",
      color: "#FFFFFF ",
      coverImage: "/pics/books.jpg",
      content: (
        <div>
          <p className="text-xl text-black font-gothic-130 mb-1">current:</p>
          <ul className="list-disc list-inside">
            <li className="ml-4 text-black font-gothic-120">
              Psycho-Cybernetics
            </li>
          </ul>

          <br />
          <p className="text-xl text-black font-gothic-130 mb-1">
            personal podium:
          </p>
          <ul className=" text-black list-disc list-inside">
            <li className="ml-4 font-gothic-120">Meditations</li>
            <li className="ml-4 font-gothic-120">Letters to a Young Poet</li>
            <li className="ml-4 font-gothic-120">Shoe Dog</li>
            <li className="ml-4 font-gothic-120">Letters from a Stoic</li>
            <li className="ml-4 font-gothic-120">
              Tommorrow, and Tomorrow, and Tomorrow
            </li>
            <li className="ml-4 font-gothic-120">Greenlights</li>
            <li className="ml-4 font-gothic-120">Ender&apos;s Game</li>
          </ul>

          <br />
          <p className="text-gray-700 font-gothic-120">
            got recs? email @ benxwang7 at gmail dot com
          </p>
        </div>
      ),
    },
    {
      id: "writing",
      title: "writing",
      color: "#000000",
      icon: "/blog-icon.svg",
      coverImage: "/pics/writing.jpg",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4">My Blog</h3>
          <p className="mb-4">Coming soon...</p>
        </div>
      ),
    },
    {
      id: "thanks",
      title: "acknowledgements",
      color: "#000000",
      icon: "/disc-icon.svg",
      coverImage: "/pics/beachWeek.jpeg",
      content: (
        <div>
          <p className=" text-black font-gothic-120">
            thank you ...
            <br />
            thank you ...
            <br />
            thank you ...
          </p>
        </div>
      ),
    },

    // Middle row
    {
      id: "projects",
      title: "Projects",
      color: "#FFFFFF",
      icon: "/projects-icon.svg",
      coverImage: "/pics/penguinbuidling.webp",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4">My Projects</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Project 1 - A web application using React and TypeScript</li>
            <li>Project 2 - A mobile app built with React Native</li>
            <li>Project 3 - A data visualization tool using D3.js</li>
          </ul>
        </div>
      ),
    },

    {
      id: "photos",
      title: "Photos",
      color: "#FFFFFF",
      icon: "/photo-icon.svg",
      coverImage: "/pics/penguinbuidling.webp",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4">Photo Channel</h3>
          <p className="mb-4">View and edit your photos.</p>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      color: "#FFFFFF",
      icon: "/contact-icon.svg",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
          <p className="mb-4">You can reach me at: example@email.com</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "shop",
      title: "Wii Shop",
      color: "#FFFFFF",
      icon: "/shop-icon.svg",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4">Wii Shop</h3>
          <p className="mb-4">
            Browse and purchase new games and applications.
          </p>
        </div>
      ),
    },

    // Bottom row - empty cards
    {
      id: "empty1",
      title: "",
      color: "#DDDDDD",
      isEmpty: true,
    },
    {
      id: "empty2",
      title: "",
      color: "#DDDDDD",
      isEmpty: true,
    },
    {
      id: "empty3",
      title: "",
      color: "#DDDDDD",
      isEmpty: true,
    },
    {
      id: "empty4",
      title: "",
      color: "#DDDDDD",
      isEmpty: true,
    },
  ];

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Format time in 12-hour format with digital clock style
  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12

    const hoursStr = hours < 10 ? "0" + hours : hours;
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;

    return { time: `${hoursStr}:${minutesStr}`, ampm };
  };

  // Format date as Weekday M/D
  const formatDate = (date: Date) => {
    const day = date.toLocaleDateString("en-US", { weekday: "short" });
    const month = date.getMonth() + 1;
    const dateNum = date.getDate();
    return `${day} ${month}/${dateNum}`;
  };

  // Calculate delay based on grid position for diagonal animation
  const calculateDelay = (index: number) => {
    const row = Math.floor(index / 4);
    const col = index % 4;
    // Sum of row and column creates diagonal wave pattern
    return (row + col) * 0.05 + 0.5; // Base delay of 0.3s plus 0.1s per diagonal step
  };

  const { time, ampm } = formatTime(currentTime);

  // Add new state for modal or other UI elements
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Custom handlers for different cards
  const handleCardClick = (id: string) => {
    switch (id) {
      case "disc":
        // Open a media player or video
        window.open("https://www.youtube.com/watch?v=VIDEO_ID", "_blank");
        break;

      case "reading":
        // Toggle a character customization modal
        console.log("Opening Mii creator");
        // setShowMiiCreator(true);
        break;

      case "photo":
        // Open a photo gallery modal
        setSelectedImage("/pics/beachWeek.jpeg");
        setShowPhotoModal(true);
        break;

      case "shop":
        // Navigate to a shop page
        window.location.href = "/shop";
        break;

      case "about":
        // Default expand behavior (no custom handler needed)
        break;

      case "projects":
        // Open project details in a new tab
        break;

      case "writing":
        // Navigate to blog
        window.open("https://benxwang.substack.com/", "_blank");
        break;

      case "contact":
        // Show contact form
        // setShowContactForm(true);
        break;

      default:
        // Default behavior for other cards
        console.log(`No custom handler for ${id}`);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 retro-container overflow-hidden">
      {/* Main grid for channels */}
      <div className="w-full p-24 grid grid-cols-4 gap-6 max-w-full">
        {channels.map((channel, index) => (
          <motion.div
            key={channel.id}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "ease-in-out",
              delay: 0.6 + calculateDelay(index),
              duration: 1.2,
            }}
          >
            <WiiCard
              id={channel.id}
              title={channel.title}
              color={channel.color}
              content={channel.content}
              isEmpty={channel.isEmpty}
              coverImage={channel.coverImage}
              customHandler={
                // Only provide custom handler for specific cards
                ["disc", "mii", "photo", "shop", "writing"].includes(channel.id)
                  ? handleCardClick
                  : undefined
              }
            />
          </motion.div>
        ))}
      </div>

      {/* Photo modal */}
      {showPhotoModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8">
          <div className="bg-white rounded-lg p-4 max-w-3xl w-full">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">Photo Viewer</h2>
              <button
                onClick={() => setShowPhotoModal(false)}
                className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <div className="relative h-80 w-full">
              <Image
                src={selectedImage}
                alt="Selected photo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <motion.div
        className="wii-footer fixed bottom-0 w-full flex justify-between items-center px-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 50,
          delay: 0.2,
          duration: 1.2,
        }}
      >
        <button
          onClick={() => (window.location.href = "mailto:benxwang7@gmail.com")}
          className="group transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <div className="text-xl text-gray-500 bg-[#dbefff] w-[clamp(60px,8vw,80px)] h-[clamp(60px,8vw,80px)] flex items-center justify-center rounded-full border-2 border-[#8DCFF4] font-bold shadow-inner shadow-md group-hover:bg-[#c5e4ff] group-active:shadow-inner ml-8">
            Wii
          </div>
        </button>
        <div className="flex flex-col items-center justify-center">
          <span className="wii-digital-clock mt-4">
            {time} {ampm}
          </span>
          <span className="font-semibold text-[clamp(1.2rem,2vw,2rem)] text-gray-500">
            {formatDate(currentTime)}
          </span>
        </div>
        <button
          onClick={() => (window.location.href = "mailto:benxwang7@gmail.com")}
          className="group transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <div className="text-xl bg-[#dbefff] w-[clamp(60px,8vw,80px)] h-[clamp(60px,8vw,80px)] flex items-center justify-center rounded-full border-2 border-[#8DCFF4] font-bold shadow-inner shadow-md group-hover:bg-[#c5e4ff] group-active:shadow-inner mr-8">
            ✉️
          </div>
        </button>
      </motion.div>
    </div>
  );
};
