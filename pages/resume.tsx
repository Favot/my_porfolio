import SkillCar from "../components/SkillCard";
import { education, experience_pro, languages, tools } from "../data";
import styles from "../styles/resume.module.css";
import { motion } from "framer-motion";
import { fadeInUp, routeFade, stagger } from "../animations";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";

import Head from "next/head";
const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Corentin Favot | Resume</title>
      </Head>
      {/* //! Education & Experience */}
      <div className={styles.resumeGrid}>
        <div className={styles.itemEducation}>
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold">Formation</h5>
            <div className="">
              {education.map((education) => (
                <div
                  className="col-span-2 p-2 mb-6 rounded-lg md:col-span-1 "
                  key={education.id}
                >
                  <EducationCard education={education} key={education.id} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className={styles.itemExperience}>
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold">Experience</h5>
            <motion.div
              className="grid-cols-2 "
              variants={stagger}
              animate="animate"
              initial="initial"
            >
              {experience_pro.map((experience) => (
                <motion.div
                  className="col-span-2 p-2 mb-6 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
                  key={experience.id}
                  variants={fadeInUp}
                >
                  <ExperienceCard experience={experience} key={experience.id} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/*Languages & Tools */}

        <div className={styles.itemSkill}>
          <div>
            <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
            <div className="flex flex-wrap content-around my-2 justify-evenly ">
              {languages.map((language, i) => (
                <SkillCar value={language} key={i} />
              ))}
            </div>
          </div>

          <div>
            <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
            <div className="flex flex-wrap content-around my-4 justify-evenly ">
              {tools.map((tool, i) => (
                <SkillCar value={tool} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
