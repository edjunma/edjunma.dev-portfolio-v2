/* eslint-disable react/require-default-props */
/* eslint-disable react/no-danger */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/html-has-lang */
import React from 'react';
import PropTypes from 'prop-types';

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents,
  body,
}) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
        <script src="https://kit.fontawesome.com/561f520f53.js" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            const hamburger = document.getElementById('hamburger');
            const navUL = document.getElementById('nav-ul);

            hamburger.addEventListener('click', () => {
              navUL.classList.toggle('show');
            })

            setInterval(createSnowFlake, 50);

            function createSnowFlake() {
              const snow_flake = document.createElement('i);
              snow_flake.classlist.add('fas');
              snow_flake.classlist.add('fa-snowflake');
              snow_flake.style.left = Math.random() * window.innerWidth + 'px';
              snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';
              snow_flake.style.opacity = Math.random();
              snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';

              document.body.appendChild(snow_flake);

              setTimeout(() => {
                snow_flake.remove();
              }, 5000)
            }
`,
          }}
        />
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
