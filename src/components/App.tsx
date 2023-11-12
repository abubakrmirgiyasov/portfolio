import React, {FC, MouseEventHandler, useEffect, useState} from 'react';
import Menu from "./Header/Menu";
import HeaderFoo from "./Header/HeaderFoo";
import ScrollMain from "./ScrollReveal/ScrollMain";
import Content from "./Common/Content";
import ImageReveal from "./ScrollReveal/ImageReveal";
import About from "./Common/About";
import Projects from "./Common/Projects";
import skills from "../jsons/skills.json";
import projects from "../jsons/projects.json";
import experiences from "../jsons/experiences.json";
import stack from "../jsons/stacks.json";
import ThemeSwitcher from "./Common/ThemeSwitcher";
import Experience from "./Common/Experience";
import Skills from "./Common/Skills";
import Contact from "./Common/Contact";

const App: FC = () => {
    const [windowWidth, setWindowWidth] = useState<number>(0);

    const resizeWindow = (): void => {
        let width: number = window.innerWidth;

        setWindowWidth(width);

        const menu: HTMLDivElement = document.querySelector(".header");
        const hamburgerMenu: HTMLDivElement = document.querySelector(".hamburger-menu");
        const hamburgerMenuChild: HTMLDivElement = document.querySelector(".hamburger");
        const aboutSkills: HTMLDivElement = document.querySelector(".about-skills-list");

        if (width < 768) {
            menu.style.display = "none";
            hamburgerMenu.style.display = "flex";
            aboutSkills.style.display = "none";
            hamburgerMenuChild.addEventListener("click", () => {
                hamburgerMenuChild.classList.toggle("open");
            });
        } else {
            menu.style.display = "block";
            aboutSkills.style.display = "block";
            hamburgerMenu.style.display = "none";
            hamburgerMenuChild.classList.remove("open");
        }
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    return (
        <>
            <ScrollMain>
                <Menu />
            </ScrollMain>
            <div className={"container"}>
                <div className={"main-content"}>
                    <ImageReveal>
                        <HeaderFoo />
                    </ImageReveal>
                    <ImageReveal>
                        <Content />
                        <About skills={skills || []} isShowStack={windowWidth < 768} />
                    </ImageReveal>
                    <ImageReveal>
                        <Projects projects={projects || []} />
                    </ImageReveal>
                    <ThemeSwitcher />
                    <ImageReveal>
                        <Experience experiences={experiences} />
                    </ImageReveal>
                    <ImageReveal>
                        <Skills stack={stack} />
                    </ImageReveal>
                    <ImageReveal>
                        <Contact />
                    </ImageReveal>
                </div>
            </div>
        </>
    );
};

export default App;