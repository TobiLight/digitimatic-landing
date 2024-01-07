<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import './main.css';
	import { THEMES } from '$lib/config/index';
	import { onMount } from 'svelte';
	import Moon from '$lib/icons/Moon.svelte';
	import Sun from '$lib/icons/Sun.svelte';

	let darkMode: boolean = false;

	// function set_theme(theme: string) {
	// 	if (!Object.values(THEMES).includes(theme)) return;
	// 	localStorage.setItem('digi-theme', theme);
	// 	document.body.setAttribute('data-theme', theme);
	// }

	// function toggle_theme(): void {
	// 	let current_theme = document.body.getAttribute('data-theme');
	// 	const theme = current_theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
	// 	darkMode = !darkMode;
	// 	document.body.classList.toggle(current_theme as string);
	// 	set_theme(theme);
	// }

	// onMount(() => {
	// 	if (typeof window !== undefined)
	// 		darkMode = localStorage.getItem('digi-theme') === 'light' ? false : true;
	// });
	let currentTheme = '';

	onMount(() => {
		// currentTheme = document.documentElement.dataset.theme;
		const userPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

		const hasUserSetDarkModeManually = document.documentElement.dataset.theme == 'dark';

		if (!hasUserSetDarkModeManually) {
			setTheme(userPrefersDarkMode ? 'dark' : 'light');
		}
	});

	const setTheme = (theme: string) => {
		document.documentElement.dataset.theme = theme;
		document.cookie = `siteTheme=${theme};max-age=31536000;path="/"`;
		currentTheme = theme;
	};
</script>

<div class="app dark:bg-black dark:text-white bg-white">
	<header class="flex items-center p-3 w-full justify-between">
		<div class="logo w-36">
			{#if currentTheme === 'dark'}
				<img
					src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/jyhuiubuywqacrjeptfw"
					alt="Digitimatic"
					class="w-auto h-fit object-contain"
				/>
			{:else}
				<img
					src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto,w_800,h_300/v1/digitimatic-media/nqojmhymz0jp4zvqv7cw"
					alt="Digitimatic"
					class="w-auto h-fit object-contain"
				/>
				<!-- <img
					src="https://res.cloudinary.com/dmqndbqqy/image/upload/v1/digitimatic-media/jyhuiubuywqacrjeptfw"
					alt="Digitimatic"
					class="w-[135px] h-[60px] object-contain bg-black rounded"
				/> -->
			{/if}
		</div>
		<div class="flex gap-3">
			{#if currentTheme === 'light'}
				<button
					class=""
					on:click={() => {
						// toggle_theme();
						// let theme = localStorage.getItem('digi-theme')
						// document.body.classList.toggle(theme ? theme : 'dark')
						setTheme('dark');
					}}><Moon class="w-6 h-6" /></button
				>
			{:else}
				<button
					class=""
					on:click={() => {
						// toggle_theme();
						// let theme = localStorage.getItem('digi-theme')
						// document.body.classList.toggle(theme ? theme : 'dark')
						setTheme('light');
					}}><Sun class="w-6 h-6" /></button
				>
			{/if}
			<a
				href="/#"
				class="border-2 border-black dark:bg-white dark:text-black font-bold px-4 py-2 rounded"
				>Join The Waitlist</a
			>
		</div>
	</header>
	<main class="min-h-screen">
		<slot />
	</main>
	<Footer />
</div>
