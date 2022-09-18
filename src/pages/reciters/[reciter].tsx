import { useParams } from "react-router-dom";
import { useGetMetaQuery } from "../../store/api";
import AudioPlayer from "react-audio-player";
import LoadingSpinner from "../../components/LoadingSpinner";

type Props = {};

export default function ReciterPage(props: Props) {
  const { reciterIdentifier } = useParams();
  const id = reciterIdentifier?.trim();
  const { data: sourates, isLoading, isError } = useGetMetaQuery();

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
        <h1 className="text-red-500 text-xl">Network Issues.</h1>
      </div>
    );
  }
  if (sourates?.data.surahs.references.length === 0) {
    return (
      <div className="flex justify-center items-center mt-8 pb-96">
        <h1 className="text-white text-xl">Not found.</h1>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 p-20 bg-white dark:bg-[#1D2121]">
      {sourates?.data.surahs.references.map((sourate) => (
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
