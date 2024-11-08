import { presente } from "../design/tokensWithReference/presente";
import { sistemasenlinea } from "../design/tokensWithReference/sistemasEnlinea";

const themeBussinessUnitMock = [
  {
    bussinessId: 1,
    ...sistemasenlinea,
  },
  {
    bussinessId: 2,
    ...presente,
  },
];

export { themeBussinessUnitMock };
