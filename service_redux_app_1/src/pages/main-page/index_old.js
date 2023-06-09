import { Button, Card, Col, Row } from "react-bootstrap"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { Link } from "react-router-dom"
import CategoryBox from "./components/category-box"
import { useEffect, useState } from "react"
import useApi from "../../hooks/useApi"
import { useSelector } from "react-redux"

// INFO Bu dosya eskidir, sadece bilgi amaçlıdır.

export default function MainPage() {
    const [categories, setCategories] = useState([])
    const [initialized, setInitialized] = useState(false)
    const categoriesState = useSelector(state => state.categoriesState)
    //const [blogs, setBlogs] = useState([])

    const api = useApi()

    useEffect(() => {
        api.get('public/categories/listMainCategories')
            .then((response) => {
                console.log('>> API RESPONSE', response)
                setCategories(response.data.data)
            })
            .catch(() => {
                alert('Api isteği esnasında bir hata oluştu.')
            })
            .finally(() => {
                setInitialized(true)
            })
    }, [])

    //    if (categories.length === 0) {
    //        axios.get('https://api.adoptez1artisan.com/public/categories/listMainCategories')
    //            .then((response) => {
    //                console.log('>> API RESPONSE', response)
    //                setCategories(response.data.data)
    //            })
    //            .catch(() => {
    //            })
    //    }

    if (initialized === false) {
        return (
            <main>
                <Row className={'mb-3 text-center'}>
                    Loading...
                </Row>
            </main>
        );
    }

    console.log("category length: ", categories.length)

    return (
        <main>
            <Row className={'mb-3 text-center'}>
                <Col>

                    <Splide
                        options={{
                            rewind: true, gap: '1rem', height: "500px",
                        }}
                        aria-label="My Favorite Images"
                    >
                        <SplideSlide>
                            <img src="https://adoptez1artisan.com/images/bg/bg2.jpg" alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://adoptez1artisan.com/images/bg/bg1.jpg" alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://adoptez1artisan.com/images/bg/bg3.jpg" alt="Image 3" />
                        </SplideSlide>
                    </Splide>


                </Col>
            </Row>

            <Row className={'row-cols-1 row-cols-md-3 mb-3 text-center'}>
                {categories.map((item, index) => {
                    return (
                        <Col key={index}>
                            <CategoryBox category={item} />
                        </Col>
                    )
                })}

            </Row>

            <h2 className="display-6 text-center mb-4">Compare plans</h2>

            <div className="table-responsive">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th style={{ width: "34%" }}></th>
                            <th style={{ width: "22%" }}>Free</th>
                            <th style={{ width: "22%" }}>Pro</th>
                            <th style={{ width: "22%" }}>Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="text-start">Public</th>
                            <td>
                                <svg className="bi" width="24" height="24">

                                </svg>
                            </td>
                            <td>
                                <svg className="bi" width="24" height="24">

                                </svg>
                            </td>
                            <td>
                                <svg className="bi" width="24" height="24">

                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Private</th>
                            <td></td>
                            <td>
                                <svg className="bi" width="24" height="24">

                                </svg>
                            </td>
                            <td>
                                <svg className="bi" width="24" height="24">

                                </svg>
                            </td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <th scope="row" className="text-start">Permissions</th>
                            <td>
                                <svg className="bi" width="24" height="24">

                                </svg>
                            </td>
                            <td>
                                <svg className="bi" width="24" height="24">

                                </svg>
                            </td>
                            <td>
                                <svg className="bi" width="24" height="24">

                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Sharing</th>
                            <td></td>
                            <td>
                                <svg className="bi" width="24" height="24">

                                </svg>
                            </td>
                            <td>
                                <svg className="bi" width="24" height="24">

                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Unlimited members</th>
                            <td></td>
                            <td>
                                <svg className="bi" width="24" height="24">

                                </svg>
                            </td>
                            <td>
                                <svg className="bi" width="24" height="24">

                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Extra security</th>
                            <td></td>
                            <td></td>
                            <td>
                                <svg className="bi" width="24" height="24">

                                </svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>)
}
