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
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      body {
        height: 100%;
        padding-top: 75px;
        padding-bottom: 75px;
      }

      #vanta-bg {
        width: 100%;
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
        color: white;
      }
      #vanta-bg::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
      }

      #vanta-bg > * {
        position: relative;
        z-index: 2;
      }

      input[type="checkbox"] {
        display: none;
      }

      .custom-label {
        position: relative;
        padding-left: 30px;
        cursor: pointer;
        font-size: 15px;
        padding-top: 2px;
        user-select: none;
      }

      .custom-label:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        background-color: transparent;
        border: 2px solid #397e60;
        border-radius: 4px;
      }

      input[type="checkbox"]:checked + .custom-label:before {
        background-color: #31674f;
        border-color: #31674f;
      }

      .custom-label:after {
        content: "";
        position: absolute;
        left: 6px;
        top: 2px;
        width: 6px;
        height: 12px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(50deg);
        display: none;
      }

      /* Show the checkmark when the box is checked */
      input[type="checkbox"]:checked + .custom-label:after {
        display: block;
      }
    </style>
  </head>
  <body class="antialiased poppins-light" id="animate-bg">
    <div
      class="flex justify-center"
      action="get_details.php"
      method="POST"
    >
      <p class="name-bg text-xl ml-4 font-Noto">Burlixque</p>
      <div class="mt-20">
        <div>
          <img class="h-[53px]" src="./img/white logo - green bg.png" alt="" />
          <p
            class="font-semibold text-[15px] white mt-[12px] tracking-normal opacity-90"
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
              class="text-sm mt-6 white font-semibold opacity-90"
              >Vehicle Type</label
            >
            <div class="mt-[2px] selected-item">
              <input
                type="text"
                class="singleInput rounded-md px-2 py-[5px] font-semibold white input-field"
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
              class="text-sm mt-6 white font-semibold opacity-90"
              >Preset Value</label
            >
            <input
              type="text"
              class="singleInput rounded-md mt-[2px] px-2 py-[5px] white font-semibold input-field"
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
              class="text-sm mt-6 white font-semibold opacity-90"
              >Destination</label
            >

            <div class="mt-[2px] selected-destination">
              <input
                type="text"
                class="singleInput rounded-md py-[5px] white font-semibold input-field"
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
                  <li class="dropdownItem active" data-destination="Lagos">Lagos</li>
                  <li class="dropdownItem" data-destination="Abuja">Abuja</li>
                  <li class="dropdownItem" data-destination="Kaduna">Kaduna</li>
                  <li class="dropdownItem" data-destination="Portharcourt">Portharcourt</li>
                  <li class="dropdownItem" data-destination="Imo">Imo</li>
                  <li class="dropdownItem" data-destination="Delta">Delta</li>
                  <li class="dropdownItem" data-destination="Kogi">Kogi</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Preset value -->
          <div class="flex flex-col">
            <label
              for="destinationPrice"
              class="text-sm mt-6 white font-semibold opacity-90"
              >Preset Value</label
            >
            <input
              type="text"
              class="singleInput rounded-md mt-[2px] white px-2 py-[5px] font-semibold input-field"
              readonly
              id="destinationPrice"
              name="destinationPrice"
            />
          </div>
        </div>
        <!-- Stops -->
        <div class="flex gap-4 mt-2">
          <div class="flex flex-col">
            <label for="" class="text-sm mt-6 white font-semibold opacity-90"
              >Stop(s)</label
            >
            <div class="mt-[2px] selectedStop">
              <input
                type="text"
                class="singleInput rounded-md mt-[2px] white px-2 py-[5px] font-semibold input-field"
                readonly
              />
            </div>

            <div class="dropdown-box" id="stopName">
              <div class="dropdown-content">
                <div class="search-input">
                  <input type="text" placeholder="Search" />
                </div>
                <ul
                  class="cursor-pointer ml-1"
                  id="stops"
                  name="stops"
                  disabled
                >
                  <li class="dropdown-item active" readonly>
                    Select a destination
                  </li>
                  <!-- stops will be populated here -->
                </ul>
              </div>
            </div>
          </div>

          <!-- Transportation rate -->
          <div class="flex flex-col">
            <label
              for="transportRate"
              class="text-sm mt-6 white font-semibold opacity-90"
              >Transportation Rate</label
            >
            <input
              type="text"
              class="singleInput white rounded-md mt-[2px] px-2 py-[5px] font-semibold input-field"
            />
          </div>
        </div>

        <!-- Slot subscription -->
        <div class="flex gap-4 mt-2">
          <div class="flex flex-col">
            <label for="" class="text-sm mt-6 white font-semibold opacity-90"
              >Slot Subscription</label
            >
            <div class="mt-[2px] selected-slot">
              <input
                type="text"
                class="singleInput rounded-md mt-[2px] white px-2 py-[5px] font-semibold input-field"
              />
            </div>

            <div class="dropdown-box">
              <div class="dropdown-content mt-[2px]">
                <ul class="cursor-pointer ml-1">
                  <li class="dropdown-item active" readonly>Monthly: 2500₦</li>
                  <li class="dropdown-item" readonly>Weekly: 1000₦</li>
                  <li class="dropdown-item" readonly>Daily: 250₦</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-6 font-semibold opacity-90">
            <p class="text-sm white">Preferred Timeframe</p>

            <div class="flex gap-4 mt-2">
              <div>
                <input type="checkbox" id="checkbox1" name="terms" />
                <label for="checkbox1" class="custom-label white">250₦ per Day</label>
              </div>

              <div>
                <input type="checkbox" id="checkbox2" name="terms" />
                <label for="checkbox2" class="custom-label white"
                  >100₦ per Hour</label
                >
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

    <!-- Three.js Library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
    <!-- Vanta.js NET Effect -->
    <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script>

    <script>
      VANTA.NET({
        el: "#animate-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xe8308,
        backgroundColor: 0xa0a0a,
        points: 11.0,
      });
    </script>

    <script src="./burlixque.js"></script>
  </body>
</html>
