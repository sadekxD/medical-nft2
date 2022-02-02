import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
// import SmoothScroll from "./SmoothScroll";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
	// Hooks
	const [walletConnected, setWalletConnected] = useState(false);
	const [hamburgerMenuOpened, setHamburgerMenuOpened] = useState(false);
	const [activeFaq, setActiveFaq] = useState();

	// Connect Wallet
	const connectWallet = async () => {
		if (Web3.givenProvider) {
			const providerOptions = {};

			const web3Modal = new Web3Modal({
				network: "mainnet",
				cacheProvider: true,
				providerOptions,
			});

			const provider = await web3Modal.connect();
			const web3 = new Web3(provider);

			web3.eth.net.getId();

			setWalletConnected(true);
		}
	};

	// FAQS
	const faqs = [
		{
			question: "WHO IS THE HEROIC POET SOCIETY?",
			answer:
				'The Heroic Poetic Society is a Unique Community of NFT enthusiasts that enjoys combining several art forms such as Poetry, Music, and Singing along with digital art to fully express and honor the human experience. We will be establishing ourselves in the NFT Community by dropping several collections that honor and catalog the real life human experience as we enjoy sharing our talents as a community. The first collection will be the "Medical Heroes Collection." We can not possibly transition into WEB 3 without ensuring that our Worldwide Medical Community is acknowledged and honored forever for their heroic accomplishments by being minted on the ETH Blockchain. This will be the first collection to do just that! It is a NFT collection of 10,000 unique ERC-721 tokens stored on the Ethereum Blockchain to remember how each and every doctor and nurse literally had to "suit up" to take care of us! Each will be computer generated from over 100 + hand drawn traits consisting of various rarities and will be non-sequentially minted at one price for fair distribution . Each NFT comes with exclusive rights and a membership to the Heroic Poet Society Community, including functioning utilities, and an ever-growing community. The possibilities are limitless!',
		},
		{
			question: "HOW MUCH IS A MEDICAL HERO?",
			answer:
				"On Presale the price will be .04 ETH and on Publicsale the price will be 0.05 ETH",
		},
		{
			question: "HOW MANY IN TOTAL?",
			answer: "10,000",
		},
		{
			question: "PUBLIC MINT DATE?",
			answer: "The Public Mint date will be on Feb 11 2022",
		},
		{
			question: "PRE-SALE DATE?",
			answer: "The Presale Mint date will be on Feb 9th 2022",
		},
		{
			question: "WHEN WILL THEY BE REVEALED?",
			answer: "24 hours after public mint date",
		},
		{
			question: "IS THERE WILL BE ANY FREE MINT?",
			answer:
				"Yes, there will be 1000 Free Mints for the artworks and the date will be February 4th",
		},
		{
			question: "HOW CAN I USE MY NFT? ",
			answer:
				"The possibilities are many. However, outside of owning the first NFT collection ever minted on the ETH Blockchain that represents a memoir of “real life” events that will always be apart of mankind's history, you can use it as a profile picture online, resell it for profit, gift several to a Medical Hero, or hold onto it! As the value increases, this can be the art you hang in the future Modern Metaverse History Museum where you will also be able to mint your personal Heroic journey as a poetic expression of what your experience has been during this Pandemic.",
		},
	];

	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<React.Fragment>
			<main className="landing-page">
				<nav>
					<div className="container">
						<div className="navigation-bar-left">
							<a href="/" className="logo" data-aos="fade-down">
								<img src="/images/brand/logo.png" alt="" />
							</a>
						</div>

						<button
							className="hamburger-menu-open-trigger"
							onClick={() => {
								setHamburgerMenuOpened(!hamburgerMenuOpened);
							}}
						>
							<svg
								width="26"
								height="20"
								viewBox="0 0 26 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2.00033 0.833008H11.167C11.6532 0.833008 12.1195 1.02616 12.4634 1.36998C12.8072 1.7138 13.0003 2.18011 13.0003 2.66634C13.0003 3.15257 12.8072 3.61889 12.4634 3.9627C12.1195 4.30652 11.6532 4.49967 11.167 4.49967H2.00033C1.5141 4.49967 1.04778 4.30652 0.703963 3.9627C0.360146 3.61889 0.166992 3.15257 0.166992 2.66634C0.166992 2.18011 0.360146 1.7138 0.703963 1.36998C1.04778 1.02616 1.5141 0.833008 2.00033 0.833008V0.833008ZM14.8337 15.4997H24.0003C24.4866 15.4997 24.9529 15.6928 25.2967 16.0366C25.6405 16.3805 25.8337 16.8468 25.8337 17.333C25.8337 17.8192 25.6405 18.2856 25.2967 18.6294C24.9529 18.9732 24.4866 19.1663 24.0003 19.1663H14.8337C14.3474 19.1663 13.8811 18.9732 13.5373 18.6294C13.1935 18.2856 13.0003 17.8192 13.0003 17.333C13.0003 16.8468 13.1935 16.3805 13.5373 16.0366C13.8811 15.6928 14.3474 15.4997 14.8337 15.4997ZM2.00033 8.16634H24.0003C24.4866 8.16634 24.9529 8.3595 25.2967 8.70331C25.6405 9.04713 25.8337 9.51344 25.8337 9.99967C25.8337 10.4859 25.6405 10.9522 25.2967 11.296C24.9529 11.6399 24.4866 11.833 24.0003 11.833H2.00033C1.5141 11.833 1.04778 11.6399 0.703963 11.296C0.360146 10.9522 0.166992 10.4859 0.166992 9.99967C0.166992 9.51344 0.360146 9.04713 0.703963 8.70331C1.04778 8.3595 1.5141 8.16634 2.00033 8.16634V8.16634Z"
									fill="white"
								/>
							</svg>
						</button>

						<div
							className={
								hamburgerMenuOpened
									? "navigation-bar-right active"
									: "navigation-bar-right"
							}
						>
							<button
								className="hamburger-menu-close-trigger"
								onClick={() => {
									setHamburgerMenuOpened(!hamburgerMenuOpened);
								}}
							>
								<svg
									width="22"
									height="23"
									viewBox="0 0 22 23"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										y="19"
										width="26"
										height="4"
										rx="2"
										transform="rotate(-45 0 19)"
										fill="white"
									/>
									<rect
										x="3"
										y="1"
										width="26"
										height="4"
										rx="2"
										transform="rotate(45 3 1)"
										fill="white"
									/>
								</svg>
							</button>

							<ul>
								<li data-aos="fade-down" data-aos-delay="100">
									<a
										onClick={() => {
											const location =
												document.querySelector(".hero").offsetTop;

											window.scrollTo({
												left: 0,
												top: location,
											});
										}}
									>
										Home
									</a>
								</li>
								<li data-aos="fade-down" data-aos-delay="200">
									<a
										onClick={() => {
											const location =
												document.querySelector(".roadmap").offsetTop;

											window.scrollTo({
												left: 0,
												top: location,
											});
										}}
									>
										Roadmap
									</a>
								</li>
								<li data-aos="fade-down" data-aos-delay="300">
									<a
										onClick={() => {
											const location =
												document.querySelector(".about").offsetTop;

											window.scrollTo({
												left: 0,
												top: location,
											});
										}}
									>
										Who is Heroic Poet Society
									</a>
								</li>
								<li data-aos="fade-down" data-aos-delay="400">
									<a
										onClick={() => {
											const location =
												document.querySelector(".team").offsetTop;

											window.scrollTo({
												left: 0,
												top: location,
											});
										}}
									>
										Team
									</a>
								</li>
								<li data-aos="fade-down" data-aos-delay="500">
									<a
										onClick={() => {
											const location = document.querySelector(".faq").offsetTop;

											window.scrollTo({
												left: 0,
												top: location,
											});
										}}
									>
										FAQs
									</a>
								</li>
								<li
									onClick={connectWallet}
									data-aos="fade-down"
									data-aos-delay="600"
								>
									<button>
										{walletConnected ? "Connected" : "Connect Wallet"}
									</button>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<section
					className="hero"
					style={{
						background: `#22232f url("/images/page-landing/hero-bg-1.png")`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className="container">
						<h1 data-aos="fade-up">
							Heroic Poet <br /> Society
						</h1>
						<p data-aos="fade-up" data-aos-delay="100">
							All heroes don't wear capes but some do! Let's <br /> honor our
							medical heroes!
						</p>

						<div className="btn" data-aos="fade-up" data-aos-delay="200">
							<button
								onClick={() => {
									window
										.open("https://discord.gg/R2yCwzSBdC", "_blank")
										.focus();
								}}
							>
								Join Discord
							</button>
							<img src="/images/page-landing/hero-btn-icon-1.png" alt="" />
						</div>
					</div>

					<img
						src="/images/page-landing/hero-img-1.png"
						alt=""
						className="hero-img-1"
					/>
				</section>

				<section className="about">
					<div className="container">
						<h2>
							Who is the Heroic <br /> Poet Society?
						</h2>

						<div className="about-wrapper">
							<div className="about-left" data-aos="fade-right">
								<img src="/images/page-landing/about-img-1.png" alt="" />
							</div>

							<div className="about-right" data-aos="fade-left">
								<p>
									The Heroic Poetic Society is a Unique Community of NFT
									enthusiasts that enjoys combining several art forms such as
									Poetry, Music, and Singing along with digital art to fully
									express and honor the human experience.
									<br />
									<br />
									We will be establishing ourselves in the NFT Community by
									dropping several collections that honor and catalog the real
									life human experience as we enjoy sharing our talents as a
									community. The first collection will be the "Medical Heroes
									Collection."
									<br />
									<br />
									We can not possibly transition into WEB 3 without ensuring
									that our Worldwide Medical Community is acknowledged and
									honored forever for their heroic accomplishments by being
									minted on the ETH Blockchain. This will be the first
									collection to do just that! It is a NFT collection of 10,000
									unique ERC-721 tokens stored on the Ethereum Blockchain to
									remember how each and every doctor and nurse literally had to
									"suit up" to take care of us!
									<br />
									<br />
									Each will be computer generated from over 100 + hand drawn
									traits consisting of various rarities and will be
									non-sequentially minted at one price for fair distribution .
									Each NFT comes with exclusive rights and a membership to the
									Heroic Poet Society Community, including functioning
									utilities, and an ever-growing community. The possibilities
									are limitless!
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="roadmap">
					<div className="container">
						<h2>Roadmap</h2>

						<div className="roadmap-rows">
							<div
								className="roadmap-row roadmap-row-left-content"
								data-aos="flip-up"
							>
								<div className="roadmap-row-container">
									<h3>0% Minted</h3>
									<p>
										Come hang out and meet your fellow Poetic Heroes on discord.
										As the community grows we will have raffles and other
										surprises.
									</p>
								</div>

								<img
									src="/images/page-landing/roadmap-content-img-1.png"
									alt=""
									className="roadmap-content-img"
								/>
								<img
									src="/images/page-landing/roadmap-item-img-1.png"
									alt=""
									className="roadmap-item-img"
								/>
							</div>

							<div
								className="roadmap-row roadmap-row-right-content"
								data-aos="flip-up"
							>
								<div className="roadmap-row-container">
									<h3>25% Minted</h3>
									<p>
										We will make our first Charitable Donations: TOTAL OF 10% OF
										ALL MINT SALES WILL BE DONATED AS WE ACHIEVE EACH QUARTERLY
										THRESHOLD. We will also host our first live Poetry showcase
										to honor medical heroes.
									</p>
								</div>

								<img
									src="/images/page-landing/roadmap-content-img-2.png"
									alt=""
									className="roadmap-content-img"
								/>
								<img
									src="/images/page-landing/roadmap-item-img-2.png"
									alt=""
									className="roadmap-item-img"
								/>
							</div>

							<div
								className="roadmap-row roadmap-row-left-content"
								data-aos="flip-up"
							>
								<div className="roadmap-row-container">
									<h3>50% Minted</h3>
									<p>
										We will make our second Charitable Donations. 10 Heroes
										airdropped to 10 token holders and/or community members
										start looking for land for the Metaverse to Design the
										Modern Metaverse History Museum and Performing Arts Center.
										This is where we will catalog the journey of all our Poetic
										Heroes and also provide an Open Stage for all aspiring and
										accomplished artists, singers, poets, writers, and
										musicians.
									</p>
								</div>

								<img
									src="/images/page-landing/roadmap-content-img-3.png"
									alt=""
									className="roadmap-content-img"
								/>
								<img
									src="/images/page-landing/roadmap-item-img-1.png"
									alt=""
									className="roadmap-item-img"
								/>
							</div>

							<div
								className="roadmap-row roadmap-row-right-content"
								data-aos="flip-up"
							>
								<div className="roadmap-row-container">
									<h3>75% Minted</h3>
									<p>
										We will make our third Charitable Donations. We will hold
										another Live Poetry showcase with some very "exciting prizes
										for the participants!" By this time everyone will remember
										what happened during the first competition!!!
									</p>
								</div>

								<img
									src="/images/page-landing/roadmap-content-img-4.png"
									alt=""
									className="roadmap-content-img"
								/>
								<img
									src="/images/page-landing/roadmap-item-img-2.png"
									alt=""
									className="roadmap-item-img"
								/>
							</div>

							<div
								className="roadmap-row roadmap-row-left-content"
								data-aos="flip-up"
							>
								<div className="roadmap-row-container">
									<h3>100% Minted</h3>
									<p>
										Exclusive Poetry showcase Event Featuring an accomplished
										Poet...TBA
									</p>
								</div>

								<img
									src="/images/page-landing/roadmap-content-img-5.png"
									alt=""
									className="roadmap-content-img"
								/>
								<img
									src="/images/page-landing/roadmap-item-img-1.png"
									alt=""
									className="roadmap-item-img"
								/>
							</div>
						</div>
					</div>

					<img
						src="/images/page-landing/roadmap-bg-element-1.png"
						alt=""
						className="roadmap-bg-element-1"
					/>
				</section>

				<section className="announcement">
					<div className="container">
						<p data-aos="fade-up">
							Future announcements of the Heroic Poet NFT announced with major
							financial benefits to all Holders of the Caring Heroes Collection
							and major future utility for Metaverse! Ownership of the Caring
							Heroes Collection is your ticket to the many exciting Poetic
							Events, Workshops, that we will regularly host as we transition to
							the Metaverse!
						</p>
					</div>
				</section>

				<section className="team">
					<div className="container">
						<h2>The Team</h2>

						<div className="team-top">
							<div className="box" data-aos="fade-up">
								<div className="box-container">
									<h3>
										HEROINE LADYBUG <br /> FOUNDER
									</h3>
									<p>
										HEROINE LADYBUG IS AN NFT ENTHUSIAST WITH OVER 25 YEARS IN
										THE FINANCIAL INDUSTRY WORKING FOR PROMINENT FINANCIAL
										INSTITUTIONS SUCH AS CITIBANK, CHASE, AND STATE FARM. AS A
										NY RESIDENT WHO JUST CAN'T HELP BUT HAVE A LOVE FOR ALL OF
										THE ARTS SHE DEVELOPED A VERY PASSIONATE VISION OF
										ESTABLISHING A NFT COMMUNITY THAT COMBINES PERFORMING ARTS
										(SLAM POETRY ANYONE?) WITH DIGITAL ART AS A PLATFORM TO
										HONOR ONE ANOTHER'S TALENTS AND ACCOMPLISHMENTS WHILE WE
										CATALOG HISTORICAL REAL LIFE EVENTS THAT WILL ALWAYS BE
										APART OF OUR HISTORY.
									</p>
								</div>

								<img
									src="/images/page-landing/team-top-img-1.png"
									alt=""
									className="team-top-img-1"
								/>
							</div>
						</div>

						<div className="team-center">
							<div className="team-members">
								<div className="team-member" data-aos="flip-up">
									<img
										src="/images/page-landing/team-member-img-1.png"
										alt=""
									/>
									<div className="box">
										<div className="box-container">
											<h4>POSITIVE POET</h4>
											<h5>CO-FOUNDER AND MARKETING</h5>
										</div>
									</div>
								</div>

								<div className="team-member" data-aos="flip-up">
									<img
										src="/images/page-landing/team-member-img-2.png"
										alt=""
									/>
									<div className="box">
										<div className="box-container">
											<h4>ISUSUPO</h4>
											<h5>ARTIST</h5>
										</div>
									</div>
								</div>

								<div className="team-member" data-aos="flip-up">
									<img
										src="/images/page-landing/team-member-img-3.png"
										alt=""
									/>
									<div className="box">
										<div className="box-container">
											<h4>Zake</h4>
											<h5>LEAD DEVELOPER</h5>
										</div>
									</div>
								</div>

								<div className="team-member" data-aos="flip-up">
									<img
										src="/images/page-landing/team-member-img-4.png"
										alt=""
									/>
									<div className="box">
										<div className="box-container">
											<h4>HEROINE</h4>
											<h5>LADY BUG</h5>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="team-bottom">
							<div className="box" data-aos="fade-up">
								<div className="box-container">
									<h3>MEDICAL HEROES STORY</h3>
									<p>
										With the arrival of March 2020 the world of the homosapiens
										was changed forever! A mysterious virus alien tried to take
										over their world by stealing the air from the homosapien’s
										lungs so that they could use their breath and develop their
										own voice. Nevertheless, a heroic group of Caring Heroes
										courageously suited up as it were, at great sacrifice to
										themselves and their families and went to battle! Sometimes,
										these heroes went to battle even without all of their proper
										armor because they were just that determined to ensure that
										the homosapiens could keep their breath to use their voice
										to poetically tell their individual unique heroic stories.
										In celebration of their heroic efforts and out of
										appreciation for their courage, the homosapiens developed
										the ritual of reading aloud, writing, and performing poetry
										everyday while cataloging each of their journeys so as to be
										forever remembered in the Metaverse. Where a new generation
										of Heroic Poets were born!
									</p>
								</div>
							</div>
						</div>
					</div>

					<img
						src="/images/page-landing/team-bg-element-1.png"
						alt=""
						className="team-bg-element-1"
					/>
				</section>

				<section className="community" data-aos="fade-up">
					<div className="container">
						<div className="box">
							<h2>Please Come Join Our Discord To Learn More!</h2>
							<p>
								When an NFT is sold on a secondary market, royalties may apply
								to continue supporting its creators. Heroic Poet Society uses
								these royalties to further develop the community ecosystem.
							</p>

							<button
								className="discord-btn"
								onClick={() => {
									window
										.open("https://discord.gg/R2yCwzSBdC", "_blank")
										.focus();
								}}
							>
								<svg
									width="210"
									height="65"
									viewBox="0 0 210 65"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M32.5 1.5H177.5C194.621 1.5 208.5 15.3792 208.5 32.5C208.5 49.6208 194.621 63.5 177.5 63.5H32.5C15.3792 63.5 1.5 49.6208 1.5 32.5C1.5 15.3792 15.3792 1.5 32.5 1.5Z"
										stroke="url(#paint0_linear_46_674)"
										stroke-width="3"
									/>
									<path
										d="M32.7481 63.5C15.6124 63.5 1.5 49.606 1.5 32.5C1.5 15.394 15.6124 1.5 32.7481 1.5C49.6118 1.5 63.5 15.1735 63.5 32.0076V32.9924C63.5 49.8265 49.6118 63.5 32.7481 63.5Z"
										stroke="url(#paint1_linear_46_674)"
										stroke-width="3"
									/>
									<path
										d="M91.0088 32.0869C91.0088 35.6123 90.0029 38.3125 87.9912 40.1875C85.9893 42.0625 83.0938 43 79.3047 43H73.2402V21.584H79.9639C83.46 21.584 86.1748 22.5068 88.1084 24.3525C90.042 26.1982 91.0088 28.7764 91.0088 32.0869ZM86.292 32.2041C86.292 27.6045 84.2607 25.3047 80.1982 25.3047H77.7812V39.25H79.7295C84.1045 39.25 86.292 36.9014 86.292 32.2041ZM94.9053 22.3896C94.9053 20.9346 95.7158 20.207 97.3369 20.207C98.958 20.207 99.7686 20.9346 99.7686 22.3896C99.7686 23.083 99.5635 23.625 99.1533 24.0156C98.7529 24.3965 98.1475 24.5869 97.3369 24.5869C95.7158 24.5869 94.9053 23.8545 94.9053 22.3896ZM99.5635 43H95.0957V26.623H99.5635V43ZM115.691 38.1367C115.691 39.8164 115.105 41.0957 113.934 41.9746C112.771 42.8535 111.028 43.293 108.704 43.293C107.513 43.293 106.497 43.21 105.657 43.0439C104.817 42.8877 104.031 42.6533 103.299 42.3408V38.6494C104.129 39.04 105.062 39.3672 106.097 39.6309C107.142 39.8945 108.06 40.0264 108.851 40.0264C110.472 40.0264 111.282 39.5576 111.282 38.6201C111.282 38.2686 111.175 37.9854 110.96 37.7705C110.745 37.5459 110.374 37.2969 109.847 37.0234C109.319 36.7402 108.616 36.4131 107.737 36.042C106.478 35.5146 105.55 35.0264 104.954 34.5771C104.368 34.1279 103.938 33.6152 103.665 33.0391C103.401 32.4531 103.27 31.7354 103.27 30.8857C103.27 29.4307 103.831 28.3076 104.954 27.5166C106.087 26.7158 107.688 26.3154 109.759 26.3154C111.731 26.3154 113.65 26.7451 115.516 27.6045L114.168 30.8271C113.348 30.4756 112.581 30.1875 111.868 29.9629C111.155 29.7383 110.428 29.626 109.686 29.626C108.367 29.626 107.708 29.9824 107.708 30.6953C107.708 31.0957 107.918 31.4424 108.338 31.7354C108.768 32.0283 109.7 32.4629 111.136 33.0391C112.415 33.5566 113.353 34.04 113.948 34.4893C114.544 34.9385 114.983 35.4561 115.267 36.042C115.55 36.6279 115.691 37.3262 115.691 38.1367ZM125.828 43.293C120.73 43.293 118.182 40.4951 118.182 34.8994C118.182 32.1162 118.875 29.9922 120.262 28.5273C121.648 27.0527 123.636 26.3154 126.224 26.3154C128.118 26.3154 129.817 26.6865 131.321 27.4287L130.003 30.8857C129.3 30.6025 128.646 30.373 128.04 30.1973C127.435 30.0117 126.829 29.9189 126.224 29.9189C123.899 29.9189 122.737 31.5693 122.737 34.8701C122.737 38.0732 123.899 39.6748 126.224 39.6748C127.083 39.6748 127.879 39.5625 128.611 39.3379C129.344 39.1035 130.076 38.7422 130.809 38.2539V42.0771C130.086 42.5361 129.354 42.8535 128.611 43.0293C127.879 43.2051 126.951 43.293 125.828 43.293ZM138.177 34.7822C138.177 36.4033 138.44 37.6289 138.968 38.459C139.505 39.2891 140.374 39.7041 141.575 39.7041C142.767 39.7041 143.621 39.2939 144.139 38.4736C144.666 37.6436 144.93 36.4131 144.93 34.7822C144.93 33.1611 144.666 31.9453 144.139 31.1348C143.611 30.3242 142.747 29.9189 141.546 29.9189C140.354 29.9189 139.495 30.3242 138.968 31.1348C138.44 31.9355 138.177 33.1514 138.177 34.7822ZM149.5 34.7822C149.5 37.4482 148.797 39.5332 147.391 41.0371C145.984 42.541 144.026 43.293 141.517 43.293C139.944 43.293 138.558 42.9512 137.356 42.2676C136.155 41.5742 135.232 40.583 134.588 39.2939C133.943 38.0049 133.621 36.501 133.621 34.7822C133.621 32.1064 134.319 30.0264 135.716 28.542C137.112 27.0576 139.075 26.3154 141.604 26.3154C143.177 26.3154 144.563 26.6572 145.765 27.3408C146.966 28.0244 147.889 29.0059 148.533 30.2852C149.178 31.5645 149.5 33.0635 149.5 34.7822ZM162.332 26.3154C162.938 26.3154 163.44 26.3594 163.841 26.4473L163.504 30.6367C163.143 30.5391 162.703 30.4902 162.186 30.4902C160.76 30.4902 159.646 30.8564 158.846 31.5889C158.055 32.3213 157.659 33.3467 157.659 34.665V43H153.191V26.623H156.575L157.234 29.377H157.454C157.962 28.459 158.646 27.7217 159.505 27.165C160.374 26.5986 161.316 26.3154 162.332 26.3154ZM172 43.293C170.076 43.293 168.562 42.5459 167.459 41.0518C166.365 39.5576 165.818 37.4873 165.818 34.8408C165.818 32.1553 166.375 30.0654 167.488 28.5713C168.611 27.0674 170.154 26.3154 172.117 26.3154C174.178 26.3154 175.75 27.1162 176.834 28.7178H176.98C176.756 27.4971 176.644 26.4082 176.644 25.4512V20.207H181.126V43H177.698L176.834 40.876H176.644C175.628 42.4873 174.08 43.293 172 43.293ZM173.567 39.7334C174.71 39.7334 175.545 39.4014 176.072 38.7373C176.609 38.0732 176.902 36.9453 176.951 35.3535V34.8701C176.951 33.1123 176.678 31.8525 176.131 31.0908C175.594 30.3291 174.715 29.9482 173.494 29.9482C172.498 29.9482 171.722 30.373 171.165 31.2227C170.618 32.0625 170.345 33.2881 170.345 34.8994C170.345 36.5107 170.623 37.7217 171.18 38.5322C171.736 39.333 172.532 39.7334 173.567 39.7334Z"
										fill="white"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M32.5 60C47.6878 60 60 47.6878 60 32.5C60 17.3122 47.6878 5 32.5 5C17.3122 5 5 17.3122 5 32.5C5 47.6878 17.3122 60 32.5 60Z"
										fill="url(#paint2_linear_46_674)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_46_674"
											x1="105"
											y1="0"
											x2="105"
											y2="65"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#1DA4B9" />
											<stop offset="1" stop-color="#2081E2" />
										</linearGradient>
										<linearGradient
											id="paint1_linear_46_674"
											x1="32.5"
											y1="0"
											x2="32.5"
											y2="65"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#1DA4B9" />
											<stop offset="1" stop-color="#2081E2" />
										</linearGradient>
										<linearGradient
											id="paint2_linear_46_674"
											x1="32.5"
											y1="5"
											x2="32.5"
											y2="60"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#3EB2B8" />
											<stop offset="1" stop-color="#2081E2" />
										</linearGradient>
									</defs>
								</svg>
							</button>
						</div>
					</div>

					<img
						src="/images/page-landing/community-bg-element-1.png"
						alt=""
						className="community-bg-element-1"
					/>
				</section>

				<section className="faq" data-aos="fade-up">
					<div className="container">
						<h2>
							Frequently Asked <br /> Questions
						</h2>

						<div className="faqs-wrapper">
							{faqs.map((faq, index) => {
								return (
									<div
										key={index}
										className={
											activeFaq === index
												? "question-answer active"
												: "question-answer"
										}
									>
										<div
											className="question"
											onClick={() => {
												if (activeFaq === index) {
													setActiveFaq();
												} else {
													setActiveFaq(index);
												}
											}}
										>
											<p>{faq.question}</p>
											<svg
												width="23"
												height="14"
												viewBox="0 0 23 14"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M11.1184 9.19045L19.3684 0.940454C19.5222 0.781271 19.7061 0.6543 19.9094 0.566952C20.1127 0.479604 20.3314 0.433627 20.5527 0.431704C20.774 0.429781 20.9935 0.47195 21.1983 0.555752C21.4032 0.639553 21.5892 0.763308 21.7457 0.919796C21.9022 1.07628 22.026 1.26237 22.1098 1.4672C22.1936 1.67202 22.2358 1.89149 22.2338 2.11279C22.2319 2.33409 22.1859 2.55279 22.0986 2.75613C22.0112 2.95947 21.8843 3.14338 21.7251 3.29712L12.2967 12.7255C11.9842 13.0379 11.5604 13.2134 11.1184 13.2134C10.6765 13.2134 10.2526 13.0379 9.94008 12.7255L0.511743 3.29712C0.35256 3.14338 0.225589 2.95947 0.138241 2.75613C0.0508927 2.55279 0.00491564 2.33409 0.00299262 2.11279C0.00106959 1.89149 0.0432391 1.67202 0.127041 1.4672C0.210842 1.26237 0.334597 1.07628 0.491085 0.919796C0.647573 0.763308 0.833659 0.639553 1.03849 0.555752C1.24331 0.47195 1.46278 0.429781 1.68408 0.431704C1.90538 0.433627 2.12408 0.479604 2.32742 0.566952C2.53076 0.6543 2.71467 0.781271 2.86841 0.940454L11.1184 9.19045Z"
													fill="white"
												/>
											</svg>
										</div>

										<div className="answer">
											<p>{faq.answer}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<footer>
					<div className="container">
						<div className="social-links">
							<a href="https://twitter.com/HeroesCaring" target="_BLANK">
								<svg
									width="32"
									height="33"
									viewBox="0 0 32 33"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16 0C7.16429 0 0 7.38817 0 16.5C0 25.6118 7.16429 33 16 33C24.8357 33 32 25.6118 32 16.5C32 7.38817 24.8357 0 16 0ZM23.6893 12.4376C23.7 12.6107 23.7 12.7912 23.7 12.968C23.7 18.3747 19.7071 24.6027 12.4107 24.6027C10.1607 24.6027 8.075 23.9287 6.31786 22.7685C6.63929 22.8054 6.94643 22.8201 7.275 22.8201C9.13214 22.8201 10.8393 22.1719 12.2 21.0743C10.4571 21.0375 8.99286 19.8589 8.49286 18.2384C9.10357 18.3305 9.65357 18.3305 10.2821 18.1647C9.38474 17.9767 8.57813 17.4741 7.99934 16.7423C7.42056 16.0105 7.10531 15.0946 7.10714 14.1502V14.0987C7.63214 14.4044 8.25 14.5922 8.89643 14.618C8.35301 14.2445 7.90735 13.7385 7.59897 13.1449C7.29059 12.5512 7.12901 11.8883 7.12857 11.2148C7.12857 10.4525 7.32143 9.75636 7.66786 9.15234C8.66394 10.4169 9.9069 11.4511 11.3159 12.1878C12.725 12.9245 14.2686 13.3472 15.8464 13.4283C15.2857 10.6477 17.3 8.39732 19.7214 8.39732C20.8643 8.39732 21.8929 8.89085 22.6179 9.68638C23.5143 9.51328 24.3714 9.16708 25.1357 8.70301C24.8393 9.64955 24.2179 10.4488 23.3929 10.9533C24.1929 10.865 24.9643 10.6366 25.6786 10.3162C25.1393 11.1338 24.4643 11.8594 23.6893 12.4376V12.4376Z"
										fill="white"
									/>
								</svg>
							</a>

							<a
								href="https://www.instagram.com/heroic_poet_society/"
								target="_BLANK"
							>
								<svg
									width="34"
									height="33"
									viewBox="0 0 34 33"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M16.5488 33C25.6615 33 33.0488 25.6127 33.0488 16.5C33.0488 7.3873 25.6615 0 16.5488 0C7.43613 0 0.0488281 7.3873 0.0488281 16.5C0.0488281 25.6127 7.43613 33 16.5488 33ZM11.9249 5.32699C13.1213 5.27474 13.5042 5.26099 16.549 5.26099H16.5462C19.5952 5.26099 19.9753 5.27474 21.173 5.32699C22.3666 5.38061 23.1828 5.56624 23.8981 5.83849C24.647 6.11437 25.3253 6.54754 25.8854 7.10761C26.4562 7.65717 26.8979 8.32205 27.1799 9.05599C27.4562 9.75449 27.6456 10.5547 27.7017 11.7249C27.755 12.8991 27.769 13.2731 27.769 16.261C27.769 19.2489 27.755 19.6229 27.7017 20.7957C27.6456 21.9672 27.4562 22.7661 27.1799 23.466C26.8924 24.1892 26.5095 24.8025 25.8854 25.4144C25.3256 25.9741 24.6478 26.4072 23.8995 26.6835C23.1856 26.9557 22.368 27.14 21.1744 27.195C19.9767 27.2472 19.5966 27.261 16.549 27.261C13.5013 27.261 13.1199 27.2472 11.9221 27.195C10.7272 27.1414 9.91375 26.9557 9.19848 26.6835C8.46076 26.403 7.83525 26.0262 7.21254 25.4144C6.58842 24.8025 6.20554 24.1892 5.91803 23.466C5.64033 22.7661 5.4524 21.9672 5.3963 20.7957C5.343 19.6229 5.32898 19.2489 5.32898 16.2624C5.32898 13.2731 5.343 12.8991 5.3963 11.7235C5.451 10.5547 5.64033 9.75449 5.91803 9.05599C6.20008 8.32207 6.64183 7.65719 7.21254 7.10761C7.77282 6.54775 8.45108 6.11461 9.19988 5.83849C9.91375 5.56624 10.7286 5.38199 11.9249 5.32699ZM16.5504 7.24374H15.5434V7.24099C13.4523 7.24236 13.0511 7.25611 12.0161 7.30286C10.9222 7.35236 10.3289 7.53111 9.93339 7.68236C9.40885 7.88174 9.03579 8.11961 8.64309 8.50461C8.25039 8.88961 8.00635 9.25674 7.80299 9.76961C7.64872 10.1574 7.46639 10.7404 7.4159 11.8129C7.3626 12.972 7.35138 13.3185 7.35138 16.2555C7.35138 19.1939 7.3626 19.5417 7.4159 20.7009C7.46499 21.7734 7.64871 22.3564 7.80159 22.7427C7.98212 23.2208 8.26967 23.653 8.64309 24.0077C9.00511 24.3729 9.44602 24.6539 9.93339 24.83C10.3289 24.9812 10.9222 25.16 12.0161 25.2095C13.1984 25.2617 13.5546 25.2741 16.5504 25.2741C19.5461 25.2741 19.901 25.2617 21.0833 25.2095C22.1786 25.16 22.7733 24.9812 23.166 24.83C23.6905 24.6306 24.0636 24.3927 24.4563 24.0077C24.8294 23.6536 25.1165 23.2217 25.2964 22.7441C25.4492 22.3564 25.633 21.7747 25.6821 20.7022C25.7368 19.5431 25.748 19.1939 25.748 16.2582C25.748 13.3226 25.7368 12.9747 25.6821 11.8156C25.633 10.7431 25.4507 10.1601 25.2964 9.77374C25.093 9.25949 24.8504 8.89374 24.4577 8.50874C24.065 8.12374 23.6905 7.88449 23.1674 7.68511C22.7719 7.53524 22.1772 7.35511 21.0833 7.30699C19.901 7.25336 19.5461 7.24374 16.5504 7.24374ZM22.0238 9.17022C22.1872 9.10388 22.3622 9.06974 22.5391 9.06974C22.8961 9.06974 23.2386 9.20881 23.4911 9.45636C23.7436 9.7039 23.8855 10.0396 23.8855 10.3897C23.8855 10.7398 23.7436 11.0756 23.4911 11.3231C23.2386 11.5707 22.8961 11.7097 22.5391 11.7097C22.3622 11.7097 22.1872 11.6756 22.0238 11.6093C21.8605 11.5429 21.712 11.4457 21.587 11.3231C21.462 11.2005 21.3628 11.055 21.2951 10.8949C21.2275 10.7347 21.1927 10.5631 21.1927 10.3897C21.1927 10.2164 21.2275 10.0447 21.2951 9.88459C21.3628 9.72444 21.462 9.57893 21.587 9.45636C21.712 9.33378 21.8605 9.23655 22.0238 9.17022ZM14.3176 11.0169C15.0271 10.7383 15.7861 10.6008 16.5504 10.6125C18.063 10.6356 19.5058 11.241 20.5671 12.2979C21.6285 13.3548 22.2234 14.7785 22.2234 16.2617C22.2234 17.7448 21.6285 19.1685 20.5671 20.2255C19.5058 21.2824 18.063 21.8877 16.5504 21.9109C15.7861 21.9226 15.0271 21.7851 14.3176 21.5064C13.608 21.2278 12.9621 20.8135 12.4174 20.2878C11.8727 19.762 11.4402 19.1353 11.1449 18.4441C10.8497 17.7529 10.6976 17.011 10.6976 16.2617C10.6976 15.5123 10.8497 14.7704 11.1449 14.0792C11.4402 13.388 11.8727 12.7613 12.4174 12.2356C12.9621 11.7098 13.608 11.2956 14.3176 11.0169ZM19.1953 13.6679C18.4938 12.9802 17.5424 12.5939 16.5504 12.5939C15.5583 12.5939 14.6069 12.9802 13.9055 13.6679C13.204 14.3557 12.8099 15.2884 12.8099 16.261C12.8099 17.2336 13.204 18.1663 13.9055 18.854C14.6069 19.5418 15.5583 19.9281 16.5504 19.9281C17.5424 19.9281 18.4938 19.5418 19.1953 18.854C19.8968 18.1663 20.2909 17.2336 20.2909 16.261C20.2909 15.2884 19.8968 14.3557 19.1953 13.6679Z"
										fill="white"
									/>
								</svg>
							</a>

							<a href="https://discord.gg/R2yCwzSBdC" target="_BLANK">
								<svg
									width="31"
									height="35"
									viewBox="0 0 31 35"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20.3175 16.625C20.3175 17.6925 19.53 18.5675 18.5325 18.5675C17.5525 18.5675 16.7475 17.6925 16.7475 16.625C16.7475 15.5575 17.535 14.6825 18.5325 14.6825C19.53 14.6825 20.3175 15.5575 20.3175 16.625ZM12.145 14.6825C11.1475 14.6825 10.36 15.5575 10.36 16.625C10.36 17.6925 11.165 18.5675 12.145 18.5675C13.1425 18.5675 13.93 17.6925 13.93 16.625C13.9475 15.5575 13.1425 14.6825 12.145 14.6825ZM30.625 3.605V35C26.2162 31.1039 27.6262 32.3936 22.505 27.6325L23.4325 30.87H3.5875C1.61 30.87 0 29.26 0 27.265V3.605C0 1.61 1.61 0 3.5875 0H27.0375C29.015 0 30.625 1.61 30.625 3.605ZM25.6375 20.195C25.6375 14.56 23.1175 9.9925 23.1175 9.9925C20.5975 8.1025 18.2 8.155 18.2 8.155L17.955 8.435C20.93 9.345 22.3125 10.6575 22.3125 10.6575C18.1555 8.37915 13.2724 8.37874 9.24 10.15C8.5925 10.4475 8.2075 10.6575 8.2075 10.6575C8.2075 10.6575 9.66 9.275 12.81 8.365L12.635 8.155C12.635 8.155 10.2375 8.1025 7.7175 9.9925C7.7175 9.9925 5.1975 14.56 5.1975 20.195C5.1975 20.195 6.6675 22.7325 10.535 22.855C10.535 22.855 11.1825 22.0675 11.7075 21.4025C9.485 20.7375 8.645 19.3375 8.645 19.3375C8.90244 19.5177 9.32695 19.7513 9.3625 19.775C12.3163 21.4292 16.5121 21.9711 20.2825 20.3875C20.895 20.16 21.5775 19.8275 22.295 19.355C22.295 19.355 21.42 20.79 19.1275 21.4375C19.6525 22.1025 20.2825 22.855 20.2825 22.855C24.15 22.7325 25.6375 20.195 25.6375 20.195V20.195Z"
										fill="white"
									/>
								</svg>
							</a>

							<a href="" target="_BLANK">
								<svg
									width="33"
									height="33"
									viewBox="0 0 63 63"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M62.1702 31.0236C62.1702 48.1565 48.2795 62.0472 31.1466 62.0472C14.0137 62.0472 0.123047 48.1565 0.123047 31.0236C0.123047 13.8907 14.0137 0 31.1466 0C48.2831 0 62.1702 13.8907 62.1702 31.0236ZM15.4288 32.066L15.5626 31.8556L23.6331 19.2304C23.751 19.0456 24.0283 19.0647 24.1176 19.2655C25.4658 22.2871 26.6292 26.045 26.0842 28.3846C25.8515 29.3472 25.2141 30.6508 24.4969 31.8556C24.4045 32.031 24.3025 32.2031 24.1941 32.3688C24.1431 32.4453 24.057 32.49 23.9646 32.49H15.6646C15.4415 32.49 15.3108 32.2477 15.4288 32.066ZM51.4016 36.4105V34.412C51.4016 34.2271 51.2231 34.0933 51.0478 34.1443L41.61 36.8727C41.559 36.8854 41.5143 36.914 41.4792 36.9523C40.4684 38.0689 39.6093 38.8183 39.3818 39.0167L39.366 39.0305C38.7796 39.5277 38.0528 39.7987 37.2878 39.7987H33.8709V36.3149H36.5866C36.6567 36.3149 36.7237 36.2893 36.7747 36.2447L37.1253 35.9228C37.2751 35.7857 37.4536 35.62 37.6671 35.4064C37.6853 35.3883 37.7037 35.3699 37.7223 35.3513C37.8345 35.2396 37.9544 35.1201 38.0719 34.9889C38.2122 34.8518 38.3493 34.6988 38.4767 34.549C38.6903 34.3195 38.8943 34.0805 39.1078 33.8287C39.2609 33.663 39.4011 33.4749 39.5381 33.2868C39.6912 33.1083 39.8409 32.9075 39.9812 32.7163C40.0334 32.6396 40.0889 32.562 40.1457 32.4828C40.1998 32.4073 40.255 32.3303 40.3095 32.2509C40.4115 32.0979 40.5135 31.9354 40.5995 31.7824C40.8673 31.368 41.0936 30.9249 41.2848 30.4819C41.3726 30.2922 41.4428 30.0924 41.511 29.8981C41.5196 29.8738 41.5281 29.8495 41.5366 29.8253C41.6131 29.599 41.6769 29.3855 41.7247 29.1591C41.8394 28.6268 41.8649 28.0978 41.8139 27.5686C41.8012 27.4029 41.7884 27.2403 41.7502 27.0874V27.0619C41.7374 26.9535 41.7119 26.8324 41.6768 26.7208C41.5621 26.2044 41.3836 25.6881 41.1573 25.1813C41.0808 24.9932 40.9916 24.802 40.9055 24.6267C40.7015 24.2474 40.488 23.8681 40.2457 23.5015C40.1971 23.4241 40.1434 23.3457 40.0898 23.2674C40.0485 23.2071 40.0073 23.1468 39.9684 23.0872C39.815 22.8506 39.6426 22.6225 39.4752 22.4011C39.4374 22.3511 39.3998 22.3015 39.3628 22.2521C39.264 22.1224 39.1558 21.9926 39.047 21.8621C38.9873 21.7905 38.9275 21.7187 38.8688 21.6465C38.7031 21.4457 38.5405 21.2544 38.3748 21.0664C37.7819 20.397 37.1604 19.7914 36.6057 19.2751C36.5037 19.1731 36.3922 19.0711 36.2774 18.9723C35.8471 18.5802 35.4551 18.2391 35.1268 17.9746C35.0282 17.8988 34.9397 17.824 34.8573 17.7544C34.8013 17.7071 34.7481 17.6621 34.6965 17.6208C34.597 17.5467 34.5106 17.4809 34.4381 17.4257C34.3922 17.3907 34.3518 17.3599 34.3172 17.3339C34.2917 17.3148 34.263 17.3021 34.2344 17.2925L33.8709 17.1905V14.1816C33.8709 13.6908 33.6733 13.2509 33.3578 12.929C33.0422 12.6071 32.6024 12.4094 32.1179 12.4094C31.1489 12.4094 30.3648 13.2031 30.3648 14.1816V16.2088L30.1832 16.1578L29.6891 16.0175L29.2397 15.8933C29.2384 15.8933 29.237 15.8927 29.2355 15.8921C29.2333 15.8911 29.2307 15.89 29.227 15.89H29.2174L25.8069 14.9657C25.6571 14.9243 25.5296 15.0868 25.6061 15.2239L26.1511 16.2311C26.1821 16.3085 26.2213 16.3859 26.2615 16.4655C26.2876 16.517 26.3141 16.5693 26.3392 16.6232C26.4284 16.8016 26.5177 16.9897 26.6037 17.1778C26.6802 17.3435 26.7567 17.5061 26.846 17.6846C26.8835 17.7685 26.9217 17.8534 26.9605 17.9396C27.103 18.2559 27.2528 18.5886 27.4005 18.9468C27.528 19.2496 27.6556 19.5524 27.7671 19.8679C28.0731 20.6616 28.3631 21.5094 28.615 22.3796C28.6777 22.5744 28.7277 22.7628 28.7785 22.9538C28.8 23.0348 28.8217 23.1162 28.8444 23.1988L28.8795 23.3517C28.9815 23.7566 29.0708 24.1581 29.1345 24.5629C29.1855 24.8402 29.2333 25.1048 29.2588 25.3725C29.2971 25.6753 29.3353 25.9782 29.3481 26.281C29.3736 26.5582 29.3863 26.8483 29.3863 27.1256C29.3863 27.8332 29.3226 28.5153 29.1727 29.1591C29.1633 29.1938 29.1539 29.2288 29.1445 29.2642C29.1025 29.4208 29.059 29.5832 29.007 29.7393C28.9599 29.9064 28.8989 30.0736 28.8356 30.2471C28.8131 30.3085 28.7904 30.3708 28.7679 30.4341C28.7637 30.4454 28.7596 30.4566 28.7554 30.468C28.7085 30.5942 28.6607 30.7227 28.6022 30.8485C28.2866 31.6071 27.8946 32.3625 27.4898 33.0701C26.897 34.1188 26.3009 35.0399 25.8834 35.6328C25.8578 35.6711 25.8329 35.7075 25.8089 35.7426C25.779 35.7863 25.7505 35.8279 25.724 35.8686C25.5934 36.0534 25.7272 36.3149 25.9535 36.3149H30.3648V39.7987H25.9025C24.704 39.7987 23.5948 39.1198 23.0593 38.0328C22.7821 37.4878 22.6737 36.8885 22.7374 36.3021C22.7533 36.1268 22.6227 35.9611 22.4442 35.9611H13.4302C13.2772 35.9611 13.153 36.0853 13.153 36.2383V36.4232C13.153 42.1733 17.797 46.8332 23.5279 46.8332H39.6975C42.7285 46.8332 44.4496 44.0712 46.1412 41.3564C46.6127 40.5996 47.082 39.8465 47.5767 39.158C48.466 37.9213 50.6048 36.9395 51.2294 36.6718C51.3315 36.6272 51.4016 36.5252 51.4016 36.4105Z"
										fill="white"
									/>
								</svg>
							</a>
						</div>

						<p>
							&copy; 2022 <span>Medical Heroes </span> - All Rights Reserved{" "}
							<br />
							<br /> Brought to You by{" "}
							<a href="https://www.nftconstructer.com/" target="_BLANK">
								NFT Constructor
							</a>
						</p>
					</div>

					<img src="/images/footer-img-1.png" alt="" className="footer-img-1" />
					<img src="/images/footer-img-2.png" alt="" className="footer-img-2" />
				</footer>
			</main>
		</React.Fragment>
	);
};

export default App;
