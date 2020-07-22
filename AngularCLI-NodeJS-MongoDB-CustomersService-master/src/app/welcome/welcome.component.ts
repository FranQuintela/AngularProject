import { Component, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // TRANSITIONS
  openLeft() {
    console.log("left To Center");
    console.log("Center to left");
    document.getElementById("landing").style.transform = "translate(-200vw)";
    this.leftToCenter();
  }
  openRight() {
    console.log("right to center");
    console.log("center to right");
    document.getElementById("landing").style.transform = "translate(200vw)";
    this.rightToCenter();
  }
  openBottom() {
    console.log("bottom to center");
    console.log("center to bottom");
    document.getElementById("landing").style.transform = "translateY(200vw)";
    this.bottomToCenter();
  }
  openCenterFromLeft() {
    console.log("center to center");
    console.log("left to left");
    document.getElementById("landing").style.transform = "translate(0)";
    this.leftToLeft();
  }
  openRightFromLeft() {
    console.log("left to left");
    console.log("right to center");
    this.leftToLeft();
    this.rightToCenter();
  }
  openBottomFromLeft() {
    console.log("left to left");
    console.log("bottom to center");
    this.leftToLeft();
    this.bottomToCenter();
  }
  openCenterFromRight() {
    console.log("center to center");
    console.log("right to right");
    document.getElementById("landing").style.transform = "translate(0)";
    this.rightToRight();
  }
  openLeftFromRight() {
    console.log("left to center");
    console.log("right to right");
    this.rightToRight();
    this.leftToCenter();
  }
  openBottomFromRight() {
    console.log("bottom to center");
    console.log("right to right");
    this.rightToRight();
    this.bottomToCenter();
  }

  openCenterFromBottom() {
    console.log("bottom to bottom");
    console.log("center to center");
    document.getElementById("landing").style.transform = "translateY(0)";
    this.bottomToBottom();
  }
  openLeftFromBottom() {
    console.log("bottom to bottom");
    console.log("left to center");
    // document.getElementById("landing").style.transform = "translateY(0)";
    this.bottomToBottom();
    this.leftToCenter();
  }
  openRightFromBottom() {
    console.log("bottom to bottom");
    console.log("right to center");
    // document.getElementById("landing").style.transform = "translateY(0)";
    this.bottomToBottom();
    this.rightToCenter();
  }
  // DIRECTIONS

  leftToCenter() {
    document.getElementById("dimmed-bg").style.visibility = "visible";
    document.getElementById("dimmed-bg").style.transform = "translate(0)";
    document.getElementById("above-fold").style.opacity = "1";
    document.getElementById("left-site").style.visibility = "visible";
    document.getElementById("left-site").style.overflow = "visible";
    document.getElementById("left-site").style.maxHeight = "auto";
    document.getElementById("left-site").style.overflow = "visible";
    document.getElementById("register-side-bar").style.transform =
      "translate(0)";
  }
  leftToLeft() {
    document.getElementById("dimmed-bg").style.transform = "translateX(-120vw)";
    document.getElementById("dimmed-bg").style.visibility = "hidden";
    document.getElementById("above-fold").style.opacity = "0";
    document.getElementById("left-site").style.visibility = "hidden";
    document.getElementById("left-site").style.overflow = "hidden";
    document.getElementById("left-site").style.maxHeight = "auto";
    document.getElementById("left-site").style.overflow = "hidden";
    document.getElementById("register-side-bar").style.transform =
      "translateX(200px)";
  }
  rightToCenter() {
    document.getElementById("dimmed-bg-right").style.visibility = "visible";
    document.getElementById("dimmed-bg-right").style.transform = "translate(0)";
    document.getElementById("above-fold-right").style.opacity = "1";
    document.getElementById("right-site").style.visibility = "visible";
    document.getElementById("right-site").style.overflow = "visible";
    document.getElementById("right-site").style.maxHeight = "auto";
    document.getElementById("right-site").style.overflow = "visible";
    document.getElementById("register-side-bar-right").style.transform =
      "translate(0)";
  }
  bottomToCenter() {
    document.getElementById("dimmed-bg-right").style.transform =
      "translateX(120vw)";
    document.getElementById("dimmed-bg-bottom").style.visibility = "visible";
    document.getElementById("dimmed-bg-bottom").style.transform =
      "translate(0)";
    document.getElementById("above-fold-bottom").style.opacity = "1";
    document.getElementById("bottom-site").style.visibility = "visible";
    document.getElementById("bottom-site").style.overflow = "visible";
    document.getElementById("bottom-site").style.maxHeight = "auto";
    document.getElementById("bottom-site").style.overflow = "visible";
    document.getElementById("register-side-bar-bottom").style.transform =
      "translate(0)";
  }
  bottomToBottom() {
    document.getElementById("dimmed-bg-bottom").style.transform =
      "translateY(120vw)";
    document.getElementById("dimmed-bg-bottom").style.visibility = "hidden";
    document.getElementById("above-fold-bottom").style.opacity = "0";
    document.getElementById("bottom-site").style.visibility = "hidden";
    document.getElementById("bottom-site").style.overflow = "hidden";
    document.getElementById("bottom-site").style.maxHeight = "auto";
    document.getElementById("bottom-site").style.overflow = "hidden";
    document.getElementById("register-side-bar-bottom").style.transform =
      "translateY(-200px)";
  }
  rightToRight() {
    document.getElementById("dimmed-bg-right").style.transform =
      "translateX(120vw)";
    document.getElementById("dimmed-bg-right").style.visibility = "hidden";
    document.getElementById("above-fold-right").style.opacity = "0";
    document.getElementById("right-site").style.visibility = "hidden";
    document.getElementById("right-site").style.overflow = "hidden";
    document.getElementById("right-site").style.maxHeight = "auto";
    document.getElementById("right-site").style.overflow = "hidden";
    document.getElementById("register-side-bar-right").style.transform =
      "translateX(-200px)";
  }
}
