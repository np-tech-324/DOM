let users = [
  {
    "id": "70",
    "author": "Dorothy Lin",
    "width": 3011,
    "height": 2000,
    "url": "https://images.unsplash.com/photo-1735777192155-dec95124a585?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZHNvbWUlMjBndXlzfGVufDB8fDB8fHww",
    "download_url": "https://picsum.photos/id/70/3011/2000"
  },
  {
    "id": "71",
    "author": "Jon Eckert",
    "width": 5000,
    "height": 3333,
    "url": "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNvbWUlMjBndXlzfGVufDB8fDB8fHww",
    "download_url": "https://picsum.photos/id/71/5000/3333"
  },
  {
    "id": "72",
    "author": "Tyler Finck",
    "width": 3000,
    "height": 2000,
    "url": "https://plus.unsplash.com/premium_photo-1661454435346-0e90fb22b921?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFuZHNvbWUlMjBndXlzfGVufDB8fDB8fHww",
    "download_url": "https://picsum.photos/id/72/3000/2000"
  },
  {
    "id": "73",
    "author": "Jon Eckert",
    "width": 5000,
    "height": 3333,
    "url": "https://plus.unsplash.com/premium_photo-1658506780627-ee3ca1e5de6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhhbmRzb21lJTIwZ3V5c3xlbnwwfHwwfHx8MA%3D%3D",
    "download_url": "https://picsum.photos/id/73/5000/3333"
  },
  {
    "id": "74",
    "author": "Isaak Dury",
    "width": 4288,
    "height": 2848,
    "url": "https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bcGyGG1qPMyxl3rw4TCVwbJLZTPabFg4twsVFDy-ixs=",
    "download_url": "https://picsum.photos/id/74/4288/2848"
  },
  {
    "id": "75",
    "author": "Jassy Onyae",
    "width": 1999,
    "height": 2998,
    "url": "https://media.istockphoto.com/id/1359005680/photo/young-man-stock-phooto.webp?a=1&b=1&s=612x612&w=0&k=20&c=QE5yPljiwU4uZRgRCNs9cSJxUsV7jiHCPppuMyLWfm0=",
    "download_url": "https://picsum.photos/id/75/1999/2998"
  },
  {
    "id": "76",
    "author": "Alexander Shustov",
    "width": 4912,
    "height": 3264,
    "url": "https://media.istockphoto.com/id/1134255601/photo/handsome-hispanic-man-wearing-casual-t-shirt-at-home-smiling-in-love-showing-heart-symbol-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=HZOhJl3eMSnppAB61x_q2xQclNQ7e6pda0jjohCmZ-w=",
    "download_url": "https://picsum.photos/id/76/4912/3264"
  },
  {
    "id": "77",
    "author": "May Pamintuan",
    "width": 1631,
    "height": 1102,
    "url": "https://plus.unsplash.com/premium_photo-1723759388470-73bdd082de5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbmRzb21lJTIwZ3V5c3xlbnwwfHwwfHx8MA%3D%3D",
    "download_url": "https://picsum.photos/id/77/1631/1102"
  },
  {
    "id": "78",
    "author": "Paul Evans",
    "width": 1584,
    "height": 2376,
    "url": "https://images.unsplash.com/photo-1695485121912-25c7ea05119c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbmRzb21lJTIwZ3V5c3xlbnwwfHwwfHx8MA%3D%3D",
    "download_url": "https://picsum.photos/id/78/1584/2376"
  },
  {
    "id": "79",
    "author": "Dorothy Lin",
    "width": 2000,
    "height": 3011,
    "url": "https://images.unsplash.com/photo-1579038773867-044c48829161?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbmRzb21lJTIwZ3V5c3xlbnwwfHwwfHx8MA%3D%3DM",
    "download_url": "https://picsum.photos/id/79/2000/3011"
  }
]

let sum = ''
users.forEach(function(elem,idx){
    sum += `<div class="card">
            <img src="${elem.url}" alt="">
            <h1>${elem.author}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laboriosam totam vero.</p>
        </div>`
})

var main = document.querySelector("main")

main.innerHTML = sum   
