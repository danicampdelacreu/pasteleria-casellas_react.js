import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

import first from '../../assets/img/foto_homePhoto1.webp'
import team from '../../assets/img/foto_homeTeam.webp'
import repost from '../../assets/img/foto_homeRepo.jpeg'
import pastel from '../../assets/img/foto_homePastel.jpeg'
import briox from '../../assets/img/foto_homeBriox.jpeg'
import days from "../../assets/img/foto_homeDays.png"
import drinks from '../../assets/img/foto_homeDrinks.jpeg'


export default function Home(){
    return(
        <main class='allMain'>
            <div class='homePhoto1'>
                <img class='image1' src= { first } />
            </div>
            <div class='homeTeam'>
                <img class='image2' src= { team } />
                <p> 
                    Som la pastisseria de Navàs, un lloc dolç i acollidor on els sabors es converteixen en experiències úniques.
                </p>
                <Link to="/team">Equip</Link>
            </div>
            <div class='homeRepost'>
                <img class='image3' src= { repost } />
                <p> 
                    La màgia de la reposteria pren vida. 
                    Cada dolç és una obra d'art elaborada amb cura i destresa. 
                </p>
                <Link to="/repost">La nostre Reposteria</Link>
            </div>
            <div class='homePastel'>
                <img class='image4' src= { pastel } />
                <p>
                    La nostra pastisseria actua com el lloc on els anhels per les dolçors es transformen en realitat.
                </p>
                <Link to="/pastel">Els nostres Pastissos</Link>
            </div>
            <div class='homeBriox'>
                <img class='image5' src= { briox } />
                <p>
                    La brioixeria és el lloc on el plaer d'un briox excepcional pren forma.
                    Cada briox és un testimoni de la nostra dedicació i amor pel detall. 
                </p>
                <Link to="/briox">Els nostres Brioxios</Link>
            </div>
            <div class='homeDays'>
                <img class='image6' src={ days }  />
                <p>
                    En les ocasions especials, la nostra creativitat pren volada per crear moments inoblidables. 
                    Amb cada data destacada, donem vida a postres únics que capturen l'esperit de la celebració.
                </p>
                <Link to="/days">Productes dies Especials</Link>
            </div>
            <div class='homeDrinks'>
                <img class='image7' src= { drinks }  />
                <p>
                    En el nostre racó de cava, vins i ratafia, ens endinsem en el fascinant món dels sabors i aromes.
                    Vine i brinda amb nosaltres, on la varietat i la qualitat es fonen per celebrar els plaers del paladar.
                </p>
                <Link to="/drinks">Vins i Caves</Link>
            </div>
        </main>
    );
};