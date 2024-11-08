import { Text } from "@inubekit/text";
interface MenuHeadingProps {
  title: string;
}

function MenuHeading(props: MenuHeadingProps) {
  const { title } = props;

  return (
    <Text
      type="title"
      size="small"
      appearance="gray"
      padding="16px 16px 8px 16px"
    >
      {title}
    </Text>
  );
}

export type { MenuHeadingProps };
export { MenuHeading };
