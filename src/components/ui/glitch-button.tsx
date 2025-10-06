import React from "react";
import styled, { css } from "styled-components";

type GlitchButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Choose between teal (primary) and white (secondary) */
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

const GlitchButton: React.FC<GlitchButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
      <span className="btn__glitch" aria-hidden="true">
        {children}
      </span>
    </StyledButton>
  );
};

// 🎨 Define variant styles using styled-components
const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
  --border: 5px;
  --shimmy-distance: 5;
  position: relative;
  display: inline-block;
  padding: 10px 30px 12px 30px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  font-size: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  clip-path: polygon(11% 0, 95% 0, 100% 25%, 90% 90%, 95% 90%, 85% 90%, 85% 100%, 7% 100%, 0 80%);
  transition: all 0.25s ease-in-out;
  isolation: isolate;

  ${(props) =>
    props.variant === "primary"
      ? css`
          --primary: #0d9488; /* teal */
          --shadow-primary: #ffffff; /* white glitch */
          --text-color: #ffffff;
          color: var(--text-color);
        `
      : css`
          --primary: #ffffff; /* white button */
          --shadow-primary: #000000; /* black glitch */
          --text-color: #000000;
          color: var(--text-color);
        `}

  &:before,
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    clip-path: inherit;
    z-index: -1;
  }

  &:before {
    background: var(--shadow-primary);
    transform: translate(var(--border), 0);
  }

  &:after {
    background: var(--primary);
  }

  .btn__glitch {
    position: absolute;
    inset: calc(var(--border) * -1);
    background: var(--shadow-primary);
    text-shadow: 2px 2px var(--shadow-primary),
      -2px -2px var(--shadow-primary);
    clip-path: inherit;
    display: none;
    animation: glitch 2s infinite;
  }

  .btn__glitch::before {
    content: "";
    position: absolute;
    inset: calc(var(--border) * 1);
    background: var(--primary);
    z-index: -1;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover .btn__glitch {
    display: block;
  }

  &:active {
    transform: scale(0.97);
  }

  @keyframes glitch {
    0% {
      clip-path: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
    }
    8% {
      clip-path: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
      transform: translate(calc(var(--shimmy-distance) * 1%), 0);
    }
    20% {
      clip-path: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
      transform: translate(0, 0);
    }
    35% {
      clip-path: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
      transform: translate(calc(var(--shimmy-distance) * -1%), 0);
    }
    60% {
      clip-path: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);
      transform: translate(0, 0);
    }
    100% {
      clip-path: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
    }
  }
`;

export default GlitchButton;
