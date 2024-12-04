import ReturnButton from "./ButtonComponent"
// import star from  "./star.png"
export default function returnParentButton() {

    return (
        <div className="parent">
    <ReturnButton className="custom-button"  title="جديدة">
    <img className="icon" src="/shooting-star.png" alt="my img"/>
    <img className="icon" src="/shooting-star.png" alt="my img"/>
    <img className="icon" src="/shooting-star.png" alt="my img"/>
    </ReturnButton>
    
    <ReturnButton title="الاكثر قراءة" >
    <img className="img" src="/img 23.jpg" alt="my img"/>
       </ReturnButton>
  
     <ReturnButton title="مقالات مميزة" > 
     <div>
     <img className="icon" src="/star.png" alt="my img"/>
    <img className="icon" src="/star.png" alt="my img"/>
    <img className="icon" src="/star.png" alt="my img"/> 
      </div>
      <img className="img" src="/images 22.jpg" alt="my img"/>
    </ReturnButton>
  </div> 
    )
}
