import { FormEvent } from "react";
import { useIntl } from "react-intl";
import translate from "../translations/translate";

export default function Form() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  const intl = useIntl();
  return (
    <div dir="auto">
      <h3 className="mb-5 pt-0 text-center text-xl">
        {translate("footer.contact-us")}
      </h3>
      <form
        className="bg-white rounded shadow-xl px-8 pt-6 pb-6 mb-4 w-[80%] mx-auto flex flex-col justify-between"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder={intl.formatMessage({ id: "footer.your-name" })}
            name="name"
            className="px-3 py-3 placeholder-gray-600 text-gray-600 relative bg-white  text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder={intl.formatMessage({ id: "footer.email" })}
            name="email"
            className="px-3 py-3 placeholder-gray-600 text-gray-600 relative bg-white  text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder={intl.formatMessage({ id: "footer.your-message" })}
            name="message"
            className="resize-none px-3 py-3 h-24 placeholder-gray-600 text-gray-600 relative  bg-white  text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-5 ease-linear transition-all duration-150"
          type="submit"
        >
          {translate("footer.send-message")}
        </button>
      </form>
    </div>
  );
}
