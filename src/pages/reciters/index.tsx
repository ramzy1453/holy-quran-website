import RecitersList from "../../components/Reciters/RecitersList";
import data from "../../libs/vocalsEditions.json";

export default function Reciters() {
  const dataByLang = (lang: string) =>
    [...data].filter(({ identifier }) => identifier.startsWith(lang));

  return (
    <div className="border-2 dark:border-[#1D2121] dark:bg-[#1D2121] dark:text-white bg-white border-white text-black pb-32">
      <h1 className="text-4xl mt-12 text-center">Quran Reciters</h1>
      <div className="py-6 px-12 md:px-20 lg:px-28">
        <h1 className="text-3xl border-b dark:border-[rgba(255,255,255,0.4)] border-black pb-3 w-full mb-3">
          Arabic
        </h1>
        <RecitersList reciters={dataByLang("ar")} />
        <h1 className="text-3xl border-b dark:border-[rgba(255,255,255,0.4)] border-black pb-3 w-full mb-3 mt-8">
          English
        </h1>
        <RecitersList reciters={dataByLang("en")} />
      </div>
    </div>
  );
}
