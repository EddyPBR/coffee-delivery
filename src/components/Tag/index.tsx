import { TagContent } from "./styles";

import { Text } from "../Text";

export interface ITagProps {
  text: string;
}

export function Tag({ text }: ITagProps) {
  return (
    <TagContent>
      <Text htmlAs="span" size="extra-small" weight="bold">{text}</Text>
    </TagContent>
  );
}
