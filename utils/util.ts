import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function getSizeName(value: string | undefined) {
  switch (value) {
    case "xs":
      return "X-Small";
    case "s":
      return "Small";
    case "m":
      return "Medium";
    case "l":
      return "Large";
    case "xl":
      return "X-Large";
    case "one-size":
      return "One Size";
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (value: any) => {
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  }).format(value);

  return currency;
};

export const formatVAT = (totalPrice: any): number => {
  const vatPercentage = 7.5 / 100;
  const vatAmount = vatPercentage * totalPrice;
  return parseFloat(vatAmount.toFixed(2));
};
