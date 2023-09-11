let hamburger = document.querySelector(".hamburger");
let editor = document.querySelector(".editor");
let elementSelect = document.querySelector(".elm");
let widthInput = document.querySelector(".width");
let heightInput = document.querySelector(".height");
let bgColorInput = document.querySelector(".bgc");
let textInput = document.querySelector(".text");
let textColorInput = document.querySelector(".textcolor");
let setChangesButton = document.querySelector(".Set");
let widthlabel = document.querySelector(".widthlabel");
let heightlabel = document.querySelector(".heightlabel");
let bgclabel = document.querySelector(".bgclabel");
let textlabel = document.querySelector(".textlabel");
let textcolorlabel = document.querySelector(".textcolorlabel");
let textalignInput = document.querySelector(".textalignInput");
let textalignlabel = document.querySelector(".textalignlabel");
let textsizeInput = document.querySelector(".textsizeInput");
let textsizelabel = document.querySelector(".textsizelabel");
let file = document.querySelector(".file");
let filelabel = document.querySelector(".filelabel");
let placeimagelabel = document.querySelector(".placeimagelabel");
let placeimageinput = document.querySelector(".placeimageinput");
let pages = document.querySelectorAll("#all");
let allpages = document.querySelector(".allpages");
let newpagebtn = document.querySelector(".newpagebtn");
let index = 0;
let elm = document.createElement(elementSelect.value);

window.addEventListener("load", () => {
  const openeditor = () => {
    hamburger.addEventListener("click", () => {
      if (editor.style.transform == "translateX(0px)") {
        editor.style.transform = "translateX(20vw)";
        hamburger.style.transform = "translateX(20vw)";
      } else {
        editor.style.transform = "translateX(0px)";
        hamburger.style.transform = "translateX(0px)";
      }
    });
  };
  const adjusteditor = () => {
    elementSelect.addEventListener("change", () => {
      if (elementSelect.value == "div") {
        widthlabel.style.display = "block";
        widthInput.style.display = "block";
        heightlabel.style.display = "block";
        heightInput.style.display = "block";
        bgclabel.style.display = "block";
        bgColorInput.style.display = "block";
        textColorInput.style.display = "block";
        textInput.style.display = "block";
        textcolorlabel.style.display = "block";
        textlabel.style.display = "block";
        file.style.display = "none";
        filelabel.style.display = "none";
        textalignInput.style.display = "block";
        textalignlabel.style.display = "block";
        textsizeInput.style.display = "block";
        textsizelabel.style.display = "block";
        placeimageinput.style.display = "none";
        placeimagelabel.style.display = "none";
      }
      if (elementSelect.value == "h1") {
        widthlabel.style.display = "none";
        widthInput.style.display = "none";
        heightlabel.style.display = "none";
        heightInput.style.display = "none";
        bgclabel.style.display = "block";
        bgColorInput.style.display = "block";
        textColorInput.style.display = "block";
        textInput.style.display = "block";
        textcolorlabel.style.display = "block";
        textlabel.style.display = "block";
        file.style.display = "none";
        filelabel.style.display = "none";
        textalignInput.style.display = "block";
        textalignlabel.style.display = "block";
        textsizeInput.style.display = "block";
        textsizelabel.style.display = "block";
        placeimageinput.style.display = "none";
        placeimagelabel.style.display = "none";
      }
      if (elementSelect.value == "h2") {
        widthlabel.style.display = "none";
        widthInput.style.display = "none";
        heightlabel.style.display = "none";
        heightInput.style.display = "none";
        bgclabel.style.display = "block";
        bgColorInput.style.display = "block";
        textColorInput.style.display = "block";
        textInput.style.display = "block";
        textcolorlabel.style.display = "block";
        textlabel.style.display = "block";
        file.style.display = "none";
        filelabel.style.display = "none";
        textalignInput.style.display = "block";
        textalignlabel.style.display = "block";
        textsizeInput.style.display = "block";
        textsizelabel.style.display = "block";
        placeimageinput.style.display = "none";
        placeimagelabel.style.display = "none";
      }
      if (elementSelect.value == "p") {
        widthlabel.style.display = "none";
        widthInput.style.display = "none";
        heightlabel.style.display = "none";
        heightInput.style.display = "none";
        bgclabel.style.display = "block";
        bgColorInput.style.display = "block";
        textColorInput.style.display = "block";
        textInput.style.display = "block";
        textcolorlabel.style.display = "block";
        textlabel.style.display = "block";
        file.style.display = "none";
        filelabel.style.display = "none";
        textalignInput.style.display = "block";
        textalignlabel.style.display = "block";
        textsizeInput.style.display = "block";
        textsizelabel.style.display = "block";
        placeimageinput.style.display = "none";
        placeimagelabel.style.display = "none";
      }
      if (elementSelect.value == "img") {
        widthlabel.style.display = "block";
        widthInput.style.display = "block";
        heightlabel.style.display = "block";
        heightInput.style.display = "block";
        bgclabel.style.display = "none";
        bgColorInput.style.display = "none";
        textColorInput.style.display = "none";
        textInput.style.display = "none";
        textcolorlabel.style.display = "none";
        textlabel.style.display = "none";
        file.style.display = "block";
        filelabel.style.display = "block";
        textalignInput.style.display = "none";
        textalignlabel.style.display = "none";
        textsizeInput.style.display = "none";
        textsizelabel.style.display = "none";
        placeimageinput.style.display = "block";
        placeimagelabel.style.display = "block";
      }
    });
  };
  const insertelements = () => {
    setChangesButton.addEventListener("click", () => {
      if (
        elementSelect.value == "div" ||
        elementSelect.value == "h1" ||
        elementSelect.value == "h2" ||
        elementSelect.value == "p"
      ) {
        pages[index].appendChild(elm);
        elm.style.width = widthInput.value + "px";
        elm.style.height = heightInput.value + "px";
        elm.style.backgroundColor = bgColorInput.value;
        elm.innerHTML = textInput.value;
        elm.style.color = textColorInput.value;
        elm.style.fontSize = textsizeInput.value + "px";
        elm.style.textAlign = textalignInput.value;
        console.log("widthInput", widthInput.value + "px");
        console.log("heightInput", heightInput.value + "px");
        console.log("bgColorInput", bgColorInput.value);
        console.log("textInput", textInput.value);
        console.log("textColorInput", textColorInput.value);
      }
      if (elementSelect.value == "img") {
        let selectedfile = file.files[0];
        let elm = document.createElement(elementSelect.value);
        let box = document.createElement("div");
        pages[index].appendChild(box);
        box.style.width = "100vw";
        box.style.height = "100vh";
        box.appendChild(elm);
        elm.src = URL.createObjectURL(selectedfile);
        elm.alt = "selected Image";
        elm.style.width = widthInput.value + "px";
        elm.style.height = heightInput.value + "px";
        if (placeimageinput.value == "verti") {
          box.style.display = "flex";
          box.style.alignItems = "center";
        }
        if (placeimageinput.value == "hori") {
          box.style.display = "flex";
          box.style.justifyContent = "center";
        }
        if (placeimageinput.value == "cent") {
          box.style.display = "flex";
          box.style.justifyContent = "center";
          box.style.alignItems = "center";
        }
      }
    });
  };
  adjusteditor();
  insertelements();
  openeditor();
});
