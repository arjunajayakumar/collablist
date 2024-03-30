import { createContext } from 'react';

interface ICellChangeContext {
  handleCellChange: (id: number, value: string) => void;
  handleInsert: (position: number) => void;
  handleDelete: (position: number) => void;
}

export const CellChangeContext = createContext<ICellChangeContext>({
  handleCellChange: () => {},
  handleInsert: () => {},
  handleDelete: () => {},
});
