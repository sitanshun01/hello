import { motion } from 'framer-motion';

const Envelope = () => {
  return (
    <section className="envelope-stage">
      <div className="ambient-glow" />

      <motion.div
        className="envelope-wrap"
        initial={{ opacity: 0, y: 28, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: [0.92, 1.04, 1] }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="envelope">
          <div className="back-flap" />

          <motion.article
            className="invite-card"
            initial={{ y: 30, opacity: 0.35 }}
            animate={{ y: [-4, -44, -34], opacity: 1 }}
            transition={{ delay: 0.32, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="corner corner-left" />
            <div className="corner corner-right" />
            <div className="card-heat" />

            <p className="card-kicker">hello</p>
            <h1>hello baby</h1>
            <p className="card-copy">kaisa hai</p>
          </motion.article>

          <div className="envelope-pocket">
            <div className="pocket-left" />
            <div className="pocket-right" />
            <div className="pocket-bottom" />
            <div className="pocket-shine" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Envelope;
