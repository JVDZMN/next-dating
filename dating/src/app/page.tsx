import { auth } from "@/auth";
import SignOutButton from "@/components/SignOutButton";


export default async function Home() {
  const session = await auth();
  return (
    <div  >
      <p className=" text-3xl text-red-500">
       Dating
      </p>
      <h3 className=" text-2xl font-semibold">User session Data:</h3>
      {session ? (
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <SignOutButton />
        </div>
      ) : (
          <div>Not signed in</div>
      )}
    </div>

  );
    
}
