(window.webpackJsonp=window.webpackJsonp||[]).push([[102,51,52,56],{1143:function(t,e,n){"use strict";n(843)},1144:function(t,e,n){var r=n(28),o=n(228),c=n(739),l=r(!1),d=o(c);l.push([t.i,'.subject-wrapper[data-v-40a1c2fa]{position:relative;min-height:100vh;background-color:#f3f8ff;z-index:3}.subject-wrapper[data-v-40a1c2fa]:after{content:"";position:absolute;width:100%;height:80%;left:0;top:0;background:url('+d+");background-position:50%;background-size:cover;z-index:-1}.subject-heading[data-v-40a1c2fa]{font-family:Open Sans;font-style:normal;font-weight:700;font-size:24px;line-height:152%;text-align:center;color:#336}.subject-heading .subject-title[data-v-40a1c2fa]{color:#f90}",""]),t.exports=l},1216:function(t,e,n){"use strict";n.r(e);n(6),n(33),n(30);var r=n(4),o={name:"subject-id",components:{spinner:n(389).default},data:function(){return{isLoading:!0,subject:null,allQuestions:[],filteredQuestions:[]}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("quiz/subject/".concat(t.$route.params.id)).then((function(e){var data=e.data;return t.subject=data.direction})).catch((function(t){return console.log(t)}));case 2:return e.next=4,t.$axios.get("quiz/quiz/").then((function(e){var data=e.data;t.allQuestions=data})).catch((function(t){return console.log(t)}));case 4:t.filteredQuestions=t.allQuestions.filter((function(e){return e.subject===parseInt("".concat(t.$route.params.id))})),setTimeout((function(){t.isLoading=!1}),100);case 6:case"end":return e.stop()}}),e)})))()}},c=(n(1143),n(24)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoading?n("spinner"):n("div",{staticClass:"subject-wrapper pt-8"},[n("h1",{staticClass:"text-center subject-heading"},[t._v("Quiz subject: "),n("span",{staticClass:"subject-title"},[t._v(" "+t._s(t.subject))])]),t._v(" "),n("QuizComponent",{attrs:{questions:t.filteredQuestions}})],1)}),[],!1,null,"40a1c2fa",null);e.default=component.exports;installComponents(component,{Spinner:n(389).default,QuizComponent:n(880).default})},388:function(t,e,n){var content=n(391);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("96a4e060",content,!0,{sourceMap:!1})},389:function(t,e,n){"use strict";n.r(e);var r={name:"spinner"},o=(n(390),n(24)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"isLoading"},[n("div",{staticClass:"spinner"},[n("div",{staticClass:"double-bounce1"}),t._v(" "),n("div",{staticClass:"double-bounce2"})])])}],!1,null,"7fc1bfac",null);e.default=component.exports},390:function(t,e,n){"use strict";n(388)},391:function(t,e,n){var r=n(28)(!1);r.push([t.i,".spinner[data-v-7fc1bfac]{width:40px;height:40px;position:relative;margin:100px auto}.double-bounce1[data-v-7fc1bfac],.double-bounce2[data-v-7fc1bfac]{width:100%;height:100%;border-radius:50%;background-color:orange;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:sk-bounce-data-v-7fc1bfac 2s ease-in-out infinite;animation:sk-bounce-data-v-7fc1bfac 2s ease-in-out infinite}.double-bounce2[data-v-7fc1bfac]{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-bounce-data-v-7fc1bfac{0%,to{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes sk-bounce-data-v-7fc1bfac{0%,to{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}.isLoading[data-v-7fc1bfac]{min-height:100vh;display:flex;justify-content:center;align-content:center;padding-top:5rem}",""]),t.exports=r},422:function(t,e,n){var content=n(617);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("4b229318",content,!0,{sourceMap:!1})},584:function(t,e,n){"use strict";n.r(e);var r={methods:{hideModal:function(){this.$refs["quiz-modal"].hide()}},computed:{getCorrectAnswers:function(){return this.$store.getters["quizModule/getCorrectIndex"]?this.$store.getters["quizModule/getCorrectIndex"]:"no correct answers"},getPercentage:function(){return this.$store.getters["quizModule/getPercentage"]?this.$store.getters["quizModule/getPercentage"]:"0"}}},o=(n(616),n(24)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:"quiz-modal",attrs:{id:"modal-quiz",title:"Your score is:"},on:{"":function(t){}},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[n("div",{staticClass:"w-100"},[n("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"md"},on:{click:function(e){return e.preventDefault(),t.hideModal(e)}}},[t._v("\n        ok\n      ")])],1)]},proxy:!0}])},[n("p",[t._v("\n    Correct answers:\n    "),n("span",{staticClass:"special-color"},[t._v(" "+t._s(t.getCorrectAnswers)+" ")])]),t._v(" "),n("p",[t._v("\n    Your current status:\n    "),n("span",{staticClass:"special-color"},[t._v(" "+t._s(t.getPercentage)+"% ")])])])}),[],!1,null,"33771c49",null);e.default=component.exports},616:function(t,e,n){"use strict";n(422)},617:function(t,e,n){var r=n(28)(!1);r.push([t.i,".special-color[data-v-33771c49]{color:orange}",""]),t.exports=r},618:function(t,e,n){var content=n(741);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("1f37ad16",content,!0,{sourceMap:!1})},739:function(t,e,n){t.exports=n.p+"img/pricing.dce5dd1.png"},740:function(t,e,n){"use strict";n(618)},741:function(t,e,n){var r=n(28)(!1);r.push([t.i,".btns[data-v-1ccb52ea]{display:grid;grid-template-columns:repeat(2,auto);grid-gap:1rem;gap:1rem;padding:0 1rem}.question-text[data-v-1ccb52ea]{margin:1rem auto 2rem;font-family:Open Sans;font-style:normal;font-weight:700;font-size:26px;line-height:35px;color:#336}.wrapper[data-v-1ccb52ea]{margin-top:3rem}.special-text[data-v-1ccb52ea]{color:orange}",""]),t.exports=r},843:function(t,e,n){var content=n(1144);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("f74c7634",content,!0,{sourceMap:!1})},880:function(t,e,n){"use strict";n.r(e);n(113),n(6),n(10),n(9),n(11),n(33),n(30);var r=n(4),o=n(389),c=n(584),l={components:{spinner:o.default,QuizModal:c.default},props:["questions"],data:function(){return{isFinished:!1,isLoading:!0,answer:Array(this.myQuestions&&this.myQuestions.length).fill(!1),currentIndex:0,myQuestions:[],correctSet:[],inCorrect:0,totalScore:{persentageValue:null,incorrectSet:0}}},methods:{reset:function(){this.currentIndex=0,this.isFinished=!1},check:function(){var t=this;this.answer[this.currentIndex]===this.myQuestions[this.currentIndex].answer?this.correctSet[this.currentIndex]=1:this.correctSet[this.currentIndex]=0,setTimeout((function(){t.currentIndex!==t.myQuestions.length-1&&t.next()}),350);var e=0;this.correctSet.forEach((function(t){1===t&&e++})),this.$store.commit("quizModule/setCorrectIndex",e)},finishAll:function(){var t=this,e=this.$store.getters["quizModule/getCorrectIndex"];this.answer.filter((function(t){return!1===t})).length;this.totalScore.persentageValue=Math.floor(e/this.myQuestions.length*100),this.$store.commit("quizModule/setPersentage",this.totalScore.persentageValue);var n=this.$createElement,r=n("div",{domProps:{innerHTML:"Your score is now available"}}),o=n("div",{class:["foobar"]},[n("p",{class:["text-left"]},["Your current status is: ",n("strong",{class:["special-text"]},["".concat(this.totalScore.persentageValue,"%")])]),n("p",{class:["text-left"]},["Correct answer(s): ",n("strong",{class:["special-text"]},["".concat(e)])])]);this.$bvModal.msgBoxOk([o],{title:[r],buttonSize:"sm",centered:!0,size:"sm"}).then((function(){t.$router.push("/"),setTimeout((function(){document.getElementById("section_4").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}),2e3)})).catch((function(t){console.log("message box error: "+t)}))},next:function(){this.currentIndex++}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.questions.map(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("quiz/quiz/".concat(n.id)).then((function(e){var data=e.data;t.myQuestions.push(data)})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:t.isLoading=!1;case 3:case"end":return e.stop()}}),e)})))()}},d=(n(740),n(24)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoading?n("spinner"):n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},t._l(t.myQuestions,(function(e,r){return n("div",{directives:[{name:"show",rawName:"v-show",value:r===t.currentIndex,expression:"index === currentIndex"}],key:r,staticClass:"col-md-6 offset-md-3 wrapper"},[n("h1",{staticClass:"question-text"},[t._v(t._s(e.question))]),t._v(" "),n("b-form-group",[n("b-form-radio",{attrs:{name:"some-radios",value:"A"},on:{change:function(e){return t.check()}},model:{value:t.answer[r],callback:function(e){t.$set(t.answer,r,e)},expression:"answer[index]"}},[t._v(t._s(e.A))]),t._v(" "),n("b-form-radio",{attrs:{name:"some-radios",value:"B"},on:{change:function(e){return t.check()}},model:{value:t.answer[r],callback:function(e){t.$set(t.answer,r,e)},expression:"answer[index]"}},[t._v(t._s(e.B))]),t._v(" "),n("b-form-radio",{attrs:{name:"some-radios",value:"C"},on:{change:function(e){return t.check()}},model:{value:t.answer[r],callback:function(e){t.$set(t.answer,r,e)},expression:"answer[index]"}},[t._v(t._s(e.C))]),t._v(" "),n("b-form-radio",{attrs:{name:"some-radios",value:"D"},on:{change:function(e){return t.check()}},model:{value:t.answer[r],callback:function(e){t.$set(t.answer,r,e)},expression:"answer[index]"}},[t._v(t._s(e.D))])],1),t._v(" "),n("div",{staticClass:"btns row my-2"},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:0===t.currentIndex},on:{click:function(e){t.currentIndex--}}},[t._v("\n          Previous\n        ")]),t._v(" "),t.currentIndex!=t.myQuestions.length-1?n("button",{staticClass:"btn btn-primary",on:{click:t.next}},[t._v("\n          Next\n        ")]):n("button",{staticClass:"btn btn-primary",on:{click:t.finishAll}},[t._v("\n          Finish all quiz answers\n        ")])])],1)})),0),t._v(" "),n("quiz-modal")],1)}),[],!1,null,"1ccb52ea",null);e.default=component.exports;installComponents(component,{Spinner:n(389).default,QuizModal:n(584).default})}}]);