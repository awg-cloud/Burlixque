window.addEventListener("load", () => {
  const dropdowns = document.querySelectorAll(".dropdown-box");

  dropdowns.forEach((dropdown) => {
    const selectedItem = dropdown
      .closest(".flex")
      .querySelector(".selected-item input, .destination-item input"); // Correctly select input fields based on your HTML structure
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
      ".destination-item input[type='text']"
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
