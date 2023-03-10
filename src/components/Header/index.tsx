import { HeaderContainer } from "./styles";

import CoffeeDeliverySvg from "../../assets/others/coffee-delivery-logo.svg";

import { CartButton } from "../CartButton";
import { Location } from "../Location";

export function Header() {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
}
