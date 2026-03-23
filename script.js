const inlinePro = {
  "chai-flex": "display",
  "chai-flex-col": "flexDirection",
  "chai-justify-between": "justifyContent",
  "chai-justify-center": "justifyContent",
  "chai-align-center": "alignItems",
  "chai-items-center": "alignItems",
  "chai-gap": "gap",

  "chai-padding": "padding",
  "chai-padding-top": "paddingTop",
  "chai-margin-top": "marginTop",
  "chai-p-10": "padding",

  "chai-w-50": "width",

  "chai-heading": "fontSize",
  "chai-text": "color",
  "chai-text-white": "color",

  "chai-btn": "background",
  "chai-border-none": "border",

  "chai-avatar": "width",
  "chai-rounded-full": "borderRadius",

  "chai-bg-light": "background",
  "chai-card": "background",
  "chai-a-color":"color",
  "chai-a-t-Dec-none" : "textDecoration",
  "display-inline" : "display",
  "list-style-none" : "listStyle"
};
const cssClass = {
  "chai-flex": "flex",
  "chai-flex-col": "column",
  "chai-justify-between": "space-between",
  "chai-justify-center": "center",
  "chai-align-center": "center",
  "chai-items-center": "center",
  "chai-gap": "20px",

  "chai-padding": "20px",
  "chai-padding-top": "40px",
  "chai-margin-top": "50px",
  "chai-p-10": "10px",

  "chai-w-50": "50%",

  "chai-heading": "32px",
  "chai-text": "#555",
  "chai-text-white": "#fff",

  "chai-btn": "#ff6464",
  "chai-border-none": "none",

  "chai-avatar": "150px",
  "chai-rounded-full": "50%",

  "chai-bg-light": "#edf7fa",
  "chai-card": "#fff",
  "chai-a-color" : "black",
  "chai-a-t-Dec-none" : "none",
  "display-inline" : "inline",
  "list-style-none" : "none"
};


function elementAddClass(element) {
  const elementClassArr = Array.from(element.classList);
  for (const className of elementClassArr) {
    if (cssClass.hasOwnProperty(className)) {
      element.style[inlinePro[className]] = cssClass[className];
    }
  }
  element.removeAttribute("class");
  return;
}

function elementChild(element) {
  elementAddClass(element);
  const childrenHTMLCollection = element.children;
  const childrenArr = Array.from(childrenHTMLCollection);
  if (childrenArr) {
    for (const key in childrenArr) {
      elementChild(childrenHTMLCollection[key]);
    }
  } else {
    return;
  }
}

elementChild(document.querySelector("body"));
