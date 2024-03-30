import React, { useContext, useEffect, useState } from 'react';
import { CellChangeContext } from './context';
import './styles.css';

type Cell = {
  id: number;
  value: string;
};

type EditableCellProps = {
  cell: Cell;
};

export const EditableCell: React.FC<EditableCellProps> = ({ cell }) => {
  const { handleCellChange } = useContext(CellChangeContext);
  const [valueUnderEdit, setValueUnderEdit] = useState<string>(cell.value);

  useEffect(() => {
    setValueUnderEdit(cell.value);
  }, [cell.value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueUnderEdit(e.target.value);
  };
  const handleBlur = () => {
    if (valueUnderEdit !== cell.value) {
      handleCellChange(cell.id, valueUnderEdit);
    }
  };

  return (
    <input
      type="text"
      className="editable-cell-input m-2"
      value={valueUnderEdit}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};
