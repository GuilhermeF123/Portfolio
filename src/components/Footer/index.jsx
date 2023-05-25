import React from 'react';
import style from './Footer.module.css';
const Footer = () => {
    return (
        <>
            <div className={style.footer}>
                <div class="linha">
                    <footer>
                        <div class="coluna col12">
                            <b><span>Guilherme Felipe Borba &copy; | 2023</span></b>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}
export default Footer;