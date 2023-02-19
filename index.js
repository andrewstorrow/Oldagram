import { posts } from './data.js'

//Constructs and returns the html of the post feed as a string
function getFeedHtml() {
    let feedHtml = ``;

    //Construct post feed html
    for (const post of posts) {

        //Construct comments feed html
        let commentsHtml = ``;
        for (const comment of post.comments) {
            commentsHtml += `
<div class="comment">
    <h2>${comment.username}</h2>
    ${comment.comment}
</div>
            `;
        }

        feedHtml += `
<section>
    <div class="post-header">
        <img src="${post.avatar}" alt="post author avatar" class="author-avatar">
        <div class="post-author">
            <h2>${post.name}</h2>
            ${post.location}
        </div>
    </div>
    <img src="${post.post}" alt="post image" class="post-img">
    <div class="icons">
        <a href="#"><img src="./images/icon-heart.png" alt="heart icon"></a>
        <a href="#"><img src="./images/icon-comment.png" alt="comment icon"></a>
        <a href="#"><img src="./images/icon-dm.png" alt="direct message icon"></a>
    </div>
    <h2 class="likes">${post.likes} likes</h2>
    <div class="comments">
        ${commentsHtml}
    </div>
</section>
        `;
    }

    return feedHtml;
}

// Render the post feed
function render() {
    document.getElementById('feed').innerHTML = getFeedHtml();
}

render();