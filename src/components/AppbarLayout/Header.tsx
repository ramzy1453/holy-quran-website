import { Link } from "react-router-dom";
import QuranLogo from "../../assets/quran.png";
import translate from "../../translations/translate";
import { HiOutlineViewList } from "react-icons/hi";
import { motion } from "framer-motion";
import DarkModeToggle from "../DarkModeToggle";
type Props = {
  openSidebar: () => void;
};

export default function Header(props: Props) {
  return (
    <motion.div
      id="navbar"
      dir="auto"
      className="toggle flex justify-between items-center h-[64px] dark:bg-[#1F2937] dark:text-white px-4 bg-[#F1F7FD] text-black"
    >
      <div id="brand" className="flex items-center">
        <HiOutlineViewList
          size={28}
          className="mx-2 cursor-pointer bg-transparent hover:text-gray-400"
          onClick={props.openSidebar}
        />
        <Link to="/">
          <img
            id="brand-img"
            className=""
            alt="quran-logo"
            src={QuranLogo}
            width="45"
          />
        </Link>
        <div id="brand-text" className="text-xl mx-4">
          {translate("app.holy-quran")}
        </div>
      </div>
      <div>
        <DarkModeToggle />
      </div>
    </motion.div>
  );
}
