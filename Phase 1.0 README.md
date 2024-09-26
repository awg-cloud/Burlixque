Web Application Flowchart for Burlixque
				(PHASE 1.0)

1. Main Page
    • Options:
        ◦ Login
            ▪ Fields:
                • Username
                • Password
                • [Button: Login] → Validates information against the database
        ◦ Sign Up
            ▪ Options:
                • (a) Register as a Student Transport Organizer
                • (b) Register as a Student Passenger

(a) Student Transport Organizer Registration
Section 1: Personal Information
    • Fields:
        ◦ Full Name
        ◦ Date of Birth
        ◦ School Registration Number
        ◦ Matriculation Number
        ◦ Preferred Username
            ▪ Availability Check (Green Tick or Red X)
        ◦ Password
        ◦ Confirm Password
        ◦ Home Address
        ◦ Hostel Room Number
        ◦ Course
        ◦ Department
        ◦ Webmail (with CAPTCHA email verification)
        ◦ Phone Number
        ◦ Socials (Instagram, Telegram, LinkedIn, WhatsApp)
Section 2: Vehicle and Destination Details
    1. Vehicle Type
        ◦ Dropdown Menu:
            ▪ Options: Toyota Hiace Bus, Coaster Bus, Luxurious Bus, Mini Bus, Car, Jeep
        ◦ Preset Value: 200 Naira per vehicle
    2. Destination(s)
        ◦ Dropdown Menu:
            ▪ Options: Lagos, Abuja, Kaduna, Portharcourt, Imo, Delta, Kogi
        ◦ Preset Value: 500 Naira per location
    3. Stop(s)
        ◦ Corresponding Dropdown Menu based on Destination(s):
            ▪ Abuja: Garki
            ▪ Lagos: Berger, Ojota, Maryland, Iyana Ipaja
            ▪ Kaduna: Kaduna
            ▪ Portharcourt: Warri
            ▪ Imo: Owerri
            ▪ Delta: Asaba
            ▪ Kogi: Lokoja
    4. Transportation Rate
        ◦ Custom Fill Field
    5. Slot Subscription
        ◦ Dropdown Menu:
            ▪ Monthly: 2,500 Naira
            ▪ Daily: 250 Naira
            ▪ Weekly: 1,000 Naira
            ▪ Custom:
                • Preferred timeframe in days or hours
                • Preset Value: 250 Naira per day, 100 Naira per hour
Section 3: Checkout Stage
    • Automated Total Cost Display:
        ◦ Sum of values from fields: Destination(s), Vehicle(s), Slot Subscription
    • [Button: Confirm and Pay]

(b) Student Passenger Registration
Section 1: Personal Information
    • Fields:
        ◦ Full Name
        ◦ Date of Birth
        ◦ School Registration Number
        ◦ Matriculation Number
        ◦ Preferred Username
            ▪ Availability Check (Green Tick or Red X)
        ◦ Password
        ◦ Confirm Password
        ◦ Home Address
        ◦ Hostel Room Number
        ◦ Course
        ◦ Department
        ◦ Webmail (with CAPTCHA email verification)
        ◦ Phone Number
        ◦ Socials (Instagram, Telegram, LinkedIn, WhatsApp)
Section 2: Travel Preferences
    1. Destination
        ◦ Single Selection Dropdown Menu:
            ▪ Options: Lagos, Abuja, Kaduna, Portharcourt, Imo, Delta, Kogi
    2. Stop(s)
        ◦ Corresponding Dropdown Menu based on Destination(s):
            ▪ Abuja: Garki
            ▪ Lagos: Berger, Ojota, Maryland, Iyana Ipaja
            ▪ Kaduna: Kaduna
            ▪ Portharcourt: Warri
            ▪ Imo: Owerri
            ▪ Delta: Asaba
            ▪ Kogi: Lokoja
    3. Slot Subscription
        ◦ Dropdown Menu:
            ▪ Monthly: 1,000 Naira
            ▪ Daily: 250 Naira
            ▪ Weekly: 500 Naira
            ▪ Custom:
                • Preferred timeframe in days or hours
                • Preset Value: 250 Naira per day, 100 Naira per hour
Section 3: Checkout Stage
    • Automated Total Cost Display:
        ◦ Sum of values from fields: Slot Subscription
    • [Button: Confirm and Pay]

Additional Notes:
    1. Auto-Calculator:
        ◦ Integrated into the Checkout Stage for both sections to display total cost based on inputted data.
    2. Database Integration:
        ◦ Username and Password checks should be linked to a database for validity.
    3. UI Elements:
        ◦ Green tick for available usernames and red X for taken usernames.
        ◦ CAPTCHA for email verification to prevent spam registrations.


YOU CAN USE THIS TEMPLATE AS WELL

Sample UI/UX Interface Outline
Login Page:
    • Header: "Welcome to Burlixque"
    • Fields:
        ◦ Username
        ◦ Password
        ◦ [Button: Login]
        ◦ [Link: Forgot Password?]
    • Footer: "Don't have an account?" [Button: Sign Up]
Sign Up Page:
    • Header: "Create an Account"
    • Toggle Options: "Student Transport Organizer" | "Student Passenger"
    • Fields (Common):
        ◦ Full Name
        ◦ Date of Birth
        ◦ Username (availability check)
        ◦ Password / Confirm Password
        ◦ Email Verification (with CAPTCHA)
        ◦ Phone Number
    • Additional Fields:
        ◦ Organizer: Vehicle Type, Destination, Stops, Transportation Rate, Slot Subscription
        ◦ Passenger: Destination, Stops, Slot Subscription
    • Footer: [Button: Register]
Checkout Page:
    • Header: "Checkout Summary"
    • Details:
        ◦ Selected Destination(s)
        ◦ Stops
        ◦ Slot Subscription
        ◦ Total Cost Calculation
    • Footer:
        ◦ [Button: Confirm & Pay]
        ◦ [Button: Edit Information]
