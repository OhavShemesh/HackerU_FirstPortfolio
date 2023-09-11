window.addEventListener("load", () => {
  let addbtn = document.querySelector(".add");
  let sendbtn = document.querySelector(".send");
  let shadow = document.querySelector(".shadow");
  let addbox = document.querySelector(".addbox");
  let itemname = document.querySelector(".itemname");
  let amount = document.querySelector(".amount");
  let select = document.querySelector(".select");
  let itemsbox = document.querySelector(".items");
  let removebtns = document.querySelectorAll(".remove");
  let items = document.querySelectorAll(".item");
  let removeallbtn = document.querySelector(".removeall h1");

  const displayadditem = () => {
    addbtn.addEventListener("click", () => {
      shadow.style.display = "block";
      addbox.style.display = "flex";
      saveall();
    });
  };
  const additem = () => {
    sendbtn.addEventListener("click", (e) => {
      e.preventDefault();
      let existingErrors = document.querySelectorAll(".second p");
      for (let error of existingErrors) {
        error.remove();
      }
      if (itemname.value == "" || amount.value == "") {
        let second = document.querySelector(".second");
        let error = document.createElement("p");
        error.innerHTML = "Item name or item amount is not placed";
        second.appendChild(error);
        sendbtn.style.marginTop = "20px";
      } else if (itemname.value && isNaN(amount.value)) {
        let second = document.querySelector(".second");
        let amounterror = document.createElement("p");
        amounterror.innerHTML = "Amount must be a number";
        second.appendChild(amounterror);
      } else {
        let newitembox = document.createElement("div");
        newitembox.className = "item";
        let iteminlist = document.createElement("h1");
        iteminlist.className = "iteminlist";
        iteminlist.innerText = itemname.value;
        let amountinlist = document.createElement("h2");
        amountinlist.className = "amountinlist";
        amountinlist.innerText = amount.value + " " + select.value;
        let removebtn = document.createElement("button");
        removebtn.className = "remove";
        removebtn.innerHTML = "&#x1F5D1;";
        itemsbox.appendChild(newitembox);
        newitembox.appendChild(iteminlist);
        newitembox.appendChild(amountinlist);
        newitembox.appendChild(removebtn);
        shadow.style.display = "none";
        addbox.style.display = "none";
        removebtns = document.querySelectorAll(".remove");
        items = document.querySelectorAll(".item");
        removeitem();
        saveall();
        amount.value = "";
        itemname.value = "";
      }
      saveall();
    });
  };
  const closeadditem = () => {
    let closebtn = document.querySelector(".close");
    closebtn.addEventListener("click", (e) => {
      e.preventDefault();
      shadow.style.display = "none";
      addbox.style.display = "none";
    });
  };
  const removeitem = () => {
    for (let removebtn of removebtns) {
      removebtn.addEventListener("click", (e) => {
        e.preventDefault();
        itemToRemove = removebtn.closest(".item");
        itemToRemove.remove();

        let itemName = itemToRemove.querySelector(".iteminlist").innerText;
        let itemAmount = itemToRemove.querySelector(".amountinlist").innerText;
        let savedItems = JSON.parse(localStorage.getItem("items") || "[]");

        let indexToRemove = savedItems.findIndex(
          (item) => item.itemName === itemName && item.itemAmount === itemAmount
        );

        if (indexToRemove !== -1) {
          savedItems.splice(indexToRemove, 1);
          localStorage.setItem("items", JSON.stringify(savedItems));
        }

        removebtns = document.querySelectorAll(".remove");
      });
    }
  };
  const removeall = () => {
    removeallbtn.addEventListener("click", () => {
      items = document.querySelectorAll(".item");
      for (let item of items) {
        item.remove();
      }
      localStorage.removeItem("items");
    });
  };
  const saveall = () => {
    localStorage.clear();
    let itemsList = [];
    for (let item of items) {
      let itemName = item.querySelector(".iteminlist").innerText;
      let itemAmount = item.querySelector(".amountinlist").innerText;
      itemsList = [...itemsList, { itemName, itemAmount }];
    }
    localStorage.setItem("items", JSON.stringify(itemsList));
  };

  const getitems = () => {
    let savedItems = JSON.parse(localStorage.getItem("items") || "[]");

    for (let savedItem of savedItems) {
      const newitembox = document.createElement("div");
      newitembox.className = "item";
      const iteminlist = document.createElement("h1");
      iteminlist.className = "iteminlist";
      iteminlist.innerText = savedItem.itemName;
      const amountinlist = document.createElement("h2");
      amountinlist.className = "amountinlist";
      amountinlist.innerText = savedItem.itemAmount;
      const removebtn = document.createElement("button");
      removebtn.className = "remove";
      removebtn.innerHTML = "&#x1F5D1;";
      newitembox.appendChild(iteminlist);
      newitembox.appendChild(amountinlist);
      newitembox.appendChild(removebtn);
      itemsbox.appendChild(newitembox);
      removebtns = document.querySelectorAll(".remove");
      items = document.querySelectorAll(".item");
      removeitem();
    }
    initializeRemoveButtons();
  };
  const initializeRemoveButtons = () => {
    removebtns = document.querySelectorAll(".remove");
    removeitem();
  };

  getitems();
  displayadditem();
  removeitem();
  closeadditem();
  additem();
  removeall();
  initializeRemoveButtons();
});
