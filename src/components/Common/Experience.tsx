import React, {FC} from 'react';
import {IExperience} from "../../types/IExperience";
import ImageReveal from "../ScrollReveal/ImageReveal";

interface IExperiencePage {
    experiences: IExperience[];
}

const Experience: FC<IExperiencePage> = ({ experiences }) => {
    return (
        <React.Fragment>
            <ImageReveal>
                <div className={"experience"}>
                    <ImageReveal>
                        <div className={"experience-header"}>
                            <div className={"experience-line"}></div>
                            <h3 className={"experience-title"}>
                                Experience<span>.</span>
                            </h3>
                        </div>
                    </ImageReveal>
                    <ImageReveal>
                        <div className={"experience-card"}>
                            {experiences.map((experience, key) => (
                                <div key={key} className={"experience-item"}>
                                    <div className={"experience-item-header"}>
                                        <div className={"header-name"}>
                                            {experience.companyName}
                                        </div>
                                        <div className={"header-year"}>
                                            {experience.yearOfWork}
                                        </div>
                                    </div>
                                    <div className={"experience-item-position"}>
                                        <div className={"position-name"}>
                                            {experience.position}
                                        </div>
                                        <div className={"position-city"}>
                                            {experience.city}
                                        </div>
                                    </div>
                                    <div className={"experience-item-description"}>
                                        {experience.description}
                                    </div>
                                    <div className={"experience-item-stacks"}>
                                        {experience.stack.map((st, key) => (
                                            <div key={key} className={"stacks-name"}>
                                                {st}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ImageReveal>
                </div>
            </ImageReveal>
        </React.Fragment>
    );
};

export default Experience;