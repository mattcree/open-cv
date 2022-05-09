import React from "react";

interface IconProps {
  icon: string;
  href?: string;
  text: string;
}

const IconBulletPoint: React.FC<IconProps> = ({ icon, href, text }) => {
  return (
    <div className="d-flex flex-row">
      <div className="p-1">
        <span className={`fa fa-${icon}`}></span>
      </div>
      <div className="p-1">{href ? <a href={href}>{text}</a> : text}</div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div id="header">
      <div className="d-flex">
        <div className="p-1 w-100">
          <h1>Matthew Cree</h1>
          <p>Polglot Software Engineer at Faria Education Group</p>
        </div>

        <div className="p-1 flex-grow-1">
          <img
            alt="avatar"
            src="https://s.gravatar.com/avatar/ac3183d5aabc0d8175198fce4ac086d6?s=80"
          />
        </div>
      </div>

      <div className="d-flex flex-column">
        <IconBulletPoint icon="location-dot" text="Belfast, United Kingdom" />

        <IconBulletPoint
          icon="code"
          text="github.com/mattcree"
          href="https://github.com/mattcree"
        />
      </div>
    </div>
  );
};

export default Header;
