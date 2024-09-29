window.addEventListener("load", () => {
  const dropdowns = document.querySelectorAll(".dropdown-box");

  dropdowns.forEach((dropdown) => {
    const selectedItem = dropdown
      .closest(".flex")
      .querySelector(
        ".selected-item input, .selected-destination input, .selected-stop input"
      ); // Correctly select input fields based on your HTML structure
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    const dropdownItems = dropdown.querySelectorAll(".dropdown-item");
    const searchInput = dropdown.querySelector(".search-input input");

    // Open and close dropdown on click
    window.addEventListener("click", (windowClickEvent) => {
      if (dropdown.classList.contains("active")) {
        if (!dropdownContent.contains(windowClickEvent.target)) {
          closeDropdown(dropdown);
        }
      } else if (selectedItem.contains(windowClickEvent.target)) {
        openDropdown(dropdown);
      }
    });

    // Dropdown item click event
    dropdownItems.forEach((dropdownItem) => {
      dropdownItem.addEventListener("click", () => {
        dropdownItems.forEach((innerDropdownItem) => {
          innerDropdownItem.classList.remove("active");
        });

        dropdownItem.classList.add("active");
        selectedItem.value = dropdownItem.innerHTML;
        closeDropdown(dropdown);
      });
    });

    // Search filter
    searchInput.addEventListener("keyup", () => {
      const filter = searchInput.value.toLowerCase();

      dropdownItems.forEach((dropdownItem) => {
        if (dropdownItem.innerHTML.toLowerCase().startsWith(filter)) {
          dropdownItem.classList.remove("hide");
        } else {
          dropdownItem.classList.add("hide");
        }
      });
    });
  });
});

// Open dropdown
function openDropdown(dropdown) {
  dropdown.classList.add("active");
}

// Close dropdown
function closeDropdown(dropdown) {
  dropdown.classList.remove("active");
}

window.addEventListener("load", () => {
  const vehicleDropdown = document.querySelector("#vehicleName");
  const destinationDropdown = document.querySelector("#destinationName");
  const stopsDropdown = document.querySelector("#stopName");

  // Vehicle dropdown logic
  if (vehicleDropdown) {
    const vehicleInput = document.querySelector(
      ".selected-item input[type='text']"
    );
    const vehiclePriceField = document.getElementById("vehiclePrice");

    vehicleDropdown.querySelectorAll(".dropdown-item").forEach((item) => {
      item.addEventListener("click", function () {
        const selectedVehicleName = item.textContent;
        vehicleInput.value = selectedVehicleName;

        // Send AJAX request to get vehicle price
        const xhrVehicle = new XMLHttpRequest();
        xhrVehicle.open("POST", "get_details.php", true);
        xhrVehicle.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        );

        xhrVehicle.onload = function () {
          if (xhrVehicle.status === 200) {
            const response = JSON.parse(xhrVehicle.responseText);
            if (response.vehicle_price) {
              vehiclePriceField.value = response.vehicle_price;
            } else {
              clearVehiclePriceField();
            }
          }
        };

        // Send selected vehicle name to the server
        xhrVehicle.send(
          "vehicleName=" + encodeURIComponent(selectedVehicleName)
        );
      });
    });
  }

  // Destination dropdown logic
  if (destinationDropdown) {
    const destinationInput = document.querySelector(
      ".selected-destination input[type='text']"
    );
    const destinationPriceField = document.getElementById("destinationPrice");

    destinationDropdown.querySelectorAll(".dropdown-item").forEach((item) => {
      item.addEventListener("click", function () {
        const selectedDestinationName = item.textContent;
        destinationInput.value = selectedDestinationName;

        // Send AJAX request to get destination price
        const xhrDestination = new XMLHttpRequest();
        xhrDestination.open("POST", "get_details.php", true);
        xhrDestination.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        );

        xhrDestination.onload = function () {
          if (xhrDestination.status === 200) {
            const response = JSON.parse(xhrDestination.responseText);
            if (response.destination_price) {
              destinationPriceField.value = response.destination_price;
            } else {
              clearDestinationPriceField();
            }
          }
        };

        // Send selected destination name to the server
        xhrDestination.send(
          "destinationName=" + encodeURIComponent(selectedDestinationName)
        );
      });
    });
  }
});

