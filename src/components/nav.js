import * as React from "react";
import { StyledMenu, StyledLink } from "./nav.styled";

const StyledNav = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <ul>
        <li>
          <StyledLink to="/" aria-label="about">
            About
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/resume/" aria-label="resume">
            Resume
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/contact/" aria-label="contact info">
            Contact Me
          </StyledLink>
        </li>
      </ul>
    </StyledMenu>
  );
};
export default StyledNav;
