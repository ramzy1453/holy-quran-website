import { Link } from "react-router-dom";
import { useTranslation } from "../../hooks";
import { SurahsReference } from "../../types/quran";

type Props = {
  sourate: SurahsReference;
};

export default function SourateItem({ sourate }: Props) {
  const { translation } = useTranslation();
  const isRtl = translation !== "ar";
  return (
    <Link
      dir="auto"
      to={`/${sourate.number}`}
      className="toggle cursor-pointer h-[4.5rem] border border-black dark:border-white rounded text-black dark:text-white flex px-4 items-center justify-between hover:border-[#D4AF37] group"
    >
      <div id="left-side" className="flex items-center text-xl">
        <div
          id="number"
          className={`${
            isRtl ? "mr-3" : "ml-3"
          } dark:bg-[#343A40] text-white bg-gray-500 w-10 h-10 flex justify-center items-center rounded-full group-hover:bg-[#D4AF37]`}
        >
          {sourate.number}
        </div>
        <div id="name" className="group-hover:text-[#D4AF37]">
          {isRtl ? sourate.englishName : sourate.name}
        </div>
      </div>
      <div id="ayats" className="group-hover:text-[#D4AF37]">
        {sourate.numberOfAyahs}
      </div>
    </Link>
  );
}
