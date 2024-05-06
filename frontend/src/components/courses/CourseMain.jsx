import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { Radio } from 'antd'
import { Prices } from '../price/Prices';
import {useNavigate} from 'react-router-dom'

const CourseMain = () => {
    const navigate = useNavigate()
    const [api, setApi] = useState([]);
    const [popular, setPopular] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState('');
    const [visibleItem, setVisibleItem] = useState(4);
    const [start, setStart] = useState(0);
    const [path, setPath] = useState('');


    // get categories
    useEffect(() => {
        axios.get("http://localhost:8002/get-catergories")
            .then((res) => {
                setApi(res.data.category);
                console.log(api);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // get all products
    useEffect(() => {
        axios.get("http://localhost:8002/gets-popularclasses")
            .then((res) => {
                setPopular(res.data.data);
                setPath(res.data.filepath);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
    const handleCategoryFilter = (value, id) => {
        if (value) {
            setChecked([...checked, id]);
        } else {
            setChecked(checked.filter(elem => elem !== id));
        }
    };

    // filter all products here 
    const filteredPopular = popular.filter(c => {
        if (checked.length === 0 || checked.includes(c.category._id)) {
            return true;
        } else if (c.price >= radio[0] && c.price <= radio[1]) {
            return true;
        } else {
            return false;
        }
    });
    
    // price filter
    const handlePriceFilter = (value) => {
        const [minPrice, maxPrice] = value.map(Number);
        const filteredProducts = popular.filter(
            pro => pro.price >= minPrice && pro.price <= maxPrice
        );
        setChecked(filteredProducts);
    }
    
    // Handle clearing all filters
    const handleClearFilters = () => {
        setChecked([]);
        setRadio('');
    };
    

    // pagination 
   const handlePageClick = ({ selected }) => {
    const newStart = selected * 4;
    setVisibleItem(newStart + 4);
    setStart(newStart);
};


     const singlePage =(id)=>{
        navigate(`/likeNastaFood/${id}`)
     }
    return (
        <Container>
            <Row>
                <Col md={4}>
                    {/* Category Filter */}
                    <div className='course-category'>
                        <h3 className='pl-5 pl-5 pt-2 color-1'> Category </h3>
                        <hr />
                        {api.map((elem) => (
                            <div className='pb-2 pl-5' key={elem._id}>
                                <input type="checkbox"
                                    value={elem.categories_name}
                                    onChange={(e) => handleCategoryFilter(e.target.checked, elem._id)}
                                    checked={checked.includes(elem._id)}
                                />
                                <span> {elem.categories_name} </span>
                            </div>
                        ))}
                    </div>

                    {/*  filter by Prices */}
                    <div className='course-category mt-5'>
                        <h3 className='pl-5 pt-2 color-1'> Filter by Prices </h3>
                        <hr />
                        <Radio.Group key={radio} onChange={e => setRadio(e.target.value)}>
                            {
                                Prices?.map(p => (
                                    <div key={p._id} className='ml-4  text-2xl'>
                                        <Radio value={p.array} onChange={(e) => handlePriceFilter(e.target.value)}
                                        > {p.name} </Radio>
                                    </div>

                                ))
                            }
                        </Radio.Group>
                    </div>

                    <div className='mt-4'>
                        <Button className='btn-danger'
                            onClick={handleClearFilters}>
                            Clear All Filters
                        </Button>
                    </div>

                </Col>
                <Col md={8}>
                    <div className='mt-32'>
                        <Row>
                            {filteredPopular.slice(start, visibleItem).map((elem) => (
                                <Col md={6} key={elem._id}>
                                    <Card style={{ width: '100% ', height: '480px', margin: "15px 0px" }}
                                     onClick={()=>singlePage(elem._id)}
                                     >
                                        <div className='popularmain-img'>
                                            <Card.Img variant="top" src={`${path}/${elem.image}`} alt={elem.image} className='popularmimg h-[300px]' />
                                        </div>
                                        <Card.Body>
                                            <Button className='popularbtn'>{elem.category.categories_name}</Button>

                                            <Card.Title className='popular-price'> ${elem.price}</Card.Title>
                                            <Card.Title className='populartitle'>{elem.name}</Card.Title>
                                            <Card.Text>{elem.description}</Card.Text>
                                            <Card.Text className='popularlabel'>{elem.label}</Card.Text>
                                            <Card.Text className='popular_duration'><span> Duration :</span> {elem.duration}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
            <div>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={'2'}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-end'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        </Container>
    );
};

export default CourseMain;
