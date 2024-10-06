document.addEventListener("DOMContentLoaded", () => {
  // Initialize the map
  const map = L.map('map').setView([-27.0, 122.0], 6); // Centered between the tenements

  // Load tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Mock tenement data including the new one you provided
  const tenements = [
    { name: "Tenement A", lat: -31.9505, lng: 115.8605, size: "500 hectares", surrendered: "2023-01-15" },
    { name: "Tenement B", lat: -30.1234, lng: 119.1234, size: "250 hectares", surrendered: "2024-05-02" },
    { name: "E 39/2522", lat: -29.09729, lng: 122.54132, size: "Unknown size", surrendered: "Unknown" } // New tenement
  ];

  // Add markers for each tenement
  tenements.forEach((tenement) => {
    const marker = L.marker([tenement.lat, tenement.lng]).addTo(map);
    marker.bindPopup(`
      <b>${tenement.name}</b><br>
      Size: ${tenement.size}<br>
      Surrendered: ${tenement.surrendered}<br>
      <button onclick="markAsInteresting('${tenement.name}')">Mark as Interesting</button>
      <button onclick="remindMe('${tenement.name}')">Remind Me</button>
    `);
  });
});

// Handle button clicks
function markAsInteresting(tenementName) {
  alert(`You marked ${tenementName} as interesting!`);
}

function remindMe(tenementName) {
  alert(`Reminder set for ${tenementName}!`);
}
