import { Dumbbell } from "lucide-react";
import Workout from "../../../../public/workout.gif"

export default function TrainingPage() {
    return <>
        <div className="flex items-center justify-center h-screen">
            <div className="card">
                <div className="content">
                    <div className="back">
                        <div className="back-content">
                            <svg stroke="#ffffff" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="60px" width="60px" fill="#ffffff">

                                {/* <g strokeWidth="0" id="SVGRepo_bgCarrier"></g> */}

                                {/* <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g> */}
                                <Dumbbell size={50} />
                            </svg>
                            <strong>Apunta encima, Vayolet xd</strong>
                        </div>
                    </div>
                    <div className="front">

                        <div className="img">
                            <div className="circle">
                            </div>
                            <div className="circle" id="right">
                            </div>
                            <div className="circle" id="bottom">
                            </div>
                        </div>

                        <div className="front-content">
                            <small className="badge">Buena suerte</small>
                            <img src={Workout.src} alt="image" width={200} />
                            <div className="description">
                                <div className="title">
                                    <p className="title">
                                        <strong>Buena suerte </strong>
                                    </p>
                                    {/* <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style={""} text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg> */}
                                </div>
                                <p className="card-footer">
                                    Sé que hoy vuelves al gym, pero sinceramente lo que más admiro no es eso… sino las ganas que tienes de seguir 
                                    cuidándote incluso cuando la vida te cansa. Eso te hace muy bonita.
                                    :v
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}