
  // module.exports={
  //   collect: require('@turf/collect'),
  //   buffer: require('@turf/buffer')
  // }

//make new osmb object with class
const osmb = new OSMBuildings({
  container: 'map',
  zoom: 16,
  minZoom: 5,
  maxZoom: 19,
  position: { latitude: 48.399376445002254, longitude:9.996605591658563},
  state: true, // stores map position/rotation in url
  attribution: '© 3D <a href="https://osmbuildings.org/copyright/">OSM Buildings</a>'
});

//Network object
var ulm_Backbone = {
  "type": "FeatureCollection",
  "name": "Ulm_Breitband",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  "features": [
  { "type": "Feature", "properties": { "id": 1, "Level": "Backbone","roofColor": '#FFFF00',"height": 0, }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 9.996628092681297, 48.402361113030715 ], [ 9.996770542320311, 48.401921101923534 ], [ 9.996840184366052, 48.401487421911419 ], [ 9.996881336483989, 48.400797332549082 ], [ 9.996862343198787, 48.400506102175981 ], [ 9.996697734727038, 48.399626079961621 ], [ 9.996552119540487, 48.399081605785831 ], [ 9.996488808589815, 48.398875845196137 ], [ 9.996264054714924, 48.398480151754434 ], [ 9.996074121862904, 48.398198418023938 ], [ 9.995909513391153, 48.397799559034695 ], [ 9.995855699083082, 48.397669771585818 ], [ 9.995862030178149, 48.397581136254871 ], [ 9.995339714835094, 48.397476673186262 ], [ 9.994282421958848, 48.397315230262045 ], [ 9.993861404136871, 48.397258250406438 ], [ 9.993570173763773, 48.397236091573703 ], [ 9.991452422463748, 48.397239257121235 ], [ 9.990895286097825, 48.397179111718096 ], [ 9.990334984184365, 48.397084145292091 ], [ 9.989341002258794, 48.397042993174153 ], [ 9.988891494509012, 48.397030330984016 ], [ 9.988286874930083, 48.397058820911823 ], [ 9.987511315784333, 48.397153787337828 ], [ 9.986970007156076, 48.397213932740968 ] ] ] } },
  ]
  }

//2D osm tiles
osmb.addMapTiles(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '© Data <a href="https://openstreetmap.org/copyright/">OpenStreetMap</a> · © Map <a href="https://mapbox.com/">Mapbox</a>'
  }
);

//3D building Tiles
osmb.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json');

osmb.addOBJ(`${location.protocol}//${location.hostname}/${location.pathname}../data/Fernsehturm.obj`, { latitude:52.52000, longitude:13.41000 }, { id:'Fernsehturm', scale:2, color:'#ff0000', altitude:0, rotation:51 });

//***************************************************************************

  // on pointer up
  osmb.on('pointerup', e => {
    // if none, remove any previous selection and return
    if (!e.features) {
      osmb.highlight(feature => {});
      return;
    }

    // store id's from seleted items...
    const featureIDList = e.features.map(feature => feature.id);
    // ...then is is faster: set highlight color for matching features
    osmb.highlight(feature => {
      if (featureIDList.indexOf(feature.id) > -1) {
        return '#ffffff';
      }
    });
  });

//***************************************************************************
const controlButtons = document.querySelectorAll('.control button');
controlButtons.forEach(button => {
  button.addEventListener('click', e => {
    const parentClassList = button.parentNode.classList;
    const direction = button.classList.contains('inc') ? 1 : -1;
    let increment, property;
    if (parentClassList.contains('tilt')) {
      property = 'Tilt';
      increment = direction*10;
    }
    if (parentClassList.contains('rotation')) {
      property = 'Rotation';
      increment = direction*10;
    }
    if (parentClassList.contains('zoom')) {
      property = 'Zoom';
      increment = direction*1;
    }
    if (property) {
      osmb['set'+ property](osmb['get'+ property]()+increment);
    }
  });
});


