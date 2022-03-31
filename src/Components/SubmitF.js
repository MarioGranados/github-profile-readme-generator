import {useState} from "react";

const Submit = () => {

    const [clicked, setClick] = useState(true);
    function handleClick() {
        setClick(false);
    }
    return (
        <>
            {clicked ?
                <div className="container my-5">
                    <h4 className='text-center'>Download ReadMe Here</h4>
                    <div className="justify-content-center d-flex">
                        <button onClick={handleClick} className='btn btn-primary btn-lg'>Submit</button>
                    </div>
                </div> :
                <div className="container my-5">
                    <h4 className="text-center">Select A Template</h4>
                    <hr/>
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col mb-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Template 1</h5>
                                    </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Template 2</h5>
                                    </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Template 3</h5>
                                    </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Template 4</h5>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

            }

        </>
    )
}
export default Submit