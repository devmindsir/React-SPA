import { useId } from "react";

function InputWithLabel({ label }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input id={id} type="text" />
      </label>
    </div>
  );
}

export default InputWithLabel;
