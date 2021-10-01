<script>
    import AboutMe from "./Profile/AboutMe.svelte";
    import HeaderBar from "./Header/Bar.svelte";
    import FooterBar from "./Footer/Bar.svelte";
    import List from "./Social/List.svelte";
    import {onMount} from "svelte";
    import _default from "@prismicio/client";

    const ENDPOINT_API = 'https://charlespellensme.cdn.prismic.io/api/v2';
    const TOKEN_ACCESS = 'MC5ZSU5zQXhNQUFDQUFTeldB.FipSQy3vv73vv71IeB7vv71o77-977-977-9NULvv71GPRUj77-9K--_ve-_ve-_vUkNPu-_ve-_vQ';

    const KEY_ABOUT_ME = 'YINimRMAACEASwy3';
    const KEY_ACCOUNTS = 'social_media_account';

    /**
     * Binds the configuration for service URLs
     *
     * @type {{snapchat: string, twitter: string, envelope: string, world: string, spotify: string, instagram: string, linkedin: string}}
     */
    let config = {
        snapchat: 'https://snapchat.com/add/',
        instagram: 'https://instagram.com/',
        twitter: 'https://twitter.com/',
        spotify: 'https://open.spotify.com/user/',
        linkedin: 'https://linkedin.com/in/',
        envelope: 'mailto:',
        world: 'https://charlespellens.com/#'
    };

    /**
     * Profile Data
     *
     * @type {{showAboutMe: boolean, profilePic: string, name: string, bio: string}}
     */
    let profile = {
        name: 'Charles Pellens',
        profilePic: '/dist/assets/images/profile.jpg',
        bio: 'Loading...',
        showAboutMe: false
    };

    /**
     * Holds the account data
     *
     * @type {*[]}
     */
    let socials = [];

    onMount(async () => {
        if (window.location.toString().match(/\?no_track/i) === null) {
            window.mixpanel.track('load');
        }

        /**
         * Initialize Prismic Client and its API
         * @type {DefaultClient}
         */
        const client = _default.client(ENDPOINT_API, {
            accessToken: TOKEN_ACCESS
        });
        const api = await client.getApi();

        /**
         * Load the about me content
         *
         * @type {Document}
         */
        const aboutMeSection = await api.getByID(KEY_ABOUT_ME);
        const aboutMeData = aboutMeSection.data;
        if (typeof aboutMeData.content !== 'undefined') {
            profile.bio = aboutMeData.content.map((record) => record.text).join();
        }

        /**
         * Load the social media accounts
         */
        const accounts = await api.query(_default.Predicates.at('document.type', KEY_ACCOUNTS));
        socials = accounts.results.map(result => {
            return {
                type: result.data.icon_key === 'envelope' ? 'general' : 'service',
                service: result.data.icon_key,
                value: result.data.handle[0].text,
                label: result.data.account_label
            };
        });
    })

    /**
     * Set the document title to the respective name
     */
    $: document.title = `${profile.name} - Socials`;
</script>

<HeaderBar text="{profile.name}"/>
<main>
    <AboutMe bind:profile/>
    <List bind:config bind:socials/>
</main>
<FooterBar/>

<style lang="scss">
  @import '../main';

  main {
    margin-top: calc(var(--header-height) + var(--spacing));
  }
</style>