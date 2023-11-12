import React, {FC} from 'react';
import {menu} from "../../helpers/menuData";

const Menu: FC = () => {
    return (
        <React.Fragment>
            <div className={"header"}>
                <nav className={"header-nav"}>
                    <ul className={"nav-ul"}>
                        {menu.map((value, key) => (
                            <li key={key} className={`li-item${value.active ? " active" : ""}`}>{value.name}</li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className={"hamburger-menu"}>
                <div className={"logo-menu"}>
                    <p>ABUBAKR <br /> MIRGIYASOV</p>
                    <p className={"logo-foo"}>
                        Full Stack dev
                        <br />
                        22 y.o, Novosibirsk
                    </p>
                </div>
                <div className={"hamburger"}>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={"cross"}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Menu;