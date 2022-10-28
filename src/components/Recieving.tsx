import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "./Button";
import { TextControl } from "./TextControl";

const getWord = async () => {
  const response = await fetch("http://randomms.samyos.live/api/message", {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

  const json = await response.json();

  return json.content;
};

const Recieving = ({
  handleSendWordPress,
}: {
  handleSendWordPress: () => void;
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    getWord().then(setValue);
  }, []);

  const handleGetWordPress = () => {
    getWord().then((word) => setValue(word));
  };

  return (
    <>
      <div className="flex flex-col w-full h-full justify-center gap-5">
        <Button onPress={handleGetWordPress} label="Get a word from someone" />
        <TextControl
          placeholder="Start writing a message"
          readOnly
          text={value}
        />
      </div>

      <Button
        inverted
        onPress={handleSendWordPress}
        label="Send someone a word"
      />
    </>
  );
};

export default Recieving;
