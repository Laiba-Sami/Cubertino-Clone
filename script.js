var crsr = document.querySelector("#cursor")


document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"
})
document.addEventListener("DOMContentLoaded", function() {
    let felems = document.querySelectorAll(".felem");
  
    felems.forEach(felem => {
      let video = felem.querySelector("video");
  
      felem.addEventListener("mouseenter", function() {
        video.play();
      });
  
      felem.addEventListener("mouseleave", function() {
        video.pause();
      });
    });
  });

// gsap.to(".felem",{
//     scrollTrigger:{
//         trigger:"#featuredbox",
//         pin:true,
//         // markers: true,
//         start: "top top",
//         end:"bottom bottom",
//         endTrigger:".last",
//         scrub:1
//     },
//     y: "-300%",
//     ease: Power1
// })
// document.addEventListener("DOMContentLoaded", function() {
//     let sections = document.querySelectorAll(".felem");
//     let videos = document.querySelectorAll("#fright video");
  
//     sections.forEach(function(section, index) {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top center", // Adjust as needed
//         end: "bottom center", // Adjust as needed
//         onEnter: () => {
//           // Hide all videos
//           videos.forEach(video => video.style.display = "none");
//           // Show the current video
//           if (videos[index]) {
//             videos[index].style.display = "block";
//             videos[index].src = videos[index].src; // Force reload the video
//             videos[index].play();
//           }
//         },
//         onLeaveBack: () => {
//           // Hide the current video when leaving back
//           if (videos[index]) {
//             videos[index].style.display = "none";
//           }
//         }
//       });
//     });
//   });
  