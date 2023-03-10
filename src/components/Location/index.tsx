import { LocationTag } from "./styles";

import { MapPin } from "@phosphor-icons/react";

export interface ILocationProps {
  city: string;
  state: string;
}

export function Location({ city, state }: ILocationProps) {
  const content = `${city}, ${state}`;

  return (
    <LocationTag>
      <MapPin weight="fill" />
      {content}
    </LocationTag>
  );
}
