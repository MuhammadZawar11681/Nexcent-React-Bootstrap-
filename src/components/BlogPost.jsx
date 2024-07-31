import arrow_right from '../assets/arrow-right.svg'
const BlogPost = ({image,text,link}) => {
  return (
    <div className='position-relative mb-5 px-3 '>
        <img className='w-100' src={image} alt="Blog Cover"  />
        <div className='position-absolute d-flex flex-column align-align-items-center justify-content-between w-75 background-light  rounded-3 shadow py-2 px-4 ' style={{bottom:'-15%', left:'12%',  minHeight:'130px'}}>
            <p className='text-grey fw-bold text-center'>{text}</p>
            <button className='border-0 background-light text-green fw-semibold mx-auto'>Read More <img src={arrow_right} alt="Arrow"  /></button>
        </div>

    </div>
  )
}

export default BlogPost