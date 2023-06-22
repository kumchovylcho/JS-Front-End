function comments(list) {

    function validUser(user, article) {
        return output.users.includes(user) && output.articles.includes(article)
    }

    const output = {
        comments: {},
        users: [],
        articles: [],
    }

    for (let info of list) {
        if (info.includes("user ")) {
            if (!output.users.includes(info.split(" ")[1])) {
                output.users.push(info.split(" ")[1])
            }
        }

        else if (info.includes("article ")) {
            if (!output.articles.includes(info.split(" ")[1])) {
                output.articles.push(info.split(" ")[1])
            }
        }

        else if (info.includes("posts on ")) {
            info = info.split(" posts on ")
            let username = info[0]
            let [article, commentTitle] = info[1].split(", ")[0].split(": ")
            let commentContent = info[1].split(", ")[1]

            if (validUser(username, article)) {
                if (!output.comments.hasOwnProperty(article)) {
                    output.comments[article] = {}
                    output.comments[article].userComments = []
                }

                output.comments[article].userComments.push({
                    userName: username,
                    title: commentTitle,
                    comment: commentContent,
                })
            }
        }
    }

    const sortedArticles = output.articles.sort((a, b) => {
        const aComment = output.comments[a].userComments.length
        const bComment = output.comments[b].userComments.length
        return bComment - aComment
    })

    for (const article of sortedArticles) {
        console.log(`Comments on ${article}`)

        const comments = output.comments[article].userComments

        comments.sort((a, b) => a.userName.localeCompare(b.userName)).forEach(comment => {
            console.log(`--- From user ${comment.userName}: ${comment.title} - ${comment.comment}`)
        })
    }
}


comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books',
'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
        'someUser posts on Shopping: title, I go shopping every day',
'someUser posts on Movies: Like, I also like movies very much'])

console.log("NEXT -------------------------------------------")

comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby', 'article Steven', 'user Liam',
    'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like']
)