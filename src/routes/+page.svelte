<script lang="ts">
	import ArrowLeft from '$lib/icons/ArrowLeft.svelte';
	import Growth from '$lib/icons/Growth.svelte';
	import Capture from '$lib/icons/Capture.svelte';
	import Translate from '$lib/icons/Translate.svelte';
	import { fade } from 'svelte/transition';

	let services = [
		{
			id: 'social-content',
			name: 'SOCIAL CONTENT',
			content:
				'Expertly tailored personal copy, written in your voice, strategically positioned to grow and convert your online niche.',
			show: false
		},
		{
			id: 'graphics',
			name: 'GRAPHICS + VIDEO',
			content:
				'Engage your personal and company audiences with custom branded visuals and concise short-form videos.',
			show: false
		},
		{
			id: 'newsletters',
			name: 'NEWSLETTERS',
			content:
				'Monetize and nurture your owned audience with long-form content expertly crafted into modern newsletter formats.',
			show: false
		},
		{
			id: 'podcasts',
			name: 'PODCASTS',
			content:
				'Expand your niche conversation and reach with full-stack podcast production. Expertly capture and publish interviews to amplify your influence.',
			show: false
		},
		{
			id: 'case-studies',
			name: 'CASE STUDIES',
			content:
				'Showcase the success of your products, services, and strategies through influential stories. Versatile for both executives and companies alike.',
			show: false
		},
		{
			id: 'events',
			name: 'DIGITAL EVENTS',
			content:
				'Receive comprehensive marketing support for digital events – from promotional efforts to seamless registration and hosting. All aligned with your overarching media plan.',
			show: false
		}
	];

	function toggleContent(id: string) {
		services = services.map((service) => {
			if (service.id === id) {
				service.show = !service.show;
			}
			return service;
		});
	}
</script>

