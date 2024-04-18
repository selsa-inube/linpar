import { Text, inube } from "@inube/design-system";

interface MenuHeadingProps {
  title: string;
}

function MenuHeading(props: MenuHeadingProps) {
  const { title } = props;

  const { s100, s200 } = inube.spacing;

  return (
    <Text
      type="title"
      size="small"
      appearance="gray"
      padding={`${s200} ${s200} ${s100} ${s200}`}
    >
      {title}
    </Text>
  );
}

export type { MenuHeadingProps };
export { MenuHeading };
