import { ButtonContainer, IButtonContainerProps } from "./styles";

import { ShoppingCart } from "@phosphor-icons/react";

export interface ICartButtonProps extends IButtonContainerProps {};

export function CartButton({ quantity, secondary = false }: ICartButtonProps) {
  return (
    <ButtonContainer quantity={quantity} secondary={secondary}>
      <ShoppingCart weight="fill" />
    </ButtonContainer>
  );
}
