import React, {CSSProperties, FC, useEffect, useRef} from 'react';
import {IReveal} from "../../types/IReveal";
import {motion, useAnimation, useInView} from "framer-motion";

const ImageReveal: FC<IReveal> = ({ children, width = "100%" }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect( () => {
        async function fetchData() {
            if (isInView) {
                await mainControls.start("visible");
                await slideControls.start("visible");
            }
        }

        fetchData();
    }, [isInView]);

    const styles: CSSProperties = {
        position: "relative",
        width: width,
        overflow: "hidden"
    };

    const motionCss: CSSProperties = {
        position: "absolute",
        top: 0,
        bottom: 1,
        left: 0,
        right: 0,
        background: "var(--#{$prefix}-font-family-secondary)",
        zIndex: 20,
        display: "none",
    };

    return (
        <React.Fragment>
            <div ref={ref} style={styles}>
                <motion.div
                    initial={"hidden"}
                    animate={mainControls}
                    transition={{
                        duration: 0.5,
                        delay: 0.25
                    }}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    {children}
                </motion.div>
                <motion.div
                    initial={"hidden"}
                    animate={slideControls}
                    style={motionCss}
                    transition={{
                        duration: 0.5,
                        delay: 0.25,
                        ease: "easeIn"
                    }}
                    variants={{
                        hidden: { x: 0 },
                        visible: { x: 1 }
                    }}
                >
                    {children}
                </motion.div>
            </div>
        </React.Fragment>
    );
};

export default ImageReveal;