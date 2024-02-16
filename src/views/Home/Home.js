import React from "react";
import HousesData from "../../assets/data/houses.json";
import CharactersCard from "../../components/CharactersCard/CharactersCard";



function Home (){
    const HouseCardsCol = HousesData.map((house) => {
        return (
            <div key={house.id} className="col">
                <CharactersCard
                    name={house.name}
                    image={house.imageUrl}
                />
            </div>
        )
    });




    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">

                    <div className="my-5 text-center">

                        <div className="my-5 text-center">
                            {HouseCardsCol}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )



};



export default Home;