import { CardType, ColumnT } from "@/types";
import { Dispatch } from "react";

export const getIndicators = (column: string) => {
  return Array.from(
    document.querySelectorAll(
      `[data-column="${column}"]`
    ) as unknown as HTMLElement[]
  );
};

export const highlightIndicator = (
  e: React.DragEvent<HTMLDivElement>,
  column: string
) => {
  const indicators = getIndicators(column);

  clearHighlights(column, indicators);

  const el = getNearestIndicator(e, indicators);
  if (el?.element) el.element.style.opacity = "1";
};

export const getNearestIndicator = (
  e: React.DragEvent<HTMLDivElement>,
  indicators: HTMLElement[]
) => {
  const DISTANCE_OFFSET = 55;
  const el = indicators.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = e.clientY - (box.top + DISTANCE_OFFSET);
      // console.log("offset", offset, e.clientY, box.top);
      if (offset < 0 && offset > closest.offset) {
        // console.log("change", offset, e.clientY, box.top);
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
      element: indicators[indicators.length - 1],
    }
  );
  return el;
};

export const clearHighlights = (column: string, els?: HTMLElement[]) => {
  const indicators = els || getIndicators(column);

  indicators.forEach((i) => {
    i.style.opacity = "0";
  });
};

export const moveCard = (
  e: React.DragEvent<HTMLDivElement>,
  column: string,
  cards: CardType[]
) => {
  const cardId = e.dataTransfer.getData("cardId");
  const indicators = getIndicators(column);
  const { element } = getNearestIndicator(e, indicators);
  if (element && element.dataset.before) {
    const beforeCard = element.dataset.before || "-1";
    if (beforeCard !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = beforeCard === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === beforeCard);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      return copy;
    } else return undefined;
  } else return undefined;
};

export const moveColumn = (
  e: React.DragEvent<HTMLDivElement>,
  columns: ColumnT[],
  setColumns: Dispatch<React.SetStateAction<ColumnT[]>>
) => {
  const dragIndex = Number(e.dataTransfer.getData("columnId"));
  const hoverIndex = Number(e.currentTarget.dataset.index);
  if (dragIndex === hoverIndex) return;
  const newColumns = [...columns];
  const dragColumn = columns[dragIndex];
  newColumns.splice(dragIndex, 1);
  newColumns.splice(hoverIndex, 0, dragColumn);
  setColumns(newColumns);
};

export const clearHighlightsColumns = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  const element = e.currentTarget as HTMLElement;
  element.setAttribute("data-drop", "false");
};

export const highlightsColumns = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  const element = e.currentTarget as HTMLElement;
  element.setAttribute("data-drop", "true");
};
