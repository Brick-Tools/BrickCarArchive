const supabaseUrl = 'https://jbqrtvchsaonsmpwsjcb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpicXJ0dmNoc2FvbnNtcHdzamNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwNjg4MTQsImV4cCI6MjA0MjY0NDgxNH0.KGIZTN_Dm1Z_8G_uMnUCto-7eVLDH0IgUaG8oUwMwu8';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function getDesigners() {
    const { data: response, error } = await supabase
    .from('designers')
    .select('*')
    // .range(0, 9)

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    // console.log('Data:', response);
    response.forEach(designer => { updateTable(designer)});
  }
}

function updateTable(designer) {
  table = document.getElementById("designersTable")
  
  row = document.createElement("template")
  row.innerHTML = `
    <tr>
      <td class="designer"></td>
      <td>
        
        <a class="platforms" href="" target="_blank">
          <img class="platformIcon" src="" alt="">
          <div class="platformName"></div>
        </a>
      </td>
      <td class="categories"></td>
      <td class="latest"></td>
    </tr>
  `;
  
  designer["categories"] = "categories"
  designer["latest"] = "link to latest"

  row.content.querySelector(".designer").innerHTML =   designer["designer"]
  row.content.querySelector(".platformName").innerHTML =  getSiteName(designer["platforms"][designer["featured_platform"]][1])[0]
  row.content.querySelector(".platforms").href =       getUrl(designer["platforms"][designer["featured_platform"]], row.content)
  row.content.querySelector(".categories").innerHTML = designer["categories"]
  row.content.querySelector(".latest").innerHTML =     designer["latest"]  
  
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

// submit data
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
  const { error } = await supabase
  .from('pending')
  .insert({ table: table, data:data })
}
document.getElementById("appendDesigner").addEventListener("click", function(){
  designer = document.getElementById("writeDesigner").value
  url      = document.getElementById("writeURL").value
  category = document.getElementById("writeCategory").value
  if (url == "") {
    console.log("Missing URL");
    return;
  }
  
  data = {
    designer:designer,
    url:url,
    category:category
  }
  console.log(["designer", data])
  // appendRow("designer", data)


  document.getElementById("writeDesigner").value = ""
  document.getElementById("writeURL").value = ""
  document.getElementById("writeCategory").value = ""
})

mode = false;
document.getElementById("colorMode").addEventListener("click", function() {
  document.body.classList.toggle("light-background");
  document.body.classList.toggle("light-mode");
  if (mode == false) { document.getElementById("colorMode").src = "../images/light1080.webp"; }
  else { document.getElementById("colorMode").src = "../images/dark1080.webp"; }
  mode = !mode;
})

window.onload = function() {
  getDesigners();
};