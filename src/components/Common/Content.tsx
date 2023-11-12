import React, {FC} from 'react';
import ImageReveal from "../ScrollReveal/ImageReveal";

const Content: FC = () => {
    return (
        <React.Fragment>
            <div className={"content"}>
                <ImageReveal>
                    <div className={"content-pic"}>
                        <ImageReveal>
                            <h1 className={"content-greed-text"}>
                                Hey I'm Abubakr<span>.</span>
                            </h1>
                        </ImageReveal>
                        <ImageReveal>
                            <h3 className={"content-skill-text"}>
                                I'm a <span>Full Stack Developer.</span>
                            </h3>
                        </ImageReveal>
                        <ImageReveal>
                            <h5 className={"content-description-text"}>
                                I've spent the last four years building and scaling
                                <br /> software for some amazing companies and working as a
                                <br /> freelancer. Let's connect!
                            </h5>
                        </ImageReveal>
                        <ImageReveal>
                            <button className={"btn btn-main"}>
                                Contact me
                            </button>
                        </ImageReveal>
                    </div>
                </ImageReveal>
            </div>
        </React.Fragment>
    );
};


export default Content;
