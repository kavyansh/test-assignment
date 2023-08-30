import { useState } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";

function More({ moreItems, setMoreNavRef }) {
  const [open, setOpen] = useState(false);

  if (!moreItems || !moreItems?.length) return null;

  return (
    <div
      ref={setMoreNavRef}
      className="more"
      onClick={() => setOpen((open) => !open)}
    >
      <div className="more__heading">
        More
        <i className="more__icon">
          <FiChevronDown />
        </i>
      </div>
      {open && <MoreItemList moreItems={moreItems} />}
    </div>
  );
}

function MoreItemList({ moreItems }) {
  return (
    <div className="more__list">
      {moreItems.map((item, i) => (
        <p
          value={item}
          key={item}
          className={`more__list-item ${
            i === 2 ? "more__list-item--active" : ""
          }`}
        >
          {item}
          <span className="tick-icon">
            <i>
              <FiCheck width={20} height={20} />
            </i>
          </span>
        </p>
      ))}
    </div>
  );
}

export default More;
