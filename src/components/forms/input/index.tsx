import classNames from "classnames";
import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLElement> {
  label?: string;
  variant?: string;
  error?: string;
  register: any;
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(
  (
    {
      label,
      error,
      variant,
      required,
      placeholder,
      register = {},
      className,
      type = "text",
      ...rest
    }: Props,
    ref
  ) => {
    return (
      <>
        {!!label && (
          <label className="block text-sm font-medium text-center text-slate-700">
            {label}
          </label>
        )}
        <div className="flex flex-col justify-center w-full col-span-3">
          <input
            ref={ref as React.LegacyRef<HTMLInputElement>}
            type={type}
            required={required}
            placeholder={placeholder}
            className={classNames(
              className,
              "block h-8 px-[10px] text-sm bg-slate-500/10 rounded ring-2 ring-slate-400 peer text-slate-700 focus:outline-none focus:bg-white focus:border-slate-400 focus:ring-2 focus:ring-blue-500"
            )}
            {...rest}
            {...register}
          />
        </div>
      </>
    );
  }
);
export default Input;
