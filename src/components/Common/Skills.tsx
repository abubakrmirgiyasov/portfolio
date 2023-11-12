import React, {FC} from 'react';
import {IStack} from "../../types/IStack";
import ImageReveal from "../ScrollReveal/ImageReveal";

interface ISkillsPage {
    stack: IStack;
}

const Skills: FC<ISkillsPage> = ({ stack }) => {
    return (
        <React.Fragment>
            <ImageReveal>
                <div className={"skills"}>
                    <ImageReveal>
                        <div className={"skills-header"}>
                            <div className={"skills-line"}></div>
                            <h3 className={"skills-title"}>
                                Skills<span>.</span>
                            </h3>
                        </div>
                    </ImageReveal>
                    <ImageReveal>
                        <div className={"skills-card"}>
                            <ImageReveal>
                                <div className={"skills-frontend"}>
                                    <h3 className={"skills-frontend-title"}>Frontend Development</h3>
                                    <div className={"content"}>
                                        {stack.frontend.map((fr, key) => (
                                            <div key={key} className={"experience-item"}>
                                                <svg xmlns={"http://www.w3.org/2000/svg"}
                                                     width={"16"}
                                                     height={"16"}
                                                     fill={"currentColor"}
                                                     color={"var(--pt-bg-color-success)"}
                                                     className={"bi bi-patch-check-fill"}
                                                     viewBox={"0 0 16 16"}
                                                >
                                                    <path d={"M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"}/>
                                                </svg>
                                                <div>
                                                    <h3 className={"experience-name"}>
                                                        {fr.name}
                                                    </h3>
                                                    <span className={"experience-level"}>
                                                {fr.level}
                                            </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ImageReveal>
                            <ImageReveal>
                                <div className={"skills-backend"}>
                                    <h3 className={"skills-backend-title"}>Backend Development</h3>
                                    <div className={"content"}>
                                        {stack.backend.map((fr, key) => (
                                            <div key={key} className={"experience-item"}>
                                                <svg xmlns={"http://www.w3.org/2000/svg"}
                                                     width={"16"}
                                                     height={"16"}
                                                     fill={"currentColor"}
                                                     color={"var(--pt-bg-color-success)"}
                                                     className={"bi bi-patch-check-fill"}
                                                     viewBox={"0 0 16 16"}
                                                >
                                                    <path d={"M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"}/>
                                                </svg>
                                                <div>
                                                    <h3 className={"experience-name"}>
                                                        {fr.name}
                                                    </h3>
                                                    <span className={"experience-level"}>
                                                {fr.level}
                                            </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ImageReveal>
                        </div>
                    </ImageReveal>
                </div>
            </ImageReveal>
        </React.Fragment>
    );
};

export default Skills;