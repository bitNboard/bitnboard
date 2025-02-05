import React, { useState, useEffect } from "react";
import Blogs from "./blogs";

const Home = () => {
  const phrases = ["The Web3.0", "AI Systems", "Smart Robotics"];
  const maxLength = Math.max(...phrases.map((phrase) => phrase.length)); // Find the longest phrase length

  const [currentText, setCurrentText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState(".".repeat(maxLength));
  const [isTyping, setIsTyping] = useState(false);

  // Animation timing
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[currentPhraseIndex];

    const typeCharacter = () => {
      const nextText = currentPhrase.substring(0, currentText.length + 1);
      setCurrentText(nextText);
      setDisplayText(
        nextText + ".".repeat(maxLength - nextText.length) // Fill remaining space with dots
      );
    };

    const deleteCharacter = () => {
      const nextText = currentText.substring(0, currentText.length - 1);
      setCurrentText(nextText);
      setDisplayText(
        nextText + ".".repeat(maxLength - nextText.length) // Fill remaining space with dots
      );
    };

    if (!isDeleting) {
      if (currentText === currentPhrase) {
        // Pause at the end of the phrase
        timer = setTimeout(() => {
          setIsDeleting(true);
          setIsTyping(true);
        }, pauseDuration);
      } else {
        // Continue typing
        timer = setTimeout(typeCharacter, typeSpeed);
        setIsTyping(true);
      }
    } else {
      if (currentText === "") {
        // Switch to the next phrase after deletion
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsDeleting(false);
        timer = setTimeout(() => setIsTyping(true), 500);
      } else {
        // Continue deleting
        timer = setTimeout(deleteCharacter, deleteSpeed);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <div className="h-full flex flex-col items-center bg-white bg-grid px-4 sm:px-10">
    <div className="font-primary w-full flex justify-center text-center mt-7">
      <div className="w-full sm:w-4/5">
        <div className="font-bold text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] leading-snug">
          The Evolution Starts here:
        </div>
        &nbsp;
        <span className="inline-flex items-center font-semibold">
          <span className="text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem]">[</span>
          <span
            className={`ml-[0.3rem] text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] inline-block sm:w-[20rem] md:w-[25rem] lg:w-[30rem] text-left overflow-hidden font-secondary ${
              isTyping ? "typing" : ""
            }`}
          >
            {displayText}
          </span>
          <span className="text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem]">]</span>
        </span>
        <div className="flex justify-center mt-4">
          <p className="text-sm sm:text-base w-full sm:w-4/5 lg:w-3/5 font-medium">
            We strive to empower developers and innovators with the knowledge to build smarter robots, decentralized networks, and AI-driven systems.
          </p>
        </div>
      </div>
    </div>
    <Blogs />
  </div>
  
  );
};

export default Home;
