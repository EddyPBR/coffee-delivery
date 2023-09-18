import { HeaderContainer } from "./styles";

import { CartButton } from "../CartButton";
import { Location } from "../Location";
import { FlexContainer } from "../FlexContainer";

export function Header() {
  return (
    <HeaderContainer>
      <FlexContainer justify="space-between" align="center">
        <img
          src="/assets/others/coffee-delivery-logo.svg"
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
