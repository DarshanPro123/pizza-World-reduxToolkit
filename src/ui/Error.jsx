import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex w-full h-screen justify-center items-center bg-gray-400 flex-col gap-4">
      <h1 className="text-5xl font-mono ">Something went wrong 😢</h1>
      <p className="text-red-700 text-lg">{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
