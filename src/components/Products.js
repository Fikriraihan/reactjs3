import { Favorite, SearchOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 p-2 collect">
      <div className="collection-img position-relative">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkuKGHirTPfz2jHZpLUC4o0k0oByn0_LS_oQ&usqp=CAU" alt="collection" className="w-100" />
        <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
        <div className="cart position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="icons rounded-circle d-flex justify-content-center align-items-center mx-3">
            <Link to="detail">
              <SearchOutlined />
            </Link>
          </div>
          <div className="icons rounded-circle d-flex justify-content-center align-items-center">
            <Favorite />
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="rating mt-3">rating</div>
        <p className="text-capitalize my-1">Kaos Abu - Abu</p>
        <span>Rp 30.000</span>
      </div>
    </div>
  );
};

export default Products;
