import { useState } from 'react';
import { motion } from 'framer-motion';

type NoPosition = {
  x: number;
  y: number;
};

const randomPosition = (): NoPosition => ({
  x: Math.round(Math.random() * 72 + 8),
  y: Math.round(Math.random() * 58 + 24),
});

const LoveQuestion = () => {
  const [noPosition, setNoPosition] = useState<NoPosition>({ x: 58, y: 62 });
  const [accepted, setAccepted] = useState(false);

  const moveNoButton = () => {
    setNoPosition(randomPosition());
  };

  return (
    <section className="love-stage">
      <div className="love-glow" />

      <motion.div
        className="love-panel"
        initial={{ opacity: 0, y: 34, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="love-kicker">one quick question</p>
        <h1>do you love me?</h1>

        <div className="love-actions" aria-live="polite">
          <motion.button
            className="yes-button"
            type="button"
            onClick={() => setAccepted(true)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            yes
          </motion.button>

          <motion.button
            className="no-button"
            type="button"
            onClick={moveNoButton}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            animate={{
              left: `${noPosition.x}%`,
              top: `${noPosition.y}%`,
            }}
            transition={{ type: 'spring', stiffness: 420, damping: 24 }}
          >
            no
          </motion.button>
        </div>

        {accepted && (
          <motion.p
            className="love-answer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            knew it. hello baby.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default LoveQuestion;
