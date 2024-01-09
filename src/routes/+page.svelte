<script lang="ts">
	import ArrowLeft from '$lib/icons/ArrowLeft.svelte';
	import Growth from '$lib/icons/Growth.svelte';
	import Capture from '$lib/icons/Capture.svelte';
	import Translate from '$lib/icons/Translate.svelte';
</script>

<div>
	<section
		id="heading"
		class="h-[80vh] pb-44 md:sticky top-0 flex justify-end flex-col items-stretch z-[1]"
	>
		<div class="h-full pt-14">
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
		</div>
	</section>
	
	<section
		class="h-auto font-roboto flex flex-col lg:flex-row lg:gap-8 lg:items-start dark:bg-black bg-white z-[4] border-t-2 border-black dark:border-white relative top-0 px-6"
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

	<section class="dark:bg-black bg-white relative z-[3] border-t-2 border-black dark:border-white flex flex-col gap-6 md:flex-row p-8">
		<div class="pt-6">
			<h1 class="text-4xl sm:text-7xl md:text-8xl font-bold">Your mini media company.</h1>
		</div>
		<div class="border-y flex flex-col w-full md:w-11/12 mt-10">
			<div class="flex items-center justify-between p-3">
				<p class="font-bold text-2xl">SOCIAL CONTENT</p>
				<!-- <Add class="w-8 h-8" /> -->
				<div class="relative top-2">
					<div class="w-6 h-1 dark:bg-white bg-black relative top-[4px] right-[-4px]"></div>
					<div class="h-6 w-1 dark:bg-white bg-black relative -top-[10px] -right-[14px]"></div>
				</div>
			</div>
			<div class="flex items-center justify-between p-3 border-t">
				<p class="font-bold text-2xl">GRAPHICS + VIDEO</p>
				<!-- <Add class="w-8 h-8" /> -->
				<div class="relative top-2">
					<div class="w-6 h-1 dark:bg-white bg-black relative top-[4px] right-[-4px]"></div>
					<div class="h-6 w-1 dark:bg-white bg-black relative -top-[10px] -right-[14px]"></div>
				</div>
			</div>
			<div class="flex items-center justify-between p-3 border-t">
				<p class="font-bold text-2xl">NEWSLETTERS</p>
				<!-- <Add class="w-8 h-8" /> -->
				<div class="relative top-2">
					<div class="w-6 h-1 dark:bg-white bg-black relative top-[4px] right-[-4px]"></div>
					<div class="h-6 w-1 dark:bg-white bg-black relative -top-[10px] -right-[14px]"></div>
				</div>
			</div>
			<div class="flex items-center justify-between p-3 border-t">
				<p class="font-bold text-2xl">PODCASTS</p>
				<!-- <Add class="w-8 h-8" /> -->
				<div class="relative top-2">
					<div class="w-6 h-1 dark:bg-white bg-black relative top-[4px] right-[-4px]"></div>
					<div class="h-6 w-1 dark:bg-white bg-black relative -top-[10px] -right-[14px]"></div>
				</div>
			</div>
			<div class="flex items-center justify-between p-3 border-t">
				<p class="font-bold text-2xl">CASE STUDIES</p>
				<!-- <Add class="w-8 h-8" /> -->
				<div class="relative top-2">
					<div class="w-6 h-1 dark:bg-white bg-black relative top-[4px] right-[-4px]"></div>
					<div class="h-6 w-1 dark:bg-white bg-black relative -top-[10px] -right-[14px]"></div>
				</div>
			</div>
			<div class="flex items-center justify-between p-3 border-t">
				<p class="font-bold text-2xl">DIGITAL EVENTS</p>
				<!-- <Add class="w-8 h-8" /> -->
				<div class="relative top-2">
					<div class="w-6 h-1 dark:bg-white bg-black relative top-[4px] right-[-4px]"></div>
					<div class="h-6 w-1 dark:bg-white bg-black relative -top-[10px] -right-[14px]"></div>
				</div>
			</div>
		</div>
	</section>

	<section class="dark:bg-black bg-white relative z-[3] border-t-2 border-black dark:border-white flex flex-col gap-10 p-8">
		<div class="flex items-center gap-2">
			<div class="w-full h-[2px] dark:bg-white bg-black"></div>
			<p class="w-[36rem] text-center text-sm font-bold">Your Voice, Our Way</p>
			<div class="w-full h-[2px] dark:bg-white bg-black"></div>
		</div>

		<div class="flex flex-col lg:flex-row items-center gap-4">
			<div class="border dark:border-white border-black rounded-md p-4 w-full flex flex-col items-center justify-center">
				<h1 class="font-bold text-4xl">Capture</h1>
				<Capture class="w-64 h-64" />
				<p class="w-full px-10 text-center">Your stories, lessons, & insights captured through interviews & curated  content that begins to shape your narrative.</p>
			</div>
			<div class="border dark:border-white border-black rounded-md p-4 w-full flex flex-col items-center justify-center">
				<h1 class="font-bold text-4xl">Capture</h1>
				<Translate class="w-64 h-64" />
				<p class="w-full px-10 text-center">Content is translated into compelling stories in your voice & tone by dedicated content & copywriting experts.</p>
			</div>
			<div class="border dark:border-white border-black rounded-md p-4 w-full flex flex-col items-center justify-center">
				<h1 class="font-bold text-4xl">Grow</h1>
				<Growth class="w-64 h-64" />
				<p class="w-full px-10 text-center">Your strategy is fully customized to ensure your voice resonates authentically &  content converts within your niche.</p>
			</div>
		</div>
	</section>
</div>
