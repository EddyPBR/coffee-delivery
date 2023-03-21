import { IntroSection, Content, Image } from "./styles";
import CoffeeDeliveryArtPng from "../../assets/others/coffee-delivery-art.png";
import { Title } from "../Title";
import { Text } from "../Text";
import { FlexContainer } from "../FlexContainer";

export function Intro() {
  return (
    <IntroSection>
      <FlexContainer
        flexDirection="row"
        align="center"
        justify="space-between"
        wrap="nowrap"
        gap="3.5rem"
      >
        <Content>
          <Title htmlAs="h1" size="extra-large">
            Encontre o café perfeito para qualquer hora do dia
          </Title>
          <Text htmlAs="h2" size="large" weight="regular">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Text>
        </Content>
        <Image
          src={CoffeeDeliveryArtPng}
          height={360}
          width={476}
          alt="Copo de café do Coffee delivery"
          title="Copo de café do Coffee delivery"
        />
      </FlexContainer>
    </IntroSection>
  );
}
