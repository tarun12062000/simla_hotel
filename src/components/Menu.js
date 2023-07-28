import React from 'react';
import styles from '../Nav.module.css';


export default  function Menu(){

     const temp=[{
        src:'https://b.zmtcdn.com/data/pictures/4/19601154/23a2b41ff0c6015e2ddee66f3ec7f323_o2_featured_v2.jpg',
        text:'Marky Momos',
        prize:200
    },
    {
        src:'https://b.zmtcdn.com/data/pictures/8/19184218/54a2921f8a9d9973d6d8f95a2e3418bf_o2_featured_v2.jpg',
        text:'Tawa Fry',
        prize:260
    },
    {
        src:'https://b.zmtcdn.com/data/pictures/chains/9/18603039/55307b06a976df75450a1e45c749e1ec_o2_featured_v2.jpg',
        text:'PavBhaji',
        prize:150
    },
    {
        src:'https://b.zmtcdn.com/data/pictures/chains/6/111026/e8cf1c58f2bb217f3d85ff50b7fe39a3_o2_featured_v2.jpg',
        text:'Pizza',
        prize:350
    },
    {
        src:'https://b.zmtcdn.com/data/pictures/chains/3/110133/1909b4e90ddbf913a31ac39f13b1644f_o2_featured_v2.jpg',
        text:'Sandwitch',
        prize:120
    },
    {
        src:'https://b.zmtcdn.com/data/pictures/chains/0/110280/1317ad7eb71df1f2050d61deb0701f88_o2_featured_v2.jpg',
        text:'Mirch Masala',
        prize:200
    }]
    return(
          <div className={styles.menu1}>
            <h1>OUR MENU</h1>
            <div className={styles.menu2}>
                {temp.map((main)=>
                <div className={styles.card}>
                    <div className={styles.pic}>
                    <img src={main.src} alt="reload" />
                    </div>
                    <div className={styles.txt}>
                        <h2>{main.text}</h2>
                        <p>Prize:{main.prize}</p>
                    </div>
                    <button className={styles.btn}>Add To Cart</button>
                </div>
                )}
            </div>
          </div>
    )
}