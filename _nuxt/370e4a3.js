(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1169:function(t,e,o){t.exports=o.p+"img/laptop.705be39.png"},1228:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{modalToggle:!1,deleteToggler:!1,id:null,courseData:{title:""}}},created:function(){},methods:{getImgUrl:function(img){return img||void 0}},computed:{allCourses:function(){return this.$store.getters["instructorsPage/getAllCoursesList"]}}},l=o(24),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"courses__container"},[t._m(0),t._v(" "),t.modalToggle?r("div",{staticClass:"courses__modal",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.modalToggle=!t.modalToggle}}},[r("form",{staticClass:"courses__form",on:{submit:function(e){return e.preventDefault(),t.createCourse(e)}}},[r("span",{staticClass:"form__close",on:{click:function(e){t.modalToggle=!t.modalToggle}}},[t._v("×")]),t._v(" "),r("h1",[t._v("\n        It's ok if you can't think of a good title now. You can change it\n        later.\n      ")]),t._v(" "),r("div",{staticClass:"form__group"},[r("label",{attrs:{for:"title"}},[t._v("Title:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.courseData.title,expression:"courseData.title"}],attrs:{required:"",autocomplete:"off",placeholder:"Title",name:"title",type:"text"},domProps:{value:t.courseData.title},on:{input:function(e){e.target.composing||t.$set(t.courseData,"title",e.target.value)}}})]),t._v(" "),r("button",{attrs:{type:"submit"}},[t._v("Create")])])]):t._e(),t._v(" "),t.deleteToggler?r("div",{staticClass:"courses__modal",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.deleteToggler=!t.deleteToggler}}},[r("form",{staticClass:"courses__form",on:{submit:function(e){return e.preventDefault(),t.proveDeleteCourse(e)}}},[r("span",{staticClass:"form__close",on:{click:function(e){t.deleteToggler=!t.deleteToggler}}},[t._v("×")]),t._v(" "),r("h1",[t._v("Are you sure to delete this course?")]),t._v(" "),r("button",{attrs:{type:"submit"}},[t._v("Yes")]),t._v(" "),r("button",{on:{click:function(e){t.deleteToggler=!t.deleteToggler}}},[t._v("No")])])]):t._e(),t._v(" "),t._l(t.allCourses,(function(e,i){return r("div",{key:i,staticClass:"courses__edit",attrs:{id:i}},[r("img",{attrs:{src:o(1169),alt:"course image"}}),t._v(" "),r("div",[r("h2",[t._v(t._s(e.course_name))])]),t._v(" "),r("div",{staticClass:"courses__edit__box"},[r("nuxt-link",{staticClass:"courses__edit__link",attrs:{to:t.localePath("/instructor-page/courses/"+e.id)}},[t._v("Edit")]),t._v(" "),r("button",{staticClass:"courses__edit__delete"},[t._v("Delete")])],1)])}))],2)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"courses__header"},[o("h1",[t._v("All Courses")]),t._v(" "),o("button",[t._v("+New course")])])}],!1,null,null,null);e.default=component.exports}}]);