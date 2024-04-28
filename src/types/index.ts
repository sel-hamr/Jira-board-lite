export type ColumnType = "backlog" | "todo" | "doing" | "done";

export type CardType = {
  title: string;
  id: string;
  column: string;
};

export type ColumnT = {
  id: string;
  title: string;
  headingColor: string;
  column: string;
  columnIndex: number;
};
export type SvgIconProps = React.SVGProps<SVGSVGElement>;
