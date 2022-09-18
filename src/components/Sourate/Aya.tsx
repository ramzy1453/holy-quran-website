import { Ayah } from "../../types/sourate";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import LoadingSpinner from "../LoadingSpinner";

type Props = {
  sourateID: string | undefined;
  aya: Ayah;
  translatedAya: Ayah;
  isTranslatedLoading: boolean;
  audio: HTMLAudioElement;
};

export default function Aya(props: Props) {
  const setAudio = () => {
    props.audio.src = `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${props.aya.number}.mp3 `;
    props.audio.play();
  };

  const clearAudio = () => {
    props.audio.pause();
    props.audio.currentTime = 0;
  };

  const translated = props.isTranslatedLoading ? (
    <div className="flex justify-center items-center mt-4">
      <LoadingSpinner className="w-8 h-8" />
    </div>
  ) : (
    <div id="translated" dir="auto" className="line-clamp-[8]">
      {props.translatedAya.text}
    </div>
  );

  return (
    <div className="border-b-[0.5px] border-opacity-25 mb-4 border-white py-6 px-10 flex flex-col hover:shadow-xl transition-all">
      <div className="flex justify-between flex-row-reverse">
        <img
          alt=""
          className="dark:filter dark:invert-[100%] mb-7"
          src={`http://cdn.islamic.network/quran/images/high-resolution/${props.sourateID}_${props.aya.numberInSurah}.png`}
        />
      </div>
      {translated}
      <div className="flex">
        <GiSoundOn
          size="28"
          onClick={setAudio}
          className="cursor-pointer mt-5 hover:text-[#2CA4AB] mr-5"
        />
        <GiSoundOff
          size="28"
          onClick={clearAudio}
          className="cursor-pointer mt-5 hover:text-[#2CA4AB]"
        />
      </div>
    </div>
  );
}
