import React, { useEffect } from 'react';
import './index.less';
import * as UseTemplateList from "./UseTemplate"
import MyScrollBox from '@src/common/components/MyScrollBox';

import messager, {MESSAGE_EVENT_NAME_MAPS} from '@src/common/messager';
function ResumeContent() {
  useEffect(()=>{
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL,onReceive)
    return ()=>{
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL,onReceive)
    }
  },[])
  const onReceive =(e:any)=>{
    messager.receive(e,(data:any)=>{
      console.log("发布订阅，传参值伪",data);
      
    })
  }
  const HEADER_ACTIN_HEIGHT = 92;
  const height = document.body.clientHeight;

  return (<MyScrollBox maxHeight={height-HEADER_ACTIN_HEIGHT}>
            <UseTemplateList.TemplateOne/>
          </MyScrollBox>
  );
}
export default ResumeContent;