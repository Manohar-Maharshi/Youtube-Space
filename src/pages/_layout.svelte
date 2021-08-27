<script>
	import NavBar from '@/components/NavBar.svelte'
	import { tabItems,activeTab } from '@/components/store';
	import Tabs from '@/components/Tabs.svelte';

</script>


<NavBar />

<Tabs bind:activeTabValue={$activeTab} items={$tabItems} />




<main class="bg-hex-181818 h-screen w-full">
	<slot/>
</main>

