<script lang="ts">
	import ArrowLeft from '$lib/icons/ArrowLeft.svelte';
</script>

<div>
	<section
		id="heading"
		class="pt-32 pb-44 sticky h-auto top-0 flex justify-end flex-col items-stretch z-[1]"
	>
		<div class="grid mx-auto md:mx-auto px-8 relative md:w-[560px]">
			<div
				class="w-[200px] relative top-2 right-[-80px] sm:top-2 sm:right-[-125px] md:top-[10px] md:right-[-205px]"
			>
				<p class="leading-[1] font-semibold">
					A Modern <br /> Executive’s Personal Branding Agency
				</p>
				<div class="h-[2px] w-[50px] bg-black dark:bg-white absolute top-[12px] right-[70px]"></div>
			</div>
			<h1 class="text-5xl sm:text-[5rem] md:text-7xl leading-[1] font-bold text-centr">Our story is telling yours.</h1>
		</div>
		<div class="w-fit grid mx-auto relative top-12 lg:top-[15px] lg:right-[-280px]">
			<ArrowLeft class="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 dark:text-white animate-bounce" />
			<a
				href="/#"
				class="px-6 py-2 w-fit h-fit rounded border-2 border-black dark:border-white text-center hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white transition-all ease-linear"
				>Learn More</a
			>
		</div>
	</section>
	
	<section
		class="h-auto font-roboto flex flex-col lg:flex-row lg:items-start dark:bg-black bg-white z-[4] border-t-2 border-black dark:border-white relative top-0 px-6"
	>
		<div class="what-we-do grid gap-4 md:gap-10 py-12">
			<div class="flex items-center gap-4">
				<h1 class="w-[160px] font-bold text-sm md:text-lg">What We Do</h1>
				<div class="w-full h-[2px] dark:bg-white bg-black"></div>
			</div>
			<p class="tracking-wider md:text-4xl md:leading-[1.1] md:tracking-wide">
				In an age of abundance, building a <span class="font-extrabold"
					>trusted audience is priceless</span
				>. Executives are becoming the most important stewards of their company, but they lack the
				time and skills to build their personal brand.
				<span class="font-extrabold">Digitimatic exists to help build your niche online</span> through
				authentic and authoritative, whip-smart content.
			</p>
		</div>
		<hr class="hidden lg:grid h-[inherit] w-2 dark:bg-white bg-black">
		<div class="who-we-help grid gap-4 md:gap-10 py-12">
			<div class="flex items-center gap-4">
				<h1 class="w-[160px] font-bold text-sm md:text-lg">Who We Help</h1>
				<div class="w-full h-[2px] dark:bg-white bg-black"></div>
			</div>
			<p class="tracking-wider md:text-4xl md:leading-[1.1] md:tracking-wide">
				<span class="font-extrabold">Digitimatic</span> helps top executives, investors and
				entrepreneurs <span class="font-extrabold">build their personal brand</span> and own their
				corner of the internet, by capturing, sharing and amplifying their
				<span class="font-extrabold">storied careers, unique insights and timeless lessons</span> on
				the platforms most deeply connected with their target audience.
			</p>
		</div>
	</section>

	<section class="border-t-2 border-black dark:border-white flex flex-col md:flex-row">
		<div class="pt-6">
			<h1 class="text-4xl">Your mini media company.</h1>
		</div>
	</section>
</div>
