<script>
	import { tabItems,activeTab } from '@/components/store';


	import Thunbnails from '@/components/Thumbnails.svelte';
</script>


<div class="bg-hex-181818 mt-105px py-5 w-full">
	{#each $tabItems as _, index}
		<Thunbnails tag={$activeTab} />
	{/each}

</div>