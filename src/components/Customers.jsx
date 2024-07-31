import tesla_image from '../assets/tesla.svg'
import arrow_right from '../assets/arrow-right.svg'

import customer_1 from '../assets/customer-1.svg'
import customer_2 from '../assets/customer-2.svg'
import customer_3 from '../assets/customer-3.svg'
import customer_4 from '../assets/customer-4.svg'
import customer_5 from '../assets/customer-5.svg'
import customer_6 from '../assets/customer-6.svg'

const Customers = () => {
    return (
<div className='background-light'>
        <div className='d-flex flex-column gap-5 flex-md-row container py-5  background-light'>
            <div className=' flex-grow-1 flex-shrink-0'><img style={{ width: '100%' }} src={tesla_image} alt="Tesla Image" /></div>

            <div className=' flex-grow-1 w-full  d-flex flex-column justify-content-center  align-items-center align-items-md-start mt-5 mt-md-0'>
                <p className=' text-grey px-2 text-center text-md-start px-md-0' style={{ fontSize: '16px' }}>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h3 className=' text-green ' style={{ width: 'fit-content' }} >Tim Smith</h3>
                <p className='text-grey'>British Dragon Boat Racing Association</p>
                <div className='d-flex flex-column flex-sm-row w-100 gap-2'> <div className='d-flex justify-content-between  flex-grow-1 flex-wrap '><img src={customer_1} alt="logo" /><img src={customer_2} alt="logo" /><img src={customer_3} alt="logo" /><img src={customer_4} alt="logo" /><img src={customer_5} alt="logo" /><img src={customer_6} alt="logo" /></div> <button className='text-green border-0 background-light fw-semibold'>Meet All Customers <img src={arrow_right} alt="Arrow"/></button></div>
            </div>
            </div>
        </div>
    )
}

export default Customers