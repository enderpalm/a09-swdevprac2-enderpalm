import Link from "next/link";
import React from "react";

interface Props {
    title: string;
    pageRef: string;
}

const TopMenuItem = ({ title, pageRef }: Props) => {
    return (
        <Link href={pageRef} className="text-slate-100 text-sm hover:text-white hover:bg-slate-700 py-2 px-4 rounded-md font-jetbrains transition-all">
            {title}
        </Link>
    );
};

export default TopMenuItem;
