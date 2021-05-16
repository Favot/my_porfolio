import { useTheme } from "next-themes";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GrDocumentPdf } from "react-icons/gr";
import Image from "next/image";
const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <div className="m-auto h-36 w-36 ">
        <Image
          width="4rem"
          height="4rem"
          src="/../public/images/corentin_favot_square.jpg"
          layout="responsive"
          alt="profile picture Corentin Favot"
          quality={10}
          className="mx-auto border rounded-full "
        />
      </div>
      <h3 className="my-4 text-3xl font-medium tracking-tight font-kaushan ">
        <span className="text-green">Corentin </span>
        Favot
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Développeur Web
      </p>
      <p>
        <a
          className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500 "
          href="/assets/Resume_Corentin_FAVOT.pdf "
          download="Resume_Corentin_FAVOT.pdf"
        >
          <GrDocumentPdf className="w-6 h-6 mr-5 " />
          <span> Télécharger mon C.V.</span>
        </a>
      </p>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-500 md:w-full ">
        <a href="https://www.linkedin.com/in/corentin-favot/">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
        <a href="https://github.com/Favot">
          <AiFillGithub className="w-8 h-8" />
        </a>
      </div>
      <div className="py-6 bg-gray-200 rounded-2xl dark:bg-dark-200 dark:bg-black-500 ">
        <div className="flex items-center justify-center space-x-3 ">
          <GoLocation />
          <span>Nantes, France</span>
        </div>
        <p className="my-2">contact@favot.tech</p>
        <p className="my-2">+33 (0) 7 80 62 43 54</p>
      </div>
      <div className="my-2">
        <button
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-400 to-green hover:scale-105 focus:outline-none "
          onClick={() => {
            window.open("mailto:contact@favot.tech");
          }}
        >
          Contactez moi
        </button>
        <button
          onClick={changeTheme}
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-400 to-green hover:scale-105 focus:outline-none "
        >
          Changer themes
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
