import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

:root {
  --font-bold: 800;
  --font-regular: 400;
  --font--medium: 500;

  --font-xs: 1.4rem; /* Used for P and A */
  --font-sm: 1.8rem;  /* Used for H5,P and A */
  --font-md: 2rem; /* Used for H4,P and A */
  /* One missing 3rem which is used for H3 */
  --font-lg: 4rem; /* Used for H2 */
  --font-xl: 5rem; /* Used for H1 */

  --font-text: 'Raleway', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-heading: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
 
 --line-height: 1.7;

 --section-padding: 15rem 0rem;
 --section-header-margin: 2rem 0rem 4rem 0rem;
 --container-max-width: 120rem;



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

html {
    font-size: 62.5%;


    @media (max-width: 75em) {
        font-size: 56;
    }

    @media (max-width: 56.25em) {
        font-size: 50%;
    }

    @media (max-width: 37.5em) {
        font-size:44%
    }

}

body {
    font-family: var(--font-text);
    font-size: var(--font-sm);
    font-weight: var(--font-regular);
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
    transition: background 0ms ease-in-out, color 500ms ease-in-out;
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
    margin: 2rem 0rem;
}

li, p ,a {
    font-family: inherit;
    font-weight: var(--font-regular);
}

a {
    font-weight: var(--font-medium);
}

section > h1 {
    margin: var(--section-header-margin);
}

`
