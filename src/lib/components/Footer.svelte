<script>
	import Instagram from '$lib/icons/Instagram.svelte'
	import Twitter from '$lib/icons/Twitter.svelte'
</script>
<footer class="border-t dark:border-white border-black pt-4 flex flex-col items-center justify-center gap-4 pb-2">
	<div class="flex mx-auto gap-4">
		<a href="/#" class="rounded-full p-3 border dark:text-white text-black dark:border-white border-black hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white">
			<Instagram />
		</a>
		<a href="/#" class="rounded-full p-3 border dark:text-white text-black dark:border-white border-black hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white">
			<Twitter />
		</a>
	</div>
	<p>&copy; {new Date().getFullYear()} Digitimatic. All rights reserved</p>
</footer>