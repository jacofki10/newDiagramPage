/* eslint-disable jquery/no-data */
/* eslint-disable jquery/no-text */
/* eslint-disable jquery/no-each */
//TODO:
//FIXME:
import "jquery";
import { CP } from "./questions";
import { NP } from "./questions";
import { A } from "./questions";
import { FC } from "./questions";
import { AC } from "./questions";
import { nextQuestion } from "./redirect";
import "./../css/style.scss";

// POP UP WINDOW //
var expireAt = new Date;
expireAt.setMonth(expireAt.getMonth() + 3);
var code = "";

function makeCookie()
{
code = document.form1.user1.value;
document.cookie = "code=" + code + ";expires=" + expireAt.toGMTString()
}

if (document.cookie.split(';').filter((item) => item.trim().startsWith('code=')).length) {
  console.log('The cookie "code" exists');
} else{
  $(function () {
    var overlay = $('<div id="overlay"></div>');
    overlay.show();
    overlay.appendTo(document.body);
    $('.popup').show();
    $('.close').click(function () {
      makeCookie();
      $('.popup').hide();
      overlay.appendTo(document.body).remove();
      return false;
    });
    $('.x').click(function () {
      $('.popup').hide();
      overlay.appendTo(document.body).remove();
      return false;
    });
  });
}


// IINSERT DATA IN RESULT.HTML //
export function setResult(type) {
  localStorage.setItem('Pattern', type);
  window.location.href = "result.html";
}

// GET THE 20 QUESTIONS//
//remove rondom
// function rand(sounceArray, destinationArray) {
//   var ran = sounceArray[Math.floor(Math.random() * sounceArray.length)];
//   if (destinationArray.indexOf(ran) == -1)
//     destinationArray.push(ran);
//   else
//     rand(sounceArray, destinationArray);
// }
// function randomSelect4(sounceArray) {
//   var destinationArray = [];
//   for (var i = 0; i < 4; i++) {
//     rand(sounceArray, destinationArray);
//   }
//   return destinationArray;
// }

// var CPselected = randomSelect4(CP);
// var NPselected = randomSelect4(NP);
// var Aselected = randomSelect4(A);
// var FCselected = randomSelect4(FC);
// var ACselected = randomSelect4(AC);
//remove random//

var CPselected = CP;
var NPselected = NP;
var Aselected = A;
var FCselected = FC;
var ACselected = AC;
var finalQuestions = CPselected.concat(NPselected, Aselected, FCselected, ACselected);

var html = '';
var number = 1;
var classNumber = 1;
for (var i = 0; i < finalQuestions.length; i++) {
  html += "<div id='question＿" + classNumber++ + "' class='diaguramu_data'>";
  html += "<div class='no'>" + number++ + "</div>";
  html += "<div class='total_number'>" + finalQuestions[i].questionNumber + "</div>";
  html += "<div class='type'>" + finalQuestions[i].type + "</div>";
  html += "<div class='question'>" + finalQuestions[i].question + "</div>";
  html += "<div class='answer1'>" + finalQuestions[i].answer1 + "</div>";
  html += "<div class='answer2'>" + finalQuestions[i].answer2 + "</div>";
  html += "<div class='answer3'>" + finalQuestions[i].answer3 + "</div>";
  html += "</div>";
}
$('#data_area').html(html);

//SHOW THE QUESTIONS IN THE QUIZ ORDERLY//
export const MAX_QUESTION_NO = 20;
const MAX_TYPE_SCORE = 8;
var $qNo = $('#q_no');
var $TotalNo = $('#total_no');
var $question = $('#question');
var $qAnswer1 = $('#q_answer1');
var $qAnswer2 = $('#q_answer2');
var $qAnswer3 = $('#q_answer3');
var $qProgressBar = $('#q_progress_bar');
var $qProgressNo = $('#q_progress_no');
export var scoreData = [];
var List = [];
//var user = [];

function init() {
  $('.diaguramu_data').each(function () {
    var $this = $(this);
    var No = $('.no', $this).text();
    var Type = $('.type', $this).text();
    var TotalNumber = $('.total_number', $this).text();
    var Question = $('.question', $this).text();
    var Answer1 = $('.answer1', $this).text();
    var Answer2 = $('.answer2', $this).text();
    var Answer3 = $('.answer3', $this).text();
    List[No] = {
      'Type': Type,
      'TotalNumber': TotalNumber,
      'Question': Question,
      'Answer1': Answer1,
      'Answer2': Answer2,
      'Answer3': Answer3
    };
    scoreData[Type] = 0;
  });
  setupQuestion(1);
}
//SET THE NEXT  QUESTIONS IN THE QUIZ //
export function setupQuestion(no) {
  $qNo.text(no);
  $TotalNo.text(List[no].TotalNumber);
  $question.text(List[no].Question);
  $('a', $qAnswer1).text(List[no].Answer1);
  $qAnswer1.data('type', List[no].Type);
  $qAnswer1.data('no', no);
  $('a', $qAnswer2).text(List[no].Answer2);
  $qAnswer2.data('type', List[no].Type);
  $qAnswer2.data('no', no);
  $('a', $qAnswer3).text(List[no].Answer3);
  $qAnswer3.data('type', List[no].Type);
  $qAnswer3.data('no', no);
  $qProgressNo.text(no);
  $qProgressBar.text(no);
}

//ON CLICK ACTION / /
function clickAnswer(saveInArray, number, type, currentNo) {
  //SaveinArray(saveInArray);
  if (MAX_TYPE_SCORE <= scoreData[type]) {
    return;
  }
  scoreData[type] += number;
  var randomColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
  $('#question_area').css({ 'background-color': randomColor });
  nextQuestion(currentNo);
}

$("#q_answer1").click(function () {
  var currentNo = $(this).data('no');
  var type = $(this).data('type');
  clickAnswer('A', 2, type, currentNo)
});

$("#q_answer2").click(function () {
  var currentNo = $(this).data('no');
  var type = $(this).data('type');
  clickAnswer('B', 1, type, currentNo)
});

$("#q_answer3").click(function () {
  var currentNo = $(this).data('no');
  var type = $(this).data('type');
  clickAnswer('C', 0, type, currentNo)
});

//Save answer in and array and show in console( just for testing)//
//function SaveinArray(answer) {
//var q_no = $("#q_no").text();
//var main_no = $("#total_no").text();
// var finalanswer = (answer);
//user.push(q_no, main_no, finalanswer);
//console.log(user);
//}


init();

