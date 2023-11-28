interface IApps {
  id: number;
  label: string;
  description: string;
  icon: JSX.Element;
  url: string;
}

const mediaQuerySettings = [
  "(max-width: 660px)",
  "(max-width: 806px)",
  "(max-width: 930px)",
  "(max-width: 1210px)",
  "(max-width: 1480px)",
  "(min-width: 1481px)",
];

const appListpaddingSettings = {
  "(max-width: 590px)": "s0 s200",
  "(max-width: 660px)": "s0 s400",
};

const pageTitlePaddingSettings = {
  "(max-width: 590px)": "s300 s200 s400",
  "(max-width: 660px)": "s300 s400 s400",
};

export { mediaQuerySettings, appListpaddingSettings, pageTitlePaddingSettings };
export type { IApps };
