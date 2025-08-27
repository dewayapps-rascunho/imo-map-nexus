import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SlidingCTAButton = ({ onComplete }: { onComplete?: () => void }) => {
  const [isSlid, setIsSlid] = useState(false);

  const handleClick = () => {
    setIsSlid(true);
    setTimeout(() => {
      onComplete?.();
      console.log("Navegando para a página de anúncio...");
    }, 500);
  };

  const buttonVariants = {
    initial: {
      width: '100%',
      backgroundColor: 'hsl(var(--accent))',
    },
    slid: {
      width: '4rem',
      backgroundColor: 'hsl(var(--primary))',
    }
  };

  const arrowVariants = {
    initial: {
      x: 0,
      rotate: 0,
      scale: 1,
      opacity: 1
    },
    slid: {
      x: '100%',
      rotate: 360,
      scale: 1.2,
      opacity: 0,
    }
  };

  const textVariants = {
    initial: {
      opacity: 1,
      x: 0,
    },
    slid: {
      opacity: 0,
      x: -50,
    }
  };

  return (
    <motion.button
      className="relative flex items-center justify-start h-12 w-full max-w-xs mx-auto rounded-full shadow-elegant overflow-hidden cursor-pointer"
      onClick={handleClick}
      variants={buttonVariants}
      initial="initial"
      animate={isSlid ? "slid" : "initial"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute left-1 flex items-center justify-center size-10 rounded-full shadow-md z-10 bg-background"
        variants={arrowVariants}
        initial="initial"
        animate={isSlid ? "slid" : "initial"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ArrowRight className="size-5 text-foreground" />
      </motion.div>
      <motion.span
        className="absolute left-16 right-4 text-center font-semibold text-foreground"
        variants={textVariants}
        initial="initial"
        animate={isSlid ? "slid" : "initial"}
        transition={{ duration: 0.3 }}
      >
        Anunciar Grátis
      </motion.span>
    </motion.button>
  );
};

export { SlidingCTAButton };