function Service(props){

    return (
      
          <div className='service-card'>
            <div className='illustration'><img className="card-image" src={props.image} alt="image" /></div>
            <h1 className='service-card-header'>{props.service_name}</h1>
            <p>We aspire to be the most player-focused gaming company in the world, and Netlify absolutely carries the same spirit of aspiring to be the most developer-focused technology company in the world… Ultimately, there was a sense of deep collaboration, understanding and meeting our business requirements, and providing extremely knowledgeable and highly professional solutions every single step along the way.</p>
          </div>    

    );
}

export default Service;