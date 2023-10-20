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


export default function Home() {
    return (
        <main class='allMain'>
            <div class='homePhoto1'>
                <img class='image1' src={first} />
            </div>
            <div class='homeTeam'>
                <img class='image2' src={team} />
                <Link to="/team">Nosaltres</Link>
                <p>
                    Som la pastisseria de Navàs, un lloc dolç i acollidor on els sabors <br /> es converteixen en experiències úniques.
                </p>

            </div>
            <div class='homeRepost'>
                <img class='image3' src={repost} />
                <Link to="/repost">Reposteria</Link>
                <p>
                    La màgia de la reposteria pren vida.<br />
                    Cada dolç és una obra d'art elaborada amb cura i destresa.
                </p>
            </div>
            <div class='homePastel'>
                <img class='image4' src={pastel} />
                <Link to="/pastel">Pastissos</Link>
                <p>
                    La nostra pastisseria actua com el lloc on els anhels per les dolçors es <br />transformen en realitat amb multiples opcions .
                </p>
            </div>
            <div class='homeBriox'>
                <img class='image5' src={briox} />
                <Link to="/briox">Brioxios</Link>
                <p>
                    La brioixeria és el lloc on el plaer d'un briox excepcional pren forma.<br />
                    Cada briox és un testimoni de la nostra dedicació i amor pel detall.
                </p>
            </div>
            <div class='homeDays'>
                <img class='image6' src={days} />
                <Link to="/days">Productes Especials</Link>
                <p>
                    En les ocasions especials, la nostra creativitat pren volada<br /> per crear moments inoblidables
                    Amb cada data destacada, donem vida a<br /> postres únics que capturen l'esperit de la celebració.
                </p>

            </div>
            <div class='homeDrinks'>
                <img class='image7' src={drinks} />
                <Link to="/drinks">Celler</Link>
                <p>
                    En el nostre racó de cava, vins i ratafia, ens endinsem en el<br />fascinant món dels sabors i aromes.
                    Vine i brinda amb nosaltres, on la varietat i <br />la qualitat es fonen per celebrar els plaers del paladar.
                </p>

            </div>
        </main>
    );
};