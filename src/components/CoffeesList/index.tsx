import { AppContainer } from "../AppContainer";
import { CoffeeCard } from "../CoffeeCard";
import { Title } from "../Title";

import coffees from "../../coffees.json";
import { CoffeesSection } from "./styles";

export function CoffeesList() {
  return (
    <CoffeesSection>
      <AppContainer flexDirection="column" gap={54}>
        <Title size="large">Nossos cafés</Title>

        <AppContainer gap={32}>
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.name}
              name={coffee.name}
              description={coffee.description}
              imageUrl={coffee.imageUrl}
              price={coffee.price}
              tags={coffee.tags}
            />
          ))}
        </AppContainer>
      </AppContainer>
    </CoffeesSection>
  );
}
