let posts = [
    {title: 'Post Başlık 1', detail: 'Post Detay 1'},
    {title: 'Post Başlık 2', detail: 'Post Detay 2'},
    {title: 'Post Başlık 3', detail: 'Post Detay 3'}
];

const listPosts = () => {
	posts.map((post) => {
  	console.log(`Başlık: ${post.title} - Detay: ${post.detail}`);
  });
};

const addPost = (newPost) => {
	const promise1 = new Promise((resolve, reject) => {
  	posts.push(newPost);
  });
  return promise1;
};

addPost({title: 'Post Başlık 4', detail: 'Post Detay 4'})
	.then(() => {
  	console.log('Yeni Yazılar');
    listPosts();
  }) .catch((err) => {
  	console.log(err);
  });
  
listPosts()
