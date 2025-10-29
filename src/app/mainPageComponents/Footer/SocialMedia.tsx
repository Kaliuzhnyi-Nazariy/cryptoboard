import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const SocialMedia = () => {
  return (
    <ul className="mt-4 flex gap-3">
      <li className="rounded-full size-7 flex items-center justify-center bg-[var(--black80)] text-[var(--black0)]  ">
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          className="size-[14px] text-[14px]"
        >
          <Facebook className="size-[14px]" />
        </Link>
      </li>
      <li className="rounded-full size-7 flex items-center justify-center bg-[var(--black80)] text-[var(--black0)] ">
        <Link
          href="https://x.com/"
          target="_blank"
          className="size-[14px] text-[14px]"
        >
          <Twitter className="size-[14px]" />
        </Link>
      </li>
      <li className="rounded-full size-7 flex items-center justify-center bg-[var(--black80)] text-[var(--black0)] ">
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          className="size-[14px] text-[14px]"
        >
          <Instagram className="size-[14px]" />
        </Link>
      </li>
      <li className="rounded-full size-7 flex items-center justify-center bg-[var(--black80)] text-[var(--black0)] ">
        <Link
          href="https://www.linkedin.com/"
          target="_blank"
          className="size-[14px] text-[14px]"
        >
          <Linkedin className="size-[14px]" />
        </Link>
      </li>
      <li className="rounded-full size-7 flex items-center justify-center bg-[var(--black80)] text-[var(--black0)] ">
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          className="size-[14px] text-[14px]"
        >
          <Youtube className="size-[14px]" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
