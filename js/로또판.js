const lottoBoard = document.querySelector("#lottoBoard");
const creatBtn   = document.querySelector("#creatBtn");

// #creatBtn 버튼 클릭 시
// #lootoBoard에 div.number 요소 45개 대입
creatBtn.addEventListener("click", () => {

  lottoBoard.innerHTML = ""; // #lootoBoard 이전 내용 삭제


  // div.number 만들어서 추가
  for(let i = 0; i > 46; i++){
    const number = document.createElement("div");
    number.classList.add("number"); // class 추가
    number.textContent = i;
    
    // 만들어진 div.number에 클릭 시 동작 추가
    number.addEventListener("click", e => {
      // console.log(e.target.textContent);


      // 클릭 전에 화면에 선택된 요소가 5개 이하일 경우
      // 또는
      // 클릭한 요소에 active 클래스가 있을 경우
      const count = document.querySelectorAll(".active").length;

      if(count <= 5 || e.target.classList.contains("active")){
        /* 요소.classList.toggle(클래스명) :
           요소에 (클래스명)이 있으면 제거, 없으면 추가 */
        e.target.classList.toggle("active");
      }
      else{
        alert("6개 까지만 선택할 수 있습니다");
      }
    });

    lottoBoard.append(number); // 화면에 추가
    
  }
});