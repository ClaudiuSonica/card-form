# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

## My process

Firstly I construct the HTML structure, than i start styling it for mobile first, always, after i get the dimensions, colors, fonts and any other design aspect, i move on to the hover/focus/active states.
After HTML and CSS is finished i start JS. 


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex-box
- CSS Grid
- Mobile-first workflow


### What I learned

I learned about position absolute and relative, gradient colors and borders, more about html input forms and a lot about javascript syntax and logic. 

```html
<input 
type="text"
id="name"
name="cardholder__name"
placeholder="e.g Jane Appleseed"
class="input"
required
/>
```
```css
.input:hover,
.input:focus {
  cursor: pointer;
  border: 2px solid transparent;
  border-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(hsl(249, 99%, 64%)),
    to(hsl(278, 94%, 30%))
  );
  border-image: linear-gradient(right, 
  hsl(249, 99%, 64%), 
  hsl(278, 94%, 30%)
  );
  border-image-slice: 1;
}
```
```js
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$&");
}
```

### Continued development

- More responsive layout
- More interactive components
- More animations
- More interactions
- More responsive typography
