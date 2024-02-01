import { useLocation } from "react-router-dom";
import packageData from "../../packagedata/packagedata";
import { useEffect, useState, useContext } from "react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import './fullpackageview.css'
import Plans from "./plans/plans";
import userContext from "../../../utils/contexts/context";
import BootTour from "../booktour/booktour";

export default function FullPackageView() {

    const location = useLocation();
    const dataid = location.state.id;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => 
        (prevIndex === 0 ? actualData[0].cityImages.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => 
        (prevIndex === actualData[0].cityImages.length - 1 ? 0 : prevIndex + 1));
    };

    const [actualData, setActualData] = useState([]);
   
    // context are used to handel like to
    // all pages
    const Data = useContext(userContext);

    useEffect(() => {
        setActualData(
            Data.contextData.filter((e) => e.id === Number(dataid))
        )
        window.scroll({ top: 0, left: 0, behavior: "instant" })

    }, [])

    /* Used for like icon on div */
    /* With empty dependency it will load image once */
    useEffect(() => {
        if (actualData.length > 0) {
            document.getElementById("img-div").style.backgroundImage = `url(${actualData[0].img})`;
        }
    })


    return (
        <>
            <NavBar />
            <div className="full-package-view-main">
                <div className="full-package-view-sub" >
                    {
                        actualData && actualData.map((e) => (
                            <>
                                <h1 className="full-package-view-header">{e.title}</h1>
                                <p className="full-package-view-location" >
                                    <i style={{ marginRight: "5px" }} class="fa-solid fa-location-dot"></i>
                                    {e.location}
                                </p>

                                <div className="full-package-view-sub0" >

                                    <div className="full-package-view-sub1">
                                        <i class="fa-regular fa-clock"
                                        ></i>
                                        <div className="full-package-view-sub1-txts">
                                            <p>Duration</p>
                                            <p style={{ color: "orange" }}>{e.time}</p>
                                        </div>

                                    </div>
                                    <div className="full-package-view-sub1">
                                        <i class="fa-solid fa-shoe-prints"></i>
                                        <div className="full-package-view-sub1-txts">
                                            <p>Tour Type</p>
                                            <p style={{ color: "orange" }} >Daily Tour</p>
                                        </div>

                                    </div>
                                    <div className="full-package-view-sub1">
                                        <i class="fa-solid fa-people-group"></i>
                                        <div className="full-package-view-sub1-txts" >
                                            <p>Group size</p>
                                            <p style={{ color: "orange" }} >Unlimited</p>
                                        </div>

                                    </div>

                                    <div className="full-package-view-sub1">
                                        <i class="fa-solid fa-language"></i>
                                        <div className="full-package-view-sub1-txts" >
                                            <p>Language</p>
                                            <p style={{ color: "orange" }} >English</p>
                                        </div>

                                    </div>

                                </div>



                                <div id='img-div' className="full-package-view-img-div">

                                    <i className={e.like ? ("fa-solid fa-heart") : ("fa-regular fa-heart")}
                                        onClick={() => Data.handelLike(e.id)}
                                    ></i>
                                </div>


                                <div className="img-div">

                                    <button className="prev-btn" onClick={handlePrevImage}>
                                        <i class="fa-solid fa-arrow-left-long"></i>
                                    </button>
                                    <div className="wrapper">
                                        <img src={actualData.length > 0 && actualData[0].cityImages[currentImageIndex]} className="img" />
                                    </div>
                                    <button className="next-btn" onClick={handleNextImage}>
                                        <i class="fa-solid fa-arrow-right-long"></i>
                                    </button>
                                </div>

                            </>

                        ))
                    }

                    {
                        // Not all place has plan 
                        // so i have used same plans for
                        // place
                        packageData()[0].plans.map((e) => 
                        (
                            <Plans data={e} />
                        ))
                    }
                    <div style={{ marginTop: "30px" }}>
                        <BootTour />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}