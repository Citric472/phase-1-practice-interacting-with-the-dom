document.addEventListener('DOMContentLoaded', function () {
    // Timer
    let counterValue = 0;
    const counter = document.getElementById('counter');
    const counterInterval = setInterval(incrementCounter, 1000);
  
    function incrementCounter() {
      counter.innerText = counterValue++;
    }
  
    // Plus Button
    const plusButton = document.getElementById('plus');
    plusButton.addEventListener('click', function () {
      counter.innerText = counterValue++;
    });
  
    // Minus Button
    const minusButton = document.getElementById('minus');
    minusButton.addEventListener('click', function () {
      counter.innerText = counterValue--;
    });
  
    // Like Button
    const likeButton = document.getElementById('heart');
    const likesList = document.querySelector('.likes');
    likeButton.addEventListener('click', function () {
      const likeItem = document.createElement('li');
      likeItem.innerText = `Number ${counterValue} has been liked!`;
      likesList.appendChild(likeItem);
    });
  
    // Pause Button
    const pauseButton = document.getElementById('pause');
    pauseButton.addEventListener('click', function () {
      if (pauseButton.innerText === 'pause') {
        clearInterval(counterInterval);
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
        pauseButton.innerText = 'resume';
      } else {
        counterInterval = setInterval(incrementCounter, 1000);
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
        pauseButton.innerText = 'pause';
      }
    });
  
    // Restart Button
    const restartButton = document.createElement('button');
  restartButton.id = 'restart';
  restartButton.innerText = 'restart';
  document.body.appendChild(restartButton);

  restartButton.addEventListener('click', function () {
    counterValue = 0;
    counter.innerText = counterValue;
  });
 
    // Comment Form
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('list');
  
    commentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const commentText = commentInput.value;
      const commentItem = document.createElement('div');
      commentItem.innerText = commentText;
      commentsList.appendChild(commentItem);
      commentInput.value = '';
    });
  });
  