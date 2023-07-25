import { MdThumbUpOffAlt, MdOutlineSentimentNeutral } from "react-icons/md";
import { EAppearance } from "@src/types/colors.types";

const generalInfoMessages = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Changes saved successfully!",
    description: "We have saved the changes correctly for the user LGARZON",
    appearance: EAppearance.CONFIRM,
  },
  failed: {
    id: 2,
    icon: <MdOutlineSentimentNeutral size={18} />,
    title: "Oops, something has gone wrong!",
    description: "We had trouble saving changes for the user LGARZON",
    appearance: EAppearance.REMOVE,
  },
};

export { generalInfoMessages };
