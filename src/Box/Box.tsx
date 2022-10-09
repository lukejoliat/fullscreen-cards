import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./box.css";

export const Box: FC<{ id: number; backgroundUrl: string }> = ({
  id,
  backgroundUrl,
  children
}) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <motion.div className="box" layoutId={`yo-mama-${id}`}>
        <motion.div
          layoutId={`yo-mama-header-${id}`}
          className="box_content"
          style={{
            background: `url("../${backgroundUrl}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
          onClick={() => setIsClicked(!isClicked)}
        ></motion.div>
      </motion.div>
      <AnimatePresence>
        {isClicked && (
          <>
            <motion.div
              key={`item`}
              layoutId={`yo-mama-${id}`}
              onClick={() => setIsClicked(!isClicked)}
              className="box_fullscreen"
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate
                transition={{ duration: 0.2 }}
                style={{
                  background: `url("../${backgroundUrl}")`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
                layoutId={`yo-mama-header-${id}`}
                className="box_fullscreen_header"
              ></motion.div>
              <motion.div
                animate
                transition={{ duration: 0.2 }}
                className="box_fullscreen_content"
              >
                {children}
              </motion.div>
            </motion.div>
            <motion.div animate className="overlay"></motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
