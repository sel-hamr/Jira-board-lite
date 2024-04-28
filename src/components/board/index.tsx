"use client";
import { useState } from "react";
import { DEFAULT_BOARD_DATA, DEFAULT_COLUMN_DATA } from "@/data/board";

import ColumnCards from "./column/cards";
import DeleteBarrel from "./delete-barrel";
import Columns from "./column/columns";

function Board() {
  const [cards, setCards] = useState(DEFAULT_BOARD_DATA);
  const [columns, setColumns] = useState(DEFAULT_COLUMN_DATA);
  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <ColumnCards columns={columns} cards={cards} setCards={setCards} />
      <div className="flex flex-col gap-3">
        <Columns columns={columns} setColumns={setColumns} />
        <DeleteBarrel setCards={setCards} />
      </div>
    </div>
  );
}

export default Board;
