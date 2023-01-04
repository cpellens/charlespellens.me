export type Account = {
    type: 'general' | 'service',
    service: string,
    value: string,
    label: string
};