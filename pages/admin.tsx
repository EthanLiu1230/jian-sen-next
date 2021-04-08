import dynamic from "next/dynamic";
import React from "react";

const ReactAdmin = dynamic(() => import("../components/ReactAdmin"), {ssr: false})

export default function admin() {
    return <ReactAdmin/>
}
