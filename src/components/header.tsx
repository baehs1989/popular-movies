import { useEffect, useRef } from "react";
import classes from "./header.module.css";

const Header = () => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  
  const clickHome = () => {
    // window.scrollTo({top: 0, behavior: 'smooth'});
    // window.location.reload()
    window.location.href = '/'
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
    <header ref={ref} className={classes.page_header}>
      <nav>
        <div className={classes.trigger_menu}>
          <span className={classes.logo} onClick={clickHome}>The Moive DB</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
