interface CardProps {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

export default function Card(data: CardProps) {  
  return(
     <div className='card'>
      <div className="card-inner">
        <div className="card-front">
          <img 
            src={data.thumbnail} 
            alt={`${data.title} thumbnail`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder-image.jpg';
            }}
          />
         <h3><b>{data.title}</b></h3>
        </div>
        <div className="card-back">
          <h3><b>{data.title}</b></h3>
          <p>{data.description}</p>
        </div>
      </div>
      </div>
  )
}