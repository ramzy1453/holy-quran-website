import { ChangeEventHandler } from "react";
import { useTranslation } from "../../hooks";
import editions from "../../libs/edition.json";
import translate from "../../translations/translate";

type Props = {
  updateEdition: ChangeEventHandler;
};

export default function Editions(props: Props) {
  const { translation } = useTranslation();
  return (
    <div className="p-12" dir={translation === "ar" ? "rtl" : "ltr"}>
      <label
        htmlFor="editions"
        className="toggle block mb-3 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {translate("sourate.edition-label")}
      </label>
      <select
        id="editions"
        onChange={props.updateEdition}
        className="toggle cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {editions.data.map((edition) => (
          <option
            key={edition.identifier}
            value={edition.identifier}
            className="p-5 w-72 bg-green-800"
          >
            {edition.name} - {edition.language.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
