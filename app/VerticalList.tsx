'use client';

import React, { useContext } from 'react';
import { EditableCell } from './EditableCell';
import { CellChangeContext } from './context';

type VerticalListProps = {
  cells: string[];
};

export const VerticalList: React.FC<VerticalListProps> = ({ cells }) => {
  const { handleInsert, handleDelete } = useContext(CellChangeContext);

  return (
      <div>
        {cells.map((cellValue, position) => (
          <div key={position}>
            <EditableCell cell={{ id: position, value: cellValue }} />
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-1 text-center m-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => handleInsert(position)}
            >
              +
            </button>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-1 text-center m-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => handleDelete(position)}
            >
              -
            </button>
          </div>
        ))}
      </div>
  );
};
