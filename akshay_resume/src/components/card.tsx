// import Image from 'next/image'
// import reactImg from '../../Asstes/images/React-icon.png'

export default function Card(data){  
  return(
     <div className='card' key={data.id}>
      <div className="card-inner">
        <div className="card-front">
          <img src={data.thumbnail} alt="React"/>
          {/* <Image src={reactImg} alt="React" height='10' width='100' /> */}
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