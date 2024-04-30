"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { clearHighlights, highlightIndicator } from "@/utils";

type ColumnProps = {
  title: string;
  headingColor: string;
  column: string;
  length: number;
  children?: React.ReactNode;
  handleDrag: (e: React.DragEvent<HTMLDivElement>) => void;
};
function Column({
  title,
  headingColor,
  column,
  children,
  length,
  handleDrag,
}: ColumnProps) {
  const [active, setActive] = useState(false);

  const handleOnDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    highlightIndicator(e, column);
    setActive(true);
  };

  const handleOnDragLeave = () => {
    setActive(false);
    clearHighlights(column);
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    clearHighlights(column);
    setActive(false);
    handleDrag(e);
  };

  return (
    <motion.div
      className={`w-64 shrink-0 transition-colors px-2 py-3 rounded-lg  ${
        active ? "bg-[#282E33]" : "bg-[#161A1D]"
      }`}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
      onDragLeave={handleOnDragLeave}
    >
      <div className="mb-3 flex items-center justify-between">
        <h3
          className={`font-medium `}
          style={{
            color: headingColor,
          }}
        >
          {title}
        </h3>
        <span className="rounded text-sm text-neutral-400">{length}</span>
      </div>
      <div className={`h-full w-full `}>{children}</div>
    </motion.div>
  );
}

export default Column;
