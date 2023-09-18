import { formatToBRL } from "../../utils/formatCurrencies";
import { CartButton } from "../CartButton";
import { CountInput } from "../CountInput";
import { Tag } from "../Tag";
import { Text } from "../Text";
import { Title } from "../Title";
import { Card, Image, TagsList, Content, Footer } from "./styles";

export interface ICoffeeCardProps {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

export function CoffeeCard({
  imageUrl,
  name,
  description,
  price,
  tags,
}: ICoffeeCardProps) {
  const formattedPrice = formatToBRL(price).replace("R$", "");

  return (
    <Card>
      <Image src={imageUrl} alt={name} />

      <TagsList>
        {tags.map((tag) => <Tag key={tag} text={tag} />)}
      </TagsList>

      <Content>
        <Title htmlAs="h1" size="small" >
          {name}
        </Title>
        <Text htmlAs="p" size="small">
          {description}
        </Text>
      </Content>

      <Footer>
        <span>
          <Text size="small" htmlAs="span">R$</Text>
          <Title size="medium" htmlAs="strong">{formattedPrice}</Title>
        </span>

        <div>
          <CountInput minValue={1} defaultValue={1} size="large" />
          <CartButton secondary />
        </div>
      </Footer>
    </Card>
  );
}
