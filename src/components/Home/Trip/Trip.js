import './Trip.css'
import TripData from './TripData'

export default function Trip() {

    const tripImages = [
        {
            header: "Trip in London",
            imgurl: "https://media.cntraveler.com/photos/598339c9b7a86962e8e27c5d/master/pass/Paris_GettyImages-601763009.jpg",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
        },
        {
            header: "Trip in Indonesia",
            imgurl: "https://th.bing.com/th/id/OIP.Mm6pxw4rYMEC1g6362F3HwHaE8?rs=1&pid=ImgDetMain",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
        },
        {
            header: "Trip in China",
            imgurl: "https://handluggageonly.co.uk/wp-content/uploads/2017/09/Grand-Palace.jpg",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
        }
    ]


    return (
        <div className="trip-main">
            <div style={{ textAlign: "center" }}>
                <h1 style={{ marginBottom: "1rem" }}>Recent Trips</h1>
                <p style={{ opacity: 0.70 }}>
                    You can discover unique destination
                    using Google Maps.
                </p>
            </div>

            <div className='tripCards'>
                {
                    tripImages.map((e) => {
                        return (
                            <TripData h={e.header} p={e.paragraph} i={e.imgurl} />
                        )
                    })
                }
            </div>

        </div>
    )
}