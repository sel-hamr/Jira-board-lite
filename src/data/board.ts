import { CardType, ColumnT } from "@/types";

export const DEFAULT_BOARD_DATA = [
  { title: "create dashboard with tailwind", id: "1", column: "backlog" },
  { title: "update dockerfile ", id: "2", column: "backlog" },
  { title: "update vision nextjs ", id: "3", column: "backlog" },
  { title: "Document Notifications service", id: "4", column: "backlog" },

  {
    title: "Refactor microservices to use gRPC",
    id: "5",
    column: "todo",
  },
  { title: "add new page for about", id: "6", column: "todo" },
  { title: "Refactor carousel home page", id: "7", column: "todo" },

  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
  },
  { title: "switch page FAQ to SSR", id: "9", column: "doing" },
  {
    title: "update all tests to use Jest and React Testing Library",
    id: "10",
    column: "done",
  },
] as CardType[];

export const DEFAULT_COLUMN_DATA = [
  {
    id: "backlog",
    title: "Backlog",
    headingColor: "#4793AF",
    columnIndex: 0,
  },
  {
    id: "todo",
    title: "TODO",
    headingColor: "#DD5746",
    columnIndex: 1,
  },
  {
    id: "doing",
    title: "In progress",
    headingColor: "#FFBB70",
    columnIndex: 2,
  },
  {
    id: "done",
    title: "Complete",
    headingColor: "#6C0345",
    columnIndex: 3,
  },
] as ColumnT[];
