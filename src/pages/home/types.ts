interface IApps {
  id: number;
  label: string;
  description: string;
  icon: JSX.Element;
  url: string;
}

const mediaQuerySettings = {
  "(max-width: 590px)": "repeat(1, 100%)",
  "(max-width: 660px)": "repeat(1, 100%)",
  "(max-width: 930px)": "repeat(2, 250px)",
  "(max-width: 1210px)": "repeat(3, 250px)",
  "(max-width: 1480px)": "repeat(4, 250px)",
};

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
