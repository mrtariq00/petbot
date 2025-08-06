const products = [
  {
    name: "Temperature Display Bottle",
    price: 1599,
    img: "/petbot/assets/img/Bottles/b1.png",
    description:
      "Temperature Water Bottle, LED Temperature Display, Hot Cold Vacuum Flasks, stainless Steel Thermos, LED 500ML Smart Thermos",
    subdescription:
      "Smart LED bottle shows temperature, keeps drinks hot or cold throughout the day...",
    cat: "Bottle",
    color: "blue",
    qty: 20,
  },
  {
    name: "COFFEE Glass",
    price: 799,
    img: "/petbot/assets/img/Glass/g1.png",
    description:
      "JUICE and COFFEE Glass with Color Straw | 1PC AIR TIGHT STRAW JUICE and COFFEE JAR | 500ML | HIGH QUALITY BOROSILICATE MADE Glass | light in weigh | can use in everyday drink",
    subdescription:
      "Durable borosilicate coffee/juice glass with lid and straw, perfect for everyday...",
    cat: "Glass",
    color: "transparent",
    qty: 25,
  },
  {
    name: "Spice Jars With Rack",
    price: 2599,
    img: "/petbot/assets/img/Jars/j3.png",
    description: "Spice Jars Masala Rack - Masala Box Set 6 Pieces With Spoons",
    subdescription: "Organize spices in style with this 6-piece masala jar rack and spoons included...",
    cat: "Jars",
    color: "transparent",
    qty: 25,
  },
  {
    name: "Portable Glass",
    price: 2599,
    img: "/petbot/assets/img/Glass/g3.png",
    description:
      "Portable Folding Collapsible Magic Glass- Magic ✨ Glass for Water - Portable Glass Collapsible",
    subdescription:
      "Foldable and portable glass cup, great for outdoor use, travel, or emergency use...",
    cat: "Glass",
    color: "Red and Blue",
    qty: 56,
  },
  {
    name: "Fast Forward Shaker",
    price: 1599,
    img: "/petbot/assets/img/Bottles/b2.png",
    description:
      "Maximize Your Workouts with Our 24-Ounce Protein Shaker Bottle – Ideal for Pre & Post-Workout Nutrition, Featuring Twist and Lock Protein Box Storage!",
    subdescription:
      "24oz protein shaker bottle with storage box, ideal for workouts and supplements...",
    cat: "Bottle",
    color: "Blue",
    qty: 120,
  },
  {
    name: "Multipurpose storage jar",
    price: 2599,
    img: "/petbot/assets/img/Jars/j4.png",
    description: "Multipurpose storage jar 750 ml",
    subdescription: "750ml airtight jar for storing spices, snacks or groceries, ideal for any kitchen...",
    cat: "Jars",
    color: "transparent",
    qty: 25,
  },
  {
    name: "Hello Master",
    price: 1599,
    img: "/petbot/assets/img/Bottles/b3.png",
    description:
      "Hello Master Borosilicate Water Bottle 480ML, Leakproof, Transparent Water Bottle for Home, Office, Gym, Picnic and Travelling, Stylish Bottle Stylish Glass Bottle (Random Color)s",
    subdescription:
      "Leakproof stylish Hello Master bottle made of glass, ideal for gym and office use...",
    cat: "Bottle",
    color: "Blue, White and Pink",
    qty: 300,
  },
  {
    name: "Multi Purpose Jar",
    price: 2599,
    img: "/petbot/assets/img/Jars/j2.png",
    description:
      "Multi Purpose 3 In 1 Jar Moisture Proof Space Saving 3 portion jar With 3 Portion Compartment Air Tight Storage Capacity Food Storage Jar, Cereal Dispenser, Pulses Container 3 Partitions Dry Fruit Storage Spice Jar - Large",
    subdescription:
      "Air-tight 3-in-1 storage jar, perfect for cereals, spices, and dry fruits at once...",
    cat: "Jars",
    color: "transparent",
    qty: 25,
  },
  {
    name: "Glass Cup with Lid Premium",
    price: 2599,
    img: "/petbot/assets/img/Glass/g4.png",
    description:
      "Glass Cup with Lid Premium Diamond-Patterned Glass Clear Glass Straw Tumbler Travel-Safe Glass Straw Cup with Leak Resistance",
    subdescription:
      "Premium diamond-patterned glass tumbler with lid and straw, safe for travel use...",
    cat: "Glass",
    color: "Blue and Pink transparent",
    qty: 25,
  },
  {
    name: "Bottle Sport",
    price: 1599,
    img: "/petbot/assets/img/Bottles/b4.png",
    description:
      "1000ml Stainless Steel Thermos Water Bottle | Hot & Cold Vacuum Flask for Kids, Boys & Girls | Leak-Proof Sport & Gym Bottle | 1 Liter",
    subdescription:
      "Leakproof stainless steel 1000ml sport bottle, great for gym, kids, or daily use...",
    cat: "Bottle",
    color: "Black ",
    qty: 25,
  },
  {
    name: "Kitchen Jar",
    price: 1599,
    img: "/petbot/assets/img/Jars/j1.png",
    description:
      "Grocery Jar Air Tight Jars for Kitchen Jar STORAGE SNACK JAR Spice JARS SET Masala / Sugar / Biscuits / Daal / Spice JAR FOOD GRADE PURE PLASTIC Kitchen Accessories",
    subdescription:
      "Versatile kitchen jar set made with food-grade plastic, ideal for all dry storage...",
    cat: "Jars",
    color: "transparent",
    qty: 25,
  },
  {
    name: "Glass Tumbler with Straw",
    price: 2599,
    img: "/petbot/assets/img/Glass/g2.png",
    description:
      "Glass Tumbler with Straw, Lid & Leather Sleeve, Masson Jars Slub Glass Reusable Eco Friendly Glass Coffee Mug Tea Mug Tumbler",
    subdescription:
      "Eco-friendly mason jar tumbler with lid, leather grip and straw, for hot or cold...",
    cat: "Glass",
    color: "Yellow and Black transparent",
    qty: 25,
  },
  {
    name: "Nice",
    price: 1599,
    img: "/petbot/assets/img/Bottles/b5.png",
    description:
      "Water Bottle for Travelling, Sports, School, Gym, Office, Hiking, Camping, Outdoor Adventures, Cycling, Running, Fitness, Yoga, Kids, College, Work, and Everyday Use.",
    subdescription:
      "BPA-free, time-marked sport bottle set of 3, ideal for daily gym or travel usage...",
    cat: "Bottle",
    color: "Pink",
    qty: 90,
  },
  {
    name: "Jars for Kitchen Organization",
    price: 2599,
    img: "/petbot/assets/img/Jars/j5-3.png",
    description:
      "500ml and 1150ml Kitchen Canister Set, Candy, Snack, Spice, Ghee, and Masala Storage Jars for Kitchen Organization",
    subdescription:
      "Durable canister jar set with 500ml & 1150ml jars for candy, ghee, masala & more...",
    cat: "Jars",
    color: "transparent",
    qty: 25,
  },
  {
    name: "Crystal Glass",
    price: 2599,
    img: "/petbot/assets/img/Glass/g5-3.png",
    description:
      "Crystal Glass Set Luxurious 3-Piece – Premium Quality | Elegant Dining & Gifting",
    subdescription:
      "Elegant 3-piece crystal glass set, luxurious look for gifting or dining purposes...",
    cat: "Glass",
    color: "transparent Crystal",
    qty: 95,
  },
  {
    name: "H.H Bottle",
    price: 1599,
    img: "/petbot/assets/img/Bottles/b6.png",
    description:
      "Pack of 3 Water Bottles | BPA-Free, Leak-Proof Sports Bottles with Time Marker & Straw – Ideal for Gym, Travel, School, Office, and Home Use",
    subdescription:
      "Leakproof pack of 3 sports water bottles with straw, BPA-free, ideal for workouts...",
    cat: "Bottle",
    color: "Pink and Blue Shades",
    qty: 34,
  },
  {
    name: "Glass With Straw",
    price: 2599,
    img: "/petbot/assets/img/Glass/g6.png",
    description:
      "Glass - Straw Glass (Pack of 2) - Juice Glass with Straw - Kids Straw Glass - Kids Juice Glass - Pipe Glass without Cover - Anna Elsa Glass - Sofia Glass - Ben 10 Glass sipper glass for kids",
    subdescription:
      "Fun straw glass pack for kids featuring cartoon characters like Elsa and Ben 10...",
    cat: "Glass",
    color: "blue, pink and green",
    qty: 90,
  },
  {
    name: "Fruit Jars with Straw",
    price: 2599,
    img: "/petbot/assets/img/Jars/j6.png",
    description: "Fruit Design Mason Jar |Pack Of 1| And Straw | 450 ML",
    subdescription: "Fruit mason jar with lid and straw, cute and functional design, holds 450ml drink...",
    cat: "Jars",
    color: "transparent",
    qty: 25,
  },
];


