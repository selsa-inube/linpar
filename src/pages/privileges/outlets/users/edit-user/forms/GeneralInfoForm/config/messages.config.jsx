import { MdThumbUpOffAlt, MdOutlineSentimentNeutral } from "react-icons/md";

const generalInfoMessages = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Changes saved successfully!",
    description: "We have saved the changes correctly for the user LGARZON",
    appearance: "confirm",
  },
  failed: {
    id: 2,
    icon: <MdOutlineSentimentNeutral size={18} />,
    title: "Oops, something has gone wrong!",
    description: "We had trouble saving changes for the user LGARZON",
    appearance: "remove",
  },
};

export { generalInfoMessages };
