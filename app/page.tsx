import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/checkout"}>
        {" "}
        Hey, this is a assignment project for Groww Web Internship, Click to get
        started{" "}
      </Link>
    </>
  );
}
