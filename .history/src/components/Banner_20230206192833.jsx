import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="container-fluid w-full flex flex-wrap items-center justify-between lg:justify-around lg:max-w-screen-lg lg:mx-auto">
                <div className="banner mt-6 mb-10 mx-4 md:mx-0">
                    <div className="flex gap-4 w-full items-center justify-center">
                        {/* <div className="md:w-1/6 md:h-[224px] bg-[#B6D4A8] rounded-l rounded-[20px]">
          </div> */}
                        <img
                            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80"
                            className="md:w-[12%] object-cover blur-[2px] md:h-[224px] bg-[#B6D4A8] rounded-l rounded-[20px]"
                            alt=""
                        />
                        <img
                            src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            className="flex-initial w-full max-h-[300px] object-fill rounded-[20px]"
                            alt=""
                        />
                        <img
                            src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
                            className="md:w-[12%] object-cover blur-[2px] md:h-[224px] bg-[#B6D4A8] rounded-r rounded-[20px]"
                            alt=""
                        />
                        {/* <div className="md:w-1/6 md:h-[224px] bg-[#B6D4A8] rounded-r rounded-[20px]"></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner