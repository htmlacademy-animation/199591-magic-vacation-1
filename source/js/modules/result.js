export default () => {
  let showResultEls = document.querySelectorAll(`.js-show-result`);
  let results = document.querySelectorAll(`.screen--result`);
  if (results.length) {
    for (let i = 0; i < showResultEls.length; i++) {
      showResultEls[i].addEventListener(`click`, function () {
        let target = showResultEls[i].getAttribute(`data-target`);
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        let targetEl = [].slice.call(results).filter(function (el) {
          return el.getAttribute(`id`) === target;
        });
        targetEl[0].classList.add(`screen--show`);
        targetEl[0].classList.remove(`screen--hidden`);
        let resultAnimation;
        let pathList;

       if (target == 'result') {
         resultAnimation = document.querySelectorAll('.result1__svg animate');
         pathList = document.querySelectorAll('.result1__svg path');

         for (let j = 0; j < resultAnimation.length; j++) {
           let pathLength =  pathList[j].getTotalLength().toString();
           resultAnimation[j].setAttribute("to", pathLength);
           resultAnimation[j].beginElement();
         }
       } else if (target == 'result2') {
         resultAnimation = document.querySelectorAll('.result2__svg animate');
         pathList = document.querySelectorAll('.result2__svg path');

         for (let j = 0; j < resultAnimation.length; j++) {
          let pathLength =  pathList[j].getTotalLength().toString();
          resultAnimation[j].setAttribute("to", pathLength);
          resultAnimation[j].beginElement();
         }
       } else if (target == 'result3') {
         let resultTransform;
         resultAnimation = document.querySelectorAll('.result3__svg animate');
         pathList = document.querySelectorAll('.result3__svg path');
         resultTransform = document.querySelectorAll('.result3__svg animateTransform');

          for (let j = 0; j < resultAnimation.length; j++) {
            let pathLength =  pathList[j].getTotalLength().toString();
            resultAnimation[j].setAttribute("to", pathLength);
            resultAnimation[j].beginElement();
            setTimeout(() => {
              return resultTransform[j].beginElement();
            }, j*60)
          }
       }

      });
    }

    let playBtn = document.querySelector(`.js-play`);
    if (playBtn) {
      playBtn.addEventListener(`click`, function () {
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        document.getElementById(`messages`).innerHTML = ``;
        document.getElementById(`message-field`).focus();
      });
    }
  }
};
