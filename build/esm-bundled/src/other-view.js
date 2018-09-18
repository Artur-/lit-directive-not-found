import{createMarker,directive,NodePart,removeNodes,reparentNodes,LitElement,html}from"./my-app.js";const keyMapCache=new WeakMap;function cleanMap(part,key,map){if(!part.startNode.parentNode){map.delete(key)}}function repeat(items,keyFnOrTemplate,template){let keyFn;if(2===arguments.length){template=keyFnOrTemplate}else if(3===arguments.length){keyFn=keyFnOrTemplate}return directive(part=>{let keyMap=keyMapCache.get(part);if(keyMap===void 0){keyMap=new Map;keyMapCache.set(part,keyMap)}const container=part.startNode.parentNode;let index=-1,currentMarker=part.startNode.nextSibling;for(const item of items){let result,key;try{++index;result=template(item,index);key=keyFn?keyFn(item):index}catch(e){console.error(e);continue}let itemPart=keyMap.get(key);if(itemPart===void 0){const marker=createMarker(),endNode=createMarker();container.insertBefore(marker,currentMarker);container.insertBefore(endNode,currentMarker);itemPart=new NodePart(part.templateFactory);itemPart.insertAfterNode(marker);if(key!==void 0){keyMap.set(key,itemPart)}}else if(currentMarker!==itemPart.startNode){const end=itemPart.endNode.nextSibling;if(currentMarker!==end){reparentNodes(container,itemPart.startNode,end,currentMarker)}}else{currentMarker=itemPart.endNode.nextSibling}itemPart.setValue(result);itemPart.commit()}if(currentMarker!==part.endNode){removeNodes(container,currentMarker,part.endNode);keyMap.forEach(cleanMap)}})}var repeat$1={repeat:repeat};class OtherView extends LitElement{render(){return html`
         ${repeat([{id:1,text:"foo"},{id:2,text:"bar"}],i=>i.id,item=>html`
        <span>${item.text}</span>`)}
         `}}window.customElements.define("other-view",OtherView);export{repeat$1 as $repeat,repeat};