<div>
	<section
		id="heading"
		class="pb-32 md:pb-44 md:sticky top-0 flex justify-end flex-col items-stretch z-[1]"
	>
		<div class="h-full pt-14">
			<div class="grid mx-auto md:mx-auto px-8 relative md:w-[760px]">
				<div
					class="w-[200px] relative top-2 right-[-100px] sm:top-2 sm:right-[-195px] md:top-[10px] md:right-[-285px]"
				>
					<p class="leading-[1] font-semibold">
						A Modern <br /> Executive’s Personal Branding Agency
					</p>
					<div
						class="h-[2px] w-[50px] bg-black dark:bg-white absolute top-[12px] right-[70px]"
					></div>
				</div>
				<h1 class="text-5xl sm:text-[5rem] md:text-7xl leading-[1] font-bold text-centr">
					Telling your story is at the heart of our narrative.
				</h1>
			</div>
			<div class="w-fit grid mx-auto relative top-12 lg:top-[15px] lg:right-[-70px]">
				<ArrowLeft
					class="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 dark:text-white animate-bounce"
				/>
				<a
					href="/#"
					class="px-6 py-2 w-fit h-fit rounded border-2 border-black dark:border-white text-center hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white transition-all ease-linear font-bold"
					>Learn More</a
				>
			</div>
		</div>
	</section>

	<section
		class="h-auto font-robto flex flex-col lg:flex-row lg:gap-8 lg:items-start dark:bg-black bg-white z-[4] border-t-2 border-black dark:border-white relative top-0 px-6"
	>
		<div class="what-we-do grid gap-4 md:gap-10 py-12">
			<div class="flex items-center gap-4">
				<h1 class="w-[160px] font-bold text-sm md:text-lg">What We Do</h1>
				<div class="w-full h-[2px] dark:bg-white bg-black"></div>
			</div>
			<p class="tracking-wider md:text-4xl md:leading-[1.1] md:tracking-wide">
				In an era defined by information abundance, crafting <span class="font-bold"
					>a trusted audience is invaluable</span
				>. Executives are evolving into pivotal stewards of their companies, yet face challenges in
				time and expertise for personal brand development.
				<span class="font-bold"
					>Digitimatic exists to aid in building your niche online
				</span>through the creation of authentic, authoritative, and intellectually sharp content.
			</p>
		</div>
		<hr class="hidden lg:grid h-[inherit] w-2 dark:bg-white bg-black" />
		<div class="who-we-help grid gap-4 md:gap-10 py-12">
			<div class="flex items-center gap-4">
				<h1 class="w-[160px] font-bold text-sm md:text-lg">Who We Help</h1>
				<div class="w-full h-[2px] dark:bg-white bg-black"></div>
			</div>
			<p class="tracking-wider md:text-4xl md:leading-[1.1] md:tracking-wide">
				<span class="font-bold">Digitimatic</span> empowers top executives, investors, and
				entrepreneurs to strategically
				<span class="font-bold">build their personal brand</span>, asserting authority in their
				niche on the internet. By capturing, sharing, and amplifying their
				<span class="font-bold">storied careers, unique insights, and timeless lessons</span>,
				Digitimatic ensures a compelling presence on platforms deeply connected with their target
				audience.
			</p>
		</div>
	</section>

	<section
		class="dark:bg-black bg-white relative z-[3] border-t-2 border-black dark:border-white flex flex-col gap-6 md:flex-row p-4 pb-14"
	>
		<div class="pt-6">
			<h1 class="text-4xl sm:text-7xl md:text-8xl font-bold">Your mini media company.</h1>
		</div>
		<div class="border-y flex flex-col w-full md:w-11/12 mt-10">
			{#each services as item, index}
				<div id={item.id} class={`grid p-3 ${index > 0 ? 'border-t' : ''}`}>
					<div class="flex items-center justify-between">
						<p class="font-bold text-xl">{item.name}</p>
						{#if !item.show}
						<button class="relative top-2 accordion" on:click={() => toggleContent(item.id)}>
							<div class="w-6 h-1 dark:bg-white bg-black relative top-[4px] right-[-4px]"></div>
							<div class="h-6 w-1 dark:bg-white bg-black relative -top-[10px] -right-[14px]"></div>
						</button>
						{:else}
						<button class="relative accordion" on:click={() => toggleContent(item.id)}>
							<div class="w-6 h-1 dark:bg-white bg-black"></div>
						</button>
						{/if}
					</div>
					<div
						transition:fade
						class={`panel transition-all ease-in-out ${
							item.show ? 'max-h-[300px] py-1 opacity-1' : 'max-h-0 py-0 opacity-0'
						}`}
					>
						<p>
							{item.content}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section
		class="dark:bg-black bg-white relative z-[3] border-t-2 border-black dark:border-white flex flex-col gap-10 p-6"
	>
		<div class="flex items-center gap-2 pt-10">
			<div class="w-full h-[2px] dark:bg-white bg-black"></div>
			<p class="w-[36rem] text-center text-sm font-bold">Your Voice, Our Way</p>
			<div class="w-full h-[2px] dark:bg-white bg-black"></div>
		</div>

		<div class="flex flex-col lg:flex-row items-start gap-8">
			<div
				class="border dark:border-white border-black rounded-md p-4 w-full flex flex-col items-center justify-center hover:scale-105 transition-all ease-linear hover:ring-2 ring-green-300"
			>
				<h1 class="font-bold text-4xl">Capture</h1>
				<Capture class="w-64 h-64" />
				<p class="w-full px-10 text-center">
					Shape your narrative with stories, lessons, and insights captured through interviews and curated content.
				</p>
			</div>
			<div
				class="border dark:border-white border-black rounded-md p-4 w-full flex flex-col items-center justify-center hover:scale-105 transition-all ease-linear"
			>
				<h1 class="font-bold text-4xl">Translate</h1>
				<Translate class="w-64 h-64" />
				<p class="w-full px-10 text-center">
					Dedicated content and copywriting experts translate content into compelling stories, crafted in your unique voice and tone.
				</p>
			</div>
			<div
				class="border dark:border-white border-black rounded-md p-4 w-full flex flex-col items-center justify-center hover:scale-105 transition-all ease-linear"
			>
				<h1 class="font-bold text-4xl">Grow</h1>
				<Growth class="w-64 h-64" />
				<p class="w-full px-10 text-center">
					Customized strategies ensure your voice resonates authentically, while content strategically converts within your niche.
				</p>
			</div>
		</div>
	</section>

	<section class="bg-black relative z-[5]">
		<div id="contact" class="p-8 z-[6] dark:text-white text-white">
			<div class="py-4 max-w-[650px]">
				<h1 class="font-bold text-5xl w-full">Own Your Corner of the Internet in 5 Minutes</h1>
				<div class="grid w-full gap-5 mt-8">
					<p>
						Send us your email, and we’ll send you a few questions to make sure we’re a great fit.
					</p>

					<form action="" class="grid sm:flex w-full items-center gap-4">
						<input
							type="text"
							placeholder="name@example.com"
							class="bg-white p-[10px] rounded-md focus:outline-none w-full flex-1"
						/>
						<button class="p-3 rounded-md w-full sm:w-[25%] bg-black text-white h-auto"
							>Get Started</button
						>
					</form>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	#contact {
		border-top: 1px solid var(--dark--text);
		border-bottom: 1px solid var(--dark--text);
		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
			url(https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/grparh5unu3bantpdtmw);
		background-position:
			0 0,
			70% 0;
		background-size: auto, cover;
		background-attachment: scroll, fixed;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
	}
</style>
