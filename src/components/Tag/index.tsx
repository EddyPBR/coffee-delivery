import { TagContent } from "./styles";

export interface ITagProps {
  text: string;
}

export function Tag({ text }: ITagProps) {
  return (
    <TagContent>
      <span>{text}</span>
    </TagContent>
  );
}
