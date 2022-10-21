import React from 'react'
import "./Total.css"

function Total({totalprice}) {
  return (
    <div className='checkout'>
        <h1>ÖDENECEK TUTAR</h1>
        <div className="money">
            <h4>{totalprice}</h4>
            <p>TL</p>
        </div>
        <button >Alışverişi Tamamla</button>
        <p className='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quasi enim eveniet, voluptas soluta tempora architecto nihil sit qui incidunt aperiam. Ipsam, neque. Aut nihil ad voluptates voluptatem deserunt molestiae!</p>
        <div className="cargo">
            <div className="cargoamount">
                <p>kargo</p>
                <p className='freeshippink'>bedava</p>
                <p className='cargoamountTL'>12 TL</p>
            </div>
            <div className="ordertotal">
                <p>ürünler</p>
                <p className='orderamount'>{totalprice} TL</p>
            </div>
        </div>
    </div>
  )
}

export default Total