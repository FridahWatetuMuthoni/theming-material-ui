# Material UI theming

## Notes

```javascript
// The paper component provides background for your app.
// You only need <CssBaseline/> and ThemeProvider only once in your project.Always put them at the very top of your application
// Box is basically a div but with material ui shorthand
```

## The Theming Object

```javascript

{
    breakpoints:{}
    direct:"ltr", // or "rtl"
    components:{},
    pallette:{},
    spacing: f a(),
    shape:{},
    mixins:{},
    shadows:Array(25),
    typograhy:{},
    transitions:{},
    Zindex:{}
}

```

## Material UI Breakpoints

```javascript
let breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};
```

## Material UI Pallete

```javascript
pallete:{
    mode:"light",
    common:{
        main:"",
        light:"",
        dark:"",
        contrastText:"",
    },
    primary:{
        main:"",
        light:"",
        dark:"",
        contrastText:"",
    },
    secondary:{
        main:"",
        light:"",
        dark:"",
        contrastText:"",
    },
    error:{
        main:"",
        light:"",
        dark:"",
        contrastText:"",
    },
    warning:{
        main:"",
        light:"",
        dark:"",
        contrastText:"",
    },
    info:{
        main:"",
        light:"",
        dark:"",
        contrastText:"",
    },
    success:{
        main:"",
        light:"",
        dark:"",
        contrastText:"",
    },
    grey:{},
    contrastThreshod:3,
    getContrastText: f R(),
    augmentColor: f E(),
    tonalOffset:0.2,
    text:{},
    divider:rgba(0,0,0,0.12),
    background:{},
    action:{}
}
```

## Material UI typography

```javascript

typography:{
    htmlFontSize:16,
    pxToRem:f(),
    fontFamily:'"Roboto","Helvetica","Arial", sans-serif',
    fontSize:14,
    fontWeightLight:300,
    fontWeightRegular:400,
    fontWeightMedium:500,
    fontWeightBold:700
    h1:{
        fontFamily:'"Roboto","Helvetica","Arial", sans-serif',
        fontWeight:300,
        fontSize:"6rem",
        lineHeight:1.167,
        letterSpacing:"-0.01562em"
    },
    h2:{},
    h3:{},
    h4:{},
    h5:{},
    h6:{},
    subtitle1:{},
    subtitle2:{},
    body1:{},
    body2:{},
    button:{},
    caption:{},
    overline:{}
    }
```
