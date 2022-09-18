import { SurahsReference } from "../../types/quran";
import LoadingSpinner from "../LoadingSpinner";
import SourateItem from "./SourateItem";

type Props = {
  isLoading: boolean;
  isError: boolean;
  MetaQueryData: SurahsReference[];
};

export default function SourateLists({
  isLoading,
  isError,
  MetaQueryData,
}: Props) {
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
  if (MetaQueryData.length === 0) {
    return (
      <div className="flex justify-center items-center mt-8 pb-96">
        <h1 className="text-white text-xl">Not found.</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-24 pb-24">
      {MetaQueryData?.map((sourate) => (
        <SourateItem sourate={sourate} key={sourate.number} />
      ))}
    </div>
  );
}
