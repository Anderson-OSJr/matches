// app/page.tsx
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-3xl">Hello, APP!</h1>
        <Button
          as={Link}
          href="/members"
          color="primary"
          variant="bordered"
          startContent={<FaRegSmile size={20} />}
        >
          Members Page
        </Button>
      </div>
    </>
  );
}
