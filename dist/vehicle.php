<?php 
  include ('get_details.php'); 
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vehicle and Destination</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body class="antialiased poppins-light m-0">
    <div
      class="mx-5 my-7 px-2 py-2 flex justify-center"
      action="get_details.php"
      method="POST"
    >
      <p class="name-bg text-xl ml-4 mt-2 font-Noto">Burlixque</p>
      <div class="mt-20">
        <div>
          <img class="h-[53px]" src="./img/white logo - green bg.png" alt="" />
          <p
            class="font-semibold text-[15px] text-color mt-[12px] tracking-normal opacity-90"
          >
            Organize student transport
          </p>
          <p class="faded-color text-[11px] tracking-wide mt-1">
            Welcome to Burlixque - Let's create your account
          </p>
          <div class="h-[1px] w-auto line-bg mt-6"></div>
        </div>
        <div class="flex gap-4 mt-2">
          <!-- Vehicle Type -->
          <div class="flex flex-col">
            <label
              for="vehicleName"
              class="text-sm mt-6 font-semibold opacity-90"
              >Vehicle Type</label
            >
            <div class="mt-[2px] selected-item">
              <input
                type="text"
                class="singleInput rounded-md px-2 py-[5px] font-semibold text-color input-field"
                readonly
              />
            </div>

            <div class="dropdown-box">
              <div class="dropdown-content">
                <div class="search-input">
                  <input type="text" placeholder="Search" />
                </div>
                <ul
                  class="cursor-pointer ml-1"
                  id="vehicleName"
                  name="vehicleName"
                >
                  <li class="dropdown-item active">Toyota Hiace Bus</li>
                  <li class="dropdown-item">Coaster Bus</li>
                  <li class="dropdown-item">Luxurious Bus</li>
                  <li class="dropdown-item">Mini Bus</li>
                  <li class="dropdown-item">Car</li>
                  <li class="dropdown-item">Jeep</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Preset value -->
          <div class="flex flex-col">
            <label
              for="vehiclePrice"
              class="text-sm mt-6 font-semibold opacity-90"
              >Preset Value</label
            >
            <input
              type="text"
              class="singleInput rounded-md mt-[2px] px-2 py-[5px] font-semibold input-field"
              readonly
              id="vehiclePrice"
              name="vehiclePrice"
            />
          </div>
        </div>
        <!-- Destination -->
        <div class="flex gap-4 mt-2">
          <!-- Destination dropdown -->
          <div class="flex flex-col">
            <label
              for="destinationName"
              class="text-sm mt-6 font-semibold opacity-90"
              >Destination</label
            >

            <div class="mt-[2px] selected-destination">
              <input
                type="text"
                class="singleInput rounded-md px-2 py-[5px] font-semibold input-field"
                readonly
              />
            </div>

            <div class="dropdown-box">
              <div class="dropdown-content">
                <div class="search-input">
                  <input type="text" placeholder="Search" />
                </div>
                <ul
                  class="cursor-pointer ml-1"
                  id="destinationName"
                  name="destinationName"
                >
                  <li class="dropdown-item active" data-destination="Lagos">Lagos</li>
                  <li class="dropdown-item" data-destination="Abuja">Abuja</li>
                  <li class="dropdown-item" data-destination="Kaduna">Kaduna</li>
                  <li class="dropdown-item" data-destination="Portharcourt">Portharcourt</li>
                  <li class="dropdown-item" data-destination="Imo">Imo</li>
                  <li class="dropdown-item" data-destination="Delta">Delta</li>
                  <li class="dropdown-item" data-destination="Kogi">Kogi</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Preset value -->
          <div class="flex flex-col">
            <label
              for="destinationPrice"
              class="text-sm mt-6 font-semibold opacity-90"
              >Preset Value</label
            >
            <input
              type="text"
              class="singleInput rounded-md mt-[2px] px-2 py-[5px] font-semibold input-field"
              readonly
              id="destinationPrice"
              name="destinationPrice"
            />
          </div>
        </div>
        <!-- Stops -->
        <div class="flex gap-4 mt-2">
          <div class="flex flex-col">
            <label for="" class="text-sm mt-6 font-semibold opacity-90"
              >Stop(s)</label
            >
            <div class="mt-[2px] selectedStop">
              <input
                type="text"
                class="singleInput rounded-md mt-[2px] px-2 py-[5px] font-semibold input-field"
              />
            </div>

            <div class="dropdown-box" id="stopName">
              <div class="dropdown-content">
                <div class="search-input">
                  <input type="text" placeholder="Search" />
                </div>
                <ul class="cursor-pointer ml-1" id="stops" name="stops" disabled>
                  <li class="dropdown-item active" readonly>Select a destination</li>
                  <!-- stops will be populated here -->
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Next btn -->
        <a href="./index.html">
          <button
            class="btn-bg h-9 w-full white text-sm rounded-md mt-7 mb-2 hover:btn-effect opacity-90"
          >
            Next
          </button>
        </a>
      </div>
    </div>

    <script src="./burlixque.js"></script>
  </body>
</html>
