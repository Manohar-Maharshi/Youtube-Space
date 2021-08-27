<script>
  	import { onMount } from "svelte";
	import { isActive, url } from '@roxi/routify';



	export let items = [];
	export let activeTabValue;


  onMount(() => {
    if (Array.isArray(items) && items.length && items[0].value) {
      activeTabValue = items[0].value;
    }
  });

  const handleClick = tabValue => () => (activeTabValue = tabValue);



  	  const links =[
  	  			['./index','Home'],
			    ['./explore', 'Explore'],
			    ['./subscriptions', 'Subscriptions'],
			]

</script>






<main class="fixed top-56px left-0px w-full z-3">

	<div class="px-12px w-full h-1px bg-true-gray-700" />
		<div class="flex items-center space-x-3 h-50px w-full bg-hex-181818 px-3">
			<ul class="flex items-center space-x-3">
				<li class="flex items-center space-x-3">
					 {#each links as [path, name]}
						<a href={$url(path)} class="{ $isActive(path) ? 'bg-true-gray-500 shadow' : '' } select-none hover:opacity-90 border border-hex-303030 flex items-center bg-hex-ffffff1a text-base text-gray-200 py-1.1 px-2 rounded-sm">
						 	{#if name === "Explore"}
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="mr-1 h-6 w-6 text-true-gray-100 fill-current" ><g class="style-scope yt-icon"><path d="M11.23 13.08c-.29-.21-.48-.51-.54-.86-.06-.35.02-.71.23-.99.21-.29.51-.48.86-.54.35-.06.7.02.99.23.29.21.48.51.54.86.06.35-.02.71-.23.99a1.327 1.327 0 01-1.08.56c-.28 0-.55-.08-.77-.25zM22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-3.97-6.03L9.8 9.8l-3.83 8.23 8.23-3.83 3.83-8.23z" class=" fill-current"></path></g></svg>
						 	{:else if name === "Subscriptions"}
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="mr-1 h-6 w-6 text-true-gray-100 fill-current" ><g class="style-scope yt-icon"><path d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z" class="style-scope yt-icon"></path></g></svg>
					 		{:else if name === "Home"}
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="mr-1 h-6 w-6 text-true-gray-100 fill-current"><g class="style-scope yt-icon"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8" class="style-scope yt-icon"></path></g></svg>
					 		{/if}
							<span>{name}</span>
						</a>
					{/each}
				</li>
			</ul>
			<div class="w-1px h-full bg-hex-ffffff1a" />
			<ul class="scroll-bar flex items-center space-x-3 h-50px">
				{#if Array.isArray(items)}
				  {#each items as item}
				  <a href="/">
				    <li on:click={handleClick(item.value)} class="{ activeTabValue === item.value ? ' select-none bg-gray-100 text-true-gray-900' : '' } whitespace-nowrap  cursor-pointer bg-hex-ffffff1a text-gray-200 text-sm  text-center px-3 py-2 rounded-full font-normal leading-none  flex-initial">
				      <span class="select-none">{item.label}</span>
				    </li>
				  </a>
				  {/each}
				{/if}
			</ul>
		</div>
	<div class="px-12px w-full h-1px bg-true-gray-700" />
</main>


<style>
	.scroll-bar{
		overflow-x: overlay;
		width: 100vw;
	}
	.scroll-bar::-webkit-scrollbar {
    	height: 7px;
    	display: none;
	}
	.scroll-bar:hover::-webkit-scrollbar{
		display: inline-block;
	}
	.scroll-bar::-webkit-scrollbar-track {
	    background-color: transparent;
	}

	.scroll-bar::-webkit-scrollbar-thumb {
	  background-color: #404040;
	  border-radius: 12px;
	}
</style>