<!DOCTYPE html>

    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="./assets/images/small_logo.png" type="image/png" />
            <!-- bootstrap css -->
            <link rel="stylesheet" href="./assets/css/bootstrap.css" />
            <!-- bootstrap grid css -->
            <link rel="stylesheet" href="./assets/css/bootstrap-grid.css" />
            <!-- animate css -->
            <link rel="stylesheet" href="./assets/css/animate.css" />
            <!-- style css -->
            <link rel="stylesheet" href="./assets/css/style.css" />
            <!-- bootstrap icon css -->
            <link rel="stylesheet" href="./assets/css/bootstrap-icon.css" />
            <!-- owl carousel css -->
            <link rel="stylesheet" href="./assets/css/owl.carousel.min.css" />
            <!-- owl carousel theme css -->
            <link rel="stylesheet" href="./assets/css/owl.theme.default.min.css" />

            <!-- RTL css -->
            <!-- <link rel="stylesheet" href="./assets/css/bootstrap.rtl.css" /> -->
            <!-- <link rel="stylesheet" href="./assets/css/rtl.css" /> -->

            <!-- All js -->
            <!-- jquery -->
            <script defer src="./assets/js/jquery.js"></script>
            <!-- bootstrap -->
            <script defer src="./assets/js/bootstrap.bundle.js"></script>
            <!-- owl carousel -->
            <script defer src="./assets/js/owl.carousel.min.js"></script>
            <!-- wow scroll effect -->
            <script defer src="./assets/js/wow.js"></script>
            <!-- custom js -->
            <script defer src="./assets/js/main.js"></script>

            <title>Beepz | Home</title>
        </head>
        <body>
            <!-- header and hero section -->
            <div class="hero__bg">
                <!-- header section -->
                <nav
                    class="navbar navbar-expand-lg bg-transparent fixed-top index__page"
                    id="navbar"
                >
                    <div class="container">
                        <a class="navbar-brand" href="index.html">
                            <img src="./assets/images/logo.png" alt="logo" />
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon">
                                <i class="bi bi-list menu__icon"></i>
                            </span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                                <li class="nav-item">
                                    <a
                                        class="nav-link active text-white"
                                        aria-current="page"
                                        href="index.html"
                                    >
                                        HOME
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="aboutUs.html">ABOUT US</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="contactUs.html"
                                        >CONTACT US</a
                                    >
                                </li>
                                <li class="nav-item d-flex social__media">
                                    <a class="nav-link text-white" href="#">
                                        <img src="./assets/images/facebook.png" alt="facebook" />
                                    </a>
                                    <a class="nav-link text-white" href="#">
                                        <img src="./assets/images/instagram.png" alt="instagram" />
                                    </a>
                                    <a class="nav-link text-white" href="#">
                                        <img src="./assets/images/twitter.png" alt="twitter" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <!-- hero section -->
                <section class="hero__section container">
                    <div
                        class="
                            d-flex
                            flex-column flex-md-row
                            justify-content-between
                            align-items-center
                        "
                    >
                        <div class="hero__left">
                            <div class="small__title">Get Your Car Service Done</div>
                            <div class="large__title">Download The App Now</div>
                            <div class="hero__image">
                                <a href="#" class="">
                                    <img
                                        src="./assets/images/google_play_buton.png"
                                        alt="googlePlayButton"
                                        class="
                                            button__box__shadow__hover
                                            wow
                                            animate__animated animate__bounceInUp animate__fast
                                        "
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="./assets/images/app_store_button.png"
                                        alt="googlePlayButton"
                                        class="
                                            button__box__shadow__hover
                                            wow
                                            animate__animated animate__bounceInUp
                                        "
                                    />
                                </a>
                            </div>
                        </div>
                        <div
                            class="
                                hero__right
                                wow
                                animate__animated animate__bounceInRight animate__slow
                            "
                        >
                            <img src="./assets/images/hero_right_image.png" alt="hero_image" />
                        </div>
                    </div>
                </section>
            </div>

            <!-- testimonial section -->
            <section class="testimonial__section container my-5">
                <div
                    class="
                        d-flex
                        flex-column flex-md-row
                        justify-content-between
                        align-items-center
                    "
                >
                    <div class="testimonial__left">
                        <div class="large__title">
                            Get Your Car Services Done Without Any Hassle
                        </div>
                        <div class="small__title">
                            Without moving from your place , Beepz will assist you to manage your
                            entire car related formalities
                        </div>
                    </div>
                    <div class="testimonial__right">
                        <img
                            src="./assets/images/car_service.png"
                            class="wow animate__animated animate__bounceInRight animate__slower"
                            alt="car__servicing"
                        />
                    </div>
                </div>
            </section>

            <!-- car servicing section -->
            <section class="car__servicing__section container">
                <h3 class="text-left">Services</h3>
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <div
                            class="
                                d-flex
                                align-items-center
                                servicing__card
                                wow
                                animate__animated animate__bounceInLeft animate__slow
                            "
                        >
                            <img
                                src="./assets/images/process_my_claim.png"
                                alt="claimProcess"
                                class="card__image"
                            />
                            <p class="card__text">
                                Process <br />
                                My Claim
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <div
                            class="
                                d-flex
                                align-items-center
                                servicing__card
                                wow
                                animate__animated animate__bounceInUp animate__slow
                            "
                        >
                            <img
                                src="./assets/images/service_my_car.png"
                                alt="carServicing"
                                class="card__image"
                            />
                            <p class="card__text">
                                Service <br />
                                My Car
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <div
                            class="
                                d-flex
                                align-items-center
                                servicing__card
                                wow
                                animate__animated animate__bounceInRight animate__slow
                            "
                        >
                            <img
                                src="./assets/images/repair_my_car.png"
                                alt="carRepair"
                                class="card__image"
                            />
                            <p class="card__text">
                                Repair <br />
                                My Car
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- mobile app slider section -->
            <section class="slider__section">
                <div class="container">
                    <h1 class="h1">Unique App Screens</h1>
                    <p class="p">
                        Get a smart Access to the providers of the full service auto repair &
                        maintenances, select the service , book the appointment and track your car
                        status on the app.
                    </p>

                    <div class="owl-carousel owl-theme slider__images" dir="ltr">
                        <img src="./assets/images/1.png" alt="iPhone-1" />
                        <img src="./assets/images/2.png" alt="iPhone-2" />
                        <img src="./assets/images/3.png" alt="iPhone-3" />
                        <img src="./assets/images/4.png" alt="iPhone-4" />
                        <img src="./assets/images/5.png" alt="iPhone-5" />
                    </div>
                </div>
            </section>

            <!-- app download section -->
            <section class="download__app__section">
                <div class="container">
                    <div
                        class="
                            d-flex
                            flex-column flex-md-row
                            justify-content-between
                            align-items-center
                        "
                    >
                        <div class="left">
                            <h1 class="h1">Download the App Now</h1>
                            <p class="p description">
                                Beepz App puts valuable vehicle ownership resources right at your
                                fingertips . Find your favorite dealership ,schedule service . find
                                Special offers , view your maintenance history and more anytime
                                ,anywhere .
                            </p>
                            <p class="p fs-5">
                                Download on the app store or get it on Google Play .
                            </p>
                            <div class="input-group mb-3 get__app__link">
                                <input
                                    type="tel"
                                    class="form-control"
                                    placeholder="+971"
                                    aria-label="+971"
                                    aria-describedby="get__app__link"
                                />
                                <button class="btn" type="button" id="get__app__link">
                                    Get App Link Now
                                </button>
                            </div>
                            <div class="hero__image">
                                <a href="#" class="">
                                    <img
                                        src="./assets/images/google_play_buton.png"
                                        alt="googlePlayButton"
                                        class="
                                            button__box__shadow__hover
                                            wow
                                            animate__animated animate__bounceInUp animate__fast
                                        "
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="./assets/images/app_store_button.png"
                                        alt="googlePlayButton"
                                        class="
                                            button__box__shadow__hover
                                            wow
                                            animate__animated animate__bounceInUp
                                        "
                                    />
                                </a>
                            </div>
                        </div>
                        <div
                            class="right wow animate__animated animate__bounceInRight animate__slow"
                        >
                            <img
                                src="./assets/images/download-app-image.png"
                                alt="download-app"
                                class="image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <!-- footer -->
            <footer class="footer__section">
                <div class="container">
                    <div
                        class="
                            footer__link
                            d-flex
                            flex-column flex-md-row
                            justify-content-between
                            align-items-md-start
                        "
                    >
                        <div class="contact__us d-flex flex-column">
                            <h4 class="h4">Contact Us</h4>
                            <address>
                                <img
                                    src="./assets/images/location.png"
                                    class="me-2"
                                    alt="location"
                                />
                                <span>Milky way business Center Bani yas Road , Dubai</span>
                            </address>
                            <a href="tel:+971558547342">
                                <img
                                    src="./assets/images/phone-call.png"
                                    class="me-2"
                                    alt="phone-call"
                                />
                                <span>+971558547342</span>
                            </a>
                            <a href="mailto:info@beepz.ae">
                                <img src="./assets/images/mail.png" class="me-2" alt="email" />
                                <span>info@beepz.ae</span>
                            </a>
                        </div>
                        <div class="company d-flex flex-column">
                            <h4 class="h4">Company</h4>
                            <a href="aboutUs.html">About Us</a>
                            <a href="contactUs.html">Contact Us</a>
                        </div>
                        <div class="legal d-flex flex-column">
                            <h4 class="h4">Legal</h4>
                            <a href="termsCondition.html">Terms & Conditions</a>
                            <a href="privacyPolicy.html">Privacy Policy</a>
                        </div>
                        <div
                            class="
                                logo
                                d-flex
                                justify-content-center
                                align-items-center
                                wow
                                animate__animated animate__backInRight animate__slow
                            "
                        >
                            <a href="index.html">
                                <img src="./assets/images/footer-logo.svg" alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            <footer class="copyright__section">
                <div class="container">
                    <div
                        class="
                            d-flex
                            flex-column flex-md-row
                            justify-content-center justify-content-md-between
                            align-items-center
                        "
                    >
                        <p>&copy; <span id="year"></span> Beepz. All Rights Reserved</p>
                        <p>
                            Designed and Developed by
                            <a class="text-white" href="https://royex.ae">Royex Technologies</a>
                        </p>
                    </div>
                </div>
            </footer>
        </body>
    </html>

</html>
