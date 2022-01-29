import { useEffect, useRef } from "react";
import Badge from '@mui/material/Badge';
import {AiOutlineLike} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

import { useTypedSelector } from "../hook/useTypeSelector"
import classes from "./header.module.css";


const Header = () => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const favorite = useTypedSelector(({movies:{list}})=>{
    return list
  })
  const navigate = useNavigate()

  const clickHome = () => {
    // window.scrollTo({top: 0, behavior: 'smooth'});
    // window.location.reload()
    navigate('/')
  }

  useEffect(() => {
    let lastScroll = 0;
    let scrollEvent = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        ref.current.classList.remove(classes.scrollup);
        return;
      }

      if (currentScroll > lastScroll && currentScroll > 40) {
        ref.current.classList.add(classes.scrolldown);
        ref.current.classList.remove(classes.scrollup);
        lastScroll = currentScroll;
        return;
      }

      if (currentScroll < lastScroll) {
        ref.current.classList.add(classes.scrollup);
        ref.current.classList.remove(classes.scrolldown);
        lastScroll = currentScroll;
        return;
      }
    };

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  });

  return (
    <header ref={ref} className={classes.page_header} data-test="header">
      <nav className={classes.nav}>
        <div className={classes.trigger_menu}>
          <span className={classes.logo} onClick={clickHome} data-test="logo">The Moive DB</span>
        </div>
        <div className={classes.favoritebutton} onClick={()=>navigate('/favorite')} data-test="favorite-button">
          <Badge badgeContent={favorite.length} color={"secondary"}>
            <AiOutlineLike/>
          </Badge>
        </div>
      </nav>
    </header>
  );
};

export default Header;
