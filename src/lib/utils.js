import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const defaultCurrency = { locale: "en-NG", currency: "NGN", style: "currency" };

export const toCurrency = (
  number,
  minify = false,
  minimumFractionDigits = 0,
  currency = defaultCurrency
) => {
  if (typeof number === "string") {
    number = parseFloat(number);
  }
  if (Array.isArray(number)) {
    number = parseFloat(number[0]);
  }

  if (
    ["string", "number", "bigint"].includes(typeof number) ||
    Array.isArray(number)
  ) {
    if (minify) {
      switch (true) {
        case number >= 1000000000:
          const B = Number(
            (Number(number) / 1000000000)
              .toFixed(2)
              .toString()
              .replace(/[0-9]$/, "")
          );
          return (
            new Intl.NumberFormat(currency.locale, {
              //  @ts-ignore
              style: currency.style,
              currency: currency.currency,
              minimumFractionDigits,
            }).format(B) + "B"
          );
        case number >= 1000000:
          const M = Number(
            (Number(number) / 1000000)
              .toFixed(2)
              .toString()
              .replace(/[0-9]$/, "")
          );
          return (
            new Intl.NumberFormat(currency.locale, {
              //  @ts-ignore
              style: currency.style,
              currency: currency.currency,
              minimumFractionDigits,
            }).format(M) + "M"
          );
        case number >= 100000:
          const K = Number(
            (Number(number) / 1000)
              .toFixed(2)
              .toString()
              .replace(/[0-9]$/, "")
          );
          return (
            new Intl.NumberFormat(currency.locale, {
              //  @ts-ignore
              style: currency.style,
              currency: currency.currency,
              minimumFractionDigits,
            }).format(K) + "K"
          );
        default:
          return new Intl.NumberFormat(currency.locale, {
            //  @ts-ignore
            style: currency.style,
            currency: currency.currency,
            minimumFractionDigits,
          }).format(number);
      }
    } else {
      return new Intl.NumberFormat(currency.locale, {
        //  @ts-ignore
        style: currency.style,
        currency: currency.currency,
        minimumFractionDigits,
      }).format(number);
    }
  } else {
    return new Intl.NumberFormat(currency.locale, {
      //  @ts-ignore
      style: currency.style,
      currency: currency.currency,
      minimumFractionDigits,
    }).format(0);
  }
};

export const toLocaleString = (arg) => {
  const toString = parseFloat(arg?.toString() || "0");
  return toString.toLocaleString();
};
