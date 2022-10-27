import React from "react";

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
      rows={1}
      style={{
        height: readOnly ? "unset" : "16rem" 
      }}
      onChange={(event) => onChange(event.target.value)}
      className="bg-[#f7fafb] resize-none rounded-2xl p-5 outline-none text-[#1d2329]"
    >
      {text}
    </textarea>
  );
};
