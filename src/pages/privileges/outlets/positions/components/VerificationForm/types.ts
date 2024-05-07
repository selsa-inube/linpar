export interface IAttributes {
  attribute: string;
  value: string;
}

export interface IOptionsSections {
  title: string;
  attributes: IAttributes[];
}

export interface ISections {
  [key: string]: IOptionsSections;
}

export interface IDataVerificationStep {
  sections: ISections;
}
