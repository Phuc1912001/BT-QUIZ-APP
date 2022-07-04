
// dạ không phải em tự làm đâu ạ 
// em tham khảo trên mạng đó ạ
var btn_next = document.querySelector(".next");
var btn_back = document.querySelector(".back");
var box_question = document.querySelector(".box-qustion");
const array = [
  {
    question: "Javascript is _____ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting",
    },
    multi: false,
    correctAnswer: "a",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()",
    },
    multi: false,
    correctAnswer: "c",
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing",
    },
    multi: false,
    correctAnswer: "d",
  },
];

const question = {
  array: [],
  uiDefault: () => {
    var uiDefault = array[0];
    box_question.innerHTML = ` <label  >
           <p class="Question">${uiDefault.question}</p>
        </label>
        <input type="radio" id="a" value="a"  name="fav_language">
        <label for="a">${uiDefault.answers.a}</label><br>
        <input type="radio" id="b" value="b" name="fav_language" >
        <label for="b">${uiDefault.answers.b}</label><br>
        <input type="radio" id="c" value="c" name="fav_language">
        <label for="c">${uiDefault.answers.c}</label><br>
        <input type="radio" id="d" value="d" name="fav_language">
        <label for="d">${uiDefault.answers.d}</label><br>

`;
  },
  backButon: (index) => {
    btn_back.onclick = () => {
      if (index <= array.length - 1 && index > 0) {
        index = index - 1;
        var array_ques1 = array[index];
        box_question.innerHTML = ` <label  >
           <p class="Question">${array_ques1.question}</p>
        </label>
        <input type="radio" id="a" value="a"   name="fav_language">
        <label for="a">${array_ques1.answers.a}</label><br>
        <input type="radio" id="b" value="b" name="fav_language" >
        <label for="b">${array_ques1.answers.b}</label><br>
        <input type="radio" id="c" value="c" name="fav_language">
        <label for="c">${array_ques1.answers.c}</label><br>
        <input type="radio" id="d" value="d" name="fav_language">
        <label for="d">${array_ques1.answers.d}</label><br>

`;
      }
    };
  },
  nextButon: () => {
    var arr_name = [];
    btn_next.onclick = () => {
      var name_ques = document.querySelector(".Question").innerHTML;
      array.map((elm) => {
        arr_name.push(elm.question);
        var index = arr_name.indexOf(name_ques);
        var stt = index;
        if (index < array.length - 1) {
          index = index + 1;
          question.backButon(index);
          var array_ques1 = array[index];
          box_question.innerHTML = ` <label  >
           <p class="Question">${array_ques1.question}</p>
        </label>
        <input type="radio" id="a" value="a" name="fav_language">
        <label for="a">${array_ques1.answers.a}</label><br>
        <input type="radio" id="b" value="b" name="fav_language" >
        <label for="b">${array_ques1.answers.b}</label><br>
        <input type="radio" id="c" value="c" name="fav_language">
        <label for="c">${array_ques1.answers.c}</label><br>
        <input type="radio" id="d" value="d" name="fav_language">
        <label for="d">${array_ques1.answers.d}</label><br>

`;
        }
        var er = document.querySelectorAll("input[name=fav_language]");
        er.forEach((elm) => {
          elm.onchange = (event) => {
            question.array[stt+1] = event.target.value;
            if (array[stt+1].correctAnswer === question.array[stt+1]) {
              question.show("Bạn đã chọn đúng");
            }else{
              question.show(
                "Bạn đã chọn Sai đáp án phải là : " + array[stt+1].correctAnswer
              );
            }
          };
        });
      });
    };
  },
  result: (a) => {
    var er = document.querySelectorAll("input[name=fav_language]");
    er.forEach((elm) => {
      elm.onchange = (event) => {
        question.array[a] = event.target.value;
         if (array[a].correctAnswer === question.array[a]) {
           question.show("Bạn đã chọn đúng");
         } else {
           question.show(
             "Bạn đã chọn Sai đáp án phải là : " + array[a].correctAnswer
           );
         }
   

      };
    });
  },
  show: (result) => {
    alert(result);
  },
};

function start() {
  question.nextButon();
  question.backButon();
  question.uiDefault();
  question.result(0);
}

start();