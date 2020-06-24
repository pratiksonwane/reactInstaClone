import React, { Component } from 'react';
import './horizontal.css';
import DpPratiksha from './pratiksha.jpeg';
import './App.css';
import Pratiksha1 from './pratiksha1.jpeg';
import Pratiksha2 from './pratiksha2.jpeg';
import Icon from './insta-icon.jpeg';
class PratikshaProfile extends Component{

  render(){
  return (
    <div>
        <div className="ctQZg">   
            <div className="_47KiJ">
                <img src={Icon} style={{marginLeft : 1000}}></img>
                <p style={{marginRight : 150}}></p>
                <p style={{marginRight : 5000, marginTop :40}}>pratii_s05 </p>
                <hr />        
            </div>
        </div>

        <div className="ctQZg">   
            <div className="_47KiJ">
                <img src={DpPratiksha} height="140" width="140" style={{borderRadius : 70, marginTop :200, marginLeft : 1000}}></img>
                <p style={{marginLeft :100, marginTop : 200, fontSize : 50}}>2</p>

                <p style={{ marginTop : 300, marginLeft : -35}}>Posts</p>
                
                <p style={{marginLeft :90, marginTop : 200, fontSize : 50}}>557</p>
                
                <p style={{marginTop : 300, marginLeft : -80}}>Followers</p>
                
                <p style={{marginLeft :80, marginTop : 200, fontSize : 50}}>648</p>
                
                <p style={{marginTop : 300, marginLeft : -75}}>Following</p>

            </div>
        </div>
        
        <div className="ctQZg">   
            <div className="_47KiJ">
                <p style={{marginTop : 360, marginLeft : 1010, fontWeight : 700}}> pratii_s05</p>
                </div>
            </div>


        <div className="ctQZg">   
            <div className="_47KiJ">
                <p style={{marginTop : 400, marginLeft : 1010, fontWeight : 700}}> <pre>Cake Murderer 5 Dec </pre></p>
                
                </div>
            </div>

            <div className="ctQZg">   
            <div className="_47KiJ">
                <button style={{marginTop : 490, marginLeft : 1250, fontWeight : 700, blockSize : 50}}> Following</button>
                <button style={{marginTop : 490, marginLeft : 130, fontWeight : 700, blockSize : 50}}> Message</button>
                </div>
            </div>

            <div className="ctQZg">   
            <div className="_47KiJ">
                <img src={Pratiksha1} style={{marginTop : 550, marginLeft : 1010, fontWeight : 700, blockSize : 200}}></img>
                <img src={Pratiksha2} style={{marginTop : 550, marginLeft : 10, fontWeight : 700, blockSize : 200}}></img>
                
                
                </div>
            </div>        
    
   </div>
  );
 }
}

export default PratikshaProfile;
