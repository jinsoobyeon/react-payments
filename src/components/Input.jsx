import styled from "styled-components";

function Input({
  type,
  width,
  placeholder,
  maxLength,
  handle,
  value,
  disabled,
}) {
  return (
    <InputBasic
      type={type}
      width={width}
      placeholder={placeholder}
      maxLength={maxLength}
      onKeyUp={handle}
      value={value}
      disabled={disabled}
    />
  );
}

export default Input;

const InputBasic = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: ${(props) => (props.width ? props.width : "100%")};
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
`;