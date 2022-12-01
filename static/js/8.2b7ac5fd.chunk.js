"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[8],{6008:function(n,e,t){t.r(e),t.d(e,{default:function(){return hn}});var r,o,i,a,c,u,s,d,l=t(885),m=t(5705),p=t(8687),h=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e},f=t(168),x=t(6444),g=x.ZP.label(r||(r=(0,f.Z)(["\n  margin-bottom: 14px;\n"]))),b=x.ZP.button(o||(o=(0,f.Z)(["\n  border-radius: ","px;\n  border: none;\n  padding: ","px;\n  cursor: pointer;\n  &:hover {\n    background-color: ",";\n    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    color: ",";\n  }\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.muted})),Z=x.ZP.div(i||(i=(0,f.Z)([""]))),j=x.ZP.h2(a||(a=(0,f.Z)(["\n  margin: 0;\n  margin-bottom: 12px;\n  text-align: center;\n"]))),v=(0,x.ZP)(m.l0)(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n"]))),w=(0,x.ZP)(m.gN)(u||(u=(0,f.Z)(["\n  border-radius: ","px;\n  padding: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  font-family: ","px;\n\n  border: 1px solid rgba(33, 33, 33, 0.2);\n\n  box-sizing: border-box;\n  box-shadow: 0 0 6px rgba(33, 33, 33, 0.2);\n  outline: none;\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fonts.Roboto})),y=function(n){return n.contacts.items},k=function(n){return n.contacts.isLoading},C=function(n){return n.contacts.error},_=function(n){return n.filter},P=t(3634),z=t(184),E=function(n){var e=n.onClose,t=(0,p.useDispatch)(),r=(0,p.useSelector)(y),o=h(),i=h(),a=h();return(0,z.jsxs)(Z,{children:[(0,z.jsx)(j,{children:"Phonebook"}),(0,z.jsx)(m.J9,{initialValues:{name:"",number:""},onSubmit:function(n,o){var i=o.resetForm,c=n.name,u=n.number,s={id:a,name:c,number:u};if(r.find((function(n){return n.name===c})))return alert("".concat(c," is already exist!"));t((0,P.el)(s)),i(),e()},children:(0,z.jsxs)(v,{action:"",children:[(0,z.jsx)(g,{htmlFor:o,children:(0,z.jsx)(w,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",id:i,required:!0,placeholder:"Name"})}),(0,z.jsx)(g,{htmlFor:o,children:(0,z.jsx)(w,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",id:i,required:!0,placeholder:"Number"})}),(0,z.jsx)(b,{type:"submit",children:"Add contact"})]})})]})},L=x.ZP.label(s||(s=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: ","px;\n  &:last-child {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[0]})),S=x.ZP.input(d||(d=(0,f.Z)(["\n  border-radius: ","px;\n  padding: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  font-family: ","px;\n\n  border: 1px solid rgba(33, 33, 33, 0.2);\n\n  box-sizing: border-box;\n  box-shadow: 0 0 6px rgba(33, 33, 33, 0.2);\n  outline: none;\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fonts.Roboto})),A=t(4808),F=function(){var n=(0,p.useDispatch)();return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(L,{htmlFor:"",children:(0,z.jsx)(S,{type:"text",placeholder:"   Find contacts by name",onChange:function(e){return n((0,A.T)(e.target.value))}})})})},N=t(7462),V=t(2791),D=t(9561),M=V.forwardRef((function(n,e){return V.createElement(D.r,(0,N.Z)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 48 48"},n,{ref:e}),V.createElement("path",{d:"M24 6.75a6.25 6.25 0 0 1 6.25 6.02V13H37a1.75 1.75 0 0 1 .14 3.5h-1.31l-1.62 21.57A4.25 4.25 0 0 1 29.97 42H18.03a4.25 4.25 0 0 1-4.24-3.93L12.17 16.5H11c-.92 0-1.67-.7-1.74-1.6l-.01-.15c0-.92.7-1.67 1.6-1.74L11 13h6.75c0-3.3 2.55-6 5.8-6.23l.22-.02H24zm3.75 13c-.65 0-1.18.5-1.24 1.12l-.01.13v12.13a1.25 1.25 0 0 0 2.5 0V20.87a1.25 1.25 0 0 0-1.25-1.12zm-7.5 0c-.65 0-1.18.5-1.24 1.12L19 21v12.13a1.25 1.25 0 0 0 2.5 0V20.87a1.25 1.25 0 0 0-1.25-1.12zm3.92-9.5H24a2.75 2.75 0 0 0-2.75 2.58V13h5.5a2.75 2.75 0 0 0-2.58-2.74z"}))}));M.displayName="Delete";var H,R,q,T,B,J,U,O,W=x.ZP.ul(H||(H=(0,f.Z)(["\n  display: flex;\n  padding: ","px;\n\n  border: 1px solid rgb(221, 221, 221);\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-bottom: ","px;\n  max-height: 50vh;\n  width: 100%;\n  overflow-y: auto;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),Y=x.ZP.li(R||(R=(0,f.Z)(["\n  width: 270px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 0.5px solid #030303;\n  margin-bottom: ","px;\n  &:last-child {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[0]})),$=x.ZP.button(q||(q=(0,f.Z)(["\n  border-radius: ","px;\n  border: none;\n  padding: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  font-size: small;\n  cursor: pointer;\n  background: none;\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]})),G=(0,x.ZP)(M)(T||(T=(0,f.Z)(["\n  color: ",";\n  &:hover {\n    color: ",";\n    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n"])),(function(n){return n.theme.colors.registr}),(function(n){return n.theme.colors.error})),I=x.ZP.h2(B||(B=(0,f.Z)(["\n  margin: 0;\n  margin-bottom: 12px;\n  text-align: center;\n"]))),K=x.ZP.div(J||(J=(0,f.Z)(["\n  padding-top: 25px;\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  margin: 0 auto;\n\n  @media (max-width: 719px) {\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n  }\n\n  @media (max-width: 720px) {\n    padding-top: ","px;\n  }\n"])),(function(n){return n.theme.space[5]})),Q=x.ZP.div(U||(U=(0,f.Z)(["\n  @media (max-width: 720) {\n    display: none;\n  }\n  @media (min-width: 720px) {\n    margin-right: 15px;\n  }\n\n  @media (min-width: 1199px) {\n    margin: 0;\n  }\n"]))),X=x.ZP.button(O||(O=(0,f.Z)(["\n  border-radius: ","px;\n  border: none;\n  padding: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  font-size: small;\n  cursor: pointer;\n  background: ",";\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  @media (max-width: 720px) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.registr}),(function(n){return n.theme.colors.muted}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.space[4]})),nn=function(n){var e=n.name,t=n.number,r=n.onClick;return(0,z.jsxs)(Y,{children:[e,":",(0,z.jsx)("span",{children:t}),(0,z.jsx)($,{onClick:r,children:(0,z.jsx)(G,{color:"red",size:"18px"})})]})},en=function(){var n=(0,p.useSelector)(y),e=(0,p.useSelector)(_),t=(0,p.useDispatch)(),r=function(){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}();return console.log(n.length),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(I,{children:"Contacts"}),0!==n.length&&(0,z.jsx)(W,{children:r.map((function(n){return(0,z.jsx)(nn,{name:n.name,number:n.number,onClick:function(){return t((0,P._f)(n.id))}},n.id)}))})]})},tn=t(4164),rn="modal_Overlay__rpLZC",on="modal_Modal__dkmwZ",an="modal_button_close__ymY8W",cn="modal_containt_box__EEw-l",un=document.querySelector("#modal-root"),sn=function(n){var e=n.children,t=n.onClose;function r(n){n.target===n.currentTarget&&t()}return(0,V.useEffect)((function(){function n(n){"Escape"===n.code&&t()}return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]),(0,tn.createPortal)((0,z.jsxs)("div",{className:rn,onClick:function(n){return r(n)},children:[(0,z.jsx)("button",{className:an,onClick:function(n){return r(n)}}),(0,z.jsx)("div",{className:on,children:(0,z.jsx)("div",{className:cn,children:e})})]}),un)},dn=t(4942),ln=t(1413),mn=["(max-width: 766px)","(min-width: 767px) and (max-width: 1199px)","(min-width: 1200px)"],pn=t(6123),hn=function(){var n=(0,p.useSelector)(k),e=(0,p.useSelector)(C),t=(0,p.useSelector)(y),r=function(){var n=mn.map((function(n){return matchMedia(n)})),e=function(){return n.map((function(n){return n.matches}))},t=(0,V.useState)(e),r=(0,l.Z)(t,2),o=r[0],i=r[1];return(0,V.useLayoutEffect)((function(){var t=function(){return i(e)};return n.forEach((function(n){return n.addEventListener("change",t)})),function(){return n.forEach((function(n){return n.removeEventListener("change",t)}))}})),["isMobile","isTablet","isDesktop"].reduce((function(n,e,t){return(0,ln.Z)((0,ln.Z)({},n),{},(0,dn.Z)({},e,o[t]))}),{})}(),o=r.isMobile,i=(0,p.useDispatch)(),a=(0,V.useState)(!1),c=(0,l.Z)(a,2),u=c[0],s=c[1];(0,V.useEffect)((function(){i((0,P.yF)())}),[i]);var d=function(){s(!1)};return(0,z.jsxs)(K,{children:[!o&&(0,z.jsx)(Q,{children:(0,z.jsx)(E,{})}),o&&(0,z.jsx)(X,{onClick:function(){return s(!0)},children:"Add contact"}),(0,z.jsxs)("div",{children:[(0,z.jsx)(en,{}),t.length>8?(0,z.jsx)(F,{}):null,n&&!e&&(0,z.jsx)(pn.a,{})]}),u&&(0,z.jsx)(sn,{onClose:d,children:(0,z.jsx)(E,{onClose:d})})]})}}}]);
//# sourceMappingURL=8.2b7ac5fd.chunk.js.map