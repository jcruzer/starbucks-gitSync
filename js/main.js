const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// search 아이콘 눌러도 포커스가 안되는거 해결
// 클릭 시 html의 input요소가 포커스 되게 만드는함수
// 익명함수로 만듬 focus는 기본함수
searchEl.addEventListener('click', function(){
  // Logic..
  searchInputEl.focus();
});

// input + icon이 포커스되면 클래스(focused)랑 html속성 추가
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
  // [setAttribute]html 속성 추가하는 함수
});

// input + icon이 포커스해제(blur)되면 클래스(focused)랑 html속성 제거
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  // [setAttribute]html 속성 추가하는 함수
});
