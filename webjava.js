const arr = ["https://qph.cf2.quoracdn.net/main-qimg-85b7c27a1288acdfabee396c0d5752ea-pjlq","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3CDQV2ZI_w4-95iwgZJwz1hKyWlriM2aW5A&usqp=CAU", "https://c8.alamy.com/comp/DK72CY/gwen-stefanis-son-zuma-wearing-a-spider-man-fancy-dress-costume-is-DK72CY.jpg"]
function changeImg(index){
let image = document.getElementById("image")
// console.log(image.src)
image.src= arr[index]
}