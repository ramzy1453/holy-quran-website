import { FormattedMessage } from "react-intl";
import { TranslationMessage } from "../types/translations";

const translate = (id: TranslationMessage, values: any = {}) => (
  <FormattedMessage id={id} values={{ ...values }} />
);

export default translate;
