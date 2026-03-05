"use client";

import { useEffect, useState, useRef  } from "react";

import CubeScene 		    from "./components/details/commandblock";
import ScrollArrowSmart     from "./components/details/arrow";
import SkillsGrid 		    from "./components/skills";
import { useSectionScroll } from "./components/sections";
import ListProjects 		from "./components/projects";

import dev from "./profile.json";

const sections = [
	{ id: "inicio", label: "Inicio" },
	{ id: "sobremim", label: "Sobre Mim" },
	{ id: "habilidades", label: "Habilidades" },
	{ id: "projetos", label: "Projetos" },
];

export default function Page() {
  	const [setActive] = useState("inicio");
  	const isScrolling = useRef(false);
	const { active, sectionRefs, handleClick } = useSectionScroll(sections);

	return (
		<div className="overflow-hidden overflow-y-hidden">
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundImage: "url('https://i.redd.it/qoon2h51tnab1.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					filter: "grayscale(100%) brightness(0.1) blur(5px)",
					zIndex: -1,
				}}
			></div>

			<div className="absolute top-0 left-0 w-full h-50 bg-gradient-to-b from-[var(--color-bg-gradient)]/20 to-transparent z-0" />


			<div className="w-screen min-h-screen text-[var(--color-text-white)] z-10 snap-y snap-proximity">
				{ 
					/*
						Parte responsável pelo menu de navegação fixa no topo, o que brilha a seção ativa.
					*/
				}
				<footer className="fixed top-0 left-0 w-auto text-[var(--color-text-white)] p-4 z-50 items-center justify-center w-full flex">
					<div className="flex items-center space-x-4 text-sm text-[var(--color-text-gray-500)] bg-[var(--color-bg-darkest)]/80 py-3 px-4 border border-[var(--color-border-dark)] rounded-md">
					{sections.map((s, idx) => (
						<span key={s.id} className="flex items-center gap-1">
						<button
							onClick={() => handleClick(s.id)}
							className={`transition-colors duration-300 ${ active === s.id ? "text-[var(--color-accent-indigo)] drop-shadow-[0_0_4px_var(--color-accent-indigo)]" : "text-[var(--color-text-gray-500)]" }`}>
							{s.label}
						</button>
						{idx < sections.length - 1 && <span>•</span>}
						</span>
					))}
					</div>
				</footer>

				{ 
					/*
						Parte responsável pelo inicio, a introdução do site
					*/
				}
				<section
					id="inicio"
					ref={(el) => {
					if (el) sectionRefs.current["inicio"] = el;
					}}
					className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center snap-start">

					<div className="relative top-0 w-full md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center  p-10 text-[var(--color-text-white)]">
						<div className="absolute mx-auto w-20 h-20 bg-[var(--color-bg-black)] top-20 rounded-full blur-[30px] pointer-events-none -z-0" />
						
						<CubeScene />							

						<h2 className="text-center text-4xl font-semibold max-w-2xl"><span className="bg-gradient-to-t from-[var(--color-gradient-indigo-dark)] to-transparent p-1 bg-left rounded inline-block bg-no-repeat">{dev.desenvolvedor["dev"]}</span></h2>

						<p className="text-[var(--color-text-gray-light)] text-sm mt-2 mb-4 whitespace-normal">Desenvolvedor Full-Stack focado em <a className="text-[var(--color-text-white)]">sistemas, automações e integrações</a>.</p>

						<div className="relative flex justify-center items-center gap-4">
							<div className="flex items-center gap-2 text-sm text-[var(--color-primary-accent)] bg-[var(--color-bg-overlay)]/50 border border-[var(--color-border-purple)] rounded-full px-4 py-1">
								<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
									stroke="var(--color-primary-accent)" strokeMiterlimit="5" strokeLinecap="round" />
								</svg>
								<span>Em constante desenvolvimento</span>
							</div>
						</div>

						<div className="relative flex flex-wrap items-center justify-center gap-6 md:gap-8 py-10">
							<button onClick={() => window.open(dev.redes_sociais.github, "_blank")} type="button" className="bg-[var(--color-primary-light-10)] text-[var(--color-primary-dark)] border-[var(--color-primary-dark)] active:scale-95 transition text-sm flex items-center px-4 py-2 gap-2 rounded w-max border relative h-12 w-40 overflow-hidden before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[var(--color-shadow-red)] hover:before:-translate-x-40 hover:bg-[var(--color-primary-light)]/10 hover:text-[var(--color-primary-light)] hover:border-[var(--color-primary-light)]">
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 30 30">
									<path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
								</svg>
								GitHub
							</button>

							<button onClick={() => window.open(dev.redes_sociais.linkedin, "_blank")} type="button" className="bg-[var(--color-primary-light-10)] text-[var(--color-primary-dark)] border-[var(--color-primary-dark)] active:scale-95 transition text-sm flex items-center px-4 py-2 gap-2 rounded w-max border relative h-12 w-40 overflow-hidden before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[var(--color-shadow-red)] hover:before:-translate-x-40 hover:bg-[var(--color-primary-light)]/10 hover:text-[var(--color-primary-light)] hover:border-[var(--color-primary-light)]">
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 30 30">
									<path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
								</svg>
								LinkedIn
							</button>

							<button onClick={() => window.open(dev.redes_sociais.youtube, "_blank")} type="button" className="bg-[var(--color-primary-light-10)] text-[var(--color-primary-dark)] border-[var(--color-primary-dark)] active:scale-95 transition text-sm flex items-center px-4 py-2 gap-2 rounded w-max border relative h-12 w-40 overflow-hidden before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[var(--color-shadow-red)] hover:before:-translate-x-40 hover:bg-[var(--color-primary-light)]/10 hover:text-[var(--color-primary-light)] hover:border-[var(--color-primary-light)]">
								<svg width="16" height="12" fill="currentColor" viewBox="0 0 16 12">
									<path d="M15.8 1.5s-.2-1.4-1-2c-.9-.8-1.9-.8-2.4-.9C10 0 8 0 8 0H8s-2 0-4.4.1c-.5 0-1.5 0-2.4.9-.8.6-1 2-1 2S0 3 0 4v4c0 1 .2 2 0 2s.2 1.4 1 2c.9.8 2 .8 2.5.9C6 12 8 12 8 12s2 0 4.4-.1c.5 0 1.5 0 2.4-.9.8-.6 1-2 1-2s.2-1.2.2-2V4c0-1-.2-2-.2-2zM6 8V4l4 2-4 2z"/>
								</svg>
								YouTube
							</button>

							<button onClick={() => window.open(dev.redes_sociais.discord, "_blank")} type="button" className="bg-[var(--color-primary-light-10)] text-[var(--color-primary-dark)] border-[var(--color-primary-dark)] active:scale-95 transition text-sm flex items-center px-4 py-2 gap-2 rounded w-max border relative h-12 w-40 overflow-hidden before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[var(--color-shadow-red)] hover:before:-translate-x-40 hover:bg-[var(--color-primary-light)]/10 hover:text-[var(--color-primary-light)] hover:border-[var(--color-primary-light)]">
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 50 50">
									<path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
								</svg>
								Discord
							</button>

						</div>

					</div>


					<div className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-t from-black/56 h-100 to-transparent pointer-events-none -z-1"></div>
				</section>

				{ 
					/*
						Parte responsável pelo sessão "sobre mim", só ler porra kkkkkkkkkkkkkk
					*/
				}
				<section
					id="sobremim"
					ref={(el) => {
						if (el) sectionRefs.current["sobremim"] = el;
					}}
					className="relative w-full min-h-[102vh] md:min-h-[100vh] flex items-start pt-12 md:pt-28 snap-start">
				
					<div className="absolute inset-0 grid-background -z-1"></div>
		
					<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-4 md:px-0 py-6 md:py-10 w-full">
						<div className="relative shrink-0 flex justify-center md:justify-start">
							<div className="overflow-hidden rounded-xl h-40 w-40 md:h-80 md:w-80 border border-[var(--color-border-medium)] shadow-lg shadow-[var(--color-black-opacity-50)]">
								<img
									className="w-full h-full object-cover scale-110 grayscale"
									src="./eu.jpg"
									alt=""
								/>
							</div>
						</div>

						<div className="w-full md:w-auto">
							<h1 className="text-3xl font-semibold text-center md:text-left">{dev.desenvolvedor["dev.nome"]}</h1>
							<p className="text-sm text-[var(--color-text-gray-medium)] mt-2 text-center md:text-left whitespace-normal">
								Sou <span className="bg-[var(--color-text-white)] inline-block text-transparent bg-clip-text">{dev.desenvolvedor["dev.é"]}</span>, tenho grande interesse pela <span className="bg-[var(--color-text-white)] inline-block text-transparent bg-clip-text">{dev.desenvolvedor["dev.gosta"]}</span> e <span className="bg-[var(--color-text-white)] inline-block text-transparent bg-clip-text">gosto de aprender constantemente</span>.
							</p>

							<div className="flex flex-col gap-6 md:gap-10 mt-6">
								<div className="flex items-center gap-3 md:gap-4">

							<div className="size-7 md:size-8 flex flex-shrink-0 items-center justify-center text-[var(--color-primary-dark)]
													bg-[var(--color-primary-light-10)] 
													border border-[var(--color-primary-dark)] 
													rounded 
													shadow-lg shadow-[var(--color-black-opacity-50)]">
										<svg xmlns="http://www.w3.org/2000/svg" height="18" fill="currentColor" viewBox="0 0 24 24" width="18" className="md:w-5 md:h-5"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"/></svg>
									</div>

									<div>
										<h3 className="text-sm md:text-base font-medium text-[var(--color-text-white)]">Desempenho</h3>
										<p className="text-xs md:text-sm text-[var(--color-text-gray-dark)] whitespace-normal">Sempre entrego o meu melhor em cada projeto, buscando <span className="bg-gradient-to-t from-[rgba(var(--color-gradient-dark-rgb),0.6)] to-[rgba(var(--color-gradient-light-rgb),0.6)] text-[var(--color-text-white)] p-1 bg-left inline-block bg-no-repeat">excelência, qualidade e alto desempenho</span> em cada detalhe.</p>
									</div>
								</div>
								<div className="flex items-center gap-3 md:gap-4">
									<div className="size-7 md:size-8 flex flex-shrink-0 items-center justify-center text-[var(--color-primary-dark)]
												bg-[var(--color-primary-light-10)] 
												border border-[var(--color-primary-dark)] 
												rounded 
												shadow-lg shadow-[var(--color-black-opacity-50)]">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" version="1.1" id="mdi-palette" width="18" height="18" className="md:w-5 md:h-5" viewBox="0 0 24 24"><path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z" /></svg>
									</div>

									<div>
										<h3 className="text-sm md:text-base font-medium text-[var(--color-text-white)]">Criatividade</h3>
										<p className="text-xs md:text-sm text-[var(--color-text-gray-dark)] whitespace-normal">Empenhar minha criatividade não é uma escolha, <span className="bg-gradient-to-t from-[rgba(var(--color-gradient-dark-rgb),0.6)] to-[rgba(var(--color-gradient-light-rgb),0.6)] text-[var(--color-text-white)] p-1 bg-left inline-block bg-no-repeat">é um propósito.</span></p>
									</div>
								</div>
								<div className="flex items-center gap-3 md:gap-4">
									<div className="size-7 md:size-8 flex flex-shrink-0 items-center justify-center text-[var(--color-primary-dark)]
													bg-[var(--color-primary-light-10)] 
													border border-[var(--color-primary-dark)] 
													rounded 
													shadow-lg shadow-[var(--color-black-opacity-50)]">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" version="1.1" id="mdi-puzzle" width="18" height="18" className="md:w-5 md:h-5" viewBox="0 0 24 24"><path d="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z" /></svg>
									</div>

									<div>
									
										<h3 className="text-sm md:text-base font-medium text-[var(--color-text-white)]">Aprendizado</h3>
										<p className="text-xs md:text-sm text-[var(--color-text-gray-dark)] whitespace-normal">Sou alguém que gosta de aprender e evoluir todos os dias. A tecnologia é minha paixão, e estou sempre buscando crescer, entender mais e <span className="bg-gradient-to-t from-[rgba(var(--color-gradient-dark-rgb),0.6)] to-[rgba(var(--color-gradient-light-rgb),0.6)] text-[var(--color-text-white)] p-1 bg-left inline-block bg-no-repeat">fazer melhor do que ontem</span>.</p>
									</div>
								</div>
							</div>						
						</div>
					</div>

					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none">
						<h1
							className="
							text-center font-extrabold leading-[0.7]
							text-transparent
							text-[clamp(3rem,10vw,10rem)]
							[-webkit-text-stroke:1px_var(--color-primary-stroke)]
							opacity-20
							"
						>
							Sobre mim
						</h1>
					</div>

					<div className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-t from-black/56 h-100 to-transparent pointer-events-none -z-1"></div>
				</section>

				{ 
					/*
						Parte responsável pelo sessão "habilidades"..
					*/
				}
				<section
					id="habilidades"
					ref={(el) => {
					if (el) sectionRefs.current["habilidades"] = el;
					}}
					className="relative w-full min-h-[104vh] md:min-h-[102vh] flex items-start pt-12 md:pt-28 snap-start">

					<div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 -z-1">
						<h1 className="text-center font-extrabold leading-[0.7] text-transparent text-[clamp(3rem,10vw,10rem)] [-webkit-text-stroke:1px_var(--color-primary-stroke)] mt-6">
							Habilidades
						</h1>
					</div>

					<SkillsGrid/>
					<div className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-t from-black/56 h-100 to-transparent pointer-events-none -z-1"></div>
				</section>

				{ 
					/*
						Parte responsável pelo sessão "projetos"..
					*/
				}
				<section
					id="projetos"
					ref={(el) => {
					if (el) sectionRefs.current["projetos"] = el;
					}}
					className="relative w-full min-h-[104vh] md:min-h-[102vh] flex items-start pt-12 md:pt-28 snap-start">

					<div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 -z-1">
						<h1 className="text-center font-extrabold leading-[0.7] text-transparent text-[clamp(3rem,10vw,10rem)] [-webkit-text-stroke:1px_var(--color-primary-stroke)] mt-6">
							Projetos
						</h1>
					</div>

					<ListProjects/>
					<div className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-t from-black/56 h-100 to-transparent pointer-events-none -z-1"></div>
				</section>
			</div>

			<ScrollArrowSmart />
		</div>
	);
}
