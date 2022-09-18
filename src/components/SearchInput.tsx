import { ChangeEventHandler } from "react";
import { useIntl } from "react-intl";
import { useTranslation } from "../hooks";

type Props = {
  updateSearch: ChangeEventHandler;
};

export default function SearchInput(props: Props) {
  const intl = useIntl();
  const { translation } = useTranslation();
  return (
    <div className="flex justify-center">
      <input
        onChange={props.updateSearch}
        type="search"
        id="search"
        className={`${
          translation === "ar" && "text-right"
        } rounded-xl text-sm px-4 py-3 w-[75%] text-gray-900 bg-gray-50  border border-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={intl.formatMessage({ id: "app.search-label" })}
      />
    </div>
  );
}
