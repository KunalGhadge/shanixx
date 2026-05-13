import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Character = ({ char, progress, range }: { char: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative">
      <span className="opacity-10">{char === " " ? "\u00A0" : char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.1"],
  });

  const words = text.split(" ");
  let charIndexCounter = 0;
  const totalChars = text.length;

  return (
    <p ref={containerRef} className={className} style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}>
      {words.map((word, wordIdx) => {
        const characters = word.split("");
        
        return (
          <span key={wordIdx} className="inline-block">
            {characters.map((char, charIdx) => {
              const start = charIndexCounter / totalChars;
              const end = (charIndexCounter + 1) / totalChars;
              charIndexCounter++;
              
              return (
                <Character 
                  key={`${wordIdx}-${charIdx}`} 
                  char={char} 
                  progress={scrollYProgress} 
                  range={[start, end]} 
                />
              );
            })}
            {/* Space after each word */}
            <Character 
              key={`space-${wordIdx}`} 
              char=" " 
              progress={scrollYProgress} 
              range={[charIndexCounter / totalChars, (charIndexCounter + 1) / totalChars]} 
            />
            {/* Increment counter for the space */}
            {(() => { charIndexCounter++; return null; })()}
          </span>
        );
      })}
    </p>
  );
};
