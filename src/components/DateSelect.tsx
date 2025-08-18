import React, { useState } from "react";

type Option = {
  value: string;
  label: string;
};

export default function DateSelect() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const options: Option[] = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");

    return {
      value: `${yyyy}-${mm}-${dd}`,
      label: `${dd}/${mm}/${yyyy}`,
    };
  });

  const [selected, setSelected] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const isFutureorToday = (dateStr: string) => {
    const d = new Date(dateStr);
    d.setHours(0, 0, 0, 0);
    return d >= today;
  };

  return (
    <div className="w-[100px] border-none relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[100px] flex items-center text-[#2B3A58] text-xs font-normal"
      >
        {selected ? selected.label : "Selected date"}
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.47108 5.52827C4.21073 5.26792 3.78862 5.26792 3.52827 5.52827C3.26792 5.78862 3.26792 6.21073 3.52827 6.47108L7.52827 10.4711C7.78862 10.7314 8.21073 10.7314 8.47108 10.4711L12.4711 6.47108C12.7314 6.21073 12.7314 5.78862 12.4711 5.52827C12.2107 5.26792 11.7886 5.26792 11.5283 5.52827L7.99967 9.05687L4.47108 5.52827Z"
              fill="#464545"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 w-full bg-white border text-xs rounded-md shadow-md z-50">
          {options.map((opt) => {
            const disabled = !isFutureorToday(opt.value);

            return (
              <div
                key={opt.value}
                onClick={() => {
                  if (!disabled) {
                    setSelected(opt);
                    setIsOpen(false);
                  }
                }}
                className={`px-3 py-2 cursor-pointer ${
                  disabled
                    ? "text-gray-400 cursor-not-allowed text-xs"
                    : "hover:bg-gray-100 text-xs"
                }`}
              >
                {opt.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
