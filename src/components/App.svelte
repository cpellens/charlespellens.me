<script>
    import AboutMe from "./Profile/AboutMe.svelte";
    import HeaderBar from "./Header/Bar.svelte";
    import FooterBar from "./Footer/Bar.svelte";
    import List from "./Social/List.svelte";
    import {onMount} from "svelte";
    import _default from "@prismicio/client";

    let config = {
        snapchat: 'https://snapchat.com/add/',
        instagram: 'https://instagram.com/',
        twitter: 'https://twitter.com/',
        spotify: 'https://open.spotify.com/user/',
        envelope: 'mailto:',
        world: 'https://charlespellens.com/#'
    };

    let profile = {
        name: 'Charles Pellens',
        profilePic: '/dist/assets/images/profile.jpg',
        bio: 'Loading...',
        showAboutMe: false
    };

    let socials = [
        {
            type: 'service',
            service: 'Snapchat',
            value: 'cpellens'
        },

        {
            type: 'service',
            service: 'Instagram',
            value: 'cpellens'
        },

        {
            type: 'service',
            service: 'Twitter',
            value: 'charles_pellens'
        },

        {
            type: 'service',
            service: 'Spotify',
            value: '1214513760',
            label: 'Charles on Spotify'
        },

        {
            type: 'general',
            service: 'envelope',
            value: 'contact@charlespellens.com'
        },

        {
            type: 'general',
            service: 'world',
            value: 'via-atsignme',
            label: 'www.charlespellens.com'
        }
    ];

    onMount(async () => {
        if (window.location.toString().match(/\?no_track/i) === null) {
            window.mixpanel.track('load');
        }

        const client = _default.client('https://charlespellensme.cdn.prismic.io/api/v2', {
            accessToken: "MC5ZSU5zQXhNQUFDQUFTeldB.FipSQy3vv73vv71IeB7vv71o77-977-977-9NULvv71GPRUj77-9K--_ve-_ve-_vUkNPu-_ve-_vQ"
        });

        const api = await client.getApi();
        const aboutMeSection = await api.getByID('YINimRMAACEASwy3');
        const data = aboutMeSection.data;

        if (typeof data.content !== 'undefined') {
            profile.bio = data.content.map((record) => record.text).join();
        }
    })

    $: document.title = `${profile.name} - Socials`;
</script>

<HeaderBar text="{profile.name}"/>
<main>
    <AboutMe bind:profile/>
    <List bind:socials bind:config/>
</main>
<FooterBar/>

<style lang="scss">
    @import '../main';

    main {
        margin-top: calc(var(--header-height) + var(--spacing));
    }
</style>