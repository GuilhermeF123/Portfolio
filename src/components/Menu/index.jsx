import React from 'react';
import style from './Menu.module.css';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <>
            <div className={style.menu}>
                <div class="linha">
                    <header>
                        <div class="coluna col4">
                            <h1 className={style.logo}>Guilherme Felipe</h1>
                        </div>
                        <div class="coluna col8">
                            <nav>
                                <ul class="menu inline sem-marcador">
                                    <b><li><Link to="/sobre">home</Link></li></b>
                                    <b><li><Link to="/experiencias">sobre mim</Link></li></b>
                                    <b><li><Link to="/projetos">projetos</Link></li></b>
                                    <b><li><Link to="/contato">contato</Link></li></b>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}
export default Menu;