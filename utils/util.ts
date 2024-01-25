import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function getSizeName(value: string | undefined) {
  switch (value) {
    case "6":
      return "Size-6";
    case "8":
      return "Size-8";
    case "10":
      return "Size-10";
    case "12":
      return "Size-12";
    case "14":
      return "Size-14";
    case "16":
      return "Size-16";
    case "18":
      return "Size-18";
    case "20":
      return "Size-20";
    case "22":
      return "Size-22";
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
