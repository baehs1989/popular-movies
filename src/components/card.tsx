import {useEffect, useRef} from 'react'
import {CgWebsite} from 'react-icons/cg'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

import {Movie} from '../interfaces'
import classes from './card.module.css'
import { useTypedSelector } from "../hook/useTypeSelector"
import {useActions} from '../hook/useAction'

interface CardProps {
    data:Movie;
    onSelectMovie:(movieId:number)=>void
}

const Card:React.FC<CardProps> = ({data, onSelectMovie}) => {
    const heartButton = useRef() as React.MutableRefObject<HTMLInputElement>;
    const card = useRef() as React.MutableRefObject<HTMLInputElement>
    const favorite = useTypedSelector(({movies:{list}})=>{
        return list
    })
    const {addMovie, deleteMovie} = useActions()
    
    /* istanbul ignore next */
    useEffect(()=>{
        const mouseEnterEvent = () => {
            card.current.classList.add(classes.force_focusout)
        }

        const mouseLeaveEvent = () => {
            card.current.classList.remove(classes.force_focusout)
        }


        heartButton.current.addEventListener('mouseenter', mouseEnterEvent)
        heartButton.current.addEventListener('mouseleave', mouseLeaveEvent)
        
        let copy_heartButton = heartButton.current
        return ()=>{
            if (copy_heartButton){
                copy_heartButton.removeEventListener('mouseenter', mouseEnterEvent)
                copy_heartButton.removeEventListener('mouseleave', mouseLeaveEvent)
            }
        }
        
    },[])

    const onClickLikeButton = (event:React.MouseEvent<HTMLDivElement>) =>{
        event.stopPropagation()
        if (favorite.includes(data.id)){
            deleteMovie(data.id)
        }else{
            addMovie(JSON.parse(JSON.stringify(data)))
        }
    }

    return (
        <div ref={card} className={classes.card} onClick={()=>onSelectMovie(data.id)} data-test='card-component'>
            <div className={classes.image}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`} alt={data.title}/>
                <div className={classes.detailIcon} data-test="detail-icon">
                    <CgWebsite/>
                </div>
            </div>
            <div ref={heartButton} className={classes.favorite} onClick={onClickLikeButton}>
                {
                    favorite.includes(data.id)?
                    <AiFillHeart/>
                    :
                    <AiOutlineHeart/>
                }
            </div>
            <div className={classes.content}>
                <div className={classes.title} data-test="title"><h2>{data.title}</h2></div>
                <div className={classes.release_data} data-test="release_date">{data.release_date}</div>
                <div className={classes.genres} data-test="genres">{data.genre_ids.join(', ')}</div>
                <div className={classes.popularity} data-test="popularity">{data.popularity} pts</div>
            </div>
        </div>
    )
}

export default Card