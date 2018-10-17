import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-takephoto',
  templateUrl: './takephoto.component.html',
  styleUrls: ['./takephoto.component.css']
})
export class TakephotoComponent implements OnInit {

  constructor() { }
  @ViewChild('videoElement') videoElement: any;
  video: any;
  @ViewChild('myCanvas') canvasElement: any;
  canvas: any;
  height = 0;
  width = 320;
  imgdata = null;
  isPlaying = false;
  displayControls = true;

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
    this.canvas = this.canvasElement.nativeElement;
    this.start();

    this.height = this.video.videoHeight / (this.video.videoWidth / this.width);

    if (isNaN(this.height)) {
      this.height = this.width / (4 / 3);
    }
    this.clearphoto();

  }


  takePicture() {
    console.log('ok');
    const context = this.canvas.getContext('2d');
    if (this.width && this.height) {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      context.drawImage(this.video, 0, 0, this.width, this.height);
      const data = this.canvas.toDataURL('image/png');
      this.imgdata = data;
    } else {
      this.clearphoto();
    }

  }

  clearphoto() {
    const context = this.canvas.getContext('2d');
    context.fillStyle = '#AAA';
    context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    const data = this.canvas.toDataURL('image/png');
    this.imgdata = data;

  }

  sendPicture() {
    console.log('ok');
  }


  start() {
    this.initCamera({ video: true, audio: false });
  }

  pause() {
    this.video.pause();
  }

  toggleControls() {
    this.video.controls = this.displayControls;
    this.displayControls = !this.displayControls;
  }

  resume() {
    this.video.play();
  }

  sound() {
    this.initCamera({ video: true, audio: true });
  }

  initCamera(config: any) {
    const browser = <any>navigator;
    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      this.video.src = window.URL.createObjectURL(stream);
      this.video.play();
    });
  }
}
