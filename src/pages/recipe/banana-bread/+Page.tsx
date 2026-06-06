export const metadata = {
  title: "Redirecting...",
  description: "Redirect to another URL",
  redirectUrl: "/blog/how-to-make-banana-bread",
};

export default function Page() {
  return (
    <>
      <h1>
        If you are not redirected automatically, click{" "}
        <a className="underline underline-offset-2 text-red-300" href={metadata.redirectUrl}>
          here
        </a>
        .
      </h1>
    </>
  );
}
