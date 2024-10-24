import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Dashboard.module.css';
import first from '../Dashboard/first.png';
import second from '../Dashboard/second.png';
import third from '../Dashboard/third.png';
import fifth from '../Dashboard/fifth5.png';
import seventh from '../Dashboard/seventh12.png'
import { Link } from 'react-router-dom';
import headerStyles from './Header.module.css';
import avart from './avatarType.png';
import mapStyles from './Map.module.css';
import styles from './dashApp.module.css';
import Dropdown from './Dropdown';
import Typewriter from "typewriter-effect";
import logo from '../../Assets/newlogo.svg'
import notification from '../../Assets/notification.png';
import { ToastContainer, toast } from 'react-toastify';
import GoogleMapReact from 'google-map-react';
import Modal from 'react-modal';
import Select from 'react-select';
import modalStyles from './Modal.module.css';


const Marker = ({ text }) => (
    <div style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
        📍 {text}
    </div>
);

const defaultCenter = {
    lat: 6.5244,  // Latitude for Lagos, Nigeria
    lng: 3.3792,  // Longitude for Lagos, Nigeria
};

const defaultZoom = 11;

const NewDashboard = () => {

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                },
                (error) => {
                    toast.error("Error getting location:", error);
                }
            );
        } else {
            toast.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const nigerianStates = [
        { value: 'abia', label: 'Abia' },
        { value: 'adamawa', label: 'Adamawa' },
        { value: 'akwa_ibom', label: 'Akwa Ibom' },
        { value: 'anambra', label: 'Anambra' },
        { value: 'bauchi', label: 'Bauchi' },
        { value: 'bayelsa', label: 'Bayelsa' },
        { value: 'benue', label: 'Benue' },
        { value: 'borno', label: 'Borno' },
        { value: 'cross_river', label: 'Cross River' },
        { value: 'delta', label: 'Delta' },
        { value: 'ebonyi', label: 'Ebonyi' },
        { value: 'edo', label: 'Edo' },
        { value: 'ekiti', label: 'Ekiti' },
        { value: 'enugu', label: 'Enugu' },
        { value: 'gombe', label: 'Gombe' },
        { value: 'imo', label: 'Imo' },
        { value: 'jigawa', label: 'Jigawa' },
        { value: 'kaduna', label: 'Kaduna' },
        { value: 'kano', label: 'Kano' },
        { value: 'katsina', label: 'Katsina' },
        { value: 'kebbi', label: 'Kebbi' },
        { value: 'kogi', label: 'Kogi' },
        { value: 'kwara', label: 'Kwara' },
        { value: 'lagos', label: 'Lagos' },
        { value: 'nasarawa', label: 'Nasarawa' },
        { value: 'niger', label: 'Niger' },
        { value: 'ogun', label: 'Ogun' },
        { value: 'ondo', label: 'Ondo' },
        { value: 'osun', label: 'Osun' },
        { value: 'oyo', label: 'Oyo' },
        { value: 'plateau', label: 'Plateau' },
        { value: 'rivers', label: 'Rivers' },
        { value: 'sokoto', label: 'Sokoto' },
        { value: 'taraba', label: 'Taraba' },
        { value: 'yobe', label: 'Yobe' },
        { value: 'zamfara', label: 'Zamfara' },
        { value: 'fct', label: 'Federal Capital Territory (FCT)' }
    ];



    const localGovernments = {
        abia: ['Aba Asa Road Highway', 'Aba South', 'Arochukwu', 'Bende', 'Ikwuano', 'Isiala Ngwa North', 'Isiala Ngwa South', 'Isuikwuato', 'Obi Ngwa', 'Ohafia', 'Osisioma', 'Ugwunagbo', 'Ukwa East', 'Ukwa West', 'Umuahia North', 'Umuahia South', 'Umu Nneochi'],
        adamawa: ['Demsa', 'Fufore', 'Ganye', 'Girei', 'Gombi', 'Guyuk', 'Hong', 'Jada', 'Lamurde', 'Madagali', 'Maiha', 'Mayo-Belwa', 'Michika', 'Mubi North', 'Mubi South', 'Numan', 'Shelleng', 'Song', 'Toungo', 'Yola North', 'Yola South'],
        akwa_ibom: ['Abak', 'Eastern Obolo', 'Eket', 'Esit Eket', 'Essien Udim', 'Etim Ekpo', 'Etinan', 'Ibeno', 'Ibesikpo Asutan', 'Ibiono-Ibom', 'Ika', 'Ikono', 'Ikot Abasi', 'Ikot Ekpene', 'Ini', 'Itu', 'Mbo', 'Mkpat-Enin', 'Nsit-Atai', 'Nsit-Ibom', 'Nsit-Ubium', 'Obot Akara', 'Okobo', 'Onna', 'Oron', 'Oruk Anam', 'Udung-Uko', 'Ukanafun', 'Uruan', 'Urue-Offong/Oruko', 'Uyo'],
        anambra: ['Aguata', 'Anambra East', 'Anambra West', 'Anaocha', 'Awka North', 'Awka South', 'Ayamelum', 'Dunukofia', 'Ekwusigo', 'Idemili North', 'Idemili South', 'Ihiala', 'Njikoka', 'Nnewi North', 'Nnewi South', 'Ogbaru', 'Onitsha North', 'Onitsha South', 'Orumba North', 'Orumba South', 'Oyi'],
        bauchi: ['Alkaleri', 'Bauchi', 'Bogoro', 'Damban', 'Darazo', 'Dass', 'Gamawa', 'Ganjuwa', 'Giade', 'Itas/Gadau', 'Jama\'are', 'Katagum', 'Kirfi', 'Misau', 'Ningi', 'Shira', 'Tafawa Balewa', 'Toro', 'Warji', 'Zaki'],
        bayelsa: ['Brass', 'Ekeremor', 'Kolokuma/Opokuma', 'Nembe', 'Ogbia', 'Sagbama', 'Southern Ijaw', 'Yenagoa'],
        benue: ['Ado', 'Agatu', 'Apa', 'Buruku', 'Gboko', 'Guma', 'Gwer East', 'Gwer West', 'Katsina-Ala', 'Konshisha', 'Kwande', 'Logo', 'Makurdi', 'Obi', 'Ogbadibo', 'Ohimini', 'Oju', 'Okpokwu', 'Otukpo', 'Tarka', 'Ukum', 'Ushongo', 'Vandeikya'],
        borno: ['Abadam', 'Askira/Uba', 'Bama', 'Bayo', 'Biu', 'Chibok', 'Damboa', 'Dikwa', 'Gubio', 'Guzamala', 'Gwoza', 'Hawul', 'Jere', 'Kaga', 'Kala/Balge', 'Konduga', 'Kukawa', 'Kwaya Kusar', 'Mafa', 'Magumeri', 'Maiduguri', 'Marte', 'Mobbar', 'Monguno', 'Ngala', 'Nganzai', 'Shani'],
        cross_river: ['Abi', 'Akamkpa', 'Akpabuyo', 'Bakassi', 'Bekwarra', 'Biase', 'Boki', 'Calabar Municipal', 'Calabar South', 'Etung', 'Ikom', 'Obanliku', 'Obubra', 'Obudu', 'Odukpani', 'Ogoja', 'Yakurr', 'Yala'],
        delta: ['Aniocha North', 'Aniocha South', 'Bomadi', 'Burutu', 'Ethiope East', 'Ethiope West', 'Ika North East', 'Ika South', 'Isoko North', 'Isoko South', 'Ndokwa East', 'Ndokwa West', 'Okpe', 'Oshimili North', 'Oshimili South', 'Patani', 'Sapele', 'Udu', 'Ughelli North', 'Ughelli South', 'Ukwuani', 'Uvwie', 'Warri North', 'Warri South', 'Warri South West'],
        ebonyi: ['Abakaliki', 'Afikpo North', 'Afikpo South', 'Ebonyi', 'Ezza North', 'Ezza South', 'Ikwo', 'Ishielu', 'Ivo', 'Izzi', 'Ohaozara', 'Ohaukwu', 'Onicha'],
        edo: ['Akoko-Edo', 'Egor', 'Esan Central', 'Esan North-East', 'Esan South-East', 'Esan West', 'Etsako Central', 'Etsako East', 'Etsako West', 'Igueben', 'Ikpoba-Okha', 'Oredo', 'Orhionmwon', 'Ovia North-East', 'Ovia South-West', 'Owan East', 'Owan West', 'Uhunmwonde'],
        ekiti: ['Ado-Ekiti', 'Efon', 'Ekiti East', 'Ekiti South-West', 'Ekiti West', 'Emure', 'Gbonyin', 'Ido/Osi', 'Ijero', 'Ikere', 'Ikole', 'Ilejemeje', 'Irepodun/Ifelodun', 'Ise/Orun', 'Moba', 'Oye'],
        enugu: ['Aninri', 'Awgu', 'Enugu East', 'Enugu North', 'Enugu South', 'Ezeagu', 'Igbo Etiti', 'Igbo Eze North', 'Igbo Eze South', 'Isi Uzo', 'Nkanu East', 'Nkanu West', 'Nsukka', 'Oji River', 'Udenu', 'Udi', 'Uzo-Uwani'],
        gombe: ['Akko', 'Balanga', 'Billiri', 'Dukku', 'Funakaye', 'Gombe', 'Kaltungo', 'Kwami', 'Nafada', 'Shongom', 'Yamaltu/Deba'],
        imo: ['Aboh Mbaise', 'Ahiazu Mbaise', 'Ehime Mbano', 'Ezinihitte', 'Ideato North', 'Ideato South', 'Ihitte/Uboma', 'Ikeduru', 'Isiala Mbano', 'Isu', 'Mbaitoli', 'Ngor Okpala', 'Njaba', 'Nkwerre', 'Nwangele', 'Obowo', 'Oguta', 'Ohaji/Egbema', 'Okigwe', 'Onuimo', 'Orlu', 'Orsu', 'Oru East', 'Oru West', 'Owerri Municipal', 'Owerri North', 'Owerri West'],
        jigawa: ['Auyo', 'Babura', 'Biriniwa', 'Birnin Kudu', 'Buji', 'Dutse', 'Gagarawa', 'Garki', 'Gumel', 'Guri', 'Gwaram', 'Gwiwa', 'Hadejia', 'Jahun', 'Kafin Hausa', 'Kaugama', 'Kazaure', 'Kiri Kasama', 'Kiyawa', 'Maigatari', 'Malam Madori', 'Miga', 'Ringim', 'Roni', 'Sule Tankarkar', 'Taura', 'Yankwashi'],
        kaduna: ['Birnin Gwari', 'Chikun', 'Giwa', 'Igabi', 'Ikara', 'Jaba', "Jema'a", 'Kachia', 'Kaduna North', 'Kaduna South', 'Kagarako', 'Kajuru', 'Kaura', 'Kauru', 'Kubau', 'Kudan', 'Lere', 'Makarfi', 'Sabon Gari', 'Sanga', 'Soba', 'Zangon Kataf', 'Zaria'],
        kano: ['Ajingi', 'Albasu', 'Bagwai', 'Bebeji', 'Bichi', 'Bunkure', 'Dala', 'Dambatta', 'Dawakin Kudu', 'Dawakin Tofa', 'Doguwa', 'Fagge', 'Gabasawa', 'Garko', 'Garun Mallam', 'Gaya', 'Gezawa', 'Gwale', 'Gwarzo', 'Kabo', 'Kano Municipal', 'Karaye', 'Kibiya', 'Kiru', 'Kumbotso', 'Kunchi', 'Kura', 'Madobi', 'Makoda', 'Minjibir', 'Nasarawa', 'Rano', 'Rimin Gado', 'Rogo', 'Shanono', 'Sumaila', 'Takai', 'Tarauni', 'Tofa', 'Tsanyawa', 'Tudun Wada', 'Ungogo', 'Warawa', 'Wudil'],
        katsina: ['Bakori', 'Batagarawa', 'Batsari', 'Baure', 'Bindawa', 'Charanchi', 'Dandume', 'Danja', 'Dan Musa', 'Daura', 'Dutsi', 'Dutsin Ma', 'Faskari', 'Funtua', 'Ingawa', 'Jibia', 'Kafur', 'Kaita', 'Kankara', 'Kankia', 'Katsina', 'Kurfi', 'Kusada', 'Mai\'Adua', 'Malumfashi', 'Mani', 'Mashi', 'Matazu', 'Musawa', 'Rimi', 'Sabuwa', 'Safana', 'Sandamu', 'Zango'],
        kebbi: ['Aleiro', 'Arewa Dandi', 'Argungu', 'Augie', 'Bagudo', 'Birnin Kebbi', 'Bunza', 'Dandi', 'Fakai', 'Gwandu', 'Jega', 'Kalgo', 'Koko/Besse', 'Maiyama', 'Ngaski', 'Sakaba', 'Shanga', 'Suru', 'Wasagu/Danko', 'Yauri', 'Zuru'],
        kogi: ['Adavi', 'Ajaokuta', 'Ankpa', 'Bassa', 'Dekina', 'Ibaji', 'Idah', 'Igalamela-Odolu', 'Ijumu', 'Kabba/Bunu', 'Kogi', 'Lokoja', 'Mopa-Muro', 'Ofu', 'Ogori/Magongo', 'Okehi', 'Okene', 'Olamaboro', 'Omala', 'Yagba East', 'Yagba West'],
        kwara: ['Asa', 'Baruten', 'Edu', 'Ekiti', 'Ifelodun', 'Ilorin East', 'Ilorin South', 'Ilorin West', 'Irepodun', 'Isin', 'Kaiama', 'Moro', 'Offa', 'Oke Ero', 'Oyun', 'Pategi'],
        lagos: ['Agege', 'Ajeromi-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti-Osa', 'Ibeju-Lekki', 'Ifako-Ijaiye', 'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island', 'Lagos Mainland', 'Mushin', 'Ojo', 'Oshodi-Isolo', 'Shomolu', 'Surulere'],
        nasarawa: ['Akwanga', 'Awe', 'Doma', 'Karu', 'Keana', 'Keffi', 'Kokona', 'Lafia', 'Nasarawa', 'Nasarawa Eggon', 'Obi', 'Toto', 'Wamba'],
        niger: ['Agaie', 'Agwara', 'Bida', 'Borgu', 'Bosso', 'Chanchaga', 'Edati', 'Gbako', 'Gurara', 'Katcha', 'Kontagora', 'Lapai', 'Lavun', 'Magama', 'Mariga', 'Mashegu', 'Mokwa', 'Moya', 'Paikoro', 'Rafi', 'Rijau', 'Shiroro', 'Suleja', 'Tafa', 'Wushishi'],
        ogun: ['Abeokuta North', 'Abeokuta South', 'Ado-Odo/Ota', 'Egbado North', 'Egbado South', 'Ewekoro', 'Ifo', 'Ijebu East', 'Ijebu North', 'Ijebu North East', 'Ijebu Ode', 'Ikenne', 'Imeko Afon', 'Ipokia', 'Obafemi Owode', 'Odeda', 'Odogbolu', 'Ogun Waterside', 'Remo North', 'Shagamu'],
        ondo: ['Akoko North-East', 'Akoko North-West', 'Akoko South-East', 'Akoko South-West', 'Akure North', 'Akure South', 'Ese Odo', 'Idanre', 'Ifedore', 'Ilaje', 'Ile Oluji/Okeigbo', 'Irele', 'Odigbo', 'Okitipupa', 'Ondo East', 'Ondo West', 'Ose', 'Owo'],
        osun: ['Atakumosa East', 'Atakumosa West', 'Aiyedaade', 'Aiyedire', 'Boluwaduro', 'Boripe', 'Ede North', 'Ede South', 'Egbedore', 'Ejigbo', 'Ife Central', 'Ife East', 'Ife North', 'Ife South', 'Ifedayo', 'Ifelodun', 'Ila', 'Ilesa East', 'Ilesa West', 'Irepodun', 'Irewole', 'Isokan', 'Iwo', 'Obokun', 'Odo Otin', 'Ola Oluwa', 'Olorunda', 'Oriade', 'Orolu'],
        oyo: ['Afijio', 'Akinyele', 'Atiba', 'Atisbo', 'Egbeda', 'Ibadan North', 'Ibadan North-East', 'Ibadan North-West', 'Ibadan South-East', 'Ibadan South-West', 'Ibarapa Central', 'Ibarapa East', 'Ibarapa North', 'Ido', 'Irepo', 'Iseyin', 'Itesiwaju', 'Iwajowa', 'Kajola', 'Lagelu', 'Ogbomosho North', 'Ogbomosho South', 'Ogo Oluwa', 'Olorunsogo', 'Oluyole', 'Ona Ara', 'Orelope', 'Ori Ire', 'Oyo East', 'Oyo West', 'Saki East', 'Saki West', 'Surulere'],
        plateau: ['Barkin Ladi', 'Bassa', 'Bokkos', 'Jos East', 'Jos North', 'Jos South', 'Kanam', 'Kanke', 'Langtang North', 'Langtang South', 'Mangu', 'Mikang', 'Pankshin', 'Qua\'an Pan', 'Riyom', 'Shendam', 'Wase'],
        rivers: ['Abua/Odual', 'Ahoada East', 'Ahoada West', 'Akuku-Toru', 'Andoni', 'Asari-Toru', 'Bonny', 'Degema', 'Eleme', 'Emohua', 'Etche', 'Gokana', 'Ikwerre', 'Khana', 'Obio/Akpor', 'Ogba/Egbema/Ndoni', 'Ogu/Bolo', 'Okrika', 'Omuma', 'Opobo/Nkoro', 'Oyigbo', 'Port Harcourt', 'Tai'],
        sokoto: ['Binji', 'Bodinga', 'Dange Shuni', 'Gada', 'Goronyo', 'Gudu', 'Gwadabawa', 'Illela', 'Isa', 'Kebbe', 'Kware', 'Rabah', 'Sabon Birni', 'Shagari', 'Silame', 'Sokoto North', 'Sokoto South', 'Tambuwal', 'Tangaza', 'Tureta', 'Wamako', 'Wurno', 'Yabo'],
        taraba: ['Ardo Kola', 'Bali', 'Donga', 'Gashaka', 'Gassol', 'Ibi', 'Jalingo', 'Karim Lamido', 'Kumi', 'Lau', 'Sardauna', 'Takum', 'Ussa', 'Wukari', 'Yorro', 'Zing'],
        yobe: ['Bade', 'Bursari', 'Damaturu', 'Fika', 'Fune', 'Geidam', 'Gujba', 'Gulani', 'Jakusko', 'Karasuwa', 'Machina', 'Nangere', 'Nguru', 'Potiskum', 'Tarmuwa', 'Yunusari', 'Yusufari'],
        zamfara: ['Anka', 'Bakura', 'Birnin Magaji/Kiyaw', 'Bukkuyum', 'Bungudu', 'Gummi', 'Gusau', 'Kaura Namoda', 'Maradun', 'Maru', 'Shinkafi', 'Talata Mafara', 'Tsafe', 'Zurmi'],
        fct: ['Abaji', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali', 'Municipal Area Council']
    }




    const handleStateChange = (selectedOption) => {
        setSelectedState(selectedOption);
        setSelectedLgas(null);


        const lgas = localGovernments[selectedOption?.value] || [];
        setLocalGovernmentOptions(lgas.map(lga => ({ value: lga, label: lga })));

        setOrigin(selectedOption?.value);
    };


    const handlGovChange = (selectedOption) => {
        setSelectedLgas(selectedOption);
        setLocalGov(selectedOption?.value);
    }

    const handleBookingTypeChange = (e) => {
        setIsForSelf(e.target.value === "self");
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        setIsModalOpen(false);
        navigate('/check_rides')
    };

    const handleSearchOrgSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        setIsModalOrgOpen(false);
        toast.success('Ride Created Succesfully');
    };

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [userLocation, setUserLocation] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOrgOpen, setIsModalOrgOpen] = useState(false);
    const [isForSelf, setIsForSelf] = useState(true);
    const [localGov, setLocalGov] = useState("");
    const [selectedState, setSelectedState] = useState(null);
    const [selectedLgas, setSelectedLgas] = useState(null);
    const [localGovernmentOptions, setLocalGovernmentOptions] = useState([]);
    const [origin, setOrigin] = useState("");
    const navigate = useNavigate();

    const [formData] = useState({
        date: '',
        time: '',
        destination: '',
        location: ''
    });

    const handleThemeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };



    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleModalOrgToggle = () => {
        setIsModalOrgOpen(!isModalOrgOpen);
    };



    const handleCloseOrgModal = () => {
        setIsModalOrgOpen(false);
    };


    return (
        <div className={classes.whleBig}>
            <ToastContainer />
            <header className={headerStyles.header}>
                <div className={styles.logoGroup}>
                    <img src={logo} alt="" />
                    <div className={styles.typewriteThings}>
                        <Typewriter

                            options={{
                                strings: [
                                    "Burlixque",
                                    "Welcome Back John",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </div>

                </div>
                <div className={styles.toggloedropdown}>
                    {/* <div className={toggleStyles.toggleContainer}>
                        <label htmlFor="theme">{isDarkMode ? 'Light Theme' : 'Dark Theme'}</label>
                        <Switch
                            id="theme"
                            onChange={handleThemeToggle}
                            checked={isDarkMode}
                            onColor="#ccc"
                            offColor="#ccc"
                            checkedIcon={false}
                            uncheckedIcon={false}
                        />
                    </div> */}
                    <img src={notification} alt='' />
                    <Dropdown openModal={handleModalToggle} openOrgModal={handleModalOrgToggle} />
                </div>


            </header>
            {/* <div className={mapStyles.mapContainer}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyASUh5H7MeQ1j_lYTeAQm-sAFZ7-ukvQSE" }}
                    defaultCenter={defaultCenter}
                    defaultZoom={defaultZoom}
                    center={userLocation || defaultCenter}
                >
                    {userLocation && (
                        <Marker lat={userLocation.lat} lng={userLocation.lng} />
                    )}
                </GoogleMapReact>
            </div> */}

            <div className={classes.top}>
                <img src={avart} alt="Avatar" />
                <div className={classes.text}>
                    <h6>Welcome</h6>
                    <h3>John Doe</h3>
                    <p>Smartest and easiest way to move</p>
                </div>
            </div>

            <div className={classes.tabs}>
                <Link to='/profile'>
                    <div className={classes.first}>
                        <img src={fifth} alt="First Tab" />
                        <div className={classes.tabtext}>
                            <p>Profile</p>
                            <p>View and Manage your profile</p>
                        </div>
                    </div>
                </Link>
                {/* <Link to='/check_rides'> */}
                <div className={classes.first} onClick={handleModalToggle}>
                    <img src={first} alt="First Tab" />
                    <div className={classes.tabtext}>
                        <p>Book a ride</p>
                        <p>Book an already scheduled ride to your destination</p>
                    </div>
                </div>
                {/* </Link> */}
                {/* <Link to='/appraisal'> */}
                <div className={classes.first} onClick={handleModalOrgToggle}>
                    <img src={second} alt="First Tab" />
                    <div className={classes.tabtext}>
                        <p>Organize a ride</p>
                        <p>Organize a ride to a specific location</p>
                    </div>
                </div>
                {/* </Link> */}
                <Link to='/check_myrides'>
                    <div className={classes.first}>
                        <img src={second} alt="First Tab" />
                        <div className={classes.tabtext}>
                            <p>Monitor your ride </p>
                            <p>Monitor you already sceduled ride</p>
                        </div>
                    </div>
                </Link>

                <Link to='#'>
                    <div className={classes.first}>
                        <img src={third} alt="First Tab" />
                        <div className={classes.tabtext}>
                            <p>Customer Service</p>
                            <p>Talk with our customer care fr any assistance</p>
                        </div>
                    </div>
                </Link>
                <Link to='/register/passenger_checkout'>
                    <div className={classes.first}>
                        <img src={seventh} alt="First Tab" />
                        <div className={classes.tabtext}>
                            <p>Pay Now</p>
                            <p>Subscribe to our Monthly Plan</p>
                        </div>
                    </div>
                </Link>
                <Link to='/login'>
                    <div className={classes.first}>
                        <img src={fifth} alt="First Tab" />
                        <div className={classes.tabtext}>
                            <p>Log Out</p>
                        </div>
                    </div>
                </Link>


            </div>


            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                overlayClassName={modalStyles.modalOverlay}
                className={modalStyles.modalContent}
            >
                <div className={modalStyles.modalHeader}>Schedule a Ride</div>
                <p className={modalStyles.absolutePP} onClick={handleCloseModal}>X</p>
                <form onSubmit={handleSearchSubmit}>
                    <div className={modalStyles.formGroup}>
                        <div className={modalStyles.radioGroup}>
                            <label className={modalStyles.radioLabel}>
                                <input
                                    type="radio"
                                    value="self"
                                    checked={isForSelf}
                                    onChange={handleBookingTypeChange}
                                />{" "}
                                For Self
                            </label>
                            <label className={modalStyles.radioLabel}>
                                <input
                                    type="radio"
                                    value="someoneElse"
                                    checked={!isForSelf}
                                    onChange={handleBookingTypeChange}
                                />{" "}
                                For Someone Else
                            </label>
                        </div>

                        {isForSelf ? (
                            <>
                                <div>
                                    <label className={modalStyles.label} htmlFor="date">Date</label>
                                    <input className={modalStyles.input} type="date" id="date" />
                                </div>
                                <div>
                                    <label className={modalStyles.label} htmlFor="time">Time</label>
                                    <input className={modalStyles.input} type="time" id="time" />
                                </div>


                                <p className="bold flex-flex">Destination</p>
                                <div>


                                    <label className={modalStyles.label} htmlFor="destination">Select State</label>
                                    {/* <input className={modalStyles.input} type="text" id="destination" placeholder="Enter destination" required /> */}
                                    <Select
                                        id="destination"
                                        value={selectedState}
                                        onChange={handleStateChange}
                                        options={nigerianStates}
                                        placeholder="Select a state"
                                        isSearchable
                                        className={modalStyles.selecters}
                                    />
                                </div>
                                <div>
                                    <label className={modalStyles.label} htmlFor="stop">Select Bus-stop</label>
                                    <Select
                                        id="stop"
                                        value={selectedLgas}
                                        onChange={handlGovChange}
                                        options={localGovernmentOptions}
                                        placeholder="Select a bus-stop"
                                        isSearchable
                                        className={modalStyles.selecters}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <label className={modalStyles.label} htmlFor="location">Location</label>
                                    <input className={modalStyles.input} type="text" id="location" placeholder="Enter location" required />
                                </div>
                                <div>
                                    <label className={modalStyles.label} htmlFor="date">Date</label>
                                    <input className={modalStyles.input} type="date" id="date" required />
                                </div>
                                <div>
                                    <label className={modalStyles.label} htmlFor="time">Time</label>
                                    <input className={modalStyles.input} type="time" id="time" required />
                                </div>
                                <p className="bold flex-flex">Destination</p>
                                <div>


                                    <label className={modalStyles.label} htmlFor="destination">Select State</label>
                                    {/* <input className={modalStyles.input} type="text" id="destination" placeholder="Enter destination" required /> */}
                                    <Select
                                        id="destination"
                                        value={selectedState}
                                        onChange={handleStateChange}
                                        options={nigerianStates}
                                        placeholder="Select a state"
                                        isSearchable
                                        className={modalStyles.selecters}
                                    />
                                </div>
                                <div>
                                    <label className={modalStyles.label} htmlFor="stop">Select Bus-stop</label>
                                    <Select
                                        id="stop"
                                        value={selectedLgas}
                                        onChange={handlGovChange}
                                        options={localGovernmentOptions}
                                        placeholder="Select a bus-stop"
                                        isSearchable
                                        className={modalStyles.selecters}
                                    />
                                </div>
                            </>
                        )}
                    </div>

                    <div className={modalStyles.modalFooter}>
                        <button type="submit" className={modalStyles.submitButton}>Search</button>
                    </div>
                </form>
            </Modal>


            <Modal
                isOpen={isModalOrgOpen}
                onRequestClose={handleCloseOrgModal}
                overlayClassName={modalStyles.modalOverlay}
                className={modalStyles.modalContent}
            >
                <div className={modalStyles.modalHeader}>Create a Ride</div>
                <p className={modalStyles.absolutePP} onClick={handleCloseOrgModal}>X</p>
                <form onSubmit={handleSearchOrgSubmit}>
                    <div className={modalStyles.formGroup}>
                        <>
                            <div>
                                <label className={modalStyles.label} htmlFor="date">Date</label>
                                <input className={modalStyles.input} type="date" id="date" required />
                            </div>
                            <div>
                                <label className={modalStyles.label} htmlFor="time">Time</label>
                                <input className={modalStyles.input} type="time" id="time" required />
                            </div>
                            <div>
                                <label className={modalStyles.label} htmlFor="price">Price</label>
                                <input className={modalStyles.input} type="text" id="price" required />
                            </div>


                            <p className="bold flex-flex">Destination</p>
                            <div>


                                <label className={modalStyles.label} htmlFor="destination">Select State</label>
                                {/* <input className={modalStyles.input} type="text" id="destination" placeholder="Enter destination" required /> */}
                                <Select
                                    id="destination"
                                    value={selectedState}
                                    onChange={handleStateChange}
                                    options={nigerianStates}
                                    placeholder="Select a state"
                                    isSearchable
                                    className={modalStyles.selecters}
                                    required
                                />
                            </div>
                            <div>
                                <label className={modalStyles.label} htmlFor="stop">Select Stops</label>
                                <Select
                                    id="stop"
                                    value={selectedLgas}
                                    onChange={handlGovChange}
                                    options={localGovernmentOptions}
                                    placeholder="Select Stops"
                                    isSearchable
                                    className={modalStyles.selecters}
                                    required
                                />
                            </div>
                        </>

                    </div>

                    <div className={modalStyles.modalFooter}>
                        <button type="submit" className={modalStyles.submitButton}>Create</button>
                    </div>
                </form>
            </Modal>


        </div>
    );
}

export default NewDashboard;
