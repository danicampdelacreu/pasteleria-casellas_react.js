import './Reposteria.css'

import repost from '../../assets/img/foto_homeRepo.jpeg'
import lioneses from '../../assets/img/lionesa.jpeg'
import coco from '../../assets/img/coco.jpeg'
import trufes from '../../assets/img/trufas.jpeg'
import boles from '../../assets/img/bolas avellana.jpeg'
import full from '../../assets/img/pastes de full.jpeg'
import miniMas from '../../assets/img/mini massini.png'
import tocinets from '../../assets/img/tocinillo.webp'
import mantecados from '../../assets/img/mantecado.jpeg'
import galetaAmet from '../../assets/img/galeta almetlla.jpeg'
import galetaXoco from '../../assets/img/galletas xoco almond.jpeg'
import seques from '../../assets/img/pastes seques.jpeg'
import variat from '../../assets/img/variat galetes.jpeg'

export default function Repost() {
    return (
        <div className='repoGeneral'>
            <div className='repoPhoto1'>
                <img src={repost} />
            </div>
            <div className='repoExpli'>
                <h2>Reposteria</h2>
                <p>
                    En la nostra pastisseria, la màgia de la reposteria pren vida. Cada dolç és una obra d'art elaborada amb cura i destresa.
                    Utilitzem ingredients de la més alta qualitat per crear sabors que et transportaran a moments de felicitat.
                    Des de pastissos personalitzats fins a galetes delicades, la nostra varietat de creacions és tan diversa com
                    els somnis dels nostres clients. La nostra passió per la reposteria es tradueix en cada detall, des de les textures
                    fines fins als colors vibrants. Amb un toc modern i un toc de tradició, els nostres postres conviden a tastar i a compartir
                    moments dolços amb els éssers estimats. La nostra pastisseria és el lloc on els desitjos sucrats es fan realitat.
                </p>
            </div>
            <div className='repoTypes'>
                <div className='repoLio'>
                    <img src={lioneses} />
                    <p>  LIONESES <br/> Tenim 3 modelitats de lioneses, Crema , trufa i nata </p>
                    
                </div>
                <div className='repoCoco'>
                    <img src={coco} />
                    <p>  BOLES DE COCO <br/> explicacio</p>
                </div>
                <div className='repoTruf'>
                    <img src={trufes} />
                    <p>  Trufes <br/> explicacio</p>
                </div>
                <div className='repoBoles'>
                    <img src={boles} />
                    <p> Boles xoco amb ametlla <br/> explicacio</p>
                </div>
                <div className='repoFull'>
                    <img src={full} />
                    <p> Pastes de full amb cabell angel <br/> explicacio</p>
                </div>
                <div className='repoMass'>
                    <img src={miniMas} />
                    <p> Els nostres mini massinis <br/> explicacio</p>
                </div>
                <div className='repoToci'>
                    <img src={tocinets} />
                    <p> Tocinets de cel <br/> explicacio</p>
                </div>
                <div className='repoMante'>
                    <img src={mantecados} />
                    <p> Mantecats <br/> explicacio</p>
                </div>
                <div className='repoAmet'>
                    <img src={galetaAmet} />
                    <p> Galetes ametllades <br/> explicacio</p>
                </div>
                <div className='repoXoco'>
                    <img src={galetaXoco} />
                    <p> Galetes xoco llet ametllades <br/> explicacio</p>
                </div>
                <div className='repoPaste'>
                    <img src={seques} />
                    <p> Pastes seques <br/> explicacio</p>
                </div>
                <div className='repoVari'>
                    <img src={variat} />
                    <p> Variat de galetes al gust <br/> explicacio</p>
                </div>
            </div>
        </div>
    );
};