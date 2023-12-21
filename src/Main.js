import { BsArrowDownCircleFill } from 'react-icons/bs';
import "./Main.css";

export default function Main(){

    const What_I_am = ["Frontend Developer", "Data Analyst", "Transcriber & Proof-reader", "Cover letters, Resume and Presentation builder", "English-to-Hindi Translator", "Mechanical Designer", "More"]

    return(
        <main className='main-content'>
            <div className='photo'><img src="/imran.jpg" alt="image" /></div>

            <div className='About-me-section'>
                <div className='main-intro'>
                    <h1 className='headline text-pulse'>Stop searching and get your work done</h1>
                    <br/>
                    <h1 className='Roles'>I am a Frontend Developer, Data Analyst, Proof-reader, Resume and Presentation builder & <span className='more'>more</span></h1>
                    <p className='request-work'>You name it, I will do it for you.</p>    
                </div>

                <div className='scroll-down'><BsArrowDownCircleFill size={40} color='#cf4307'/></div>
            </div>

        </main>
 
    );
}