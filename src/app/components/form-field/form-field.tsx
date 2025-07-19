import React, { ChangeEventHandler } from "react";
import styles from "./form-field.module.scss";
import classNames from "classnames";
const FormField = ({
  error,
  errorText,
  value,
  type,
  placeholder,
  onChange,
  disabled,
}: {
  error?: boolean;
  errorText?: string;
  value?: string;
  placeholder?: string;
  type?: "text" | "email" | "number" | "name" | "password";
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  disabled?: boolean;
}) => {
  return (
    <div
      className={classNames(styles["input"], {
        [styles.error]: error,
      })}
    >
      <input
        disabled={disabled}
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : ""}
        value={value}
        onChange={onChange}
      />
      {error && <p className={styles["error"]}>{errorText}</p>}
    </div>
  );
};
export { FormField };
