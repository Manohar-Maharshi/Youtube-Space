import { writable } from 'svelte/store';



export const tabItems = writable([
	    { label: "All", value: 1 },
	    { label: "JavaScript", value: 2 },
	    { label: "HTML", value: 3 },
	    { label: "CSS", value: 4 },
	    { label: "Svelte Js", value: 5 },
	    { label: "TailwindCSS", value: 6 },
	    { label: "YouTube Clone", value: 7 },
	    { label: "Web development", value: 8 },
	    { label: "React Js", value: 9 },
	    { label: "Vue Js", value: 10 },
	]);


export const activeTab = writable(1);

