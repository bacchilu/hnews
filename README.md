# hnews

A React fronted for [Hacker News](http://news.ycombinator.com/).

## data fetcher strategy

I get the data from [Algolia](https://hn.algolia.com/).
I get the top HN post from the last 7 days, ordered by score: 64 posts from the last 24 hours, 32 created 2 day ago, 16 created 3 days ago, ..., 1 created 7 days ago; 127 HN posts are always shown.

## comments

Comments are show in a conversation style view.

## TODO

-   Users navbar in comments
-   Firebase Authentication to save preferred
-   React Router?
-   https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/
