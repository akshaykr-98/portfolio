// import Image from 'next/image'
// import reactImg from '../../Asstes/images/React-icon.png'

export default function Card(data){  
  return(
     <div className='card' key={data.id}>
        <h3>{data.title}</h3>
        <img src={data.thumbnail} alt="React" height={100} width={100} />
        {/* <Image src={reactImg} alt="React" height='10' width='100' /> */}

        <p>{data.description}</p>
      </div>
  )
} 