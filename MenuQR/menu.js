const menuSections = [
  {
    title: "Breakfast Special",
    items: [
      ["Aloo Paratha", null, 30],
      ["Gobhi Paratha", null, 40],
      ["Mooli Paratha", null, 40],
      ["Mix Veg Paratha", null, 50],
      ["Paneer Paratha", null, 50],
      ["Egg Paratha", null, 60]
    ]
  },
  {
    title: "Punjabi Dal Ka Swad",
    items: [
      ["Dal Makhani", 100, 180],
      ["Dal Fry", 70, 110],
      ["Yellow Dal", 70, 110],
      ["Dal Mughlai (with Egg)", 120, 200],
      ["Chole Bhature", null, 80],
      ["Puri Chana", null, 70],
      ["Amritsari Naan Chole", null, 100]
    ]
  },
  {
    title: "Punjabi Special Paneer Ka Zaika",
    items: [
      ["Shahi Paneer", 150, 280],
      ["Kadhai Paneer", 150, 280],
      ["Matar Paneer", 140, 250],
      ["Paneer Butter Masala", 170, 280],
      ["Paneer Bhurji", 170, 300],
      ["Palak Paneer", 170, 300],
      ["Malai Kofta", 170, 300]
    ]
  },
  {
    title: "Punjabi Vegetable Ka Zaika",
    items: [
      ["Matar Mushroom", 140, 240],
      ["Mushroom Masala", 140, 240],
      ["Mix Veg Do Pyaza", 140, 240],
      ["Aloo Gobi", 120, 200],
      ["Gobhi Masala", 120, 200],
      ["Aloo Matar", 120, 180],
      ["Aloo Palak", 110, 180],
      ["Bharwa Baingan", 110, 190],
      ["Bhindi", 110, 180],
      ["Kadhai Veg", 110, 180],
      ["Mix Veg", 100, 170],
      ["Aloo Jeera", 100, 180],
      ["Methi Malai Matar", 140, 260],
      ["Sev Bhaji", 140, 220]
    ]
  },
  {
    title: "Punjabi Veg & Chinese Starters",
    items: [
      ["Cheese Chilli", 150, 280],
      ["Chilli Paneer", 150, 280],
      ["Chilli Mushroom", 140, 260],
      ["Cheese Corn", 140, 250],
      ["Crunchy Corn", 140, 220],
      ["Honey Chilli Potato", null, 200],
      ["Chilli Fried Cauliflower", null, 200],
      ["Manchurian Dry / Gravy", null, 200],
      ["Mushroom Duplex", null, 250]
    ]
  },
  {
    title: "Non-Veg Starters",
    items: [
      ["Chicken Pakora", 250, 400],
      ["Chicken Tikka (with Bones)", 250, 400],
      ["Chilli Chicken", 250, 400],
      ["Chicken Lollipop", 250, 400],
      ["Chicken Manchurian (Boneless)", 300, 500]
    ]
  },
  {
    title: "Tandoor & Seekh",
    items: [
      ["Masala Chaap", 140, 200],
      ["Malai Chaap", 140, 200],
      ["Mushroom Tikka", 140, 250],
      ["Paneer Malai Tikka", 140, 250],
      ["Paneer Tikka", 150, 280],
      ["Afghani Chicken", 240, 450],
      ["Chicken Tikka", 200, 350],
      ["Chicken Malai Tikka", 200, 320]
    ]
  },
  {
    title: "Punjabi Chicken Zaika",
    items: [
      ["Mutton Masala (3 pc) + Rice", 240, 400],
      ["Mutton Curry (3 pc) + Rice", 240, 400],
      ["Rara Mutton", 250, 400],
      ["Bhuna Mutton", 250, 400],
      ["Lemon Chicken", 230, 400],
      ["Kadhai Chicken", 230, 400],
      ["Palak Chicken", 250, 450],
      ["Special Butter Chicken", 230, 450],
      ["Mughlai Chicken (Boneless)", 300, 500],
      ["Kadhai Chicken (Boneless)", 250, 400],
      ["Egg Curry (Boiled/Fried, 2 Eggs)", 100, 180]
    ]
  },
  {
    title: "Bread",
    items: [
      ["Tawa Roti", null, 8],
      ["Tandoori Roti", null, 10],
      ["Tandoori Butter Roti", null, 12],
      ["Lachha Paratha", null, 30],
      ["Missi Roti", null, 40],
      ["Butter Naan", null, 40],
      ["Garlic Naan", null, 50]
    ]
  },
  {
    title: "Noodles",
    items: [
      ["Hakka Noodles", null, 120],
      ["Garlic Noodles", null, 140],
      ["Veg Noodles", null, 120],
      ["Egg Noodles", null, 140],
      ["Friends Special Noodles", null, 170],
      ["Chicken Noodles", null, 180]
    ]
  },
  {
    title: "Rice",
    items: [
      ["Steam Rice", null, 120],
      ["Jeera Rice", null, 140],
      ["Egg Fried Rice", null, 180],
      ["Chicken Biryani", null, 200],
      ["Fried Rice", null, 180]
    ]
  },
  {
    title: "Thali · No Refill",
    items: [
      ["Veg Thali", null, 70],
      ["Paneer Thali", null, 120],
      ["Special Paneer Thali", null, 150],
      ["Egg Thali", null, 100],
      ["Fish Thali", null, 150],
      ["Chicken Thali", null, 160],
      ["Special Chicken Thali", null, 180],
      ["Mutton Thali", null, 250]
    ]
  },
  {
    title: "Fish",
    items: [
      ["Fish Crunchy", 250, 500],
      ["Fish Fry (Desi Shigara)", 250, 500],
      ["Fish Curry", 250, 500],
      ["Fish Curry (5 pc)", 300, 600],
      ["Malai Fish", 300, 600],
      ["Fish Tikka", 300, 600],
      ["Pomfret Fish (1 pc)", null, 250]
    ]
  },
  {
    title: "Roll",
    items: [
      ["Veg Roll", null, 80],
      ["Egg Roll", null, 100],
      ["Cheese Roll", null, 100]
    ]
  },
  {
    title: "Salad",
    items: [
      ["Onion Salad", null, 70],
      ["Green Salad", null, 100],
      ["Cream Salad", null, 140],
      ["Fruit Salad", null, 180]
    ]
  },
  {
    title: "Beverages, Sweet Dish & Curd",
    items: [
      ["Tea", null, 20],
      ["Coffee", null, 30],
      ["Fresh Lemon", null, 30],
      ["Namkeen Lassi", null, 50],
      ["Cold Drinks", null, "MRP"],
      ["Water Bottle", null, "MRP"],
      ["Hot Gulab Jamun", null, 100],
      ["Mix Raita", null, 100],
      ["Boondi Raita", null, 100]
    ]
  }
];

const priceMarkup = (half, full) => {
  const halfPrice = half !== null
    ? `<span><small>Half</small> ₹${half}</span>`
    : "";
  const fullLabel = half !== null ? "Full" : "Price";
  const fullPrice = `<span><small>${fullLabel}</small> ${full === "MRP" ? "MRP" : `₹${full}`}</span>`;
  return `<span class="portion-price">${halfPrice}${fullPrice}</span>`;
};

const completeMenu = document.querySelector("#complete-menu");

completeMenu.innerHTML = menuSections.map((section) => `
  <article class="menu-card">
    <header><h3>${section.title}</h3></header>
    <div class="menu-body">
      <ul>
        ${section.items.map(([name, half, full]) => `
          <li><span>${name}</span>${priceMarkup(half, full)}</li>
        `).join("")}
      </ul>
    </div>
  </article>
`).join("");
