window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var choices;         
  var word ;              
  var guess ;             
  var guesses = [ ];      
  var lives ;             
  var counter ;           
  var space;              


  var showLives = document.getElementById("mylives");

  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
  

   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "You Lose!";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

  
   check = function () {
    list.onclick = function () {
      var answer = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === answer) {
          guesses[i].innerHTML = answer;
          counter += 1; 
        } 
      }
      var j = (word.indexOf(answer));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }
  
  
  play = function () {
    choices = [
        [
        "hartford", "dover", "austin", "frankfort", "montgomery", "oklahoma city", "atlanta", "boise", "nashville", "providence", "columbia", "montpelier", "denver", "springfield", "concord", "charleston", "olympia", "annapolis", "albany", "phoenix","harrisburg", "honolulu", "carson city", "des moines", "topeka", "santa fe", "sacramento", "cheyenne", "raleigh", "jackson", "lansing", "jefferson city", "juneau", "trenton", "salem", "salt lake city", "augusta", "richmond", "columbus", "bismarck", "helena", "indianapolis", "tallahassee", "lincoln", "little rock", "baton rouge", "pierre", "madison", "boston", "st paul"
        ],
    ];

    selectedWord = choices[Math.floor(Math.random() * choices.length)];
    word = selectedWord[Math.floor(Math.random() * selectedWord.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();

  }

  play();
  


  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    play();
  }
}



