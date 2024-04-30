import { PackageXIcon } from "@/assets/icons/package-x";
import { TrashIcon } from "@/assets/icons/trash";
import { CardType } from "@/types";
import React, { Dispatch, SetStateAction, useState } from "react";

function DeleteBarrel({
  setCards,
}: {
  setCards: Dispatch<SetStateAction<CardType[]>>;
}) {
  const [active, setActive] = useState(false);
  const handleOnDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActive(true);
  };
  const handleOnDragLeave = () => {
    setActive(false);
  };
  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e, "cardId");
    const cardId = e.dataTransfer.getData("cardId");
    setCards((prev) => prev.filter((card) => card.id !== cardId));
    setActive(false);
  };
  return (
    <div
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
      onDragLeave={handleOnDragLeave}
      className={`grid h-56 w-64 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-[#22272B] text-neutral-500"
      }`}
    >
      {active ? <PackageXIcon className="animate-bounce" /> : <TrashIcon />}
    </div>
  );
}

export default DeleteBarrel;
