import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";

function Social() {
  return (
    <ul className=" flex gap-x-4">
            <li>
            <FaFacebook  className="text-2xl"/>

            </li>

            <li>
            <FaXTwitter className="text-2xl"/>

            </li>

            <li>
            <FaInstagram  className="text-2xl"/>
            </li>

            <li>
            <FaMedium className="text-2xl"/>
            </li>
          </ul>
  )
}

export default Social