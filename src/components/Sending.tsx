import React, { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "./Button";
import { TextControl } from "./TextControl";

const sendWord = (word: string) => {
  fetch("http://randomms.samyos.live/api/message", {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      content: word,
    }),
  })
    .then(() => {
      toast.success("Succefully sent letter!");
    })
    .catch(() => {
      toast.error("Couldn't send letter.");
    });
};

const Sending = ({
  handleGetWordPress,
}: {
  handleGetWordPress: () => void;
}) => {
  const [value, setValue] = useState("");

  const handleSendWordPress = () => {
    sendWord(value);
  };

  const handleInputChange = setValue;

  return (
    <>
      <div className="flex flex-col w-full h-full justify-center gap-5">
        <Button
          inverted
          onPress={handleSendWordPress}
          label="Send someone a word"
        />
        <TextControl
          onChange={handleInputChange}
          placeholder="Start writing a message"
          text={value}
        />
      </div>

      <Button onPress={handleGetWordPress} label="Get a word from someone" />
    </>
  );
};

export default Sending;
