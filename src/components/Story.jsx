
// import myImg from '../assets/image_1.jpg'
export default function Story({title, data_1, data_2, pic}){
    return(<div>
      <h2 className="heading">{title}</h2>
        <p className="data">{data_1}</p>
        <p className="data">{data_2}</p>
        {/*<img src={myImg} alt=""/>*/}
        <img src={pic} alt=""/>
    </div>)
}

