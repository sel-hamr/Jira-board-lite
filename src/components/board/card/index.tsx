import { CardType } from "@/types";
import DropIndicator from "../drop-indicator";
import { motion } from "framer-motion";

function Card({ column, id, title }: CardType) {
  const handleDragStart = (e: DragEvent, card: CardType) => {
    if (e.dataTransfer) e.dataTransfer.setData("cardId", card.id);
  };
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        data-id={id}
        onDragStart={(e: DragEvent) =>
          handleDragStart(e, { title, id, column })
        }
        draggable="true"
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  );
}

export default Card;
