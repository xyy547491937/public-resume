import React from 'react';
import './index.less';
import * as UseTemplateList from "./UseTemplate"
import MyScrollBox from '@src/common/components/MyScrollBox';

function ResumeContent() {
  const HEADER_ACTIN_HEIGHT = 92;
  const height = document.body.clientHeight;

  return (<MyScrollBox maxHeight={height-HEADER_ACTIN_HEIGHT}>
            <UseTemplateList.TemplateOne/>
          </MyScrollBox>
  );
}
export default ResumeContent;