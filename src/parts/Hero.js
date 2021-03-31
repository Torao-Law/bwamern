import React from 'react'


import ImgHero from 'assets/img/Elements/Hero-picture.jpg'
import ImgHeroFrame from 'assets/img/Elements/Hero-frame.jpg'
import IconTravel from 'assets/img/Icons/ic_traveler.svg'
import IconTreasure from 'assets/img/Icons/ic_treasure.svg'
import IconCities from 'assets/img/Icons/ic_cities.svg'


import Button from 'elements/button'
export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }
    return (
        <section className="container pt-4">
            <div className="row align-item-center">
                <div className="col-auto pr-5" style={{ width: 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                    Forget Busy Work,<br />Start Next Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight: "170%"}}>
                        We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                        Show Me Now
                    </Button>
                    <div className="row" style={{ marginTop: "80px" }}>
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img width="36" height="36" src={IconTravel} alt={`${props.data.travelers} travelers`}/>
                            <h6 className="mt-3">
                                {props.data.travelers}{" "}<span className="text-gray-500 font-weight-light">travelers</span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} treasures`}/>
                            <h6 className="mt-3">
                                {props.data.treasures}{" "}<span className="text-gray-500 font-weight-light">treasures</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img width="36" height="36" src={IconCities} alt={`${props.data.cities} cities`}/>
                            <h6 className="mt-3">
                                {props.data.cities}{" "}<span className="text-gray-500 font-weight-light">cities</span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-6 pl-5">
                    <div style={{height: 410, width: 520}}>
                        <img src={ImgHero} alt="Hotels With Table" className="img-fluid position-absolute" style={{margin: "-30px 0 0 -30px", zIndex: 1}} />
                        <img src={ImgHeroFrame} alt="Hotels With Table" className="img-fluid position-absolute" style={{margin: "0 -15px -15px 0" }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
