(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{864:function(e,t,o){"use strict";o.r(t);o(18),o(30);var n=o(4),r={mixins:[o(149).a],data:function(){return{label:"Send your resume",form:{first_name:"Jahongir",last_name:"Tursunaliev",phone_number:"+998904000011",password:"23012001",portfolio:"www.smth.com",description:"I am a developer",token:"",resume:""},file:""}},methods:{valChange:function(e){this.label=e.target.files[0].name,this.file=e.target.files[0]},getCode:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.post("user/send/code/",{phone_number:e.form.phone_number}).then((function(t){console.log("[Sent code]",t.data.code),e.$nextTick((function(){e.$bvModal.show("modal-check-code")}))}));case 3:t.next=9;break;case 5:t.prev=5,t.t0=t.catch(0),e.showToast("danger","Xatolik","Anketa to'gri to'ldirilmagan"),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})))()},checkCode:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n,r,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,t.$axios.post("user/check/code/",{phone_number:t.form.phone_number,code:e}).then((function(e){t.form.token=e.data.token}));case 3:if(""==t.form.token||null==t.form.token){o.next=19;break}return(n=new FormData).append("file",t.file),o.next=8,t.$axios.post("mentor/resume/",n);case 8:return r=o.sent,t.form.resume=r.data.file,o.next=12,t.$axios.post("mentor/create/",t.form);case 12:l=o.sent,console.log(l.data),t.$nextTick((function(){t.$bvModal.hide("modal-check-code")})),t.$router.push(t.localePath({path:"/"})),t.$store.dispatch("course/initToastShow",!0),t.form={first_name:"",last_name:"",phone_number:"",password:"",resume:"",portfolio:"",description:"",token:""},t.file="";case 19:o.next=25;break;case 21:o.prev=21,o.t0=o.catch(0),t.showToast("danger","Xatolik","Kod xato terilgan"),console.log(o.t0);case 25:case"end":return o.stop()}}),o,null,[[0,21]])})))()}}},l=o(24),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"form__wrapper"},[e._m(0),e._v(" "),o("form",{on:{submit:function(t){return t.preventDefault(),e.getCode(t)}}},[o("Input",{attrs:{inputPlaceholder:"First Name"},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}}),e._v(" "),o("Input",{attrs:{inputPlaceholder:"Last Name"},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}}),e._v(" "),o("Input",{attrs:{type:"tel",inputPlaceholder:"Phone number"},model:{value:e.form.phone_number,callback:function(t){e.$set(e.form,"phone_number",t)},expression:"form.phone_number"}}),e._v(" "),o("Input",{attrs:{type:"password",inputPlaceholder:"Password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),o("div",{staticClass:"inputControl__box"},[o("input",{staticClass:"inputControl__file",attrs:{type:"file",name:"file",id:"file"},on:{change:e.valChange}}),e._v(" "),o("label",{attrs:{for:"file"}},[o("span",[e._v(e._s(e.label))]),e._v(" "),o("span",[e._v("Upload file")])])]),e._v(" "),o("Input",{attrs:{inputPlaceholder:"Send link of your portfolio"},model:{value:e.form.portfolio,callback:function(t){e.$set(e.form,"portfolio",t)},expression:"form.portfolio"}}),e._v(" "),o("Input",{attrs:{controlType:"textarea",textPlaceholder:"Short information about your skills",rows:"7"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),o("div",{staticClass:"form__button"},[o("p",{staticClass:"form__p"},[e._v("\n        By clicking Sign Up, you agree to our Terms of Use and our Privacy\n        Policy.\n      ")]),e._v(" "),o("Button",{attrs:{type:"submit",btnStyle:"controlButtonSubmit"}},[e._v("Submit")])],1),e._v(" "),o("check-code",{on:{codeTransfer:e.checkCode}})],1)])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"form__content"},[o("h1",[e._v("Fill out the application form")]),e._v(" "),o("p",{staticClass:"form__p"},[e._v("\n      Build skills for today, tomorrow, and beyond. Education to future-proof\n      your career.\n    ")])])}],!1,null,null,null);t.default=component.exports}}]);