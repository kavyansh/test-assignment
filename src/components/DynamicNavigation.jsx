import { useRef } from "react";
import More from "./More";
import useDynamicNav from "../hooks/useDynamicNav";

function DynamicNavigation({ navLinksArray }) {
  const navigation = useRef(null);
  const navigationContainer = useRef(null);
  const more = useRef(null);

  const { visibleItems, moreItems } = useDynamicNav(
    navLinksArray,
    navigation,
    navigationContainer,
    more
  );

  return (
    <div className="navigation-box">
      <nav ref={navigationContainer} className="navigation" role="navigation">
        <ul ref={navigation} className="navigation-list">
          {visibleItems &&
            visibleItems.map((item, i) => (
              <li key={item} className="navigation-item">
                <a className="navigation-link" href="#">
                  {item}
                </a>
              </li>
            ))}
        </ul>
        {moreItems.length > 0 && (
          <More moreNavRef={more} moreItems={moreItems} />
        )}
      </nav>
    </div>
  );
}

export default DynamicNavigation;
