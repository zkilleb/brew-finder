import axios from 'axios';

export async function addValidatedInfo(
  userId?: string,
  address?: string,
  breweryName?: string,
  phoneNumber?: string,
  email?: string,
) {
  const result = await axios
    .put(
      `${
        import.meta.env.VITE_API_PATH
      }/validated?userId=${userId}&address=${address}&breweryName=${breweryName}&phoneNumber=${phoneNumber}&email=${email}`,
    )
    .then((r) => {
      return r.data.statusCode;
    });
  return result;
}
