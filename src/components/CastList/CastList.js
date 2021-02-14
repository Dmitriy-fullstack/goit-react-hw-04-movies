

import Style from '../CastList/cast.module.css'
import defaltImg from './default-img.jpg'

export default function CastList({ casts }) {
    
    return (
        <>
        <ul>
            {casts && casts.map(cast => {
                
                const { id, original_name, profile_path } = cast
                
                return (<li className={Style.cast_item} key={id}>
                    <img className={Style.cast_img} src={profile_path === null ? defaltImg : `https://image.tmdb.org/t/p/original${profile_path}`} alt="profile" />
                    <p>{original_name}</p>
                </li>)
            }
            )
            }
        </ul>
        <span>And Others...</span>
        </>
    )

}