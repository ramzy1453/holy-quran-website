import { Sourate } from "./../types/sourate";
import { QuranMetaData } from "./../types/quran";
import { useEffect, useState } from "react";
export function useGetMetaQuranData() {
  const [data, setData] = useState<QuranMetaData>();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/meta")
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, isLoading, isError };
}

export function useGetSourates(sourateID: string, translation: string) {
  const [data, setData] = useState<Sourate>();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch(`http://api.alquran.cloud/v1/surah/${sourateID}${translation}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sourateID, translation]);
  return { data, isLoading, isError };
}
