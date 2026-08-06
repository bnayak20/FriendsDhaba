const menuSections = [
  {
    title: "Breakfast Special",
    items: [
      ["Aloo Paratha", null, 30],
      ["Aloo Pyaaz Paratha", null, 30],
      ["Pyaaz Paratha", null, 40],
       ["Mix Paratha", null, 40],
      ["Gobi Paratha", null, 50],
      ["Muli Paratha", null, 50],
      ["Paneer Paratha", null, 60],
      ["Egg Paratha", null, 60]
    ]
  },
  {
    title: "Punjabi Dal Ka Swad",
    items: [
      ["Dal Makhani", 120, 200],
      ["Dal Fry", 100, 170],
      ["Yellow Dal", 110, 190],
      ["Dal Mughlai (with Egg)", 120, 200],
    ]
  },
  {
    title: "Breakfast Special ",
    items: [
      ["Chole Bhature", null, 80],
      ["Puri Chana", null, 70],
      ["Amritsari Naan Chole", null, 100]
    ]
  },
  {
    title: "Punjabi Special Paneer Ka Zaika",
    items: [
      ["Matar Paneer", 140, 240],
      ["Shahi Paneer", 150, 280],
      ["Kadhai Paneer", 150, 280],
      ["Paneer Do Pyaza", 150, 280],      
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
      ["Mushroom Do Pyaza", 140, 240],
      ["Mix Veg", 120, 200],
      ["Aloo Gobi", 120, 190],
      ["Gobi Masala", 120, 200],
      ["Aloo Matar", 110, 180],
      ["Aloo Jeera", 110, 180],      
      ["Bhartha Began Ka", 110, 190],
      ["Rajma", 110, 190],
      ["White Chana", 110, 170],      
      ["Kadi Pakora", 90, 180],
      ["Chaap Gravy", 140, 260],      
      ["Methi Malai Matar", 140, 260],
      ["Sev Bhaji", 140, 220]
    ]
  },
  {
    title: "Punjabi Veg & Chinese Starters",
    items: [
      ["Cheese Chilli", 150, 280],
      ["Chilly Paneer", 150, 280],
      ["Chilly Mushroom", 140, 240],
      ["Cheese Finger", 170, 270],      
      ["Crunchy Corn", null, 140],
      ["Honey Chilli Potato", null, 180],
      ["Chilli Fried Cauliflower", null, 200],
      ["Manchurian Dry / Gravy", null, 200],
      ["Mushroom Duplex", null, 250]
    ]
  },
  {
    title: "Non-Veg Starters",
    items: [
      ["Chicken Pakora", 250, 400],
      ["Chicken Crunchy", 250, 400],      
      ["Chicken Tikka (with Bones)", 250, 400],
      ["Chilli Chicken (Boneless)", 300, 500],
      ["Chicken Lollipop", 250, 400],
      ["Chicken Manchurian ", null, 300]
    ]
  },
  {
    title: "Tandoor & Seekh",
    items: [
      ["Masala Chaap", 120, 180],
      ["Malai Chaap", 140, 200],
      ["Mushroom Tikka", null, 250],
      ["Paneer Malai Tikka", null, 280],
      ["Paneer Tikka", null, 250],
      ["Tandoori Chicken", 200, 400],      
      ["Afghani Chicken", 240, 450],
      ["Chicken Tikka", 150, 250],
      ["Chicken Malai Tikka", 200, 320]
      ["Fish Tikka", null, 350]      
    ]
  },
  {
    title: "Punjabi Chicken Zaika",
    items: [
      ["Mutton Masala (6 pc)/(12 pc)", 500, 1000],
      ["Mutton Curry (3 pc) /(6 pc)", 240, 400],
      ["Dahi Mutton (3 pc) /(6 pc)", 240, 400],
      ["Tawa Chicken", 250, 400],
      ["Lemon Chicken", 280, 450],
      ["Masala Chicken", 250, 400],   
      ["Rara Chicken", 280, 450],          
      ["Kadhai Chicken", 250, 400],
      ["Palak Chicken", 250, 450],
      ["Special Butter Chicken", 250, 400],
      ["Special Butter Chicken(Boneless)", 300, 500],
      ["Kadhai Chicken (Boneless)", 350, 500],
      ["Egg Curry", 100, 180]
    ]
  },
  {
    title: "Bread",
    items: [
      ["Tawa Roti", 8, 10],
      ["Tandoori Roti", 10, 12],
      ["Lachha Paratha", null, 30],
      ["Missi Roti", null, 40],
      ["Butter Naan", null, 40],
      ["Garlic Naan", null, 50]
    ]
  },
  {
    title: "Noodles",
    items: [
      ["Hakka Noodles", null, 140],
      ["Garlic Noodles", null, 180],
      ["Veg Noodles", null, 120],
      ["Egg Noodles", null, 190],
      ["Friends Special Noodles", null, 180],
      ["Chicken Noodles", null, 200]
    ]
  },
  {
    title: "Rice",
    items: [
      ["Steam Rice", null, 120],
      ["Jeera Rice", null, 140],
      ["Egg Fried Rice", null, 200],
      ["Chicken Biryani", null, 240],
      ["Fried Rice", null, 180]
    ]
  },
  {
    title: "Thali · No Refill",
    items: [
      ["Veg Thali", null, 70],
      ["Paneer Thali", null, 100],
      ["Special Paneer Thali", null, 120],
      ["Egg Thali", null, 100],
      ["Fish Thali", null, 150],
      ["Chicken Thali", null, 130],
      ["Special Chicken Thali", null, 160],
      ["Mutton Thali", null, 250]
    ]
  },
  {
    title: "Fish",
    items: [
      ["Fish Crunchy", 250, 500],
      ["Fish Fry (Desi Shigara)", 250, 500],
      ["Sui Fish", 300, 600],
      ["Malli Fish", 300, 600],
      ["Sole Fish", 300, 600],
      ["Pomfret Fish (1 pc)", null, 250]
    ]
  },
  {
    title: "Roll",
    items: [
      ["Veg Roll", null, 80],
      ["Egg Roll", null, 100],
      ["Cheese Roll", null, 100]
      ["Chicken Roll", null, 120]      
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
      ["Hot Gulab Jamun", null, 40],
      ["Mix Raita", null, 80],
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
