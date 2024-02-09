import { AppMenuCard } from "@components/cards/AppMenuCard/index";
import { Grid, useMediaQuery } from "@inube/design-system";
import { AppMenuCardProps } from "@components/cards/AppMenuCard";

interface AppMenuGridProps {
  appOptions: AppMenuCardProps[];
}

function AppMenuGrid(props: AppMenuGridProps) {
  const { appOptions } = props;

  const screenMovil = useMediaQuery("(max-width: 580px)");

  return (
    <Grid
      templateColumns={
        screenMovil ? "1fr" : "repeat(auto-fill,minmax(auto, 205px))"
      }
      autoRows="auto"
      gap="s300"
    >
      {appOptions.map((item) => (
        <AppMenuCard
          id={item.id}
          key={item.id}
          icon={item.icon}
          label={item.label}
          description={item.description}
          url={item.url}
          domain={item.domain}
        />
      ))}
    </Grid>
  );
}

export { AppMenuGrid };
export type { AppMenuGridProps };
