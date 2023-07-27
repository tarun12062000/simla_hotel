import React ,{useState} from 'react';
import styles from '../Nav.module.css';


export default  function Review(){
    const [name,setName] =useState('');
    const [suggetion,setSuggetion]= useState('');
    const [review,setReview]=useState([{suggetion:'Simla Restaurant offers an exceptional dining experience! The flavors of India come alive in every dish served. The friendly staff provided top-notch service, and the cozy ambiance made our visit memorable. A must-visit for anyone seeking authentic Indian cuisine in a delightful setting.',
                                         Name:'Jalay Patel'},
                                        {suggetion:'The food was a tantalizing fusion of spices and aromas, a true culinary delight. The attentive staff made us feel like valued guests, enhancing our enjoyment. The inviting decor and warm ambiance added to the overall charm. Undoubtedly, a gem among Indian restaurants!',
                                         Name:'Rudra Prakash'}])
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        const newReview = { suggetion: suggetion, Name: name };
        setReview([...review, newReview]);
        setName('');
        setSuggetion('');          
    }       
    const reset=(e)=>{
        e.preventDefault(); 
        setReview([{suggetion:'Simla Restaurant offers an exceptional dining experience! The flavors of India come alive in every dish served. The friendly staff provided top-notch service, and the cozy ambiance made our visit memorable. A must-visit for anyone seeking authentic Indian cuisine in a delightful setting.',
        Name:'Jalay Patel'},
       {suggetion:'The food was a tantalizing fusion of spices and aromas, a true culinary delight. The attentive staff made us feel like valued guests, enhancing our enjoyment. The inviting decor and warm ambiance added to the overall charm. Undoubtedly, a gem among Indian restaurants!',
        Name:'Rudra Prakash'}])
    }                  
return(
    <div className={styles.review1}>
        
          <h1>Customers Review</h1>
          <div className={styles.dis}>
          <div className={styles.review2}>
                  {review.map((R1)=>
                  <div className={styles.review_text}>
                    <h2>{R1.Name}</h2>
                    <p>"{R1.suggetion}"</p>
                    </div>)}
          </div>
          
          <div className={styles.review_form}>
            <h1>FeedBack Form</h1>

 <form classname={styles.Form}onSubmit={handleSubmit}>
  <div className={styles.tag}>
  <div className={styles.col25}>
  <lable htmlFor="name">Name: </lable>
  </div>
  <input type='text' id="name" value={name} onChange={(e) => setName(e.target.value)} />
 </div>

 <div className={styles.tag}>
  <div className={styles.col25}>
  <lable htmlFor="review">Review:</lable>
  </div>
  <input type='text' id="review" value={suggetion} onChange={(e) => setSuggetion(e.target.value)}/>
  </div>
  <button type='submit' className={styles.btn}>Submit review</button>
  <button type='submit' className={styles.btn} onClick={reset}>Clear review</button>
  </form>
          </div>
          </div>
    </div>
)
}