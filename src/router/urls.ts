const URLS={
    USERS:"/users",
    ADD_USER:"/user/add-user",
    EDIT_USER: (slug: string) => `/user/edit-user/${slug}`,
    VIEW_USER: (slug: string) => `/user/view-user/${slug}`,
};
export default URLS;