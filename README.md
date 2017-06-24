# CSS Grid Library
### The only css grid package you will ever need. 

Three grid systems in one package! Each is fully responsive and mobile ready. Each grid is optional via setting up a config. 

## Grid Systems Included:
- Flexbox Grid System 
- CSS Grid system 
- Flexbox Masonry Grid System 

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
