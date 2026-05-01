let data, info;

async function init(){  
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  info = await fetch(link);
  data = await info.json();

  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crashes = data[i];
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
  }
  output.innerHTML = build;

}

function filterByStreetname(){
  let output = document.getElementById("output");
  let street_name = document.getElementById("street_name").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crashes = data[i];
    if(crashes.on_street_name == street_name){
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

function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crashes = data[i];
    if(crashes.borough == borough){
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
