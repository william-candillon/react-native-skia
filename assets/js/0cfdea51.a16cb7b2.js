"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7897],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(a),k=r,N=c["".concat(l,".").concat(k)]||c[k]||d[k]||s;return a?n.createElement(N,p(p({ref:t},m),{},{components:a})):n.createElement(N,p({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,p=new Array(s);p[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var i=2;i<s;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6752:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const s={id:"glyphs",title:"Glyphs",sidebar_label:"Glyphs",slug:"/text/glyphs"},p=void 0,o={unversionedId:"text/glyphs",id:"text/glyphs",title:"Glyphs",description:"This component draws a run of glyphs, at corresponding positions, in a given font.",source:"@site/docs/text/glyphs.md",sourceDirName:"text",slug:"/text/glyphs",permalink:"/react-native-skia/docs/text/glyphs",draft:!1,editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/text/glyphs.md",tags:[],version:"current",frontMatter:{id:"glyphs",title:"Glyphs",sidebar_label:"Glyphs",slug:"/text/glyphs"},sidebar:"tutorialSidebar",previous:{title:"Text",permalink:"/react-native-skia/docs/text/text"},next:{title:"Text Path",permalink:"/react-native-skia/docs/text/path"}},l={},i=[{value:"Draw text vertically",id:"draw-text-vertically",level:2}],m={toc:i};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This component draws a run of glyphs, at corresponding positions, in a given font."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"glyphs"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Glyph[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Glyphs to draw")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x?"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},"x coordinate of the origin of the entire run. Default is 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"y?"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},"y coordinate of the origin of the entire run. Default is 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"font"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SkFont")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Font to use")))),(0,r.kt)("h2",{id:"draw-text-vertically"},"Draw text vertically"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "onSize"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Glyphs: {\n    (props: SkiaProps<GlyphsProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n    };\n}\nimport Glyphs"},"Glyphs")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const vec: (x?: number, y?: number) => import("../types").SkPoint\nimport vec'},"vec")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const useFont: (font: DataSourceParam, size?: number, onError?: ((err: Error) => void) | undefined) => import("../types").SkFont | null\nimport useFont'},"useFont"),"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const HelloWorld: () => JSX.Element | null"},"HelloWorld")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"32"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useFont(font: DataSourceParam, size?: number | undefined, onError?: ((err: Error) => void) | undefined): SkFont | null\nimport useFont"},"useFont")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"./my-font.otf"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize"),");")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"if"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (",(0,r.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"==="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},") {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: SkPoint;\n}[]"},"glyphs")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font"))),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(method) SkFont.getGlyphIDs(str: string, numCodePoints?: number | undefined): number[]"},"getGlyphIDs")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"Hello World!"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(method) Array<number>.map<{\n    id: number;\n    pos: SkPoint;\n}>(callbackfn: (value: number, index: number, array: number[]) => {\n    id: number;\n    pos: SkPoint;\n}, thisArg?: any): {\n    id: number;\n    pos: SkPoint;\n}[]"},"map")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"((",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(parameter) id: number"},"id")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i"),") "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ({ ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) id: number"},"id")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) pos: SkPoint"},"pos")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) vec(x?: number | undefined, y?: number | undefined): SkPoint\nimport vec"},"vec")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i")," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"+"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"*"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize"),") }));")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "onSize"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) style?: StyleProp<ViewStyle>"},"style")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," }}>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Glyphs: {\n    (props: SkiaProps<GlyphsProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n    };\n}\nimport Glyphs"},"Glyphs"))),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) font: AnimatedProp<SkFont, any>"},"font")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,r.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font"),"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) glyphs: AnimatedProp<Glyph[], any>"},"glyphs")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,r.kt)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: SkPoint;\n}[]"},"glyphs"),"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      />")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "onSize"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "onSize"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Glyphs: {\n    (props: SkiaProps<GlyphsProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n    };\n}\nimport Glyphs"},"Glyphs")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const vec: (x?: number, y?: number) => import("../types").SkPoint\nimport vec'},"vec")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const useFont: (font: DataSourceParam, size?: number, onError?: ((err: Error) => void) | undefined) => import("../types").SkFont | null\nimport useFont'},"useFont")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"export"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const HelloWorld: () => JSX.Element | null"},"HelloWorld")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"32"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useFont(font: DataSourceParam, size?: number | undefined, onError?: ((err: Error) => void) | undefined): SkFont | null\nimport useFont"},"useFont")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any"},"require")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./my-font.otf"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"if"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont | null"},"font")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"==="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"null"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"null;")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: SkPoint;\n}[]"},"glyphs")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font"))),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(method) SkFont.getGlyphIDs(str: string, numCodePoints?: number | undefined): number[]"},"getGlyphIDs")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"Hello World!"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(method) Array<number>.map<{\n    id: number;\n    pos: SkPoint;\n}>(callbackfn: (value: number, index: number, array: number[]) => {\n    id: number;\n    pos: SkPoint;\n}, thisArg?: any): {\n    id: number;\n    pos: SkPoint;\n}[]"},"map")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(parameter) id: number"},"id")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) id: number"},"id")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) pos: SkPoint"},"pos")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) vec(x?: number | undefined, y?: number | undefined): SkPoint\nimport vec"},"vec")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"0"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(parameter) i: number"},"i")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"+"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"*"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const fontSize: 32"},"fontSize")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"))"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "onSize"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) style?: StyleProp<ViewStyle>"},"style")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Glyphs: {\n    (props: SkiaProps<GlyphsProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n    };\n}\nimport Glyphs"},"Glyphs"))),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) font: AnimatedProp<SkFont, any>"},"font")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const font: SkFont"},"font")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) glyphs: AnimatedProp<Glyph[], any>"},"glyphs")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const glyphs: {\n    id: number;\n    pos: SkPoint;\n}[]"},"glyphs")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "style" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | ... 46 more ... | "onSize"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,r.kt)("img",{src:a(9850).Z,width:"256",height:"256"}))}d.isMDXComponent=!0},9850:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hello-world-vertical-7e5428aaf04726357f290b09e2a8c19c.png"}}]);