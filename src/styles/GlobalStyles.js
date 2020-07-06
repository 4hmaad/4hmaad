import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

:root {
  --font-bold: 800;
  --font-regular: 400;
  --font-medium: 500;

  --font-xs: 1.4rem; /* Used for P and A */
  --font-sm: 1.8rem;  /* Used for H5,P and A */
  --font-md: 2rem; /* Used for H4,P and A */
  /* One missing 3rem which is used for H3 */
  --font-lg: 4rem; /* Used for H2 */
  --font-xl: 5rem; /* Used for H1 */

  --font-text: 'Raleway', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-heading: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-code: "Fira Code", 'Consolas', 'Courier New', Courier, monospace;


 --line-height: 1.7;

 --section-padding: 15rem 0rem;
 --section-header-margin: 2rem 0rem 4rem 0rem;
 --container-max-width: 120rem;
 --container-blog-post-max-width: 80rem;


 /* Breakpoints */
}


*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    font-family: inherit;
    box-sizing: inherit;
}

*::-webkit-scrollbar-track
{
    box-shadow: none;
	background-color: transparent;
}

*::-webkit-scrollbar
{
	width: 1.2rem;
	background-color: transparent;
    height: 1.2rem;
}

*::-webkit-scrollbar-thumb
{
	background-color: ${props => props.theme.bodySecondary};
    border-radius: 2px;
}



html {
    font-size: 62.5%;


    @media (max-width: 75em) {
        font-size: 56%;
    }

    @media (max-width: 56.25em) {
        font-size: 50%;
    }

    @media (max-width: 37.5em) {
        font-size:48%
    }

}

body {
    font-family: var(--font-text);
    font-size: var(--font-sm);
    font-weight: var(--font-regular);
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
    transition: background 0ms ease-in-out, color 0ms ease-in-out;
    box-sizing: border-box;
    line-height: var(--line-height);
}

h1,
h2,
h3,
h4,
h5 {
    font-family: var(--font-heading);
    font-weight: var(--font-bold);
    color: ${props => props.theme.header};
    line-height: 1.5;
}


h1,
h2 {
    margin: 2.5rem 0;
}

h3 {
    margin: 1.8rem 0;
}

h4,
h5 {
    margin: 1.4rem 0;
}

p {
    display:block;
    font-weight: var(--font-regular);
    margin: 2rem 0rem;
}

a {
    font-weight: var(--font-medium);
}


section > h1 {
    margin: var(--section-header-margin);
}

`