let productlist = document.getElementById("products");

function All() {
  productlist.innerHTML = ``;
  products.map((p) => {
    productlist.innerHTML += `
    <a href="/petbot/pages/product.html?name=${p.name}&img=${p.img}&color=${p.color}&qty=${p.qty}&description=${p.description}&price=${p.price}" class="text-decoration-none">
       <div class="card mb-5" style="width: 350px;">
  <img src="${p.img}" class="card-img-top object-fit-cover" width="400" height="auto" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text text-muted">${p.subdescription}</p>
    <p class="card-text fw-semibold fs-6 text-success">Price: Rs. ${p.price}</p>
  </div>
</div>
</a>`;
  });
}

All();

function Bottles() {
  productlist.innerHTML = ``;
    products.filter((p) => p.cat === "Bottle").map((p) => {
        productlist.innerHTML += `
             <a href="/petbot/pages/product.html?name=${p.name}&img=${p.img}&color=${p.color}&qty=${p.qty}&description=${p.description}&price=${p.price}" class="text-decoration-none">
       <div class="card mb-5" style="width: 350px;">
  <img src="${p.img}" class="card-img-top object-fit-cover" width="400" height="auto" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text text-muted">${p.subdescription}</p>
    <p class="card-text fw-semibold fs-6 text-success">Price: Rs. ${p.price}</p>
  </div>
</div>
</a>`;
    });
}
function Jars() {
  productlist.innerHTML = ``;
    products.filter((p) => p.cat === "Jars").map((p) => {
        productlist.innerHTML += `
             <a href="/petbot/pages/product.html?name=${p.name}&img=${p.img}&color=${p.color}&qty=${p.qty}&description=${p.description}&price=${p.price}" class="text-decoration-none">
       <div class="card mb-5" style="width: 350px;">
  <img src="${p.img}" class="card-img-top object-fit-cover" width="400" height="auto" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text text-muted">${p.subdescription}</p>
    <p class="card-text fw-semibold fs-6 text-success">Price: Rs. ${p.price}</p>
  </div>
</div>
</a>`;
    });
}
function Glass() {
  productlist.innerHTML = ``;
    products.filter((p) => p.cat === "Glass").map((p) => {
        productlist.innerHTML += `
            <a href="/petbot/pages/product.html?name=${p.name}&img=${p.img}&color=${p.color}&qty=${p.qty}&description=${p.description}&price=${p.price}" class="text-decoration-none">
       <div class="card mb-5" style="width: 350px;">
  <img src="${p.img}" class="card-img-top object-fit-cover" width="400" height="auto" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text text-muted">${p.subdescription}</p>
    <p class="card-text fw-semibold fs-6 text-success">Price: Rs. ${p.price}</p>
  </div>
</div>
</a>`;
    });
}




