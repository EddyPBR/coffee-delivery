import { Minus, Plus } from "@phosphor-icons/react";
import { ChangeEvent, useMemo, useRef } from "react";
import { IInputContainerProps, InputContainer } from "./styles";

export interface ICountInputProps extends Partial<IInputContainerProps> {
  minValue?: number;
  maxValue?: number;
  onChange?: (value: number | null) => void;
  defaultValue?: number;
}

export function CountInput({
  minValue,
  maxValue,
  onChange = () => undefined,
  size = "medium",
  defaultValue,
}: ICountInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const MIN = useMemo(() => {
    const parsedValue = Number(minValue);
    return isNaN(parsedValue) ? undefined : parsedValue;
  }, [minValue]);

  const MAX = useMemo(() => {
    const parsedValue = Number(maxValue);
    return isNaN(parsedValue) ? undefined : parsedValue;
  }, [maxValue]);

  function handleSubtract() {
    if (inputRef.current) {
      const currentValue = Number(inputRef.current.value);

      if (isNaN(currentValue) || currentValue <= Number(MIN)) {
        const min = MIN ?? null;
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

      if (isNaN(currentValue) || currentValue >= Number(MAX)) {
        const max = MAX ?? null;
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
    const formattedValue = value.replace(/^0+/, "");
    const parsedValue = Number(formattedValue);

    if (isNaN(parsedValue) && inputRef.current) {
      inputRef.current.value = "";
      onChange(null);
    } else {
      inputRef.current.value = parsedValue.toString();
      onChange(parsedValue);
    }
  }

  return (
    <InputContainer size={size}>
      <button type="button" onClick={handleSubtract}>
        <Minus size={14} />
      </button>
      <input
        ref={inputRef}
        onChange={onChangeInputValue}
        type="number"
        min={minValue}
        max={maxValue}
        defaultValue={defaultValue}
      />
      <button type="button" onClick={handleAdd}>
        <Plus size={14} />
      </button>
    </InputContainer>
  );
}
