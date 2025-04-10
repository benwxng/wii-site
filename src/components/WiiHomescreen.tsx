"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WiiCard } from "./WiiCard";

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
  const [channels, setChannels] = useState<WiiChannel[]>([
    // Top row
    {
      id: "disc",
      title: "Disc Channel",
      color: "#000000",
      icon: "/disc-icon.svg",
      coverImage: "/pics/beachWeek.jpeg",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4">Disc Channel</h3>
          <p className="mb-4">
            This would be where your disc content would appear.
          </p>
        </div>
      ),
    },
    {
      id: "mii",
      title: "Mii Channel",
      color: "#FFFFFF",
      icon: "/mii-icon.svg",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4">Mii Channel</h3>
          <p className="mb-4">Create and customize your Mii characters here.</p>
        </div>
      ),
    },
    {
      id: "photo",
      title: "Photo Channel",
      color: "#FFFFFF",
      icon: "/photo-icon.svg",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4">Photo Channel</h3>
          <p className="mb-4">View and edit your photos.</p>
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

    // Middle row
    {
      id: "about",
      title: "About Me",
      color: "#FFFFFF",
      icon: "/about-icon.svg",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="mb-4">
            Welcome to my personal site! I'm a developer who loves creating
            interactive web experiences.
          </p>
          <p>
            This website is inspired by the Nintendo Wii interface, featuring
            smooth transitions and a nostalgic design.
          </p>
        </div>
      ),
    },
    {
      id: "projects",
      title: "Projects",
      color: "#FFFFFF",
      icon: "/projects-icon.svg",
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
      id: "blog",
      title: "Blog",
      color: "#FFFFFF",
      icon: "/blog-icon.svg",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-4">My Blog</h3>
          <p className="mb-4">Coming soon...</p>
          <p>
            I'll be sharing my thoughts on web development, design, and
            technology.
          </p>
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
  ]);

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

  const { time, ampm } = formatTime(currentTime);

  return (
    <div className="flex flex-col h-screen bg-gray-100 retro-container">
      {/* Main grid for channels */}
      <div className=" w-full p-24 grid grid-cols-4 gap-6 max-w-full">
        {channels.map((channel) => (
          <WiiCard
            key={channel.id}
            title={channel.title}
            color={channel.color}
            icon={channel.icon}
            content={channel.content}
            isEmpty={channel.isEmpty}
            coverImage={channel.coverImage}
          />
        ))}
      </div>

      <div className="wii-footer">
        <div className="footer-left-button">Wii</div>
        <div className="footer-center-time mt-2 mb-4">
          <span className="wii-digital-clock">
            {time} {ampm}
          </span>
          <br />
          <span className="font-semibold text-2xl text-gray-500">
            {formatDate(currentTime)}
          </span>
        </div>
        <div className="footer-right-button">✉️</div>
      </div>
    </div>
  );
};
