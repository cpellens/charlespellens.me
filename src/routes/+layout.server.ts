import { PRISMIC_DATA_KEY_ABOUT_ME, PRISMIC_DATA_KEY_ACCOUNTS } from "$env/static/private";
import { getPrismicClient } from "$lib/api/prismic";
import type { Profile } from "$lib/types/profile"
import type { Services } from "$lib/types/services";
import { predicate, type Client } from "@prismicio/client";

type ContentBlock = {
    type: string,
    text: string,
    spans: string[]
};

export type ProfilePageData = {
    profile: Profile,
    services: Services
}

async function getProfile(prismic: Client): Promise<Profile> {
    let profile: Profile = {
        bio: '',
        name: 'Charles Pellens',
        profilePic: '/profile.jpg',
        showAboutMe: false,
        accounts: []
    }

    /**
     * Load "About Me"
     */
    const aboutMeSection = await prismic.getByID(PRISMIC_DATA_KEY_ABOUT_ME);
    if (aboutMeSection) {
        const bioData = await aboutMeSection.data;
        if ((bioData.content !== undefined) && (bioData.content instanceof Array)) {
            const bioString = bioData.content
                .map((block: ContentBlock) => block.text)
                .join();

            profile.bio = bioString;
        }
    }

    /**
     * Load Accounts
     */
    const accountQuery = { predicates: predicate.at('document.type', PRISMIC_DATA_KEY_ACCOUNTS) };
    const accounts = await prismic.get(accountQuery);
    if (accounts) {
        profile.accounts = accounts.results.map(
            result => {
                return {
                    type: result.data.icon_key === 'envelope' ? 'general' : 'service',
                    label: result.data.account_label || (result.data.value || null),
                    service: result.data.icon_key,
                    value: result.data.handle[0].text
                }
            }
        );
    }

    return profile;
}

async function getServices(): Promise<Services> {
    return {
        snapchat: 'https://snapchat.com/add/',
        instagram: 'https://instagram.com/',
        twitter: 'https://twitter.com/',
        spotify: 'https://open.spotify.com/user/',
        linkedin: 'https://linkedin.com/in/',
        envelope: 'mailto:',
        world: 'https://charlespellens.com/#',
        telegram: 'https://t.me/'
    }
}

export async function load(): Promise<ProfilePageData> {
    const prismic = await getPrismicClient();
    const profile = await getProfile(prismic);
    const services = await getServices();

    return {
        profile,
        services
    }
}