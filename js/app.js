// All trees data fetch
let allTressGlobal = []; //Global action

const allTressData = () => {
  const url = `https://openapi.programming-hero.com/api/plants`;

  fetch(url)
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      allTressGlobal = data.plants;
      showAllTress(allTressGlobal);
    });
};

allTressData();

// show all trees functionality start
const cardSection = document.getElementById("card-section");

const showAllTress = (allTress) => {
  cardSection.innerHTML = "";

  allTress.forEach((tree) => {
    const tressDiv = document.createElement("div");

    tressDiv.innerHTML = `
      <div class="card bg-base-100 w-[290px] shadow-sm p-4">
        <img src="${tree.image}" alt="Tree" class="h-[200px] w-full object-cover rounded-xl" />
        <div class="card-body p-0 pt-3">
          <h5 class="card-title cursor-pointer tree-name" onclick="loadingModals(${tree.id})">${tree.name}</h5>
          <p class="text-[0.8rem]">${tree.description}</p>
          <div class="flex justify-between mt-2">
            <div class="badge badge-soft bg-[#DCFCE7] text-green-700 border-0 py-3 px-4">${tree.category}</div>
            <div class="price"><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${tree.price}</div>
          </div>
          
          <div class="card-actions mt-2">
            <button class="btn add-to-cart bg-[#15803D] w-full rounded-full text-white border-0">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    `;

    const cartBtn = tressDiv.querySelector(".add-to-cart");
    cartBtn.addEventListener("click", () => {
      addToCart(tree);
    });

    cardSection.appendChild(tressDiv);
  });
};
// show all trees functionality end

// show modal functionality start
const loadingModals = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  console.log(url);

  const res = await fetch(url);
  const details = await res.json();
  showModal(details.plants);
};

const showModal = (plant) => {
  console.log(plant);
  const imageBox = document.getElementById("image-section");

  imageBox.innerHTML = `
  <div class="p-6 rounded-lg">
    <div class="image-sec">
      <img src="${plant.image}" class="w-full h-[200px] object-cover rounded-lg">
    </div>

    <div class="description mt-2">
      <p class="pb-2"><span class="font-semibold">Category: </span>${plant.category}</p>
      <p class="pb-2"><span class="font-semibold">Price: </span>${plant.price}</p>
      <p class="pb-2"><span class="font-semibold">Description: </span>${plant.description}</p>
    </div>
  </div>
  `;

  document.getElementById("my_modal_5").showModal();
};
// show modal functionality end

// show categories Data Fetch start
const categoriesData = () => {
  const url = `https://openapi.programming-hero.com/api/categories`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      showAllCategoriesBtn(json.categories);
    });
};

categoriesData();

function showAllCategoriesBtn(allButtons) {
  const categoriesBtnSection = document.getElementById("categories-button-sec");
  categoriesBtnSection.innerHTML = "";

  /* active class system start */
  let activeBtn = null;

  // common btn class style
  const baseClass =
    "cursor-pointer m-1 text-left py-2 px-3 transition duration-300 ease-in-out rounded-lg";
  const activeClass = "bg-[#15803D] text-white";
  const hoverClass = "hover:bg-[#15803D] hover:text-white";
  /* active class system end */

  /* showing all tress button functionality start */
  const allBtn = document.createElement("button");
  allBtn.innerText = "All Trees";
  allBtn.className = `${baseClass} ${hoverClass} text-[0.9rem]`;

  allBtn.addEventListener("click", () => {
    showAllTress(allTressGlobal);

    if (activeBtn) {
      activeBtn.className = `${baseClass} ${hoverClass}`;
      allBtn.className = `${baseClass} ${activeClass}`;
    }

    activeBtn = allBtn;
  });

  categoriesBtnSection.appendChild(allBtn);
  /* showing all tress button functionality end */

  allButtons.forEach((btn) => {
    const newButtonEntry = document.createElement("button");
    newButtonEntry.innerText = btn.category_name;
    newButtonEntry.className =
      "cursor-pointer m-1 text-left py-2 px-3 transition duration-300 ease-in-out rounded-lg hover:bg-[#15803D] hover:text-white";

    /* category tress filtering functionality start */
    newButtonEntry.addEventListener("click", () => {
      const filteredTrees = allTressGlobal.filter((tree) => {
        return tree.category === btn.category_name;
      });

      showAllTress(filteredTrees);

      if (activeBtn) {
        activeBtn.className = `${baseClass} ${hoverClass}`;
        newButtonEntry.className = `${baseClass} ${activeClass}`;
      }

      activeBtn = newButtonEntry;
    });
    /* category tress filtering functionality end */

    categoriesBtnSection.appendChild(newButtonEntry);
  });
}
// show categories buttons end

// total section functionality start
const cartSection = document.getElementById("add-to-cart-section");
const totalElement = document.getElementById("total");

let total = 0;

function addToCart(tree) {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "mb-2",
    "bg-[#F0FDF4]",
    "px-3",
    "py-2",
    "rounded-lg"
  );

  itemDiv.innerHTML = `
    <div>
      <p class="text-[0.9rem]">${tree.category}</p>
      <p class="text-[0.8rem]">
        <i class="fa-solid fa-bangladeshi-taka-sign"></i> ${tree.price}
      </p>
    </div>

    <button class="remove-item text-gray-400 cursor-pointer">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  const removeBtn = itemDiv.querySelector(".remove-item");
  removeBtn.addEventListener("click", () => {
    cartSection.removeChild(itemDiv);
    total -= tree.price;
    updateTotal();
  });

  cartSection.appendChild(itemDiv);

  // Update total
  total += tree.price;
  updateTotal();
}

function updateTotal() {
  totalElement.innerText = total;
}
// total section functionality end
