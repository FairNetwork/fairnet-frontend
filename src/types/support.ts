export interface Organization {
    id: string;
    name: string;
    description: string;
    website: string;
    scope: OrganizationScope;
}

export enum OrganizationScope {
    Germany = 'Deutschlandweit',
    International = 'Weltweit',
    Local = 'Lokal'
}
