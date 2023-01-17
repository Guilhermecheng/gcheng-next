import Link from "next/link";

export default function FourOhFour() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            {/* <h1>404 - Page Not Found</h1> */}
            <h1>Oh oh! Something went wrong.. Please go back to the home page:</h1>
            <Link href="/">
                <span>
                Go back home
                </span>
            </Link>
        </div>
    )
  }