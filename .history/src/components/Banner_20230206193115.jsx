import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="container-fluid w-full flex flex-wrap items-center justify-between lg:justify-around lg:max-w-screen-lg lg:mx-auto">
                <div className="banner mt-6 mb-10 mx-4 md:mx-0">
                    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                        <div className="carousel-item">
                            <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner