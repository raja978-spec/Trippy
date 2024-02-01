import { useState } from "react"
import './plans.css'
export default function Plans({ data }) {

    const [showIcon, setShowIcon] = useState(false)
    const [showDes, setShowDes] = useState('')

    const d = data;

    const showIcons = () => {
        setShowIcon(!showIcon)
        setShowDes(
            (currrentDes) => {
                if (currrentDes === '') setShowDes(d.description)
                if (currrentDes.length > 0) setShowDes('')
            }
        )
    }
    return (
        <>
            <div className="plan-drop-card" >
                <div style={{
                    maxHeight: showDes !== '' ? '200px' : '100px',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-in'
                }}>
                    <p style={{ fontWeight: "bold" }}>Day {d.day}: {d.title}
                    </p>
                    <p style={{ textAlign: "start" }}>
                        {
                            showDes
                        }

                    </p>

                </div>

                <i style={{ cursor: "pointer", color: "orange", marginTop: "10px" }}
                    class={showIcon ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}
                    onClick={showIcons}
                ></i>
            </div>


        </>
    )
}