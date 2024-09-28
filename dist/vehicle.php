<?php 
  include ('get_details.php'); 
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vehicle and Destination</title>
    <!-- <style>
      .card{
        background-image: url(/dist/img/green-gradient-abstract-background-empty-room-with-space-your-text-picture.jpg);
        background-repeat: no-repeat;
        background-size: cover; 
        background-position: center;
      }
    </style> -->
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

            <div class="mt-[2px] destination-item">
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
                  <li class="dropdown-item active">Lagos</li>
                  <li class="dropdown-item">Abuja</li>
                  <li class="dropdown-item">Kaduna</li>
                  <li class="dropdown-item">Portharcourt</li>
                  <li class="dropdown-item">Imo</li>
                  <li class="dropdown-item">Delta</li>
                  <li class="dropdown-item">Kogi</li>
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
          <!-- Vehicle Type -->
          <div class="flex flex-col">
            <label for="" class="text-sm mt-6 font-semibold opacity-90"
              >Stop(s)</label
            >
            <input
              type="text"
              class="singleInput rounded-md mt-[2px] px-2 py-[5px] font-semibold input-field"
            />
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

      <!--  -->
      <!-- <div
        class="h-[510px] card w-[380px] rounded-lg ml-24 pl-7"
      >
        <div class="text-5 font-Noto italic mt-10 card-color">
          <p>Enter</p>
          <p>the Future</p>
          <div class="poppins-light text-[39px] ml-10 mt-3">
            <p>of Transport,</p>
            <p>today</p>
          </div>
        </div>

        <div class="flex mt-52 gap-2 ml-[60px]">
          <img
            class="h-[42px] w-[43px] rounded-lg"
            src="./img/green logo - white bg.png"
            alt=""
          />
          <div
            class="case-color caseText-color h-[120px] w-10 -mt-[78px] rounded-md"
          >
            <div class="ml-[13px] mt-4">
              <img class="h-[18px] mb-4" src="./img/house.png" alt="" />
              <img class="h-[18px] mb-4" src="./img/four-dot.png" alt="" />
              <img class="h-[18px]" src="./img/screw.png" alt="" />
            </div>
          </div>
          <div class="case-color h-auto w-[170px] -mt-[185px] rounded-md pl-3">
            <img class="h-6 mt-5" src="./img/faded-logo.png" alt="" />
            <p
              class="font-semibold text-[16px] poppins-light tracking-tight mt-[42px] opacity-90"
            >
              12,347.23 <span>₦</span>
            </p>
            <p class="text-[8px] balance-color tracking-wide mt-[2px]">
              Combined balance
            </p>
            <div
              class="caseText-color flex font-semibold gap-7 mt-5 opacity-90"
            >
              <p class="text-[9px]">Primary card</p>
              <p class="text-[10px]">2,546.64 <span>₦</span></p>
            </div>
            <p class="caseText-color mt-1 text-[8px] font-semibold opacity-90">
              3495 **** **** 6917
            </p>
            <div class="flex gap-11">
              <img class="h-[18px] my-4" src="./img/visa.png" alt="" />
              <button
                class="h-6 w-16 text-[10px] font-semibold caseText-color btn-bgcolor rounded-full mt-3 hover:view-effect opacity-90"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <script src="./burlixque.js"></script>
  </body>
</html>
