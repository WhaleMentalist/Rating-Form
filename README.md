# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: (https://github.com/WhaleMentalist/Rating-Form)
- Live Site URL: (https://whalementalist.github.io/Rating-Form/)

## My process

1. Create basic layout of both the rating card and thank you card. This will utilize HTML and CSS.
2. Research how to create stylized radio buttons.
3. Use jQuery to detect submission and then retrieve selected rating and apply to text within thank you card.

### Built with

- HTML5
- CSS
- Flexbox

### What I learned

I learned how to stylize radio buttons to look more interactive and to also utilize pseudo classes for 'hover' and 'selected' styling. The trick is to disable the radio buttons from displaying (i.e 'display: none') and to stylize the labels associated with radio buttons.

To see how you can add code snippets, see below:

```html
<form id="rating-form" action="index.html" method="post">
  <fieldset>
    <input class="rating-button" type="radio" id="one-star" name="rating-form" value="1">
    <label class="circle" for="one-star">1</label>
    <input class="rating-button" type="radio" id="two-star" name="rating-form" value="2">
    <label class="circle" for="two-star">2</label>
    <input class="rating-button" type="radio" id="three-star" name="rating-form" value="3">
    <label class="circle" for="three-star">3</label>
    <input class="rating-button" type="radio" id="four-star" name="rating-form" value="4">
    <label class="circle" for="four-star">4</label>
    <input class="rating-button" type="radio" id="five-star" name="rating-form" value="5">
    <label class="circle" for="five-star">5</label>
  </fieldset>
    <button type="submit" name="button">S U B M I T</button>
</form>
```
```css
button {
  width: 325px;
  height: 40px;
  background-color: var(--orange);
  color: var(--white);
  font-weight: 700;
  border-radius: 30px;
  border: 0 none;
  text-align: center;
}

button:hover {
  background-color: var(--white);
  color: var(--orange);
}

input[type="radio"] {
  padding: 0;
  margin: 0;
  display: none;
}

.circle {
  margin-right: 13px;
  width: 50px;
  height: 50px;
  background-color: var(--very-dark-blue);
  line-height: 50px;
  border-radius: 50%;
  text-align: center;
}

.rating-button:hover + label {
  background-color: var(--orange);
  color: var(--white);
}

.rating-button:checked + label {
  background-color: var(--medium-gray);
  color: var(--white)
}
```

Finally, I learned how to use jQuery to dynamically change webpage content. I ended up using 'hide()' and 'show()' to change the card on the webpage after the user submitted a rating. During the submission, the code also retrieved the selected value among the radio buttons and substitutes the value in the thank you page. The 'event.preventDefault' is there to prevent submit from redirecting to a new page, it is a way of saying that event has been handled.

```js
$(document).ready(function() {
  $("#thank-you").hide(); // Hide thank you card on page load

  // Detect submission on form
  $("#rating").submit(function(event) {
    let rating = $('input[name=rating-form]:checked', '#rating-form').val(); // Get rating value selected

    $("#rating-confirmation").text($("#rating-confirmation").text().replace("%rating%", rating)); // Replace marker with value user selected

    // This will hide the rating window after 2 seconds
    $("#rating").hide(2000, function() {
      $("#thank-you").show(1000); // This will show the thank you window
    });
    event.preventDefault(); // Prevent submission from posting
  });
});
```

### Useful resources

- [jQuery API | .hide()](https://api.jquery.com/hide/) - This helped with hiding and showing the different cards. The function allowed animations and callback functions, which helped with staging the animations as well.
- [jQuery Text Manipulation](https://alvarotrigo.com/blog/replace-text-with-jquery/) - This site showed snippets of code that allowed me to replace text in a paragraph of a card with the rating value that the user selected.

## Author

- Frontend Mentor - [@WhaleMentalist](https://www.frontendmentor.io/profile/WhaleMentalist)

## Acknowledgments

