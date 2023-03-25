import { useRouteError } from "react-router-dom";

interface Error {
  statusText: string;
  message: string;
}

const routeErrorObjectTypeGuard = (
  value: unknown,
): value is Record<string, unknown> => {
  return typeof value === 'object' && !Array.isArray(value) && value !== null;
};

const routeError = (val: unknown): val is Error => {
  if (routeErrorObjectTypeGuard(val)) {
    return typeof val.statusText === 'string' && typeof val.message === 'string';
  }
  return false;
};

export default function ErrorPage() {
  let errorReport: string = '';
  const error = useRouteError();

  if (routeError(error)) {
    errorReport = error.statusText || error.message;
  }

  console.error(error);

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>An expected error has occurred. It's likely that this page does not exist or it has not yet been created.</p>
      <p>
        <em>{errorReport}</em>
      </p>
    </div>
  );
}
