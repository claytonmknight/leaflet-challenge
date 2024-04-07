# leaflet-challenge
 leaflet-challenge
# Earthquake Mapper

## Overview
This project utilizes Leaflet, a widely-used JavaScript library for interactive maps, to visualize earthquake data from the United States Geological Survey (USGS). The map plots earthquakes based on their longitude and latitude, with data markers reflecting the magnitude of the earthquake by size and the depth of the earthquake by color. Additionally, popups are included to provide additional information about each earthquake when its associated marker is clicked. Finally, a legend is created to provide context for the map data.

## How to Use
1. **Accessing the Map**: Open the `index.html` file in your web browser. This will display the interactive map.
2. **Interacting with the Map**: You can zoom in/out on the map using your mouse or trackpad. Clicking on individual markers will display a popup with information about the earthquake at that location.
3. **Understanding the Legend**: The legend, located at the bottom right of the map, provides context for the earthquake data. Each color represents a range of earthquake depths, and the corresponding depth range is displayed next to each color square.

## File Structure
- **logic.js**: This JavaScript file contains the logic for initializing the map, fetching earthquake data from the USGS API, plotting the earthquakes on the map, defining marker colors based on earthquake depth, and creating the legend.
- **style.css**: This CSS file contains styles for the map container and other HTML elements.
- **index.html**: This HTML file provides the structure for the web page, including the map container and necessary JavaScript and CSS file references.

## Data Source
The earthquake data used in this project is sourced from the USGS earthquake feed API. The API provides real-time earthquake information, including location coordinates, magnitude, and depth.