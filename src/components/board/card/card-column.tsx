import { ColumnT } from "@/types";
import { clearHighlightsColumns, highlightsColumns, moveColumn } from "@/utils";
import { motion } from "framer-motion";

type ColumnProps = {
  column: ColumnT;
  columns: ColumnT[];
  index: number;
  setColumns: React.Dispatch<React.SetStateAction<ColumnT[]>>;
};

function CardColumn({ column, setColumns, index, columns }: ColumnProps) {
  const handleDragStart = (e: DragEvent, index: number) => {
    if (e.dataTransfer) {
      e.dataTransfer.setData("columnId", index.toString());
    }
  };
  return (
    <motion.div
      layout
      layoutId={column.id}
      onDragStart={(e: DragEvent) => {
        handleDragStart(e, index);
      }}
      key={column.id}
      data-index={index}
      data-drop="false"
      onDragOver={highlightsColumns}
      onDragLeave={clearHighlightsColumns}
      onDrop={(e) => {
        clearHighlightsColumns(e);
        moveColumn(e, columns, setColumns);
      }}
      draggable="true"
      className="active:cursor-grabbing data-[drop=true]:bg-slate-800 cursor-grab p-2 rounded border-neutral-700 bg-[#22272B] border border-solid relative "
    >
      <p>{column.title}</p>
      <div
        className="h-full w-5 right-0 bottom-0 rounded-l-lg absolute"
        style={{
          backgroundColor: column.headingColor,
        }}
      ></div>
    </motion.div>
  );
}

export default CardColumn;
