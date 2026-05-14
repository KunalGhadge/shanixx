import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Word = ({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="relative inline-block mr-[0.25em]">
      <span className="opacity-10">{word}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0"
      >
        {word}
      </motion.span>
    </span>
  );
};

export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.2"],
  });

  const words = text.split(" ");
  const totalWords = words.length;

  return (
    <p ref={containerRef} className={className} style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}>
      {words.map((word, i) => {
        const start = i / totalWords;
        const end = (i + 1) / totalWords;
        
        return (
          <Word 
            key={i} 
            word={word} 
            progress={scrollYProgress} 
            range={[start, end]} 
          />
        );
      })}
    </p>
  );
};
