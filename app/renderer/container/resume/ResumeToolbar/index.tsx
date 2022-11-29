import React, { useEffect, useState } from 'react';
import './index.less';
import MyScrollBox from '@src/common/components/MyScrollBox';
import {RESUME_TOOLBAR_LIST} from '@common/constants/resume';
import {onAddToolbar,onDeleteToolbar} from "./utils"
function ResumeToolbar() {
  const height =document.body.clientHeight;
  const [addToolbarList,setAddToolbarList] = useState<TSResume.SliderItem[]>([])
  const [unAddToolbarList, setUnAddToolbarList] = useState<TSResume.SliderItem[]>([]);
  // 添加点击实践

  const onAddSliderAction =(moduleToolebar:TSResume.SliderItem)=>{
    const addKeyList = addToolbarList.map((s:TSResume.SliderItem)=>s.key)

    let nextAddToolbarList = onAddToolbar(addToolbarList,moduleToolebar)

    setAddToolbarList(nextAddToolbarList)

    const nextUnAddToolbarList = onDeleteToolbar(unAddToolbarList, moduleToolebar)
    
    setUnAddToolbarList(nextAddToolbarList)
 
  }

  // 删除模块
const onDeleteSliderAction = (moduleSlider: TSResume.SliderItem) => {
  const nextAddSliderList = onDeleteToolbar(addToolbarList, moduleSlider);
  setAddToolbarList(nextAddSliderList);
  const nextUnAddSliderList = onAddToolbar(unAddToolbarList, moduleSlider);
  setUnAddToolbarList(nextUnAddSliderList);
};
 
  useEffect(()=>{
    if(RESUME_TOOLBAR_LIST.length>0) {
      let _addToolbarList:TSResume.SliderItem[] =[];
      let _unAddToolbarList:TSResume.SliderItem[] = [];
      RESUME_TOOLBAR_LIST.forEach((s:TSResume.SliderItem)=>{
        if(s.require) _addToolbarList.push(s)
        if(!s.require) _unAddToolbarList.push(s);

      })
      setAddToolbarList(_addToolbarList)
      setUnAddToolbarList(_unAddToolbarList)
    }
  },[])
  return (<div styleName='slider'>
    <MyScrollBox maxHeight={height-180}>
      {
        !!addToolbarList.length && (
        <div styleName='module'>
          <div styleName='content'>
            {
              addToolbarList.map((toolbar:TSResume.SliderItem)=>{
                return (<div styleName='box' key={toolbar.key}>
                     <p styleName='title'> {toolbar.name}</p>
                     <span>{toolbar.summary}</span>
                </div>)
              })
            }
          </div>
        </div>
        )
      }
      {!!unAddToolbarList.length && (
         <div styleName='module'>
         <div styleName='content'>
           {
             unAddToolbarList.map((toolbar:TSResume.SliderItem)=>{
               return (<div styleName='box' onClick={()=>onAddSliderAction(toolbar)} key={toolbar.key}>
                    <p styleName='title'> {toolbar.name}</p>
                    <span>{toolbar.summary}</span>
               </div>)
             })
           }
         </div>
       </div>
      )}
    </MyScrollBox>
  </div>);
}

export default ResumeToolbar;

