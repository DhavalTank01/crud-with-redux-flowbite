import { nanoid } from "@reduxjs/toolkit";
import moment from "moment";
import { CaseType } from "../types";

const getDisplayValue = (value: string | number | boolean | undefined) => {
  if (value === undefined || value === null || !value) {
    return "-";
  }
  return value;
};

const generateUniqueId = () => {
  return nanoid(16);
};

const convertTextCase = (
  text: string | undefined,
  caseType: CaseType,
): string => {
  if (!text) return "";
  switch (caseType) {
    case "uppercase":
      return text.toUpperCase();
    case "lowercase":
      return text.toLowerCase();
    case "titlecase":
      return text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    case "capitalize":
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    case "errorMessage":
      return text
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
        .replace("_", " ")
        .toLowerCase()
        .replace(/^\w/, (match) => match.toUpperCase());
    case "initialLetters":
      return text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase())
        .join("");

    default:
      return text;
  }
};

const getFormattedDate = (
  date: string | undefined | null,
  dateFormat: string = "DD/MM/YYYY",
  inputFormat: string = "YYYY-MM-DDTHH:mm:ss.SSSZ",
): string | undefined => {
  if (!date) {
    return "-";
  }

  const dateObj = moment(date, inputFormat);
  return dateObj.isValid() ? dateObj.format(dateFormat) : undefined;
};

const classNames = (...classes: (string | undefined)[]): string => {
  return classes?.filter(Boolean).join(" ");
};

const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: "yellow" }}>
        {part}
      </span>
    ) : (
      part
    ),
  );
};

export {
  getDisplayValue,
  generateUniqueId,
  convertTextCase,
  getFormattedDate,
  classNames,
  highlightText,
};
