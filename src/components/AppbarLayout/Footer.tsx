import translate from "../../translations/translate";
import Form from "../Form";

export default function Footer(props: {}) {
  return (
    <div
      dir="auto"
      className="toggle px-12 pt-9 pb-[6rem] grid grid-cols-2 dark:bg-[#1F2937] bg-[#F1F7FD] dark:text-white text-black"
    >
      <div
        id="info-container"
        className="px-12 py-8 flex flex-col justify-center"
      >
        <div className="text-3xl mb-6">{translate("footer.contact-us")}</div>
        <div className="font-bold mb-9">{translate("footer.description")}</div>
        <div className="lg:w-[75%]">{translate("footer.paragraph")}</div>
      </div>
      <Form />
    </div>
  );
}
