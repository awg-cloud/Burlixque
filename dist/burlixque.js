window.addEventListener("load", () => {
  const dropdowns = document.querySelectorAll(".dropdown-box");

  dropdowns.forEach((dropdown) => {
    const selectedItem = dropdown
      .closest(".flex")
      .querySelector(
        ".selected-item input, .selected-destination input, .selectedStop input, .selected-slot input"
      );
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    const dropdownItems = dropdown.querySelectorAll(
      ".dropdown-item, .dropdownItem"
    );
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

              // Store the vehicle price in session for checkout page
              sessionStorage.setItem("vehiclePrice", response.vehicle_price);

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

    destinationDropdown.querySelectorAll(".dropdownItem").forEach((item) => {
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

              // Store the destination price in session for checkout page
              sessionStorage.setItem(
                "destinationPrice",
                response.destination_price
              );
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

document.addEventListener("DOMContentLoaded", function () {
  const destinationItems = document.querySelectorAll(".dropdownItem");

  destinationItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const selectedDestination = item.getAttribute("data-destination");

      const selectedStopInput = document.querySelector(
        ".selectedStop input[type='text']"
      );
      if (selectedStopInput) {
        selectedStopInput.value = "";
      }

      // Function to update stops based on the selected destination
      updateStopsDropdown(selectedDestination);
    });
  });
});

// Function to update stops dropdown based on selected destination
function updateStopsDropdown(destination) {
  const stopsDropdown = document.querySelector("#stops");
  const selectedStopInput = document.querySelector(
    ".selectedStop input[type='text']"
  );

  fetch("./destinations.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const stops = data[destination];

      let out = "";
      out += `<li class="dropdown-item active">Select from below</li>`; // First option with active class

      // Populate the dropdown with stops
      if (stops && stops.length > 0) {
        stops.forEach(function (selectedStop) {
          out += `<li class="dropdown-item" value="${selectedStop}">${selectedStop}</li>`;
        });
      } else {
        out = `<li class="dropdown-item no-items">No stops available</li>`;
      }

      stopsDropdown.innerHTML = out;

      stopsDropdown.removeAttribute("disabled");

      // Add event listener to each stop item to handle the selection
      const stopItems = stopsDropdown.querySelectorAll(".dropdown-item");
      stopItems.forEach(function (stopItem) {
        stopItem.addEventListener("click", function () {
          const selectedStop = stopItem.textContent;

          selectedStopInput.value = selectedStop;

          stopItems.forEach((item) => {
            item.classList.remove("active");
          });

          stopItem.classList.add("active");
        });
      });
    })
    .catch(function (error) {
      console.error("Error fetching stops:", error);
    });
}

const dropdownItems = document.querySelectorAll(".dropdown-item");

const slotInput = document.getElementById("slotInput");

dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    const itemText = this.textContent;

    // Regular expression to extract the numeric price from the text
    const priceValue = itemText.match(/\d+/)[0]; // Matches the first numeric value

    // Store the slot price in session for checkout page
    sessionStorage.setItem("slotPrice", priceValue);
  });
});

const popup = document.getElementById("popup");
const signUpText = document.getElementById("signUp");
const closePopup = document.getElementById("closePopupBtn");

// open popup
signUpText.addEventListener("click", function() {
  popup.style.display = "flex";
});

// close popup
closePopup.addEventListener("click", function() {
  popup.style.display = "none";
});

document.getElementById("option1").addEventListener("click", function() {
  window.location.href = "sign up.html";
});

document.getElementById("option2").addEventListener("click", function() {
  window.location.href = "student_passenger.html";
});
