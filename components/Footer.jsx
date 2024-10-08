"use client";

import Link from "next/link";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const getFullYear = () => new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center mt-[7rem] pb-[3.5rem]">
      <div className="w-[90%] flex items-center justify-between border-gray border-t-[0.1px] pt-[2.5rem]">
        <div>
          <p className="font-otterco text-[14px] text-linkColor">
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
            {getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-1 md:space-x-3">
          <div>
            <Link href="https://linkedin.com/in/nukucode" target="_blank">
              <p className="link hidden md:block">Linkedin</p>
              <div className="icon">
                <LinkedInIcon color="#242424" />
              </div>
            </Link>
          </div>
          <span className="text-[14px] hidden md:block -mt-[2px]">/</span>
          <div>
            <Link href="https://github.com/nukucode" target="_blank">
              <p className="link hidden md:block">Github</p>
              <div className="icon">
                <GitHubIcon color="#242424" />
              </div>
            </Link>
          </div>
          <span className="text-[14px] hidden md:block -mt-[2px]">/</span>
          <div>
            <Link href="https://instagram.com/katomekichii" target="_blank">
              <p className="link hidden md:block">Instagram</p>
              <div className="icon">
                <InstagramIcon color="#242424" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
