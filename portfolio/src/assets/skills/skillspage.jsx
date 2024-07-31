import "./skillspage.css";
import { easeInOut, motion } from "framer-motion";
const Skills = () => {
  return (
    <>
      <div className="skillsOuterContainer">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          style={{ color: "#edf402", textAlign: "center" }}
        >
          Skills
        </motion.h1>
        <div className="skillsContainer">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/html2.png" alt="" />
            </motion.div>

            <p>HTML</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/css.png" alt="" />
            </motion.div>

            <p>CSS</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/javascriptIcon.png" alt="" />
            </motion.div>

            <p>JavaScript</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/reactIcon.png" alt="" />
            </motion.div>

            <p>React</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/reduxIcon.png" alt="" />
            </motion.div>

            <p>Redux Toolkit</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/mui icon.png" alt="" />
            </motion.div>

            <p>Material UI</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/bootstap.png" alt="" />
            </motion.div>

            <p>Bootstrap</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/framer2.png" alt="" />
            </motion.div>

            <p>Framer Motion</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/nodejsIcon.png" alt="" />
            </motion.div>
            <p>NodeJS</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/expressIcon.png" alt="" />
            </motion.div>

            <p>ExpressJS</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/postmanApiIcon.png" alt="" />
            </motion.div>

            <p>Postman</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/java.png" alt="" />
            </motion.div>

            <p>Java</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/mongodb2.png" alt="" />
            </motion.div>

            <p>MongoDB</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/mySqlicon.png" alt="" />
            </motion.div>

            <p>MySQL</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/dockerIcon.png" alt="" />
            </motion.div>

            <p>Docker</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="skill"
          >
            <motion.div
              className="skillImageContainer"
              whileHover={{ scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            >
              <img src="/gitIcon.png" alt="" />
            </motion.div>

            <p>Git</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Skills;
