import React from 'react'
import style from "./table.module.css"
export default function Table() {
  return (
    <div className={style.container}>
<div className={style.wrapper}>

<div className={style.feebox}> <span className={style.month}>Jan</span> <span className={style.fee} >Fee</span> <span className={style.status}>Status</span></div>
<div className={style.feebox}> <span className={style.month}>Feb</span> <span className={style.fee}>Fee</span> <span className={style.status}>Status</span></div>
<div className={style.feebox}> <span className={style.month}>Mar</span> <span className={style.fee}>Fee</span> <span className={style.status}>Status</span></div>
<div className={style.feebox}> <span className={style.month}>Apr</span> <span className={style.fee}>Fee</span> <span className={style.status}>Status</span></div>
<div className={style.feebox}> <span className={style.month}>May</span> <span className={style.fee}>Fee</span> <span className={style.status}>Status</span></div>
<div className={style.feebox}> <span className={style.month}>Jun</span> <span className={style.fee}>Fee</span> <span className={style.status}>Status</span></div>
<div className={style.feebox}> <span className={style.month}>Jul</span> <span className={style.fee}>Fee</span> <span className={style.status}>Status</span></div>
<div className={style.feebox}> <span className={style.month}>Aug</span> <span className={style.fee}>Fee</span> <span className={style.status}>Status</span></div>
<div className={style.feebox}> <span className={style.month}>Sep</span> <span className={style.fee}>Fee</span> <span className={style.status}>Status</span></div>
<div className={style.feebox}> <span className={style.month}>Oct</span> <span className={style.fee}>Fee</span> <span className={style.status}>Status</span></div>
<div className={style.feebox}> <span className={style.month}>Nov</span> <span className={style.fee}>Fee</span> <span className={style.status}>Status</span></div>
<div className={style.feebox}> <span className={style.month}>Dec</span> <span className={style.fee}>Fee</span> <span className={style.status}>Status</span></div>

</div>


    </div>
  )
}
