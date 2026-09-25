export class InteractionPrompt{
  constructor(container){
    this.root=document.createElement('div');
    this.root.className='interaction-prompt';
    this.root.hidden=true;
    container.appendChild(this.root);
    this.visible=false;
    this.text='';
  }

  show(target,coarsePointer=false){
    if(!target){this.hide();return;}
    const verb=target.prompt||'INTERACT';
    const prefix=coarsePointer?'USE':'E';
    this.text=prefix+' · '+verb+' '+target.label;
    this.root.textContent=this.text;
    this.root.hidden=false;
    this.visible=true;
  }

  hide(){
    this.root.hidden=true;
    this.visible=false;
    this.text='';
  }

  snapshot(){return Object.freeze({visible:this.visible,text:this.text});}
  dispose(){this.root.remove();}
}
