import { CardType, ColumnT } from "@/types";
import React, { Dispatch } from "react";
import Column from ".";
import { moveCard } from "@/utils";
import Card from "../card";
import DropIndicator from "../drop-indicator";
import AddCard from "../addCard";

type ColumnCardsProps = {
  columns: ColumnT[];
  cards: CardType[];
  setCards: Dispatch<React.SetStateAction<CardType[]>>;
};

function ColumnCards({ columns, cards, setCards }: ColumnCardsProps) {
  return (
    <>
      {columns.map((column) => {
        const columnCards = cards.filter((card) => card.column === column.id);
        return (
          <Column
            key={column.id}
            title={column.title}
            headingColor={column.headingColor}
            column={column.id}
            length={columnCards.length}
            handleDrag={(e) => {
              const copyCard = moveCard(e, column.id, cards);
              if (copyCard) setCards(copyCard);
            }}
          >
            {columnCards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
            <DropIndicator beforeId={null} column={column.id} />
            <AddCard column={column.id} setCards={setCards} />
          </Column>
        );
      })}
    </>
  );
}

export default ColumnCards;
