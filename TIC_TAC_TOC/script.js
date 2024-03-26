console.log("welcome to tic tac toe");
let music = new Audio("music.mp3");
let musicturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X"
let overgame = false;
let reset = document.getElementById('Reset');
let playerXscore = 0;
let playerOscore = 0;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X" ? "0" : "X"
}

// function to check for a win
// const checkwin = ()=>{
//     let boxtexts = document.getElementsByClassName('boxtext');
//     let win = [
//         [1,2,3],
//         [4,5,6],
//         [7,8,9],
//         [1,4,7],
//         [2,5,8],
//         [3,6,9],
//         [1,5,9],
//         [3,5,7],
//     ]
    // win.forEach(e => {
    //     if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText)) {
            
    //     }
    // })

//     win.forEach(e =>{
//         if (boxtexts[e[0]] && boxtexts[e[1]] && boxtexts[e[2]] && (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== ""))
//         {
//             document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
//             overgame = true
//         }
//      })


//     // // win.forEach(e => {
//     // //     if (boxtexts[e[0]] && boxtexts[e[1]] && boxtexts[e[2]] && 
//     // //         (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && 
//     // //         (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && 
//     // //         (boxtexts[e[0]].innerText !== ""))
//     // //         // document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
//     // //     {
//     // //         document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
//     // //         overgame = true;
//     // //     }
//     // });    
// }

// const checkwin = () => {
//     let boxtexts = document.getElementsByClassName('boxtext');
//     let win = [
//         [1, 2, 3, 5, 5, 0],
//         [4, 5, 6, 5, 15, 0],
//         [7, 8, 9, 5, 25, 0],
//         [1, 4, 7, -5, 15, 90 ],
//         [2, 5, 8, 5, 15, 90],
//         [3, 6, 9, 15, 15, 90],
//         [1, 5, 9, 5, 15, 45],
//         [3, 5, 7, 5, 15, 135],
//     ];

//     win.forEach(e => {
//         let [a, b, c] = e;
//         if (boxtexts[a - 1].innerText !== "" && boxtexts[a - 1].innerText === boxtexts[b - 1].innerText && boxtexts[b - 1].innerText === boxtexts[c - 1].innerText) {
//             document.querySelector('.info').innerText = boxtexts[a - 1].innerText + " Won!";
//             overgame = true;
//             document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
//             document.querySelector('.line').style.width = "20vw"
//             document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
//             if  (boxtexts[a-1].innertext === "X"){
//                 playerXscore++;
//             }else{
//                 playerOscore++;
//             }
//                 document.getElementById('playerXscore').innerText = playerXscore;
//                 document.getElementById('playerOscore').innerText = playerOscore
//         }
//     });
// };

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let win = [
        [1, 2, 3, 5, 5, 0],
        [4, 5, 6, 5, 15, 0],
        [7, 8, 9, 5, 25, 0],
        [1, 4, 7, -5, 15, 90],
        [2, 5, 8, 5, 15, 90],
        [3, 6, 9, 15, 15, 90],
        [1, 5, 9, 5, 15, 45],
        [3, 5, 7, 5, 15, 135],
    ];

    win.forEach(e => {
        let [a, b, c] = e;
        if (boxtexts[a - 1].innerText !== "" && boxtexts[a - 1].innerText === boxtexts[b - 1].innerText && boxtexts[b - 1].innerText === boxtexts[c - 1].innerText) {
            document.querySelector('.info').innerText = boxtexts[a - 1].innerText + " Won!";
            overgame = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            if (boxtexts[a - 1].innerText === "X") {
                playerXscore++;
            } else {
                playerOscore++;
            }
            document.getElementById('playerXScore').innerText = playerXscore;
            document.getElementById('playerOScore').innerText = playerOscore;
        }
    });
};

// game draw

const checkdraw = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let draw = true;

    Array.from(boxtext).forEach(box =>{
        if(box.innerText === ""){
            draw = false
        }
    })
    if (draw && !overgame) {
        document.querySelector('.info').innerText = "It's a Draw!";
        overgame = true;
    }
}

// game logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            musicturn.play();
            checkWin();
            checkdraw()
            if(!overgame){
                document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;
            }
        }
    })
});


// add on click event to reset button
reset.addEventListener('click' , (e)=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    overgame = false
    document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.line').style.width = "0vw"
    // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
});