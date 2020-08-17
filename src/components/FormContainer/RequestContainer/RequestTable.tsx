import React from "react";

interface RequestTableProps {
  data: object[],
  setData: React.SetStateAction<object>
}

export const RequestTable: React.FC<RequestTableProps> = ({ data, setData }: RequestTableProps) => {

  return (
    <div>
      { data.length &&
        <ul>
          { data.map((v, key) =>
            <li key={key}>
              {v}
            </li>
          ) }
        </ul>
      }
    </div>
  )
};