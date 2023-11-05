import { env } from "$env/dynamic/private";
import { getPrismicClient } from "$lib/api/prismic";
import Keyv from "keyv";
import type { Profile } from "$lib/types/profile"
import type { Services } from "$lib/types/services";

export type ProfilePageData = {
    profile: Profile,
    services: Services
}

let connectionString = undefined;
if (env.REDIS_CONNECTION_STR) {
    connectionString = `${env.REDIS_CONNECTION_STR}`;
}

const cache: Keyv = new Keyv(connectionString);

async function getProfile(): Promise<Profile> {
    if (await cache.has('profile')) {
        return cache.get('profile');
    }

    const prismic = await getPrismicClient();

    let profile: Profile = {
        bio: [],
        name: '',
        profilePic: '',
        showAboutMe: false,
        accounts: []
    }

    const prismicProfile = await prismic.getByType(env.PRISMIC_DATA_KEY_PROFILE);
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

    await cache.set('profile', profile);

    return profile;
}

export async function load() {
    return {
        profile: await getProfile()
    }
}