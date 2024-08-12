// Sample JSON data
data = [
  // {
  //   "id":             769241,
  //   "name":           "Mercedes-AMG SL 63",
  //   "make":           "Mercedes",
  //   "model":          "AMG SL 63",
  //   "year":           null,
  //   "author":         "LEGO",
  //   "instructions":   "https://www.lego.com/en-us/service/buildinginstructions/76924",
  //   "purchase":       "https://www.lego.com/en-us/product/mercedes-amg-g-63-mercedes-amg-sl-63-76924",
  //   "imageFront":     "https://www.lego.com/cdn/cs/set/assets/bltbc71c879c160329c/76924.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "imageBack":      "https://www.lego.com/cdn/cs/set/assets/blt9c09a57b3e1bff50/76924_alt4.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "scale":          null,
  //   "mecabricks":     "b82xVq67v1z",
  //   "gallery":        ["https://www.lego.com/en-us/product/mercedes-amg-g-63-mercedes-amg-sl-63-76924?galleryOpen=true&galleryView=0"]
  // },
  // {
  //   "id":             769242,
  //   "name":           "Mercedes-AMG G 63",
  //   "make":           "Mercedes",
  //   "model":          "AMG G 63",
  //   "year":           null,
  //   "author":         "LEGO",
  //   "instructions":   "https://www.lego.com/en-us/service/buildinginstructions/76924",
  //   "purchase":"      ttps://www.lego.com/en-us/product/mercedes-amg-g-63-mercedes-amg-sl-63-76924",
  //   "imageFront":     "https://www.lego.com/cdn/cs/set/assets/bltbc71c879c160329c/76924.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "imageBack":      "",
  //   "scale":          27,
  //   "mecabricks":     "b82xVq67v1z",
  //   "gallery":        ["https://www.lego.com/en-us/product/mercedes-amg-g-63-mercedes-amg-sl-63-76924?galleryOpen=true&galleryView=0"]
  // },
  // {
  //   "id":             3,
  //   "name":           "Lamborghini Lambo V12 Vision GT",
  //   "make":           "Lamborghini",
  //   "model":          "Lambo V12 Vision Gran Turismo",
  //   "year":           2019,
  //   "author":         "LEGO",
  //   "instructions":   "https://www.lego.com/en-us/service/buildinginstructions/76923",
  //   "purchase":       "https://www.lego.com/en-us/product/lamborghini-lambo-v12-vision-gt-super-car-76923",
  //   "imageFront":     "https://www.lego.com/cdn/cs/set/assets/blt31e97d388b0b1d60/76923_alt2.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "imageBack":      "https://www.lego.com/cdn/cs/set/assets/blt58f2a0621fe52940/76923_alt4.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "scale":          null,
  //   "mecabricks":     "LyjWJ7Xk2Jr",
  //   "gallery":        ["https://www.lego.com/en-us/product/lamborghini-lambo-v12-vision-gt-super-car-76923?galleryOpen=true&galleryView=0"]
  // },
  // {
  //   "id":             769201,
  //   "name":           "Ford Mustang Dark Horse",
  //   "make":           "Ford",
  //   "model":          "Mustang Dark Horse",
  //   "year":           null,
  //   "author":         "LEGO",
  //   "instructions":   "https://www.lego.com/en-us/service/buildinginstructions/76920",
  //   "purchase":       "https://www.lego.com/en-us/product/ford-mustang-dark-horse-sports-car-76920",
  //   "imageFront":     "https://www.lego.com/cdn/cs/set/assets/bltbcc306ec64d4e9f0/76920.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "imageBack":      "https://www.lego.com/cdn/cs/set/assets/blt6c50e72ff233c0b6/76920_WEB_SEC04_NOBG.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "scale":          30,
  //   "mecabricks":     "eDvVgmd5aBR",
  //   "gallery":        ["https://www.lego.com/en-us/product/ford-mustang-dark-horse-sports-car-76920?galleryOpen=true&galleryView=0"]
  // },
  // {
  //   "id":             769221,
  //   "name":           "BMW M Hybrid V8",
  //   "make":           "BMW",
  //   "model":          "M Hybrid V8",
  //   "year":           null,
  //   "author":         "LEGO",
  //   "instructions":   "https://www.lego.com/en-us/service/buildinginstructions/76922",
  //   "purchase":       "https://www.lego.com/en-us/product/bmw-m4-gt3-bmw-m-hybrid-v8-race-cars-76922",
  //   "imageFront":     "https://www.lego.com/cdn/cs/set/assets/blt77f702cad64ba675/76922_WEB_SEC02_NOBG.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "imageBack":      "https://www.lego.com/cdn/cs/set/assets/blta3b1b6c875f9e0c2/76922_WEB_SEC03_NOBG.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "scale":          null,
  //   "mecabricks":     "GVjKWdnmjnz",
  //   "gallery":        ["https://www.lego.com/en-us/product/bmw-m4-gt3-bmw-m-hybrid-v8-race-cars-76922?galleryOpen=true&galleryView=0"]
  // },
  // {
  //   "id":             769222,
  //   "name":           "BMW M4 GT3",
  //   "make":           "BMW",
  //   "model":          "M4 GT3",
  //   "year":           null,
  //   "author":         "LEGO",
  //   "instructions":   "https://www.lego.com/en-us/service/buildinginstructions/76922",
  //   "purchase":       "https://www.lego.com/en-us/product/bmw-m4-gt3-bmw-m-hybrid-v8-race-cars-76922",
  //   "imageFront":     "https://www.lego.com/cdn/cs/set/assets/blt77f702cad64ba675/76922_WEB_SEC02_NOBG.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "imageBack":      "https://www.lego.com/cdn/cs/set/assets/blta3b1b6c875f9e0c2/76922_WEB_SEC03_NOBG.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "scale":          null,
  //   "mecabricks":     "GVjKWdnmjnz",
  //   "gallery":        ["https://www.lego.com/en-us/product/bmw-m4-gt3-bmw-m-hybrid-v8-race-cars-76922?galleryOpen=true&galleryView=0"]
  // },
  // {
  //   "id":             769211,
  //   "name":           "Audi S1 e-tron quattro",
  //   "make":           "Audi ",
  //   "model":          "S1 e-tron quattro",
  //   "year":           null,
  //   "author":         "LEGO",
  //   "instructions":   "https://www.lego.com/en-us/service/buildinginstructions/76921",
  //   "purchase":       "https://www.lego.com/en-us/product/audi-s1-e-tron-quattro-race-car-76921",
  //   "imageFront":     "https://www.lego.com/cdn/cs/set/assets/bltf69c704e133f3955/76921.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "imageBack":      "https://www.lego.com/cdn/cs/set/assets/blt14c1b99f8c056aed/76921_WEB_SEC04_NOBG.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "scale":          null,
  //   "mecabricks":     "WRaZ0nV5jpZ",
  //   "gallery":        ["https://www.lego.com/en-us/product/audi-s1-e-tron-quattro-race-car-76921?galleryOpen=true&galleryView=0"]
  // },
  // {
  //   "id":             769251,
  //   "name":           "Aston Martin AMR23",
  //   "make":           "Aston Martin",
  //   "model":          "AMR23",
  //   "year":           null,
  //   "author":         "LEGO",
  //   "instructions":   "https://www.lego.com/en-us/service/buildinginstructions/76925",
  //   "purchase":       "https://www.lego.com/en-us/product/aston-martin-safety-car-amr23-76925",
  //   "imageFront":     "https://www.lego.com/cdn/cs/set/assets/blt504477796607bd27/76925.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "imageBack":      "https://www.lego.com/cdn/cs/set/assets/blt2715cd56b166e033/76925_alt2.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "scale":          null,
  //   "mecabricks":     "LyjWJ1B52Jr",
  //   "gallery":        ["https://www.lego.com/en-us/product/aston-martin-safety-car-amr23-76925?galleryOpen=true&galleryView=0"]
  // },
  // {
  //   "id":             769252,
  //   "name":           "Aston Martin Vantage Safety Car",
  //   "make":           "Aston Martin",
  //   "model":          "Vantage Safety Car",
  //   "year":           null,
  //   "author":         "LEGO",
  //   "instructions":   "https://www.lego.com/en-us/service/buildinginstructions/76925",
  //   "purchase":       "https://www.lego.com/en-us/product/aston-martin-safety-car-amr23-76925",
  //   "imageFront":     "https://www.lego.com/cdn/cs/set/assets/bltdb96303299d9fdd7/76925_alt3.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "imageBack":      "https://www.lego.com/cdn/cs/set/assets/blt2715cd56b166e033/76925_alt2.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "scale":          null,
  //   "mecabricks":     "LyjWJ1B52Jr",
  //   "gallery":        ["https://www.lego.com/en-us/product/aston-martin-safety-car-amr23-76925?galleryOpen=true&galleryView=0"]
  // },
  // {
  //   "id":             769191,
  //   "name":           "2023 McLaren Formula 1 Car",
  //   "make":           "Mclaren",
  //   "model":          "Formula 1 Car",
  //   "year":           null,
  //   "author":         "LEGO",
  //   "instructions":   "https://www.lego.com/en-us/service/buildinginstructions/76919",
  //   "purchase":       "https://www.lego.com/en-us/product/2023-mclaren-formula-1-race-car-76919",
  //   "imageFront":     "https://www.lego.com/cdn/cs/set/assets/blt1dbce945ebf9831b/76919_alt2.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "imageBack":      "https://www.lego.com/cdn/cs/set/assets/blt1a6f47a83022ba00/76919_alt4.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1",
  //   "scale":          null,
  //   "mecabricks":     "qxv47pdEjdJ",
  //   "gallery":        ["https://www.lego.com/en-us/product/2023-mclaren-formula-1-race-car-76919?galleryOpen=true&galleryView=0"]
  // }
];
const designers = [
  {
    "author": "LEGO",
    "verified": false,
    "website": "https://www.lego.com",
    "youtube": null,
    "instagram": null
  }
];

