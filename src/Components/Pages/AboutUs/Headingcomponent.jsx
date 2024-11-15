import React from 'react'
// import mouseicon from ''
function Headingcomponent() {
    return (
        <>
            <section className='headings bg-[white] flex my-[8%] flex-col justify-between items-center px-[10%] py-[4%] w-full'>
                <p className="secondaryheading font-lexend font-semibold text-gray text-center text-[4vw] ">Welcome To</p>
                <h1 className="heading font-lexend font-black text-primary text-center text-[16vw] -mt-12">Vaseline®</h1>

                <div className="mouse flex flex-col gap-[4px] justify-center items-center">
                    {/* <img src={mouseicon} alt="" className="mouseicon" /> */}
                    <p className="mousescroll text-gray font-[300] text-[16px]">Scroll Down</p>
                </div>
            </section>
        </>
    )
}

export default Headingcomponent