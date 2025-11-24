const reels = [
  {
    userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    userName: "john_doe",
    video: "./video/video1.mp4",
    description: "Enjoying a wild ride on the KTM Duke 🔥",
    isLike: false,
    isFollow: false,
    likeCount: 1250,
    commentCount: 245,
    sendCount: 78
  },
  {
    userImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600",
    userName: "alex_bikes",
    video: "./video/video2.mp4",
    description: "Night ride hits different ✨🖤",
    isLike: true,
    isFollow: true,
    likeCount: 3120,
    commentCount: 510,
    sendCount: 142
  },
  {
    userImage: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=600",
    userName: "speedster",
    video: "./video/video3.mp4",
    description: "Full throttle no fear ⚡",
    isLike: false,
    isFollow: true,
    likeCount: 980,
    commentCount: 120,
    sendCount: 33
  },
  {
    userImage: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600",
    userName: "urban_rider",
    video: "./video/video4.mp4",
    description: "City lights and midnight rides 💫",
    isLike: true,
    isFollow: false,
    likeCount: 1470,
    commentCount: 281,
    sendCount: 62
  },
  {
    userImage: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600",
    userName: "speedjunkie",
    video: "./video/video5.mp4",
    description: "Ride fast. Live young. 🏍️",
    isLike: false,
    isFollow: true,
    likeCount: 2560,
    commentCount: 391,
    sendCount: 105
  },
  {
    userImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
    userName: "rider_x",
    video: "./video/video6.mp4",
    description: "The louder the exhaust, the better the feeling 🔥",
    isLike: true,
    isFollow: true,
    likeCount: 3770,
    commentCount: 690,
    sendCount: 214
  },
  {
    userImage: "https://images.unsplash.com/photo-1546456073-6712f79251bb?w=600",
    userName: "night_ghost",
    video: "./video/video7.mp4",
    description: "Black bike + black hoodie = perfection 😈",
    isLike: false,
    isFollow: false,
    likeCount: 670,
    commentCount: 74,
    sendCount: 19
  },
  {
    userImage: "https://images.unsplash.com/photo-1531256379411-92780be1f7c4?w=600",
    userName: "vlogger_r",
    video: "./video/video1.mp4",
    description: "POV: First ride after college 🎥",
    isLike: true,
    isFollow: true,
    likeCount: 4120,
    commentCount: 908,
    sendCount: 321
  },
  {
    userImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
    userName: "retro_rider",
    video: "./video/video2.mp4",
    description: "Helmet on, worries gone 🛡️",
    isLike: false,
    isFollow: true,
    likeCount: 1970,
    commentCount: 309,
    sendCount: 87
  },
  {
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    userName: "moto_v",
    video: "./video/video3.mp4",
    description: "Born to ride 🧡",
    isLike: true,
    isFollow: false,
    likeCount: 1580,
    commentCount: 223,
    sendCount: 51
  },
  {
    userImage: "https://images.unsplash.com/photo-1542144612-1a51f544decc?w=600",
    userName: "crashless",
    video: "./video/video4.mp4",
    description: "No brakes, no limits 🚀",
    isLike: false,
    isFollow: true,
    likeCount: 2320,
    commentCount: 410,
    sendCount: 118
  },
  {
    userImage: "https://images.unsplash.com/photo-1619895862022-09114b41f16c?w=600",
    userName: "beast_mode",
    video: "./video/video5.mp4",
    description: "Ride like a beast, think like a king 👑",
    isLike: true,
    isFollow: true,
    likeCount: 5200,
    commentCount: 980,
    sendCount: 412
  },
  {
    userImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    userName: "motorhythm",
    video: "./video/video6.mp4",
    description: "Life moves fast, match the rhythm 🌀",
    isLike: false,
    isFollow: false,
    likeCount: 870,
    commentCount: 111,
    sendCount: 28
  },
  {
    userImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600",
    userName: "valkyrie",
    video: "./video/video7.mp4",
    description: "Sunset rides hit the soul differently 🌇",
    isLike: true,
    isFollow: false,
    likeCount: 3020,
    commentCount: 566,
    sendCount: 147
  },
  {
    userImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600",
    userName: "stormrider",
    video: "./video/video1.mp4",
    description: "Thunder in the streets ⚡",
    isLike: false,
    isFollow: true,
    likeCount: 1180,
    commentCount: 208,
    sendCount: 55
  },
  {
    userImage: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600",
    userName: "kingsoul",
    video: "./video/video2.mp4",
    description: "No destination, just passion ❤️",
    isLike: true,
    isFollow: true,
    likeCount: 4620,
    commentCount: 792,
    sendCount: 263
  },
  {
    userImage: "https://images.unsplash.com/photo-1624561172888-ac93c696e10a?w=600",
    userName: "wild_racer",
    video: "./video/video3.mp4",
    description: "Born to be wild 🐺",
    isLike: false,
    isFollow: false,
    likeCount: 980,
    commentCount: 177,
    sendCount: 43
  },
  {
    userImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    userName: "fearless",
    video: "./video/video4.mp4",
    description: "If you’re scared, ride faster 💨",
    isLike: true,
    isFollow: false,
    likeCount: 2610,
    commentCount: 432,
    sendCount: 131
  },
  {
    userImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
    userName: "blaze",
    video: "./video/video5.mp4",
    description: "Fire in my veins, speed in my blood 🔥",
    isLike: false,
    isFollow: true,
    likeCount: 3490,
    commentCount: 640,
    sendCount: 179
  },
  {
    userImage: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600",
    userName: "silent_shadow",
    video: "./video/video6.mp4",
    description: "Ride alone, ride fearless 🌌",
    isLike: true,
    isFollow: true,
    likeCount: 5780,
    commentCount: 1204,
    sendCount: 505
  }
];


let sum = ''

reels.forEach(function(elem){

    // console.log(elem.video);
    
    sum += `<div class="reel">
                <video autoplay loop muted src=${elem.video}></video>
                <div class="bottom">
                    <div class="bottom-1">
                        <img src=${elem.userImage} alt="">
                        <h4>${elem.userName}</h4>
                        <button>${elem.isFollow === true ? "Follow" : "unFollow"}</button>
                    </div>
                    <h5>${elem.description}

                    </h5>
                </div>
                <div class="icon">
                    <div class="like-icon">
                        <h4><i class="${elem.isLike ? 'ri-heart-3-fill liked' : 'ri-heart-3-line'}"></i></h4>
                        <h6>${elem.likeCount}</h6>
                    </div>
                    <div class="comment-icon">
                        <h4><i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                    </div>
                    <div class="send-icon">
                        <h4><i class="ri-send-plane-fill"></i></i></h4>
                        <h6>${elem.sendCount}</h6>
                    </div>
                    <div class="dot-icon">
                        <h4><i class="ri-more-2-fill"></i></h4>
                    </div>
                </div>
            </div>`
 })

var reel = document.querySelector('.all-reel')

reel.innerHTML = sum