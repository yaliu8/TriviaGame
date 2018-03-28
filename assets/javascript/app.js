$(document).ready(function() {
    var index = 0;
    var countdownTimer = {
      time: 20,
      reset: function() {
        this.time = 30;
        $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
      },
      start: function() {
        counter = setInterval(countdownTimer.count, 1000);
      },
      stop: function() {
        clearInterval(counter);
      },
      count: function() {
          countdownTimer.time--;
        if (countdownTimer.time >= 0) {
          $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
        }
        else {
          index++;
          answerWrong();
          countdownTimer.reset();
          if (index < questionArray.length) {
            loadQuestion(index);
          } else {
            $(".answerchoice").hide();
            showScore();
          }
        }
      }
    };
  var correct = 0;
  var wrong = 0;
  var q1 = {
    question : 'What is the only bird known to fly backwards?',
    possibleAnswers : ['A. Hummingbirds',
           'B. Bluejay',
           'C. Owl',
           'D. Red Robin'],
    flags : [true, false, false, false],
    answer : 'A. Hummingbirds'
  };
  
  var q2 = {
    question : 'What dog breed native to Japan has a name that translates to "little brushwood dog"?',
    possibleAnswers : ['A. Himachi',
           'B. Wakame Retriever',
           'C. Shiba Inu',
           'D. Pomeranians'],
    flags : [false, false, true, false],
    answer : 'C. Shiba Inu'
  };
  
  var q3 = {
    question : 'What breed of horse is best known for its use in racing?',
    possibleAnswers : ['A. Palomino',
           'B. Thoroughbred',
           'C. Stallion',
           'D. Pony'],
    flags : [false, true, false, false],
    answer : 'B. Thoroughbred'
  };

  var q4 = {
    question : 'What is the name for a dog created by crossing a Labrador Retriever and a Poodle?',
    possibleAnswers : ['A. Pootriever',
           'B. Labroodle Retriever',
           'C. Roodle',
           'D. Labradoodle'],
    flags : [false, false, false, true],
    answer : 'D. Labradoodle'
  };

  var q5 = {
    question : 'What is the name for the offspring of a male donkey and a female horse?',
    possibleAnswers : ['A. Honkey',
           'B. Dorse',
           'C. Mule',
           'D. Stag'],
    flags : [false, false, true, false],
    answer : 'C. Mule'
  };

  var q6 = {
    question : 'What chemical element gives the blood of a lobster a bluish tint?',
    possibleAnswers : ['A. Copper',
           'B. Iron',
           'C. Calcium',
           'D. Mercury'],
    flags : [true, false, false, false],
    answer : 'A. Copper'
  };
  
  var questionArray = [q1, q2,q3,q4,q5,q6];
  
  function loadQuestion(questionSelection) {
    console.log(questionSelection);
    countdownTimer.reset();
    $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
    $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
    $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
    $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
    $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
  }
  
  function setup() {
    index = 0;
    $('.startButton').on('click', function() {
      $(this).hide();
      countdownTimer.start();
      loadQuestion(index);
    });
  }
  
  function getAnswer() {
  
    $('.answerchoice').on('click', function() {
      console.log('alert', index);
      index++;
      console.log('click', index);
      $(".question").text('');
      $("#buttonA").text('');
      $("#buttonB").text('');
      $("#buttonC").text('');
      $("#buttonD").text('');
      loadQuestion();
    })
  }
  
  function answerCorrect() {
    correct++;
  
    $(".alert").html('correct!!!');
  }
  
  function answerWrong() {
    wrong++;
    console.log("wrong");
    $(".alert").html('incorrect!!!');
  
  }
  
  function showScore() {
    $('.question').empty();
    $('.question').append("<h2><p>" + correct + " correct</p></h2>");
    $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
    countdownTimer.stop();
    $('.timer').empty();
  
  }
  
  setup();
  $('.answerchoice').on('click', function() {
   console.log($(this));
   if(this.id == 'buttonA') {
    var answerChosen = 'A';
   } else if(this.id == 'buttonB') {
    answerChosen = 'B';
   } else if (this.id == 'buttonC') {
    answerChosen = 'C';
   } else if (this.id == 'buttonD') {
    answerChosen = 'D';
   }
   if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
    answerCorrect();
   } else if (answerChosen == 'A') {
    answerWrong();
   }
   if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
    answerCorrect();
   } else if (answerChosen == 'B') {
    answerWrong();
   }
  if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
    answerCorrect();
   } else if (answerChosen == 'C') {
    answerWrong();
   }
  if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
    answerCorrect();
   } else if (answerChosen == 'D') {
    answerWrong();
   }
  
   $(".question").text('');
   $("#buttonA").text('');
   $("#buttonB").text('');
   $("#buttonC").text('');
   $("#buttonD").text('');
   index++;
   if (index < questionArray.length) {
    loadQuestion(index);
   } else {
    $(".answerchoice").hide();
    showScore();
   }
  });
  
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  
  });
  