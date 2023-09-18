import { Minus, Plus } from "@phosphor-icons/react";
import { ChangeEvent, ChangeEventHandler, useRef } from "react";
import { InputContainer } from "./styles";

export interface ICountInputProps {
  minValue?: number;
  maxValue?: number;
  onChange?: (value: number | null) => void;
}

export function CountInput({
  minValue,
  maxValue,
  onChange = () => undefined,
}: ICountInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleSubtract() {
    if (inputRef.current) {
      const currentValue = Number(inputRef.current.value);

      if (isNaN(currentValue) || (currentValue >= Number(maxValue))) {
        const min = Number(minValue) || null;
        inputRef.current.value = min?.toString() ?? "";
        onChange(min);
      } else {
        const updatedValue = currentValue - 1;
        inputRef.current.value = updatedValue.toString();
        onChange(updatedValue);
      }
    }
  }

  function handleAdd() {
    if (inputRef.current) {
      const currentValue = Number(inputRef.current.value);

      if (isNaN(currentValue) || (currentValue >= Number(maxValue))) {
        const max = Number(maxValue) || null;
        inputRef.current.value = max?.toString() ?? "";
        onChange(max);
      } else {
        const updatedValue = currentValue + 1;
        inputRef.current.value = updatedValue.toString();
        onChange(updatedValue);
      }
    }
  }

  function onChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
    if (!inputRef.current) return;

    const value = event.target.value;
    const formattedValue = value.replace(/^0+/, '');
    const parsedValue = Number(formattedValue)
  
    if (isNaN(parsedValue) && inputRef.current) {
      inputRef.current.value = "";
      onChange(null);
    } else {
      inputRef.current.value = parsedValue.toString();
      onChange(parsedValue);
    }
  }

  return (
    <InputContainer>
      <button type="button" onClick={handleSubtract}>
        <Minus size={14} />
      </button>
      <input ref={inputRef} onChange={onChangeInputValue} type="number" min={minValue} max={maxValue} />
      <button type="button" onClick={handleAdd}>
        <Plus size={14} />
      </button>
    </InputContainer>
  );
}
