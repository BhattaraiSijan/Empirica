import React from "react";
import logo from './download.png'

export function Avatar({ player }) {
  return (
    <img
      className="h-full w-full rounded-md shadow bg-white p-1"
      src={logo}
      alt="Avatar"
    />
  );
}
