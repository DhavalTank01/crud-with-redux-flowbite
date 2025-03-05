const URLS = {
  USERS: "/users",
  ADD_USER: "/user/add",
  EDIT_USER: (slug: string) => `/user/edit/${slug}`,
  VIEW_USER: (slug: string) => `/user/view/${slug}`,
};
export default URLS;
