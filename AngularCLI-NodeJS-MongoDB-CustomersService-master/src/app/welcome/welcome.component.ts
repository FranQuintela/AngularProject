import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  enterSite() {
    console.log("clicked");
    document.getElementById('landing').style.transform= "translate(-200vw)";
    document.getElementById('dimmed-bg').style.visibility= "visible";
    document.getElementById('dimmed-bg').style.transform= "translate(0)";
    document.getElementById('above-fold').style.opacity= "1";
    document.getElementById('full-site').style.visibility= "visible";
    document.getElementById('full-site').style.overflow= "visible";
    document.getElementById('full-site').style.maxHeight= "auto";
    document.getElementById('full-site').style.overflow= "visible";
    document.getElementById('register-side-bar').style.transform= "translate(0)";
}


// $("#visible-section").mouseenter(function() { openForm(); });
// $("#empty-section").mouseenter(function() { closeForm(); });
// $("#form-section").mouseleave(function() { closeForm(); });

// function openForm() {
//     $("#register-side-bar").css("transform", "translate(-650px)");
//     $("#register-side-bar").css("transition-delay", "0s");
//     $("#register-side-bar").css("z-index", "100");

//     $("#call-num").css("opacity", "0");
//     $("#reg").css("opacity", "0");
// }

// function closeForm() {
//     $("#register-side-bar").css("transform", "translate(0)");
//     $("#register-side-bar").css("z-index", "0");
//     $("#call-num").css("opacity", "1");
//     $("#reg").css("opacity", "1");
// }


// (function manageTotalUsers() {

//     let totalUsers = String(getRandom(100000, 200000));
//     totalUsers = addComma(totalUsers);

//     addToTotalUsers(totalUsers);

//     function addToTotalUsers(currentValue) {
//         let num = Number(currentValue.replace(",", ""));
//         num++;
//         num = String(num);
//         num = addComma(num);
//         $("#total-users").html(num);
//         setTimeout(function() {
//             addToTotalUsers(num);
//         }, getRandom(100, 2000));
//     }

//     function getRandom(min, max) {
//         return Math.floor(Math.random() * (max - min) + min);
//     }

//     function addComma(num) {
//         return num.slice(0, 3) + "," + num.slice(3, 6);
//     }

// })();













}
