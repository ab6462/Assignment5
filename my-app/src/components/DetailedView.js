const DetailedView = ({item}) => {
    if (item) {
        return (<div>
            <p>{item.text}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <img src={item.image} alt="new" className="responsive"
          />
        </div>);
    } else {
        return null;
    }
}

export default DetailedView;