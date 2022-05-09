import React from "react";

function Link({ icon, href, text }) {
  return (
    <div className="d-flex flex-row">
      <div className="p-1">
        <span className={`fa fa-${icon}`}></span>
      </div>
      <div className="p-1">
        <a href={href}>{text}</a>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div id="header">
      <div class="d-flex flex-column">
        <h1>Matthew Cree</h1>
        <p>Polglot Software Engineer at Faria Education Group</p>
      </div>

      <div class="d-flex flex-column">
        <Link
          icon="code"
          text="github.com/mattcree"
          linkHref="https://github.com/mattcree"
        />

        <Link
          icon="code"
          text="github.com/mattcree"
          linkHref="https://github.com/mattcree"
        />

        <Link
          icon="code"
          text="github.com/mattcree"
          linkHref="https://github.com/mattcree"
        />
      </div>
    </div>
  );
}
