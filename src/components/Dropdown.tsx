import React, { useState, useEffect, useRef } from 'react';

type Option = {
  label: string;
  value: string;
};

interface DropDownProps {
  label: string;
  options: Option[];
  selected: Option;
  onSelectedChange: React.Dispatch<Option>;
}

const Dropdown: React.FC<DropDownProps> = ({
  label,
  options,
  selected,
  onSelectedChange,
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onBodyClick = (e: MouseEvent): void => {
      if (e.target instanceof HTMLElement && ref.current?.contains(e.target))
        return;

      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return;

    return (
      <div
        onClick={() => onSelectedChange(option)}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a {label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
