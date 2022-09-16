import style from "./create_product.module.scss";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Create_product = () => {
    const [Name, setName] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    const [Image, setImage] = useState("");

    const changeName = (evt) => {
        setName(evt.target.value);
    };
    const changePrice = (evt) => {
        setPrice(evt.target.value);
    };
    const changeDescription = (evt) => {
        setDescription(evt.target.value);
    };
    const changeImage = (evt) => {
        setImage(evt.target.files[0]);
    };

    const CreateProductC = (evt) => {
        evt.preventDefault();
        if (
            Name.length < 3 ||
            Name.length > 10 ||
            Price.length < 3 ||
            Price.length > 10 ||
            Description.length < 3 ||
            Description.length > 10
        ) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: `Error!`,
                showConfirmButton: false,
                timer: 1500,
            });
        }else{
            
            let DataForm = new FormData();
            DataForm.append('name',Name);
            DataForm.append('price',Price);
            DataForm.append('description',Description);
            DataForm.append('image',Image);

            axios.post(`http://prrrrrooooo/api/create/product`,DataForm);

            Swal.fire({
                position: "center",
                icon: "success",
                title: `Success`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 mt-5">
                        <form action="">
                            <input
                                onChange={changeName}
                                placeholder="Name"
                                className="form-control m-2"
                                type="text"
                            />
                            <input
                                onChange={changePrice}
                                placeholder="Price"
                                className="form-control m-2"
                                type="number"
                            />
                            <input
                                onChange={changeDescription}
                                placeholder="Description"
                                className="form-control m-2"
                                type="text"
                            />
                            <input
                                onChange={changeImage}
                                className="form-control m-2"
                                type="file"
                            />
                            <button
                                onClick={CreateProductC}
                                className="btn btn-outline-success mt-2"
                            >
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create_product;
