import blog_1 from '../assets/blog-image-1.svg'
import blog_2 from '../assets/blog-image-2.svg'
import blog_3 from '../assets/blog-image-3.svg'
import BlogPost from './BlogPost'
const Blog = () => {
    const blogs =[
        {
            image:blog_1,
            text:'Creating Streamlined Safeguarding Processes with OneRen',
            link:'#'
        },
        {
            image:blog_2,
            text:'What are your safeguarding responsibilities and how can you manage them?',
            link:'#'
        },
        {
            image:blog_3,
            text:'Revamping the Membership Model with Triathlon Australia',
            link:'#'
        }
    ]
    return (
        <div id='testimonials' className='my-5'>
                <h1 className=' text-dark-grey text-center ' >Caring is the new marketing</h1>
                <p className='fw-semibold  text-grey text-center paragraph-center px-2 px-md-0 mx-auto' style={{ fontSize: '16px' }}>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        
        <div className='d-flex gap-4 mx-auto justify-content-center flex-wrap mx-2 my-5'>
            {blogs.map((post, index)=>(<BlogPost key={index} image={post.image} text={post.text} link={post.link}/>))}
        </div>
        
        </div>
    )
}

export default Blog