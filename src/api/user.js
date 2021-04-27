import { BoosterRequest as request } from '~/utils/request';

export async function getUser() {
  try {
    const response = await request.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}