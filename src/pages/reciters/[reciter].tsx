import { useParams } from "react-router-dom";
import AudioPlayer from "react-audio-player";
import LoadingSpinner from "../../components/LoadingSpinner";
import translate from "../../translations/translate";
import { useGetMetaQuranData } from "../../hooks/useQueryApi";

type Props = {};

export default function ReciterPage(props: Props) {
  const { reciterIdentifier } = useParams();
  const id = reciterIdentifier?.trim();
  const { data: sourates, isLoading, isError } = useGetMetaQuranData();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-24 pb-96">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center mt-8 pb-96">
        <h1 className="text-red-500 text-xl">
          {translate("app.network-issues")}
        </h1>
      </div>
    );
  }
  if (sourates?.surahs.references.length === 0) {
    return (
      <div className="flex justify-center items-center mt-8 pb-96">
        <h1 className="text-white text-xl">{translate("app.not-found")}</h1>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 p-20 bg-white dark:bg-[#1D2121]">
      {sourates?.surahs.references.map((sourate) => (
        <div
          key={sourate.number}
          className="flex shadow-xl h-[40px] items-center bg-white dark:bg-[#0e1111]"
        >
          <div className="flex justify-center text-sm md:text-lg lg:text-xl text-center items-center text-black dark:text-white flex-[1]">
            <h2>{sourate.englishName}</h2>
          </div>
          <AudioPlayer
            className="dark:bg-[#757070] flex-[3] min-w-[60px]"
            src={`https://cdn.islamic.network/quran/audio-surah/128/${id}/${sourate.number}.mp3`}
            controls
          />
        </div>
      ))}
    </div>
  );
}
