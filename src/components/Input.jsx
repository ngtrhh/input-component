import { useState } from "react";

const Input = (props) => {
  const StartIcon = props.startIcon;
  const EndIcon = props.endIcon;

  const [value, setValue] = useState(props.value);
  const size = props.size ? props.size : "md";
  const error = props.error ? "error" : "";
  const disabled = props.disabled ? "disabled" : "";
  const fullWidth = props.fullWidth ? "fullWidth" : "";

  return (
    <div className={`input ${error} ${disabled} ${fullWidth}`}>
      {props.label}

      {!props.multiline ? (
        <div className={`content ${size && size}`}>
          {props.startIcon && <StartIcon />}
          <input
            placeholder={props.placeholder}
            value={value}
            disabled={props.disabled}
            onChange={(e) => setValue(e.target.value)}
          />
          {props.endIcon && <EndIcon />}
        </div>
      ) : (
        <div className="content">
          <textarea rows={props.row} placeholder={props.placeholder} />
        </div>
      )}

      {props.helperText && (
        <div className="helper-text">{props.helperText}</div>
      )}
    </div>
  );
};

export default Input;
