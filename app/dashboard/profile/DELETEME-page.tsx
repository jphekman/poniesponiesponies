import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

export async function Page() {
  const { user } = await getSession();

  return (
      user && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
      )
  );
}
