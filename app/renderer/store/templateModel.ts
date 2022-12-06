export interface TStore {
  resumeToolbarKeys:string[];
  templateList:TSTemplate.Item[];
  selectTemplate:Partial<TSTemplate.Item> 
}

const templateModel:TSRcReduxModel.Props<TStore> = {
  namespace:"templateModel",
  openSeamlessImmutable:true,
  state: {
    resumeToolbarKeys:[],
    templateList:[],
    selectTemplate:{
      templateId:'',
      templateName:"",
      templateCover:"",
      templateIndex:-1
    }
  }
}

export default templateModel