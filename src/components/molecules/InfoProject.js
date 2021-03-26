import React from 'react';
import PropTypes from 'prop-types';
import Title from '../atoms/Title.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faBusinessTime} from '@fortawesome/free-solid-svg-icons';
import SlideShow from './SlideShow.js';
import Button from '../atoms/Button.js';
const CloseDiv = styled.div`
 
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #fff;
    border-radius: 10px;
    transform-origin: 15px;
    &:nth-child(1) {
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;

export const InfoProject = ({ data , fClosePopUp, ...props }) => {

if (data) {
    return(
        <div className="bg-white my-2 w-full">
            <div className="flex justify-between">
                <div className="mx-2 items-center flex ">
                    <Title type="h2" data={data.title}/>
                </div>
                <div onClick={fClosePopUp} className=" float-right cursor-pointer h-10 m-1 mr-3">
                    <CloseDiv className="transform translate-y-4">
                        <div />
                        <div />
                    </CloseDiv>
                </div>
            </div>
            
            <div className="">
              <SlideShow data={data.dataProject.carouselImg}/>
            </div>
            <div className="sm:flex justify-around ml-auto mr-auto mt-2">
                <div className="mx-2 w-full">
                    <div className="border-gray-600 border-b pb-1 ">
                        <Title type="h2" data={"Travail réalisé sur le projet"} />
                        <div>
                            <p>{data.dataProject.desc}</p>
                        </div>
                    </div>
                    <ul>
                        {data.dataProject.tabWork.map( data => <li className="flex items-center my-1"><FontAwesomeIcon className="m-1" icon={faBusinessTime}/> <p>{data}</p> </li>)}
                    </ul>
                </div>
                <div className="mx-2 sm:w-8/12 ">
                    <Title type="h2" data={"Infos du projet"} />
                    <div className="flex items-center border-gray-600 border-t mt-1">
                        <div className="m-1 text-red-900">
                           <FontAwesomeIcon icon={faTable} /> 
                        </div>
                        <div className="text-gray-500">
                             <Title type={"h3"} data={"Date :"}/>
                        </div>
                        <div className="m-1">
                           <p className="font-semibold">{data.dataProject.date} </p>
                        </div>
                        
                    </div>
                    <div className="flex items-center">
                        <div className="m-1 text-red-900">
                           <FontAwesomeIcon icon={faTable} /> 
                        </div>
                        <div className="text-gray-500">
                            <Title type={"h3"} data={"Type de Projet :"}/>
                        </div>
                        <div className="m-1">
                            <p className="font-semibold">{data.subTitle}</p>
                        </div>
                        
                    </div>
                    <div className="my-2">
                        <Title type="h2" data="Techologies utilisées"/>
                        <div className=" border-gray-600 border-t flex flex-wrap justify-around mt-1">
                            {(data.dataProject.framWork)? 
                                <div>
                                    <Title type="h3" data="FramWorck"/>
                                    <lu className="flex flex-wrap">
                                        {data.dataProject.framWork.map( data => <li className="p-1 m-1 bg-red-500 text-white"><strong>{data}</strong></li>)}
                                    </lu>
                                </div>
                            :""}
                            {(data.dataProject.cms)? 
                                <div>
                                    <Title type="h3" data="CMS"/>
                                    <lu className="flex flex-wrap">
                                        {data.dataProject.cms.map( data => <li className="p-1 m-1 bg-red-500 text-white"><strong>{data}</strong></li>)}
                                    </lu>
                                </div>
                            :""}
                            {(data.dataProject.skill)? 
                                <div>
                                    <Title type="h3" data="Language"/>
                                    <lu className="flex flex-wrap">
                                        {data.dataProject.skill.map( data => <li className="p-1 m-1 bg-red-500 text-white"><strong>{data}</strong></li>)}
                                    </lu>
                                </div>
                            :""} 
                        </div>
                        
                    </div>
                    <div className="border-gray-600 border-t flex flex-wrap justify-around py-3 ">
                        {(data.dataProject.link.linkWebSite)? <Button data={data.dataProject.link.linkWebSite}/> : ""}
                        {(data.dataProject.link.linkAuthor)? <Button data={data.dataProject.link.linkAuthor}/> : ""} 
                    </div>
                </div>

            </div>
        </div>
    )
}else{
    return <div></div>
}
}

InfoProject.propTypes = {
 
};
InfoProject.defaultProps = {
  
};
export default InfoProject;