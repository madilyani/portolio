import { ChangeEventHandler } from "react";
import styles from "./text-field.module.scss";
const TextField = ({
  value,
  row,
  placeholder,
  onChange,
  disabled,
}: {
  value?: string;
  disabled?: boolean;
  row?: number;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
}) => {
  return (
    <div className={styles["input"]}>
      <textarea
        name="message"
        id=""
        rows={row ? row : 5}
        placeholder={placeholder ? placeholder : ""}
        value={value}
        onChange={onChange}
        disabled={disabled}
      ></textarea>
    </div>
  );
};
export { TextField };
