class Tweet {
    constructor(message, retweetCount) {
        this.message = message 
        this.retweetCount = retweetCount
    }
}

const testMessage = 'test message'

const getRandomRetweet = (max) => Math.floor(Math.random() * max)

function generateTweets(tweetsNumber) {
    var tweets = []

    for (var i = 0; i < tweetsNumber; i++) {
        tweets.push(new Tweet(testMessage, getRandomRetweet(tweetsNumber)))
    }
    
    return tweets
}

var tweets = generateTweets(10)

function findGretRetweet(tweets) {
    var id = 0
    var max = tweets[id]

    for (var i = 0; i < tweets.length; i++) {
        if (tweets[i].retweetCount > max.retweetCount) {
            id = i
            max = tweets[i]
        }
    }

    return max
}

/**
 * Find most popular tweets by retweet counts
 */
function findMostPopularTweet(tweets, num) {
    var finded = 0
    var tw = []

    while (finded !== num) {
        console.log(findGretRetweet(tweets))
        finded++
    }

    return tw
}

findMostPopularTweet(tweets, 5)