// Clear fields
function clearVehiclePriceField() {
  document.getElementById("vehiclePrice").value = "";
}

function clearDestinationPriceField() {
  document.getElementById("destinationPrice").value = "";
}

// document.addEventListener("DOMContentLoaded", function () {
//   const destinationItems = document.querySelectorAll(
//     "#destinationName .dropdown-item"
//   );

//   destinationItems.forEach(function (item) {
//     item.addEventListener("click", function () {
//       const selectedDestinationName = item.textContent;
//       const destinationInput = document.querySelector(
//         ".destination-item input[type='text']"
//       );
//       destinationInput.value = selectedDestinationName;

//       // Send AJAX request to the PHP backend for destination stops
//       const xhrStops = new XMLHttpRequest();
//       xhrStops.open("POST", "get_stops.php", true);
//       xhrStops.setRequestHeader(
//         "Content-type",
//         "application/x-www-form-urlencoded"
//       );

//       xhrStops.onload = function () {
//         if (xhrStops.status === 200) {
//           const response = JSON.parse(xhrStops.responseText);
//           if (response.stops.length > 0) {
//             updateStopsDropdown(response.stops);
//           } else {
//             clearStopsDropdown(); // Clear dropdown if no stops are available
//           }
//         }
//       };

//       xhrStops.send(
//         "destinationName=" + encodeURIComponent(selectedDestinationName)
//       );
//     });
//   });
// });

// // Function to update the stops dropdown
// function updateStopsDropdown(stops) {
//   const stopsDropdown = document.querySelector("#stopsName .dropdown-content");
//   stopsDropdown.innerHTML = ""; // Clear existing stops

//   stops.forEach(function (stop) {
//     const stopItem = document.createElement("div");
//     stopItem.classList.add("dropdown-item");
//     stopItem.textContent = stop.stop_name;
//     stopItem.addEventListener("click", function () {
//       // When a stop is selected, update the stop input field
//       const stopInput = document.querySelector(".stop-item input[type='text']");
//       stopInput.value = stop.stop_name;
//     });
//     stopsDropdown.appendChild(stopItem);
//   });
// }

// // Function to clear the stops dropdown if no stops are found
// function clearStopsDropdown() {
//   const stopsDropdown = document.querySelector("#stopsName .dropdown-content");
//   stopsDropdown.innerHTML =
//     "<div class='dropdown-item'>No stops available</div>";
// }

document.addEventListener("DOMContentLoaded", function () {
  const destinationItems = document.querySelectorAll(
    "#destinationName .dropdown-item"
  );

  destinationItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const selectedDestinationName = item.textContent;
      const destinationInput = document.querySelector(
        ".selected-destination input[type='text']"
      );
      destinationInput.value = selectedDestinationName;

      // Send AJAX request to the PHP backend for destination stops
      const xhrStops = new XMLHttpRequest();
      xhrStops.open("POST", "get_details.php", true);
      xhrStops.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );

      xhrStops.onload = function () {
        if (xhrStops.status === 200) {
          const response = JSON.parse(xhrStops.responseText);
          if (response.stops && response.stops.length > 0) {
            updateStopsDropdown(response.stops); 
          } else {
            clearStopsDropdown(); 
          }
        }
      };

      xhrStops.send(
        "destinationName=" + encodeURIComponent(selectedDestinationName)
      );
    });
  });
});

// Function to update the stops dropdown
function updateStopsDropdown(stops) {
  const stopsDropdown = document.querySelector("#stopName .dropdown-content"); // Target the dropdown content
  stopsDropdown.innerHTML = ""; // Clear existing stops

  stops.forEach(function (stop) {
    const stopItem = document.createElement("div");
    stopItem.classList.add("dropdown-item");
    stopItem.textContent = stop.stop_name;
    stopItem.addEventListener("click", function () {
      // When a stop is selected, update the stop input field
      const stopInput = document.querySelector(".selected-stop input[type='text']");
      stopInput.value = stop.stop_name;
    });
    stopsDropdown.appendChild(stopItem);
  });
}

// Function to clear the stops dropdown if no stops are found
function clearStopsDropdown() {
  const stopsDropdown = document.querySelector("#stopName .dropdown-content"); // Ensure targeting the content div
  stopsDropdown.innerHTML =
    "<div class='dropdown-item no-items'>No stops available</div>";
}