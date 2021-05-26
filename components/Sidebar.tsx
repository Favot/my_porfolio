import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import Image from "next/image";
const Sidebar = () => {
  return (
    <div>
      <div className="m-auto h-36 w-36 ">
        <Image
          width="4rem"
          height="4rem"
          src="/images/corentin_favot_square.jpg"
          layout="responsive"
          alt="profile picture Corentin Favot"
          quality={10}
          className="mx-auto border rounded-full "
        />
      </div>
      <h3 className="my-4 text-3xl font-medium tracking-tight font-pattaya ">
        <span className="text-green">Corentin </span>
        Favot
      </h3>
      <p className="px-2 pb-4 my-1">Développeur Web</p>

      <div className="py-6 bg-gray-200 rounded-2xl dark:bg-dark-200 dark:bg-black-500 ">
        <div className="flex items-center justify-center space-x-3 ">
          <GoLocation />
          <span>Nantes, France</span>
        </div>
        <p className="my-2">corentin@favot.tech</p>
        <p className="my-2">+33 (0)7 80 62 43 54</p>
      </div>
      <div className="my-2">
        <div className="flex w-8/12 mx-auto my-5 justify-evenly text-green md:w-full ">
          <a href="https://www.linkedin.com/in/corentin-favot/" target="_blank">
            <AiFillLinkedin className="w-8 h-8" />
          </a>
          <a href="https://github.com/Favot" target="_blank">
            <AiFillGithub className="w-8 h-8" />
          </a>
        </div>
        <button className="w-10/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-400 to-green hover:scale-105 focus:outline-none ">
          <a
            href="/assets/Resume_Corentin_FAVOT.pdf"
            download="Resume_Corentin_FAVOT.pdf"
          >
            Télécharger mon C.V.
          </a>
        </button>
        <button
          className="w-10/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-400 to-green hover:scale-105 focus:outline-none "
          onClick={() => {
            window.open("mailto:corentin@favot.tech");
          }}
        >
          Contactez moi
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
