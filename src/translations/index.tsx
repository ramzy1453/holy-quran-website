import { Fragment, ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { useTranslation } from "../hooks/";
import Arabic from "./ar.json";
import English from "./en.json";
import French from "./fr.json";

type Props = {
  children: ReactNode;
};

export default function Intl18Provider({ children }: Props) {
  const { translation } = useTranslation();
  return (
    <IntlProvider
      locale={translation}
      messages={locales[translation]}
      textComponent={Fragment}
    >
      {children}
    </IntlProvider>
  );
}

const LOCALES_KEYS = {
  arabic: "ar",
  english: "en-US",
  french: "fr",
};

const locales = {
  [LOCALES_KEYS.arabic]: Arabic,
  [LOCALES_KEYS.english]: English,
  [LOCALES_KEYS.french]: French,
};
