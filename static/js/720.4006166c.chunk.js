"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[720],{3720:function(e,n,o){o.r(n),o.d(n,{default:function(){return x}});var t=o(2791),s=o(9439),c=o(7609),r=o(4956),i=o(1243),a=o(9434),l=o(9273),u=o(8973),h=o(184);var d=function(){var e=(0,t.useState)([]),n=(0,s.Z)(e,2),o=n[0],d=n[1],x=(0,t.useState)([]),g=(0,s.Z)(x,2),j=g[0],f=g[1],k=(0,a.I0)(),p=(0,r.Nq)({onSuccess:function(e){d(e)},onError:function(e){return console.log("Login Failed:",e)}});return(0,t.useEffect)((function(){o&&(console.log(o.access_token),i.Z.get("https://www.googleapis.com/oauth2/v1/userinfo?access_token=".concat(o.access_token),{headers:{Authorization:"Bearer ".concat(o.access_token),Accept:"application/json"}}).then((function(e){console.log(e.data),f(e.data),k((0,l.z2)({username:j.name,email:j.email,password:o.access_token}))})).catch((function(e){return console.log(e)})))}),[o]),(0,h.jsx)(u.W2,{children:(0,h.jsxs)(u.im,{children:[(0,h.jsx)(u.TR,{}),(0,h.jsxs)(u.K7,{children:[(0,h.jsx)(u.JO,{children:(0,h.jsx)("use",{href:"".concat(c.Z,"#icon-logo")})}),(0,h.jsx)(u.Dx,{children:"TASK PRO"})]}),(0,h.jsx)(u.xv,{children:"Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!"}),(0,h.jsxs)(u.cX,{children:[(0,h.jsx)(u.gJ,{to:"auth/register",children:"Registration"}),(0,h.jsx)(u.$H,{to:"auth/login",children:"Log In"}),j?(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:j.picture,alt:"user avatar"}),(0,h.jsx)("h3",{children:"User Logged in"}),(0,h.jsxs)("p",{children:["Name: ",j.name]}),(0,h.jsxs)("p",{children:["Email Address: ",j.email]}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)("button",{onClick:function(){(0,r.Kz)(),f(null)},children:"Log out"})]}):(0,h.jsx)("button",{onClick:function(){return p()},children:"Sign in with Google \ud83d\ude80 "})]})]})})},x=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(d,{})})}}}]);
//# sourceMappingURL=720.4006166c.chunk.js.map