![Travis Ci](https://travis-ci.org/CodyReeves/css-grid-system-library.svg?branch=production)
[![GitHub version](https://badge.fury.io/gh/CodyReeves%2Fcss-grid-system-library.svg)](https://badge.fury.io/gh/CodyReeves%2Fcss-grid-system-library)
[![Bower version](https://badge.fury.io/bo/css-grid-system-library.svg)](https://badge.fury.io/bo/css-grid-system-library)

# CSS Grid Library
### The only css grid package you will ever need. 

Three grid systems in one package! Each is fully responsive and mobile ready. Each grid is optional via setting up a config. 

## Grid Systems Included:
- Flexbox Grid System 
- CSS Grid system 
- Flexbox Masonry Grid System 

## Installation:

### NPM/YARN:
Add to your package.json:

```
"dependencies": {
  "css-grid-system-library": "git://github.com/CodyReeves/css-grid-system-library.git"
},
```

Add to your SCSS:
```
@import "PATH-TO-NODE_MODULES/node_modules/css-grid-system-library/scss/main";
```
### Bower
Add to your bower.json:

```
"dependencies": {
  "css-grid-system-library": >=1.0.0,
},
```
Add to your SCSS:
```
@import "PATH-TO-BOWER_DIR/bower/css-grid-system-library/scss/main";
```

## Example config 

```
$user-defined-settings: (
  grid: (
    grid-columns: 12,
    setup: (
      breakpoints-list: (xs, sm, md, xl, xxl),
      breakpoints: (
        xs: 768px, // uses max-width query
        sm: 768px,
        md: 992px,
        lg: 1280px,
        xl: 1600px,
        xxl: 1900px  
      ),
    ),
    flexbox-columns-active: true,
    create-masonry: true,
    mas-item-padding: 15px,
    mas-column-gap: 15px,
    create-css-grid: true,
    css-grid-gutter: 15px
  )
);
``` 

## How To:
All breakpoints are set from settings map.

### Flexbox

#### Setup 
All alignment, distribution, and recordering classes are automatically imported.
To create flexbox column classes set `flexbox-columns-active` to true in `$user-defined-settings`

#### Overview

Grid systems are used for creating page layouts through a series of rows and columns that house your content. Here's how the grid system works:

Rows must be placed within a `.container` (fixed-width) or `.container-fluid` (full-width) for proper alignment and padding.
Use rows to create horizontal groups of columns.

Content should be placed within columns, and only columns may be immediate children of rows.
Predefined grid classes like .row and `.col-xs-4` are available for quickly making grid layouts.
Columns create gutters (gaps between column content) via padding. That padding is offset in rows for the first and last column via negative margin on `.rows`.

The negative margin is why the examples below are outdented. It's so that content within grid columns is lined up with non-grid content.
Grid columns are created by specifying the number of twelve available columns you wish to span. For example, three equal columns would use three `.col-xs-4`.
If more than `12` columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.
Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, e.g. applying any `.col-md-*` class to an element will not only affect its styling on medium devices but also on large devices if a `.col-lg-*` class is not present.

##### Responsive 

Modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths.
```
  <div class="col-xs-12 col-sm-8 col-md-6 col-lg-4">
         <div class="box">Responsive</div>
     </div>
 </div>
```
##### Fluid

Percent based widths allow fluid resizing of columns and rows.
```
  .col-xs-6 {
      flex-basis: 50%;
    }
```

#### Offset a column

```
  <div class="row">
      <div class="col-xs-offset-3 col-xs-9">
          <div class="box">offset</div>
      </div>
  </div>
```
#### Auto Width

Add any number of auto sizing columns to a row. Let the grid figure it out.
```
  <div class="row">
      <div class="col-xs">
          <div class="box">auto</div>
      </div>
  </div>
```
---
#### Nested Grids

Nest grids inside grids inside grids.
```
  <div class="row">
      <div class="col-xs">
          <div class="box">auto</div>
              <div class="row">
                  <div class="col-xs">
                      <div class="box">auto</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
```
---
#### Alignment

Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column

`.start-`
```html
<div class="row start-xs">
    <div class="col-xs-6">
        <div class="box">
            start
        </div>
    </div>
</div>
```
---
`.center-`
```html
<div class="row center-xs">
    <div class="col-xs-6">
        <div class="box">
            start
        </div>
    </div>
</div>
```
---
`.end-`
```html
<div class="row end-xs">
    <div class="col-xs-6">
        <div class="box">
            start
        </div>
    </div>
</div>
```
---
`.top-`
```html
<div class="row top-xs">
    <div class="col-xs-6">
        <div class="box">
            start
        </div>
    </div>
</div>
```
---
`.middle-`
```html
<div class="row middle-xs">
    <div class="col-xs-6">
        <div class="box">
            start
        </div>
    </div>
</div>
```
---
`.bottom-`
```html
<div class="row bottom-xs">
    <div class="col-xs-6">
        <div class="box">
            start
        </div>
    </div>
</div>
```
---
##### Example Alignment

Here is an example of using the modifiers in conjunction to acheive different alignment at different viewport sizes.
```html
<div class="row center-xs end-sm start-lg">
    <div class="col-xs-6">
        <div class="box">
            start
        </div>
    </div>
</div>
```

#### Distribution

Add classes to distribute the contents of a row or column.

`.around-`
```html
<div class="row around-xs">
    <div class="col-xs-2">
        <div class="box">
            around
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            around
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            around
        </div>
    </div>
</div>
```
---
`.between-`
```html
<div class="row between-xs">
    <div class="col-xs-2">
        <div class="box">
            around
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            around
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            around
        </div>
    </div>
</div>
```

#### Reordering

Add classes to reorder columns.

`.first-`
```html
<div class="row">
    <div class="col-xs-2">
        <div class="box">
            1
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            2
        </div>
    </div>
    <div class="col-xs-2 first-xs">
        <div class="box">
            3
        </div>
    </div>
</div>
```
---
`.last-`
```html
<div class="row">
    <div class="col-xs-2 last-xs">
        <div class="box">
            1
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            2
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            3
        </div>
    </div>
</div>
```
#### Reversing

`.reverse`
```html
<div class="row reverse">
    <div class="col-xs-2">
        <div class="box">
            1
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            2
        </div>
    </div>
    <div class="col-xs-2">
        <div class="box">
            3
        </div>
    </div>
</div>
```

### Masonry 
To create flexbox column classes set `create-masonry` to true in `$user-defined-settings`.
To set the item and column gap set ` mas-item-padding` and `mas-column-gap` in `$user-defined-settings`.

#### Overview
To use the masonry grid there is 2 components that must be used:

- You must wrap the grid with the class .masonry-row
- Next you must declare what column breakpoints are required, the breakpoints are created very similar to the flexbox grid with the only difference being the prefix mas- in front of the class name and the column number isent in reverese. For Example: `.mas-col-lg-3` creates 3 column grid at the large breakpoint --≥ 1200px

#### Example Markup 

```html
<div class="masonry-row">
  <div class="mas-col-xs-1 mas-col-sm-2 mas-col-lg-3">
    <div class="item"> ... </div>
    ...
    <div class="item"> ... </div>
  </div>
</div>
```

### CSS Grid System
Please note this still needs fully tested.

Classes are based off the main breakpoint map in the `$settings`
Each set of classes uses the breakpoint suffix to declare size of grid similar to the flexbox grid. An example CSS grid class: `full-sm two-thirds-lg`

Basic markup for creating a single column in the row

```html
<div class="container grid">
  <div class="row">
    <div class="full-xs full-sm"> ... </div>
  </div>
</div>
```

A 2 column, 3 row layout:

```html
<div class="container grid">
  <div class="row">
    <div class="full-xs full-sm"> ... </div>
  </div>
  <div class="row">
    <div class="full-xs two-thirds-sm"> ... </div>
    <div class="full-xs one-third-sm"> ... </div>
  </div>
  <div class="row">
    <div class="full-xs full-sm"> ... </div>
  </div>
</div>
```
#### Columns

Columns classes, based on a 12 column grid:

- `.full- *` (12/12 Columns)
- `.one-half- *` (6/12 Columns)
- `.two-thirds- *` (8/12 Columns)
- `.one-third- *` (4/12 Columns)
- `.one-fourth- *` (3/12 Columns)
- `.one-sixth- *` (2/12 Columns)
- `.one-twelfth- *` (1/12 Columns)

#### Grid Alignment 
Note: the classes must be used with the `.grid` class. 

**Example: `grid align-center-vert-sm`**

- `.align-center-vert- *` (Vertically center)
- `.align-center-horiz- *` (Horizontally center)
- `.align-end-vert- *` (Vertically align to bottom)
- `.align-end-horiz- *` (Horizontally align to right)

```html
<div class="container grid">
  <div class="row">
    <div class="full-xs full-sm grid align-center-vert-sm content-center-horiz-sm"> Centered </div>
  </div>
</div>
```
#### Row Alignment
Note: the classes must be used with the `.row` class 

- `.align-top- *` (Align row to top)
- `.align-bottom- *` (Align row to bottom)


```html
<div class="container grid">
  <div class="row align-top-xs align-bottom-sm">
    <div class="full-xs full-sm"> ... </div>
  </div>
  <div class="row">
    <div class="two-half-xs two-thirds-sm"> ... </div>
    <div class="one-half-xs one-third-sm"> ... </div>
  </div>
  <div class="row align-bottom-xs align-top-sm">
    <div class="full-xs full-sm"> ... </div>
  </div>
</div>
```

#### Column Alignment 

Align the column to the middle of the layout.  
Feature working with: `.one-half- .two-thirds- .one-third- .one-sixth-` column classes

- `.align-middle- *` (Centers column)

```html
<div class="container grid">
  <div class="row">
    <div class="full-xs one-half-sm align-middle-sm"> Centered </div>
  </div>
</div>
```

#### Nesting

Requirements: 
- Add `.grid` class to your column.

```html
<div class="container grid">
  <div class="row">
    <div class="full-xs one-third-sm grid">
      <div class="one-half-sm"> ... </div>
      <div class="one-half-sm"> ... </div>
    </div>
    <div class="full-xs two-thirds-sm">
      <div class="one-forth-sm"> ... </div>
      <div class="one-forth-sm"> ... </div>
      <div class="one-forth-sm"> ... </div>
      <div class="one-forth-sm"> ... </div>
    </div>
  </div>
</div>
```

