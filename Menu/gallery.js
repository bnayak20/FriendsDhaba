(function () {
  "use strict";

  const galleryRoot = document.getElementById("react-gallery");
  if (!galleryRoot || !window.React || !window.ReactDOM) return;

  const { createElement: h, useEffect, useRef, useState } = window.React;

  const dishes = [
    { name: "Handi Chicken", image: "images/gallery/handi-chicken.png", type: "Non-Veg" },
    { name: "Home Style Chicken", image: "images/gallery/home-style-chicken.png", type: "Non-Veg" },
    { name: "Yellow Dal Tadka", image: "images/gallery/yellow-dal-tadka.png", type: "Veg" },
    { name: "Tandoori Chicken", image: "images/gallery/tandoori-chicken.png", type: "Non-Veg" },
    { name: "Honey Chilli Potato", image: "images/gallery/honey-chilli-potato.png", type: "Veg" },
    { name: "Chicken Tikka", image: "images/gallery/chicken-tikka.png", type: "Non-Veg" },
    { name: "Fish Crunchy", image: "images/gallery/fish-crunchy.png", type: "Non-Veg" },
    { name: "Chicken Crunchy", image: "images/gallery/chicken-crunchy.png", type: "Non-Veg" },
    { name: "Boneless Chilli Chicken", image: "images/gallery/boneless-chilli-chicken.png", type: "Non-Veg" },
    { name: "4 Poori Chana", image: "images/gallery/poori-chana.png", type: "Veg" },
    { name: "Mutton Thali", image: "images/gallery/mutton-thali.png", type: "Non-Veg" },
    { name: "Fish Thali", image: "images/gallery/fish-thali.png", type: "Non-Veg" },
    { name: "Egg Thali", image: "images/gallery/egg-thali.png", type: "Egg" }
  ];

  function Gallery() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const touchStart = useRef(null);

    const move = (amount) => {
      setActive((current) => (current + amount + dishes.length) % dishes.length);
    };

    useEffect(() => {
      if (paused) return undefined;
      const timer = window.setInterval(() => move(1), 3500);
      return () => window.clearInterval(timer);
    }, [paused]);

    const dish = dishes[active];

    return h(
      "div",
      {
        className: "react-gallery",
        onMouseEnter: () => setPaused(true),
        onMouseLeave: () => setPaused(false),
        onFocus: () => setPaused(true),
        onBlur: (event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
        }
      },
      h(
        "div",
        {
          className: "carousel-viewport",
          onTouchStart: (event) => {
            touchStart.current = event.changedTouches[0].clientX;
          },
          onTouchEnd: (event) => {
            if (touchStart.current === null) return;
            const distance = event.changedTouches[0].clientX - touchStart.current;
            if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1);
            touchStart.current = null;
          }
        },
        h(
          "figure",
          { className: "carousel-slide", key: dish.image },
          h("img", {
            className: "carousel-image",
            src: dish.image,
            alt: dish.name,
            loading: active === 0 ? "eager" : "lazy"
          }),
          h(
            "figcaption",
            { className: "carousel-overlay" },
            h("span", { className: `dish-type ${dish.type === "Veg" ? "is-veg" : "is-nonveg"}` }, dish.type),
            h("strong", null, dish.name),
            h("span", { className: "slide-count" }, `${active + 1} / ${dishes.length}`)
          )
        ),
        h(
          "button",
          {
            className: "carousel-button carousel-previous",
            type: "button",
            onClick: () => move(-1),
            "aria-label": "Show previous dish"
          },
          "‹"
        ),
        h(
          "button",
          {
            className: "carousel-button carousel-next",
            type: "button",
            onClick: () => move(1),
            "aria-label": "Show next dish"
          },
          "›"
        )
      ),
      h(
        "div",
        { className: "carousel-dots", "aria-label": "Choose a gallery photo" },
        dishes.map((item, index) =>
          h("button", {
            className: `carousel-dot${index === active ? " is-active" : ""}`,
            key: item.name,
            type: "button",
            onClick: () => setActive(index),
            "aria-label": `Show ${item.name}`,
            "aria-current": index === active ? "true" : undefined
          })
        )
      )
    );
  }

  window.ReactDOM.createRoot(galleryRoot).render(h(Gallery));
})();