var ulm_verteilnetz = {
  "type": "FeatureCollection",
"name": "Ulm_Breitband",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "id": 2, "Level": "Verteilnetz", "roofColor": '#00FF00', "height": 0, }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 9.996804841109222, 48.401707514010759 ], [ 9.998856638144987, 48.401832070899161 ], [ 9.999543561959792, 48.401816243161491 ], [ 9.999679680503739, 48.401806746518893 ], [ 9.99968917714634, 48.401578827096465 ], [ 9.999546727507326, 48.400372753486138 ], [ 9.999413774510911, 48.399774465002281 ], [ 9.999306145894767, 48.399495896819317 ] ] ] } },
{ "type": "Feature", "properties": { "id": 3, "Level": "Verteilnetz", "roofColor": '#00FF00', "height": 0, }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 9.996804841109222, 48.401707514010759 ], [ 9.993870900779465, 48.401657965784807 ], [ 9.993915218444936, 48.400948883137268 ] ] ] } },
{ "type": "Feature", "properties": { "id": 4, "Level": "Verteilnetz", "roofColor": '#00FF00', "height": 0, }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 9.996687943598646, 48.39958946965546 ], [ 9.996830687723442, 48.399616187625597 ], [ 9.999046570997008, 48.39950855900944 ] ] ] } },
{ "type": "Feature", "properties": { "id": 5, "Level": "Verteilnetz", "roofColor": '#00FF00', "height": 0, }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 9.996687943598646, 48.39958946965546 ], [ 9.995456840093832, 48.399670001933664 ], [ 9.995346045930152, 48.399660505291067 ], [ 9.9951624441732, 48.39958769769779 ], [ 9.995121292055263, 48.399568704412587 ], [ 9.994652791020279, 48.399562373317522 ], [ 9.994516672476331, 48.399584532150257 ] ] ] } },
{ "type": "Feature", "properties": { "id": 6, "Level": "Verteilnetz", "roofColor": '#00FF00', "height": 0, }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 9.995447389108172, 48.397498208040879 ], [ 9.995570799805046, 48.397099577336334 ], [ 9.995722746086662, 48.396792519225571 ], [ 9.995881023463344, 48.396222720669513 ] ] ] } },
{ "type": "Feature", "properties": { "id": 7, "Level": "Verteilnetz", "roofColor": '#00FF00', "height": 0, }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 9.993570173763773, 48.397236091573703 ], [ 9.993548014931029, 48.397533257348442 ], [ 9.993728451140448, 48.397552250633645 ], [ 9.993706292307714, 48.397767507865936 ], [ 9.993709457855248, 48.398188525687914 ], [ 9.993690464570046, 48.398805807456974 ] ] ] } },
{ "type": "Feature", "properties": { "id": 8, "Level": "Verteilnetz", "roofColor": '#00FF00', "height": 0, }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 9.991073174777378, 48.397198315609636 ], [ 9.9910440668319, 48.3974256287323 ], [ 9.990990252523828, 48.397466780850237 ], [ 9.990262176591084, 48.397675706987457 ] ] ] } },
{ "type": "Feature", "properties": { "id": 9, "Level": "Verteilnetz", "roofColor": '#00FF00', "height": 0, }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 9.987182682729928, 48.397190302121651 ], [ 9.987175767745761, 48.397064756313462 ], [ 9.987163105555625, 48.396982452077587 ], [ 9.987169436650694, 48.396944465507183 ], [ 9.988328027048015, 48.396567765350682 ], [ 9.988274212739944, 48.396479130019735 ] ] ] } },
{ "type": "Feature", "properties": { "id": 10, "Level": "Verteilnetz", "roofColor": '#00FF00', "height": 0, }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 9.987610057221467, 48.396801203627618 ], [ 9.98751131578433, 48.396646904039024 ], [ 9.987492322499127, 48.396529778780277 ], [ 9.987482825856526, 48.39630819045292 ], [ 9.987530309069532, 48.396172071908971 ], [ 9.987596785567739, 48.396083436578024 ], [ 9.987913340321105, 48.395830192775335 ], [ 9.988081114340389, 48.395697239778919 ], [ 9.988369179165954, 48.395580114520172 ], [ 9.988536953185237, 48.395564286782509 ], [ 9.988926315531877, 48.395589611162777 ], [ 9.989157400501835, 48.395659253208514 ] ] ] } }
]
}


//buffer
var buffered_backbone = turf.buffer(ulm_Backbone,3,{units:'meters'})
var buffered_verteilnetz = turf.buffer(ulm_verteilnetz,2,{units:'meters'})
//add geojeson_route
osmb.addGeoJSON(buffered_backbone)
osmb.addGeoJSON(buffered_verteilnetz)

// sidebar
function openSidebar() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//click building -> Show infos on sidebars
osmb.on('pointerup',e=>{
  if(e.features != null){
    document.getElementById("buildingID").innerHTML = e.features[0].id
    document.getElementById("buildingType").innerHTML = e.features[0].properties.type
    document.getElementById("buildingName").innerHTML = e.features[0].properties.name
    document.getElementById("buildingHeight").innerHTML = e.features[0].properties.type
  } else {
    document.getElementById("buildingID").innerHTML = '&nbsp'
    document.getElementById("buildingType").innerHTML = '&nbsp'
    document.getElementById("buildingName").innerHTML = '&nbsp'
    document.getElementById("buildingHeight").innerHTML = '&nbsp'
  }
})

//check broadband network properties


