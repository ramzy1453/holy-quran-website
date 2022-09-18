import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import Aya from "../components/Sourate/Aya";
import Editions from "../components/Sourate/Editions";
import { useGetSourateQuery } from "../store/api";
import { Ayah } from "../types/sourate";
type Props = {};

export default function Sourate(props: Props) {
  const { sourateID } = useParams();
  const [edition, setEdition] = useState("/en.asad");
  const audio = new Audio();

  const arabic = useGetSourateQuery({
    sourateID: sourateID as string,
    translation: "",
  });
  const translated = useGetSourateQuery({
    sourateID: sourateID as string,
    translation: edition,
  });

  const updateEdition = (e: ChangeEvent<HTMLSelectElement>) => {
    setEdition("/" + e.target.value);
  };

  if (arabic.isLoading) {
    return (
      <div className="flex justify-center items-center pt-24 h-screen bg-[#1D2121]">
        <LoadingSpinner />
      </div>
    );
  }
  if (arabic.isError || translated.isError) {
    return (
      <div className="flex justify-center items-center mt-8">
        <h1 className="text-red-500 text-xl">Network Issues.</h1>
      </div>
    );
  }

  return (
    <div className="dark:bg-[#1D2121] dark:text-white bg-white text-black">
      <Editions updateEdition={updateEdition} />
      <ul className="p-0 md:px-24 md:py-8 xl:px-32 xl:py-8">
        {arabic.data?.data.ayahs.map((aya, index) => (
          <Aya
            key={aya.number}
            sourateID={sourateID}
            aya={aya}
            translatedAya={translated.data?.data.ayahs[index] as Ayah}
            isTranslatedLoading={translated.isFetching}
            audio={audio}
          />
        ))}
      </ul>
    </div>
  );
}
