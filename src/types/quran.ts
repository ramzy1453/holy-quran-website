export type QuranMetaData = {
  ayahs: Ayahs;
  surahs: Surahs;
  sajdas: Sajdas;
  rukus: HizbQuarters;
  pages: HizbQuarters;
  manzils: HizbQuarters;
  hizbQuarters: HizbQuarters;
  juzs: HizbQuarters;
};

export type Ayahs = {
  count: number;
};

export type HizbQuarters = {
  count: number;
  references: HizbQuartersReference[];
};

export type HizbQuartersReference = {
  surah: number;
  ayah: number;
};

export type Sajdas = {
  count: number;
  references: SajdasReference[];
};

export type SajdasReference = {
  surah: number;
  ayah: number;
  recommended: boolean;
  obligatory: boolean;
};

export type Surahs = {
  count: number;
  references: SurahsReference[];
};

export type SurahsReference = {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: RevelationType;
};

export enum RevelationType {
  Meccan = "Meccan",
  Medinan = "Medinan",
}
