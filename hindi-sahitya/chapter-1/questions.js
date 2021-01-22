// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "कबीर किस धारा के कवि थे ?",
    answer: "भक्तिकाल की निर्गुण ज्ञानाश्रयी",
    options: [
      "भक्तिकाल की सगुण रामभक्ति",
      "भक्तिकाल की निर्गुण प्रेमाश्रयी",
      "भक्तिकाल की निर्गुण ज्ञानाश्रयी",
      "भक्तिकाल की सगुण कृष्णभक्ति"
    ]
  },
    {
    numb: 2,
    question: "संत कबीर का जन्म कब हुआ ?",
    answer: "विक्रम संवत 1455",
    options: [
      "विक्रम संवत 1455",
      "विक्रम संवत 1499",
      "विक्रम संवत 1370",
      "विक्रम संवत 1450"
    ]
  },
    {
    numb: 3,
    question: "कबीर का जन्म कहां हुआ ?",
    answer: "काशी",
    options: [
      "हरिद्वार",
      "काशी",
      "केदारनाथ",
      "बनारस"
    ]
  },
    {
    numb: 4,
    question: "कबीर का लालन पालन किसने किया ?",
    answer: "नीरू-नीमा ने",
    options: [
      "रविदेव-गायत्री ने ",
      "रामानंद-भगवती ने",
      "जय-जया ने",
      "नीरू-नीमा ने"
    ]
  },
    {
    numb: 5,
    question: "कबीर किसके शिष्य थे ?",
    answer: "रामानंद",
    options: [
      "नरहरिदास",
      "रामदेव",
      "रामानंद",
      "लीलानंद"
    ]
  },
      {
    numb: 6,
    question: "कबीर की काव्य भाषा है ?",
    answer: "सधुक्कड़ी",
    options: [
      "अवधि",
      "बृज",
      "सधुक्कड़ी",
      "खड़ी बोली"
    ]
  },
 {
    numb: 7,
    question: "कबीर का रचना संग्रह है ?",
    answer: "बीजक",
    options: [
      "साकेत",
      "बीजक",
      "रामचरितमानस",
      "कबीरसार"
    ]
  },
    {
    numb: 8,
    question: "कबीर थे -",
    answer: "अशिक्षित",
    options: [
      "अशिक्षित",
      "शिक्षित",
      "वेदपाठक",
      "ज्ञात नहीं"
    ]
  },
     {
    numb: 9,
    question: "कबीर का देहावसान कब हुआ ?",
    answer: "विक्रम संवत 1575",
    options: [
      "विक्रम संवत 1575",
      "विक्रम संवत 1572",
      "विक्रम संवत 1577",
      "विक्रम संवत 1579"
    ]
  },
    {
    numb: 10,
    question: "कबीर का निधन कहां हुआ ?",
    answer: "मगहर",
    options: [
      "मगध",
      "मगहर",
      "वाराणसी",
      "अयोध्या"
    ]
  },
];

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 7){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>और शानदार ! 🎉, आपको मिले हैं <b> '+ questions.length +' </b> में से <b> '+ userScore +' </b> अंक</span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 4){ // if user scored more than 4
        let scoreTag = '<span>और बढ़िया ! 😎, आपको मिले हैं <b> '+ questions.length +' </b> में से <b> '+ userScore +' </b> अंक</span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>और अच्छा प्रयास ! 🙂, आपको मिले हैं <b> '+ questions.length +' </b> में से <b> '+ userScore +' </b> अंक</span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>और क्षमा करें 😐, आपको मिले हैं <b> '+ questions.length +' </b> में से <b> '+ userScore +' </b> अंक</span>';
        scoreText.innerHTML = scoreTag;
    }
}
