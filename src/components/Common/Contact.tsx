import React, {FC} from 'react';
import ImageReveal from "../ScrollReveal/ImageReveal";

const Contact: FC = () => {
    return (
        <React.Fragment>
            <ImageReveal>
                <div className={"contact-me"}>
                    <ImageReveal>
                        <div className={"contact-me-header"}>
                            <span className={"header-subtitle"}>
                                Get in touch
                            </span>
                            <h3 className={"header-title"}>Contact Me</h3>
                        </div>
                    </ImageReveal>
                    <div className={"contact-me-container"}>
                        <ImageReveal>
                            <div className={"contact-me-content"}>
                                <h3>Talk to me</h3>
                                <div className={"content-info"}>
                                    <div className={"info-card"}>
                                        <svg xmlns={"http://www.w3.org/2000/svg"}
                                             width={"16"}
                                             height={"16"}
                                             fill={"currentColor"}
                                             className={"bi bi-envelope-at-fill"}
                                             color={"var(--pt-text-color)"}
                                             viewBox={"0 0 16 16"}
                                        >
                                            <path d={"M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"}/>
                                            <path d={"M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"}/>
                                        </svg>
                                        <h3 className={"card-title"}>Email</h3>
                                        <span className={"card-data"}>abubakrmirgiyasov@gmail.com</span>
                                        <a href={"mailto:abubakrmirgiyasov@gmail.com"}
                                           target={"_blank"}
                                           className={"contact-button"}
                                        >
                                            Write Me
                                            <svg xmlns={"http://www.w3.org/2000/svg"}
                                                 width={"16"}
                                                 height={"16"}
                                                 fill={"currentColor"}
                                                 className={"bi bi-caret-right-fill"}
                                                 viewBox={"0 0 16 16"}
                                                 color={"var(--pt-bg-color-success)"}
                                            >
                                                <path d={"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className={"info-card"}>
                                        <svg xmlns={"http://www.w3.org/2000/svg"}
                                             width={"16"}
                                             height={"16"}
                                             fill={"currentColor"}
                                             color={"var(--pt-text-color)"}
                                             className={"bi bi-envelope-at-fill"}
                                             viewBox={"0 0 16 16"}
                                        >
                                            <path d={"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}/>
                                        </svg>
                                        <h3 className={"card-title"}>WhatsApp</h3>
                                        <span className={"card-data"}>abubakrmirgiyasov@gmail.com</span>
                                        <a href={"mailto:abubakrmirgiyasov@gmail.com"}
                                           target={"_blank"}
                                           className={"contact-button"}
                                        >
                                            Write Me
                                            <svg xmlns={"http://www.w3.org/2000/svg"}
                                                 width={"16"}
                                                 height={"16"}
                                                 fill={"currentColor"}
                                                 className={"bi bi-caret-right-fill"}
                                                 viewBox={"0 0 16 16"}
                                                 color={"var(--pt-bg-color-success)"}
                                            >
                                                <path d={"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className={"info-card"}>
                                        <svg xmlns={"http://www.w3.org/2000/svg"}
                                             width={"16"}
                                             height={"16"}
                                             fill={"currentColor"}
                                             color={"var(--pt-text-color)"}
                                             className={"bi bi-envelope-at-fill"}
                                             viewBox={"0 0 16 16"}
                                        >
                                            <path d={"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"}/>
                                        </svg>
                                        <h3 className={"card-title"}>Telegram</h3>
                                        <span className={"card-data"}>abubakrmirgiyasov@gmail.com</span>
                                        <a href={"mailto:abubakrmirgiyasov@gmail.com"}
                                           target={"_blank"}
                                           className={"contact-button"}
                                        >
                                            Write Me
                                            <svg xmlns={"http://www.w3.org/2000/svg"}
                                                 width={"16"}
                                                 height={"16"}
                                                 fill={"currentColor"}
                                                 className={"bi bi-caret-right-fill"}
                                                 viewBox={"0 0 16 16"}
                                                 color={"var(--pt-bg-color-success)"}
                                            >
                                                <path d={"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ImageReveal>
                        <ImageReveal>
                            <div className={"contact-me-content"}>
                                <h3>Write Me your Message</h3>
                                <form className={"contact-form"}>
                                    <div className={"form-control"}>
                                        <label htmlFor={"name"} className={"form-label"}>Name</label>
                                        <input className={"form-input"}
                                               id={"name"}
                                               name={"name"}
                                               placeholder={"Enter your name"}
                                        />
                                    </div>
                                    <div className={"form-control"}>
                                        <label htmlFor={"email"} className={"form-label"}>Email</label>
                                        <input className={"form-input"}
                                               id={"email"}
                                               name={"email"}
                                               placeholder={"Enter your email"}
                                        />
                                    </div>
                                    <div className={"form-control control-text-area"}>
                                        <label htmlFor={"message"} className={"form-label"}>Message</label>
                                        <textarea cols={30}
                                                  rows={10}
                                                  className={"form-input"}
                                                  id={"message"}
                                                  name={"message"}
                                                  placeholder={"Write your message"}
                                        />
                                    </div>
                                    <div className={"form-submit"}>
                                        <button className={"btn btn-main"}>
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </ImageReveal>
                    </div>
                </div>
            </ImageReveal>
        </React.Fragment>
    );
};

export default Contact;