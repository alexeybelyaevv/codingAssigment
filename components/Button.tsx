import React from "react";

interface buttonType {
  color: { default: string; hover: string; active: string };
  size: "sm" | "md" | "lg";
  type: "regular" | "outline";
  children: React.ReactNode;
}
export default function Button({
  color = Blue,
  size = "md",
  type = "regular",
  children,
}: buttonType) {
  let _size;

  switch (size) {
    case "sm":
      _size = {
        px: "2",
        py: "1.5",
        text: "text-xs",
      };
      break;

    case "lg":
      _size = {
        px: "5",
        py: "3",
        text: "text-xl",
      };
      break;

    default:
      _size = {
        px: "3",
        py: "2",
        text: "text",
      };
  }
  [size];

  let generatedButton;
  switch (type) {
    case "outline":
      generatedButton = (
        <button
          className={`bg-transparent border border-[${color.default}] hover:border-[${color.hover}] active:border-[${color.active}] px-${_size.px} py-${_size.py} rounded text text-[${color.default}]`}
        >
          Click me
        </button>
      );
    default:
      generatedButton = (
        <button
          className={`bg-[${color.default}] hover:bg-[${color.hover}] active:bg-[${color.active}] px-${_size.px} py-${_size.py} rounded ${_size.text} text-white`}
        >
          {children}
        </button>
      );
  }
  return generatedButton;
}

export const Red = {
  default: "#FF0054",
  hover: "#E6003B",
  active: "#CC0021",
};

export const Blue = {
  default: "#0A344F",
  hover: "#001B36",
  active: "#0A344F",
};
