// Map initialization
function initializeMap() {
  // Map object
  let myMap = L.map("map", {
    center: [40.683, -74.753],
    zoom: 5
  });

  // Tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  // API query variables
  let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

  // d3
  d3.json(queryUrl).then(function (response) {
    // Earthquake plotting
    response.features.forEach(function (feature) {
      // Earthquake location
      let location = feature.geometry.coordinates;
      let latitude = location[1];
      let longitude = location[0];

      // Earthquake properties
      let magnitude = feature.properties.mag;
      let depth = location[2];

      // Marker and popups
      let circle = L.circleMarker([latitude, longitude], {
        radius: magnitude * 5,
        fillColor: chooseColor(depth),
        color: "black",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      }).bindPopup(`<h3>Earthquake Information</h3>
                    <p>Magnitude: ${magnitude}</p>
                    <p>Depth: ${depth}</p>`);

      // Add markers
      circle.addTo(myMap);
    });

    // Marker colors
    function chooseColor(depth) {
      if (depth < 10) return "#002B5C";
      else if (depth < 20) return "#D31145";
      else if (depth < 30) return "#B9975B";
      else if (depth < 40) return "#0C2340";
      else if (depth < 50) return "#236192";
      else if (depth < 60) return "#9EA2A2";
      else if (depth < 70) return "#78BE20";
      else if (depth < 80) return "#A6192E";
      else if (depth < 90) return "#154734";
      else return "#EAAA00";
    }

    // Legend
    let legend = L.control({ position: 'bottomright' });

    // Add to map
    legend.onAdd = function (map) {
      let div = L.DomUtil.create('div', 'info legend');
      let labels = ['<strong>Depth</strong>'];
      let colors = ['#002B5C', '#D31145', '#B9975B', '#0C2340', '#236192', '#9EA2A2', '#78BE20', '#A6192E', '#154734', '#EAAA00'];
      let depthLabels = ['<10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90+'];

      // Labels
      for (let i = 0; i < colors.length; i++) {
        div.innerHTML +=
          '<div style="background-color:' + colors[i] + '; width: 20px; height: 20px; display: inline-block; margin-right: 5px;"></div>' + depthLabels[i] + '<br>';
      }

      div.style.backgroundColor = 'white';
      div.style.padding = '10px';

      return div;
    };

    legend.addTo(myMap);
  });
}

// Initialize map
initializeMap();