function log_data() {
  console.log(data);
}

function update_data() {
  fetch("data/car.json")
    .then(response => response.json())
    .then(dataDB => {
      // console.log(dataDB);
      data = dataDB;
      getCars();
      set_makes_models();
    })
    .catch(error => console.error("Error fetching data", error));
}

function set_makes_models() {
  makes = [];
  models = [];
  makeSelect = document.getElementById("make-select")
  modelSelect = document.getElementById("model-select")
  makeSelect.options.length=1;
  modelSelect.options.length=1;
  makeSelect.options[0] = new Option("Makes", "", true, true)
  modelSelect.options[0] = new Option("Models", "", true, true)

  data.forEach( car => {
    if(!makes.includes(car.make) && car.make != "") {
      makes.push(car.make);
      // makeSelect.options[makeSelect.length] = new Option(car.make, car.make, false, false)
    }
    if(!models.includes(car.model) && car.model != "") {
      models.push(car.model);
      // modelSelect.options[modelSelect.length] = new Option(car.model, car.model, false, false)
    }
  })
  makes.sort();
  models.sort();
  makes.forEach( make => { makeSelect.options[makeSelect.length] = new Option(make, make, false, false) })
  models.forEach( model => { modelSelect.options[modelSelect.length] = new Option(model, model, false, false) })

  // console.log(makes, models);
}

