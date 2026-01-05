import { forwardRef, type InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const BaseInput = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-y-2 w-full">
        {label && (
          <label className="font-medium text-sm text-black/80">
            {label}
          </label>
        )}

        <input
          {...props}
          ref={ref}
          className={`flex h-13 w-full rounded-lg border bg-background px-3 py-2 text-base! ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors ${
            error
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-input focus-visible:ring-ring"
          } ${className}`}
        />

        {error && (
          <span className="text-red-500 text-xs font-medium italic">
            {error}
          </span>
        )}
      </div>
    );
  }
);

BaseInput.displayName = "BaseInput";