import React from 'react'
import './Content.css'

function Content() {
  return (
    <>
    
        <div className="content">

            <div className="introduction" id="Introduction">
                <p className="introduction-title">M &nbsp; A &nbsp; N &nbsp; A &nbsp; L &nbsp; I &nbsp; .</p>
                <p className="introduction-description">MANALI IS A QUIET HYMN IN HIGH PLACES — A TOWN WHERE MOUNTAINS BREATHE AND TIME SOFTENS. <br />
                EVERY STREET, RIVER AND RIDGE FEELS LIKE A HAND-DRAWN POSTCARD: INTIMATE, VAST, UNEXPECTEDLY TENDER.<br />
                HERE YOU ARRIVE HEAVY AND LEAVE LUMINOUS — CARRYING A QUIETER HEART AND A MAP OF REMEMBERED LIGHT.
                </p>
            </div>

            <div className="border"></div>

            <div className="geography" id="Geography">
                <p className="geography-title">G &nbsp; E &nbsp; O &nbsp; G &nbsp; R &nbsp; A &nbsp; P &nbsp; H &nbsp; Y &nbsp; .</p>
                <p className="geography-description">
                    CRADLED IN THE KULLU VALLEY, MANALI SITS BETWEEN ANCIENT CEDAR FORESTS AND JAGGED ALPINE PEAKS. <br />
                    THE BEAS RIVER THREADS THE TOWN, SILVER AND PATIENT, CARVING VALLEYS AND STORIES THROUGH STONE. <br />
                    THIS LANDSCAPE IS LIVING ARCHITECTURE — RIDGELINES, TERRACES AND GULLIES SHAPED BY WIND, WATER AND TIME.
                </p>
            </div>

            <div className="border"></div>

            <div className="seasons" id="Seasons">
                <p className="seasons-title">S &nbsp; E &nbsp; A &nbsp; S &nbsp; O &nbsp; N &nbsp; S &nbsp; .</p>
                <div className="seasons-description">
                    <div className="winter">
                        <p className="winter-title">W &nbsp; I &nbsp; N &nbsp; T &nbsp; E &nbsp; R &nbsp; .</p>
                        <p className="winter-description">
                            WINTER DRESSES THE VALLEY IN SLOW, IMMACULATE SNOW <br />
                            — A HUSH THAT MAKES THE WORLD FEEL SACRED.
                        </p>
                    </div>
                    <div className="summer">
                        <p className="summer-title">S &nbsp; U &nbsp; M &nbsp; M &nbsp; E &nbsp; R &nbsp; .</p>
                        <p className="summer-description">
                            SUMMER OPENS THE HILLS INTO GREEN CATHEDRALS OF LIGHT, WHERE COOL BREEZES CARRY WILDFLOWER PERFUME.
                        </p>
                    </div>
                    <div className="monsoon">
                        <p className="monsoon-title">M &nbsp; O &nbsp; N &nbsp; S &nbsp; O &nbsp; O &nbsp; N &nbsp; .</p>
                        <p className="monsoon-description">
                            MONSOON WRAPS THE VALLEY IN EMERALD AND MIST, EVERY RAINFALL A SOFT REMEMBERING OF RIVERS.
                        </p>
                    </div>
                </div>
            </div>

            <div className="border"></div>

            <div className="attractions" id="Attractions">
                <p className="attractions-title">A &nbsp; T &nbsp; T &nbsp; R &nbsp; A &nbsp; C &nbsp; T &nbsp; I &nbsp; O &nbsp; N &nbsp; S &nbsp; .</p>
                <div className="attractions-description">
                    <div className="hadimbadevitemple">
                        <p className='hadimbadevitemple-title'>H &nbsp;A &nbsp;D &nbsp;I &nbsp;M &nbsp;B &nbsp;A &nbsp; <br /> D &nbsp;E &nbsp;V &nbsp;I &nbsp; &nbsp; T &nbsp;E &nbsp;M &nbsp;P &nbsp;L &nbsp;E &nbsp; .</p>
                        <p className='hadimbadevitemple-description'>A CEDAR-SHADOWED SANCTUARY THAT FEELS OLDER THAN WEATHER, WHERE PRAYER AND FOREST BREATHE TOGETHER.</p>
                    </div>
                    <div className="manikarangurudwara">
                        <p className='manikarangurudwara-title'>M &nbsp;A &nbsp;N &nbsp;I &nbsp;K &nbsp;A &nbsp;R &nbsp;A &nbsp; N <br /> G &nbsp;U &nbsp;R &nbsp;U &nbsp;D &nbsp;W &nbsp;A &nbsp;R &nbsp;A &nbsp; .</p>
                        <p className='manikarangurudwara-description'>SACRED STEAM AND SHARED LANGAR — WARMTH AND FAITH RISING BESIDE THE RIVER.</p>
                    </div>
                    <div className="rohtangpass">
                        <p className='rohtangpass-title'>R &nbsp;O &nbsp;H &nbsp;T &nbsp;A &nbsp;N &nbsp;G <br /> P &nbsp;A &nbsp;S &nbsp;S &nbsp; .</p>
                        <p className='rohtangpass-description'>A CRYSTALLINE THRESHOLD WHERE HORIZONS WIDEN AND SILENCE STRETCHES LIKE A NEW SKY.</p>
                    </div>
                    <div className="solangvalley">
                        <p className='solangvalley-title'>S &nbsp;O &nbsp;L &nbsp;A &nbsp;N &nbsp;G <br /> V &nbsp;A &nbsp;L &nbsp;L &nbsp;E &nbsp;Y &nbsp; .</p>
                        <p className='solangvalley-description'>AN AMPHITHEATER OF MOTION — OPEN SKY, SNOW, AND PLAY STITCHED INTO A SINGLE BREATH.</p>
                    </div>
                    <div className="vashishthotsprings">
                        <p className='vashishthotsprings-title'>V &nbsp;A &nbsp;S &nbsp;H &nbsp;I &nbsp;S &nbsp;H &nbsp;T <br /> H &nbsp; O &nbsp;T <br /> &nbsp;S &nbsp;P &nbsp;R &nbsp;I &nbsp;N &nbsp;G &nbsp;S &nbsp; .</p>
                        <p className='vashishthotsprings-description'>HIDDEN THERMAL POOLS THAT SURFACE LIKE QUIET LUXURY FROM THE MOUNTAIN’S COOL BONES.</p>
                    </div>
                </div>
            </div>

            <div className="border"></div>

            <div className="adventures" id="Adventures" >
                <p className="adventures-title">A &nbsp; D &nbsp; V &nbsp; E &nbsp; N &nbsp; T &nbsp; U &nbsp; R &nbsp; E &nbsp; S &nbsp; .</p>
                <div className="adventures-description">
                    <div className="paragliding">
                        <p className='paragliding-title'>P &nbsp;A &nbsp;R &nbsp;A &nbsp;G &nbsp;L &nbsp;I &nbsp;D &nbsp;I &nbsp;N &nbsp;G &nbsp; .</p>
                        <p className='paragliding-description'>FLOAT ABOVE VALLEYS AND LEARN THE GEOGRAPHY OF WIND — EFFORTLESS, SOARING CLARITY.</p>
                    </div>
                    <div className="riding">
                        <p className='riding-title'>R &nbsp;I &nbsp;D &nbsp;I &nbsp;N &nbsp;G &nbsp; .</p>
                        <p className='riding-description'>TWIST ALONG HIGH ROADS WHERE EVERY BEND REWARDS THE BOLD WITH A NEW PANORAMA.</p>
                    </div>
                    <div className="riverrafting">
                        <p className='riverrafting-title'>R &nbsp;I &nbsp;V &nbsp;E &nbsp;R &nbsp;<br /> R &nbsp; A &nbsp;F &nbsp;T &nbsp;I &nbsp;N &nbsp;G &nbsp; .</p>
                        <p className='riverrafting-description'>ICY RAPIDS THAT SHARPEN THE LAUGH AND MAKE THE MOMENT ELECTRIC.</p>
                    </div>
                    <div className="skiing">
                        <p className='skiing-title'>S &nbsp;K &nbsp;I &nbsp;I &nbsp;N &nbsp;G &nbsp; .</p>
                        <p className='skiing-description'>CARVE CLEAN LINES DOWN UNTOUCHED SLOPES, WHERE SPEED BECOMES A QUIET CELEBRATION.</p>
                    </div>
                    <div className="trekking">
                        <p className='trekking-title'>T &nbsp;R &nbsp;E &nbsp;K &nbsp;K &nbsp;I &nbsp;N &nbsp;G &nbsp; .</p>
                        <p className='trekking-description'>STEP ALONG TRAILS THAT CHANGE YOU SLOWLY; EVERY RIDGE OPENS A HUMBLER, VASTER SKY.</p>
                    </div>
                </div>
            </div>

            <div className="border"></div>

            <div className="peopleandculture" id="PeopleandCulture">
                <p className="peopleandculture-title">P &nbsp; E &nbsp; O &nbsp; P &nbsp; L &nbsp; E &nbsp; &nbsp; & &nbsp; &nbsp; C &nbsp; U &nbsp; L &nbsp; T &nbsp; U &nbsp; R &nbsp; E &nbsp; .</p>
                <p className="peopleandculture-description">
                    THE PEOPLE OF MANALI CARRY MOUNTAIN CALM IN THEIR VOICES — GENTLE, PATIENT, WELCOMING. <br />
                    TRADITION ARRIVES WARMLY: WOOD-SMOKED KITCHENS, FESTIVAL RHYTHM, AND CRAFTS THAT KEEP STORIES ALIVE. <br />
                    LIFE HERE IS MODEST IN MEASURE AND IMMENSE IN MEMORY — RITUAL AND KINDNESS WOVEN INTO DAILY BREATH.
                </p>
            </div>

            <div className="border"></div>

            <div className="gallery" id="Gallery">
                <p className="gallery-title">G &nbsp; A &nbsp; L &nbsp; L &nbsp; E &nbsp; R &nbsp; Y &nbsp; .</p>
                <div className="gallery-description">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                    <div className="four"></div>
                    <div className="five"></div>
                </div>
            </div>

            <div className="gallery-2">
                <div className="six"></div>
                <div className="seven"></div>
                <div className="eight"></div>
                <div className="nine"></div>
                <div className="ten"></div>
            </div>

        </div>
    
    </>
  )
}

export default Content