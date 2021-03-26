const newsArticleComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      <p>{props.content}</p>
      <p>I am a newsArticleComponent</p>
    </div>
  );
};

export default newsArticleComponent;
