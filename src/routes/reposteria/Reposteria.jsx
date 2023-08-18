import './Reposteria.css'

import repost from '../../assets/img/foto_homeRepo.jpeg'

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
                <p>imagen producto</p>
                <p>imagen producto</p>
                <p>imagen producto</p>
                <p>imagen producto</p>
                <p>imagen producto</p>
            </div>
        </div>
    );
};