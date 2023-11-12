import React, {FC} from 'react';
import { motion } from "framer-motion";
import {IReveal} from "../../types/IReveal";

const ScrollMain: FC<IReveal> = ({ children, width = "100%" }) => {
    const styles = {
        position: "relative",
        width: width,
        overflow: "hidden"
    };

    return (
        <React.Fragment>
            <div style={styles}>
                <motion.div
                    initial={"hidden"}
                    animate={"visible"}
                    transition={{
                        duration: 0.5,
                        delay: 0.25,
                    }}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    {children}
                </motion.div>
            </div>
        </React.Fragment>
    );
};

export default ScrollMain;