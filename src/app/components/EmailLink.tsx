"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export interface EmailLinkProps {
  email: string;
}

export const EmailLink = ({ email }: EmailLinkProps) => {
  const [visibleEmail, setVisibleEmail] = useState<string | null>(
    "no-bots@obfuscated.com"
  );

  const uncoverEmail = () => {
    setVisibleEmail(atob(email));
  };

  return (
    <a
      className="social-link"
      href={`mailto:${visibleEmail}`}
      target="__blank"
      onMouseOver={uncoverEmail}
      onClick={uncoverEmail}
    >
      <FontAwesomeIcon
        icon={faEnvelope}
        color="#545454"
        size="2x"
        title="Email"
      />
    </a>
  );
};
