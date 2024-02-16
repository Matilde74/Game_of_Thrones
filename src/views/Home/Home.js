import React from "react";
import Stark from "../../assets/images/flags/Stark_Flag.webp";
import Lannister from "../../assets/images/flags/Lannister_Flag.jpeg";
import Targaryen from "../../assets/images/flags/Targaryen_Flag.png";


function Home (){
    const Flags = [Stark, Lannister, Targaryen];
    const CardFlags = Flags.map ((flag) => {
        return (
            <img src={flag} alt="flag"/>
        )
    });
    const Houses = ["House Stark", "House Lannister", "House Targaryen"];
    const CardHouses = Houses.map((house) =>{
        return (
            <h1> {house} </h1>
        )
    });




    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">

                    <div className="my-5 text-center">

                        <div className="my-5 text-center">
                            <div>
                                {CardFlags}
                                {CardHouses}
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )



};



export default Home;