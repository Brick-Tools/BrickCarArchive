window.onload = function() {
  getDesigners();
};

const supabaseUrl = 'https://jbqrtvchsaonsmpwsjcb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpicXJ0dmNoc2FvbnNtcHdzamNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwNjg4MTQsImV4cCI6MjA0MjY0NDgxNH0.KGIZTN_Dm1Z_8G_uMnUCto-7eVLDH0IgUaG8oUwMwu8';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

data = {}
async function getDesigners() {
    const { data: response, error } = await supabase
    .from('designers')
    .select('*')
    .order('id', { ascending: true })
    .range(0, 100)

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Response:', response);
    response.forEach(designer => {
      updateTable(designer);
      
      data[designer["id"]] = designer
    });
  }
  console.log('Data:', data);
}

function updateTable(designer) {
  table = document.getElementById("designersTable")
  
  row = document.createElement("template")
  row.innerHTML = `
    <tr id="">
      <td class="designerCol"></td>
      <td class="platformCol">
        <a class="platforms" href="" target="_blank">
          <img class="platformIcon" src="" alt="">
          <div class="platformName"></div>
        </a>
      </td>
      <td class="categoryCol">
        <div class="addCat selectable">
          <p>Add Category</p>
          <input type="text" class="writeCategory hidden">
        </div>
        <div class="categories">
          <ul>
          </ul>
        </div>
      </td>
      <td class="latestCol"></td>
    </tr>
  `;
  
  row.content.querySelector(".addCat").addEventListener("click", function() {
    this.querySelector("p").classList.add("hidden")
    this.querySelector(".writeCategory").classList.remove("hidden")
  })
  row.content.querySelector(".writeCategory").addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
      this.parentElement.querySelector("p").classList.remove("hidden")
      this.parentElement.querySelector(".writeCategory").classList.add("hidden")

      category = this.value.trim()
      categoryTrim = category.toLowerCase().split(" ").join("")

      id = this.closest("tr").id;
      row = data[id]

      existingCategories = [];
      row["categories"].forEach(c => {
        existingCategories.push(c.toLowerCase().split(" ").join(""))
      });
      // save new category if not already existing
      if (existingCategories.includes(categoryTrim)) {
        message = "Category already listed"
      }
      else {
        message = `Added ${category} to ${designer["designer"]}`
        data[id]["categories"].push(category)
        appendRow("test", [id, "new_category", category])
      }
      
      show_alert(message, "")
      // console.log(designer["id"], category);

      this.value = ""
    }
  })

  designer["latest"] = "*link to latest"
  
  if ((designer["categories"])){
    // categories = designer["categories"].join("<br>")

    designer["categories"].forEach(element => {
      console.log(element);
      item = document.createElement('li')
      item.textContent=element
      row.content.querySelector("ul").appendChild(item)
    });
  }
  else {
    categories = ""
  }
  // console.log(categories);

  
  url = getUrl(designer["platforms"][designer["featured_platform"]], row.content)
  row.content.querySelector("tr").id  = designer["id"]
  row.content.querySelector(".designerCol").innerHTML  = designer["designer"]
  row.content.querySelector(".platformName").innerHTML = getSiteName(designer["platforms"][designer["featured_platform"]][1])[0]
  row.content.querySelector(".platforms").href         = url
  // row.content.querySelector(".categories").innerHTML   = categories
  row.content.querySelector(".latestCol").innerHTML    = designer["latest"]  
  
  if (designer?.categories?.length > 2) {
    row.content.querySelector(".categories").insertAdjacentHTML("afterend", `<p class="showMore selectable">Show More</p>`);
    row.content.querySelector(".showMore").addEventListener("click", function() {
      if (this.parentElement.querySelector(".categories").style.maxHeight != "fit-content") {
        this.parentElement.querySelector(".categories").style.maxHeight = "fit-content";
        this.innerHTML = "Show Less"
      }
      else {
        this.parentElement.querySelector(".categories").style.maxHeight = "2.3rem";
        this.innerHTML = "Show More"
      }
    })
  }
  table.appendChild(row.content)    
}

function getSiteName(url) {
  // Use a regular expression to match the site name
  match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/.]+)\./);
  site = match ? match[1] : url; // Return the site name or the original input if no match
  id = url
  
  platform = site
  
  // platform = site.charAt(0).toUpperCase() + site.slice(1)
  if (platform == "youtube") {
    console.log("yt");
    
    match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/@([^\/?]+)/);
    site = match ? match[1] : url;
    id = site
  }
  if (platform == "rebrickable") {
    match = url.match(/(?:https?:\/\/)?(?:www\.)?rebrickable\.com\/users\/([^\/?]+)\/mocs/);
    site = match ? match[1] : url;
    id = site
  }
  
  return [platform, id]
}

