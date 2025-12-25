"use client";

import { useState } from "react";
import ConfettiBoom from "react-confetti-boom";
import { Button } from "@/components/ui/button";

const MiniConfettiButton = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
    setTimeout(() => setShow(false), 1000);
  };

  return (
    <div className="relative h-40 flex justify-center items-end">
      {show && (
        <ConfettiBoom
          className="h-100"
          particleCount={50}
          colors={["#ff595e", "#ffca3a", "#8ac926", "#1982c4"]}
        />
      )}

      <Button onClick={handleClick} className="mb-4">
        🎉 Clique-moi !
      </Button>
    </div>
  );
};

export default MiniConfettiButton;
