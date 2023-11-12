import React, {FC} from 'react';

const ThemeSwitcher: FC = () => {
    return (
        <React.Fragment>
            <div className={"theme-switcher"}>
                <div className={""}>
                    <button className={"btn btn-theme-switcher"}>
                        <div>Сhange</div>
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ThemeSwitcher;