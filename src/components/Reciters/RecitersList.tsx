import { Reciter } from "../../types/reciter";
import RecitersItem from "./RecitersItem";
import { sort } from "fast-sort";
type Props = {
  reciters: Reciter[];
};

export default function RecitersList({ reciters }: Props) {
  const sortedReciters = sort(reciters).asc(({ identifier }) => identifier);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {sortedReciters.map((reciter) => (
        <RecitersItem reciter={reciter} key={reciter.identifier} />
      ))}
    </div>
  );
}
