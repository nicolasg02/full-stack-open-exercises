const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  const reducer = (sum, item) => {
    return sum + item
  }

  const temp = []
  blogs.map(blog => {
    temp.push(blog.likes)
  })

  if (temp.length === 1) {
    return temp[0]
  } else {
    return temp.reduce(reducer, 0)
  }
}

const favoriteBlog = blogs => {
  const favorites = []
  blogs.map(blog => {
    if (favorites.length === 0) favorites.push(blog)

    if (blog.likes > favorites[0].likes) {
      favorites.pop()
      favorites.push(blog)
    }
  })

  return {
    title: favorites[0].title,
    author: favorites[0].author,
    likes: favorites[0].likes,
  }
}

const mostBlogs = blogs => {}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
}
