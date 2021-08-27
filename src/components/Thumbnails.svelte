<script>
	import { keyword,explore,popular } from '@/components/videos';

	import moment from "moment";
	import numeral from "numeral";
	import LazyImage from 'svelte-lazy-image';
	import { Skeleton } from 'svelte-loading-skeleton';


	export let tag;


	const fetchData = async (tag) =>{
		return (tag === "All" ? await $popular : await $keyword);
	}

</script>


<div class="container mx-auto flex flex-wrap justify-center items-start w-full">
{#await fetchData(tag)}
	{#each Array(8) as _, index}
	<div class="m-2 mb-1">
		<Skeleton 
		  width="17rem"
		  height="16rem" 
		  borderRadius="4px" 
		  baseColor="#1c1c1e" 
		  highlightColor="#3c3c3c" 
		  animationLength="2s" 
		/>
	</div>
{/each}
{:then videos}
	{#each videos.items.sort(() => .5 - Math.random()) as video, index}
			<a href="/" class=" h-17rem  text-hex-fff m-2 p-1.5 mb-1 hover:bg-true-gray-800 rounded-sm">
				<div class="h-39 w-17rem">	
					<LazyImage loading="lazy" class="h-full w-full" src={video?.snippet?.thumbnails?.medium?.url} placeholder="{index}" alt={video?.snippet?.localized?.title} />
				</div>
				<div class="mt-3 flex items-start space-x-3">
					<a href={`/channel/${video?.snippet?.channelId}`} class="rounded-full">
						{#if video?.id?.videoId}
							<img loading="lazy" class="w-10 h-10 rounded-full" src={`https://avatars.dicebear.com/api/avataaars/${video?.id?.videoId}.svg`} alt={video?.snippet?.localized?.title} />		
						{:else}
							<img loading="lazy" class="w-10 h-10 rounded-full" src={`https://avatars.dicebear.com/api/avataaars/${video?.id}.svg`} alt={video?.snippet?.localized?.title} />		
						{/if}
					</a>
					<div class="w-12rem">
						{#if video?.snippet?.localized?.title}
							<p class="line-clamp-2 text-sm text-hex-fff leading-snug">{video?.snippet?.localized?.title && video?.snippet?.title}</p>
						{:else}
							<p class="line-clamp-2 text-sm text-hex-fff leading-snug">{video?.snippet?.title}</p>
						{/if}
						<div class="leading-snug mt-1.5">
							<a href={`/channel/${video?.snippet?.channelId}`} class="line-clamp-1 text-sm opacity-50 hover:opacity-100">{video?.snippet?.channelTitle}</a>
							{#if video?.id?.videoId}
								<span class="line-clamp-1 text-sm opacity-50"><span class="uppercase">{numeral(Math.floor(Math.random() * (20000000 - 1 + 1)) + 1).format('0a')}</span> views &middot; {moment(new Date(new Date(2010, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2010, 0, 1).getTime()))).fromNow()}</span>
							{:else}
								<span class="line-clamp-1 text-sm opacity-50"><span class="uppercase">{numeral(Math.floor(Math.random() * (20000000 - 1 + 1)) + 1).format('0a')}</span> views &middot; {moment(new Date(new Date(2010, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2010, 0, 1).getTime()))).fromNow()}</span>
							{/if}
						</div>
					</div>
				</div>
			</a>
	{/each}

{/await}


</div>