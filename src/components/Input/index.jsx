import React from "react";
import { Controller } from "react-hook-form";

import { InputContainer, InputText, IconContainer } from "./styles";

const Input = ({ leftIcon, name, control, error, ...rest }) => {
  return (
    <InputContainer>
      <div className="input">
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </div>

      {error && <span>{error.message}</span>}
    </InputContainer>
  );
};

export { Input };
