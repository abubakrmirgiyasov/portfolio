import React, {FC} from 'react';

const HeaderFoo: FC = () => {
    return (
        <React.Fragment>
            <div className={"header-foo"}>
                <div className={"logo"}>
                    <h1 className={"logo-text"}>
                        ABUBAKR
                        <br />
                        MIRGIYASOV
                    </h1>
                </div>
                <div className={"skills-text"}>
                    Full Stack dev
                    <br />
                    22 y.o, Novosibirsk
                </div>
                <div className={"lang-switcher"}>
                    <h1 className={"lang-text"}>
                        <span className={"lang-ru"}>RU</span>
                        <span className={"lang-separator"}></span>
                        <span className={"lang-eng active"}>ENG</span>
                    </h1>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HeaderFoo;