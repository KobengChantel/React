function Items({ data }) {
  return (
    <div className="row">
      {
        // Map over the data array to render each item
        data.map((value) => {
          // Destructure the properties from the value object
          const { id, image, title, description } = value;

          // Return a div for each item with a unique key
          return (
            <div className="col-sm-3 my-3" key={id}>
              <div className="card bg-light text-center">
                {/* Display the item's image */}
                <img src={image} className="img-fluid" style={{ height: "200px" }} alt={title} />
                {/* Display the item's title */}
                <h3>{title}</h3>
                {/* Display the item's description */}
                <p>{description}</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Items; // Export the Items component
