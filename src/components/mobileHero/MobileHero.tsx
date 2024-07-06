import "./mobileHero.css";


const MobileHero = () => {
  return (
    <>
    <div className="mHContainer">
      <div className="mHImage">
        <img className="mHImageTitle" src="https://occ-0-5543-299.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRI8j5rmHo4qJ1VJvg6AdFB26WAmXjvNIVv3fVMiYoAkyYLMNA6YYftiyAiMZ4Oj3sBE8uAmWTXFn53PIH4EWKdYDqqFq-I9GZMVutGYOd60IqsuWkyB9ZvSdaHBOqm0WauNUfUyt5f5oY4QBKPFHe9F49_fbuiDuQQG5-TlutjFUBVzNNScNw.webp?r=080" alt=""  />
        <div className="genre">
            <ul>
                <li>Soapy</li>
                <li>Emotional</li>
                <li>Drama</li>
            </ul>
            <div>
                <button>Play</button>
                <button>My List</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MobileHero