function getCars(make = "") {
  cars = []
  if (make=="") {
    console.log(make);
  }
  data.forEach(item => {
    // console.log(item.name);
    
    if(item.make == make || make == "") {
      cars.push(item)
      // console.log(item);
      }
    });
    generateCards(cars)
}


function createCard(item) {
  // Get the template content
  const template = document.getElementById('card-template').content.cloneNode(true);
  
  // Fill in the template with data
  template.querySelector('.card').id = item.id;
  template.querySelector('.card-img').src = item.imageFront;
  template.querySelector('.card-img-bk').src = item.imageBack || "https://placehold.co/300";
  template.querySelector('.card-name').textContent = item.name;
  template.querySelector('.card-designer').textContent = item.author || "Unknown";
      
  const website = designers.find(item => item.author === item.author);
  if(website) {
    template.querySelector('.card-designer').href = item.website;
  }
  const gallery = data.find(item => item.gallery === item.gallery);
  if(gallery) {
    template.querySelector('.card-gallery').href = item.gallery;
  }
  const instructions = data.find(item => item.instructions === item.instructions);
  if(instructions) {
    template.querySelector('.card-instructions').href = item.instructions;
  }
  const view3D = data.find(item => item.mecabricks === item.mecabricks);
  if(view3D) {
    template.querySelector('.card-3d').href = `https://mecabricks.com/en/models/${item.mecabricks}`;
  }
  // const listElement = template.querySelector('.card-list');
  // item.list.forEach(str => {
  //     const listItem = document.createElement('li');
  //     listItem.textContent = str;
  //     listElement.appendChild(listItem);
  // });

  return template;
}

