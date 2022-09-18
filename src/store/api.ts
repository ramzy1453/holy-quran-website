import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Sourate } from "../types/sourate";
import { QuranMetaData } from "../types/quran";
import { Response } from "../types/response";

const Api = createApi({
  reducerPath: "QuranApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.alquran.cloud/v1",
  }),
  endpoints: (builder) => ({
    // Metadata
    getMeta: builder.query<Response<QuranMetaData>, void>({
      query: () => "/meta",
    }),
    // By one Sourate
    getSourate: builder.query<
      Response<Sourate>,
      { sourateID: string | number; translation: string }
    >({
      query: ({ sourateID, translation }) =>
        `/surah/${sourateID}${translation}`,
    }),
  }),
});
export const { useGetMetaQuery, useGetSourateQuery } = Api;
export default Api;
