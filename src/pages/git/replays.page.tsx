export const metaData = {
  title: 'Redirecting...',
  description: "Redirect to another URL",
  redirectUrl: "https://github.com/lulzsun/RePlays"
}

export function Page() {
  return (
    <>
      <h1>If you are not redirected automatically, click <a className='underline underline-offset-2 text-red-300' href={metaData.redirectUrl}>here</a>.</h1>
    </>
  )
}