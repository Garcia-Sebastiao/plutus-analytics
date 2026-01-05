import { forwardRef } from "react";
import CurrencyInput, {
  type CurrencyInputProps,
} from "react-currency-input-field";

interface MoneyInputProps extends CurrencyInputProps {
  label?: string;
  error?: string;
}

export const MoneyInput = forwardRef<HTMLInputElement, MoneyInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-y-2 w-full">
        {label && (
          <label className="font-medium text-sm text-black/80">{label}</label>
        )}

        <CurrencyInput
          {...props}
          ref={ref}
          decimalsLimit={2}
          decimalSeparator=","
          groupSeparator="."
          prefix="€ "
          className={`flex h-13 w-full rounded-lg border border-input bg-background px-3 py-2 text-base! ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors ${
            error
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-border focus-visible:ring-primary"
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

MoneyInput.displayName = "MoneyInput";
