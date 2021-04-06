import React from 'react';
import Img from '../atoms/Img.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Title from '../atoms/Title.js';
import { Parallax } from 'react-scroll-parallax';
export const PannelSkill = ({ data , ...props }) => {
    function funcLvl(lvl){
        var lvlTab=[];
        for (let index = 0; index < 10; index++) {
            if (lvl > index) {
                
                lvlTab.push(true);
            }else{
                lvlTab.push(false);
            }
        }
        return lvlTab;
    }

    return(
        <div className="bg-white rounded-lg p-4 pt-1 m-2" >
            <div className="flex align-baseline">
               <Title type="h2" data={data.titlesection}/> 
            </div>
            <div>
                {data.skillLevel.map( data => <div>
                    <div className="flex w-full">
                        <div className="m-2">
                        { <Img type="skill" data={data.imgSkill} />}  
                        </div>
                        <div className="w-9/12 pt-3 flex flex-col ml-2">
                            <Title type="h3" data={data.title}/>
                            <div className="flex items-center justify-between border-gray-300 border-t-2 pt-1 mt-1">
                                {funcLvl(data.lvl).map( data => {
                                    if(data){
                                        return(
                                            <div className="text-red-500">
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                        )
                                    }else{
                                        return(
                                            <div className="text-gray-400">
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                        )
                                    }
                                })}
                            </div>      
                        </div>
                    </div>
                </div>)}
            </div>
        </div> 
    )
    
}
PannelSkill.propTypes = {
 
};
PannelSkill.defaultProps = {
  
};
export default PannelSkill;