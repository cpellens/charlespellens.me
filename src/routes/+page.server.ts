import { PRISMIC_DATA_KEY_PROFILE } from "$env/static/private";
import { getPrismicClient } from "$lib/api/prismic";
import type { Profile } from "$lib/types/profile"
import type { Services } from "$lib/types/services";
import type { Client } from "@prismicio/client";

export type ProfilePageData = {
    profile: Profile,
    services: Services
}

async function getProfile(prismic: Client): Promise<Profile> {
    let profile: Profile = {
        bio: [],
        name: '',
        profilePic: '',
        showAboutMe: false,
        accounts: []
    }

    const prismicProfile = await prismic.getByType(PRISMIC_DATA_KEY_PROFILE);
    if (prismicProfile.results.length > 0) {
        const profileData = prismicProfile.results.pop()?.data as Record<string, any>;

        profile.bio = profileData['about-me'];
        profile.name = profileData.tagline?.map((t: any) => t.text).join(' ');
        profile.profilePic = profileData.photo.url;

        const accountIds = profileData.accounts.map((a: any) => a.account.id) as string[]
        profile.accounts = (await prismic.getByIDs(accountIds))?.results?.map(account => {
            return {
                label: account.data.label.map((l: any) => l.text).join(' '),
                service: account.data.icon_key,
                type: account.data.icon_key === 'envelope' ? 'general' : 'service',
                value: account.data.href.url
            }
        });
    }

    return profile;
}

export async function load() {
    const prismic = await getPrismicClient();
    const profile = await getProfile(prismic);

    return {
        profile
    }
}