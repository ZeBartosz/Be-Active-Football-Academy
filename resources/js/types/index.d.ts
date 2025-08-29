interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    number: string;
    address: string;
    post_code: string;
    date_of_birth: Date;
    remember_token: string;
    roles?: Role[];
    created_at: Date;
    updated_at: Date;
}

interface Staff {
    id: number;
    user: User;
    roles: Role[];
    about: string;
    avatar: string;
    created_at: Date;
    updated_at: Date;
}

interface Role {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
}

interface Event {
    id: number;
    title: string;
    description: string;
    type: string;
    team: Team;
    date: Date;
    time: string;
    address: string;
    post_code: string;
    created_at: Date;
    updated_at: Date;
}

interface Player {
    id: number;
    first_name: string;
    last_name: string;
    date_of_birth: Date;
    address: string;
    post_code: string;
    user: User;
    team: Team;
    created_at: Date;
    updated_at: Date;
}

interface Team {
    id: number;
    team_name: string;
    players_count?: number;
    events_count?: number;
    staff?: Staff[];
    created_at: Date;
    updated_at: Date;
}

interface Link {
    url: string;
    label: string;
    active: boolean;
}

interface Pagination<T> {
    data: T[];
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
    links: Link[];
}
