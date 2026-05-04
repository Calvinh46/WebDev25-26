let data, info;

async function init(){  
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  info = await fetch(link);
  data = await info.json();

  let output = document.getElementById("output");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crashes = data[i];
    build += `<div class="fitted card">
                 <h3>${crashes.on_street_name}</h3>
                 <hr>
                 <p>${crashes.borough}</p>
                 <p>${crashes.crash_time}</p>
                 <p>${crashes.zip_code}</p>
                 <p>${crashes.collision_id}</p>
                 <hr>
                 <p>${crashes.crash_date}</p>
                 <hr>
                 <p>${crashes.number_of_persons_killed}</p>
            </div>`;
    ct++;
  }
  output.innerHTML = build;

  let collision_id = fillDropDown("collision_id");
  document.getElementById("collision_id").innerHTML = collision_id;

  let borough = fillDropDown("borough");
  document.getElementById("borough").innerHTML = borough;  
}

function filterByZipcodeandBorough(){
  let output = document.getElementById("output");
  let zipcode = document.getElementById("zipcode").value;
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crashes = data[i];
    if(crashes.zip_code == zipcode && crashes.borough == borough){
      build += `<div class="fitted card">
                 <h3>${crashes.on_street_name}</h3>
                 <hr>
                 <p>${crashes.borough}</p>
                 <p>${crashes.crash_time}</p>
                 <p>${crashes.zip_code}</p>
                 <p>${crashes.collision_id}</p>
                 <hr>
                 <p>${crashes.crash_date}</p>
                 <hr>
                 <p>${crashes.number_of_persons_killed}</p>
            </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


function filterByCrashdate(){
  let output = document.getElementById("output");
  let crash_date = document.getElementById("crashdate").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crashes = data[i];
    if(crashes.crash_date == crash_date){
      build += `<div class="fitted card">
                 <h3>${crashes.on_street_name}</h3>
                 <hr>
                 <p>${crashes.borough}</p>
                 <p>${crashes.crash_time}</p>
                 <p>${crashes.collision_id}</p>
                 <hr>
                 <p>${crashes.crash_date}</p>
                 <hr>
                 <p>${crashes.number_of_persons_killed}</p>
            </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByDeaths(){
  let output = document.getElementById("output");
  let number_of_persons_killed = document.getElementById("deaths").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crashes = data[i];
    if(crashes.number_of_persons_killed == number_of_persons_killed){
      build += `<div class="fitted card">
                 <h3>${crashes.on_street_name}</h3>
                 <hr>
                 <p>${crashes.borough}</p>
                 <p>${crashes.crash_time}</p>
                 <p>${crashes.collision_id}</p>
                 <hr>
                 <p>${crashes.crash_date}</p>
                 <hr>
                 <p>${crashes.number_of_persons_killed}</p>
            </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
