import { ButtonContainer } from "./styles";

import { ShoppingCart } from "@phosphor-icons/react";

export interface ICartButtonProps {
  quantity?: number;
}

export function CartButton({ quantity }: ICartButtonProps) {
  return (
    <ButtonContainer quantity={quantity}>
      <ShoppingCart weight="fill" />
    </ButtonContainer>
  );
}
