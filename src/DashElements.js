function dashElements(props) {
  return (
    <>
      <div className="dash">
        <img src={props.img}></img>
        <p className={props.active && "active"}>{props.name}</p>
      </div>
    </>
  );
}

export default dashElements;
