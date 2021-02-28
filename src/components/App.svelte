<script>
    import Name from "./Name.svelte";
    import SocialsList from "./SocialsList.svelte";
    import AboutMe from "./Profile/AboutMe.svelte";

    import 'boxicons';

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
        bio: 'Hey, I\'m Charles! I\'m always up to something new so be sure to connect with me on my socials below.',
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
</script>

<Name name="{profile.name}"/>

<main>
    <AboutMe bind:profile/>
    <SocialsList bind:socials bind:config/>
</main>

<style>
    @import '../main.scss';

    main {
        margin-top: calc(var(--header-height) + var(--spacing));
    }
</style>