function getUrl(platform, row) {
  site = platform[0]
  id = platform[1]
  
  if (site == "rebrickable") {
    // console.log(row.querySelector(".platforms"));
    
    row.querySelector(".platformIcon").src = "icons/rebrickable.webp"
    return "https://rebrickable.com/users/"+id+"/mocs/"
  }
  if (site == "mecabricks") {    
    row.querySelector(".platformIcon").src = "icons/mecabricksWhite.png"
    return "https://www.mecabricks.com/en/user/"+id
  }
  else if (site == "flickr") {
    row.querySelector(".platformIcon").src = "icons/flickr.ico"
    return "https://flickr.com/photos/"+id
  }
  else if (site == "youtube") {
    row.querySelector(".platformIcon").src = "icons/youtube.png"
    return "https://www.youtube.com/@"+id
  }
  else if (site == "instagram") {
    row.querySelector(".platformIcon").src = "icons/instagram.png"
    return "https://www.instagram.com/"+id
  }
  else if (site == "personal") {
    if (id == "https://www.LEGO.com") {
      row.querySelector(".platformIcon").src = "icons/lego.png"
    }
    return id
  }
  else { console.log(platform, row, site, id); }
}

// submit data // JUST TESTING -- NOT FOR USE
async function handleSubmit() {
  designer = document.getElementById("writeDesigner").value
  platform = document.getElementById("writePlatform").value
  category = document.getElementById("writeCategory").value

  // console.log(designer, getSiteName(platform), category);

  const { data, error } = await supabase
    .from ("designers")
    // .select("*")
    .update({ platforms: [getSiteName(platform)] })
    // .update({
    //   platforms: supabase.rpc('array_append', {
    //     platforms: getSiteName(platform)  // The value you want to append
    //   })
    // })
    // .update({ platforms: supabase.raw('array_append(platforms, ?)', [getSiteName(platform)]) })
    .eq('id', 3);
    
    
    // .update({ things: supabase.raw('array_append(things, ?)', ['thing']) })
    
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
    
  // .insert([{designer, getSiteName(platform), category}])
  
}

// adding rows to db
async function appendRow(table, data) {
  console.log(`Added to table "${table}":`, data) // TESTING
  return

  const { error } = await supabase
  .from('pending')
  .insert({ table: table, data:data })
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log(`Added [${data}] to "${table}" table`)
  }
}

// submit new designer
document.getElementById("appendDesigner").addEventListener("click", function(){
  designer = document.getElementById("writeDesigner").value
  url      = document.getElementById("writeURL").value
  category = document.getElementById("writeCategory").value
  if (url == "") {
    console.log("Missing URL");
    show_alert("Website link required", url)
    return;
  }
  
  dataChange = {
    designer:designer,
    url:url,
    category:category
  }

  site = getBaseUrl(url)
  // console.log(["designer", dataChange])
  existingDesigner = getGroupWithValue(data, designer)
  if (existingDesigner != null) {
    for (let platform of data[existingDesigner]["platforms"]) {
      if (platform[0] == site) {
        console.log("!!!");
        show_alert("Designer / Platform already in database", "");
        return; // Now correctly exits the outer function
      }
    }
  }
  
  // show alert
  show_alert("Designer Added", url)
  
  appendRow("designer", dataChange)
  document.getElementById("writeDesigner").value = ""
  document.getElementById("writeURL").value = ""
  document.getElementById("writeCategory").value = ""
  return;
})
function getBaseUrl(inputUrl) {
  try {
      let url = new URL(inputUrl.includes("://") ? inputUrl : "https://" + inputUrl);
      let hostname = url.hostname.replace(/^www\./, ""); // Remove 'www.'
      let parts = hostname.split("."); 
      
      return parts.length > 2 ? parts[parts.length - 2] : parts[0]; // Get second-level domain
  } catch (e) {
      return null; // Handle invalid URLs
  }
}
function getGroupWithValue(nestedDict, target) {
  return Object.keys(nestedDict).find(group => 
      nestedDict[group].designer === target
  ) || null;  // Returns null if no match is found
}

// alert popup
function show_alert(msg, desc) {
  document.getElementById("alert").firstChild.innerHTML = msg
  document.getElementById("alert").lastChild.innerHTML = desc

  document.getElementById("alert").classList.remove("hidden")
  document.getElementById("alert").classList.add("visible")
  setTimeout("hide_alert()", 3000)
}
function hide_alert() {
  document.getElementById("alert").classList.remove("visible")
  document.getElementById("alert").classList.add("hidden")
}

// change dark / light mode
mode = false;
document.getElementById("colorMode").addEventListener("click", function() {
  document.body.classList.toggle("light-background");
  document.body.classList.toggle("light-mode");
  if (mode == false) { document.getElementById("colorMode").src = "../images/light1080.webp"; }
  else { document.getElementById("colorMode").src = "../images/dark1080.webp"; }
  mode = !mode;
})

// open / close menu
document.getElementById("menuOpen").addEventListener("click", function() {
  document.querySelector("nav").classList.remove("slideRight")

  document.getElementById("menuOpen").style.display = "none";
  document.getElementById("menuClose").style.display = "inline";
})
document.getElementById("menuClose").addEventListener("click", function() {
  document.querySelector("nav").classList.add("slideRight")
  
  document.getElementById("menuClose").style.display = "none";
  document.getElementById("menuOpen").style.display = "inline";
})