function generateCards(db) {
  const container = document.getElementById('cards-container');
  container.innerHTML = "";
  db.forEach(item => {
    // console.log(item);
    const card = createCard(item);

    imgFt = card.querySelector(".card-img");
    imgBk = card.querySelector(".card-imgBk");

    card.querySelectorAll(".img-container, .card-img, .card-imgBk, .card, .name, .view-btns").forEach(element => {
      element.addEventListener("mouseup", function(event) {
        if(event.target === element) {
          Array.from(document.getElementsByClassName("card")).forEach(c => {
            c.style.border = "none";
            c.style.margin = "20px";
          })
          this.closest(".card").style.border = "1px solid white";
          this.closest(".card").style.margin = "19px";
          update_info_col(this.closest(".card"))
      }
      })
    })
    
    container.appendChild(card);
  });
}

function toggleActiveView(btn) {
  btnFt = btn.parentElement.querySelector(".ft-view-btn");
  btnBk = btn.parentElement.querySelector(".bk-view-btn");
  imgFt = btn.parentElement.parentElement.querySelector(".card-img")
  imgBk = btn.parentElement.parentElement.querySelector(".card-img-bk")

  if(window.getComputedStyle(btnFt).backgroundImage.includes("Light")) {
    btnFt.style.backgroundImage = "url(images/carOutlineFtDark.webp)";
    btnBk.style.backgroundImage = "url(images/carOutlineBkLight.webp)";

    imgFt.hidden = true;
    imgBk.hidden = false;
  }
  else {
    btnFt.style.backgroundImage = "url(images/carOutlineFtLight.webp)";
    btnBk.style.backgroundImage = "url(images/carOutlineBkDark.webp)";
    
    imgFt.hidden = false;
    imgBk.hidden = true;
  }
}

function update_info_col(card) {
  mecaID = card.querySelector(".card-3d").href.substring(33);
  col = document.getElementById("detailsCol")
  if (mecaID != "" ) {
    // col.querySelector(".iframe").src = "https://mecabricks.com/en/player/"+mecaID;
  }
}

// window.onload = getCars();
// window.onload = gen_test_card;
window.onload = update_data;
// window.onload = getCars;
// window.onload = generateCards;

// document.querySelector(".ft-view-btn")

document.getElementById("make-select").addEventListener("change", function() { getCars(this.value); })
// document.getElementById("model-select").addEventListener("change", function() { getCars(this.value); })