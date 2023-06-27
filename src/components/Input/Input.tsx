import React, { useId, useMemo, ChangeEventHandler, memo } from 'react';

function TextOrNumberInput<
  T extends string | number | readonly string[] | undefined,
>({
  label,
  value,
  onChange,
  className,
  style,
  type = 'text',
  disabled = false,
  color,
}: {
  label: string;
  value: T;
  type?: 'number' | 'text';
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const id = useId();
  return (
    <div
      style={{ ...style }}
      className={`flex flex-col${' ' + className || ''}`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={`px-2 border-solid border-[1px]`}
        disabled={disabled}
        style={{
          color: color || (disabled ? '#858585' : '#000'),
          borderColor: color || (disabled ? '#858585' : '#000'),
        }}
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  );
}

export default memo(TextOrNumberInput);
