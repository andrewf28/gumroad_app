export const POSTS_API_URL =
  process.env.NODE_ENV === "test"
    ? "http://mocked-api-url"
    : import.meta.env.VITE_POSTS_API_URL;