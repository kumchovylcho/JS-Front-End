function attachEvents() {
    const allPosts = document.querySelector("#posts")

    const postsUrl = "http://localhost:3030/jsonstore/blog/posts"
    const commentsUrl = "http://localhost:3030/jsonstore/blog/comments"

    const [loadBtn, viewBtn] = document.querySelectorAll("button")

    loadBtn.addEventListener("click", loadData)
    viewBtn.addEventListener("click", obtainComments)

    const commentsBody = {}


    function loadData() {
        fetch(postsUrl).then(response => response.json()).then(posts => {
            for (const [key, info] of Object.entries(posts)) {
                const option = document.createElement("option")
                option.value = key
                option.textContent = info.title

                commentsBody[key] = info.body

                allPosts.appendChild(option)
            }
        }).catch()
    }


    function findComments(selectedId, comments) {
        const allComments = []
        for (const post of allPosts.children) {
            if (selectedId === post.value) {
                for (const comment of Object.values(comments)) {
                    if (comment.postId === selectedId) {
                        allComments.push({
                            commentId: comment.id,
                            text: comment.text
                        })
                    }
                }
                return allComments
            }
        }
    }


    function obtainComments() {
        fetch(commentsUrl).then(response => response.json()).then(comments => {
            const allComments = findComments(allPosts.value, comments)

            const index = allPosts.selectedIndex
            const selectedOption = allPosts.options[index]
            document.querySelector("#post-title").textContent = selectedOption.textContent
            document.querySelector("#post-body").textContent = commentsBody[selectedOption.value]

            const body = document.querySelector("body")
            body.removeChild(document.querySelector("#post-comments"))

            const Ul = document.createElement("ul")
            Ul.setAttribute("id", "post-comments")
            body.appendChild(Ul)

            for (const commentInfo of allComments) {
                const li = document.createElement("li")
                li.setAttribute("id", commentInfo.commentId)
                li.textContent = commentInfo.text

                Ul.appendChild(li)
            }


        }).catch()
    }

}

attachEvents();