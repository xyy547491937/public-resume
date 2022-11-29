// 首页模块的入口文件
import React from 'react';
import './index.less';
import { shell } from 'electron';
import { useHistory } from 'react-router';
import Logo from '@assets/logo.webp';
import { isHttpOrHttpsUrl } from '@common/utils/router';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import {useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"

function Root() {
  const dispatch =useDispatch();
  const appName = useSelector((state:any)=>state.globalModel.appName)
  console.log(appName);
  
  // 👇 通过 history.push 进行跳转
  const history = useHistory();
  useEffect(()=>{
    setTimeout(()=>{
      dispatch({
        type:"globalModel/setStore",
        payload: {
          key:"appName",
          values:"xieyayu"
        }
      })
    },3000)
  },[])

  useEffect(()=>{
    console.log("appname="+appName);
    
  },[appName])
// 在方法调用上
const onRouterToLink = (router: TSRouter.Item) => {
  if (isHttpOrHttpsUrl(router.url)) {
    shell.openExternal(router.url);
  } else {
    history.push(router.url)
  }
};
  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)} >
                {router.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Root;