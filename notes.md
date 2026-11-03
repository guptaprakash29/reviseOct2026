html CSS Javasript C programming JAVA programming

html:
html (Hypertext Markup Language) is standard markup language used to create webpages. It describe the basic structure of web content and tells the browser how to display text, audio, video and another elements. It is one the core technologies of alongside with CSS and JavaScript.

1. Introduction to html
2. Client Side and Server Side
3. Browser W3C validator
4. IDE - Code Editor
5. HTML Elements
6. HTML, Comments
7. Heading Tag
8. Paragraph Tag
9. Break Tag
10. Horizontal Tag
11. HTML Formatting Tags
12. Semantic Tags
13. Symbols
14. Image
15. Link
16. Lists
17. Tables
18. Favicon
19. iframe
20. videos and audios
21. Embed Youtube

CSS:
CSS (Cascading Stylesheet Language) is stylesheet language used to describe presentation (appearance and style) of a document written in HTML / XML. It is one of the core technologies of the Web alongside CSS and JavaScript.

1. Introduction to CSS
2. Insert CSS
3. Basic Selectors (element selector, id selector, class selector, universal selector , grouping selector)
4. Combinator Selectors (Descendant selector A B , Child selector A>B, Adjacent Sibling Selector A+B, General Sibling Selector A~B )
5. CSS, Comments
6. Relative Units
7. Color (Predefined Colors Name ,RGB & RGBA, HEX, HSL & HSLA)
8. Background
   background-color: ;
   background-image: url( );
   background-repeat: repeat'by default', no-repeat, repeat-x, repeat-y, round, space;
   background-attachment: fixed, scroll'by default';
   background-position: left,right, top, bottom, center;
   background-size: auto, contain, cover;
   background: image, repeat, attachment, position ,size;

9. Border
   border-width: medium, thick,thin, others units;
   border-style:solid 'by default', dashed, dotted, double, no-border, hidden, ridge, groove, inset, ofset;
   border-color: ;
   border-radius: ;
   border: width style color;
   text-decoration: line,color,style,thickness;

10. Outline
    outline: ;
11. Box Model "Margin-Padding"
    12.Text

(i) Text Color
color: ;

(ii) Text Alignment (left,center, right, justify)
text-align: ;

(iii)Text Decoration
text-decoration-line: ; 'Complusary' 'none, overline, underline, line-through'
text-decoration-color: ;
text-decoration-style: ; ( solid 'by default', dashed, dotted, double, wavy)
text-decopration-thickness: ;
text-decoration: line,color,style,thickness;

(iv)Text Transformation
text-transform: ; (none 'by default' , capitalize, lowercase, uppercase )

(v)Text Spacing
a. Text indent
text-indent: ;

b. letter spacing
letter-spacing: ;

c. word spacing
word-spacing: ;

d. line height
line-height: :

e. white space
white-space: ;

(vi)Text Shadow
text-shadow: offset-x offset-y blur-radius color ;

13.Font

font-style: ;
font-variant: ;
font-weight: ;
font-size: ;
line-height: ;
font-family: ;

14. Link
    Link-related pseudo-classes
    love-hate
    :link --style unvisited links
    :visited --style visited links
    :hover --styles elements when the mouse pointer is over them
    :active-- styles elements at the moment they are clicked

15. List
    list-style-type: ;
    list-style-position: ;
    list-style-image: url( );
    list-style: type position image;

16. Table
    'table, tr, th, td'
    border: ;
    border-collapse: separate 'by default' collapse;
    width: ;
    padding: ;
    text-align: ;
    background-color: ;

Advanced styling
a. Hover Effects
selector:hover{
}
b. Striped Row
selector:nth-hild(value ){
css properties
}

selector:nth_last-child(value){
css properties
}

17. Layout and Appearance
    CSS 'Cascading Style Sheets' is used to control the layout and appearance of webpages. There are some key concept and techniques for CSS layout.

1.  Normal Flow 'Default layout behavior'
    a. block-level element
    b. inline element
1.  Box Model
    -padding
    -margin
1.  Display Properties
    display: block inline inline-block flex grid none;

1.  Position Properties
    position: static relative absolute fixed sticky;
    top: ;
    left: ;
    right: ;
    bottom: ;

1.  Overflow Properties
    overflow: visible hidden scroll auto;
    overflow-x: ;
    overflow-y: ;
1.  Float Properties
    float: none left right inherit ;
1.  Media Queries
    @media (max-width: 150px) {
    p {
    background-color: brown;
    }
    }
    @media (min-width: 500px) {
    p {
    background-color: aqua;
    }
    }
    @media (min-width: 150px) and (max-width: 500px) {
    p {
    background-color: blue;
    }
    }
1.  Box-Sizing

        /* box-sizing: border-box content-box "by default"; */

1.  Flexbox Properties
    -Flex Container
    -Flex Items

-Main Axis 'row(by default) row-reverse column column-reverse'
-Cross Axis
display: flex; 'row(by default)

-Flex Container Properties
flex-direction: "row(by default) row-reverse column column-reverse";
flex-wrap: nowrap wrap wrap-reverse;
flex-flow: < "flex-direction" > || < "flex-wrap" >;
justify-content: flex-start flex-end center space-around space-between
space-evenly;
align-items:;
align-content:;
gap: ;
row-gap: ;
column-gap: ;

-Flex Items Properties
order: ;
flex-wrap:nowrap wrap wrap-reverse ;
flex-grow: ;
flex-shrink: ;
flex-basis: ;
flex:<'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ;

10. Grid Layout
    display: grid;
    grid-template-columns: ;
    grid-template-rows: ;
    There are several methods to apply values to the grid-template-columns: ; and grid-template-rows: ;properties in css grid
    a. Fixed Size
    b. Factorial units ''fr"
    c. repeat( ) Function
    d. auto keyword
    e. Combining Method

            grid-template-columns: ;
            grid-template-rows: ;
            grid-column-start: ;
            grid-column-end: ;
            grid-column:Shorthand for 'grid-column-start' and 'grid-column-end'. ;
            grid-row-start: ;
            grid-row-end: ;

11. Transitions
    CSS transitions let you smoothly change property values over time , instead of instantly.
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: ease-in;
    transition-delay: 1s;
    /Shorthand property combines four of the transition properties into a single property. /
    transition:;

12. Transform
    transform:; 'The transform CSS property lets you rotate, scale, skew, or translate an element.'
    transform: rotate();
    transform: rotateX();
    transform: rotateY();
    transform: scale();
    transform: scaleX();
    transform: scaleY();
    transform: skew();
    transform: skewX();
    transform: skewY();
    transform: translate();
    transform: translateX();
    transform: translateY();

JavaScript:
JavaScript is high level, interpreted , programming language that helps make website dynamic and interactive. It is one of the core technologies of the web alongside HTNK and CSS.
