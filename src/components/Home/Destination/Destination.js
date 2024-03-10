import './Destination.css'
import DestinationData from './DestinationData'
import { useTranslation } from 'react-i18next';
import { strings } from '../../../i18n';

export default function Destination() {

    const {t}=useTranslation();

    return (

        <div className="destination-main">
            <div>
                <h1>{strings("Popular Destinations")}</h1>
                <p style={{ opacity: 0.70 }}>
                {strings("Tours give you the opportunity to see a lot within a time frame")}</p>
            </div>

            <DestinationData header={strings("Tall Volcano Batangas")}
                text={" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                img1={"https://image.cnbcfm.com/api/v1/image/104548012-St_lucia.jpg?v=1532563814"}
                img2={"https://handluggageonly.co.uk/wp-content/uploads/2019/05/Hand-Luggage-Only-20.jpg"}
            />

            <DestinationData header={strings("Mt. Daguldul, Batangas")}
                text={" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                img1={"https://cdn.wallpapersafari.com/78/25/JU9bGD.jpg"}
                img2={"https://cdn.wallpapersafari.com/12/84/lp7tJk.jpg"}
                classname={"firt-destination-reverse"}
            />

        </div>
    )
}