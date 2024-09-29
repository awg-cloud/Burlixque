<?php
// Connection to database
$conn = mysqli_connect('localhost', 'sholanke', 'shinnely_JR1', 'burlixque');

// Check connection
if (!$conn) {
  die('Connection error: ' . mysqli_connect_error());
}

// Handle AJAX request for vehicle price
if (isset($_POST['vehicleName']) && empty($_POST['destinationName']) && empty($_POST['stopName'])) {
    $name = mysqli_real_escape_string($conn, $_POST['vehicleName']);
    
    // Query for vehicle price based on the selected name
    $sqlVehicles = "SELECT * FROM vehicrice WHERE vehicle_name = '$name' LIMIT 1";
    $vehicleResult = mysqli_query($conn, $sqlVehicles);

    if (mysqli_num_rows($vehicleResult) > 0) {
        $vehicleInfo = mysqli_fetch_assoc($vehicleResult);
        echo json_encode($vehicleInfo);
    } else {
        echo json_encode(['vehicle_price' => '']); 
    }

    // Free result set
    mysqli_free_result($vehicleResult);
    exit();
}

// Handle AJAX request for destination price
if (isset($_POST['destinationName']) && empty($_POST['vehicleName']) && empty($_POST['stopName'])) {
    $name = mysqli_real_escape_string($conn, $_POST['destinationName']);
    
    // Query for destination info based on the selected name
    $sqlDestinations = "SELECT * FROM destprice WHERE destination_name = '$name' LIMIT 1";
    $destinationResult = mysqli_query($conn, $sqlDestinations);

    if (mysqli_num_rows($destinationResult) > 0) {
        $destinationInfo = mysqli_fetch_assoc($destinationResult);
        echo json_encode($destinationInfo);
    } else {
        echo json_encode(['destination_price' => '']);
    }

    // Free result set and terminate the script after the response
    mysqli_free_result($destinationResult);
    exit();
}

// Close the connection
mysqli_close($conn);
?>