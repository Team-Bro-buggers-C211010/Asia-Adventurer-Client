import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import locationImg from "../../images/location.png"
import { Bounce } from "react-awesome-reveal";
const customIcon = new L.Icon({
    iconUrl: locationImg ,
    iconSize: [32, 32], // size of the icon
});

const ContactUs = () => {
    const position = [23.8104644,90.3209953]
    return (
        <div className=''>
            <h1 className="text-center text-[#657a42] text-2xl md:text-4xl font-extrabold"><Bounce>Contact Us !!!</Bounce></h1>
            <div className="mt-5 md:mt-10 flex flex-col md:flex-row gap-5 border-2 rounded-xl border-[#657a42] p-2 md:p-5">
                <div className='font-Roboto'>
                    <h1 className="text-lg md:text-2xl font-Montserrat text-base-content font-bold pb-2">Need any help ?</h1>
                    <hr className="border-[#657a42]" />
                    <div className="mt-5 text-base md:text-xl pl-2 text-base-content border-l-2 border-[#657a42]">
                        <h1 className="font-medium">Call 24/7 for any help</h1>
                        <p className="text-lg md:text-2xl font-bold text-[#657a42]">+00 123 456 789</p>
                    </div>
                    <div className="mt-5 text-base md:text-xl pl-2 text-base-content border-l-2 border-[#657a42]">
                        <h1 className="font-medium">Mail to our support team</h1>
                        <p className="text-lg md:text-2xl font-bold text-[#657a42]">support@domain.com</p>
                    </div>
                    <div className="mt-5 text-base md:text-xl pl-2 text-base-content border-l-2 border-[#657a42]">
                        <h1 className="font-medium">Head Office</h1>
                        <p className="text-lg md:text-2xl font-bold text-[#657a42]">Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='w-full'>
                    <MapContainer className="h-72 z-10" center={position} zoom={14} scrollWheelZoom={true} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker icon={customIcon} position={position}>
                            <Popup>
                                Dhaka, Bangladesh
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;