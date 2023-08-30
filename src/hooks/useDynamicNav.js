import throttle from "lodash.throttle";
import { useCallback, useEffect, useState } from "react";

const totalItemsInMenu = (
  array,
  containerWidth,
  initialWidth,
  minNavElements
) => {
  let total = Math.floor(initialWidth * 1.75);
  console.log("array", array);
  console.log("containerWodth", containerWidth);
  console.log("initialWidth", initialWidth);
  console.log("minNavElements", minNavElements);
  for (let i = 0; i < array.length; i++) {
    if (total + array[i] > containerWidth) {
      return i < minNavElements ? minNavElements : i;
    } else {
      total += array[i];
    }
  }
};

export default function useDynamicNav(
  navLinksArray,
  navigation,
  navigationContainer,
  more
) {
  const [visibleItems, setVisibleItems] = useState([]);
  const [moreItems, setMoreItems] = useState([]);
  const [widthsArray, setWidthsArray] = useState([]);

  useEffect(
    function () {
      if (!navigation.current) return;

      const items = [...navigation.current.children];
      const itemsWidthArr = items.map(
        (item) => item.getBoundingClientRect().width
      );
      setWidthsArray(itemsWidthArr);
    },
    [navigation.current]
  );

  const distributeItems = useCallback(() => {
    const outerWidth =
      navigationContainer?.current?.getBoundingClientRect().width;

    const moreMenu = more.current
      ? more.current.getBoundingClientRect().width
      : 60;

    const arrayAmount = totalItemsInMenu(widthsArray, outerWidth, moreMenu, 2);

    const navItemsCopy = navLinksArray;
    const priorityItems = navItemsCopy?.slice(0, arrayAmount);

    console.log(priorityItems);

    setVisibleItems(priorityItems);
    setMoreItems(
      priorityItems?.length !== navItemsCopy?.length
        ? navItemsCopy.slice(arrayAmount, navItemsCopy.length)
        : []
    );
  }, [navLinksArray, widthsArray, more.current, navigationContainer.current]);

  useEffect(() => {
    setVisibleItems(navLinksArray);
  }, [navLinksArray]);

  useEffect(() => {
    const handleResize = throttle(() => {
      distributeItems();
    }, 100);

    window.addEventListener("resize", handleResize);
    distributeItems();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [distributeItems]);

  return { visibleItems, moreItems };
}
