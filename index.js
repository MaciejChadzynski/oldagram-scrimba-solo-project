const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const feedEl = document.querySelector(".feed");
posts.forEach((post) =>{
    const postHtml = `
        <div class="post">
            <div class="post-header">
                <img src="${post.avatar}" class="avatar">
                <div>
                    <p class="username">${post.name}</p>
                    <p class="location">${post.location}</p>
                </div>
            </div>

            <img src="${post.post}" class="post-img">

            <div class="post-actions">
                <img src="images/icon-heart.png" class="icon">
                <img src="images/icon-comment.png" class="icon">
                <img src="images/icon-dm.png" class="icon">
            </div>

            <p class="likes">${post.likes} likes</p>
            <p class="comment"><strong>${post.username}</strong> ${post.comment}</p>
        </div>
    `;

    feedEl.innerHTML += postHtml;
})