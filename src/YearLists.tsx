import React, { useState } from "react";

interface mydate {
  years: number[];
}
const YearLists: React.FC<mydate> = ({ years }) => {
  const [selectYears, setSelectYears] = useState<number | null>(null);
  const handleClick = (year: number) => {
    setSelectYears(year === selectYears ? null : year);
  };
  return (
    <div>
      <h1>Listes des années </h1>
      <button></button>
      {/* <ul className="flex flex-col gap-3 min-w-full">
        {years.map((year, index) => (
          <li
            key={index}
            className="border-b w-full"
            onClick={() => handleClick(year)}
          >
            {year}
          </li>
        ))}
      </ul> */}
      <div className="year-list">
        {years.map((year, index) => (
          <div key={index}>
            <div
              className="p-2 cursor-pointer"
              onClick={() => handleClick(year)}
            >
              {year}
            </div>
            {selectYears === year && (
              <div className="details">Année selectionné{selectYears}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearLists;
