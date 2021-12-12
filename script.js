// Ascent javascript

const scenseButtonOne = document.querySelector('.cherry');
  const deepcherry = document.querySelector('.deepcherry');
  const scenseButtonTwo = document.querySelector('.peach-b');
  const peachs = document.querySelector('.peachs');
  const scenseButtonThree = document.querySelector('.citrus');
  const juicy = document.querySelector('.juicy');
  const scenseButtonFour = document.querySelector('.lemon-b');
  const lemon = document.querySelector('.lemon');

  console.log(scenseButtonOne);
  console.log(deepcherry);
  scenseButtonOne.addEventListener('click',function(){
    peachs.classList.toggle('hidden')
    scenseButtonOne.classList.toggle('change')
  });
  scenseButtonTwo.addEventListener('click',()=>{
    peachs.classList.toggle('hidden')
    scenseButtonTwo.classList.toggle('change')
  });
  scenseButtonThree.addEventListener('click',()=>{
    juicy.classList.toggle('hidden')
    scenseButtonThree.classList.toggle('change')
  });
  scenseButtonFour.addEventListener('click',()=>{
    lemon.classList.toggle('hidden')
    scenseButtonFour.classList.toggle('change')
  });
  // 이벤트 타켓 event.target / event.currentTarget

//   스크롤하면 하단에 로고 이미지가 회전했으면 좋겠다.
  function rotateImage(){
    const circleText = document.querySelector('#circle-text img');
    console.dir(circleText);
    circleText.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    // 웹 브라우저에서 현재 화면의 스크롤 정보를 알아야 할 때 pageYOffset or scrollY : 스크롤 화면 수직 이동하는 픽셀수
    // 왜 따옴표를 저렇게 썻을까요...? 그리고 pageYOffset을 왜 2로 나누었을까요..?
    // 저렇게 걸쳐지게 따옴표를 하지 않으면 작동이 되지 않는데 왜그런걸까요..? 
  }
  window.addEventListener('scroll',rotateImage);

