import { IntroSection, Content, Image, InfoList } from "./styles";
import { Title } from "../Title";
import { Text } from "../Text";
import { FlexContainer } from "../FlexContainer";
import { Info } from "../Info";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

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

          <InfoList>
            <li>
              <Info
                icon={<ShoppingCart size={16} weight="fill" />}
                title={
                  <Text size="medium" weight="regular">
                    Compra simples e segura
                  </Text>
                }
                backgroundColor="yellow-dark"
                iconColor="white"
                iconFill="white"
              />
            </li>
            <li>
            <Info
              icon={<Package size={16} weight="fill" />}
              title={
                <Text size="medium" weight="regular">
                  Embalagem mantém o café intacto
                </Text>
              }
              backgroundColor="base-text"
              iconColor="white"
              iconFill="white"
            />
            </li>
            <li>
            <Info
              icon={<Timer size={16} weight="fill" />}
              title={
                <Text size="medium" weight="regular">
                  Entrega rápida e rastreada
                </Text>
              }
              backgroundColor="yellow"
              iconColor="white"
              iconFill="white"
            />
            </li>
            <li>
            <Info
              icon={<Coffee size={16} weight="fill" />}
              title={
                <Text size="medium" weight="regular">
                  O café chega fresquinho até você
                </Text>
              }
              backgroundColor="purple"
              iconColor="white"
              iconFill="white"
            />
            </li>
          </InfoList>
          
        </Content>
        <Image
          src="/assets/others/coffee-delivery-art.png"
          height={360}
          width={476}
          alt="Copo de café do Coffee delivery"
          title="Copo de café do Coffee delivery"
        />
      </FlexContainer>
    </IntroSection>
  );
}
