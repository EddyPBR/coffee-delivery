import { HeaderContainer } from "./styles";

import { CartButton } from "../CartButton";
import { Location } from "../Location";
import { AppContainer } from "../AppContainer";

export function Header() {
  return (
    <HeaderContainer>
      <AppContainer justify="space-between" align="center">
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
      </AppContainer>
    </HeaderContainer>
  );
}
