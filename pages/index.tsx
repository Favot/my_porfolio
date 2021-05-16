import { NextPage } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeFade, stagger } from "../animations";
const About: NextPage = () => {
  console.log(services);

  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="my-3 mb-4 text-base font-medium">
        Développeur Web converti, suite à un parcours riche en expériences et
        apprentissages : ma nature curieuse et exploratrice m'a poussé à voyager
        chaque fois que j'en avais la chance. Cela m'a permis de découvrir des
        modes de vie et des environements de travail de plusieurs pays (France,
        Australie, Nouvelle-Zélande et Hong Kong).
        <h6 className="mt-4 mb-4">
          Ce sont encore ces traits de caractère et la recherche de nouveaux
          défis qui m'ont poussés à me réorienter vers le métier de développeur
          Web, un environnement en constante évolution qui correspond
          parfaitement à ma personnalité.
        </h6>
        J'ai commencé par me former via des cours en ligne, puis j'ai suivi une
        formation intensive au sein de l'organisation Le Wagon. A l'issue de
        cette formation j'ai eu l'opportunité de travailler sur des projets
        React en freelance.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="font-bold">Ce que je sais faire:</h4>
        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          animate="animate"
          initial="initial"
        >
          {services.map((service) => (
            <motion.div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
