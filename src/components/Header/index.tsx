import { HeaderContainer } from "./styles";

import CoffeeDeliverySvg from "../../assets/others/coffee-delivery-logo.svg";

import { CartButton } from "../CartButton";
import { Location } from "../Location";
import { FlexContainer } from "../FlexContainer";

export function Header() {
  return (
    <HeaderContainer>
      <FlexContainer justify="space-between" align="center">
        <img
          src={CoffeeDeliverySvg}
          height={40}
          width={85}
          alt="Coffee delivery logotipo"
          title="Coffee delivery"
        />

        <nav>
          <Location city="Campina Grande" state="PB" />
          <CartButton quantity={2} />
        </nav>
      </FlexContainer>
    </HeaderContainer>
  );
}
