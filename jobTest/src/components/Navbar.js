"use client";
import Link from "next/link";
import { Navbar as NavbarFlowbite } from "flowbite-react";

function Navbar() {
  return (
    <NavbarFlowbite className="bg-slate-700 border-b-2 border-b-white" fluid>
        <NavbarFlowbite.Brand as={Link} href="/">
            <img src="/static/camera.png" className="w-20" alt="Logo" />
        </NavbarFlowbite.Brand>
      <NavbarFlowbite.Toggle className="bg-slate-500 focus:bg-slate-500 visited:bg-slate-500 active:bg-slate-500"/>
      <NavbarFlowbite.Collapse>
        <NavbarFlowbite.Link className="text-white hover:!text-green-400" href="/comedy">Comedy</NavbarFlowbite.Link>
        <NavbarFlowbite.Link className="text-white hover:!text-green-400" href="/drama">Drama</NavbarFlowbite.Link>
        <NavbarFlowbite.Link className="text-white hover:!text-green-400" href="/horror">Horror</NavbarFlowbite.Link>
        <NavbarFlowbite.Link className="text-white hover:!text-green-400" href="/romance">Romance</NavbarFlowbite.Link>
      </NavbarFlowbite.Collapse>
    </NavbarFlowbite>
  );
}

export {
  Navbar
}