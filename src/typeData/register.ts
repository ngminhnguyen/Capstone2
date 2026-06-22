export type ChildProfile = {
    name: string;
    weight: string;
    height: string;
    dob: string;
    gender: string;
};

export type ParentProfile = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
};

export type RegisterData = {
    parent: ParentProfile;
    children: ChildProfile[];
    allergy: number | null;
};
