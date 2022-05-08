import cookies from "js-cookie";
export const set_token = (token) => {
  cookies.set("token", token, { expires: 7 });
}
export const delete_token = () => {
  cookies.remove('token')
}