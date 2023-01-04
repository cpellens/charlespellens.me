import type { Account } from "./account";

export type Profile = {
    showAboutMe: boolean;
    profilePic: string;
    bio: string;
    name: string;
    accounts: Account[]
}