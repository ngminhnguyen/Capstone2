export const getUser = () => {
    if (typeof window === "undefined") return null;

    const user = localStorage.getItem("user");

    return user ? JSON.parse(user) : null;
};

export const getRole = () => {
    const user = getUser();

    return user?.role?.toLowerCase();
};

export const isLoggedIn = () => {
    return !!localStorage.getItem("token");
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

export const checkRole = (
    requiredRole: string
) => {
    const role = getRole();

    return role === requiredRole;
};