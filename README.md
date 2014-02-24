SCSS-Components
===============

A package which includes much components and helpers for Scss.

Overview
===============

* Create a grid
* Clearfix
* Calculate the font-size
* Simple including your icons
* Naming breakpoints for each mediaquery which you want
* CSS-Triangle
* SVG-Fallback
* Crossbrowser-Flexbox
* Crossbrowser-Animations
* Helper-Mixins (Placeholder, User-Select etc.)

Structure of scss
===============
    |- _addons/
    |- _css3/
    |- _functions/
    |- _helpers/
    |- components.scss

How-To
===============

## Addons

### Grid
It was never so easy to create your own responsive grid and you are so flexible.

    // Set your maximum cols in the config
    // Use mixin to create your own grid with your class-convention
    // With this you get the grid like in pure
    @for $sum from 1 through $max-cols {
      @for $i from 1 through $sum {
        .l-u--#{$i}-#{$sum} {
          @include col($i, $sum);
        }
      }
    }

    // Result like this
    .l-u--1-3 // One third of
    .l-u--2-4 // two fourth of


    // Push your column
    @for $sum from 1 through $max-cols {
      @for $i from 1 through $sum {
        .l-u--push-#{$i}-#{$sum} {
          @include col-push($i, $sum);
        }
      }
    }

    // Result like this
    .l-u--push-1-3 // One third of (margin-left)


    // Pull your column
    @for $sum from 1 through $max-cols {
      @for $i from 1 through $sum {
        .l-u--pull-#{$i}-#{$sum} {
          @include col-push($i, $sum);
        }
      }
    }

    // Result like this
    .l-u--pull-1-3 // One third of (minus margin-left)


    // Other example for a grid
    @for $i from 1 through $max-cols {
      .l-col--#{$i} {
        @include col($i, $max-cols)
      }
    }

    // Result like this (max-cols: 12)
    .l-col--4 // four twelfths
    .l-col--6 // Half cols

### Icons
Loop through your set of icons
    @each $icon in $icons {
      $name: nth($icon, 1);
      .icon--#{$name} {
        @include icon('before', $name);
      }
    }

### Lists
Reset list-styles
    // Scss
    .element {
      @include list-reset();
    }

    // CSS
    .element {
      list-style: none;
      margin: 0;
      padding: 0;
    }

### SVG
It's not easy to use - some browsers can't handle it. Because of this we must use a fallback.

    // Mixin for SVG-Fallback
    // First parameter is for the url without file-format, second for file-format
    @include svg-fallback('assets/img/fallback', 'jpg');


### Triangle
    @include triangle($direction, $size, $color) {
      @content;
    }

## Helpers

### Clearfix
Clear your floatings - it's necessary.

    // Use mixin
    @include clearfix();

### Fonts
Create the font-size not only in pixels. Use "rem" too.

    // Set in your html the font-size to 62.5%, then it's easier to calculate
    // Result = 16px
    @include font-size(1.6);

### Mediaqueries / Mobile First
The time is over to write for each mediaquery the pixel. You can write something like this:

    // Define a variable with all your breakpoints
    $breakpoints: (
      'mobile-landscape' 480px,
      'smaller-tablet' 600px,
      'tablet' 768px,
      'tablet-landscape' '920px'
    );

    // Use it
    @include respond-to('tablet') {
      @content;
    }

### CSS3
Some stuff to use css3-properties easier and without writing for each the prefix.

### Placeholder
    // Give placeholder a styling (Cross-Browser)
    @include placeholder() {
      color: red;
    }

### User-Select
    // Cross-Browser - Define your type
    @include user-select('none');

### Animations
    // Basic
    @include animation(colorchange .5s ease-in 1s);

    // Animation-Name
    @include animation-name(colorchange);

    // Animation-Delay
    @include animation-delay(.5s);

    // Animation-Direction
    @include animation-direction(normal);

    // Animation-Duration
    @include animation-duration(0s);

    // Animation-Iteration-Count
    @include animation-iteration-count(infinite);

    // Animation-Play-State
    @include animation-play-state(running);

    // Animation-timing-function
    @include animation-timing-function(linear);

    // Animation-fill-mode
    @include animation-fill-mode(forwards);

    // Keyframes
    @include keyframes(colorchange) {
      0% {
        color: red;
      }
      100% {
        color: blue;
      }
    }

### Transforms

#### Translate
    // Translate
    @include translate(100%, 100%);

    // TranslateX
    @include translateX(100%);

    // TranslateY
    @include translateY(100%);

    // TranslateZ
    @include translateZ(0);

    // Translate3d
    @include translate3d(0,0,0);

#### Skew
    // Skew
    @include skew(90deg);

    // SkewX
    @include skewX(45deg);

    // SkewY
    @include skewY(25deg);

    // SkewZ
    @include skewZ(0);

#### Rotate
    // Rotate
    @include rotate(90deg);

    // RotateX
    @include rotateX(20deg);

    // RotateY
    @include rotateY(10deg);

    // RotateZ
    @include rotateZ(0);

#### Scale
    // Scale
    @include scale(2);

    // ScaleX
    @include scaleX(3);

    // ScaleY
    @include scaleY(4);

    // ScaleZ
    @include scaleZ(0);

    // Scale3d
    @include scale3d(0);

#### Other
    // Perspective
    @include perspective(300);

    // Perspective-Origin
    @include perspective-origin(top left);

    // Transform-Style
    @include transform-style(preserve3d);


### Transitions
    // Basic
    @include transition(all .5s ease-in 1s);

    // Transition-Property
    @include transition-property(all);

    // Transition-Delay
    @include transition-delay(.5s);

    // Transition-Duration
    @include transition-duration(1s);

    // Transition-Timing-Function
    @include transition-timing-function(linear);

## Example of a config-file
I use for these configuration a _config.scss, which has all the configurations and variables for the project.

    // Array for icons
    $icons: (
      'css' 'a',
      'briefcase' 'b',
      'apple' 'c',
      'html' 'd',
      'happy-smiley' 'e',
      'home' 'f'
    );

    // Breakpoints and Widths
    $max-wrapper-width: 920px;
    $max-cols: 12;
    $gutter-width: 2%;
    $breakpoints: (
      'mobile-landscape' 480px,
      'smaller-tablet' 600px,
      'tablet' 768px,
      'tablet-landscape' $max-wrapper-width
    );

    // Fonts
    $base-font-family: Helvetica, Arial, sans-serif;
    $base-font-size: 1.6


## Bower
    bower install scss-components

## If you contribute...
**Install all dependencies**

    npm install

**Release a new version**

    grunt release:{type}

    // Types
    patch - small fixes
    minor - new feature
    mayor - api-change

I am really thankful for all the knowledge and code, which the developers share with us. You benefit of it.