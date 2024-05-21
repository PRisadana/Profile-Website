// $(document).ready(function(){
//     let hiddenShow = $('button')[0]
//     let hiddenShow2 = $('button')[1]
//     let hiddenShow3 = $('button')[2]
//     let hiddenShow4 = $('#fotoportofolio')
//     let hiddenShow5 = $('#videoportofolio')
//     let hiddenShow6 = $('#desainportofolio')

//     // var hiddenShowTrue = 0
//     console.log(hiddenShow)

//     hiddenShow.on('click', function(){
//         if(hiddenShow){
//             hiddenShow4.show(1000)
//             hiddenShow5.hide(1000)
//             hiddenShow6.hide(1000)
//         }else if(hiddenShow2){
//             hiddenShow4.hide(1000)
//             hiddenShow5.show(1000)
//             hiddenShow6.hide(1000)
//         }else if(hiddenShow3){
//             hiddenShow4.hide(1000)
//             hiddenShow5.hide(1000)
//             hiddenShow6.show(1000)
//         }else{
//             hiddenShow4.show(1000)
//             hiddenShow5.hide(1000)
//             hiddenShow6.hide(1000)
//         }
//     })

// })

// let btn1 = document.querySelectorAll('button')[0]
// let btn2 = document.querySelectorAll('button')[1]
// let btn3 = document.querySelectorAll('button')[2]

    // if(hideShow1.style.display === "block" && hideShow2.style.display === "none" && hideShow3.style.display === "none"){
    //     hideShow2.style.display = "block"
    //     hideShow3.style.display = "none"
    //     hideShow1.style.display = "none"
    // }else if(hideShow2.style.display === "block" && hideShow3.style.display === "none" && hideShow1.style.display === "none"){
    //     hideShow2.style.display = "none"
    //     hideShow1.style.display = "none"
    //     hideShow3.style.display = "block"
    // }else{
    //     hideShow1.style.display = "block"
    //     hideShow2.style.display = "none"
    //     hideShow3.style.display = "none"
    // }
    // let display0 = document.querySelector('.portofolio2')

    // function display1 (){
    //     hideShow1.style.display = "block"
    //     hideShow2.style.display = "none"
    //     hideShow3.style.display = "none"
    // }
    // function display2 (){
    //     hideShow1.style.display = "none"
    //     hideShow2.style.display = "block"
    //     hideShow3.style.display = "none"
    // }function display3 (){
    //     hideShow1.style.display = "none"
    //     hideShow2.style.display = "none"
    //     hideShow3.style.display = "block"
    // }
    
    // function hideShow(){
        // if(hideShow1.style.display === "block"){
        //     hideShow2.style.display = "none"
        //     hideShow3.style.display = "none"
        // }else if(hideShow2.style.display === "block"){
        //     hideShow3.style.display = "none"
        //     hideShow1.style.display = "none"
        // }else if(hideShow3.style.display === "block"){
        //         hideShow2.style.display = "none"
        //         hideShow1.style.display = "none"
        // }
    // }

// let display = [0, 1, 2]

// console.log(btn1)
// console.log(hideShow1)
// console.log(hideShow2)
// console.log(hideShow3)

function hideShow(){
    let btn0 = document.querySelectorAll('button')[0]
    let btn1 = document.querySelectorAll('button')[1]
    let btn2 = document.querySelectorAll('button')[2]

    let btn3 = document.querySelectorAll('button')[9]
    let btn4 = document.querySelectorAll('button')[10]
    let btn5 = document.querySelectorAll('button')[11]

    let btn6 = document.querySelectorAll('button')[3]
    let btn7 = document.querySelectorAll('button')[4]
    let btn8 = document.querySelectorAll('button')[5]

    let btn9 = document.querySelectorAll('button')[6]
    let btn10 = document.querySelectorAll('button')[7]
    let btn11 = document.querySelectorAll('button')[8]
    let hideShow0 = document.querySelector('#fotoportofolio')
    let hideShow1 = document.querySelector('#videoportofolio')
    let hideShow2 = document.querySelector('#desainportofolio')

    let hideShow3 = document.querySelector('#prestasifoto')
    let hideShow4 = document.querySelector('#prestasivideo')
    let hideShow5 = document.querySelector('#prestasidesain')

    let hideShow6 = document.querySelector('.img1')
    let hideShow7 = document.querySelector('.img2')
    let hideShow8 = document.querySelector('.img3')

    let hideshow9 = document.querySelector('.img4')
    let hideshow10 = document.querySelector('.img5')
    let hideshow11 = document.querySelector('.img6')


    btn0.addEventListener('click', function(){
        hideShow0.style.display = "block"
        hideShow1.style.display = "none"
        hideShow2.style.display = "none"
    })
    btn1.addEventListener('click', function(){
        hideShow0.style.display = "none"
        hideShow1.style.display = "block"
        hideShow2.style.display = "none"
    })
    btn2.addEventListener('click', function(){
        hideShow0.style.display = "none"
        hideShow1.style.display = "none"
        hideShow2.style.display = "block"
    })
    btn3.addEventListener('click', function(){
        hideShow3.style.display = "block"
        hideShow4.style.display = "none"
        hideShow5.style.display = "none"
    })
    btn4.addEventListener('click', function(){
        hideShow3.style.display = "none"
        hideShow4.style.display = "block"
        hideShow5.style.display = "none"
    })
    btn5.addEventListener('click', function(){
        hideShow3.style.display = "none"
        hideShow4.style.display = "none"
        hideShow5.style.display = "block"
    })

    btn6.addEventListener('click', function(){
        hideShow6.style.display = "block"
        hideShow7.style.display = "none"
        hideShow8.style.display = "none"
    })

    btn7.addEventListener('click', function(){
        hideShow6.style.display = "none"
        hideShow7.style.display = "block"
        hideShow8.style.display = "none"
    })

    btn8.addEventListener('click', function(){
        hideShow6.style.display = "none"
        hideShow7.style.display = "none"
        hideShow8.style.display = "block"
    })

    btn9.addEventListener('click', function(){
        hideshow9.style.display = "block"
        hideshow10.style.display = "none"
        hideshow11.style.display = "none"
    })

    btn10.addEventListener('click', function(){
        hideshow9.style.display = "none"
        hideshow10.style.display = "block"
        hideshow11.style.display = "none"
    })

    btn11.addEventListener('click', function(){
        hideshow9.style.display = "none"
        hideshow10.style.display = "none"
        hideshow11.style.display = "block"
    })
}

window.addEventListener('scroll', function(){
let navbar = document.querySelector('#navbar')
navbar.classList.toggle("sticky", scrollY > 0)
})


// function changeColor(){
//     let btn6 = document.querySelector('.gantiwarna')
//     let btn7 = document.querySelector('.gantiwarna2')
//     let navbar = document.querySelector('.navbar')
//     let footer = document.querySelector('#kontak')

//     btn6.addEventListener('click', function(){
//         navbar.style.backgroundColor = "#F67845"
//         footer.style.backgroundColor = "#F67845"
//     })
// }







