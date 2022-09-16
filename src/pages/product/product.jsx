import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const Product = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
      axios.get(`http://prrrrrooooo/api/get/product`).then((res) => {
          setData(res.data.data);
      });
  }, []);

  return (
      <div className="d-flex justify-content-evenly p-5 flex-wrap">
          {Data.map((item) => {
              return (
                  <div key={item.id} className="card" style={{ width: "18rem" }}>
                      <img style={{width:"286px",height:"261px"}} src={`http://prrrrrooooo/storage/uploads/${item.image}`} className="card-img-top" alt="..." />
                      <div className="card-body">
                        
                      <h5 className="card-title">{item.name}</h5>
                      <h6 className="card-title">{item.price}</h6>
                          <p className="card-text">
                              {item.description}
                          </p>
                          {/* <Link to={`/moreProduct/${item.id}`} className="btn btn-outline-danger">
                              More
                          </Link> */}
                      </div>
                  </div>
              );
          })}
      </div>
  );
};
export default Product;