"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[902],{902:function(n,e,t){t.r(e),t.d(e,{RegisterForm:function(){return q}});var i,r,a,o,s,p,l,d,x,c,m,f,h=t(5861),u=t(9439),g=t(4687),w=t.n(g),b=t(2791),v=t(9434),Z=t(2195),j=t(5705),y=t(168),k=t(1087),z=t(7686),C=z.Z.div(i||(i=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 92.19%);\n  background-repeat: no-repeat;\n  background-size: cover;\n"]))),N=z.Z.div(r||(r=(0,y.Z)(["\n  background: #161616;\n  border-radius: 8px;\n  padding: 40px;\n\n  @media screen and (max-width: 768px) {\n    padding: 24px;\n  }\n"]))),_=z.Z.div(a||(a=(0,y.Z)(["\n  display: flex;\n"]))),R=(0,z.Z)(k.rU)(o||(o=(0,y.Z)(["\n  margin-right: 14px;\n\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: #ffffff;\n"]))),S=(0,z.Z)(k.rU)(s||(s=(0,y.Z)(["\n  left: 160px;\n  top: 40px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: rgba(255, 255, 255, 0.3);\n\n  transition: all 500ms;\n\n  &:hover,\n  &:focus {\n    color: #fff;\n  }\n"]))),E=z.Z.div(p||(p=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  gap: 14px;\n\n  input {\n    width: 287px;\n    height: 49px;\n    left: 40px;\n    top: 107px;\n\n    color: #ffffff;\n    background-color: #1f1f1f;\n    opacity: 0.4;\n    border: 1px solid #bedbb0;\n    padding-left: 18px;\n    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n    border-radius: 8px;\n\n    outline: none;\n    transition: all 500ms;\n\n    &:hover,\n    &:focus,\n    &:active {\n      opacity: 1;\n      box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);\n    }\n\n    @media screen and (min-width: 768px) {\n      width: 326px;\n    }\n  }\n"]))),I=z.Z.div(l||(l=(0,y.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n"]))),T=z.Z.span(d||(d=(0,y.Z)(["\n  position: absolute;\n  right: 18px;\n  top: 19px;\n  cursor: pointer;\n"]))),U=z.Z.img(x||(x=(0,y.Z)(["\n  width: 16.5px;\n  height: 16px;\n  top: 50%;\n  right: 4px;\n"]))),B=z.Z.svg(c||(c=(0,y.Z)(["\n  width: 16.5px;\n  height: 16px;\n  top: 50%;\n  right: 4px;\n"]))),D=z.Z.button(m||(m=(0,y.Z)(["\n  width: 100%;\n  height: 49px;\n  margin-top: 24px;\n\n  color: #161616;\n  text-align: center;\n  font-family: 'Poppins';\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n\n  background: #bedbb0;\n  border-radius: 8px;\n\n  border: none;\n\n  cursor: pointer;\n\n  @media screen and (max-width: 768px) {\n    width: 287px;\n  }\n"]))),F=(0,z.Z)(j.Bc)(f||(f=(0,y.Z)(["\n  font-size: 14px;\n  color: #bedbb070;\n  width: 287px;\n\n  @media screen and (min-width: 768px) {\n    width: 326px;\n  }\n"]))),J=t(7609),L=t(1262),P=t(844),V=t(184),q=function(){var n=(0,b.useState)(!1),e=(0,u.Z)(n,2),t=e[0],i=e[1],r=(0,v.I0)(),a=function(){var n=(0,h.Z)(w().mark((function n(e){var t;return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),t=e.currentTarget,r((0,Z.z2)({username:t.elements.name.value,email:t.elements.email.value,password:t.elements.password.value})),console.log(t.elements.name.value,t.elements.email.value,t.elements.password.value),t.elements.name.value="",t.elements.email.value="",t.elements.password.value="";case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,V.jsx)(C,{children:(0,V.jsx)("form",{onSubmit:a,children:(0,V.jsx)(j.J9,{initialValues:{name:"",email:"",password:""},validationSchema:L.T,children:(0,V.jsxs)(N,{children:[(0,V.jsxs)(_,{children:[(0,V.jsx)(R,{to:"/auth/register",underline:"none",children:"Registration"}),(0,V.jsx)(S,{to:"/auth/login",underline:"none",children:"Log In"})]}),(0,V.jsxs)(E,{children:[(0,V.jsx)(j.gN,{name:"name",type:"text",placeholder:"Enter your name"}),(0,V.jsx)(F,{name:"name",component:"div"}),(0,V.jsx)(j.gN,{name:"email",type:"email",placeholder:"Enter your email"}),(0,V.jsx)(F,{name:"email",component:"div"}),(0,V.jsxs)(I,{children:[(0,V.jsx)(j.gN,{name:"password",type:t?"text":"password",placeholder:"Create a password"}),(0,V.jsx)(F,{name:"password",component:"div"}),(0,V.jsx)(T,{onClick:function(){i(!t)},children:t?(0,V.jsx)(U,{src:P.Z}):(0,V.jsx)(B,{children:(0,V.jsx)("use",{stroke:"gray",href:"".concat(J.Z,"#eye-password")})})})]})]}),(0,V.jsx)(D,{type:"submit",children:"Register Now"})]})})})})}}}]);
//# sourceMappingURL=902.712c21ec.chunk.js.map