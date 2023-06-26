import axios from 'axios';

export async function getIsValidated(userId?: string, email?: string) {
  const result = await axios
    .get(
      `${
        import.meta.env.VITE_API_PATH
      }/validated?userId=${userId}&email=${email}`,
    )
    .then((r) => {
      return r.data.body.data;
    });
  return result;
}
