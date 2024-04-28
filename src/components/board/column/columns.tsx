import React from "react";
import Column from ".";
import { ColumnT } from "@/types";
import { motion } from "framer-motion";
import { clearHighlightsColumns, highlightsColumns, moveColumn } from "@/utils";
import CardColumn from "../card/card-column";
type ColumnProps = {
  columns: ColumnT[];
  setColumns: React.Dispatch<React.SetStateAction<ColumnT[]>>;
};

function Columns({ columns, setColumns }: ColumnProps) {
  const handleDragStart = (e: DragEvent, index: number) => {
    if (e.dataTransfer) {
      e.dataTransfer.setData("columnId", index.toString());
    }
  };
  return (
    <Column
      length={columns.length}
      title="Order"
      headingColor="red"
      column="order"
      handleDrag={(e) => {}}
    >
      <div className="flex flex-col gap-2 ">
        {columns.map((column, key) => (
          <CardColumn
            key={column.id}
            column={column}
            columns={columns}
            index={key}
            setColumns={setColumns}
          />
        ))}
      </div>
    </Column>
  );
}

export default Columns;
