import type { KeyTextField, RichTextField } from "@prismicio/client/*";
import type { Account } from "./account";

export type Profile = {
    showAboutMe: boolean;
    profilePic: string;
    bio: RichTextField;
    name: string;
    accounts: Account[]
}