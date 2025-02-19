export const GetNavigationData = () => {
    return [
        { label: "Dashboard", path: "/dashboard", icon: "pi pi-home" },
        { label: "projects", path: "/dashboard/project", icon: "pi pi-list" },
        {
            label: "Tasks",
            path: "/dashboard/task",
            icon: "pi pi-pen-to-square",
        },
        {
            label: "Manage Users",
            path: "/dashboard/Users",
            icon: "pi pi-users",
        },
        { label: "Tickets", path: "/dashboard/ticket", icon: "pi pi-ticket" },
        { label: "Email", path: "/dashboard/email", icon: "pi pi-inbox" },
        { label: "Profile", path: "/dashboard/profile", icon: "pi pi-user" },
        { label: "Settings", path: "/dashboard/setting", icon: "pi pi-cog" },
    ];
};
