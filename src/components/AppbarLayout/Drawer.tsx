import { CgClose, CgHome } from "react-icons/cg";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { GiSoundWaves } from "react-icons/gi";
import { MdOutlineFeedback } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import ClickAwayListener from "react-click-away-listener";
import translate from "../../translations/translate";
import { useTranslation } from "../../hooks";
import { Locale } from "../../types/translations";
import { ChangeEvent } from "react";
type Props = {
  closeSidebar: () => void;
};

const Drawer = motion((props: Props) => {
  const { setTranslation, translation } = useTranslation();
  const onTranslate = (e: ChangeEvent<HTMLSelectElement>) => {
    setTranslation(e.target.value as Locale);
  };

  const isRtl = translation === "ar";

  const DrawerVariants: Variants = {
    initial: { x: isRtl ? "20rem" : "-20rem" },
    animate: { x: 0, transition: { duration: 0.3 } },
    exit: { x: isRtl ? "20rem" : "-20rem", transition: { duration: 0.3 } },
  };

  const OpacityVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 0.8 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <motion.div
        variants={OpacityVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`absolute top-0 ${
          isRtl ? "right-0" : "left-0"
        } h-full w-screen bg-[rgba(0,0,0,0.7)] overflow-auto touch-auto`}
      />
      <ClickAwayListener onClickAway={props.closeSidebar}>
        <motion.div
          variants={DrawerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`toggle absolute top-0 ${
            isRtl ? "right-0" : "left-0"
          } z-40 h-screen overflow-y-auto bg-white dark:bg-gray-800 w-80`}
        >
          <h5 className="toggle p-4 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
            {translate("app.holy-quran")}
          </h5>
          <button className="text-white bg-transparent hover:text-gray-400 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center ">
            <CgClose size={25} onClick={props.closeSidebar} />
          </button>
          <div className="p-4">
            <label
              htmlFor="languages"
              className="toggle block mb-3 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              {translate("sidebar.choose-language")}
            </label>
            <select
              onChange={onTranslate}
              id="languages"
              defaultValue={translation}
              className="toggle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="en-US">English</option>
              <option value="ar">عربي</option>
              <option value="fr">Français</option>
            </select>
          </div>
          <ul className="space-y-2 ">
            {links.map((link, key) => (
              <li>
                <FramerLink
                  dir="auto"
                  initial={{ x: 0 }}
                  whileHover={{
                    x: 10,
                    y: -2,
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  key={key}
                  to={link.path}
                  onClick={props.closeSidebar}
                  className="toggle flex items-center py-2 px-4 text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {link.icon}
                  <span className="mx-3">{link.name}</span>
                </FramerLink>
              </li>
            ))}
          </ul>
        </motion.div>
      </ClickAwayListener>
    </>
  );
});

const FramerLink = motion(Link);

const links = [
  {
    name: translate("sidebar.home"),
    icon: <CgHome />,
    path: "/",
  },
  {
    name: translate("sidebar.reciters"),
    icon: <GiSoundWaves />,
    path: "/reciters",
  },
  {
    name: translate("sidebar.about"),
    icon: <HiQuestionMarkCircle />,
    path: "/about",
  },
  {
    name: translate("sidebar.feedback"),
    icon: <MdOutlineFeedback />,
    path: "/feedback",
  },
];

export default Drawer;
