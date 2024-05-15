<template>
  <div>

    <!-- Loading Screen -->
    <div id="loader-wrapper">
        <h1 class="loader-logo"><span class="colored">HICORE GAMING</span> TECHNOLOGIES</h1>
        <div id="progress"></div>
        <h3 class="loader-text">LOADING</h3>
    </div>

    <!-- //// HEADER //// -->
    <header id="main-header">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
            <div class="container">
                <!-- Site Logo -->
                <a id="logo" class="navbar-brand" href="#"><NuxtImg class="img-fluid" style="width: 6rem;" img width="35%" src="FPO_logo.png" alt="site logo"/></a>
                <!-- Dropdown Button -->
                <button id="hamburger" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                </button>
                <!-- Navigation Links -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#products">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#team">Team</a>
                        </li>
						<li class="nav-item">
							<a class="nav-link" href="#partners">Partners</a>
						</li>
                        <li class="nav-item">
                            <a class="nav-link" href="#careers">Careers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header><!-- Header End -->

    <!-- /// HERO SECTION /// -->
    <div id="hero-section" class="small-margin">
        <div id="particles-web"></div>
        <div class="row hero-unit">
            <div class="container">
                <div class="hero-caption"><!-- Main Tagline -->
                    <h1>We develop <span class="colored">the future</span></h1>
                </div>
            </div>
        </div>
    </div><!-- Hero Section End -->

    <!-- /// Main Container /// -->
    <div class="container">
        <!-- /// ABOUT SECTION /// -->
        <div id="about" class="large-margin">
            <a href="about"></a><!-- Nav Anchor -->
            <div class="row heading tiny-margin">
                <div class="col-md-auto">
                    <h1 class="animation-element slide-down">ABOUT <span class="colored">US</span></h1>
                </div>
                <div class="col">
                    <hr class="animation-element extend">
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p class="small-margin">At FPO Gaming Technologies, we are passionate about leveraging the power of virtual reality (VR) to make a positive impact on our users. We develop innovative software that is tailored to individual needs, allowing users to explore and experience virtual worlds in ways never before imagined. Our software provides an engaging and immersive experience, allowing users to unlock their potential and have fun while doing so.<br><br>
					VR technology is especially beneficial for medical purposes, as it enables doctors to simulate real-world scenarios and test out different treatments with minimal risk. Additionally, VR can be used to provide immersive, interactive training experiences for medical students, allowing them to develop and practice their skills in a safe, supportive environment.<br><br>
					VR is also usable for training purposes, as it can provide a realistic, life-like environment for users to practice and hone their skills. VR can be combined with other technologies, such as VR treadmills and VR suits, to create a fully immersive experience. This allows users to practice safely, without fear of injury, while still learning the necessary skills.<br><br>
						We are always looking for ways to improve our products and create a better user experience. We are also exploring the development of hardware, such as headsets and controllers, that will to enhance our software and make the VR experience even more realistic. We are committed to pushing the boundaries of what is possible and using VR technology to make a positive impact in the lives of our users. With our innovative virtual reality software, we strive to provide engaging and immersive experiences for users, and unlock each user’s potential.</p>
                </div>
                <div class="col-md-6">
                    <NuxtImg id="support-image" src="placeholder.jpg" data-src="bezirksrundschau.png" class="img-fluid b-lazy" alt="digital collage"/>
                </div>
            </div>
        </div>

        <!-- /// GAMES SECTION /// -->
        <div id="products" class="large-margin">
            <a href="products"></a><!-- Nav Anchor -->
            <div class="row heading tiny-margin">
                <div class="col-md-auto">
                    <h1 class="animation-element slide-down">OUR <span class="colored">SOFTWARES</span></h1>
                </div>
                <div class="col">
                    <hr class="animation-element extend">
                </div>
            </div>
            <div class="row ">
                <div class="col-md-11 small-margin">
                   <p>Here at FPO Gaming Technologies we are constantly evolving our software to ensure that it meets the ever-changing needs of our users. Our goal is to provide the best quality experience, so users can maximize their potential.</p>
                </div>
                <div class="col-md-12">
                    <ul class="game-tags">
                        <li>Sort By Tag :</li>
                        <li><a href="#" data-filter=".new">NEW</a></li>
                        <li><a href="#" data-filter="*">ALL</a></li>
                        <li><a href="#" data-filter=".pc">PC</a></li>
                        <li><a href="#" data-filter=".mobile">MOBILE</a></li>
                    </ul>
                </div>
            </div>
            <div class="games-portfolio ">
                <!-- Game Card Video -->
                <div class="row game-card pc new">
                    <div class="col-lg-12 col-xl-5 game-card-left">
                       <!-- <a href="#" class="js-video-button" data-video-id="DPBW_MFqeRs" data-channel="youtube"> Video link goes here -->
                           <!-- <div class="overlay">
                                <i class="fa fa-play fa-3x"></i>
                            </div> -->
                            <NuxtImg src="placeholder.jpg" data-src="5.jpg" class="img-fluid b-lazy" alt="video thumbnail"/> <!-- Video Thumbnail Img -->
                    </div>
                    <div class="col-lg-12 col-xl-7 game-card-right">
                        <h2 class="short-hr-left">DREAM2HOPE VR</h2>
                        <p class="tags"><span class="subtle">VR Adventure RPG| PC</span> </p>
                        <p class="game-description">Dream2Hope VR is a VR therapeutic software specifically designed for children with serious illnesses to help develop their skills. <span class="expand colored strong" data-toggle="modal" data-target="#game1">Read More</span></p>
                    </div>
                    <br><br>
                    <!-- Modal -->
                    <div class="modal fade game-modal" id="game1" tabindex="-1" role="dialog" aria-labelledby="scales" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title" id="dream2hopevr">DREAM2HOPE VR</h1>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                               <div class="modal-body">
                                   <h2 class="short-hr-left">Complete Tasks</h2>
                                   <p>Upon successful completion of tasks, new tasks will await you, as well as in-game rewards. You can upgrade your character while also improving your own skills. You can learn a foreign language while completing tasks, or even improve your math skills. The active, user-controlled mode also provides a daily workout.</p>
                                   <NuxtImg class="img-fluid" src="task_cookwithingredients.png" alt="screenshot"/>
                                   <br>
                                   <h2 class="short-hr-left">Team Up and Make Friends!</h2>
                                   <p>The multiplayer mode allows you to meet other children from other countries. Together, you can complete tasks that you can't do alone. Reducing isolation and providing the opportunity for social connections takes the gaming experience to a new level.</p>
                                   <NuxtImg class="img-fluid" src="team_up_and_make_friends.png" alt="screenshot"/>
                                   <br>
                                   <h2 class="short-hr-left">Train Your Pets</h2>
                                   <p>In the game, you have the opportunity to improve your own pet, teaching it new things. If you teach it to sit, lie down, and come to you, your faithful companion can also help you find solutions to the tasks you face. You can customize your pet in the game. Give it a name, choose what accessories it wears, what color it should have, or what type of animal it should be. You can have a dragon, a dog, a cat, a turtle, and many other pets.</p>
								   <NuxtImg class="img-fluid" src="meet_the_intelligent_pets_and_npcs.png" alt="screenshot"/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="button secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                     </div>
                </div><!-- Game Card End -->

                <!-- Game Card Video -->
                <div class="row game-card pc new">
                    <div class="col-lg-12 col-xl-5 game-card-left">
                        <a href="trRJoP93azI" class="js-video-button" data-video-id='trRJoP93azI' data-channel="youtube"> <!-- Video link goes here -->
                            <div class="overlay">
                                <i class="fa fa-play fa-3x"></i>
                            </div>
                            <NuxtImg src="placeholder.jpg" data-src="swat.png" class="img-fluid b-lazy" alt="video thumbnail"/> <!-- Video Thumbnail Img -->
                        </a>
                    </div>
                    <div class="col-lg-12 col-xl-7 game-card-right">
                        <h2 class="short-hr-left">EMERGENCY SOS VR</h2>
                        <p class="tags"><span class="subtle">VR Simulation | PC</span> </p>
                        <p class="game-description">Emergency SOS VR can be used to recreate real-life scenarios, allowing trainees to practice and hone their skills in a risk-free environment. Additionally, VR allows for rapid feedback and analysis of performance, allowing for more efficient and effective training. We are developing two versions: one for all rescue units which will include all the equipment and injuries, animated in a very realistic way. The second version will be available to private users, where we will provide an insight into the life of rescue units. This version will have a limited number of scenarios, available equipment, etc. <span class="expand colored strong" data-toggle="modal" data-target="#game2">Read More</span></p>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade game-modal" id="game2" tabindex="-1" role="dialog" aria-labelledby="bedlam" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title" id="emergency sos vr">EMERGENCY SOS VR</h1>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                               <div class="modal-body">
                                   <h2 class="short-hr-left">Real-life Scenarios</h2>
                                   <p>A VR training software for rescue units can provide a realistic, immersive learning experience. With VR, users can practice and refine their skills in a safe, risk-free environment. The software also features customizable scenarios, allowing users to tailor the experience to their specific needs. Additionally, the software allows for the simulation of a variety of emergency situations, from fires to natural disasters and from traffic situations to shooter scenarios, so users can be prepared for whatever circumstances they may encounter in the field. Most of the situations are inspired by real events that have happened.</p>
                                   <NuxtImg class="img-fluid" src="realisticscenarios.png" alt="screenshot"/>
                                   <br>
                                   <h2 class="short-hr-left">Analysis of Performance</h2>
                                   <p>The software also allows for rapid feedback and analysis of performance, so users can quickly adjust their tactics and improve their performance.</p>
                                   <br>
                                   <h2 class="short-hr-left">Realistic Graphics</h2>
                                   <p>Our VR software also displays the injuries realistically*, creating a situation in virtual reality that is as realistic as it would be in everyday life for the rescue teams.<br/>* Only in the full version, which can only be used by rescue units.</p>
								   <NuxtImg class="img-fluid" src="realisticgraphics.png" alt="screenshot"/>
								   <br>
								   <h2 class="short-hr-left">Plenty of equipment available</h2>
                                   <p>Most of the equipment** that can be used in real missions will/have been implemented in the software. Be it firefighter, ambulance or even police equipment, they should be used according to the real-life usage schedule.<br/>
								   ** Most equipment is available in both versions, but some accessories are only available in the training version.</p>
								   <NuxtImg class="img-fluid" src="realisticequipments.png" alt="screenshot"/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="button secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                     </div>
                </div><!-- Game Card End -->
            </div>
        </div>
        <!-- /// CAREERS SECTION /// -->
        <div id="services" class="large-margin">
            <a href="services"></a><!-- Nav Anchor -->
            <div class="row heading tiny-margin">
                <div class="col-md-auto">
                    <h1 class="animation-element slide-down">OUR <span class="colored">SERVICES</span></h1>
                </div>
                <div class="col">
                    <hr class="animation-element extend">
                </div>
            </div>
            <div class="row medium-margin">
                <div class="col-md-11">
                    <h2 class="short-hr-left">Let's check our services</h2>
                    <p>We offer a wide range of services from mobile app and game development to augmented reality, virtual reality, and extended reality development.</p><br>
                </div>
                <div class="col-md-4">
                    <div class="job-card">
                        <h3 class="colored">Android/iOS Development</h3>
                        <p>Apps and Games</p>
                        <button class="button" data-toggle="modal" data-target="#modal1">View Details</button>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="lead-programmer" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2 class="modal-title colored" id="lead-programmer">Android/iOS Development</h2>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>Our team of experienced mobile developers can create custom applications on both Android and iOS platforms. We use the latest technologies and tools to ensure that your app meets your needs and is compatible with all devices. We can create applications from scratch, or we can customize existing applications to fit your needs. Our developers will work with you to ensure that your app is intuitive and easy to use for your customers.</p>
                                    <br>
                                    <h3>Our Android/iOS development services includes:</h3>
                                    <br>
                                    <ul>
                                        <li>Custom mobile applications</li>
                                        <li>Mobile games</li>
                                        <li>Mobile software development</li>
                                        <li>Mobile UI/UX design</li>
                                        <li>Native app development</li>
                                        <li>Cross-platform app development</li>
                                        <li>Third-party Integration</li>
                                        <li>Advertising Integration</li>
                                    </ul>
                                    <br>
                                    <h3>Skills, what we have:</h3>
                                    <br>
                                    <ul>
                                        <li>Knowledge of mobile-specific programming languages such as Java and Swift</li>
                                        <li>UI/UX design</li>
                                        <li>Knowledge of mobile software development kits</li>
                                        <li>Knowledge of mobile security protocols and best practices</li>
                                        <li>Experience with native app development</li>
                                        <li>Experience with cross-platform development</li>
                                        <li>Knowledge of third-party and/or advertising integration</li>
                                    </ul>
                                    <br>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="button secondary" data-dismiss="modal">Close</button>
                                    <a href="mailto:service@fpogaming.tech" class="button">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="job-card">
                        <h3 class="colored">AR/VR/XR Development</h3>
                        <p>PC/Oculust Quest 2</p>
                        <button class="button" data-toggle="modal" data-target="#modal2">View Details</button>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade " id="modal2" tabindex="-1" role="dialog" aria-labelledby="level-designer" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2 class="modal-title colored" id="level-designer">AR/VR/XR Development</h2>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>We provide top-notch AR/VR/XR software and game development services for PC and Oculus Quest 2. Our experienced developers use the latest technologies and tools to create stunning virtual and augmented reality experiences for you. We offer a wide range of services from custom software development to game development, and we always strive to give you the best user experience. We also offer parallel development, allowing us to integrate other hardware such as VR treadmills and suits for use. Try us today and see why we are one of the best in the industry.</p>
                                    <br>
                                    <h3>Our AR/VR/XR services includes:</h3>
                                    <br>
                                    <ul>
                                        <li>Custom software development</li>
                                        <li>Game development</li>
                                        <li>Augmented Reality development</li>
                                        <li>Virtual Reality development</li>
                                        <li>Extended Reality development</li>
                                        <li>Designing/Development of hardwares</li>
                                        <li>Third-party integration</li>
                                        </ul>
                                    <br>
                                    <h3>Skills, what we have:</h3>
                                    <br>
                                    <ul>
                                        <li>Knowledge of virtual and augmented reality platforms</li>
                                        <li>Experience in 3D modeling and animations</li>
                                        <li>Skills in game development languages (C++, C#, Unity)</li>
                                        <li>Experience with UE Blueprints</li>
                                        <li>Knowledge of game engines</li>
                                        <li>Experience in developing for PC and Oculus Quest 2</li>
                                        <li>Knowledge of third-party integration</li>
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="button secondary" data-dismiss="modal">Close</button>
                                    <a href="mailto:service@fpogaming.tech" class="button">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="job-card">
                        <h3 class="colored">Web Development</h3>
                        <p>Design, Build & Maintain</p>
                        <button class="button" data-toggle="modal" data-target="#modal3">View Details</button>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade " id="modal3" tabindex="-1" role="dialog" aria-labelledby="web-development" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2 class="modal-title colored" id="web-development">Web Development</h2>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>We offer a wide range of web development services, from custom website design to e-commerce solutions. Our team of experienced developers will create an outstanding website for you that is optimized for SEO and performance. We use the latest technologies and tools to ensure a smooth and secure experience for your customers. Our developers can also integrate third-party services and features to give your website the edge it needs to stand out from the competition.</p>
                                    <br>
                                    <h3>Our web development services includes:</h3>
                                    <br>
                                    <ul>
                                        <li>Custom website design</li>
                                        <li>E-commerce solutions</li>
                                        <li>Content management systems (CMS)</li>
                                        <li>Web application development</li>
                                        <li>Responsive design</li>
                                        <li>Search engine optimization (SEO)</li>
                                        <li>Website performance optimization</li>
                                        <li>Integration with third-party services and features</li>
                                        <li>Custom plugins and extensions
                                        </li>
                                    </ul>
                                    <br>
                                    <h3>Skills, what we have:</h3>
                                    <br>
                                    <ul>
                                        <li>Knowledge of web development languages such as HTML, CSS, JavaScript and PHP</li>
                                        <li>UI/UX design</li>
                                        <li>Knowledge of content management systems and frameworks such as WordPress and Laravel</li>
                                        <li>Knowledge of databases such as MySQL and MongoDB</li>
                                        <li>Knowledge of source code version control systems such as Git and SVN</li>
                                        <li>Ability to create responsive design</li>
                                        <li>Ability to optimize website for SEO and performance</li>
                                        <li>Knowledge of security protocols and best practices</li>
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="button secondary" data-dismiss="modal">Close</button>
                                    <a href="mailto:service@fpogaming.tech" class="button">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="job-card">
                        <h3 class="colored">Blockchain Services</h3>
                        <p>Building custom Blockchain Solutions</p>
                        <button class="button" data-toggle="modal" data-target="#modal4">View Details</button>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade " id="modal4" tabindex="-1" role="dialog" aria-labelledby="blockchain_services" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2 class="modal-title colored" id="blockchain_services">Blockchain Services</h2>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>Our team of experts can help you build custom blockchain solutions that are tailored to your specific needs. We provide reliable, secure, and cost-effective services to help you create the perfect blockchain system. Our developers will work with you to create a secure and efficient blockchain system that fits the needs of your business.</p>
                                    <br>
                                    <h3>Our blockchain services includes:</h3>
                                    <br>
                                    <ul>
                                        <li>Building custom blockchain solutions</li>
                                        <li>Consulting services</li>
                                        <li>Developing applications for blockchain-based platforms</li>
                                        <li>Consulting on smart contracts</li>
                                        <li>Tokenization services</li>
                                        <li>Security token offering (STO) services</li>
                                        <li>Developing decentralized applications (dApps)</li>
                                        <li>Developing distributed ledger technology (DLT) solutions</li>
                                        <li>Integration blockchain technology into existing systems</li>
                                    </ul>
                                    <br>
                                    <h3>Skills, what we have:</h3>
                                    <br>
                                    <ul>
                                        <li>Knowledge of blockchain technology and fundamentals</li>
                                        <li>Knowledge of distributed ledger technologies (DLT)</li>
                                        <li>Experience with smart contracts development</li>
                                        <li>Experience with cryptocurrency protocols and technologies</li>
                                        <li>Knowledge of blockchain security protocols and best practices</li>
                                        <li>Experience with blockchain development platforms such as Ethereum and Hyperledger</li>
                                        <li>Knowledge of cryptography and hashing algorithms</li>
                                        <li>Understanding of distributed consensus mechanisms</li>
                                        <li>Knowledge of blockchain data structures such as Merkle trees and directed acyclic graphs (DAGs)</li>
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="button secondary" data-dismiss="modal">Close</button>
                                    <a href="mailto:service@fpogaming.tech" class="button">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="job-card">
                        <h3 class="colored">SIM Racing & VR Services</h3>
                        <p>Virtual reality & SIM Racing equipment for rent</p>
                        <button class="button" data-toggle="modal" data-target="#modal5">View Details</button>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade " id="modal5" tabindex="-1" role="dialog" aria-labelledby="sim-racing-and-vr-services" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2 class="modal-title colored" id="sim-racing-and-vr-services">SIM Racing & VR Services</h2>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>We provide world-class virtual reality and simulator racing experiences for events and entertainment. Our team of experienced professionals will ensure that you have a safe and enjoyable experience. We use the latest technologies and tools to provide a realistic and immersive experience for your customers. Our events can be tailored to your needs and we can also provide virtual reality and simulator racing equipment for rent. We also offer a wide range of marketing possibilities at our events, such as branding materials and logo placement on cars. Our services are perfect for corporate events and recruiting sessions, allowing you to engage and interact with potential candidates in a unique and exciting way. We also offer haptic feedback suits, giving you a life-changing experience that is not available from any other company.</p>
                                    <br>
                                    <h3>Our Event services indcludes:</h3>
                                    <br>
                                    <ul>
                                        <li>World-class VR & SIM Racing experience</li>
                                        <li>Safe & enjoyable experience for customers</li>
                                        <li>Latest technologies and tools for realistic and immersive experience</li>
                                        <li>Haptic feedback suits</li>
                                        <li>Haptic feedback gloves</li>
                                        <li>VR treadmills</li>
                                        <li>Full motion simulators</li>
                                        <li>Events tailored to customer needs</li>
                                        <li>Wide range of advertising possibilities</li>
                                        <li>Virtual reality & SIM Racing equipment for rent</li>
                                        <li>Perfect for corporate events and recruiting sessions</li>
                                    </ul>
                                    <br>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="button secondary" data-dismiss="modal">Close</button>
                                    <a href="mailto:service@fpogaming.tech" class="button">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <!-- /// TEAM SECTION /// -->
        <div id="team" class="large-margin">
            <a href="team"></a><!-- Nav Anchor -->
            <div class="row heading tiny-margin">
                <div class="col-md-auto">
                    <h1 class="animation-element slide-down">THE <span class="colored">TEAM</span></h1>
                </div>
                <div class="col">
                    <hr class="animation-element extend">
                </div>
            </div>
            <div class="row medium-margin">
                <div class="col-md-11 tiny-margin">
                    <p>Our passion is to create a virtual reality that can make everyday life easier.</p>
                </div>
                <div id="full-row" class="row text-center">
                    <div class="col-md-3 team-card">
                        <figure>
                            <NuxtImg src="atillakern.png" data-src="atillakern.png" class="img-fluid b-lazy" alt="teammember"/>
                            <figcaption class="team-caption">
                                <p>“I believe that virtual reality can make people's everyday lives easier.”</p>
                                <hr class="hr-short">
                                <ul>
                                    <li><a href="https://www.facebook.com/macroymusic"><i class="fa fa-facebook fa-lg"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/atilla-ferenc-kern-2b58b11a6/"><i class="fa fa-linkedin fa-lg"></i></a></li>
                                </ul>
                            </figcaption>
                        </figure>
                        <p class="team-name">Atilla Ferenc Kern</p>
                        <p class="subtle">CEO, Founder</p>
                    </div>
                </div>
            </div>
		</div>
        <div id="partners" class="large-margin">
			<a href="partners"></a>
			<div class="row heading tiny-margin">
                <div class="col-md-auto">
                    <h1 class="animation-element slide-down">OUR <span class="colored">PARTNERS</span></h1>
                </div>
                <div class="col">
                    <hr class="animation-element extend">
                </div>
            </div>
			<br>
            <div class="grid-gallery">
                <div class="row">
                    <div class="col-md-4 gallery-item">
                        <a href="https://www.fronius.com">
                            <NuxtImg src="fronius.png" data-src="fronius.png" class="img-fluid b-lazy" alt=""/>
                        </a>
                    </div>
					<div class="col-md-4 gallery-item">
                    </div>
					<div class="col-md-4 gallery-item">
                        <a href="https://cyberith.com">
                            <NuxtImg src="cyberith.png" width="200%" data-src="cyberith.png" class="img-fluid b-lazy" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /// CAREERS SECTION /// -->
        <div id="careers" class="large-margin">
            <a href="careers"></a><!-- Nav Anchor -->
            <div class="row heading tiny-margin">
                <div class="col-md-auto">
                    <h1 class="animation-element slide-down">WE'RE <span class="colored">HIRING</span></h1>
                </div>
                <div class="col">
                    <hr class="animation-element extend">
                </div>
            </div>
            <div class="row medium-margin">
                <div class="col-md-11">
                    <h2 class="short-hr-left">Open Jobs</h2>
                    <p>Are you a talented and motivated individual? Then we would love to have you in our team.</p><br>
                </div>
                <div class="col-md-4">
                    <div class="job-card">
                        <h3 class="colored">LEAD PROGRAMMER</h3>
                        <p>52000 - 68787 EUR per year</p>
                        <button class="button" data-toggle="modal" data-target="#modal19">View Details</button>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="modal19" tabindex="-1" role="dialog" aria-labelledby="lead-programmer-job" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2 class="modal-title colored" id="lead-programmer-job">LEAD PROGRAMMER</h2>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <h3>THE IDEAL CANDIDATE ...</h3>
                                    <p>... want to shake up the gaming market and set new impulses in the field of virtual reality.</p>
                                    <ul class="skill-list">
                                        <li>C++</li>
                                        <li>Unreal Engine</li>
                                    </ul>
                                    <br>
                                    <h3>REQUIREMENTS:</h3>
                                    <ul>
                                    <li><p>BSc or MSc study in Computer Science, Games Programming, Games Engineering or similar</p></li>
									<li><p>Experience with Unreal Engine</p></li>
									<li><p>Experience with development of VR applications</p></li>
									<li><p>Knowledge of physics simulation and game programming</p></li>
									<li><p>Excellent knowledge of C++/C# and Blueprints</p></li>
									<li><p>Interest in discovering new methods and tools and staying up to date in your field</p></li>
                                    <li><p>Strong communication and organizational skills</p></li>
                                    <li><p>Must work well under pressure and handle multiple tasks</p></li>
                                    </ul>
                                    <br>
									<h3>THIS WOULD BE A NICE EXTRA:</h3>
									<ul>
									<li><p>Development experience in the games industry</p></li>
									<li><p>Experience with Unity</p></li>
									<li><p>Experience with additional VR systems</p></li>
									<li><p>Knowledge of 3D Computer Graphics</p></li>
									<li><p>Knowledge of GIT version control</p></li>
									</ul>
									<br>
									<h3>OUR OFFER:</h3>
									<ul>
									<li><p>Hybrid or 100% remote working from Austria</p></li>
									<li><p>Free fitness studio pass to stay fit</p></li>
									<li><p>Consideration for work-life balance</p></li>
									<li><p>Interesting prospects and exciting, challenging tasks</p></li>
									<li><p>Modern hardware for private use too, provided by us</p></li>
									<li><p>The opportunity to work on international projects</p></li>
									<li><p>Flexible working hours and thrust-based working time</p></li>
									</ul>
									<br>
                                    <h3>HOW TO APPLY:</h3>
                                    <p>If you think you have what it takes to join our team you can apply here <a href="mailto:hr@fpogaming.tech" >hr@fpogaming.tech</a></p>
									<br>
									<h3>TWO-STEP RECRUITMENT PROCESS:</h3>
									<ul>
									<li><p>Step 1: First video call - We would like to know more about your mindset, your skills and your expectation.</p></li>
									<li><p>Step 2: If the first interview was OK for both sides, we will invite you to a technical interview. An expert will join that interview to have a technical conversation with you. Depending on the position the technical interview can also include programming tasks. For us it is important to create a realistic environment within the recruitment process. This is helpful and useful for both sides to get a better orientation.</p></li>
									<li><p>After the second step was successful, we will make an offer to you.</p></li>
									</ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="button secondary" data-dismiss="modal">Close</button>
                                    <a href="mailto:hr@fpogaming.tech" class="button">Apply</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="job-card">
                        <h3 class="colored">LEVEL/GAME DESIGNER</h3>
                        <p>34000 - 50000 EUR per year</p>
                        <button class="button" data-toggle="modal" data-target="#modal20">View Details</button>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade " id="modal20" tabindex="-1" role="dialog" aria-labelledby="level-designer-job" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2 class="modal-title colored" id="level-designer-job">LEVEL/GAME DESIGNER</h2>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <h3>THE IDEAL CANDIDATE ...</h3>
                                    <p>... want to shake up the gaming market and set new impulses in the field of virtual reality.</p>
                                    <ul class="skill-list">
                                        <li>C++</li>
                                        <li>Unreal Engine</li>
                                    </ul>
                                    <br>
                                    <h3>REQUIREMENTS:</h3>
                                    <ul>
                                    <li><p>BSc or MSc study in Computer Science, Games Programming, Games Engineering or similar</p></li>
									<li><p>Experience with Unreal Engine</p></li>
									<li><p>Experience with development of VR applications</p></li>
									<li><p>Knowledge of physics simulation and game programming</p></li>
									<li><p>Excellent knowledge of C++/C# and Blueprints</p></li>
									<li><p>Interest in discovering new methods and tools and staying up to date in your field</p></li>
                                    <li><p>Strong communication and organizational skills</p></li>
                                    <li><p>Must work well under pressure and handle multiple tasks</p></li>
                                    </ul>
                                    <br>
									<h3>THIS WOULD BE A NICE EXTRA:</h3>
									<ul>
									<li><p>Development experience in the games industry</p></li>
									<li><p>Experience with Unity</p></li>
									<li><p>Experience with additional VR systems</p></li>
									<li><p>Knowledge of 3D Computer Graphics</p></li>
									<li><p>Knowledge of GIT version control</p></li>
									</ul>
									<br>
									<h3>OUR OFFER:</h3>
									<ul>
									<li><p>Hybrid or 100% remote working from Austria</p></li>
									<li><p>Free fitness studio pass to stay fit</p></li>
									<li><p>Consideration for work-life balance</p></li>
									<li><p>Interesting prospects and exciting, challenging tasks</p></li>
									<li><p>Modern hardware for private use too, provided by us</p></li>
									<li><p>The opportunity to work on international projects</p></li>
									<li><p>Flexible working hours and thrust-based working time</p></li>
									</ul>
									<br>
                                    <h3>HOW TO APPLY:</h3>
                                    <p>If you think you have what it takes to join our team you can apply here <a href="mailto:hr@fpogaming.tech" >hr@fpogaming.tech</a></p>
									<br>
									<h3>TWO-STEP RECRUITMENT PROCESS:</h3>
									<ul>
									<li><p>Step 1: First video call - We would like to know more about your mindset, your skills and your expectation.</p></li>
									<li><p>Step 2: If the first interview was OK for both sides, we will invite you to a technical interview. An expert will join that interview to have a technical conversation with you. Depending on the position the technical interview can also include programming tasks. For us it is important to create a realistic environment within the recruitment process. This is helpful and useful for both sides to get a better orientation.</p></li>
									<li><p>After the second step was successful, we will make an offer to you.</p></li>
									</ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="button secondary" data-dismiss="modal">Close</button>
                                    <a href="mailto:hr@fpogaming.tech" class="button">Apply</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <h2 class="short-hr-center">OUR NEWSLETTER</h2>
                    <p>Stay up to date with the team and our products by subscribing to our newsletter.</p>
                    <form id="newsletter" data-toggle="validator">
                        <input type="email" id="emailsign" placeholder="Your email adress"> <!-- Email Field -->
                        <button type="submit" id="form-signup" class="button">SUBSCRIBE</button>
                        <div id="msgSignup" class="h3 text-center hidden"></div>
                    </form>
                </div>
            </div>
        </div>
        <!-- /// CONTACT SECTION /// -->
        <div id="contact" class="large-margin">
            <a href="contact"></a><!-- Nav Anchor -->
            <div class="row heading tiny-margin">
                <div class="col-md-auto">
                    <h1 class="animation-element slide-down">GET IN <span class="colored">TOUCH</span></h1>
                </div>
                <div class="col">
                    <hr class="animation-element extend">
                </div>
            </div>
            <div class="">
                <div class="row small-margin">
                    <div class="col-md-11">
                        <p>We would love to hear from you.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="short-hr-left">LEAVE US A MESSAGE</h2>
                        <form id="contactForm" data-toggle="validator">
                            <div class="form-group">
                                <!-- Name Field -->
                                <input type="text" id="name" placeholder="Name*" required size="35" data-error="Name is required">
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <!-- Email Field -->
                                <input type="email" id="email" placeholder="Email*" required size="35" data-error="Email is required">
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <!-- Message Field -->
                                <textarea id="message" name="message" placeholder="Message*" required data-error="Message cannot be empty"></textarea>
                                <p class="subtle">* required field</p>
                                <div class="help-block with-errors"></div>
                                <!-- Submit Button -->
                                <button type="submit" class="button">SEND MESSAGE</button>
                                <!-- Success Message -->
                                <div id="msgSubmit" class="text-center hidden"></div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <h2 class="short-hr-left">OUR DETAILS</h2>
                        <div id="contact-info">
                            <ul>
                                <li><i class="fa fa-phone"></i><p>Phone: <span class="colored"><a href="tel:+4367764445297">+43 677 6444 5297</a></span></p></li>
                                <li><i class="fa fa-envelope"></i><p>Email: <span class="colored"><a href="mailto:office@fpogaming.tech">office@fpogaming.tech</a></span></p></li>
                                <li><i class="fa fa-globe"></i><p>Website: <span class="colored"><a href="https://fpogaming.tech" target="_blank">www.fpogaming.tech</a></span></p></li>
                                <li><i class="fa fa-map-marker"></i><p>Address: <span class="colored">Dürnbachweg 27, A-4643 Pettenbach, Austria</span></p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- Main Container End -->
    <!-- /// FOOTER /// -->
    <footer id="main-footer">
        <div id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <p>&copy; FPO Gaming Technologies - 2023&nbsp; | <span class="expand colored" data-toggle="modal" data-target="#terms">Terms &amp; Conditions</span> | <span class="expand colored" data-toggle="modal" data-target="#impressum">Imprint</span> | <span class="expand colored" data-toggle="modal" data-target="#privacy">Privacy Policy</span> |</p>
                    </div>
					<div class="modal fade game-modal" id="terms" tabindex="-1" role="dialog" aria-labelledby="bedlam" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title" id="terms and conditions">Terms &amp; Conditions</h1>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                               <div class="modal-body">
                                   <h2 class="short-hr-left">§1 Area of application</h2>
                                   <p>1.1 These general terms and conditions of the company Hicore Gaming Technologies (hereinafter referred to as HCG) apply to all legal transactions, i.e. to all services that HCG provides to the contractual partner.<br>
									1.2. They shall also apply to future business and supplementary agreements, even if no express reference is made to them.<br>
									1.3. General Terms and Conditions of the Contractual Partner shall expressly not become part of the contract, even if they are not expressly objected to by HCG.<br>
									1.4. The version of these terms and conditions valid at the time of the conclusion of the contract shall be authoritative.<br>
									1.5. Amendments require the express written confirmation of HCG in order to be valid and only apply to the respective individual business case.<br>
									1.6. If individual provisions of the contract or of these terms and conditions should be invalid, the validity of the remaining provisions shall not be affected. The invalid provision shall be replaced by a valid provision that comes as close as possible to the intended meaning and economic purpose.</p>
                                   <br>
                                   <h2 class="short-hr-left">§2 Conditions for providing services</h2>
                                   <p>2.1 The necessary preparations as well as the required performance of services shall be carried out for the account and at the risk of the Contractual Partner.<br>
									2.2 The provision of partial services is possible in accordance with the specific offer.<br>
									2.3 HCG will endeavor to meet the agreed deadlines for the performance of the service as closely as possible. If unforeseeable circumstances or circumstances independent of the will of the parties occur, such as all cases of force majeure, which impede compliance with the agreed deadline for delivery or performance of the service, the deadline shall in any case be extended by the duration of these circumstances. These circumstances shall also entitle to an extension of the deadline if they occur at subcontractors.</p>
                                   <br>
                                   <h2 class="short-hr-left">§3 Estimate of costs</h2>
                                   <p>3.1. Cost estimates are generally free of charge.
3.2. The cost estimate shall be prepared to the best of our knowledge and shall provide information on the expected project volume and its costs. The actual costs may differ from the amount stated in the cost estimate.
3.3. By signing the cost estimate, the contracting party places the order for services to the extent indicated.</p>
								   <br>
								   <h2 class="short-hr-left">§4 Offer</h2>
                                   <p>4.1 Offers are in principle subject to payment and shall be prepared on the basis of a detail specification. If no order is placed within the period of validity on the basis of this quotation, the costs for the detail specification and quotation shall be charged.<br>
4.2. Our offers are subject to confirmation.<br>
4.3. The orders of the Contractual Partner are the actual offer in the legal sense. The contract is only concluded when HCG sends a written order confirmation. HCG is entitled to accept orders or assignments, even only in part, or to reject them without giving reasons.<br>
4.4. HCG reserves the right to demand documents from the Contractual Partner in the original and in writing, i.e. by sending them exclusively by mail.</p>
								   <br>
								   <h2 class="short-hr-left">§5 Fee</h2>
                                   <p>5.1. Unless otherwise agreed in the order, the prices quoted in the offer apply in euros, which do not include VAT unless explicitly stated.<br>
5.2. In the event of an order deviating from the total offer, HCG reserves the right to change the price accordingly.<br>
5.3. As above, the prices are based on the costs at the time of the initial price offer. Should the costs increase due to changed requirements or general conditions up to the time of the service provision or within the project execution, HCG is entitled to adjust the prices accordingly. However, the contractual partner will be informed of this in advance.<br>
5.4 The contractual partner will be invoiced for appraisals and the preparation of offers according to actual expenditure.<br>
								   5.5. Travel time shall generally be charged as working time. Costs for accommodation, meals and other travel expenses shall be shown separately and shall not be part of the costs for travel time.<br>
								   5.6 If the delivery of source code is requested or required by the contractual partner for services offered in the area of software development, a surcharge of 100% on the net costs of any service shall be invoiced. This shall also apply in particular in the event that the delivery of the source code and/or the aforementioned surcharge are not explicitly stated in the offer.</p>
								   <br>
								   <h2 class="short-hr-left">§6 Project management</h2>
                                   <p>6.1. All projects will be handled by HCG.<br>
6.2. The Contractual Partner is intensively involved in the planning and quality assurance phase in agile project management. Agile project management according to the specifications of HCG is therefore considered to be the subject matter of the contract for every collaboration.<br>
6.3. The project is processed iteratively, in two-week cycles.</p>
								   <br>
								   <h2 class="short-hr-left">§7 Duration</h2>
                                   <p>7.1. The project begins with the date of dispatch of the order confirmation by HCG.<br>
7.2. Additional services or changes to an existing order always require the written form and a separate order confirmation by HCG. The client implicitly agrees to an extended project duration in the case of changes.<br>
7.3. The contractual partner agrees to accept the exceeding of the mutually planned end date by 25% of the project duration. This will be communicated to the contractual partner immediately as soon as and insofar as it is apparent. In this case, no additional costs will be incurred by HCG on the part of the contractual partner.<br>
7.4. HCG will generally be held harmless and indemnified.</p>
								   <br>
								   <h2 class="short-hr-left">§8 Project completion</h2>
                                   <p>8.1. A project is deemed to be completed when HCG has performed and delivered all activities defined in writing with the Contractual Partner for the fulfillment of the order without any defects.<br>
8.2. The verification of the defect-free delivery is ensured by the contractual partner by means of a user acceptance test or acceptance test, in short UAT.<br>
8.3. The UAT shall be performed by the contractual partner directly after each delivery.<br>
8.4. After the UAT has expired, the Contractual Partner has a period of another five working days to send HCG a list of defects. The list of defects must be in writing and signed and sent to HCG by mail or e-mail. A company signature of the Contractual Partner is required.<br>
								   8.5. If HCG has not received a signed list of defects within 10 working days of delivery, the delivery or order is deemed to have been fulfilled and accepted.<br>
								   8.6. The contracting party has the option to accept the order as accepted before the expiry of the above-mentioned period. However, the premature acceptance of the order again requires the written form.</p>
								   <br>
								   <h2 class="short-hr-left">§9 Contents</h2>
                                   <p>9.1. The contracting party guarantees with regard to copyright that all text elements, graphics, photos, designs, copyrights or other works of art provided are the property of the contracting party or that the contracting party may use them.<br>
9.2. With regard to browser optimization of Web Content, the Contractual Partner agrees that the Web Content will be explicitly optimized for the following desktop browsers only: Internet Explorer in the most current version at the time of signing the contract; Mozilla Firefox in the most current version at the time of signing the contract; Safari in the most current version at the time of signing the contract; Google Chrome in the most current version at the time of signing the contract.<br>
9.3. With regard to the mobile apps, the Contractual Partner agrees that, unless otherwise agreed, these will be developed and optimized to the most current version of the operating system versions publicly available at the time the contract is signed.<br>
9.4. The contractual partner acknowledges that it is generally only possible to support other browsers or browsers with a lower version number than stated in 9.2 with considerable additional effort. This includes in particular browsers for mobile devices such as iPhone and iPad, as well as smartphones and tablets. The additional costs incurred for optimization to adapt to these devices, are not implicitly part of our offers.<br>
								   9.5. Resources required and not commissioned shall be provided by the contractual partner or commissioned separately. This includes not exclusively, but in particular: Access data to existing hostings, databases or web services; Localized texts and descriptions as well as localized graphics or logos.<br>
								   9.6. For the development of Android and iOS applications, three common end devices shall be used for quality assurance. These will be defined at the start of the project. Optionally, the Customer may explicitly define test devices, provided they are made available by the Customer at the start of the project.</p>
								   <br>
								   <h2 class="short-hr-left">§10 Terms of payment</h2>
                                   <p>10.1. Unless otherwise agreed, payments are due on the date of invoicing without any deductions in the agreed currency.<br>
10.2. In the case of orders comprising several units, HCG is entitled to issue partial invoices for which the payment terms specified for the total order also apply.<br>
10.3. A payment is deemed to have been made on the day on which HCG can dispose of it.<br>
10.4. The contractual partner is not entitled to withhold or offset payments due to warranty claims or other counterclaims.<br>
								  10.5. In the case of contracting partners outside of Austria, payment shall always be made in advance.<br>
								  10.6. If the contracting partner is in default with an agreed payment or other performance from this or other transactions, HCG may, without prejudice to its other rights<br>
(a) postpone the fulfillment of its own obligation until such payment or other performance has been effected and claim a reasonable extension of the performance period,<br>
(b) call due all outstanding claims arising from this or other transactions and charge default interest on these amounts from the respective due date at the rate of 5% above the base interest rate, unless the Contractor proves costs exceeding this.<br>
								   10.7. In any case HCG is entitled to charge pre-litigation costs, in particular reminder fees and attorney's fees.<br>
								   10.8. If the payment date is exceeded, fees will be charged in addition to the default interest:<br>
\- For the payment reminder "M1" a reminder fee of € 15,-.<br>
\- For the further reminder "M2" € 25,-.<br>
\- For the last reminder level "M3" € 45,-.<br>
								   10.9. Before the start of the project, services for up to 50% of the net project sum will be charged in the form of a deposit.<br>
								   10.10. The start of the project is considered to be the day on which the contractor confirms the availability of this payment to the customer. This confirmation shall be made in writing without exception.<br>
								   10.11. It is agreed that a partial invoice may be issued every two weeks. The scope of this partial invoice shall include at least all those services that were delivered in the previous two weeks.<br>
								   10.12. Delays in payment shall increase the planned lead time of the project by at least the duration of the delay.</p>
								   <br>
								   <h2 class="short-hr-left">§11 Limited warranty</h2>
                                   <p>11.1. HCG is entitled and obligated, regardless of fault, to correct any inaccuracies and defects in its performance that become known. HCG will inform the Contractual Partner of this without delay.<br>
11.2. This claim of the contractual partner expires six months after the provision of the respective service. In the event that the contractual partner is a consumer within the meaning of the Consumer Protection Act, the aforementioned period shall expire within two years.<br>
11.3. This limited warranty does not apply to software and services provided free of charge. This includes updates, preliminary or test versions, websites and online services, or software or services that have been modified by the Contractual Partner or third parties; HCG completely excludes the warranty for these.<br>
11.4. In order to make a warranty claim for products, the contracting party must return the software during the limited warranty period to the dealer from whom the software was purchased, presenting the proof of purchase.<br>
								   11.5. In order to make a warranty claim for services or functions provided by service in the sense of agile software development, the contractual partner must prove defects during the limited warranty period as follows:<br>
(a) The general conditions noted in the offer regarding the test environment as well as the operating system and hardware upon delivery shall apply as a basis.<br>
(b) The technically most efficient or easiest way to fulfill a requirement is always assumed. Therefore, there are explicitly no implicitly included functions or acceptance criteria.<br>
(c) Defects can be explicitly asserted only with respect to written specifications and their acceptance criteria.</p>
								   <br>
								   <h2 class="short-hr-left">§12 Liability &amp; Compensation</h2>
                                   <p>12.1. HCG is liable to the contracting partner for damages - with the exception of personal injuries - only in the case of gross negligence (intent or gross negligence). This also applies mutatis mutandis to damages caused by third parties engaged by HCG.<br>
12.2. Claims for damages by the contractual partner can only be asserted in court within six months of knowledge of the damage and the damaging party, but at the latest within three years of the event giving rise to the claim.<br>
12.3. The Contractual Partner shall in each case furnish proof that the damage is attributable to fault on the part of HCG.<br>
12.4. If HCG provides the service with the assistance of third parties and warranty and/or liability claims arise against these third parties in this context, HCG shall assign these claims to the Contractual Partner. In this case, the contractual partner will give priority to these third parties.</p>
								   <br>
								   <h2 class="short-hr-left">§13 Industrial Property Rights &amp; Copyright</h2>
                                   <p>13.1. The copyrights to the works created by HCG and its employees and commissioned third parties (in particular offers, cost estimates, reports, analyses, etc.) remain with HCG. They may be used by the Contractual Partner during and after termination of the contractual relationship exclusively for purposes covered by the contract.<br>
13.2 In this respect, the contracting party is not entitled to reproduce and/or distribute the work(s) without the express consent of HCG. Under no circumstances shall an unauthorized reproduction/dissemination of the Work give rise to any liability on the part of HCG - in particular, for example, for the correctness of the Work - vis-à-vis third parties.<br>
13.3 All of the above-mentioned documents can be reclaimed from HCG at any time and must be returned to HCG without delay and without being requested if the contract is not concluded.<br>
13.4 The breach of these provisions by the contractual partner entitles HCG to terminate the contractual relationship immediately and prematurely and to assert other legal claims, in particular for injunctive relief and/or damages.</p>
								   <br>
								   <h2 class="short-hr-left">§14 Secrecy</h2>
                                   <p>14.1. The contracting partner undertakes to maintain secrecy towards third parties with regard to the knowledge he has gained from the business relationship.<br>
14.2. HCG undertakes to maintain absolute secrecy about all business matters of which it becomes aware, in particular business and trade secrets, as well as any information it receives about the type, scope of operation and practical activities of the contractual partner.<br>
14.3. Furthermore, HCG undertakes to maintain secrecy vis-à-vis third parties regarding the entire content of the Work, as well as all information and circumstances that it has received in connection with the creation of the Work, in particular also regarding the data of clients of the Contractual Partner.<br>
14.4. HCG is released from the obligation to maintain confidentiality with regard to any assistants and substitutes of which he makes use. However, the duty of confidentiality must be completely transferred to them and the HCG is liable for their violation of the duty of confidentiality as for his own violation.<br>
								   14.5. The duty of confidentiality extends indefinitely beyond the end of this contractual relationship.<br>
								   14.6. HCG is entitled to process personal data entrusted to HCG within the scope of the purpose of the contractual relationship. The contractual partner shall guarantee HCG that all necessary measures have been taken for this purpose, in particular those within the meaning of the Data Protection Act, such as declarations of consent by the persons concerned.<br>
								   14.7 The Contractual Partner allows HCG to display the completed project as part of HCG's portfolio, to link to it or to use excerpts from it free of charge for the purpose of HCG's own advertising - even after the end of the contractual period.<br>
								   14.8 HCG is entitled to discreetly place its name, logo or other customary business designation with a link to the website of HCG on content created for the Contractual Partner after consultation with the Contractual Partner.</p>
								   <br>
								   <h2 class="short-hr-left">§15 Changes</h2>
                                   <p>15.1. The contracting party is obliged to notify HCG without delay of any changes (such as contact address, telephone number, etc.) as long as the legal transaction that is the subject of the contract has not been completely fulfilled by both parties.<br>
15.2. If the notification is omitted, declarations are deemed to have been received even if they have been sent by HCG to the last known address.</p>
								   <br>
								   <h2 class="short-hr-left">§16 Invoice</h2>
                                   <p>16.1. HCG is entitled to send invoices to the contracting partner also in electronic form and the contracting partner expressly agrees to this method of sending.</p>
								   <br>
								   <h2 class="short-hr-left">§17 Choice of Law</h2>
                                   <p>17.1. Austrian substantive law shall apply to this contract. The applicability of the UN Convention on Contracts for the International Sale of Goods is excluded.</p>
								   <br>
								   <h2 class="short-hr-left">§18 Place of Jurisdiction</h2>
                                   <p>18.1. The place of jurisdiction for all disputes arising directly or indirectly from the contract is agreed to be the Austrian court locally (A-4400 Steyr) and factually competent for HCG. However, HCG is also entitled to invoke another court having jurisdiction over the contracting party.<br>
								   18.2. For all actions brought against a consumer who has his domicile, habitual residence or place of employment in Austria due to disputes arising from this contract, one of the courts in whose district the consumer has his domicile, habitual residence or place of employment shall have jurisdiction. For consumers who are not domiciled in Austria at the time of conclusion of the contract, the statutory courts of jurisdiction shall apply.</p>
								   <br>
								   <h2 class="short-hr-left">§19 Final Provisions</h2>
                                   <p>19.1. The contracting parties confirm that they have provided all information in the contract conscientiously and truthfully and undertake to notify each other immediately of any changes.<br>
								   19.2. Amendments to the contract and these General Terms and Conditions must be made in writing; likewise any waiver of this formal requirement. Verbal collateral agreements do not exist.</p>
								   <br>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="button secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                     </div>
					<div class="modal fade game-modal" id="impressum" tabindex="-1" role="dialog" aria-labelledby="bedlam" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title" id="imprint">Imprint</h1>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                               <div class="modal-body">
                                   <h2 class="short-hr-left">Responsible for the content</h2>
                                   <p>FPO Gaming Technologies<br>
								   Dürnbachweg 27<br>
								   4643 Pettenbach<br>
								   Austria<br><br>
								   Company Owner: Atilla Ferenc Kern<br>
								   Mobile: +43 677 6444 5297<br>
								   E-Mail: <a href="mailto:office@fpogaming.tech">office@fpogaming.tech</a><br>
								   <br>
								   Commerical register court: Steyr<br>
								   UID number: ATU78923505<br><br>
								   Competent supervisory authority according to ECG: BH Kirchdorf a.d. Krems<br>
								   Trade and professional affiliation: Chamber of Commerce Upper Austria<br>
								   Access to applicable trade or professional regulations: see Legal Information System (<a href="https://www.ris.bka.gv.at">www.ris.bka.gv.at</a>)<br>
								   <br>
								   Object of the company<br>
								   Services in automatic data processing and information technology<br>
								   Organization of events, markets and trade fairs (event management)<br>
								   Commercial trades with the exception of regulated commercial trades<br>
								   Rental of movable property except weapons, medical devices and aircraft</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="button secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                     </div>
					<div class="modal fade game-modal" id="privacy" tabindex="-1" role="dialog" aria-labelledby="bedlam" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title" id="privacy policy">Privacy Policy</h1>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                               <div class="modal-body">
                                   <h2 class="short-hr-left">§1 Processing of your personal data</h2>
                                   <p>1.1. FPO Gaming Technologies e.U is responsible for the processing of your personal data on our website. You can find the data of HCG in the imprint.<br>
									   1.2. We take the protection of your personal data very seriously. We process your personal data in accordance with the legal data protection regulations and this privacy policy. The use of our website is usually possible without providing personal data. Insofar as personal data (for example, name, address or e-mail addresses) is collected on our pages, this is always done, as far as possible, on a voluntary basis.<br>
								   </p>
								   <br>
								   <h2 class="short-hr-left">§2 Processors, recipients</h2>
                                   <p>2.1. We process your personal data with the support of order processors who assist us in providing the services (e.g. web host, e-mail newsletter delivery service). These processors are obliged to strictly protect your personal data and are not allowed to process your personal data for any other purpose than providing our services. Your personal data is only passed on to service providers typical for the economy, such as banks (in the case of transfers to you), tax advisors (if you appear in our accounting), shipping service providers (in the case of shipping to you), etc.<br>
									   2.2. Further processing of the data, which is compatible with the original purpose of processing, will be carried out on the same legal basis for the purpose of direct marketing in forms not subject to consent, such as the addressed postal dispatch of advertising, until objection is made. In this case, the data will be transferred to the mailing service provider. You have the right to object to the use of your personal data for the purpose of direct advertising at any time by written notification. In the event of an objection, your personal data will no longer be processed for the purpose of direct advertising.
								   </p>
								   <br>
								   <h2 class="short-hr-left">§3 E-mail marketing (or newsletter)</h2>
                                   <p>3.1. By ticking the checkbox, you consent to the processing of the personal data entered by you for the purpose of informing you about current offers, new products and project-related information by means of an e-mail newsletter by the data protection controller until revocation or objection. There is no legal or contractual obligation to provide the personal data. The only consequence of non-consent is that you will not receive an e-mail newsletter. You have the right to revoke your consent at any time by written notice or by clicking on the unsubscribe link in the e-mail newsletter, without affecting the lawfulness of the processing carried out on the basis of the consent until revocation. Likewise, you can object to the use of your personal data for the purpose of direct marketing in the same way. In the event of an objection, your personal data will no longer be processed for the purpose of direct advertising in the form of an e-mail newsletter.<br>
								   </p>
								   <br>
								    <h2 class="short-hr-left">§4 Cookies</h2>
                                   <p>4.1. This website uses cookies. Cookies make websites more user-friendly and efficient for the user. A cookie is a small text file that is used to store information. When a website is visited, the website may place a cookie on the website visitor's computer. If the user visits the website again later, the website can read the data from the previously stored cookie and thus determine, for example, whether the user has visited the website before and which areas of the website the user was particularly interested in. More information about cookies can be found on Wikipedia.<br>
									   4.2. How the web browser handles cookies, which cookies are allowed or rejected, can be defined by the user in the web browser settings. Where exactly these settings are located depends on the web browser. Detailed information on this can be accessed via the help function of the respective web browser.<br>
4.3. If the use of cookies is restricted, not all functions of this website may be fully usable.<br>
4.4. Our website processes the following cookies:<br>
									   <ul>
								   <li>Absolutely necessary cookies to ensure basic website functions</li>
										   <li>CookieConsent: Used to store consent to cookie use</li>
										   <li>gaOptout, maOptout, fbOptout: Used to store the opt-out from Google Analytics, Matomo, Facebook Pixel</li>
										   <li>Functional cookies to ensure the performance of the website</li>
										   <li>Performance cookies, to improve the user experience</li>
										   <li>Google Analytics</li>
										   <li>Advertising cookies, to manage advertising campaigns</li>
								   </ul>
								   </p>
								   <br>
								<h2 class="short-hr-left">§5 Log file</h2>
                                   <p>5.1. This website processes the following personal data in a server log file for the purpose of monitoring the technical function and increasing the operational security of the web server on the basis of the overriding legitimate interest of the controller (technical security measures):<br>
									   <ul>
										   <li>content accessed</li>
										   <li>time of the server request</li>
										   <li>browser type / browser version</li>
										   <li>operating system used</li>
										   <li>referrer URL</li>
										   <li>IP address</li>
										   <li>host name</li>
								</ul>
								<br>
								5.2. This data is only stored temporarily.
								   </p>
								   <br>
								   <h2 class="short-hr-left">§6 Your rights</h2>
                                   <p>6.1. You have the right to information, correction, deletion and restriction of the processing of personal data.<br>
									   6.2. If the legal basis for the processing of your personal data is your consent or a contract concluded with you, you also have the right to data portability.<br>
									   6.3. You have the right to revoke any consent you may have given for the processing of your personal data. The lawfulness of the processing of the personal data until the revocation is not affected by the revocation.<br>
									   6.4. You have the right to object to the processing of your personal data for the purpose of direct marketing. In the event of an objection, your personal data will no longer be processed for the purpose of direct marketing.<br>
									   6.5. Furthermore, you have the right to lodge a complaint with the supervisory authority (Austrian Data Protection Authority, Wickenburggasse 8, 1080 Vienna, dsb@dsb.gv.at).
								   </p>
								   <br>




                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="button secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                     </div>


                </div>
            </div><!-- Container End -->
        </div>
    </footer><!-- Footer End -->
  </div>
  </div>
</template>
