// CONSTANTS

// players

const PLAYER1 =
      {
        img: null,
        src: 'assets/alien.png',
        size: 180, // in pixels
        scale: 0.5, // 0 to "infinite", 1 = 100%
        velocity:
        {
          x: 0,
          y: 0
        }, 
        restitution: 0.3, 
        gravity: 0.35
        // a higher number will make the sprite fall faster
      }

const PLAYER2 =
      {
        img: null,
        src: 'assets/robot-face.png',
        size: 180, // in pixels
        scale: 0.5, // 0 to "infinite", 1 = 100%
        velocity:
        {
          x: 0,
          y: 0
        }, 
        restitution: 0.3, 
        gravity: 0.35
        // a higher number will make the sprite fall faster
      }

const PLAYER3 =
      {
        img: null,
        src: 'assets/cowboy.png',
        size: 180, // in pixels
        scale: 0.5, // 0 to "infinite", 1 = 100%
        velocity:
        {
          x: 0,
          y: 0
        }, 
        restitution: 0.3, 
        gravity: 0.35
        // a higher number will make the sprite fall faster
      }

// bars
const BAR1 =
      {
        img: null,
        src: 'assets/minus.png',
        size: 240, // in pixels
        scale: 0.5, // 0 to "infinite", 1 = 100%
        velocity:
        {
          x: 0,
          y: 1 // change this to make the sprite fall faster / slower
        }
      }

const BAR2 =
      {
        img: null,
        src: 'assets/minus.png',
        size: 240, // in pixels
        scale: 0.5, // 0 to "infinite", 1 = 100%
        velocity:
        {
          x: 0,
          y: 1 // change this to make the sprite fall faster / slower
        }
      }

const BAR3 =
      {
        img: null,
        src: 'assets/minus.png',
        size: 240, // in pixels
        scale: 0.5, // 0 to "infinite", 1 = 100%
        velocity:
        {
          x: 0,
          y: 1 // change this to make the sprite fall faster / slower
        }
      }

const BAR4 =
      {
        img: null,
        src: 'assets/minus.png',
        size: 240, // in pixels
        scale: 0.5, // 0 to "infinite", 1 = 100%
        velocity:
        {
          x: 0,
          y: 1 // change this to make the sprite fall faster / slower
        }
      }

const FLOPPY1 =
      { 
        img: null,
        src: 'assets/floppy-disk.png',
        size: 80,
        scale: 0.5,
        velocity:
        {
          x: 0,
          y: 0
        }
      }

const FLOPPY2 =
      { 
        img: null,
        src: 'assets/floppy-disk.png',
        size: 80,
        scale: 0.5,
        velocity:
        {
          x: 0,
          y: 0
        }
      }

const FLOPPY3 =
      { 
        img: null,
        src: 'assets/floppy-disk.png',
        size: 80,
        scale: 0.5,
        velocity:
        {
          x: 0,
          y: 0
        }
      }

const FLOPPY4 =
      { 
        img: null,
        src: 'assets/floppy-disk.png',
        size: 80,
        scale: 0.5,
        velocity:
        {
          x: 0,
          y: 0
        }
      }


//  variables

var sprite = null

//  player score
var score1 = 100
var score2 = 100
var score3 = 100

var p1s3_img, p1s2_img, p1s1_img, p1s0_img;

var p2s3_img, p2s2_img, p2s1_img, p2s0_img;

var p3s3_img, p3s2_img, p3s1_img, p3s0_img;

var p1icon, p2icon, p3icon, skull;