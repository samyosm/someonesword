import React, { useState } from "react";

export const TextControl = ({
  text,
  readOnly = false,
  onChange = () => {},
  placeholder,
}: {
  text?: string;
  readOnly?: boolean;
  placeholder: string;
  onChange?: (text: string) => void;
}) => {
  return (
    <textarea
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      className="bg-[#f7fafb] h-72 resize-none rounded-2xl p-5 outline-none text-[#1d2329]"
      defaultValue={text}
    />
  );
};
