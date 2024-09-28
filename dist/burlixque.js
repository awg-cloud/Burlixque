window.addEventListener("load", () => {
  const dropdowns = document.querySelectorAll(".dropdown-box");

  dropdowns.forEach((dropdown) => {
    const selectedItem = dropdown
      .closest(".flex")
      .querySelector(".selected-item input");
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
